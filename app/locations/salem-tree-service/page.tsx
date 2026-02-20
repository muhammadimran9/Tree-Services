import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Tree Service Salem Oregon | Local Tree Services in Salem, OR',
  description:
    'Looking for tree service in Salem, Oregon? Tree Services provides safe tree removal, pruning, stump grinding and emergency service across all Salem areas. Free quotes from a licensed and insured team.',
  openGraph: {
    title: 'Tree Service Salem Oregon | Local Tree Services',
    description:
      'Full-service tree care in Salem, OR – tree removal, trimming, stump grinding, and emergency tree service performed by experienced professionals.',
    url: 'https://yourtreeservicewebsite.com/locations/salem-tree-service',
    type: 'website',
  },
  alternates: {
    canonical: 'https://yourtreeservicewebsite.com/locations/salem-tree-service',
  },
};

const salemNeighborhoods = [
  'Downtown Salem',
  'West Salem',
  'South Salem',
  'Northeast Salem',
  'Southeast Salem',
  'Keizer Station',
  'Hayesville',
  'Four Corners',
  'Morningside',
  'Grant',
  'Highland',
  'Englewood',
];

export default function SalemTreeServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-r from-green-700 to-green-900 text-white h-[90vh] flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Tree Service in Salem, Oregon
              </h1>
              <p className="text-lg md:text-xl text-green-100 mb-6">
                Local, licensed, and fully insured tree service professionals serving Salem, OR.
                We help homeowners and businesses keep their trees safe, healthy, and beautiful
                in every season.
              </p>
              <p className="text-sm md:text-base text-green-100 mb-6">
                Serving all Salem areas with ISA certified arborists, CCB License
                #212995, and over 30 years of hands-on local experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:503-449-4066"
                  className="inline-flex items-center justify-center bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                  Call (503) 449-4066 for Salem Service
                </a>
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-colors"
                >
                  Request Free Salem Quote
                </Link>
              </div>
              <p className="mt-4 text-xs md:text-sm text-green-100">
                24/7 emergency tree service available anywhere in Salem, Oregon.
              </p>
            </div>
          </div>
        </section>

        {/* Intro & Local Focus */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Local Salem Tree Service You Can Trust
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-5">
              <p>
                When you search for <strong>tree service in Salem, Oregon</strong>, you are
                not just looking for someone with a chainsaw – you are looking for a local
                partner who understands our area&apos;s trees, climate, and regulations.
                Our team has been working in Salem for decades, caring for
                mature trees in established neighborhoods, tall evergreens on larger properties,
                and young plantings in new developments.
              </p>
              <p>
                Salem&apos;s tree canopy is one of the things that makes our area special.
                At the same time, tall Douglas firs, oaks, and ornamentals can become a
                safety concern when they are not maintained correctly. Heavy winter rain,
                high winds, and saturated soil can cause branches to break and trees to fail.
                Our ISA certified arborists evaluate each tree carefully, explain what they
                see in plain language, and recommend only the work that truly needs to be
                done to keep your property safe and your landscape healthy.
              </p>
              <p>
                Because we serve Salem regularly, our crews know the local conditions and
                property layouts. We arrive with the right equipment for residential and
                commercial work – lifts, climbing gear, and rigging systems – so we can
                remove or prune trees safely even when access is limited and there are
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

        {/* Services for Salem */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Tree Services Available in Salem, OR
                </h2>
                <p className="mt-3 text-gray-600 max-w-2xl">
                  We provide full-service tree care for homes, rentals, HOAs, and commercial
                  properties anywhere in Salem. Each service has a dedicated
                  page with more detail.
                </p>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center text-green-700 font-semibold hover:text-green-800"
              >
                View All Services
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <SalemServiceCard
                title="Tree Removal Salem OR"
                description="Safe removal of hazardous, dead, or unwanted trees on residential and commercial properties throughout Salem."
                href="/services/tree-removal"
              />
              <SalemServiceCard
                title="Tree Trimming & Pruning"
                description="Health-focused pruning that reduces risk, improves structure, and keeps your Salem trees looking their best year-round."
                href="/services/tree-trimming"
              />
              <SalemServiceCard
                title="Stump Grinding"
                description="Complete stump grinding and surface root removal so you can replant, lay sod, or complete hardscape projects without tripping hazards."
                href="/services/stump-grinding"
              />
              <SalemServiceCard
                title="24/7 Emergency Tree Service"
                description="Rapid-response crews for storm damage, fallen limbs, and trees on structures anywhere in Salem, day or night."
                href="/services/emergency-tree-service"
              />
            </div>
          </div>
        </section>

        {/* Neighborhoods / Service Areas inside Salem */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex md:items-start md:justify-between gap-10 mb-10">
              <div className="max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Serving All Salem Areas
                </h2>
                <p className="text-gray-700 mb-4">
                  From established neighborhoods with mature trees to newer developments,
                  our crews provide consistent, reliable tree care across the entire Salem area.
                  If your property is in Salem, we can help.
                </p>
                <p className="text-gray-700">
                  We regularly work with homeowners, landlords, property managers, and
                  business owners to keep trees safe around homes, apartments, sidewalks, and
                  parking lots. Whether you need a single hazardous tree removed or an
                  ongoing maintenance plan for a larger property, our team is equipped
                  to handle it.
                </p>
              </div>
              <div className="mt-6 md:mt-0 md:w-80 bg-green-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  Licensed & Insured in Salem
                </h3>
                <ul className="space-y-2 text-sm text-green-900">
                  <li>• CCB License #212995</li>
                  <li>• ISA Certified Arborists</li>
                  <li>• Full liability & workers&apos; comp coverage</li>
                  <li>• Familiar with Salem tree codes and permits</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {salemNeighborhoods.map((name) => (
                <div
                  key={name}
                  className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why choose section focused on Salem */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                Why Salem Homeowners Choose Our Tree Services
              </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Deep Local Experience
                </h3>
                <p className="text-gray-700 text-sm">
                  We have been working in the Salem area for decades.
                  Our crews understand local tree species, soil conditions, and the way
                  Pacific Northwest weather affects tree health and stability. This local
                  knowledge allows us to spot problems early and recommend solutions that
                  make sense for Salem properties.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Safety-First Approach
                </h3>
                <p className="text-gray-700 text-sm">
                  Working around houses, garages, driveways, and power lines requires
                  careful planning. We use modern rigging techniques, cranes when needed, and
                  strict safety protocols to protect people and property. Every job includes
                  thorough cleanup so your yard, sidewalk, and street are left neat and safe.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Clear Communication & Honest Advice
                </h3>
                <p className="text-gray-700 text-sm">
                  We know tree work can feel overwhelming, especially when a large tree is
                  close to your home. Our arborists take the time to explain risk levels,
                  options, and expected outcomes so you can make confident decisions. We do
                  not push unnecessary work – our goal is long-term relationships with happy
                  Salem customers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Salem-specific FAQs */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Salem Tree Service FAQs
            </h2>
            <div className="space-y-6 text-gray-800">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Do I need a permit to remove a tree in Salem?
                </h3>
                <p className="text-sm md:text-base">
                  In many cases, yes. The City of Salem has tree removal regulations,
                  especially for larger trees and those in certain zones. Our team handles
                  the permit process for you when it&apos;s required. During your estimate we will
                  measure the tree, review its location, and let you know whether a permit
                  is needed before any work begins.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  How much does tree service cost in Salem?
                </h3>
                <p className="text-sm md:text-base">
                  Pricing depends on the size of the tree, its location on your property,
                  access for equipment, and the complexity of the work. A small ornamental
                  pruning job may cost a few hundred dollars, while a large removal over a
                  house or power line can be significantly more. We provide clear, written
                  estimates so you understand the investment before scheduling service.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Do you offer emergency tree service in Salem?
                </h3>
                <p className="text-sm md:text-base">
                  We provide <strong>24/7 emergency tree service</strong> throughout Salem
                  for storm-damaged, leaning, or fallen trees. If a tree is on a structure,
                  blocking access, or posing an immediate risk, call us right away. We will
                  prioritize your job and dispatch a crew as quickly as possible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-green-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Schedule Tree Service in Salem, Oregon
            </h2>
            <p className="text-green-100 mb-6 text-base md:text-lg">
                Ready to take care of the trees on your Salem property? Whether you need a
              single hazardous tree removed, a full pruning plan, or emergency help after a
              storm, Tree Services is here for you.
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
                Request Free Quote Online
              </Link>
            </div>
          </div>
        </section>

        {/* Local Service structured data */}
        <section aria-hidden="true" className="hidden">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Service',
                name: 'Tree Service Salem Oregon',
                areaServed: {
                  '@type': 'City',
                  name: 'Salem',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Salem',
                    addressRegion: 'OR',
                    addressCountry: 'US',
                  },
                },
                provider: {
                  '@type': 'LocalBusiness',
                  name: 'Tree Services',
                  telephone: '503-449-4066',
                  url: 'https://yourtreeservicewebsite.com',
                },
                url: 'https://yourtreeservicewebsite.com/locations/salem-tree-service',
                serviceType: [
                  'Tree Removal',
                  'Tree Trimming',
                  'Stump Grinding',
                  'Emergency Tree Service',
                  'Arborist Services',
                ],
              }),
            }}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}

interface SalemServiceCardProps {
  title: string;
  description: string;
  href: string;
}

function SalemServiceCard({ title, description, href }: SalemServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-700 flex-1 mb-4">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center text-green-700 font-semibold hover:text-green-800"
      >
        Learn More
        <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
