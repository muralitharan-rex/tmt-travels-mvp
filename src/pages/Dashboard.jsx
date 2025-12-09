import React from 'react'

export default function Dashboard({ user }) {
  const stats = [
    { label: 'Today Trips', value: '87', icon: '🚕', color: 'from-blue-500 to-blue-600', trend: '+12%' },
    { label: 'Active Drivers', value: '42', icon: '👨‍💼', color: 'from-green-500 to-emerald-600', trend: '+5%' },
    { label: 'Revenue Today', value: '₹1,25,600', icon: '💰', color: 'from-amber-500 to-orange-600', trend: '+23%' },
    { label: 'Pending Invoices', value: '12', icon: '📋', color: 'from-rose-500 to-red-600', trend: '-8%' }
  ]

  const recentTrips = [
    { id: 'TRP-10021', company: 'Zoho', driver: 'Ramesh', status: 'Completed', fare: '₹320', time: '2:30 PM' },
    { id: 'TRP-10020', company: 'HCL', driver: 'Karthik', status: 'Active', fare: '₹280', time: '1:15 PM' },
    { id: 'TRP-10019', company: 'Honeywell', driver: 'Prakash', status: 'Completed', fare: '₹450', time: '12:45 PM' },
    { id: 'TRP-10018', company: 'TCS', driver: 'Suresh', status: 'Active', fare: '₹380', time: '11:30 AM' }
  ]

  const topDrivers = [
    { name: 'Ramesh K', trips: 23, rating: '4.8⭐', earnings: '₹8,450' },
    { name: 'Karthik M', trips: 19, rating: '4.9⭐', earnings: '₹7,230' },
    { name: 'Prakash R', trips: 18, rating: '4.7⭐', earnings: '₹6,890' }
  ]

  return (
    <div className="p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen overflow-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Dashboard</h1>
        <p className="text-slate-400 mt-2">Fleet Operations Overview & Analytics</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div
            key={stat.label}
            className="group bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 shadow-lg hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* Icon Background */}
            <div className={`bg-gradient-to-br ${stat.color} p-4 rounded-lg w-14 h-14 flex items-center justify-center text-2xl mb-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
              {stat.icon}
            </div>

            {/* Content */}
            <p className="text-slate-400 text-sm font-medium mb-1">{stat.label}</p>
            <div className="flex items-end justify-between">
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <span className={`text-sm font-semibold ${stat.trend.includes('+') ? 'text-green-400' : 'text-red-400'}`}>
                {stat.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Trips */}
        <div className="lg:col-span-2 bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-700 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              📍 Recent Trips
            </h2>
            <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">View All →</button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="p-4 text-left text-slate-300 font-semibold">Trip ID</th>
                  <th className="p-4 text-left text-slate-300 font-semibold">Company</th>
                  <th className="p-4 text-left text-slate-300 font-semibold">Driver</th>
                  <th className="p-4 text-left text-slate-300 font-semibold">Status</th>
                  <th className="p-4 text-left text-slate-300 font-semibold">Fare</th>
                </tr>
              </thead>
              <tbody>
                {recentTrips.map((trip) => (
                  <tr key={trip.id} className="border-b border-slate-700 hover:bg-slate-800/50 transition-colors group">
                    <td className="p-4 font-mono text-cyan-400 font-semibold">{trip.id}</td>
                    <td className="p-4 text-white">{trip.company}</td>
                    <td className="p-4 text-slate-300">{trip.driver}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        trip.status === 'Active'
                          ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                          : 'bg-slate-700 text-slate-300 border border-slate-600'
                      }`}>
                        {trip.status}
                      </span>
                    </td>
                    <td className="p-4 font-bold text-white">{trip.fare}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Drivers */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-700 shadow-lg">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            👑 Top Drivers
          </h2>

          <div className="space-y-4">
            {topDrivers.map((driver, idx) => (
              <div key={idx} className="bg-slate-700/50 p-4 rounded-lg border border-slate-600 hover:border-cyan-500/30 transition-all duration-200 group">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-semibold text-white group-hover:text-cyan-400 transition-colors">{driver.name}</p>
                    <p className="text-xs text-slate-400">{driver.trips} trips</p>
                  </div>
                  <span className="text-sm font-bold text-amber-400">{driver.rating}</span>
                </div>
                <p className="text-sm text-cyan-400 font-semibold">{driver.earnings}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alert Section */}
      <div className="mt-6 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 p-4 rounded-xl">
        <p className="text-amber-300 font-medium flex items-center gap-2">
          <span className="text-xl">⚠️</span>
          <strong>Maintenance Alert:</strong> 3 vehicles due for maintenance in next 7 days. Schedule now to avoid downtime.
        </p>
      </div>
    </div>
  )
}
