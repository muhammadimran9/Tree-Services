import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import servicesData from '@/data/services.json';

export const metadata: Metadata = {
  title: 'Tree Services Portland & Salem Oregon | Tree Removal, Trimming, Stump Grinding',
  description:
    'Complete tree care services in Portland & Salem Oregon. Licensed & insured arborists providing tree removal, trimming, stump grinding & 24/7 emergency service. Free estimates. Call (503) 449-4066 now!',
  keywords: [
    'tree services Portland Oregon',
    'tree services Salem Oregon',
    'tree removal Portland',
    'tree removal Salem',
    'tree trimming Portland',
    'tree trimming Salem',
    'stump grinding Portland',
    'stump grinding Salem',
    'emergency tree service Portland',
    'emergency tree service Salem',
    'certified arborist Portland',
    'certified arborist Salem',
    'affordable tree service',
    'professional tree removal',
    'tree pruning Portland',
    'tree pruning Salem',
    'commercial tree service',
    'residential tree service',
    'tree service multnomah county',
    'tree service marion county',
  ],
  openGraph: {
    title: 'Tree Services Portland & Salem Oregon | Tree Removal, Trimming, Stump Grinding',
    description:
      'Complete tree care services in Portland & Salem Oregon. Licensed & insured arborists. Tree removal, trimming, stump grinding & 24/7 emergency service. Free estimates! Call (503) 449-4066',
    url: 'https://yourtreeservicewebsite.com/services',
    images: [
      {
        url: 'https://yourtreeservicewebsite.com/images/og-services.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional tree services in Portland, Oregon',
      },
    ],
  },
  alternates: {
    canonical: 'https://yourtreeservicewebsite.com/services',
  },
};

export default function ServicesPage() {
  const services = servicesData.services;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-700 to-green-900 text-white h-[80vh] flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Tree Services Portland & Salem Oregon | Tree Removal, Trimming & Stump Grinding
              </h1>
              <p className="text-xl text-green-100 max-w-4xl mx-auto mb-8">
                🌳 **Licensed & Insured Arborists Serving Portland & Salem** - 24/7 Emergency Tree Service Available. 
                Call now for **FREE ESTIMATES** on tree removal, trimming, stump grinding & emergency tree service throughout Multnomah & Marion Counties.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:503-449-4066" 
                  className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg"
                >
                  📞 Call (503) 449-4066 for FREE Quote
                </a>
                <a 
                  href="/quote" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-700 transition-colors"
                >
                  📝 Request Online Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-700" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-green-700 mb-4">{service.title}</h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">What's Included:</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <a 
                    href={`/services/${service.id}`}
                    className="block w-full bg-green-700 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-green-800 transition-colors"
                  >
                    Learn More About {service.title}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Us Section */}
          <section className="mt-20 py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Portland & Salem Homeowners Choose Our Tree Services?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-green-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">30+ Years Local Experience</h3>
                  <p className="text-gray-600">
                    Serving Portland & Salem with certified arborists since 1994. We know Oregon trees!
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-green-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">ISA Certified Arborists</h3>
                  <p className="text-gray-600">
                    International Society of Arboriculture certified professionals. Fully licensed & insured.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-green-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">5-Star Rated Service</h3>
                  <p className="text-gray-600">
                    500+ Happy customers across Portland & Salem. 100% satisfaction guaranteed!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Service Areas */}
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">🌳 Serving Portland & Salem Metro Areas</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  From downtown Portland to Salem neighborhoods, we provide professional tree services 
                  throughout the entire region with prompt, reliable service. **Same-day service available!**
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  'Portland', 'Salem', 'Beaverton', 'Lake Oswego', 
                  'Gresham', 'Tigard', 'Hillsboro', 'Milwaukie',
                  'West Linn', 'Oregon City', 'Keizer', 'Happy Valley',
                  'Multnomah County', 'Marion County', 'Clackamas', 'Vancouver'
                ].map((city, index) => (
                  <div key={index} className="bg-green-50 p-4 rounded-lg text-center text-gray-700 font-medium border border-green-200">
                    {city}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-green-700 text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-6">
                🚀 Ready to Transform Your Property? Call Now for FREE Quote!
              </h2>
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                🌟 **Limited Time: Same-Day Service Available!** Call (503) 449-4066 for 
                **FREE ESTIMATES** on tree removal, trimming, stump grinding & emergency service throughout Portland & Salem. 
                **100% Satisfaction Guaranteed!**
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:503-449-4066" 
                  className="bg-white text-green-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                >
                  📞 Call (503) 449-4066 - FREE Quote
                </a>
                <a 
                  href="/quote" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-700 transition-colors"
                >
                  📝 Request Online Quote
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
