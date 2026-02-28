import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import mockCompanies from '../data/mockCompanies'

export default function SearchModal({ open, onClose }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (open) {
      setQuery('')
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, onClose])

  if (!open) return null

  const results = query.length > 0
    ? mockCompanies.filter(c =>
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.description.toLowerCase().includes(query.toLowerCase()) ||
        c.industry.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8)
    : []

  const handleSelect = (company) => {
    navigate(`/companies/${company.id}`)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]" onClick={onClose}>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200">
          <Search className="w-5 h-5 text-gray-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search companies by name, industry, or description..."
            className="flex-1 text-sm bg-transparent outline-none placeholder:text-gray-400"
          />
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-md">
            <X className="w-4 h-4 text-gray-400" />
          </button>
        </div>
        {results.length > 0 && (
          <div className="max-h-80 overflow-y-auto py-2">
            {results.map((company) => (
              <button
                key={company.id}
                onClick={() => handleSelect(company)}
                className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors text-left"
              >
                <div className="w-9 h-9 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center text-xs font-bold shrink-0">
                  {company.logo}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium text-gray-900 truncate">{company.name}</div>
                  <div className="text-xs text-gray-500 truncate">{company.industry} · {company.stage} · {company.location.city}</div>
                </div>
              </button>
            ))}
          </div>
        )}
        {query.length > 0 && results.length === 0 && (
          <div className="px-4 py-8 text-center text-sm text-gray-400">
            No companies found for "{query}"
          </div>
        )}
        {query.length === 0 && (
          <div className="px-4 py-6 text-center text-sm text-gray-400">
            Start typing to search companies...
          </div>
        )}
      </div>
    </div>
  )
}
