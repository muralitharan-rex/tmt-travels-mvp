import React, { useState } from 'react'

export default function ActiveTrips() {
  const [trips, setTrips] = useState([
    { id: 'TRP-10020', company: 'HCL', employee: 'Karthik M', driver: 'Karthik', vehicle: 'TN59 AB 2231', pickup: 'KK Nagar', dropoff: 'SPIC IT Park', status: 'Active', startTime: '10:30 AM', eta: '10:45 AM', fare: '₹280' },
    { id: 'TRP-10022', company: 'TCS', employee: 'Suresh K', driver: 'Suresh', vehicle: 'TN59 AB 2232', pickup: 'Madurai Central', dropoff: 'Infosys Campus', status: 'Active', startTime: '10:15 AM', eta: '11:00 AM', fare: '₹450' },
    { id: 'TRP-10023', company: 'Zoho', employee: 'Priya S', driver: 'Ramesh', vehicle: 'TN59 AB 2233', pickup: 'Airport', dropoff: 'Hotel Residency', status: 'In Transit', startTime: '09:45 AM', eta: '10:30 AM', fare: '₹650' }
  ])

  const handleCompleteTrip = (id) => {
    setTrips(trips.filter(trip => trip.id !== id))
    alert('Trip completed successfully!')
  }

  const getStatusColor = (status) => {
    switch(status) {
      case 'Active': return 'bg-blue-100 text-blue-700'
      case 'In Transit': return 'bg-yellow-100 text-yellow-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
          📍 Active Trips
        </h1>
        <p className="text-gray-600">Current ongoing trips and routes</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600 text-sm font-medium mb-1">Active Now</p>
          <p className="text-3xl font-bold text-blue-600">{trips.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600 text-sm font-medium mb-1">Total Revenue</p>
          <p className="text-3xl font-bold text-green-600">₹1,380</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600 text-sm font-medium mb-1">Avg. Duration</p>
          <p className="text-3xl font-bold text-purple-600">32 mins</p>
        </div>
      </div>

      {/* Trips List */}
      <div className="space-y-6">
        {trips.map((trip) => (
          <div key={trip.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900">{trip.id}</h3>
                <p className="text-sm text-gray-600">{trip.company} • {trip.employee}</p>
              </div>
              <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(trip.status)}`}>
                {trip.status}
              </span>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              {/* Driver */}
              <div>
                <p className="text-xs text-gray-500 font-semibold mb-1">Driver</p>
                <p className="text-sm font-medium text-gray-900">{trip.driver}</p>
              </div>

              {/* Vehicle */}
              <div>
                <p className="text-xs text-gray-500 font-semibold mb-1">Vehicle</p>
                <p className="text-sm font-medium text-gray-900">{trip.vehicle}</p>
              </div>

              {/* Time */}
              <div>
                <p className="text-xs text-gray-500 font-semibold mb-1">Start Time</p>
                <p className="text-sm font-medium text-gray-900">{trip.startTime}</p>
              </div>

              {/* ETA */}
              <div>
                <p className="text-xs text-gray-500 font-semibold mb-1">ETA</p>
                <p className="text-sm font-medium text-gray-900">{trip.eta}</p>
              </div>
            </div>

            {/* Route */}
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <p className="text-xs text-gray-500 font-semibold mb-1">Pickup</p>
                  <p className="text-sm font-medium text-gray-900">📍 {trip.pickup}</p>
                </div>
                <div className="text-2xl text-gray-400">→</div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 font-semibold mb-1">Dropoff</p>
                  <p className="text-sm font-medium text-gray-900">🎯 {trip.dropoff}</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500 font-semibold mb-1">Fare</p>
                <p className="text-2xl font-bold text-cyan-600">{trip.fare}</p>
              </div>
              <button
                onClick={() => handleCompleteTrip(trip.id)}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
              >
                Complete Trip ✓
              </button>
            </div>
          </div>
        ))}
      </div>

      {trips.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No active trips right now</p>
        </div>
      )}
    </div>
  )
}
