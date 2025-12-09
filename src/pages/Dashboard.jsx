import React from 'react'

export default function Dashboard({ user }) {
  const stats = [
    { label: 'Today Trips', value: '87', icon: '🚕', color: 'from-blue-500 to-blue-600', trend: '+12%' },
    { label: 'Active Drivers', value: '42', icon: '👨‍💼', color: 'from-green-500 to-green-600', trend: '+5%' },
    { label: 'Revenue Today', value: '₹1,25,600', icon: '💰', color: 'from-amber-500 to-amber-600', trend: '+23%' },
    { label: 'Pending Invoices', value: '12', icon: '📋', color: 'from-red-500 to-red-600', trend: '-8%' }
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
    <div className="p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent mb-2">
          Dashboard
        </h1>
        <p className="text-gray-600">Fleet Operations Overview & Analytics</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
          >
            <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
              {stat.icon}
            </div>
            <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
            <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
            <p className={`text-sm font-semibold ${stat.trend.includes('+') ? 'text-green-600' : 'text-red-600'}`}>
              {stat.trend}
            </p>
          </div>
        ))}
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Trips */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            📍 Recent Trips
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Trip ID</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Company</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Driver</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Fare</th>
                </tr>
              </thead>
              <tbody>
                {recentTrips.map((trip) => (
                  <tr key={trip.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 font-mono text-cyan-600 font-semibold">{trip.id}</td>
                    <td className="py-3 px-4 text-gray-900">{trip.company}</td>
                    <td className="py-3 px-4 text-gray-900">{trip.driver}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        trip.status === 'Active'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-200 text-gray-700'
                      }`}>
                        {trip.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-semibold text-gray-900">{trip.fare}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Drivers */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            👑 Top Drivers
          </h2>
          <div className="space-y-4">
            {topDrivers.map((driver, idx) => (
              <div
                key={idx}
                className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg hover:shadow-md transition-all hover:from-cyan-50 hover:to-teal-50"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-semibold text-gray-900">{driver.name}</p>
                    <p className="text-xs text-gray-600">{driver.trips} trips</p>
                  </div>
                  <p className="font-bold text-amber-500">{driver.rating}</p>
                </div>
                <p className="text-cyan-600 font-semibold">{driver.earnings}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alert */}
      <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg flex gap-4">
        <span className="text-2xl">⚠️</span>
        <div>
          <p className="font-semibold text-amber-900">Maintenance Alert</p>
          <p className="text-amber-800">3 vehicles due for maintenance in next 7 days. Schedule now to avoid downtime.</p>
        </div>
      </div>
    </div>
  )
}
