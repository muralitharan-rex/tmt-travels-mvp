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

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-blue-900 to-blue-800 text-white p-6">
        <h1 className="text-2xl font-bold mb-8">TMT Travels</h1>
        <nav className="space-y-4">
          <button
            onClick={() => setCurrentPage('dashboard')}
            className={`w-full text-left p-3 rounded ${
              currentPage === 'dashboard' ? 'bg-blue-600' : 'hover:bg-blue-700'
            }`}
          >
            📊 Dashboard
          </button>
          <button
            onClick={() => setCurrentPage('newbooking')}
            className={`w-full text-left p-3 rounded ${
              currentPage === 'newbooking' ? 'bg-blue-600' : 'hover:bg-blue-700'
            }`}
          >
            🚕 New Booking
          </button>
          <button
            onClick={() => setCurrentPage('activetrips')}
            className={`w-full text-left p-3 rounded ${
              currentPage === 'activetrips' ? 'bg-blue-600' : 'hover:bg-blue-700'
            }`}
          >
            📍 Active Trips
          </button>
          <button
            onClick={() => setCurrentPage('drivers')}
            className={`w-full text-left p-3 rounded ${
              currentPage === 'drivers' ? 'bg-blue-600' : 'hover:bg-blue-700'
            }`}
          >
            👨‍✈️ Drivers
          </button>
          <button
            onClick={() => setCurrentPage('vehicles')}
            className={`w-full text-left p-3 rounded ${
              currentPage === 'vehicles' ? 'bg-blue-600' : 'hover:bg-blue-700'
            }`}
          >
            🚗 Vehicles
          </button>
        </nav>
        <button
          onClick={handleLogout}
          className="w-full mt-8 bg-red-600 hover:bg-red-700 p-3 rounded"
        >
          🚪 Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {currentPage === 'dashboard' && <Dashboard user={user} />}
        {currentPage === 'newbooking' && <NewBooking />}
        {currentPage === 'activetrips' && <ActiveTrips />}
        {currentPage === 'drivers' && <DriverList />}
        {currentPage === 'vehicles' && <VehicleList />}
      </div>
    </div>
  )
}
