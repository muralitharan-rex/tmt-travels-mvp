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
  const [sidebarOpen, setSidebarOpen] = useState(false) // mobile default closed

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

  const goHome = () => {
    setCurrentPage('dashboard')
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

  const handleNavClick = (id) => {
    setCurrentPage(id)
    setSidebarOpen(false) // close on mobile after navigation
  }

  return (
    <div className="h-screen w-screen bg-gray-50 overflow-hidden flex">
      {/* Desktop sidebar (md and up) */}
      <div className="hidden md:flex md:w-64 bg-white border-r border-gray-200 shadow-lg flex-col overflow-y-auto">
        {/* Logo */}
        <div className="flex items-center gap-3 p-6 border-b border-gray-200">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            T
          </div>
          <div className="min-w-0">
            <div className="text-lg font-bold text-gray-900 truncate">TMT</div>
            <div className="text-xs text-gray-500 truncate">Fleet Mgmt</div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                currentPage === item.id
                  ? 'bg-gradient-to-r from-cyan-500 to-teal-600 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="text-lg flex-shrink-0">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="mx-3 mb-4 px-4 py-2 bg-red-50 text-red-600 border border-red-300 rounded-lg font-medium hover:bg-red-100 transition-colors"
          title="Logout"
        >
          🚪 Logout
        </button>
      </div>

      {/* Mobile sidebar overlay (below md) */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          {/* Backdrop */}
          <div
            className="flex-1 bg-black/40"
            onClick={() => setSidebarOpen(false)}
          />

          {/* Sidebar panel */}
          <div className="w-64 bg-white border-r border-gray-200 shadow-xl flex flex-col overflow-y-auto">
            {/* Logo + Close */}
            <div className="flex items-center justify-between gap-3 p-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-base">
                  T
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-bold text-gray-900 truncate">TMT</div>
                  <div className="text-[11px] text-gray-500 truncate">Fleet Mgmt</div>
                </div>
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-gray-500 hover:bg-gray-100 rounded-full p-1"
              >
                ✕
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-3 py-3 space-y-2 overflow-y-auto">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                    currentPage === item.id
                      ? 'bg-gradient-to-r from-cyan-500 to-teal-600 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-lg flex-shrink-0">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </nav>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="m-3 px-3 py-2 bg-red-50 text-red-600 border border-red-300 rounded-lg font-medium text-sm hover:bg-red-100 transition-colors"
            >
              🚪 Logout
            </button>
          </div>
        </div>
      )}

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <div className="bg-white border-b border-gray-200 px-3 sm:px-4 md:px-8 py-3 md:py-4 shadow-sm flex items-center justify-between gap-3 flex-shrink-0">
          <div className="flex items-center gap-2 md:gap-4 min-w-0">
            {/* Sandwich button only on mobile */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="inline-flex md:hidden items-center justify-center text-gray-700 hover:bg-gray-100 rounded-lg p-2"
              title="Open menu"
            >
              ☰
            </button>

            {/* (Optional) compact icon on desktop in place of old arrow */}
            <div className="hidden md:flex items-center justify-center text-gray-400">
              📋
            </div>

            {/* Home button */}
            <button
              onClick={goHome}
              className="hidden sm:inline-flex items-center gap-1 px-3 py-2 bg-cyan-50 text-cyan-700 border border-cyan-200 rounded-lg text-xs font-semibold hover:bg-cyan-100 transition-colors flex-shrink-0"
            >
              🏠 Home
            </button>

            <h2 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 truncate">
              Welcome, {user?.name} 👋
            </h2>
          </div>
          <div className="text-[11px] sm:text-xs md:text-sm text-gray-500 flex-shrink-0">
            {new Date().toLocaleDateString('en-IN', {
              weekday: 'short',
              month: 'short',
              day: 'numeric'
            })}
          </div>
        </div>

        {/* Page content */}
        <div className="flex-1 w-full min-w-0 overflow-y-auto overflow-x-hidden bg-gray-50">
          {currentPage === 'dashboard' && (
            <Dashboard user={user} onNavigate={setCurrentPage} />
          )}
          {currentPage === 'newbooking' && <NewBooking />}
          {currentPage === 'activetrips' && <ActiveTrips />}
          {currentPage === 'drivers' && <DriverList />}
          {currentPage === 'vehicles' && <VehicleList />}
        </div>
      </div>
    </div>
  )
}
