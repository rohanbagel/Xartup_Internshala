import { Router } from 'express'
import { scrapeWebsite } from '../services/firecrawl.js'
import { extractFields, scoreThesis } from '../services/groq.js'
import { getCachedEnrichment, setCachedEnrichment } from '../services/cache.js'

const router = Router()

// Default thesis (can be customized per request)
const DEFAULT_THESIS = 'We invest in early-stage B2B SaaS and AI/ML companies with strong technical founding teams, targeting large enterprise markets.'

router.post('/enrich', async (req, res) => {
  try {
    const { website, companyId, thesis } = req.body

    if (!website) {
      return res.status(400).json({ error: 'website URL is required' })
    }

    // Extract domain for caching
    let domain
    try {
      domain = new URL(website.startsWith('http') ? website : `https://${website}`).hostname
    } catch {
      return res.status(400).json({ error: 'Invalid website URL' })
    }

    console.log(`\n🔍 Enriching: ${domain}`)

    // 1. Check cache
    const cached = await getCachedEnrichment(domain)
    if (cached) {
      console.log(`  ✅ Cache hit for ${domain}`)
      return res.json(cached)
    }

    // 2. Verify API keys are present
    if (!process.env.FIRECRAWL_API_KEY) {
      return res.status(500).json({ error: 'FIRECRAWL_API_KEY not configured. See .env.example for setup.' })
    }
    if (!process.env.GROQ_API_KEY) {
      return res.status(500).json({ error: 'GROQ_API_KEY not configured. See .env.example for setup.' })
    }

    // 3. Scrape website
    console.log(`  📡 Scraping ${website}...`)
    const scrapedPages = await scrapeWebsite(website)
    console.log(`  ✅ Scraped ${scrapedPages.length} pages`)

    // 4. Extract structured fields via Groq
    console.log(`  🤖 Extracting fields via Groq...`)
    const extracted = await extractFields(scrapedPages)
    console.log(`  ✅ Extracted: ${extracted.keywords?.length || 0} keywords, ${extracted.derivedSignals?.length || 0} signals`)

    // 5. Score against thesis
    console.log(`  📊 Scoring against thesis...`)
    const thesisResult = await scoreThesis(extracted, thesis || DEFAULT_THESIS)

    // 6. Build response
    const enrichmentData = {
      summary: extracted.summary || 'No summary available.',
      whatTheyDo: extracted.whatTheyDo || [],
      keywords: extracted.keywords || [],
      derivedSignals: extracted.derivedSignals || [],
      thesisScore: thesisResult.score,
      thesisExplanation: thesisResult.explanation,
      sources: scrapedPages.map(p => ({ url: p.url, scrapedAt: p.scrapedAt })),
      enrichedAt: new Date().toISOString(),
    }

    // 7. Cache the result
    await setCachedEnrichment(domain, enrichmentData)
    console.log(`  💾 Cached enrichment for ${domain}`)

    res.json(enrichmentData)
  } catch (err) {
    console.error('Enrichment error:', err)
    res.status(500).json({ error: err.message || 'Enrichment failed' })
  }
})

export default router
