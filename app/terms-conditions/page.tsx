import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Urban Timber Tree Service',
  description: 'Terms and conditions for Urban Timber Tree Service. Read our service terms, policies, and legal information.',
  alternates: {
    canonical: 'https://urbantimber.com/terms-conditions'
  }
};

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms & Conditions</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700 mb-6">
            By accessing and using the services of Urban Timber Tree Service Inc. ("we," "us," or "our"), 
            you accept and agree to be bound by the terms and provision of this agreement. If you do not 
            agree to abide by the above, please do not use this service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Provided</h2>
          <p className="text-gray-700 mb-6">
            Urban Timber Tree Service Inc. provides professional tree care services including but not limited 
            to tree removal, tree trimming, stump grinding, emergency tree services, and arborist consultations 
            in the Portland, Oregon metropolitan area.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Estimates and Pricing</h2>
          <p className="text-gray-700 mb-6">
            All estimates provided are valid for 30 days from the date of issue. Final pricing may vary based 
            on actual conditions encountered during service performance. We reserve the right to adjust pricing 
            if conditions differ significantly from those assessed during the initial estimate.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
          <p className="text-gray-700 mb-6">
            Payment is due upon completion of services unless other arrangements have been made in writing. 
            We accept cash, check, and major credit cards. A late fee may be applied to accounts not paid 
            within 30 days of invoice date.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Permits and Permissions</h2>
          <p className="text-gray-700 mb-6">
            The customer is responsible for obtaining all necessary permits and permissions required for tree 
            work. Urban Timber Tree Service can assist with permit applications, but final responsibility 
            rests with the property owner.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Insurance and Liability</h2>
          <p className="text-gray-700 mb-6">
            Urban Timber Tree Service Inc. is fully licensed (CCB #212995) and insured. We carry general 
            liability insurance and workers' compensation insurance. However, we are not responsible for 
            damage to underground utilities, structures, or property that was not disclosed during the 
            initial assessment.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Property Damage</h2>
          <p className="text-gray-700 mb-6">
            While we take every precaution to protect your property, tree work inherently involves some risk. 
            We will repair or compensate for any damage to property that occurs as a direct result of our 
            negligence. Damage to lawns, driveways, or other surfaces may occur during normal operations 
            and will be addressed on a case-by-case basis.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cancellation Policy</h2>
          <p className="text-gray-700 mb-6">
            Cancellations must be made at least 24 hours before the scheduled service date. Cancellations 
            made less than 24 hours before service may be subject to a cancellation fee.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Warranty</h2>
          <p className="text-gray-700 mb-6">
            We stand behind our work and offer a warranty on services performed. Specific warranty terms 
            will be provided in writing with your service agreement. Warranty does not cover damage from 
            storms, disease, or other factors beyond our control.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Limitation of Liability</h2>
          <p className="text-gray-700 mb-6">
            To the maximum extent permitted by law, Urban Timber Tree Service Inc.'s liability for any 
            claim arising from our services shall not exceed the total amount paid for the specific service 
            in question.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Dispute Resolution</h2>
          <p className="text-gray-700 mb-6">
            Any disputes arising from our services will first be addressed through direct communication. 
            If a resolution cannot be reached, disputes will be resolved through binding arbitration in 
            accordance with Oregon state law.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
          <p className="text-gray-700 mb-6">
            We reserve the right to modify these terms and conditions at any time. Changes will be effective 
            immediately upon posting to our website. Continued use of our services after changes constitutes 
            acceptance of the new terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
          <p className="text-gray-700 mb-6">
            For questions about these Terms & Conditions, please contact us at:
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
