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
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-white border-r border-gray-200 shadow-lg transition-all duration-300 flex flex-col overflow-y-auto`}>
        {/* Logo */}
        <div className="flex items-center gap-3 p-6 border-b border-gray-200">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
            T
          </div>
          {sidebarOpen && (
            <div>
              <div className="text-lg font-bold text-gray-900">TMT</div>
              <div className="text-xs text-gray-500">Fleet Management</div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                currentPage === item.id
                  ? 'bg-gradient-to-r from-cyan-500 to-teal-600 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              title={!sidebarOpen ? item.label : ''}
            >
              <span className="text-lg flex-shrink-0">{item.icon}</span>
              {sidebarOpen && <span className="font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="w-full mx-3 mb-4 px-4 py-2 bg-red-50 text-red-600 border border-red-300 rounded-lg font-medium hover:bg-red-100 transition-colors"
          title="Logout"
        >
          🚪 {sidebarOpen && 'Logout'}
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 px-8 py-4 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-gray-700 hover:bg-gray-100 p-2 rounded-lg transition-colors"
            >
              {sidebarOpen ? '◀' : '▶'}
            </button>
            <h2 className="text-lg font-semibold text-gray-900">
              Welcome, {user?.name} 👋
            </h2>
          </div>
          <div className="text-sm text-gray-500">
            {new Date().toLocaleDateString('en-IN', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto bg-gray-50">
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
