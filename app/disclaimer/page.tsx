import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Disclaimer | Urban Timber Tree Service',
  description: 'Disclaimer and legal information for Urban Timber Tree Service website and services.',
  alternates: {
    canonical: 'https://urbantimber.com/disclaimer'
  }
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Disclaimer</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Website Disclaimer</h2>
          <p className="text-gray-700 mb-6">
            The information on this website (urbantimber.com) is provided on an "as is" basis. To the fullest 
            extent permitted by law, Urban Timber Tree Service Inc. excludes all representations, warranties, 
            and conditions relating to this website and the use of this website.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">No Warranties</h2>
          <p className="text-gray-700 mb-6">
            This website is provided "as is" without any representations or warranties, express or implied. 
            Urban Timber Tree Service Inc. makes no representations or warranties in relation to this 
            website or the information and materials provided on this website.
          </p>
          <p className="text-gray-700 mb-6">
            Without prejudice to the generality of the foregoing paragraph, Urban Timber Tree Service Inc. 
            does not warrant that:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>This website will be constantly available, or available at all</li>
            <li>The information on this website is complete, true, accurate, or non-misleading</li>
            <li>This website will meet your requirements or expectations</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitations of Liability</h2>
          <p className="text-gray-700 mb-6">
            Urban Timber Tree Service Inc. will not be liable to you (whether under the law of contact, the 
            law of torts, or otherwise) in relation to the contents of, or use of, or otherwise in connection 
            with, this website:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>To the extent that the website is provided free-of-charge, for any direct loss</li>
            <li>For any indirect, special, or consequential loss</li>
            <li>For any business losses, loss of revenue, income, profits, or anticipated savings</li>
            <li>For any loss of or corruption of information or data</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Disclaimer</h2>
          <p className="text-gray-700 mb-6">
            While Urban Timber Tree Service Inc. strives to provide accurate information about our services, 
            tree care outcomes can vary based on numerous factors including tree species, health, environmental 
            conditions, and other variables beyond our control. We cannot guarantee specific results for any 
            tree care service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Advice</h2>
          <p className="text-gray-700 mb-6">
            The information on this website is not intended to replace professional arborist consultation. 
            For specific tree care advice tailored to your situation, please contact us for a professional 
            assessment. Each tree and property situation is unique and requires individual evaluation.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
          <p className="text-gray-700 mb-6">
            This website may contain links to third-party websites. Urban Timber Tree Service Inc. is not 
            responsible for the content, privacy policies, or practices of third-party websites. The inclusion 
            of any link does not imply endorsement by Urban Timber Tree Service Inc.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Testimonials and Reviews</h2>
          <p className="text-gray-700 mb-6">
            Testimonials and reviews on this website reflect the individual experiences of our customers. 
            Results may vary, and we do not claim that all customers will have the same experience. 
            Individual results depend on various factors.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pricing Information</h2>
          <p className="text-gray-700 mb-6">
            All pricing information provided on this website is for general reference only. Actual pricing 
            will be determined based on a professional assessment of your specific situation. Final quotes 
            may vary from any estimates or examples provided on this website.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Regulatory Compliance</h2>
          <p className="text-gray-700 mb-6">
            While we maintain all required licenses and certifications (CCB License #212995, ISA Certified 
            Arborists), regulations and requirements may change. We strive to maintain compliance with all 
            applicable local, state, and federal regulations, but cannot guarantee that all information 
            regarding regulations on this website is current at all times.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Emergency Services</h2>
          <p className="text-gray-700 mb-6">
            While we offer 24/7 emergency tree services, response times may vary based on weather conditions, 
            location, and current service load. We cannot guarantee immediate response in all circumstances.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
          <p className="text-gray-700 mb-6">
            If you have any questions about this disclaimer, please contact us:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="text-gray-700 mb-2"><strong>Urban Timber Tree Service Inc.</strong></p>
            <p className="text-gray-700 mb-2">10808 SE Harold St, Portland, OR 97266</p>
            <p className="text-gray-700 mb-2">Phone: <a href="tel:503-449-4066" className="text-green-700 hover:text-green-800">(503) 449-4066</a></p>
            <p className="text-gray-700">Email: <a href="mailto:office@urbantimbertree.com" className="text-green-700 hover:text-green-800">office@urbantimbertree.com</a></p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
