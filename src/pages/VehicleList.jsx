import React from 'react'

export default function VehicleList() {
  const vehicles = [
    {
      id: 1,
      number: 'TN59 AB 1122',
      type: 'Sedan',
      status: 'Active',
      driver: 'Ramesh',
      kmMonth: 1870,
      rc: '14 Aug 2026',
      fc: '03 May 2025',
      insurance: '12 Jan 2026',
      odometer: 78230
    },
    {
      id: 2,
      number: 'TN59 AA 5544',
      type: 'SUV',
      status: 'Active',
      driver: 'Karthik',
      kmMonth: 2100,
      rc: '22 Nov 2025',
      fc: '10 Jun 2025',
      insurance: '08 Mar 2026',
      odometer: 95100
    },
    {
      id: 3,
      number: 'TN59 AB 2231',
      type: 'Sedan',
      status: 'Maintenance',
      driver: '-',
      kmMonth: 0,
      rc: '05 Sep 2026',
      fc: '15 Jul 2024',
      insurance: '25 Feb 2026',
      odometer: 62450
    }
  ]

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">🚗 Vehicle Management</h1>

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="p-4 text-left">Reg No</th>
              <th className="p-4 text-left">Type</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Driver</th>
              <th className="p-4 text-left">KM/Month</th>
              <th className="p-4 text-left">RC Expiry</th>
              <th className="p-4 text-left">FC Expiry</th>
              <th className="p-4 text-left">Insurance</th>
              <th className="p-4 text-left">Odometer</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle) => (
              <tr key={vehicle.id} className="border-t hover:bg-gray-50">
                <td className="p-4 font-mono font-bold text-blue-600">{vehicle.number}</td>
                <td className="p-4">{vehicle.type}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-xs font-bold ${
                      vehicle.status === 'Active' ? 'bg-green-500' : 'bg-orange-500'
                    }`}
                  >
                    {vehicle.status}
                  </span>
                </td>
                <td className="p-4">{vehicle.driver}</td>
                <td className="p-4 font-bold">{vehicle.kmMonth}</td>
                <td className="p-4 text-xs">{vehicle.rc}</td>
                <td className="p-4 text-xs">{vehicle.fc}</td>
                <td className="p-4 text-xs">{vehicle.insurance}</td>
                <td className="p-4 font-mono">{vehicle.odometer} km</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <p className="text-sm text-gray-600">Total Vehicles</p>
          <p className="text-3xl font-bold text-blue-600">28</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <p className="text-sm text-gray-600">Active Now</p>
          <p className="text-3xl font-bold text-green-600">25</p>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
          <p className="text-sm text-gray-600">Under Maintenance</p>
          <p className="text-3xl font-bold text-orange-600">2</p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
          <p className="text-sm text-gray-600">Docs Expiring Soon</p>
          <p className="text-3xl font-bold text-red-600">5</p>
        </div>
      </div>

      <div className="mt-6 bg-red-50 border-l-4 border-red-500 p-4 rounded">
        <p className="text-red-800">
          <strong>⚠️ Alert:</strong> FC for TN59 AB 2231 expired on 15 Jul 2024. Please renew immediately!
        </p>
      </div>
    </div>
  )
}
