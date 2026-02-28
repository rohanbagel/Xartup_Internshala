import { useState, useMemo } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Search, Filter, ChevronUp, ChevronDown, BookmarkPlus, X, Download } from 'lucide-react'
import { useDebounce } from '../hooks/useDebounce'
import { useApp } from '../context/AppContext'
import mockCompanies from '../data/mockCompanies'
import { INDUSTRIES, STAGES, EMPLOYEE_RANGES, getStageColor, formatDate, exportToCSV } from '../lib/utils'
import SaveToListModal from '../components/SaveToListModal'
import Modal from '../components/Modal'

export default function Companies() {
  const navigate = useNavigate()
  const { dispatch } = useApp()
  const [searchParams] = useSearchParams()

  // Read initial state from URL params (for saved search re-runs)
  const initialQuery = searchParams.get('q') || ''
  const initialIndustries = searchParams.get('industries')?.split(',').filter(Boolean) || []
  const initialStages = searchParams.get('stages')?.split(',').filter(Boolean) || []

  const [query, setQuery] = useState(initialQuery)
  const [selectedIndustries, setSelectedIndustries] = useState(initialIndustries)
  const [selectedStages, setSelectedStages] = useState(initialStages)
  const [selectedEmpRange, setSelectedEmpRange] = useState(null)
  const [sortField, setSortField] = useState('name')
  const [sortDir, setSortDir] = useState('asc')
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(10)
  const [filtersOpen, setFiltersOpen] = useState(true)
  const [selectedIds, setSelectedIds] = useState([])
  const [saveModalOpen, setSaveModalOpen] = useState(false)
  const [bulkListModal, setBulkListModal] = useState(false)
  const [saveSearchModal, setSaveSearchModal] = useState(false)
  const [saveSearchName, setSaveSearchName] = useState('')

  const debouncedQuery = useDebounce(query)

  const filtered = useMemo(() => {
    let data = [...mockCompanies]

    // Search
    if (debouncedQuery) {
      const q = debouncedQuery.toLowerCase()
      data = data.filter(c =>
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.tags.some(t => t.toLowerCase().includes(q))
      )
    }

    // Industry filter
    if (selectedIndustries.length > 0) {
      data = data.filter(c => selectedIndustries.includes(c.industry))
    }

    // Stage filter
    if (selectedStages.length > 0) {
      data = data.filter(c => selectedStages.includes(c.stage))
    }

    // Employee range
    if (selectedEmpRange) {
      data = data.filter(c =>
        c.employeeCount >= selectedEmpRange.min && c.employeeCount <= selectedEmpRange.max
      )
    }

    // Sort
    data.sort((a, b) => {
      let aVal = a[sortField]
      let bVal = b[sortField]
      if (sortField === 'location') { aVal = a.location.city; bVal = b.location.city }
      if (typeof aVal === 'string') aVal = aVal.toLowerCase()
      if (typeof bVal === 'string') bVal = bVal.toLowerCase()
      if (aVal < bVal) return sortDir === 'asc' ? -1 : 1
      if (aVal > bVal) return sortDir === 'asc' ? 1 : -1
      return 0
    })

    return data
  }, [debouncedQuery, selectedIndustries, selectedStages, selectedEmpRange, sortField, sortDir])

  const totalPages = Math.ceil(filtered.length / perPage)
  const paginated = filtered.slice((page - 1) * perPage, page * perPage)

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDir('asc')
    }
  }

  const toggleIndustry = (ind) => {
    setSelectedIndustries(prev =>
      prev.includes(ind) ? prev.filter(i => i !== ind) : [...prev, ind]
    )
    setPage(1)
  }

  const toggleStage = (st) => {
    setSelectedStages(prev =>
      prev.includes(st) ? prev.filter(s => s !== st) : [...prev, st]
    )
    setPage(1)
  }

  const toggleSelect = (id) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  const toggleAll = () => {
    if (selectedIds.length === paginated.length) {
      setSelectedIds([])
    } else {
      setSelectedIds(paginated.map(c => c.id))
    }
  }

  const clearFilters = () => {
    setSelectedIndustries([])
    setSelectedStages([])
    setSelectedEmpRange(null)
    setQuery('')
    setPage(1)
  }

  const activeFilterCount = selectedIndustries.length + selectedStages.length + (selectedEmpRange ? 1 : 0)

  const handleSaveSearch = () => {
    if (!saveSearchName.trim()) return
    dispatch({
      type: 'SAVE_SEARCH',
      payload: {
        name: saveSearchName.trim(),
        query: debouncedQuery,
        filters: {
          industries: selectedIndustries,
          stages: selectedStages,
          empRange: selectedEmpRange,
        },
      },
    })
    dispatch({ type: 'ADD_TOAST', payload: { type: 'success', message: 'Search saved!' } })
    setSaveSearchModal(false)
    setSaveSearchName('')
  }

  const handleExportSelected = () => {
    const selected = mockCompanies.filter(c => selectedIds.includes(c.id))
    const exportData = selected.map(c => ({
      name: c.name,
      industry: c.industry,
      stage: c.stage,
      location: `${c.location.city}, ${c.location.country}`,
      website: c.website,
      employees: c.employeeCount,
      funding: c.totalFunding,
      founded: c.foundedYear,
    }))
    exportToCSV(exportData, 'selected-companies')
    dispatch({ type: 'ADD_TOAST', payload: { type: 'success', message: `Exported ${selected.length} companies` } })
  }

  const SortIcon = ({ field }) => {
    if (sortField !== field) return <ChevronUp className="w-3 h-3 text-gray-300" />
    return sortDir === 'asc'
      ? <ChevronUp className="w-3 h-3 text-brand-600" />
      : <ChevronDown className="w-3 h-3 text-brand-600" />
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Companies</h1>
          <p className="text-sm text-gray-500 mt-1">{filtered.length} companies found</p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setSaveSearchModal(true)} className="btn-secondary btn-sm">
            <BookmarkPlus className="w-4 h-4" />
            Save Search
          </button>
        </div>
      </div>

      {/* Search + Filter Toggle */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setPage(1) }}
            placeholder="Search by name, description, or tags..."
            className="input pl-10"
          />
        </div>
        <button
          onClick={() => setFiltersOpen(!filtersOpen)}
          className={`btn-secondary btn-sm relative ${filtersOpen ? 'bg-brand-50 text-brand-700 border-brand-200' : ''}`}
        >
          <Filter className="w-4 h-4" />
          Filters
          {activeFilterCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-brand-600 text-white text-[10px] rounded-full flex items-center justify-center">
              {activeFilterCount}
            </span>
          )}
        </button>
        {activeFilterCount > 0 && (
          <button onClick={clearFilters} className="btn-ghost btn-sm text-red-500">
            <X className="w-3 h-3" /> Clear
          </button>
        )}
      </div>

      {/* Filters Panel */}
      {filtersOpen && (
        <div className="card p-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Industry */}
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Industry</label>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {INDUSTRIES.map(ind => (
                  <button
                    key={ind}
                    onClick={() => toggleIndustry(ind)}
                    className={`px-2.5 py-1 text-xs rounded-full border transition-colors ${
                      selectedIndustries.includes(ind)
                        ? 'bg-brand-600 text-white border-brand-600'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {ind}
                  </button>
                ))}
              </div>
            </div>

            {/* Stage */}
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Stage</label>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {STAGES.map(st => (
                  <button
                    key={st}
                    onClick={() => toggleStage(st)}
                    className={`px-2.5 py-1 text-xs rounded-full border transition-colors ${
                      selectedStages.includes(st)
                        ? 'bg-brand-600 text-white border-brand-600'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Employee Count */}
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Employees</label>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {EMPLOYEE_RANGES.map(range => (
                  <button
                    key={range.label}
                    onClick={() => setSelectedEmpRange(selectedEmpRange?.label === range.label ? null : range)}
                    className={`px-2.5 py-1 text-xs rounded-full border transition-colors ${
                      selectedEmpRange?.label === range.label
                        ? 'bg-brand-600 text-white border-brand-600'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bulk Actions */}
      {selectedIds.length > 0 && (
        <div className="card px-4 py-3 flex items-center gap-3 bg-brand-50 border-brand-200">
          <span className="text-sm font-medium text-brand-700">{selectedIds.length} selected</span>
          <button onClick={() => setBulkListModal(true)} className="btn-primary btn-sm">Add to List</button>
          <button onClick={handleExportSelected} className="btn-secondary btn-sm">
            <Download className="w-3 h-3" /> Export CSV
          </button>
          <button onClick={() => setSelectedIds([])} className="btn-ghost btn-sm ml-auto">Clear</button>
        </div>
      )}

      {/* Table */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50/50">
                <th className="w-10 px-4 py-3">
                  <input
                    type="checkbox"
                    checked={selectedIds.length === paginated.length && paginated.length > 0}
                    onChange={toggleAll}
                    className="w-4 h-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
                  />
                </th>
                {[
                  { field: 'name', label: 'Company' },
                  { field: 'industry', label: 'Industry' },
                  { field: 'stage', label: 'Stage' },
                  { field: 'location', label: 'Location' },
                  { field: 'employeeCount', label: 'Employees' },
                  { field: 'lastRoundDate', label: 'Last Round' },
                ].map(col => (
                  <th
                    key={col.field}
                    onClick={() => handleSort(col.field)}
                    className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-700 select-none"
                  >
                    <span className="inline-flex items-center gap-1">
                      {col.label}
                      <SortIcon field={col.field} />
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {paginated.map((company) => (
                <tr
                  key={company.id}
                  onClick={() => navigate(`/companies/${company.id}`)}
                  className="hover:bg-gray-50/50 cursor-pointer transition-colors"
                >
                  <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(company.id)}
                      onChange={() => toggleSelect(company.id)}
                      className="w-4 h-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
                    />
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center text-xs font-bold shrink-0">
                        {company.logo}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{company.name}</div>
                        <div className="text-xs text-gray-500 truncate max-w-xs">{company.description.slice(0, 60)}...</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="badge-blue">{company.industry}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={getStageColor(company.stage)}>{company.stage}</span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {company.location.city}, {company.location.country}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">{company.employeeCount}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{formatDate(company.lastRoundDate)}</td>
                </tr>
              ))}
              {paginated.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-4 py-12 text-center text-sm text-gray-400">
                    No companies match your filters. Try adjusting your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 bg-gray-50/50">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Show</span>
              <select
                value={perPage}
                onChange={(e) => { setPerPage(Number(e.target.value)); setPage(1) }}
                className="input w-auto py-1 px-2 text-sm"
              >
                {[10, 25, 50].map(n => <option key={n} value={n}>{n}</option>)}
              </select>
              <span>of {filtered.length}</span>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className="btn-ghost btn-sm"
              >
                Previous
              </button>
              {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                let pageNum
                if (totalPages <= 5) {
                  pageNum = i + 1
                } else if (page <= 3) {
                  pageNum = i + 1
                } else if (page >= totalPages - 2) {
                  pageNum = totalPages - 4 + i
                } else {
                  pageNum = page - 2 + i
                }
                return (
                  <button
                    key={pageNum}
                    onClick={() => setPage(pageNum)}
                    className={`w-8 h-8 text-sm rounded-lg ${
                      page === pageNum
                        ? 'bg-brand-600 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {pageNum}
                  </button>
                )
              })}
              <button
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="btn-ghost btn-sm"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Save Search Modal */}
      <Modal open={saveSearchModal} onClose={() => setSaveSearchModal(false)} title="Save Current Search">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Search Name</label>
            <input
              type="text"
              value={saveSearchName}
              onChange={(e) => setSaveSearchName(e.target.value)}
              placeholder="e.g., AI Seed Stage USA"
              className="input mt-1"
              autoFocus
              onKeyDown={(e) => e.key === 'Enter' && handleSaveSearch()}
            />
          </div>
          <div className="text-xs text-gray-400 space-y-1">
            {debouncedQuery && <p>Query: "{debouncedQuery}"</p>}
            {selectedIndustries.length > 0 && <p>Industries: {selectedIndustries.join(', ')}</p>}
            {selectedStages.length > 0 && <p>Stages: {selectedStages.join(', ')}</p>}
            {selectedEmpRange && <p>Employees: {selectedEmpRange.label}</p>}
          </div>
          <div className="flex justify-end gap-2">
            <button onClick={() => setSaveSearchModal(false)} className="btn-secondary">Cancel</button>
            <button onClick={handleSaveSearch} className="btn-primary" disabled={!saveSearchName.trim()}>Save</button>
          </div>
        </div>
      </Modal>

      {/* Bulk Add to List (uses first selected company for the modal, but logic should handle bulk) */}
      {bulkListModal && selectedIds.length > 0 && (
        <BulkListModal
          open={bulkListModal}
          onClose={() => setBulkListModal(false)}
          selectedIds={selectedIds}
        />
      )}
    </div>
  )
}

function BulkListModal({ open, onClose, selectedIds }) {
  const { state, dispatch } = useApp()
  const [newListName, setNewListName] = useState('')
  const [showNew, setShowNew] = useState(false)

  const handleAddToList = (listId) => {
    selectedIds.forEach(companyId => {
      dispatch({ type: 'ADD_TO_LIST', payload: { listId, companyId } })
    })
    dispatch({
      type: 'ADD_TOAST',
      payload: { type: 'success', message: `Added ${selectedIds.length} companies to list` },
    })
    onClose()
  }

  const handleCreate = () => {
    if (!newListName.trim()) return
    dispatch({ type: 'CREATE_LIST', payload: { name: newListName.trim() } })
    setNewListName('')
    setShowNew(false)
  }

  return (
    <Modal open={open} onClose={onClose} title={`Add ${selectedIds.length} companies to list`}>
      <div className="space-y-3">
        {state.lists.map(list => (
          <button
            key={list.id}
            onClick={() => handleAddToList(list.id)}
            className="w-full flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-left"
          >
            <div className="text-sm font-medium text-gray-900">{list.name}</div>
            <div className="text-xs text-gray-500 ml-auto">{list.companyIds.length} companies</div>
          </button>
        ))}
        {state.lists.length === 0 && !showNew && (
          <p className="text-sm text-gray-500 text-center py-4">No lists yet.</p>
        )}
        {showNew ? (
          <div className="flex gap-2">
            <input
              type="text"
              value={newListName}
              onChange={(e) => setNewListName(e.target.value)}
              placeholder="List name..."
              className="input flex-1"
              autoFocus
              onKeyDown={(e) => e.key === 'Enter' && handleCreate()}
            />
            <button onClick={handleCreate} className="btn-primary btn-sm">Create</button>
          </div>
        ) : (
          <button onClick={() => setShowNew(true)} className="w-full btn-secondary">+ New List</button>
        )}
      </div>
    </Modal>
  )
}
