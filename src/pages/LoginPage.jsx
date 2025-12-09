import React, { useState } from 'react'

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('admin@travels.com')
  const [password, setPassword] = useState('123456')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    setTimeout(() => {
      if (email && password) {
        const name = email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1)
        onLogin({ name, email })
      } else {
        setError('Please fill in all fields')
      }
      setLoading(false)
    }, 500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-500 to-teal-600 px-8 py-12 text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-teal-600 bg-clip-text text-transparent">T</span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">TMT Travels</h1>
            <p className="text-cyan-100">Fleet Management System</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition"
                placeholder="admin@travels.com"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition"
                placeholder="••••••"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-cyan-500 to-teal-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-200 disabled:opacity-50"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          {/* Demo Info */}
          <div className="bg-gray-50 border-t border-gray-200 px-8 py-6">
            <p className="text-sm font-semibold text-gray-700 mb-3">Demo Credentials:</p>
            <div className="text-sm text-gray-600 space-y-1">
              <p><span className="font-medium">Email:</span> admin@travels.com</p>
              <p><span className="font-medium">Password:</span> 123456</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
