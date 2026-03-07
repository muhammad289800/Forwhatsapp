import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Resources - Britt Tech Group LLC',
  description: 'Access blog articles, downloadable resources, and frequently asked questions about IT services.',
}

export default function Resources() {
  return (
    <div>
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources</h1>
          <p className="text-xl text-primary-100">Knowledge, tools, and insights for your business</p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Blog Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">March 5, 2026</div>
                <h3 className="text-xl font-semibold mb-3">5 Essential IT Security Practices for Small Businesses</h3>
                <p className="text-gray-600 mb-4">
                  Learn the fundamental security practices every small business should implement to protect 
                  their data and systems from cyber threats.
                </p>
                <Link href="#" className="text-primary-600 font-semibold hover:underline">
                  Read More →
                </Link>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">February 28, 2026</div>
                <h3 className="text-xl font-semibold mb-3">Cloud Migration: A Step-by-Step Guide</h3>
                <p className="text-gray-600 mb-4">
                  Discover the benefits of cloud migration and learn how to plan and execute a successful 
                  transition to cloud-based infrastructure.
                </p>
                <Link href="#" className="text-primary-600 font-semibold hover:underline">
                  Read More →
                </Link>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">February 20, 2026</div>
                <h3 className="text-xl font-semibold mb-3">Maximizing ROI on Technology Investments</h3>
                <p className="text-gray-600 mb-4">
                  Strategies for making smart technology investments that deliver measurable returns and 
                  support business growth.
                </p>
                <Link href="#" className="text-primary-600 font-semibold hover:underline">
                  Read More →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Downloadable Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-xl font-semibold mb-3">IT Security Checklist</h3>
              <p className="text-gray-600 mb-4">
                A comprehensive checklist to help you assess and improve your IT security posture.
              </p>
              <button className="text-primary-600 font-semibold hover:underline">
                Download PDF →
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">Technology Budget Planning Guide</h3>
              <p className="text-gray-600 mb-4">
                A guide to help you plan and budget for technology investments effectively.
              </p>
              <button className="text-primary-600 font-semibold hover:underline">
                Download PDF →
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-3">IT Vendor Evaluation Template</h3>
              <p className="text-gray-600 mb-4">
                A template to help you evaluate and compare technology vendors and solutions.
              </p>
              <button className="text-primary-600 font-semibold hover:underline">
                Download PDF →
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold mb-3">Disaster Recovery Planning Checklist</h3>
              <p className="text-gray-600 mb-4">
                Essential steps for creating a comprehensive disaster recovery plan.
              </p>
              <button className="text-primary-600 font-semibold hover:underline">
                Download PDF →
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-3">Digital Transformation Roadmap</h3>
              <p className="text-gray-600 mb-4">
                A framework for planning and executing your digital transformation initiatives.
              </p>
              <button className="text-primary-600 font-semibold hover:underline">
                Download PDF →
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-3">Cybersecurity Best Practices Guide</h3>
              <p className="text-gray-600 mb-4">
                Best practices and recommendations for protecting your business from cyber threats.
              </p>
              <button className="text-primary-600 font-semibold hover:underline">
                Download PDF →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">What types of businesses do you serve?</h3>
              <p className="text-gray-700">
                We specialize in serving small and mid-sized businesses across various industries. Our services 
                are designed to be scalable and cost-effective for organizations that may not have large internal 
                IT departments but need professional technology support.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">How quickly can you respond to IT issues?</h3>
              <p className="text-gray-700">
                Response times vary based on the service level agreement. For critical issues, we typically respond 
                within 1-2 hours. For standard support requests, we aim for same-day or next-business-day response. 
                Emergency support is available 24/7 for facilities management clients.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Do you provide remote support?</h3>
              <p className="text-gray-700">
                Yes, we offer both remote and on-site support services. Many issues can be resolved quickly through 
                secure remote access. On-site visits are available when needed or preferred by the client.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">What is the typical timeline for custom programming projects?</h3>
              <p className="text-gray-700">
                Project timelines vary based on scope and complexity. Simple applications may take 4-8 weeks, while 
                more complex enterprise systems can take 3-6 months or longer. We provide detailed project timelines 
                during the initial consultation and keep you updated throughout the development process.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">How do you ensure data security and privacy?</h3>
              <p className="text-gray-700">
                We take data security seriously and implement industry-standard security measures including encryption, 
                secure access controls, regular security audits, and compliance with relevant regulations. All team 
                members are trained on data privacy and security best practices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Can you work with our existing IT infrastructure?</h3>
              <p className="text-gray-700">
                Absolutely. We work with a wide variety of technologies and platforms. We can integrate with your 
                existing systems, provide support for legacy systems, or help you plan migrations to new technologies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">What are your pricing models?</h3>
              <p className="text-gray-700">
                We offer flexible pricing models including project-based pricing for custom development, monthly 
                retainer agreements for ongoing services, and hourly rates for consulting and support. We work with 
                each client to find the pricing model that best fits their needs and budget.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Do you provide training for new systems?</h3>
              <p className="text-gray-700">
                Yes, we provide comprehensive training for any systems we implement. This includes user documentation, 
                training sessions, and ongoing support to ensure your team can effectively use the new technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Contact us for more information or to discuss your specific needs
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition duration-300 inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
