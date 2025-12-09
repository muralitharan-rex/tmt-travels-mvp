import React from 'react'

export default function DriverList() {
  const drivers = [
    {
      id: 1,
      name: 'Ramesh Kumar',
      status: 'Online',
      phone: '9876543210',
      rating: 4.7,
      trips: 5,
      license: 'TN-DR12345',
      expiry: '12 Jan 2026',
      earnings: '₹3,200'
    },
    {
      id: 2,
      name: 'Karthik',
      status: 'Online',
      phone: '8765432109',
      rating: 4.5,
      trips: 3,
      license: 'TN-DR12346',
      expiry: '08 Mar 2026',
      earnings: '₹2,800'
    },
    {
      id: 3,
      name: 'Prakash',
      status: 'Offline',
      phone: '7654321098',
      rating: 4.8,
      trips: 12,
      license: 'TN-DR12347',
      expiry: '25 Feb 2026',
      earnings: '₹4,100'
    }
  ]

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">👨‍✈️ Driver Management</h1>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Rating</th>
              <th className="p-4 text-left">Today Trips</th>
              <th className="p-4 text-left">License</th>
              <th className="p-4 text-left">Expiry</th>
              <th className="p-4 text-left">Earnings</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((driver) => (
              <tr key={driver.id} className="border-t hover:bg-gray-50">
                <td className="p-4 font-bold">{driver.name}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-xs font-bold ${
                      driver.status === 'Online' ? 'bg-green-500' : 'bg-gray-500'
                    }`}
                  >
                    {driver.status}
                  </span>
                </td>
                <td className="p-4 font-mono">{driver.phone}</td>
                <td className="p-4">
                  <span className="text-yellow-500 font-bold">⭐ {driver.rating}</span>
                </td>
                <td className="p-4 font-bold">{driver.trips}</td>
                <td className="p-4 font-mono text-sm">{driver.license}</td>
                <td className="p-4 text-sm">{driver.expiry}</td>
                <td className="p-4 font-bold text-green-600">{driver.earnings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <p className="text-sm text-gray-600">Total Drivers</p>
          <p className="text-3xl font-bold text-blue-600">42</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <p className="text-sm text-gray-600">Online Now</p>
          <p className="text-3xl font-bold text-green-600">38</p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <p className="text-sm text-gray-600">Avg Rating</p>
          <p className="text-3xl font-bold text-yellow-600">4.7 ⭐</p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
          <p className="text-sm text-gray-600">License Expiring</p>
          <p className="text-3xl font-bold text-red-600">3</p>
        </div>
      </div>
    </div>
  )
}
