import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Privacy Policy | Tree Services",
  description: "Tree Services privacy policy - How we protect and handle your personal information.",
  openGraph: {
    title: "Privacy Policy | Tree Services",
    description: "Our commitment to protecting your privacy and personal information.",
    url: "https://yourtreeservicewebsite.com/privacy-policy",
    images: [
      {
        url: "https://yourtreeservicewebsite.com/images/privacy-og.jpg",
        width: 1200,
        height: 630,
        alt: "Privacy Policy - Tree Services"
      }
    ]
  },
  alternates: {
    canonical: "https://yourtreeservicewebsite.com/privacy-policy"
  }
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
                <p className="text-gray-600 mb-4">
                  At Tree Services, we collect information you provide to us directly when you 
                  request services, contact us, or otherwise interact with our website. This may include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Name and contact information</li>
                  <li>Service address and property details</li>
                  <li>Phone number and email address</li>
                  <li>Payment information (when applicable)</li>
                  <li>Service preferences and requirements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
                <p className="text-gray-600 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Provide tree care services you request</li>
                  <li>Communicate with you about your service needs</li>
                  <li>Process payments and billing</li>
                  <li>Improve our services and customer experience</li>
                  <li>Send important service updates and notifications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing</h2>
                <p className="text-gray-600 mb-4">
                  We do not sell, rent, or trade your personal information. We may share your information 
                  only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>With your consent for specific purposes</li>
                  <li>With service providers who assist in delivering our services</li>
                  <li>When required by law or to protect our rights</li>
                  <li>To protect against fraud or for security purposes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
                <p className="text-gray-600 mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. These include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Secure servers and encrypted data transmission</li>
                  <li>Limited employee access to personal information</li>
                  <li>Regular security assessments and updates</li>
                  <li>Secure payment processing systems</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking</h2>
                <p className="text-gray-600 mb-4">
                  Our website may use cookies and similar technologies to enhance your experience. Cookies help us:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Remember your preferences</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Provide personalized content</li>
                  <li>Improve website functionality</li>
                </ul>
                <p className="text-gray-600 mb-4">
                  You can control cookies through your browser settings. However, disabling cookies may affect 
                  some website features.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
                <p className="text-gray-600 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request a copy of the information we hold about you</li>
                  <li>File a complaint with privacy authorities if needed</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
                <p className="text-gray-600 mb-4">
                  Our services are not directed to children under 13. We do not knowingly collect 
                  personal information from children under 13. If we become aware that we have collected 
                  information from a child under 13, we will take steps to delete such information immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Policy Updates</h2>
                <p className="text-gray-600 mb-4">
                  We may update this privacy policy from time to time. We will notify you of any 
                  material changes by posting the new policy on our website and updating the "Last Updated" 
                  date below.
                </p>
                <p className="text-gray-600">
                  <strong>Last Updated:</strong> February 15, 2026
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600 mb-4">
                  If you have questions about this privacy policy or our privacy practices, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="space-y-2 text-gray-600">
                    <li><strong>Phone:</strong> (503) 449-4066</li>
                    <li><strong>Email:</strong> info@yourtreeservicewebsite.com</li>
                    <li><strong>Address:</strong> 10808 SE Harold St, Portland, OR 97266</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
