import React, { useState } from 'react'

export default function DriverList() {
  const [drivers, setDrivers] = useState([
    { id: 1, name: 'Ramesh Kumar', status: 'Online', phone: '9876543210', rating: 4.8, trips: 23, license: 'TN-DR12345', expiry: '12 Jan 2026', earnings: '₹8,450' },
    { id: 2, name: 'Karthik M', status: 'Online', phone: '9876543211', rating: 4.9, trips: 19, license: 'TN-DR12346', expiry: '08 Mar 2026', earnings: '₹7,230' },
    { id: 3, name: 'Prakash R', status: 'Offline', phone: '9876543212', rating: 4.7, trips: 18, license: 'TN-DR12347', expiry: '25 Feb 2026', earnings: '₹6,890' },
    { id: 4, name: 'Suresh K', status: 'Online', phone: '9876543213', rating: 4.6, trips: 21, license: 'TN-DR12348', expiry: '10 Apr 2026', earnings: '₹8,120' }
  ])

  const getStatusBadge = (status) => (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
      status === 'Online'
        ? 'bg-green-100 text-green-700'
        : 'bg-gray-200 text-gray-700'
    }`}>
      {status}
    </span>
  )

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            👨‍💼 Driver Management
          </h1>
          <p className="text-gray-600">Manage and monitor all drivers</p>
        </div>
        <button className="bg-gradient-to-r from-cyan-500 to-teal-600 text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg transition-all">
          + Add Driver
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600 text-sm font-medium mb-1">Total Drivers</p>
          <p className="text-3xl font-bold text-blue-600">{drivers.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600 text-sm font-medium mb-1">Online Now</p>
          <p className="text-3xl font-bold text-green-600">{drivers.filter(d => d.status === 'Online').length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600 text-sm font-medium mb-1">Avg Rating</p>
          <p className="text-3xl font-bold text-yellow-600">4.8⭐</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600 text-sm font-medium mb-1">Total Earnings</p>
          <p className="text-3xl font-bold text-purple-600">₹30.69K</p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Name</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Status</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Phone</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Rating</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Trips</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">License</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Earnings</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {drivers.map((driver) => (
                <tr key={driver.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <p className="font-semibold text-gray-900">{driver.name}</p>
                  </td>
                  <td className="py-4 px-6">
                    {getStatusBadge(driver.status)}
                  </td>
                  <td className="py-4 px-6 text-gray-700">{driver.phone}</td>
                  <td className="py-4 px-6">
                    <p className="font-semibold text-amber-600">{driver.rating}⭐</p>
                  </td>
                  <td className="py-4 px-6">
                    <p className="font-semibold text-gray-900">{driver.trips}</p>
                  </td>
                  <td className="py-4 px-6">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{driver.license}</p>
                      <p className="text-xs text-gray-500">Exp: {driver.expiry}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <p className="font-bold text-green-600">{driver.earnings}</p>
                  </td>
                  <td className="py-4 px-6">
                    <button className="text-cyan-600 hover:text-cyan-700 font-medium text-sm">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
