import React, { useState } from 'react'

export default function VehicleList() {
  const [vehicles, setVehicles] = useState([
    { id: 1, registration: 'TN59 AB 2231', type: 'Sedan', model: 'Hyundai Xcent', status: 'Active', driver: 'Ramesh K', mileage: '45,230 km', lastService: '15 Nov 2024', nextService: '15 Dec 2024', condition: 'Good' },
    { id: 2, registration: 'TN59 AB 2232', type: 'Sedan', model: 'Tata Tigor', status: 'Active', driver: 'Karthik M', mileage: '38,560 km', lastService: '20 Nov 2024', nextService: '20 Dec 2024', condition: 'Good' },
    { id: 3, registration: 'TN59 AB 2233', type: 'SUV', model: 'Mahindra XUV300', status: 'Maintenance', driver: '-', mileage: '52,100 km', lastService: '10 Nov 2024', nextService: '10 Jan 2025', condition: 'Fair' },
    { id: 4, registration: 'TN59 AB 2234', type: 'Van', model: 'Force Tempo', status: 'Active', driver: 'Suresh K', mileage: '62,450 km', lastService: '05 Nov 2024', nextService: '05 Jan 2025', condition: 'Good' }
  ])

  const getStatusColor = (status) => {
    switch(status) {
      case 'Active': return 'bg-green-100 text-green-700'
      case 'Maintenance': return 'bg-orange-100 text-orange-700'
      case 'Inactive': return 'bg-gray-200 text-gray-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const getConditionColor = (condition) => {
    switch(condition) {
      case 'Good': return 'bg-green-100 text-green-700'
      case 'Fair': return 'bg-yellow-100 text-yellow-700'
      case 'Poor': return 'bg-red-100 text-red-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            🚗 Vehicle Management
          </h1>
          <p className="text-gray-600">Monitor and maintain fleet vehicles</p>
        </div>
        <button className="bg-gradient-to-r from-cyan-500 to-teal-600 text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg transition-all">
          + Add Vehicle
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600 text-sm font-medium mb-1">Total Vehicles</p>
          <p className="text-3xl font-bold text-blue-600">{vehicles.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600 text-sm font-medium mb-1">Active</p>
          <p className="text-3xl font-bold text-green-600">{vehicles.filter(v => v.status === 'Active').length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600 text-sm font-medium mb-1">In Maintenance</p>
          <p className="text-3xl font-bold text-orange-600">{vehicles.filter(v => v.status === 'Maintenance').length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600 text-sm font-medium mb-1">Avg Mileage</p>
          <p className="text-3xl font-bold text-purple-600">49.6K</p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Registration</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Type</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Model</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Status</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Driver</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Mileage</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Next Service</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Condition</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map((vehicle) => (
                <tr key={vehicle.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <p className="font-semibold text-cyan-600">{vehicle.registration}</p>
                  </td>
                  <td className="py-4 px-6 text-gray-900">{vehicle.type}</td>
                  <td className="py-4 px-6 text-gray-900">{vehicle.model}</td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(vehicle.status)}`}>
                      {vehicle.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-900">{vehicle.driver}</td>
                  <td className="py-4 px-6 text-gray-900">{vehicle.mileage}</td>
                  <td className="py-4 px-6">
                    <div>
                      <p className="text-gray-900 font-medium">{vehicle.nextService}</p>
                      <p className="text-xs text-gray-500">Last: {vehicle.lastService}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getConditionColor(vehicle.condition)}`}>
                      {vehicle.condition}
                    </span>
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
