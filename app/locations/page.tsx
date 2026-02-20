import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Service Locations | Tree Services in Portland & Salem Oregon',
  description:
    'Tree Services provides professional tree care in Portland and Salem, Oregon. Licensed and insured team offering tree removal, pruning, stump grinding, and emergency services.',
  openGraph: {
    title: 'Service Locations | Tree Services in Portland & Salem Oregon',
    description:
      'Professional tree care services in Portland and Salem, Oregon. Licensed, insured, and experienced team.',
    url: 'https://yourtreeservicewebsite.com/locations',
    type: 'website',
  },
  alternates: {
    canonical: 'https://yourtreeservicewebsite.com/locations',
  },
};

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-r from-green-700 to-green-900 text-white h-[80vh] flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Our Service Locations
              </h1>
              <p className="text-lg md:text-xl text-green-100 mb-6">
                We proudly serve Portland and Salem, Oregon with professional tree care services.
                Licensed, insured, and experienced team ready to help with all your tree service needs.
              </p>
            </div>
          </div>
        </section>

        {/* Location Cards */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Choose Your Location
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Select your city to learn more about our tree services in your area, including
                service areas, local expertise, and customer testimonials.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Portland Card */}
              <Link
                href="/locations/portland-tree-service"
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-green-500"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                      Portland, Oregon
                    </h3>
                    <svg
                      className="w-6 h-6 text-green-700 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  
                  <p className="text-gray-700 mb-6">
                    Comprehensive tree services throughout Portland and surrounding areas. From downtown
                    to residential neighborhoods, we provide expert tree care with local knowledge and experience.
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-600">All Portland neighborhoods</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-600">24/7 emergency service</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-600">Licensed & insured (CCB #212995)</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <span className="text-green-700 font-semibold group-hover:text-green-800">
                      View Portland Services →
                    </span>
                  </div>
                </div>
              </Link>

              {/* Salem Card */}
              <Link
                href="/locations/salem-tree-service"
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-green-500"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                      Salem, Oregon
                    </h3>
                    <svg
                      className="w-6 h-6 text-green-700 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  
                  <p className="text-gray-700 mb-6">
                    Professional tree care services throughout Salem and surrounding communities. Our experienced
                    team provides reliable, safe, and efficient tree services for residential and commercial properties.
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-600">All Salem areas</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-600">24/7 emergency service</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-600">Licensed & insured (CCB #212995)</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <span className="text-green-700 font-semibold group-hover:text-green-800">
                      View Salem Services →
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Services Available in Both Locations
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer comprehensive tree care services in both Portland and Salem
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Tree Removal</h3>
                <p className="text-sm text-gray-600">Safe removal of hazardous, dead, or unwanted trees</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Tree Trimming</h3>
                <p className="text-sm text-gray-600">Professional pruning for health and safety</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Stump Grinding</h3>
                <p className="text-sm text-gray-600">Complete stump removal and grinding services</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Emergency Service</h3>
                <p className="text-sm text-gray-600">24/7 emergency tree service available</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-green-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-green-100 mb-6 text-base md:text-lg">
              Contact us today for a free quote on tree services in Portland or Salem
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:503-449-4066"
                className="inline-flex items-center justify-center bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call (503) 449-4066
              </a>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-colors"
              >
                Request Free Quote
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
