import { useState } from 'react'
import { useApp } from '../context/AppContext'
import Modal from './Modal'

export default function SaveToListModal({ open, onClose, companyId, companyName }) {
  const { state, dispatch } = useApp()
  const [newListName, setNewListName] = useState('')
  const [showNew, setShowNew] = useState(false)

  const handleToggle = (listId) => {
    const list = state.lists.find(l => l.id === listId)
    if (list.companyIds.includes(companyId)) {
      dispatch({ type: 'REMOVE_FROM_LIST', payload: { listId, companyId } })
    } else {
      dispatch({ type: 'ADD_TO_LIST', payload: { listId, companyId } })
      dispatch({
        type: 'ADD_TOAST',
        payload: { type: 'success', message: `Added ${companyName} to ${list.name}` },
      })
    }
  }

  const handleCreate = () => {
    if (!newListName.trim()) return
    dispatch({ type: 'CREATE_LIST', payload: { name: newListName.trim() } })
    setNewListName('')
    setShowNew(false)
    dispatch({
      type: 'ADD_TOAST',
      payload: { type: 'success', message: `Created list "${newListName.trim()}"` },
    })
  }

  return (
    <Modal open={open} onClose={onClose} title="Save to List">
      <div className="space-y-3">
        {state.lists.length === 0 && !showNew && (
          <p className="text-sm text-gray-500 text-center py-4">
            No lists yet. Create one to get started.
          </p>
        )}
        {state.lists.map((list) => {
          const inList = list.companyIds.includes(companyId)
          return (
            <label
              key={list.id}
              className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <input
                type="checkbox"
                checked={inList}
                onChange={() => handleToggle(list.id)}
                className="w-4 h-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
              />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-900">{list.name}</div>
                <div className="text-xs text-gray-500">{list.companyIds.length} companies</div>
              </div>
            </label>
          )
        })}

        {showNew ? (
          <div className="flex gap-2 mt-3">
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
            <button onClick={() => { setShowNew(false); setNewListName('') }} className="btn-ghost btn-sm">Cancel</button>
          </div>
        ) : (
          <button
            onClick={() => setShowNew(true)}
            className="w-full btn-secondary mt-2"
          >
            + New List
          </button>
        )}
      </div>
    </Modal>
  )
}
