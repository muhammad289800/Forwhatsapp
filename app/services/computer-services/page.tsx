import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Other Computer Related Services - Britt Tech Group LLC',
  description: 'NAICS 541519 - Comprehensive computer services including maintenance, support, and technical assistance.',
}

export default function ComputerServices() {
  return (
    <div>
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Other Computer Related Services</h1>
          <p className="text-xl text-primary-100">NAICS Code: 541519</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our comprehensive computer-related services cover a wide range of technical support, maintenance, 
              and optimization needs. We provide reliable, cost-effective solutions to keep your computer systems 
              running efficiently and securely.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12">Service Offerings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">System Maintenance & Updates</h3>
                <p className="text-gray-700">
                  Regular maintenance, software updates, security patches, and system optimization to ensure peak performance.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Hardware Support</h3>
                <p className="text-gray-700">
                  Installation, configuration, repair, and replacement of computer hardware components.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Network Configuration</h3>
                <p className="text-gray-700">
                  Setup, configuration, and troubleshooting of local area networks (LAN) and wireless networks.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Security Services</h3>
                <p className="text-gray-700">
                  Antivirus installation, firewall configuration, security audits, and threat protection.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Data Backup & Recovery</h3>
                <p className="text-gray-700">
                  Automated backup solutions, disaster recovery planning, and data restoration services.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Technical Support</h3>
                <p className="text-gray-700">
                  Help desk services, remote support, on-site assistance, and user training.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Software Installation & Configuration</h3>
                <p className="text-gray-700">
                  Professional installation and setup of business software applications.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Performance Optimization</h3>
                <p className="text-gray-700">
                  System tuning, cleanup, and optimization to improve speed and efficiency.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12">Why Choose Our Services?</h2>
            <ul className="space-y-3 mb-8 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-xl">✓</span>
                <span><strong>Rapid Response:</strong> Quick turnaround times for urgent issues</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-xl">✓</span>
                <span><strong>Experienced Technicians:</strong> Certified professionals with extensive expertise</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-xl">✓</span>
                <span><strong>Cost-Effective:</strong> Competitive pricing with transparent billing</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-xl">✓</span>
                <span><strong>Preventive Maintenance:</strong> Proactive approach to minimize downtime</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-xl">✓</span>
                <span><strong>Flexible Support Options:</strong> Remote, on-site, or hybrid support models</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 mt-12">Success Story</h2>
            <div className="bg-primary-50 p-8 rounded-lg mb-8">
              <p className="text-gray-700 mb-4">
                <strong>Client:</strong> Local Retail Chain (15 locations)
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Challenge:</strong> Frequent computer issues across multiple locations causing 
                operational disruptions and customer service problems.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Solution:</strong> We implemented a comprehensive maintenance program including 
                regular on-site visits, remote monitoring, automated backups, and 24/7 support hotline.
              </p>
              <p className="text-gray-700">
                <strong>Results:</strong> System downtime reduced by 90%, improved customer satisfaction, 
                and significant cost savings through preventive maintenance. The client now has peace of 
                mind knowing their systems are professionally maintained.
              </p>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition duration-300 inline-block"
              >
                Request Service
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
