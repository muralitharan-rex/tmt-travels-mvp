import React, { useState } from 'react'

export default function NewBooking() {
  const [formData, setFormData] = useState({
    company: 'Zoho Technologies',
    employeeName: 'Priya S',
    employeePhone: '9876543210',
    pickup: 'KK Nagar',
    drop: 'SPIC IT Park',
    vehicleType: 'Sedan',
    passengers: '1',
    specialRequirements: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    console.log('Booking submitted:', formData)
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">🚕 New Booking</h1>

      {submitted && (
        <div className="mb-6 bg-green-100 border border-green-400 text-green-700 p-4 rounded">
          ✅ Booking created successfully! Trip ID: TRP-{Math.floor(Math.random() * 9999)}
        </div>
      )}

      <div className="bg-white p-8 rounded-lg shadow">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Employee Name</label>
              <input
                type="text"
                name="employeeName"
                value={formData.employeeName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                name="employeePhone"
                value={formData.employeePhone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Passengers</label>
              <input
                type="number"
                name="passengers"
                value={formData.passengers}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location</label>
              <input
                type="text"
                name="pickup"
                value={formData.pickup}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Drop Location</label>
              <input
                type="text"
                name="drop"
                value={formData.drop}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Type</label>
            <select
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Sedan</option>
              <option>SUV</option>
              <option>Mini</option>
              <option>Tempo</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Special Requirements</label>
            <textarea
              name="specialRequirements"
              value={formData.specialRequirements}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
              placeholder="Any special requests..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold p-3 rounded transition"
          >
            Create Booking
          </button>
        </form>
      </div>

      <div className="mt-6 bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h3 className="font-bold text-gray-800 mb-3">💰 Fare Estimate</h3>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div>
            <p className="text-gray-600">Base Fare</p>
            <p className="text-lg font-bold">₹18/km</p>
          </div>
          <div>
            <p className="text-gray-600">Est. Distance</p>
            <p className="text-lg font-bold">12.8 km</p>
          </div>
          <div>
            <p className="text-gray-600">Total (Est.)</p>
            <p className="text-lg font-bold">₹320</p>
          </div>
        </div>
      </div>
    </div>
  )
}
