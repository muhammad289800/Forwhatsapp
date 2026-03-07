import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Britt Tech Group</h3>
            <p className="text-gray-400 text-sm">
              Professional IT and technology services for small and mid-sized businesses.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/services/custom-programming" className="hover:text-white">Custom Programming</Link></li>
              <li><Link href="/services/computer-services" className="hover:text-white">Computer Services</Link></li>
              <li><Link href="/services/facilities-management" className="hover:text-white">Facilities Management</Link></li>
              <li><Link href="/services/consulting" className="hover:text-white">Consulting</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/resources" className="hover:text-white">Resources</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/portal" className="hover:text-white">Client Portal</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
            <div className="mt-4">
              <p className="text-sm text-gray-400">© {new Date().getFullYear()} Britt Tech Group LLC</p>
              <p className="text-xs text-gray-500 mt-2">All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
