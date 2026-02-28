import { createContext, useContext, useReducer, useEffect } from 'react'

const AppContext = createContext(null)

const loadFromStorage = (key, fallback) => {
  try {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : fallback
  } catch {
    return fallback
  }
}

const saveToStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data))
  } catch (e) {
    console.error('Failed to save to localStorage:', e)
  }
}

const initialState = {
  lists: loadFromStorage('vc_lists', []),
  savedSearches: loadFromStorage('vc_saved_searches', []),
  notes: loadFromStorage('vc_notes', {}),
  enrichmentCache: loadFromStorage('vc_enrichment', {}),
  toasts: [],
}

function appReducer(state, action) {
  switch (action.type) {
    // Lists
    case 'CREATE_LIST': {
      const newList = {
        id: Date.now().toString(),
        name: action.payload.name,
        description: action.payload.description || '',
        companyIds: [],
        createdAt: new Date().toISOString(),
      }
      return { ...state, lists: [...state.lists, newList] }
    }
    case 'DELETE_LIST':
      return { ...state, lists: state.lists.filter(l => l.id !== action.payload) }
    case 'ADD_TO_LIST': {
      return {
        ...state,
        lists: state.lists.map(l =>
          l.id === action.payload.listId && !l.companyIds.includes(action.payload.companyId)
            ? { ...l, companyIds: [...l.companyIds, action.payload.companyId] }
            : l
        ),
      }
    }
    case 'REMOVE_FROM_LIST': {
      return {
        ...state,
        lists: state.lists.map(l =>
          l.id === action.payload.listId
            ? { ...l, companyIds: l.companyIds.filter(id => id !== action.payload.companyId) }
            : l
        ),
      }
    }
    // Saved Searches
    case 'SAVE_SEARCH': {
      const search = {
        id: Date.now().toString(),
        name: action.payload.name,
        query: action.payload.query,
        filters: action.payload.filters,
        createdAt: new Date().toISOString(),
      }
      return { ...state, savedSearches: [...state.savedSearches, search] }
    }
    case 'DELETE_SEARCH':
      return { ...state, savedSearches: state.savedSearches.filter(s => s.id !== action.payload) }
    // Notes
    case 'ADD_NOTE': {
      const { companyId, text } = action.payload
      const note = { id: Date.now().toString(), text, createdAt: new Date().toISOString() }
      const companyNotes = state.notes[companyId] || []
      return { ...state, notes: { ...state.notes, [companyId]: [...companyNotes, note] } }
    }
    case 'DELETE_NOTE': {
      const { companyId, noteId } = action.payload
      return {
        ...state,
        notes: {
          ...state.notes,
          [companyId]: (state.notes[companyId] || []).filter(n => n.id !== noteId),
        },
      }
    }
    // Enrichment
    case 'SET_ENRICHMENT': {
      const { companyId, data } = action.payload
      return { ...state, enrichmentCache: { ...state.enrichmentCache, [companyId]: data } }
    }
    // Toasts
    case 'ADD_TOAST': {
      const toast = { id: Date.now(), ...action.payload }
      return { ...state, toasts: [...state.toasts, toast] }
    }
    case 'REMOVE_TOAST':
      return { ...state, toasts: state.toasts.filter(t => t.id !== action.payload) }
    default:
      return state
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState)

  // Persist to localStorage on changes
  useEffect(() => {
    saveToStorage('vc_lists', state.lists)
  }, [state.lists])
  useEffect(() => {
    saveToStorage('vc_saved_searches', state.savedSearches)
  }, [state.savedSearches])
  useEffect(() => {
    saveToStorage('vc_notes', state.notes)
  }, [state.notes])
  useEffect(() => {
    saveToStorage('vc_enrichment', state.enrichmentCache)
  }, [state.enrichmentCache])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
