import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Us - Britt Tech Group LLC',
  description: 'Learn about Britt Tech Group LLC - our history, mission, team, and commitment to providing exceptional IT services.',
}

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Britt Tech Group</h1>
          <p className="text-xl text-primary-100">Your trusted partner in technology solutions</p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Britt Tech Group LLC was founded with a clear vision: to provide exceptional IT and technology 
                  services specifically tailored for small and mid-sized businesses. We recognized that many 
                  businesses in this segment were underserved by large IT firms or overwhelmed by complex solutions 
                  that didn't fit their needs.
                </p>
                <p>
                  Since our inception, we've been committed to delivering personalized, cost-effective technology 
                  solutions that help businesses grow and thrive. Our approach combines deep technical expertise 
                  with a genuine understanding of the unique challenges faced by smaller organizations.
                </p>
                <p>
                  Today, we're proud to serve a diverse portfolio of clients across various industries, helping 
                  them leverage technology to achieve their business objectives and stay competitive in an 
                  increasingly digital world.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="text-6xl text-primary-600 mb-4">📈</div>
              <h3 className="text-2xl font-semibold mb-4">Our Growth</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Established with a focus on SMB market</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Expanded service offerings based on client needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Built strong partnerships with technology vendors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Continuously investing in team development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-primary-700">Our Mission</h3>
              <p className="text-gray-700">
                To empower small and mid-sized businesses with innovative, reliable, and affordable technology 
                solutions that drive growth, improve efficiency, and enhance competitiveness. We believe every 
                business, regardless of size, deserves access to enterprise-quality IT services.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-primary-700">Our Values</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 font-bold">•</span>
                  <span><strong>Integrity:</strong> Honest, transparent communication in all interactions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 font-bold">•</span>
                  <span><strong>Excellence:</strong> Commitment to delivering high-quality solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 font-bold">•</span>
                  <span><strong>Innovation:</strong> Staying current with latest technologies and best practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 font-bold">•</span>
                  <span><strong>Partnership:</strong> Building long-term relationships based on trust</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-lg text-gray-600">
              Meet the experts dedicated to your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👨‍💼</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Leadership Team</h3>
              <p className="text-gray-600 mb-4">
                Experienced executives with decades of combined experience in technology and business management.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👨‍💻</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Development Team</h3>
              <p className="text-gray-600 mb-4">
                Skilled programmers and software engineers specializing in custom solutions and modern technologies.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">🛠️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Support Team</h3>
              <p className="text-gray-600 mb-4">
                Dedicated support specialists ensuring your systems run smoothly and issues are resolved quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary-600 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 mb-4 italic">
                "Britt Tech Group transformed our IT infrastructure. Their custom programming solution 
                streamlined our operations and saved us significant time and money. Highly recommended!"
              </p>
              <p className="font-semibold">— Sarah Johnson, CEO</p>
              <p className="text-sm text-gray-500">Manufacturing Company</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary-600 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 mb-4 italic">
                "The team at Britt Tech Group is responsive, knowledgeable, and truly understands our business needs. 
                Their facilities management services have been invaluable."
              </p>
              <p className="font-semibold">— Michael Chen, Operations Director</p>
              <p className="text-sm text-gray-500">Retail Chain</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary-600 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 mb-4 italic">
                "Working with Britt Tech Group has been a game-changer. Their consulting helped us make informed 
                technology decisions that aligned perfectly with our growth strategy."
              </p>
              <p className="font-semibold">— Emily Rodriguez, CFO</p>
              <p className="text-sm text-gray-500">Professional Services Firm</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
