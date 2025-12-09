import React from 'react'

export default function Dashboard({ user }) {
  const stats = [
    { label: 'Today Trips', value: '87', icon: '🚕', color: 'bg-blue-500' },
    { label: 'Active Drivers', value: '42', icon: '👨‍✈️', color: 'bg-green-500' },
    { label: 'Revenue Today', value: '₹1,25,600', icon: '💰', color: 'bg-yellow-500' },
    { label: 'Pending Invoices', value: '12', icon: '📋', color: 'bg-red-500' }
  ]

  const recentTrips = [
    { id: 'TRP-10021', company: 'Zoho', driver: 'Ramesh', status: 'Completed', fare: '₹320' },
    { id: 'TRP-10020', company: 'HCL', driver: 'Karthik', status: 'Active', fare: '₹280' },
    { id: 'TRP-10019', company: 'Honeywell', driver: 'Prakash', status: 'Completed', fare: '₹450' }
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Welcome, {user?.name} 👋</h1>
        <p className="text-gray-600 mt-2">Fleet Operations Dashboard</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-lg shadow">
            <div className={`${stat.color} text-white p-4 rounded-lg w-12 h-12 flex items-center justify-center text-2xl mb-4`}>
              {stat.icon}
            </div>
            <p className="text-gray-600 text-sm">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Trips</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">Trip ID</th>
                <th className="p-3 text-left">Company</th>
                <th className="p-3 text-left">Driver</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Fare</th>
              </tr>
            </thead>
            <tbody>
              {recentTrips.map((trip) => (
                <tr key={trip.id} className="border-t hover:bg-gray-50">
                  <td className="p-3 font-mono text-blue-600">{trip.id}</td>
                  <td className="p-3">{trip.company}</td>
                  <td className="p-3">{trip.driver}</td>
                  <td className="p-3">
                    <span className={`px-3 py-1 rounded-full text-white text-xs ${
                      trip.status === 'Active' ? 'bg-green-500' : 'bg-gray-500'
                    }`}>
                      {trip.status}
                    </span>
                  </td>
                  <td className="p-3 font-bold">{trip.fare}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
        <p className="text-orange-800">
          <strong>🤖 AI Alert:</strong> 3 vehicles due for maintenance in next 7 days
        </p>
      </div>
    </div>
  )
}
