import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services - Britt Tech Group LLC',
  description: 'Comprehensive IT services including custom programming, computer services, facilities management, and consulting.',
}

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-primary-100">Comprehensive IT solutions for your business</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-primary-600 text-5xl mb-4">💻</div>
              <h2 className="text-2xl font-bold mb-4">Custom Computer Programming Services</h2>
              <p className="text-gray-600 mb-4">
                <strong>NAICS Code: 541511</strong>
              </p>
              <p className="text-gray-700 mb-6">
                Tailored software development solutions designed specifically for your business needs. 
                From web applications to enterprise systems, we build custom software that drives efficiency and growth.
              </p>
              <Link
                href="/services/custom-programming"
                className="text-primary-600 font-semibold hover:underline inline-flex items-center"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-primary-600 text-5xl mb-4">🔧</div>
              <h2 className="text-2xl font-bold mb-4">Other Computer Related Services</h2>
              <p className="text-gray-600 mb-4">
                <strong>NAICS Code: 541519</strong>
              </p>
              <p className="text-gray-700 mb-6">
                Comprehensive computer services including system maintenance, troubleshooting, upgrades, 
                and technical support to keep your technology infrastructure running smoothly.
              </p>
              <Link
                href="/services/computer-services"
                className="text-primary-600 font-semibold hover:underline inline-flex items-center"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-primary-600 text-5xl mb-4">🏢</div>
              <h2 className="text-2xl font-bold mb-4">Computer Facilities Management Services</h2>
              <p className="text-gray-600 mb-4">
                <strong>NAICS Code: 541513</strong>
              </p>
              <p className="text-gray-700 mb-6">
                Complete management of your computer facilities including infrastructure monitoring, 
                capacity planning, disaster recovery, and 24/7 support services.
              </p>
              <Link
                href="/services/facilities-management"
                className="text-primary-600 font-semibold hover:underline inline-flex items-center"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-primary-600 text-5xl mb-4">📊</div>
              <h2 className="text-2xl font-bold mb-4">Technology Consulting</h2>
              <p className="text-gray-600 mb-4">
                <strong>Strategic IT Consulting</strong>
              </p>
              <p className="text-gray-700 mb-6">
                Expert guidance on technology strategy, digital transformation, system architecture, 
                and technology selection to help you make informed decisions.
              </p>
              <Link
                href="/services/consulting"
                className="text-primary-600 font-semibold hover:underline inline-flex items-center"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Contact us today to discuss your technology needs
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
