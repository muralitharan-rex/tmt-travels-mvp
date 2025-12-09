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
    <div className="w-full h-full flex flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto overflow-x-hidden bg-gray-50">
        <div className="w-full max-w-full px-3 sm:px-4 md:px-6 lg:px-8 py-4 md:py-8 space-y-6 md:space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent mb-2">
              Dashboard
            </h1>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base">Fleet Operations Overview & Analytics</p>
          </div>

          {/* Stats Grid - Auto adjusts columns */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-lg shadow-sm hover:shadow-md p-4 sm:p-5 md:p-6 transition-all duration-300 cursor-pointer group"
              >
                <div className={`w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center text-lg sm:text-xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                  {stat.icon}
                </div>
                <p className="text-xs sm:text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 truncate">{stat.value}</p>
                <p className={`text-xs sm:text-sm font-semibold ${stat.trend.includes('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.trend}
                </p>
              </div>
            ))}
          </div>

          {/* Two Column Layout - Responsive */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Recent Trips */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-4 sm:p-5 md:p-6">
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
                📍 Recent Trips
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-3 md:px-4 font-semibold text-gray-700">Trip ID</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-3 md:px-4 font-semibold text-gray-700 hidden sm:table-cell">Company</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-3 md:px-4 font-semibold text-gray-700 hidden md:table-cell">Driver</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-3 md:px-4 font-semibold text-gray-700">Status</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-3 md:px-4 font-semibold text-gray-700">Fare</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentTrips.map((trip) => (
                      <tr key={trip.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="py-2 sm:py-3 px-2 sm:px-3 md:px-4 font-mono text-cyan-600 font-semibold text-xs sm:text-sm">{trip.id}</td>
                        <td className="py-2 sm:py-3 px-2 sm:px-3 md:px-4 text-gray-900 text-xs sm:text-sm hidden sm:table-cell">{trip.company}</td>
                        <td className="py-2 sm:py-3 px-2 sm:px-3 md:px-4 text-gray-900 text-xs sm:text-sm hidden md:table-cell">{trip.driver}</td>
                        <td className="py-2 sm:py-3 px-2 sm:px-3 md:px-4">
                          <span className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs font-semibold ${
                            trip.status === 'Active'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-gray-200 text-gray-700'
                          }`}>
                            {trip.status}
                          </span>
                        </td>
                        <td className="py-2 sm:py-3 px-2 sm:px-3 md:px-4 font-semibold text-gray-900 text-xs sm:text-sm">{trip.fare}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Top Drivers */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-5 md:p-6">
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
                👑 Top Drivers
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {topDrivers.map((driver, idx) => (
                  <div
                    key={idx}
                    className="p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-cyan-50 transition-all cursor-pointer"
                  >
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-gray-900 text-xs sm:text-sm truncate">{driver.name}</p>
                        <p className="text-xs text-gray-600">{driver.trips} trips</p>
                      </div>
                      <p className="font-bold text-amber-500 text-xs sm:text-sm flex-shrink-0">{driver.rating}</p>
                    </div>
                    <p className="text-cyan-600 font-semibold text-xs sm:text-sm truncate">{driver.earnings}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Alert */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 sm:p-5 md:p-6 rounded-lg flex gap-3 sm:gap-4">
            <span className="text-xl sm:text-2xl flex-shrink-0">⚠️</span>
            <div className="min-w-0">
              <p className="font-semibold text-amber-900 text-xs sm:text-sm md:text-base">Maintenance Alert</p>
              <p className="text-amber-800 text-xs sm:text-sm">3 vehicles due for maintenance in next 7 days. Schedule now to avoid downtime.</p>
            </div>
          </div>

          {/* Spacer */}
          <div className="h-4"></div>
        </div>
      </div>
    </div>
  )
}
