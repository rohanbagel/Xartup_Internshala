import FirecrawlApp from '@mendable/firecrawl-js'

const firecrawl = new FirecrawlApp({ apiKey: process.env.FIRECRAWL_API_KEY })

/**
 * Scrape a company website — fetches homepage and tries common sub-pages.
 * Returns array of { url, markdown, scrapedAt }
 */
export async function scrapeWebsite(baseUrl) {
  // Normalize URL
  let url = baseUrl
  if (!url.startsWith('http')) url = `https://${url}`
  url = url.replace(/\/$/, '')

  const pagesToTry = [
    url,
    `${url}/about`,
    `${url}/careers`,
    `${url}/blog`,
  ]

  const results = []

  for (const pageUrl of pagesToTry) {
    try {
      console.log(`  Scraping: ${pageUrl}`)
      const response = await firecrawl.scrapeUrl(pageUrl, {
        formats: ['markdown'],
        timeout: 15000,
      })

      if (response.success && response.markdown) {
        results.push({
          url: pageUrl,
          markdown: response.markdown.slice(0, 8000), // Limit per-page content
          scrapedAt: new Date().toISOString(),
        })
      }
    } catch (err) {
      console.log(`  Skipped ${pageUrl}: ${err.message}`)
      // Sub-pages may 404, that's fine
    }
  }

  if (results.length === 0) {
    throw new Error(`Could not scrape any pages from ${baseUrl}`)
  }

  return results
}
