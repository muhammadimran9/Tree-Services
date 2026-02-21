import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function QuotePage() {

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get Your Free Quote
            </h1>
            <p className="text-xl text-gray-600">
              Every tree service is unique. Let's discuss your specific needs for an accurate quote.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="text-center mb-8">
              <svg className="w-20 h-20 mx-auto text-green-700 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Call Us for an Accurate Quote
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Tree service costs vary based on multiple factors. A quick phone call helps us understand your needs and provide the most accurate pricing.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 md:p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Pricing Varies:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Service Type</p>
                    <p className="text-sm text-gray-600">Removal, trimming, grinding, etc.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Tree Size & Quantity</p>
                    <p className="text-sm text-gray-600">Height, diameter, and number of trees</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Location & Access</p>
                    <p className="text-sm text-gray-600">Property layout and accessibility</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Complexity & Risk</p>
                    <p className="text-sm text-gray-600">Proximity to structures, power lines</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="tel:503-449-4066"
                className="inline-flex items-center justify-center bg-orange-500 text-white px-10 py-5 rounded-xl text-xl font-bold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg"
              >
                <svg className="w-7 h-7 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (503) 449-4066
              </a>
              <p className="text-gray-600 mt-4">Available 24/7 for emergencies</p>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-green-700 text-4xl font-bold mb-2">1</div>
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-sm text-gray-600">Speak with our experienced team</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-green-700 text-4xl font-bold mb-2">2</div>
              <h3 className="font-semibold text-gray-900 mb-2">Discuss Details</h3>
              <p className="text-sm text-gray-600">Share your tree service needs</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-green-700 text-4xl font-bold mb-2">3</div>
              <h3 className="font-semibold text-gray-900 mb-2">Get Accurate Quote</h3>
              <p className="text-sm text-gray-600">Receive fair, transparent pricing</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
