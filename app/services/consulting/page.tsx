import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Technology Consulting Services - Britt Tech Group LLC',
  description: 'Strategic IT consulting services to help businesses make informed technology decisions and optimize operations.',
}

export default function Consulting() {
  return (
    <div>
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Technology Consulting</h1>
          <p className="text-xl text-primary-100">Strategic guidance for your technology decisions</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our Technology Consulting services provide expert guidance to help you make informed decisions about 
              your IT strategy, infrastructure, and technology investments. We combine deep technical expertise 
              with business acumen to deliver recommendations that align with your organizational goals and budget.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12">Consulting Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">IT Strategy & Planning</h3>
                <p className="text-gray-700">
                  Development of comprehensive IT strategies aligned with business objectives, including 
                  technology roadmaps and investment planning.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Digital Transformation</h3>
                <p className="text-gray-700">
                  Guidance on modernizing business processes, adopting new technologies, and leveraging 
                  digital tools for competitive advantage.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Technology Assessment</h3>
                <p className="text-gray-700">
                  Evaluation of current technology stack, identification of gaps, and recommendations 
                  for improvements and optimizations.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">System Architecture Design</h3>
                <p className="text-gray-700">
                  Design of scalable, secure, and efficient system architectures for new projects or 
                  infrastructure upgrades.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Vendor Selection</h3>
                <p className="text-gray-700">
                  Assistance in evaluating and selecting technology vendors, software solutions, and 
                  service providers.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Cloud Strategy</h3>
                <p className="text-gray-700">
                  Cloud migration planning, hybrid cloud strategies, and optimization of cloud infrastructure 
                  and costs.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Security Consulting</h3>
                <p className="text-gray-700">
                  Security assessments, compliance reviews, risk analysis, and development of security 
                  policies and procedures.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Cost Optimization</h3>
                <p className="text-gray-700">
                  Analysis of IT spending, identification of cost-saving opportunities, and optimization 
                  of technology investments.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12">Our Consulting Approach</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Discovery & Analysis</h3>
                  <p className="text-gray-700">In-depth understanding of your business, current state, challenges, and objectives.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Strategic Recommendations</h3>
                  <p className="text-gray-700">Data-driven recommendations with clear rationale, benefits, and implementation considerations.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Implementation Support</h3>
                  <p className="text-gray-700">Guidance and support during implementation to ensure successful execution of recommendations.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Ongoing Advisory</h3>
                  <p className="text-gray-700">Continued support and strategic guidance as your business and technology needs evolve.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12">Why Choose Our Consulting Services?</h2>
            <ul className="space-y-3 mb-8 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-xl">✓</span>
                <span><strong>Business-Focused:</strong> Recommendations that align with your business goals and constraints</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-xl">✓</span>
                <span><strong>Unbiased Advice:</strong> Objective recommendations based on your best interests</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-xl">✓</span>
                <span><strong>Proven Expertise:</strong> Consultants with extensive experience across industries</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-xl">✓</span>
                <span><strong>Practical Solutions:</strong> Recommendations that are feasible and implementable</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold text-xl">✓</span>
                <span><strong>Cost-Effective:</strong> Strategic guidance that maximizes ROI on technology investments</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 mt-12">Success Story</h2>
            <div className="bg-primary-50 p-8 rounded-lg mb-8">
              <p className="text-gray-700 mb-4">
                <strong>Client:</strong> Growing Professional Services Firm
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Challenge:</strong> The client was experiencing rapid growth and needed guidance on 
                scaling their IT infrastructure, selecting new systems, and developing a technology roadmap 
                for the next 3-5 years.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Solution:</strong> We conducted a comprehensive technology assessment, evaluated 
                multiple vendor options, developed a strategic IT roadmap, and provided ongoing advisory 
                support during implementation.
              </p>
              <p className="text-gray-700">
                <strong>Results:</strong> The client successfully implemented a scalable cloud-based infrastructure, 
                selected and deployed new business systems, and established a clear technology strategy. They 
                avoided costly mistakes, saved approximately $150,000 in unnecessary technology purchases, 
                and positioned themselves for continued growth.
              </p>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition duration-300 inline-block"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
