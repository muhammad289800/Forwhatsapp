import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home - Britt Tech Group LLC',
  description: 'Professional IT and technology services for small and mid-sized businesses. Custom programming, facilities management, and consulting.',
}

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              IT Solutions That Drive Your Business Forward
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Professional technology services tailored for small and mid-sized businesses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition duration-300"
              >
                Get Started Today
              </Link>
              <Link
                href="/services"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition duration-300"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive IT solutions designed to help your business thrive in the digital age
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-primary-600 text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-3">Custom Programming</h3>
              <p className="text-gray-600 mb-4">
                Tailored software solutions (NAICS 541511) built to meet your specific business needs.
              </p>
              <Link href="/services/custom-programming" className="text-primary-600 font-semibold hover:underline">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-primary-600 text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-3">Computer Services</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive computer-related services (NAICS 541519) to keep your systems running smoothly.
              </p>
              <Link href="/services/computer-services" className="text-primary-600 font-semibold hover:underline">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-primary-600 text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold mb-3">Facilities Management</h3>
              <p className="text-gray-600 mb-4">
                Complete computer facilities management (NAICS 541513) for optimal infrastructure performance.
              </p>
              <Link href="/services/facilities-management" className="text-primary-600 font-semibold hover:underline">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-primary-600 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">Consulting</h3>
              <p className="text-gray-600 mb-4">
                Strategic technology consulting to help you make informed decisions and optimize operations.
              </p>
              <Link href="/services/consulting" className="text-primary-600 font-semibold hover:underline">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Britt Tech Group?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Our experienced professionals bring years of industry expertise to every project.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Response</h3>
              <p className="text-gray-600">
                Quick turnaround times and responsive support when you need it most.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cost-Effective</h3>
              <p className="text-gray-600">
                Competitive pricing designed for small and mid-sized businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Technology?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Let's discuss how we can help your business succeed
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition duration-300 inline-block"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
