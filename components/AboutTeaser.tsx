import Link from 'next/link';

export default function AboutTeaser() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Urban Timber Tree Service of Portland, OR
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p className="mb-4">
                As a family-owned tree service company founded in 2014, Urban Timber Tree Service has been 
                dedicated to protecting Portland's urban canopy for nearly a decade. Our mission goes beyond 
                simple tree care – we're committed to preserving the health and beauty of our city's trees 
                while ensuring the safety of your property and family.
              </p>
              <p className="mb-6">
                Our team combines traditional arborist knowledge with modern techniques and equipment, 
                delivering exceptional service that respects both your trees and your budget. From routine 
                maintenance to emergency storm response, we approach every project with the same level of 
                professionalism and care that has made us Portland's trusted tree service provider.
              </p>
              <Link 
                href="/about" 
                className="inline-flex items-center text-green-700 font-semibold hover:text-green-800 transition-colors"
              >
                Learn More About Us
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gray-100 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <p className="text-gray-600 font-medium">Family Owned Since 2014</p>
                <p className="text-gray-500 text-sm mt-2">Protecting Portland's Urban Forest</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500 rounded-full opacity-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-600 rounded-full opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
