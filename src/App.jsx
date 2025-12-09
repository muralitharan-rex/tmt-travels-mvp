import React, { useState } from 'react'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import NewBooking from './pages/NewBooking'
import ActiveTrips from './pages/ActiveTrips'
import DriverList from './pages/DriverList'
import VehicleList from './pages/VehicleList'

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    overflow: 'hidden'
  },
  sidebar: (isOpen) => ({
    width: isOpen ? '280px' : '80px',
    background: 'linear-gradient(180deg, #020617 0%, #0f172a 100%)',
    color: 'white',
    padding: '24px 12px',
    borderRight: '1px solid #334155',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)',
    overflowY: 'auto',
    transition: 'width 0.3s ease',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none'
  }),
  logo: (isOpen) => ({
    display: 'flex',
    alignItems: 'center',
    gap: isOpen ? '12px' : '0',
    marginBottom: '32px',
    borderBottom: '1px solid #334155',
    paddingBottom: '20px',
    justifyContent: isOpen ? 'flex-start' : 'center',
    transition: 'all 0.3s ease'
  }),
  logoBox: {
    width: '40px',
    height: '40px',
    background: 'linear-gradient(135deg, #06b6d4 0%, #14b8a6 100%)',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '18px',
    boxShadow: '0 10px 20px -5px rgba(6, 182, 212, 0.3)',
    flexShrink: 0
  },
  logoText: (isOpen) => ({
    fontSize: '20px',
    fontWeight: 'bold',
    background: 'linear-gradient(90deg, #06b6d4 0%, #14b8a6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    display: isOpen ? 'block' : 'none'
  }),
  mainContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  topBar: {
    background: 'linear-gradient(90deg, #1e293b 0%, #0f172a 100%)',
    color: 'white',
    padding: '16px 32px',
    borderBottom: '1px solid #334155',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  contentArea: {
    flex: 1,
    overflowY: 'auto',
    overflowX: 'hidden',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
    scrollbarWidth: 'thin',
    scrollbarColor: '#334155 transparent'
  },
  nav: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    scrollbarWidth: 'none'
  },
  navButton: (isActive, isOpen) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: isOpen ? '12px' : '0',
    justifyContent: isOpen ? 'flex-start' : 'center',
    padding: '12px 16px',
    background: isActive ? 'linear-gradient(90deg, #06b6d4 0%, #14b8a6 100%)' : 'transparent',
    color: isActive ? 'white' : '#cbd5e1',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: isActive ? '600' : '500',
    transition: 'all 0.3s ease',
    boxShadow: isActive ? '0 10px 15px -3px rgba(6, 182, 212, 0.2)' : 'none'
  }),
  logoutBtn: {
    width: '100%',
    padding: '12px 16px',
    background: 'rgba(239, 68, 68, 0.1)',
    color: '#f87171',
    border: '1px solid #ef4444',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    marginTop: '16px'
  }
}

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
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar(sidebarOpen)}>
        {/* Logo */}
        <div style={styles.logo(sidebarOpen)}>
          <div style={styles.logoBox}>T</div>
          {sidebarOpen && (
            <div>
              <div style={styles.logoText(true)}>TMT</div>
              <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>Fleet</div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav style={styles.nav}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              style={styles.navButton(currentPage === item.id, sidebarOpen)}
              onMouseEnter={(e) => {
                if (currentPage !== item.id) {
                  e.target.style.background = '#1e293b'
                  e.target.style.color = 'white'
                }
              }}
              onMouseLeave={(e) => {
                if (currentPage !== item.id) {
                  e.target.style.background = 'transparent'
                  e.target.style.color = '#cbd5e1'
                }
              }}
              title={!sidebarOpen ? item.label : ''}
            >
              <span style={{ fontSize: '18px' }}>{item.icon}</span>
              {sidebarOpen && <span>{item.label}</span>}
            </button>
          ))}
        </nav>

        {/* Logout */}
        <button style={styles.logoutBtn} onClick={handleLogout} title="Logout">
          🚪 {sidebarOpen && 'Logout'}
        </button>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Top Bar */}
        <div style={styles.topBar}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'white',
                fontSize: '20px',
                cursor: 'pointer',
                padding: '8px'
              }}
            >
              {sidebarOpen ? '◀' : '▶'}
            </button>
            <h2 style={{ margin: 0, fontSize: '18px', fontWeight: '600' }}>
              Welcome, {user?.name} 👋
            </h2>
          </div>
          <div style={{ fontSize: '13px', color: '#94a3b8' }}>
            {new Date().toLocaleDateString('en-IN', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}
          </div>
        </div>

        {/* Content */}
        <div style={styles.contentArea}>
          {currentPage === 'dashboard' && <Dashboard user={user} />}
          {currentPage === 'newbooking' && <NewBooking />}
          {currentPage === 'activetrips' && <ActiveTrips />}
          {currentPage === 'drivers' && <DriverList />}
          {currentPage === 'vehicles' && <VehicleList />}
        </div>
      </div>

      <style>{`
        div::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        div::-webkit-scrollbar-track {
          background: transparent;
        }
        div::-webkit-scrollbar-thumb {
          background: #334155;
          border-radius: 4px;
        }
        div::-webkit-scrollbar-thumb:hover {
          background: #475569;
        }
      `}</style>
    </div>
  )
}
