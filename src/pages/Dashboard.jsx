import React from 'react'

const styles = {
  container: {
    padding: '32px',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
    color: 'white'
  },
  header: {
    marginBottom: '32px'
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    margin: '0 0 8px 0',
    background: 'linear-gradient(90deg, #06b6d4 0%, #14b8a6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  subtitle: {
    fontSize: '14px',
    color: '#94a3b8',
    margin: 0
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '24px',
    marginBottom: '32px'
  },
  iconBox: (color) => ({
    background: color,
    padding: '12px',
    borderRadius: '8px',
    width: '56px',
    height: '56px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '28px',
    marginBottom: '16px',
    boxShadow: `0 10px 20px -5px ${color}40`
  }),
  statLabel: {
    fontSize: '13px',
    color: '#94a3b8',
    marginBottom: '4px',
    fontWeight: '600'
  },
  statValue: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '4px'
  },
  twoColumn: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '24px',
    marginBottom: '24px'
  },
  card: {
    background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
    padding: '24px',
    borderRadius: '12px',
    border: '1px solid #334155',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)'
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse'
  },
  tableHeader: {
    borderBottom: '1px solid #334155',
    textAlign: 'left'
  },
  tableHeaderCell: {
    padding: '12px',
    fontSize: '13px',
    fontWeight: '600',
    color: '#cbd5e1'
  },
  tableRow: {
    borderBottom: '1px solid #334155',
    transition: 'background 0.2s ease'
  },
  tableCell: {
    padding: '12px',
    fontSize: '13px',
    color: '#e2e8f0'
  },
  driverCard: {
    background: 'rgba(51, 65, 85, 0.3)',
    padding: '16px',
    borderRadius: '8px',
    border: '1px solid #334155',
    marginBottom: '12px',
    transition: 'all 0.2s ease'
  },
  alertBox: {
    background: 'linear-gradient(135deg, rgba(217, 119, 6, 0.1) 0%, rgba(251, 146, 60, 0.1) 100%)',
    border: '1px solid rgba(217, 119, 6, 0.3)',
    padding: '16px',
    borderRadius: '12px',
    color: '#fed7aa'
  }
}

export default function Dashboard({ user }) {
  const stats = [
    { label: 'Today Trips', value: '87', icon: '🚕', color: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)', trend: '+12%' },
    { label: 'Active Drivers', value: '42', icon: '👨‍💼', color: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', trend: '+5%' },
    { label: 'Revenue Today', value: '₹1,25,600', icon: '💰', color: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', trend: '+23%' },
    { label: 'Pending Invoices', value: '12', icon: '📋', color: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)', trend: '-8%' }
  ]

  const recentTrips = [
    { id: 'TRP-10021', company: 'Zoho', driver: 'Ramesh', status: 'Completed', fare: '₹320' },
    { id: 'TRP-10020', company: 'HCL', driver: 'Karthik', status: 'Active', fare: '₹280' },
    { id: 'TRP-10019', company: 'Honeywell', driver: 'Prakash', status: 'Completed', fare: '₹450' },
    { id: 'TRP-10018', company: 'TCS', driver: 'Suresh', status: 'Active', fare: '₹380' }
  ]

  const topDrivers = [
    { name: 'Ramesh K', trips: 23, rating: '4.8⭐', earnings: '₹8,450' },
    { name: 'Karthik M', trips: 19, rating: '4.9⭐', earnings: '₹7,230' },
    { name: 'Prakash R', trips: 18, rating: '4.7⭐', earnings: '₹6,890' }
  ]

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Dashboard</h1>
        <p style={styles.subtitle}>Fleet Operations Overview & Analytics</p>
      </div>

      {/* Stats Cards */}
      <div style={styles.statsGrid}>
        {stats.map((stat) => (
          <div key={stat.label} style={{
            ...styles.card,
            cursor: 'pointer'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)'
            e.currentTarget.style.borderColor = '#06b6d4'
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.borderColor = '#334155'
          }}>
            <div style={styles.iconBox(stat.color)}>{stat.icon}</div>
            <div style={styles.statLabel}>{stat.label}</div>
            <div style={styles.statValue}>{stat.value}</div>
            <div style={{ fontSize: '12px', color: stat.trend.includes('+') ? '#86efac' : '#f87171', fontWeight: '600' }}>{stat.trend}</div>
          </div>
        ))}
      </div>

      {/* Two Column Layout */}
      <div style={styles.twoColumn}>
        {/* Recent Trips */}
        <div style={styles.card}>
          <div style={styles.cardTitle}>📍 Recent Trips</div>
          <table style={styles.table}>
            <thead style={styles.tableHeader}>
              <tr>
                <th style={styles.tableHeaderCell}>Trip ID</th>
                <th style={styles.tableHeaderCell}>Company</th>
                <th style={styles.tableHeaderCell}>Driver</th>
                <th style={styles.tableHeaderCell}>Status</th>
                <th style={styles.tableHeaderCell}>Fare</th>
              </tr>
            </thead>
            <tbody>
              {recentTrips.map((trip) => (
                <tr key={trip.id} style={styles.tableRow} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(51, 65, 85, 0.2)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                  <td style={{...styles.tableCell, color: '#06b6d4', fontFamily: 'monospace', fontWeight: 'bold'}}>{trip.id}</td>
                  <td style={styles.tableCell}>{trip.company}</td>
                  <td style={styles.tableCell}>{trip.driver}</td>
                  <td style={styles.tableCell}>
                    <span style={{
                      display: 'inline-block',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: '600',
                      background: trip.status === 'Active' ? 'rgba(34, 197, 94, 0.15)' : 'rgba(100, 116, 139, 0.15)',
                      color: trip.status === 'Active' ? '#86efac' : '#cbd5e1',
                      border: trip.status === 'Active' ? '1px solid #22c55e' : '1px solid #64748b'
                    }}>{trip.status}</span>
                  </td>
                  <td style={{...styles.tableCell, fontWeight: 'bold'}}>{trip.fare}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Top Drivers */}
        <div style={styles.card}>
          <div style={styles.cardTitle}>👑 Top Drivers</div>
          <div>
            {topDrivers.map((driver, idx) => (
              <div key={idx} style={styles.driverCard} onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#06b6d4'
                e.currentTarget.style.background = 'rgba(6, 182, 212, 0.05)'
              }} onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#334155'
                e.currentTarget.style.background = 'rgba(51, 65, 85, 0.3)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '8px' }}>
                  <div>
                    <div style={{ fontWeight: '600', color: 'white' }}>{driver.name}</div>
                    <div style={{ fontSize: '12px', color: '#94a3b8' }}>{driver.trips} trips</div>
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#fbbf24' }}>{driver.rating}</div>
                </div>
                <div style={{ fontSize: '13px', color: '#06b6d4', fontWeight: '600' }}>{driver.earnings}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alert */}
      <div style={styles.alertBox}>
        <div style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
          <span style={{ fontSize: '18px' }}>⚠️</span>
          <div>
            <strong>Maintenance Alert:</strong> 3 vehicles due for maintenance in next 7 days. Schedule now to avoid downtime.
          </div>
        </div>
      </div>
    </div>
  )
}
