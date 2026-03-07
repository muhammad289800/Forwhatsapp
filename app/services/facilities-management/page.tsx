import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Computer Facilities Management Services - Britt Tech Group LLC',
  description: 'NAICS 541513 - Complete computer facilities management including infrastructure monitoring and support.',
}

export default function FacilitiesManagement() {
  return (
    <div>
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Computer Facilities Management Services</h1>
          <p className="text-xl text-primary-100">NAICS Code: 541513</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our Computer Facilities Management Services provide comprehensive oversight and management of your 
              entire IT infrastructure. We take responsibility for ensuring your computer facilities operate 
              efficiently, securely, and reliably, allowing you to focus on your core business operations.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12">Comprehensive Management Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Infrastructure Monitoring</h3>
                <p className="text-gray-700">
                  24/7 monitoring of servers, networks, storage systems, and critical infrastructure components 
                  with proactive alerting and issue resolution.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Capacity Planning</h3>
                <p className="text-gray-700">
                  Analysis and forecasting to ensure adequate resources for current and future business needs, 
                  preventing performance bottlenecks.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Disaster Recovery & Business Continuity</h3>
                <p className="text-gray-700">
                  Comprehensive backup strategies, disaster recovery planning, and business continuity solutions 
                  to minimize downtime and data loss.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Security Management</h3>
                <p className="text-gray-700">
                  End-to-end security management including firewall administration, intrusion detection, 
                  vulnerability assessments, and compliance monitoring.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Performance Optimization</h3>
                <p className="text-gray-700">
                  Continuous performance tuning, resource optimization, and system improvements to maximize 
                  efficiency and reduce costs.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Vendor Management</h3>
                <p className="text-gray-700">
                  Coordination with hardware and software vendors, license management, and contract oversight.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Change Management</h3>
                <p className="text-gray-700">
                  Controlled implementation of system changes, updates, and upgrades with minimal disruption.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Reporting & Analytics</h3>
                <p className="text-gray-700">
                  Regular performance reports, utilization analytics, and strategic recommendations for 
                  infrastructure improvements.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12">Management Approach</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Assessment & Planning</h3>
                  <p className="text-gray-700">Comprehensive evaluation of your current infrastructure and development of a management strategy.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Implementation</h3>
                  <p className="text-gray-700">Deployment of monitoring tools, management processes, and support systems.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Ongoing Management</h3>
                  <p className="text-gray-700">Continuous monitoring, maintenance, optimization, and proactive issue resolution.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Continuous Improvement</h3>
                  <p className="text-gray-700">Regular reviews, performance analysis, and strategic recommendations for enhancement.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12">Benefits</h2>
            <ul className="space-y-3 mb-8 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-xl">✓</span>
                <span><strong>Reduced Downtime:</strong> Proactive management prevents issues before they impact operations</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-xl">✓</span>
                <span><strong>Cost Predictability:</strong> Fixed monthly costs instead of unpredictable emergency expenses</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-xl">✓</span>
                <span><strong>Expert Oversight:</strong> Dedicated team of specialists managing your infrastructure</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-xl">✓</span>
                <span><strong>Scalability:</strong> Infrastructure that grows with your business needs</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-xl">✓</span>
                <span><strong>Compliance:</strong> Ensure adherence to industry regulations and standards</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 mt-12">Success Story</h2>
            <div className="bg-primary-50 p-8 rounded-lg mb-8">
              <p className="text-gray-700 mb-4">
                <strong>Client:</strong> Mid-Sized Financial Services Firm
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Challenge:</strong> The client needed to ensure 99.9% uptime for critical financial 
                systems while managing complex infrastructure across multiple locations with limited internal IT resources.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Solution:</strong> We implemented comprehensive facilities management including 24/7 
                monitoring, automated backups, disaster recovery procedures, security management, and dedicated 
                support team.
              </p>
              <p className="text-gray-700">
                <strong>Results:</strong> Achieved 99.95% uptime, reduced infrastructure management costs by 30%, 
                improved security posture, and enabled the client to focus on core business activities. The 
                client reported significant operational improvements and peace of mind.
              </p>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition duration-300 inline-block"
              >
                Discuss Management Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
