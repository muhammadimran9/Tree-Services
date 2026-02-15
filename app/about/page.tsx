import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "About Urban Timber Tree Service | Portland's Trusted Arborists Since 1994",
  description: "Learn about Urban Timber Tree Service, Portland's premier tree care company with 30+ years of ISA certified experience, CCB license #212995, and 5-star customer ratings.",
  openGraph: {
    title: "About Urban Timber Tree Service | Portland's Trusted Arborists",
    description: "Portland's premier tree care company with 30+ years of ISA certified experience and 5-star ratings.",
    url: "https://urbantimber.com/about",
    images: [
      {
        url: "https://urbantimber.com/images/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "About Urban Timber Tree Service - Portland Tree Care Experts"
      }
    ]
  },
  alternates: {
    canonical: "https://urbantimber.com/about"
  }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-700 to-green-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Urban Timber Tree Service
              </h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                Portland's most trusted tree care professionals, serving the community with integrity, 
                expertise, and dedication since 1994.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="prose prose-lg text-gray-600 space-y-4">
                  <p>
                    Urban Timber Tree Service began its journey in 1994 with a simple mission: 
                    to provide Portland residents with professional, reliable, and safe tree care 
                    services. What started as a small operation with just two certified arborists 
                    has grown into the Portland metro area's most trusted tree service company.
                  </p>
                  <p>
                    Over the past three decades, we've built our reputation on three core principles: 
                    safety, quality, and customer satisfaction. Our team of ISA-certified arborists 
                    brings decades of combined experience to every project, whether it's routine tree 
                    maintenance or emergency storm damage response.
                  </p>
                  <p>
                    We're not just tree cutters – we're tree care professionals who understand the 
                    urban forest ecosystem. We know that trees are vital to Portland's character and 
                    environmental health, which is why we approach every job with the care and respect 
                    these magnificent organisms deserve.
                  </p>
                  <p>
                    Today, Urban Timber Tree Service is proud to be Portland's first choice for 
                    residential and commercial tree care, with thousands of satisfied customers 
                    throughout the metro area and a 5-star rating that speaks to our commitment to 
                    excellence.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-green-100 rounded-lg p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-700 mb-2">30+</div>
                      <div className="text-gray-600">Years in Business</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-700 mb-2">15,000+</div>
                      <div className="text-gray-600">Trees Cared For</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-700 mb-2">5.0</div>
                      <div className="text-gray-600">Star Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-700 mb-2">24/7</div>
                      <div className="text-gray-600">Emergency Service</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the certified professionals who make Urban Timber Tree Service the best in Portland
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="w-32 h-32 bg-green-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Lead Arborist Team</h3>
                <p className="text-gray-600 mb-4">ISA Certified Arborists with 15+ years experience each</p>
                <div className="text-sm text-green-600 font-semibold">Certification #PN-1234</div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="w-32 h-32 bg-green-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Safety Specialists</h3>
                <p className="text-gray-600 mb-4">OSHA certified and trained in advanced rigging techniques</p>
                <div className="text-sm text-green-600 font-semibold">Safety Certified</div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="w-32 h-32 bg-green-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Support Crew</h3>
                <p className="text-gray-600 mb-4">Professional ground crew and equipment operators</p>
                <div className="text-sm text-green-600 font-semibold">Fully Insured</div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications & Licenses */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Certifications</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Fully licensed, insured, and certified for your peace of mind
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-700">ISA</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">ISA Certified</h3>
                <p className="text-gray-600 text-sm">International Society of Arboriculture certified professionals</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-700">CCB</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">CCB Licensed</h3>
                <p className="text-gray-600 text-sm">Oregon Construction Contractors Board #212995</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-700">INS</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Fully Insured</h3>
                <p className="text-gray-600 text-sm">Comprehensive liability and workers' compensation insurance</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-700">OSHA</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Safety Compliant</h3>
                <p className="text-gray-600 text-sm">OSHA certified safety protocols and training</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Areas</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Proudly serving the entire Portland metropolitan area
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Portland', 'Beaverton', 'Lake Oswego', 'Gresham',
                'Tigard', 'Hillsboro', 'Milwaukie', 'West Linn',
                'Oregon City', 'Happy Valley', 'Clackamas', 'Vancouver'
              ].map((city, index) => (
                <div key={index} className="bg-white p-4 rounded-lg text-center text-gray-700 font-medium">
                  {city}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Safety First</h3>
                <p className="text-gray-600">
                  We prioritize the safety of our team, your property, and the public in every operation we perform.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Knowledge</h3>
                <p className="text-gray-600">
                  Our certified arborists bring scientific expertise and practical experience to every tree care decision.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Care</h3>
                <p className="text-gray-600">
                  We treat your property as if it were our own, ensuring complete satisfaction with every service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-green-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Experience the Urban Timber Difference?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join thousands of satisfied Portland customers who trust us with their tree care needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:503-449-4066" 
                className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call (503) 449-4066
              </a>
              <a 
                href="/quote" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition-colors"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
