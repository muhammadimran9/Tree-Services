import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import servicesData from '@/data/services.json';

export const metadata: Metadata = {
  title: 'Professional Tree Services in Portland Oregon | Tree Services',
  description:
    'Complete tree care services including safe tree removal, trimming and pruning, stump grinding, and emergency response. Licensed and insured tree care team serving the Portland metro area.',
  openGraph: {
    title: 'Professional Tree Services in Portland Oregon | Tree Services',
    description:
      'Complete tree care services in Portland, Oregon including removal, pruning, stump grinding, and emergency tree service.',
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
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Tree Services in Portland, Oregon
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              We provide comprehensive tree care solutions performed by experienced tree care
              professionals. From routine maintenance to emergency storm response, we deliver
              professional, safe, and reliable tree services that protect your property and enhance
              your landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:503-449-4066" 
                className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
              >
                Call (503) 449-4066
              </a>
              <a 
                href="/quote" 
                className="border-2 border-green-700 text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Get Free Quote
              </a>
            </div>
          </div>

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
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Tree Services?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-green-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">30+ Years Experience</h3>
                  <p className="text-gray-600">
                    Serving Portland with certified arborists since 1994
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-green-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">ISA Certified</h3>
                  <p className="text-gray-600">
                    International Society of Arboriculture certified professionals
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-green-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">5-Star Rating</h3>
                  <p className="text-gray-600">
                    Hundreds of satisfied customers with excellent reviews
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Service Areas */}
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Serving All Portland Metro Areas</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  From downtown Portland to surrounding communities, we provide professional tree services 
                  throughout the entire metropolitan area with prompt, reliable service.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  'Portland', 'Beaverton', 'Lake Oswego', 'Gresham',
                  'Tigard', 'Hillsboro', 'Milwaukie', 'West Linn',
                  'Oregon City', 'Happy Valley', 'Clackamas', 'Vancouver'
                ].map((city, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg text-center text-gray-700 font-medium">
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
                Ready to Transform Your Landscape?
              </h2>
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                Contact us today for professional tree services that enhance your property's 
                beauty, safety, and value. Free estimates, competitive pricing, and satisfaction guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:503-449-4066" 
                  className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Call (503) 449-4066
                </a>
                <a 
                  href="/quote" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition-colors"
                >
                  Get Free Quote
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
