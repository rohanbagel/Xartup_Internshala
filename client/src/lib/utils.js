const API_BASE = import.meta.env.VITE_API_URL || ''

export async function apiGet(path) {
  const res = await fetch(`${API_BASE}${path}`)
  if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`)
  return res.json()
}

export async function apiPost(path, body) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: res.statusText }))
    throw new Error(err.error || `POST ${path} failed: ${res.status}`)
  }
  return res.json()
}

export function exportToCSV(data, filename) {
  if (!data.length) return
  const headers = Object.keys(data[0])
  const csv = [
    headers.join(','),
    ...data.map(row =>
      headers.map(h => {
        const val = row[h]
        const str = typeof val === 'object' ? JSON.stringify(val) : String(val ?? '')
        return `"${str.replace(/"/g, '""')}"`
      }).join(',')
    ),
  ].join('\n')
  downloadFile(csv, `${filename}.csv`, 'text/csv')
}

export function exportToJSON(data, filename) {
  downloadFile(JSON.stringify(data, null, 2), `${filename}.json`, 'application/json')
}

function downloadFile(content, filename, type) {
  const blob = new Blob([content], { type })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

export function formatDate(dateStr) {
  if (!dateStr) return '—'
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export function getStageColor(stage) {
  const map = {
    'Pre-Seed': 'badge-gray',
    'Seed': 'badge-green',
    'Series A': 'badge-blue',
    'Series B': 'badge-purple',
    'Series C': 'badge-amber',
    'Series D': 'badge-red',
    'Series E': 'badge-red',
    'Series F': 'badge-red',
    'Acquired': 'badge-gray',
  }
  return map[stage] || 'badge-gray'
}

export function getSignalIcon(type) {
  const map = {
    funding: '💰',
    hiring: '👥',
    product: '🚀',
    partnership: '🤝',
    growth: '📈',
  }
  return map[type] || '📌'
}

export const INDUSTRIES = [
  'AI / ML', 'AI Infrastructure', 'Developer Tools', 'Data & Analytics',
  'Analytics', 'Fintech', 'HR Tech', 'Productivity', 'SaaS',
  'Automation', 'CRM', 'Media Tech', 'Ecommerce', 'Communications',
]

export const STAGES = ['Seed', 'Series A', 'Series B', 'Series C', 'Series D', 'Series E', 'Series F']

export const EMPLOYEE_RANGES = [
  { label: '1-10', min: 1, max: 10 },
  { label: '11-50', min: 11, max: 50 },
  { label: '51-200', min: 51, max: 200 },
  { label: '200+', min: 200, max: Infinity },
]
