import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Tree Service Portland Oregon | Local Tree Experts in Portland, OR',
  description:
    'Looking for tree service in Portland, Oregon? Urban Timber Tree Service provides safe tree removal, pruning, stump grinding and emergency service across all Portland neighborhoods. Free quotes, ISA certified arborists, CCB #212995.',
  openGraph: {
    title: 'Tree Service Portland Oregon | Urban Timber Tree Service',
    description:
      'Full-service tree care in Portland, OR – tree removal, trimming, stump grinding, and emergency tree service performed by ISA certified arborists.',
    url: 'https://urbantimber.com/locations/portland-tree-service',
    type: 'website',
  },
  alternates: {
    canonical: 'https://urbantimber.com/locations/portland-tree-service',
  },
};

const portlandNeighborhoods = [
  'Downtown Portland',
  'Sellwood-Moreland',
  'Hawthorne',
  'Alberta Arts District',
  'Laurelhurst',
  'Mt. Tabor',
  'Richmond',
  'Lents',
  'Foster-Powell',
  'St. Johns',
  'North Portland',
  'Northeast Portland',
  'Southeast Portland',
  'Southwest Portland',
  'Eastmoreland',
  'Woodstock',
  'Kenton',
  'Rose City Park',
  'Hollywood District',
  'Irvington',
];

export default function PortlandTreeServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-r from-green-700 to-green-900 text-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Tree Service in Portland, Oregon
              </h1>
              <p className="text-lg md:text-xl text-green-100 mb-6">
                Local, licensed, and fully insured tree service company based in Portland, OR.
                We help homeowners and businesses keep their trees safe, healthy, and beautiful
                in every season.
              </p>
              <p className="text-sm md:text-base text-green-100 mb-6">
                Serving all Portland neighborhoods with ISA certified arborists, CCB License
                #212995, and over 30 years of hands-on local experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:503-449-4066"
                  className="inline-flex items-center justify-center bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                  Call (503) 449-4066 for Portland Service
                </a>
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-colors"
                >
                  Request Free Portland Quote
                </Link>
              </div>
              <p className="mt-4 text-xs md:text-sm text-green-100">
                24/7 emergency tree service available anywhere in Portland, Oregon.
              </p>
            </div>
          </div>
        </section>

        {/* Intro & Local Focus */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Local Portland Tree Service You Can Trust
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-5">
              <p>
                When you search for <strong>tree service in Portland, Oregon</strong>, you are
                not just looking for someone with a chainsaw – you are looking for a local
                partner who understands our city&apos;s trees, climate, and regulations.
                Urban Timber Tree Service has been working in Portland for decades, caring for
                mature street trees in historic neighborhoods, tall evergreens on steep lots,
                and young plantings in new developments.
              </p>
              <p>
                Portland&apos;s tree canopy is one of the things that makes our city special.
                At the same time, tall Douglas firs, maples, and ornamentals can become a
                safety concern when they are not maintained correctly. Heavy winter rain,
                high winds, and saturated soil can cause branches to break and trees to fail.
                Our ISA certified arborists evaluate each tree carefully, explain what they
                see in plain language, and recommend only the work that truly needs to be
                done to keep your property safe and your landscape healthy.
              </p>
              <p>
                Because we are headquartered in Portland, our crews know the narrow streets,
                tight alleys, and small backyards that are common throughout the city. We
                arrive with the right equipment for urban work – compact lifts, climbing
                gear, and rigging systems – so we can remove or prune trees safely even when
                access is limited and there are houses, fences, and power lines nearby.
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

        {/* Services for Portland */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Tree Services Available in Portland, OR
                </h2>
                <p className="mt-3 text-gray-600 max-w-2xl">
                  We provide full-service tree care for homes, rentals, HOAs, and commercial
                  properties anywhere in the city of Portland. Each service has a dedicated
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
              <PortlandServiceCard
                title="Tree Removal Portland OR"
                description="Safe removal of hazardous, dead, or unwanted trees on tight city lots, steep slopes, and near homes, garages, and fences."
                href="/services/tree-removal"
              />
              <PortlandServiceCard
                title="Tree Trimming & Pruning"
                description="Health-focused pruning that reduces risk, improves structure, and keeps your Portland trees looking their best year-round."
                href="/services/tree-trimming"
              />
              <PortlandServiceCard
                title="Stump Grinding"
                description="Complete stump grinding and surface root removal so you can replant, lay sod, or complete hardscape projects without tripping hazards."
                href="/services/stump-grinding"
              />
              <PortlandServiceCard
                title="24/7 Emergency Tree Service"
                description="Rapid-response crews for storm damage, fallen limbs, and trees on structures anywhere in Portland, day or night."
                href="/services/emergency-tree-service"
              />
            </div>
          </div>
        </section>

        {/* Neighborhoods / Service Areas inside Portland */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex md:items-start md:justify-between gap-10 mb-10">
              <div className="max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Serving All Portland Neighborhoods
                </h2>
                <p className="text-gray-700 mb-4">
                  From historic east side neighborhoods with towering maples to newer west
                  side developments with ornamental plantings, Urban Timber Tree Service
                  provides consistent, reliable tree care across the entire city of Portland.
                  If your property has a Portland mailing address, we can help.
                </p>
                <p className="text-gray-700">
                  We regularly work with homeowners, landlords, property managers, and
                  business owners to keep trees safe around homes, apartments, sidewalks, and
                  parking lots. Whether you need a single hazardous tree removed or an
                  ongoing maintenance plan for a larger property, our local team is equipped
                  to handle it.
                </p>
              </div>
              <div className="mt-6 md:mt-0 md:w-80 bg-green-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  Licensed & Insured in Portland
                </h3>
                <ul className="space-y-2 text-sm text-green-900">
                  <li>• CCB License #212995</li>
                  <li>• ISA Certified Arborists</li>
                  <li>• Full liability & workers&apos; comp coverage</li>
                  <li>• Familiar with Portland tree codes and permits</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {portlandNeighborhoods.map((name) => (
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

        {/* Why choose section focused on Portland */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Portland Homeowners Choose Urban Timber Tree Service
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Deep Local Experience
                </h3>
                <p className="text-gray-700 text-sm">
                  We have been working exclusively in the Portland metro area for decades.
                  Our crews understand local tree species, soil conditions, and the way
                  Pacific Northwest weather affects tree health and stability. This local
                  knowledge allows us to spot problems early and recommend solutions that
                  make sense for Portland properties.
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
                  Portland customers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portland-specific FAQs */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Portland Tree Service FAQs
            </h2>
            <div className="space-y-6 text-gray-800">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Do I need a permit to remove a tree in Portland?
                </h3>
                <p className="text-sm md:text-base">
                  In many cases, yes. The City of Portland requires permits for removing
                  street trees and private trees above a certain trunk diameter, especially
                  in environmental zones and overlay districts. Our team handles the permit
                  process for you when it&apos;s required. During your estimate we will
                  measure the tree, review its location, and let you know whether a permit
                  is needed before any work begins.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  How much does tree service cost in Portland?
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
                  Can you work in tight Portland backyards or alleys?
                </h3>
                <p className="text-sm md:text-base">
                  Yes. Many Portland homes have limited access and small yards. Our crews
                  regularly perform technical removals and pruning in tight spaces using
                  climbing techniques, compact equipment, and controlled rigging to lower
                  branches safely without damaging neighboring structures or landscaping.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Do you offer emergency tree service in Portland?
                </h3>
                <p className="text-sm md:text-base">
                  We provide <strong>24/7 emergency tree service</strong> throughout Portland
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
              Schedule Tree Service in Portland, Oregon
            </h2>
            <p className="text-green-100 mb-6 text-base md:text-lg">
              Ready to take care of the trees on your Portland property? Whether you need a
              single hazardous tree removed, a full pruning plan, or emergency help after a
              storm, Urban Timber Tree Service is here for you.
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
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Service',
                name: 'Tree Service Portland Oregon',
                areaServed: {
                  '@type': 'City',
                  name: 'Portland',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Portland',
                    addressRegion: 'OR',
                    addressCountry: 'US',
                  },
                },
                provider: {
                  '@type': 'LocalBusiness',
                  name: 'Urban Timber Tree Service Inc.',
                  telephone: '503-449-4066',
                  url: 'https://urbantimber.com',
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: '10808 SE Harold St',
                    addressLocality: 'Portland',
                    addressRegion: 'OR',
                    postalCode: '97266',
                    addressCountry: 'US',
                  },
                },
                url: 'https://urbantimber.com/locations/portland-tree-service',
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

interface PortlandServiceCardProps {
  title: string;
  description: string;
  href: string;
}

function PortlandServiceCard({ title, description, href }: PortlandServiceCardProps) {
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

