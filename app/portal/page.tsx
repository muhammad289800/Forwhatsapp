'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Portal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const [error, setError] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would authenticate with a backend API
    if (credentials.email && credentials.password) {
      setIsLoggedIn(true)
      setError('')
    } else {
      setError('Please enter both email and password')
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setCredentials({ email: '', password: '' })
  }

  if (isLoggedIn) {
    return (
      <div>
        <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Client Portal</h1>
                <p className="text-xl text-primary-100">Welcome back!</p>
              </div>
              <button
                onClick={handleLogout}
                className="bg-white text-primary-600 px-6 py-2 rounded-lg font-semibold hover:bg-primary-50 transition duration-300"
              >
                Logout
              </button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Active Projects</h3>
                <div className="text-3xl font-bold text-primary-600 mb-2">3</div>
                <p className="text-gray-600 text-sm">Projects in progress</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Support Tickets</h3>
                <div className="text-3xl font-bold text-primary-600 mb-2">2</div>
                <p className="text-gray-600 text-sm">Open tickets</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Documents</h3>
                <div className="text-3xl font-bold text-primary-600 mb-2">12</div>
                <p className="text-gray-600 text-sm">Available documents</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Projects */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Your Projects</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary-600 pl-4">
                    <h3 className="font-semibold text-lg mb-2">Website Redesign</h3>
                    <p className="text-gray-600 text-sm mb-2">Status: In Progress</p>
                    <p className="text-gray-600 text-sm mb-3">Progress: 65%</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  <div className="border-l-4 border-primary-600 pl-4">
                    <h3 className="font-semibold text-lg mb-2">Cloud Migration</h3>
                    <p className="text-gray-600 text-sm mb-2">Status: Planning</p>
                    <p className="text-gray-600 text-sm mb-3">Progress: 30%</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                  <div className="border-l-4 border-primary-600 pl-4">
                    <h3 className="font-semibold text-lg mb-2">Security Audit</h3>
                    <p className="text-gray-600 text-sm mb-2">Status: In Progress</p>
                    <p className="text-gray-600 text-sm mb-3">Progress: 80%</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Support Tickets */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Support Tickets</h2>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">Email Server Issue</h3>
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Open</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">Created: March 5, 2026</p>
                    <p className="text-gray-600 text-sm">Last update: March 6, 2026</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">Software Installation Request</h3>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">In Progress</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">Created: March 3, 2026</p>
                    <p className="text-gray-600 text-sm">Last update: March 6, 2026</p>
                  </div>
                </div>
                <button className="mt-4 text-primary-600 font-semibold hover:underline">
                  Create New Ticket →
                </button>
              </div>

              {/* Documents */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Documents & Resources</h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">📄</span>
                      <span>Project Proposal - Website Redesign</span>
                    </div>
                    <button className="text-primary-600 hover:underline text-sm">Download</button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">📊</span>
                      <span>Monthly Status Report - February</span>
                    </div>
                    <button className="text-primary-600 hover:underline text-sm">Download</button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">📋</span>
                      <span>Service Agreement</span>
                    </div>
                    <button className="text-primary-600 hover:underline text-sm">Download</button>
                  </div>
                </div>
              </div>

              {/* Account Info */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Account Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Company Name</label>
                    <p className="text-gray-900">Acme Corporation</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Contact Email</label>
                    <p className="text-gray-900">contact@acmecorp.com</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Service Plan</label>
                    <p className="text-gray-900">Premium Support</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Next Billing Date</label>
                    <p className="text-gray-900">April 1, 2026</p>
                  </div>
                </div>
                <button className="mt-4 text-primary-600 font-semibold hover:underline">
                  Update Account →
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div>
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Client Portal</h1>
          <p className="text-xl text-primary-100">Secure access to your projects and services</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>
            
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={credentials.email}
                  onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember"
                    name="remember"
                    type="checkbox"
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <Link href="#" className="text-sm text-primary-600 hover:underline">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition duration-300"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Link href="/contact" className="text-primary-600 font-semibold hover:underline">
                  Contact us to get started
                </Link>
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                🔒 Your connection is secured with SSL encryption
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
