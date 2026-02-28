import { useEffect } from 'react'
import { useApp } from '../context/AppContext'
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react'

const icons = {
  success: CheckCircle,
  error: AlertCircle,
  info: Info,
}

const colors = {
  success: 'bg-green-50 text-green-800 border-green-200',
  error: 'bg-red-50 text-red-800 border-red-200',
  info: 'bg-blue-50 text-blue-800 border-blue-200',
}

export default function Toast() {
  const { state, dispatch } = useApp()

  useEffect(() => {
    if (state.toasts.length === 0) return
    const timer = setTimeout(() => {
      dispatch({ type: 'REMOVE_TOAST', payload: state.toasts[0].id })
    }, 3000)
    return () => clearTimeout(timer)
  }, [state.toasts, dispatch])

  if (state.toasts.length === 0) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2">
      {state.toasts.map((toast) => {
        const Icon = icons[toast.type] || Info
        return (
          <div
            key={toast.id}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl border shadow-lg ${colors[toast.type] || colors.info} animate-slide-up`}
          >
            <Icon className="w-5 h-5 shrink-0" />
            <span className="text-sm font-medium">{toast.message}</span>
            <button
              onClick={() => dispatch({ type: 'REMOVE_TOAST', payload: toast.id })}
              className="ml-2 p-0.5 hover:bg-black/5 rounded"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )
      })}
    </div>
  )
}
