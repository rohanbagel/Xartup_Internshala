import { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Plus, Trash2, Download, ArrowLeft, X } from 'lucide-react'
import { useApp } from '../context/AppContext'
import mockCompanies from '../data/mockCompanies'
import { exportToCSV, exportToJSON, getStageColor, formatDate } from '../lib/utils'
import Modal from '../components/Modal'

export default function Lists() {
  const { id } = useParams()

  if (id) return <ListDetail listId={id} />
  return <ListsIndex />
}

function ListsIndex() {
  const { state, dispatch } = useApp()
  const [createModal, setCreateModal] = useState(false)
  const [newName, setNewName] = useState('')
  const [newDesc, setNewDesc] = useState('')
  const navigate = useNavigate()

  const handleCreate = () => {
    if (!newName.trim()) return
    dispatch({ type: 'CREATE_LIST', payload: { name: newName.trim(), description: newDesc.trim() } })
    dispatch({ type: 'ADD_TOAST', payload: { type: 'success', message: `Created "${newName.trim()}"` } })
    setNewName('')
    setNewDesc('')
    setCreateModal(false)
  }

  const handleDelete = (e, listId, listName) => {
    e.stopPropagation()
    if (confirm(`Delete "${listName}"?`)) {
      dispatch({ type: 'DELETE_LIST', payload: listId })
      dispatch({ type: 'ADD_TOAST', payload: { type: 'success', message: `Deleted "${listName}"` } })
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Lists</h1>
          <p className="text-sm text-gray-500 mt-1">Organize companies into custom lists</p>
        </div>
        <button onClick={() => setCreateModal(true)} className="btn-primary btn-sm">
          <Plus className="w-4 h-4" /> New List
        </button>
      </div>

      {state.lists.length === 0 ? (
        <div className="card p-12 text-center">
          <div className="text-4xl mb-3">📋</div>
          <h3 className="text-sm font-medium text-gray-900">No lists yet</h3>
          <p className="text-xs text-gray-500 mt-1">Create a list to organize companies you're tracking.</p>
          <button onClick={() => setCreateModal(true)} className="btn-primary btn-sm mt-4">
            <Plus className="w-4 h-4" /> Create your first list
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {state.lists.map(list => (
            <div
              key={list.id}
              onClick={() => navigate(`/lists/${list.id}`)}
              className="card p-4 cursor-pointer hover:border-brand-300 hover:shadow-md transition-all group"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-base font-semibold text-gray-900 group-hover:text-brand-700 transition-colors">{list.name}</h3>
                <button
                  onClick={(e) => handleDelete(e, list.id, list.name)}
                  className="p-1 opacity-0 group-hover:opacity-100 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded transition-all"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              {list.description && (
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">{list.description}</p>
              )}
              <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
                <span>{list.companyIds.length} companies</span>
                <span>Created {formatDate(list.createdAt)}</span>
              </div>
              {/* Company avatars preview */}
              {list.companyIds.length > 0 && (
                <div className="flex -space-x-2 mt-3">
                  {list.companyIds.slice(0, 5).map(cId => {
                    const c = mockCompanies.find(co => co.id === cId)
                    return c ? (
                      <div key={cId} className="w-7 h-7 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center text-[10px] font-bold border-2 border-white">
                        {c.logo}
                      </div>
                    ) : null
                  })}
                  {list.companyIds.length > 5 && (
                    <div className="w-7 h-7 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center text-[10px] font-medium border-2 border-white">
                      +{list.companyIds.length - 5}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Create Modal */}
      <Modal open={createModal} onClose={() => setCreateModal(false)} title="Create New List">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="e.g., Top AI Startups"
              className="input mt-1"
              autoFocus
              onKeyDown={(e) => e.key === 'Enter' && handleCreate()}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Description (optional)</label>
            <textarea
              value={newDesc}
              onChange={(e) => setNewDesc(e.target.value)}
              placeholder="What is this list for?"
              className="input mt-1 min-h-[60px] resize-none"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button onClick={() => setCreateModal(false)} className="btn-secondary">Cancel</button>
            <button onClick={handleCreate} className="btn-primary" disabled={!newName.trim()}>Create List</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

function ListDetail({ listId }) {
  const { state, dispatch } = useApp()
  const navigate = useNavigate()
  const list = state.lists.find(l => l.id === listId)

  if (!list) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-semibold text-gray-900">List not found</h2>
        <Link to="/lists" className="text-brand-600 text-sm mt-2 inline-block hover:underline">← Back to lists</Link>
      </div>
    )
  }

  const companies = list.companyIds
    .map(id => mockCompanies.find(c => c.id === id))
    .filter(Boolean)

  const handleExport = (format) => {
    const data = companies.map(c => ({
      name: c.name,
      industry: c.industry,
      stage: c.stage,
      location: `${c.location.city}, ${c.location.country}`,
      website: c.website,
      employees: c.employeeCount,
      funding: c.totalFunding,
      founded: c.foundedYear,
    }))
    if (format === 'csv') exportToCSV(data, list.name)
    else exportToJSON(data, list.name)
    dispatch({ type: 'ADD_TOAST', payload: { type: 'success', message: `Exported as ${format.toUpperCase()}` } })
  }

  const handleRemove = (companyId) => {
    dispatch({ type: 'REMOVE_FROM_LIST', payload: { listId, companyId } })
    dispatch({ type: 'ADD_TOAST', payload: { type: 'success', message: 'Removed from list' } })
  }

  return (
    <div className="space-y-6">
      <Link to="/lists" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to lists
      </Link>

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{list.name}</h1>
          {list.description && <p className="text-sm text-gray-500 mt-1">{list.description}</p>}
          <p className="text-xs text-gray-400 mt-1">{companies.length} companies</p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => handleExport('csv')} className="btn-secondary btn-sm">
            <Download className="w-4 h-4" /> CSV
          </button>
          <button onClick={() => handleExport('json')} className="btn-secondary btn-sm">
            <Download className="w-4 h-4" /> JSON
          </button>
        </div>
      </div>

      {companies.length === 0 ? (
        <div className="card p-12 text-center">
          <div className="text-4xl mb-3">📭</div>
          <h3 className="text-sm font-medium text-gray-900">This list is empty</h3>
          <p className="text-xs text-gray-500 mt-1">Browse companies and save them to this list.</p>
          <Link to="/companies" className="btn-primary btn-sm mt-4 inline-flex">
            Browse Companies
          </Link>
        </div>
      ) : (
        <div className="card overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50/50">
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Company</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Industry</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Stage</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Location</th>
                <th className="px-4 py-3 w-10"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {companies.map(company => (
                <tr
                  key={company.id}
                  onClick={() => navigate(`/companies/${company.id}`)}
                  className="hover:bg-gray-50/50 cursor-pointer transition-colors"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center text-xs font-bold shrink-0">
                        {company.logo}
                      </div>
                      <div className="text-sm font-medium text-gray-900">{company.name}</div>
                    </div>
                  </td>
                  <td className="px-4 py-3"><span className="badge-blue">{company.industry}</span></td>
                  <td className="px-4 py-3"><span className={getStageColor(company.stage)}>{company.stage}</span></td>
                  <td className="px-4 py-3 text-sm text-gray-600">{company.location.city}</td>
                  <td className="px-4 py-3" onClick={e => e.stopPropagation()}>
                    <button
                      onClick={() => handleRemove(company.id)}
                      className="p-1.5 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
