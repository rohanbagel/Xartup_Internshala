import Groq from 'groq-sdk'

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY })

/**
 * Extract structured data from scraped website content using Groq/Llama.
 * Returns { summary, whatTheyDo, keywords, derivedSignals }
 */
export async function extractFields(scrapedPages) {
  const combinedContent = scrapedPages
    .map(p => `--- Page: ${p.url} ---\n${p.markdown}`)
    .join('\n\n')
    .slice(0, 15000) // Keep within token limits

  const prompt = `You are an expert startup analyst. Analyze the following website content scraped from a company's public website and extract structured information.

Website content:
${combinedContent}

Extract the following and return ONLY valid JSON (no markdown, no backticks):
{
  "summary": "1-2 sentence summary of what this company does",
  "whatTheyDo": ["3-6 bullet points describing their products/services"],
  "keywords": ["5-10 relevant keywords/tags"],
  "derivedSignals": ["2-4 signals inferred from the content, e.g., 'Active hiring - careers page present', 'Regular blog updates - active content marketing', 'Changelog present - shipping frequently', 'Enterprise focus - mentions SOC2/GDPR'"]
}

Be specific and factual. Only include signals you can actually infer from the content.`

  const completion = await groq.chat.completions.create({
    model: 'llama-3.3-70b-versatile',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.3,
    max_tokens: 1500,
    response_format: { type: 'json_object' },
  })

  const text = completion.choices[0]?.message?.content
  if (!text) throw new Error('No response from Groq')

  try {
    return JSON.parse(text)
  } catch {
    // Try to extract JSON from the response
    const match = text.match(/\{[\s\S]*\}/)
    if (match) return JSON.parse(match[0])
    throw new Error('Failed to parse Groq response as JSON')
  }
}

/**
 * Score a company against an investment thesis.
 * Returns { score, explanation }
 */
export async function scoreThesis(enrichmentData, thesis) {
  const prompt = `You are a VC analyst. Score how well this company matches the investment thesis.

Company data:
- Summary: ${enrichmentData.summary}
- What they do: ${enrichmentData.whatTheyDo?.join('; ')}
- Keywords: ${enrichmentData.keywords?.join(', ')}
- Signals: ${enrichmentData.derivedSignals?.join('; ')}

Investment thesis: "${thesis}"

Return ONLY valid JSON:
{
  "score": <0-100 integer>,
  "explanation": "2-3 sentence explanation of why this score"
}

Be honest and critical. Only give high scores (70+) for strong matches.`

  const completion = await groq.chat.completions.create({
    model: 'llama-3.3-70b-versatile',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.3,
    max_tokens: 300,
    response_format: { type: 'json_object' },
  })

  const text = completion.choices[0]?.message?.content
  if (!text) return { score: 0, explanation: 'Could not score' }

  try {
    return JSON.parse(text)
  } catch {
    return { score: 0, explanation: 'Could not parse scoring response' }
  }
}
