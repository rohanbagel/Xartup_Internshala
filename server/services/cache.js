import { createClient } from '@supabase/supabase-js'

let supabase = null

function getSupabase() {
  if (!supabase && process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_KEY) {
    supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
  }
  return supabase
}

// In-memory fallback cache when Supabase is not configured
const memoryCache = new Map()
const CACHE_TTL = 24 * 60 * 60 * 1000 // 24 hours

/**
 * Check if we have a cached enrichment for this domain.
 * Returns cached data or null.
 */
export async function getCachedEnrichment(domain) {
  const sb = getSupabase()

  if (sb) {
    try {
      const { data, error } = await sb
        .from('enrichment_cache')
        .select('*')
        .eq('company_domain', domain)
        .single()

      if (error || !data) return null

      // Check TTL
      const age = Date.now() - new Date(data.updated_at).getTime()
      if (age > CACHE_TTL) return null

      return data.enrichment_data
    } catch {
      return null
    }
  }

  // Fallback: in-memory cache
  const cached = memoryCache.get(domain)
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.data
  }
  return null
}

/**
 * Store enrichment data in cache.
 */
export async function setCachedEnrichment(domain, data) {
  const sb = getSupabase()

  if (sb) {
    try {
      await sb
        .from('enrichment_cache')
        .upsert({
          company_domain: domain,
          enrichment_data: data,
          scraped_urls: data.sources?.map(s => s.url) || [],
          updated_at: new Date().toISOString(),
        }, { onConflict: 'company_domain' })
    } catch (err) {
      console.warn('Failed to cache to Supabase:', err.message)
    }
  }

  // Always cache in memory too
  memoryCache.set(domain, { data, timestamp: Date.now() })
}
