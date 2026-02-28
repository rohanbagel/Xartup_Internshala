import { NavLink, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
  Building2, List, BookmarkCheck, Search, Menu, X, Sparkles,
} from 'lucide-react'

const navItems = [
  { to: '/companies', label: 'Companies', icon: Building2 },
  { to: '/lists', label: 'Lists', icon: List },
  { to: '/saved', label: 'Saved Searches', icon: BookmarkCheck },
]

export default function Sidebar({ searchOpen, setSearchOpen }) {
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [setSearchOpen])

  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-white border-r border-gray-200 z-30 flex flex-col transition-all duration-200 ${
        collapsed ? 'w-16' : 'w-60'
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 h-16 border-b border-gray-200 shrink-0">
        <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center shrink-0">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        {!collapsed && (
          <span className="font-bold text-lg text-gray-900 tracking-tight">VCScout</span>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto p-1 hover:bg-gray-100 rounded-md text-gray-400"
        >
          {collapsed ? <Menu className="w-4 h-4" /> : <X className="w-4 h-4" />}
        </button>
      </div>

      {/* Search trigger */}
      {!collapsed && (
        <button
          onClick={() => setSearchOpen(true)}
          className="mx-3 mt-4 flex items-center gap-2 px-3 py-2 text-sm text-gray-400 bg-gray-50 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
        >
          <Search className="w-4 h-4" />
          <span>Search companies...</span>
          <kbd className="ml-auto text-[10px] font-mono bg-gray-200 text-gray-500 px-1.5 py-0.5 rounded">
            ⌘K
          </kbd>
        </button>
      )}
      {collapsed && (
        <button
          onClick={() => setSearchOpen(true)}
          className="mx-auto mt-4 p-2 hover:bg-gray-100 rounded-lg text-gray-400"
        >
          <Search className="w-5 h-5" />
        </button>
      )}

      {/* Nav */}
      <nav className="flex-1 mt-4 px-2 space-y-1">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-brand-50 text-brand-700'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              } ${collapsed ? 'justify-center' : ''}`
            }
          >
            <Icon className="w-5 h-5 shrink-0" />
            {!collapsed && <span>{label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div className="p-4 border-t border-gray-200">
          <div className="text-xs text-gray-400">VCScout v1.0</div>
          <div className="text-xs text-gray-400">Xartup Internshala</div>
        </div>
      )}
    </aside>
  )
}
