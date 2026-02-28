import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import SearchModal from './components/SearchModal'
import Toast from './components/Toast'
import Companies from './pages/Companies'
import CompanyProfile from './pages/CompanyProfile'
import Lists from './pages/Lists'
import SavedSearches from './pages/SavedSearches'

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <div className="min-h-screen bg-surface-secondary">
      <Sidebar searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
      <Toast />

      <main className="pl-60 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Routes>
            <Route path="/" element={<Navigate to="/companies" replace />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/companies/:id" element={<CompanyProfile />} />
            <Route path="/lists" element={<Lists />} />
            <Route path="/lists/:id" element={<Lists />} />
            <Route path="/saved" element={<SavedSearches />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}
