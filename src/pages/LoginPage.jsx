import React, { useState } from 'react'

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('admin@travels.com')
  const [password, setPassword] = useState('123456')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email === 'admin@travels.com' && password === '123456') {
      onLogin({ name: 'Admin', email, role: 'Admin' })
    } else {
      setError('Invalid credentials. Use admin@travels.com / 123456')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-bold text-center mb-2 text-blue-900">TMT Travels</h1>
        <p className="text-center text-gray-600 mb-6">Fleet Management System</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="admin@travels.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="123456"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold p-3 rounded transition"
          >
            Login
          </button>
        </form>

        <div className="mt-6 p-4 bg-blue-50 rounded border border-blue-200">
          <p className="text-sm text-gray-700">
            <strong>Demo Credentials:</strong>
          </p>
          <p className="text-sm text-gray-600">Email: admin@travels.com</p>
          <p className="text-sm text-gray-600">Password: 123456</p>
        </div>
      </div>
    </div>
  )
}
