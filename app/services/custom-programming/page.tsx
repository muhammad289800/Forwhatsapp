import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom Computer Programming Services - Britt Tech Group LLC',
  description: 'NAICS 541511 - Custom software development and programming services tailored for your business needs.',
}

export default function CustomProgramming() {
  return (
    <div>
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Custom Computer Programming Services</h1>
          <p className="text-xl text-primary-100">NAICS Code: 541511</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our Custom Computer Programming Services provide tailored software solutions designed specifically 
              for your business requirements. We understand that off-the-shelf software often falls short of 
              meeting unique business needs, which is why we specialize in creating custom applications that 
              perfectly align with your workflows and objectives.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Web Application Development</h3>
                <p className="text-gray-700">
                  Custom web applications built with modern frameworks, responsive design, and scalable architecture.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Desktop Applications</h3>
                <p className="text-gray-700">
                  Native desktop software solutions for Windows, macOS, and Linux platforms.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Mobile App Development</h3>
                <p className="text-gray-700">
                  iOS and Android applications designed to enhance productivity and customer engagement.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">API Development & Integration</h3>
                <p className="text-gray-700">
                  RESTful APIs, microservices, and seamless integration with existing systems.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Database Solutions</h3>
                <p className="text-gray-700">
                  Custom database design, optimization, and management systems.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Legacy System Modernization</h3>
                <p className="text-gray-700">
                  Upgrading and modernizing outdated systems to current technologies.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12">Our Development Process</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Requirements Analysis</h3>
                  <p className="text-gray-700">We work closely with you to understand your business needs, goals, and technical requirements.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Design & Planning</h3>
                  <p className="text-gray-700">Our team creates detailed specifications, architecture designs, and project timelines.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Development & Testing</h3>
                  <p className="text-gray-700">Agile development with regular updates, comprehensive testing, and quality assurance.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Deployment & Support</h3>
                  <p className="text-gray-700">Smooth deployment, training, documentation, and ongoing maintenance support.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12">Success Story</h2>
            <div className="bg-primary-50 p-8 rounded-lg mb-8">
              <p className="text-gray-700 mb-4">
                <strong>Client:</strong> Regional Manufacturing Company
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Challenge:</strong> The client needed a custom inventory management system that integrated 
                with their existing ERP and provided real-time tracking across multiple warehouse locations.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Solution:</strong> We developed a web-based inventory management system with mobile barcode 
                scanning capabilities, real-time synchronization, and automated reporting features.
              </p>
              <p className="text-gray-700">
                <strong>Results:</strong> The system reduced inventory discrepancies by 85%, improved order 
                fulfillment speed by 40%, and provided real-time visibility across all locations. The client 
                reported significant cost savings and improved customer satisfaction.
              </p>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition duration-300 inline-block"
              >
                Get a Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
