import React from 'react'

export default function ActiveTrips() {
  const activeTrips = [
    {
      id: 'TRP-10021',
      company: 'Zoho Technologies',
      employee: 'Priya S',
      driver: 'Ramesh',
      vehicle: 'TN59 AB 2231',
      status: 'Trip Started',
      pickup: 'KK Nagar',
      drop: 'SPIC IT Park',
      gps: '9.9362, 78.1234',
      eta: '12 mins',
      fare: '₹320'
    },
    {
      id: 'TRP-10020',
      company: 'HCL Technologies',
      employee: 'Sangeetha',
      driver: 'Karthik',
      vehicle: 'TN59 AA 5544',
      status: 'Awaiting Pickup',
      pickup: 'Anna Nagar',
      drop: 'ELCOT',
      gps: '9.9250, 78.1150',
      eta: '5 mins',
      fare: '₹280'
    }
  ]

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">📍 Active Trips</h1>

      <div className="space-y-6">
        {activeTrips.map((trip) => (
          <div key={trip.id} className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-800">{trip.id}</h2>
                <p className="text-gray-600">{trip.company}</p>
              </div>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-bold">
                {trip.status}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <p className="text-sm text-gray-600">Driver</p>
                <p className="font-bold text-gray-800">{trip.driver}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Vehicle</p>
                <p className="font-mono font-bold text-gray-800">{trip.vehicle}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Employee</p>
                <p className="font-bold text-gray-800">{trip.employee}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">ETA</p>
                <p className="font-bold text-green-600">{trip.eta}</p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded mb-4">
              <div className="flex justify-between mb-2">
                <div>
                  <p className="text-xs text-gray-600">Pickup</p>
                  <p className="font-bold">{trip.pickup}</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl">→</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Drop</p>
                  <p className="font-bold">{trip.drop}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-gray-600">GPS</p>
                <p className="font-mono text-xs">{trip.gps}</p>
              </div>
              <div>
                <p className="text-gray-600">Fare</p>
                <p className="font-bold text-lg">{trip.fare}</p>
              </div>
              <div className="text-right">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-xs">
                  📞 Call Driver
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
