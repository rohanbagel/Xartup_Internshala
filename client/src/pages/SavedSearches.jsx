import { useNavigate } from 'react-router-dom'
import { Play, Trash2, Search } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { formatDate } from '../lib/utils'

export default function SavedSearches() {
  const { state, dispatch } = useApp()
  const navigate = useNavigate()

  const handleRun = (search) => {
    const params = new URLSearchParams()
    if (search.query) params.set('q', search.query)
    if (search.filters?.industries?.length) params.set('industries', search.filters.industries.join(','))
    if (search.filters?.stages?.length) params.set('stages', search.filters.stages.join(','))
    navigate(`/companies?${params.toString()}`)
  }

  const handleDelete = (id, name) => {
    dispatch({ type: 'DELETE_SEARCH', payload: id })
    dispatch({ type: 'ADD_TOAST', payload: { type: 'success', message: `Deleted "${name}"` } })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Saved Searches</h1>
        <p className="text-sm text-gray-500 mt-1">Re-run your saved search queries and filters</p>
      </div>

      {state.savedSearches.length === 0 ? (
        <div className="card p-12 text-center">
          <div className="text-4xl mb-3">🔍</div>
          <h3 className="text-sm font-medium text-gray-900">No saved searches</h3>
          <p className="text-xs text-gray-500 mt-1">Go to Companies, apply filters, and click "Save Search" to save.</p>
          <button
            onClick={() => navigate('/companies')}
            className="btn-primary btn-sm mt-4"
          >
            <Search className="w-4 h-4" /> Browse Companies
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {state.savedSearches.map(search => (
            <div key={search.id} className="card p-4 flex items-center gap-4 group hover:border-brand-300 transition-all">
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-gray-900">{search.name}</h3>
                <div className="flex flex-wrap gap-2 mt-1.5">
                  {search.query && (
                    <span className="badge-gray">
                      Query: "{search.query}"
                    </span>
                  )}
                  {search.filters?.industries?.map(ind => (
                    <span key={ind} className="badge-blue">{ind}</span>
                  ))}
                  {search.filters?.stages?.map(st => (
                    <span key={st} className="badge-purple">{st}</span>
                  ))}
                  {search.filters?.empRange && (
                    <span className="badge-amber">{search.filters.empRange.label} employees</span>
                  )}
                </div>
                <p className="text-xs text-gray-400 mt-1.5">Saved {formatDate(search.createdAt)}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => handleRun(search)}
                  className="btn-primary btn-sm"
                >
                  <Play className="w-3 h-3" /> Run
                </button>
                <button
                  onClick={() => handleDelete(search.id, search.name)}
                  className="p-1.5 opacity-0 group-hover:opacity-100 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded transition-all"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
