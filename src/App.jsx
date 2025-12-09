import React, { useState } from 'react'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import NewBooking from './pages/NewBooking'
import ActiveTrips from './pages/ActiveTrips'
import DriverList from './pages/DriverList'
import VehicleList from './pages/VehicleList'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentPage, setCurrentPage] = useState('login')
  const [user, setUser] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const handleLogin = (userData) => {
    setUser(userData)
    setIsLoggedIn(true)
    setCurrentPage('dashboard')
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setCurrentPage('login')
    setUser(null)
  }

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />
  }

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'newbooking', label: 'New Booking', icon: '🚕' },
    { id: 'activetrips', label: 'Active Trips', icon: '📍' },
    { id: 'drivers', label: 'Drivers', icon: '👨‍💼' },
    { id: 'vehicles', label: 'Vehicles', icon: '🚗' }
  ]

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Modern Sidebar */}
      <div className={`${sidebarOpen ? 'w-72' : 'w-20'} bg-gradient-to-b from-slate-950 to-slate-900 text-white transition-all duration-300 shadow-2xl border-r border-slate-700 flex flex-col`}>
        {/* Logo Section */}
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-lg flex items-center justify-center font-bold text-lg">
              T
            </div>
            {sidebarOpen && <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">TMT</h1>}
          </div>
          {sidebarOpen && <p className="text-xs text-slate-400 mt-1">Fleet Management</p>}
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 group relative ${
                currentPage === item.id
                  ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
              title={!sidebarOpen ? item.label : ''}
            >
              <span className="text-xl">{item.icon}</span>
              {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
              {currentPage === item.id && sidebarOpen && <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-white rounded-l-full" />}
            </button>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-slate-700 space-y-2">
          <button
            onClick={handleLogout}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 transition-all duration-200 group ${!sidebarOpen && 'justify-center'}`}
            title={!sidebarOpen ? 'Logout' : ''}
          >
            <span className="text-xl">🚪</span>
            {sidebarOpen && <span className="text-sm font-medium">Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white px-8 py-4 border-b border-slate-600 shadow-lg flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
            >
              {sidebarOpen ? '◀' : '▶'}
            </button>
            <h2 className="text-lg font-semibold">Welcome, {user?.name} 👋</h2>
          </div>
          <div className="text-sm text-slate-400">
            {new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 overflow-auto">
          {currentPage === 'dashboard' && <Dashboard user={user} />}
          {currentPage === 'newbooking' && <NewBooking />}
          {currentPage === 'activetrips' && <ActiveTrips />}
          {currentPage === 'drivers' && <DriverList />}
          {currentPage === 'vehicles' && <VehicleList />}
        </div>
      </div>
    </div>
  )
}
