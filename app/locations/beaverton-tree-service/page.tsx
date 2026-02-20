import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Tree Service Beaverton Oregon | Local Tree Services in Beaverton, OR',
  description:
    'Professional tree services in Beaverton, Oregon. Tree Services provides safe tree removal, pruning, stump grinding and emergency service across all Beaverton neighborhoods. Free quotes from licensed and insured team.',
  openGraph: {
    title: 'Tree Service Beaverton Oregon | Local Tree Services',
    description:
      'Full-service tree care in Beaverton, OR – tree removal, trimming, stump grinding, and emergency tree service performed by experienced professionals.',
    url: 'https://yourtreeservicewebsite.com/locations/beaverton-tree-service',
    type: 'website',
  },
  alternates: {
    canonical: 'https://yourtreeservicewebsite.com/locations/beaverton-tree-service',
  },
};

const beavertonNeighborhoods = [
  'Central Beaverton',
  'Beaverton Town Center',
  'Canyon Creek',
  'Highland',
  'Murrayhill',
  'Sexton Mountain',
  'Vose',
  'West Beaverton',
  'Greenway',
  'Five Oaks',
  'Cooper Mountain',
  'Nancy Rios',
  'Aloha',
  'Progress Ridge',
  'Summerhill',
  'Watson',
];

export default function BeavertonTreeServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-linear-to-r from-green-700 to-green-900 text-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Tree Service in Beaverton, Oregon
              </h1>
              <p className="text-lg md:text-xl text-green-100 mb-6">
                Local, licensed, and fully insured tree service professionals based in Beaverton, OR.
                We help homeowners and businesses keep their trees safe, healthy, and beautiful
                in every season.
              </p>
              <p className="text-sm md:text-base text-green-100 mb-6">
                Serving all Beaverton neighborhoods with ISA certified arborists, CCB License
                #212995, and over 30 years of hands-on local experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:503-449-4066"
                  className="inline-flex items-center justify-center bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                  Call (503) 449-4066 for Beaverton Service
                </a>
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-colors"
                >
                  Request Free Beaverton Quote
                </Link>
              </div>
              <p className="mt-4 text-xs md:text-sm text-green-100">
                24/7 emergency tree service available anywhere in Beaverton, Oregon.
              </p>
            </div>
          </div>
        </section>

        {/* Intro & Local Focus */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Local Beaverton Tree Service You Can Trust
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-5">
              <p>
                When you search for <strong>tree service in Beaverton, Oregon</strong>, you are
                not just looking for someone with a chainsaw – you are looking for a local
                partner who understands our city&apos;s trees, climate, and regulations.
                Our team has been working in Beaverton for decades, caring for
                mature trees in established neighborhoods, young plantings in new developments,
                and everything in between.
              </p>
              <p>
                Beaverton&apos;s tree canopy is one of the things that makes our city special.
                At the same time, tall Douglas firs, maples, and ornamentals can become a
                safety concern when they are not maintained correctly. Heavy winter rain,
                high winds, and saturated soil can cause branches to break and trees to fail.
                Our ISA certified arborists evaluate each tree carefully, explain what they
                see in plain language, and recommend only the work that truly needs to be
                done to keep your property safe and your landscape healthy.
              </p>
              <p>
                Because we are headquartered in the Portland metro area, our crews know Beaverton&apos;s
                residential areas, commercial districts, and park systems. We arrive with the right
                equipment for suburban work – compact lifts, climbing gear, and rigging systems –
                so we can remove or prune trees safely even when access is limited and there are
                houses, fences, and power lines nearby.
              </p>
              <p>
                Every project begins with a free, no-obligation on-site estimate. We take the
                time to walk your property with you, listen to your goals, review potential
                risks, and answer your questions about permits, safety, and pricing. Our
                detailed written quotes outline exactly what is included, so you know what to
                expect before any work begins.
              </p>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Serving All Beaverton Neighborhoods
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From Central Beaverton to Cooper Mountain, we provide professional tree services 
                throughout the entire city with prompt, reliable service.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {beavertonNeighborhoods.map((neighborhood, index) => (
                <div key={index} className="bg-white p-4 rounded-lg text-center text-gray-700 font-medium shadow-sm">
                  {neighborhood}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-green-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready for Professional Tree Service in Beaverton?
            </h2>
            <p className="mb-8 text-green-100 max-w-3xl mx-auto">
              Get expert tree care from Beaverton's trusted arborists. 
              Contact us for professional tree services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:503-449-4066" 
                className="flex items-center justify-center bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (503) 449-4066
              </a>
              <Link 
                href="/quote" 
                className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
