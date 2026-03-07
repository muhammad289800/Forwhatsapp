import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Britt Tech Group LLC',
  description: 'Privacy policy and data handling practices for Britt Tech Group LLC.',
}

export default function Privacy() {
  return (
    <div>
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-primary-100">Last Updated: March 7, 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Introduction</h2>
              <p className="text-gray-700 mb-6">
                Britt Tech Group LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy 
                Policy explains how we collect, use, disclose, and safeguard your information when you visit our 
                website or use our services. Please read this privacy policy carefully. If you do not agree with 
                the terms of this privacy policy, please do not access the site.
              </p>

              <h2 className="text-2xl font-bold mb-6 mt-8">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-4">Information You Provide to Us</h3>
              <p className="text-gray-700 mb-4">
                We may collect information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Register for an account or use our client portal</li>
                <li>Request information about our services</li>
                <li>Fill out contact forms or inquiry forms</li>
                <li>Subscribe to our newsletter or communications</li>
                <li>Participate in surveys or provide feedback</li>
                <li>Engage with our services</li>
              </ul>
              <p className="text-gray-700 mb-6">
                This information may include your name, email address, phone number, company name, job title, 
                mailing address, and any other information you choose to provide.
              </p>

              <h3 className="text-xl font-semibold mb-4">Information Automatically Collected</h3>
              <p className="text-gray-700 mb-4">
                When you visit our website, we may automatically collect certain information about your device, 
                including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages you visit and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Date and time of access</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Information from Third Parties</h3>
              <p className="text-gray-700 mb-6">
                We may receive information about you from third-party services, such as analytics providers, 
                social media platforms, or business partners, in accordance with their privacy policies.
              </p>

              <h2 className="text-2xl font-bold mb-6 mt-8">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process your requests and transactions</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you administrative information, updates, and service-related communications</li>
                <li>Send you marketing communications (with your consent where required)</li>
                <li>Monitor and analyze usage patterns and trends</li>
                <li>Detect, prevent, and address technical issues and security threats</li>
                <li>Comply with legal obligations and enforce our agreements</li>
                <li>Protect our rights, property, and safety, and that of our users and others</li>
              </ul>

              <h2 className="text-2xl font-bold mb-6 mt-8">Information Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">
                We do not sell your personal information. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Service Providers:</strong> We may share information with third-party service providers 
                who perform services on our behalf, such as hosting, analytics, payment processing, and customer support.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, 
                your information may be transferred as part of that transaction.</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law, court order, 
                or governmental authority, or to protect our rights and safety.</li>
                <li><strong>With Your Consent:</strong> We may share information with your explicit consent or at 
                your direction.</li>
              </ul>

              <h2 className="text-2xl font-bold mb-6 mt-8">Data Security</h2>
              <p className="text-gray-700 mb-6">
                We implement appropriate technical and organizational security measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. These measures 
                include encryption, secure servers, access controls, and regular security assessments. However, 
                no method of transmission over the Internet or electronic storage is 100% secure, and we cannot 
                guarantee absolute security.
              </p>

              <h2 className="text-2xl font-bold mb-6 mt-8">Data Retention</h2>
              <p className="text-gray-700 mb-6">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in 
                this Privacy Policy, unless a longer retention period is required or permitted by law. When we no 
                longer need your information, we will securely delete or anonymize it.
              </p>

              <h2 className="text-2xl font-bold mb-6 mt-8">Your Rights and Choices</h2>
              <p className="text-gray-700 mb-4">Depending on your location, you may have certain rights regarding your personal information:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Objection:</strong> Object to processing of your personal information</li>
                <li><strong>Restriction:</strong> Request restriction of processing</li>
                <li><strong>Portability:</strong> Request transfer of your information to another service</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
              </ul>
              <p className="text-gray-700 mb-6">
                To exercise these rights, please contact us using the information provided in the "Contact Us" 
                section below.
              </p>

              <h2 className="text-2xl font-bold mb-6 mt-8">Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 mb-6">
                We use cookies and similar tracking technologies to collect and store information about your 
                preferences and activity on our website. You can control cookies through your browser settings, 
                though this may affect website functionality.
              </p>

              <h2 className="text-2xl font-bold mb-6 mt-8">Third-Party Links</h2>
              <p className="text-gray-700 mb-6">
                Our website may contain links to third-party websites. We are not responsible for the privacy 
                practices or content of these external sites. We encourage you to review the privacy policies of 
                any third-party sites you visit.
              </p>

              <h2 className="text-2xl font-bold mb-6 mt-8">Children's Privacy</h2>
              <p className="text-gray-700 mb-6">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect 
                personal information from children. If you believe we have collected information from a child, 
                please contact us immediately.
              </p>

              <h2 className="text-2xl font-bold mb-6 mt-8">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any material changes 
                by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are 
                advised to review this Privacy Policy periodically for any changes.
              </p>

              <h2 className="text-2xl font-bold mb-6 mt-8">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, 
                please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <p className="text-gray-700 mb-2">
                  <strong>Britt Tech Group LLC</strong>
                </p>
                <p className="text-gray-700 mb-2">
                  Email: privacy@britttechgroup.com
                </p>
                <p className="text-gray-700 mb-2">
                  Phone: (555) 123-4567
                </p>
                <p className="text-gray-700">
                  Address: 123 Technology Drive, Suite 100, Business City, ST 12345
                </p>
              </div>

              <h2 className="text-2xl font-bold mb-6 mt-8">Regional Privacy Rights</h2>
              <h3 className="text-xl font-semibold mb-4">California Residents (CCPA)</h3>
              <p className="text-gray-700 mb-6">
                California residents have specific rights under the California Consumer Privacy Act (CCPA), 
                including the right to know what personal information is collected, the right to delete personal 
                information, and the right to opt-out of the sale of personal information (we do not sell personal 
                information).
              </p>

              <h3 className="text-xl font-semibold mb-4">European Residents (GDPR)</h3>
              <p className="text-gray-700 mb-6">
                If you are located in the European Economic Area (EEA), you have additional rights under the General 
                Data Protection Regulation (GDPR), including the right to lodge a complaint with a supervisory 
                authority.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
