import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  ArrowLeft, Globe, MapPin, Users, DollarSign, Calendar, Sparkles,
  ExternalLink, ListPlus, Loader2, AlertCircle, RefreshCw,
} from 'lucide-react'
import { useApp } from '../context/AppContext'
import mockCompanies from '../data/mockCompanies'
import { formatDate, getStageColor, getSignalIcon } from '../lib/utils'
import { apiPost } from '../lib/utils'
import SaveToListModal from '../components/SaveToListModal'

const TABS = ['Overview', 'Signals', 'Notes', 'Enrichment']

export default function CompanyProfile() {
  const { id } = useParams()
  const { state, dispatch } = useApp()
  const company = mockCompanies.find(c => c.id === id)
  const [activeTab, setActiveTab] = useState('Overview')
  const [saveModalOpen, setSaveModalOpen] = useState(false)
  const [enriching, setEnriching] = useState(false)
  const [enrichError, setEnrichError] = useState(null)
  const [noteText, setNoteText] = useState('')

  if (!company) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-semibold text-gray-900">Company not found</h2>
        <Link to="/companies" className="text-brand-600 text-sm mt-2 inline-block hover:underline">
          ← Back to companies
        </Link>
      </div>
    )
  }

  const enrichmentData = state.enrichmentCache[company.id]
  const notes = state.notes[company.id] || []

  const handleEnrich = async () => {
    setEnriching(true)
    setEnrichError(null)
    try {
      const data = await apiPost('/api/enrich', { website: company.website, companyId: company.id })
      dispatch({ type: 'SET_ENRICHMENT', payload: { companyId: company.id, data } })
      dispatch({ type: 'ADD_TOAST', payload: { type: 'success', message: 'Enrichment complete!' } })
      setActiveTab('Enrichment')
    } catch (err) {
      setEnrichError(err.message)
      dispatch({ type: 'ADD_TOAST', payload: { type: 'error', message: 'Enrichment failed: ' + err.message } })
    } finally {
      setEnriching(false)
    }
  }

  const handleAddNote = () => {
    if (!noteText.trim()) return
    dispatch({ type: 'ADD_NOTE', payload: { companyId: company.id, text: noteText.trim() } })
    setNoteText('')
    dispatch({ type: 'ADD_TOAST', payload: { type: 'success', message: 'Note added' } })
  }

  return (
    <div className="space-y-6">
      {/* Back link */}
      <Link to="/companies" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to companies
      </Link>

      {/* Hero */}
      <div className="card p-6">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center text-lg font-bold shrink-0">
            {company.logo}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-2xl font-bold text-gray-900">{company.name}</h1>
              <span className={getStageColor(company.stage)}>{company.stage}</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">{company.description}</p>
            <div className="flex items-center gap-4 mt-3 flex-wrap text-sm text-gray-500">
              <span className="inline-flex items-center gap-1">
                <Globe className="w-4 h-4" />
                <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">
                  {company.website.replace('https://', '')}
                </a>
              </span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-4 h-4" /> {company.location.city}, {company.location.country}
              </span>
              <span className="inline-flex items-center gap-1">
                <Users className="w-4 h-4" /> {company.employeeCount} employees
              </span>
              <span className="inline-flex items-center gap-1">
                <DollarSign className="w-4 h-4" /> {company.totalFunding} raised
              </span>
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-4 h-4" /> Founded {company.foundedYear}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button onClick={() => setSaveModalOpen(true)} className="btn-secondary btn-sm">
              <ListPlus className="w-4 h-4" /> Save to List
            </button>
            <button
              onClick={handleEnrich}
              disabled={enriching}
              className="btn-primary btn-sm"
            >
              {enriching ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Enriching...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" /> {enrichmentData ? 'Re-Enrich' : 'Enrich'}
                </>
              )}
            </button>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {company.tags.map(tag => (
            <span key={tag} className="badge-gray">{tag}</span>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <div className="flex gap-0">
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab
                  ? 'border-brand-600 text-brand-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab}
              {tab === 'Enrichment' && enrichmentData && (
                <span className="ml-1.5 w-2 h-2 bg-green-500 rounded-full inline-block" />
              )}
              {tab === 'Notes' && notes.length > 0 && (
                <span className="ml-1.5 text-xs text-gray-400">({notes.length})</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="card p-6">
        {activeTab === 'Overview' && (
          <div className="space-y-6">
            {/* Founders */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Founders</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {company.founders.map(f => (
                  <div key={f.name} className="flex items-center gap-3 p-3 rounded-lg border border-gray-200">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium text-gray-600">
                      {f.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{f.name}</div>
                      <div className="text-xs text-gray-500">{f.role}</div>
                    </div>
                    <a
                      href={f.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto text-gray-400 hover:text-brand-600 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Metrics */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Key Metrics</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'Total Funding', value: company.totalFunding },
                  { label: 'Employees', value: company.employeeCount },
                  { label: 'Founded', value: company.foundedYear },
                  { label: 'Last Round', value: formatDate(company.lastRoundDate) },
                ].map(m => (
                  <div key={m.label} className="p-3 rounded-lg bg-gray-50 border border-gray-100">
                    <div className="text-xs text-gray-500">{m.label}</div>
                    <div className="text-lg font-semibold text-gray-900 mt-1">{m.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Signals' && (
          <div className="space-y-4">
            {company.signals.length === 0 ? (
              <div className="text-center py-8 text-sm text-gray-400">No signals recorded yet.</div>
            ) : (
              <div className="relative pl-8">
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-200" />
                {company.signals.map((signal, i) => (
                  <div key={i} className="relative pb-6 last:pb-0">
                    <div className="absolute left-[-22px] w-7 h-7 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-sm">
                      {getSignalIcon(signal.type)}
                    </div>
                    <div className="ml-4">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="badge-gray capitalize">{signal.type}</span>
                        <span className="text-xs text-gray-400">{formatDate(signal.date)}</span>
                      </div>
                      <p className="text-sm font-medium text-gray-900 mt-1">{signal.title}</p>
                      <p className="text-xs text-gray-500">Source: {signal.source}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'Notes' && (
          <div className="space-y-4">
            <div className="flex gap-2">
              <textarea
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                placeholder="Add a note about this company..."
                className="input min-h-[80px] resize-none"
              />
            </div>
            <button
              onClick={handleAddNote}
              disabled={!noteText.trim()}
              className="btn-primary btn-sm"
            >
              Add Note
            </button>
            <div className="space-y-3 mt-4">
              {notes.length === 0 ? (
                <div className="text-center py-8 text-sm text-gray-400">No notes yet. Add one above.</div>
              ) : (
                notes.slice().reverse().map(note => (
                  <div key={note.id} className="p-3 rounded-lg border border-gray-200 bg-gray-50/50">
                    <p className="text-sm text-gray-800 whitespace-pre-wrap">{note.text}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-gray-400">{formatDate(note.createdAt)}</span>
                      <button
                        onClick={() => dispatch({ type: 'DELETE_NOTE', payload: { companyId: company.id, noteId: note.id } })}
                        className="text-xs text-red-400 hover:text-red-600 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {activeTab === 'Enrichment' && (
          <div className="space-y-6">
            {enrichError && (
              <div className="flex items-center gap-3 p-4 rounded-lg bg-red-50 border border-red-200">
                <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                <div className="flex-1">
                  <p className="text-sm text-red-700 font-medium">Enrichment failed</p>
                  <p className="text-xs text-red-500 mt-0.5">{enrichError}</p>
                </div>
                <button onClick={handleEnrich} className="btn-secondary btn-sm">
                  <RefreshCw className="w-3 h-3" /> Retry
                </button>
              </div>
            )}

            {enriching && (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Loader2 className="w-5 h-5 text-brand-600 animate-spin" />
                  <span className="text-sm text-gray-600">Scraping public website and analyzing with AI...</span>
                </div>
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="space-y-2">
                    <div className="skeleton h-4 w-32" />
                    <div className="skeleton h-3 w-full" />
                    <div className="skeleton h-3 w-3/4" />
                  </div>
                ))}
              </div>
            )}

            {!enriching && !enrichmentData && !enrichError && (
              <div className="text-center py-12">
                <Sparkles className="w-10 h-10 text-gray-300 mx-auto" />
                <h3 className="text-sm font-medium text-gray-900 mt-3">No enrichment data yet</h3>
                <p className="text-xs text-gray-500 mt-1">Click the "Enrich" button to fetch and analyze this company's public web presence.</p>
                <button onClick={handleEnrich} className="btn-primary btn-sm mt-4">
                  <Sparkles className="w-4 h-4" /> Enrich Now
                </button>
              </div>
            )}

            {enrichmentData && !enriching && (
              <div className="space-y-6">
                {/* Summary */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Summary</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{enrichmentData.summary}</p>
                </div>

                {/* What they do */}
                {enrichmentData.whatTheyDo && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">What They Do</h3>
                    <ul className="space-y-1.5">
                      {enrichmentData.whatTheyDo.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-brand-500 mt-0.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Keywords */}
                {enrichmentData.keywords && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Keywords</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {enrichmentData.keywords.map((kw, i) => (
                        <span key={i} className="badge-blue">{kw}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Derived Signals */}
                {enrichmentData.derivedSignals && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Derived Signals</h3>
                    <div className="space-y-2">
                      {enrichmentData.derivedSignals.map((signal, i) => (
                        <div key={i} className="flex items-start gap-2 p-3 rounded-lg bg-amber-50 border border-amber-200">
                          <span className="text-amber-500 text-sm">⚡</span>
                          <span className="text-sm text-amber-800">{signal}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Thesis Score */}
                {enrichmentData.thesisScore !== undefined && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Thesis Match Score</h3>
                    <div className="flex items-center gap-4">
                      <div className={`text-3xl font-bold ${
                        enrichmentData.thesisScore >= 70 ? 'text-green-600' :
                        enrichmentData.thesisScore >= 40 ? 'text-amber-600' : 'text-red-500'
                      }`}>
                        {enrichmentData.thesisScore}/100
                      </div>
                      {enrichmentData.thesisExplanation && (
                        <p className="text-sm text-gray-600 flex-1">{enrichmentData.thesisExplanation}</p>
                      )}
                    </div>
                  </div>
                )}

                {/* Sources */}
                {enrichmentData.sources && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Sources</h3>
                    <div className="space-y-1.5">
                      {enrichmentData.sources.map((src, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <ExternalLink className="w-3 h-3 text-gray-400 shrink-0" />
                          <a href={src.url} target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline truncate">
                            {src.url}
                          </a>
                          <span className="text-xs text-gray-400 shrink-0">{formatDate(src.scrapedAt)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Enriched at */}
                {enrichmentData.enrichedAt && (
                  <p className="text-xs text-gray-400">
                    Last enriched: {new Date(enrichmentData.enrichedAt).toLocaleString()}
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Save to list modal */}
      <SaveToListModal
        open={saveModalOpen}
        onClose={() => setSaveModalOpen(false)}
        companyId={company.id}
        companyName={company.name}
      />
    </div>
  )
}
