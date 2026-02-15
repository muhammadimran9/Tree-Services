'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

// Service data - in production this would come from a CMS or database
const services = {
  'tree-removal': {
    name: 'Tree Removal',
    description: 'Professional tree removal services for hazardous, dead, or unwanted trees in Portland. Our ISA-certified arborists use advanced techniques to safely remove trees of any size while protecting your property and landscape.',
    audience: 'Property owners with hazardous trees, construction sites, storm damage cleanup',
    useCases: [
      'Dead or dying trees posing safety risks',
      'Trees damaging foundations or utilities',
      'Storm-damaged trees',
      'Construction clearing',
      'Disease or insect-infested trees'
    ],
    benefits: [
      'Eliminates safety hazards',
      'Protects property and structures',
      'Prevents disease spread',
      'Improves landscape aesthetics',
      'Allows for new plantings'
    ],
    permitInfo: 'Portland requires permits for trees over 12 inches diameter. We handle all permit applications and compliance requirements.',
    risks: [
      'Property damage from improper felling',
      'Utility line damage',
      'Personal injury risks',
      'Neighbor property damage',
      'Falling debris hazards'
    ]
  },
  'tree-trimming': {
    name: 'Tree Trimming',
    description: 'Expert tree pruning and trimming services to maintain tree health, improve structure, and enhance the beauty of your Portland property. Our certified arborists follow ANSI A300 standards for all pruning work.',
    audience: 'Homeowners, property managers, businesses seeking regular tree maintenance',
    useCases: [
      'Regular tree health maintenance',
      'Storm damage prevention',
      'Improving sunlight penetration',
      'Enhancing tree structure',
      'Clearing utility line conflicts'
    ],
    benefits: [
      'Improves tree health and vigor',
      'Reduces storm damage risk',
      'Enhances aesthetic appeal',
      'Increases sunlight and air flow',
      'Prevents property conflicts'
    ],
    permitInfo: 'Most pruning work doesn\'t require permits, but protected trees may need city approval. We verify all requirements.',
    risks: [
      'Over-pruning causing tree stress',
      'Improper cuts leading to disease',
      'Creating weak branch structure',
      'Affecting tree stability',
      'Reducing tree value'
    ]
  },
  'stump-grinding': {
    name: 'Stump Grinding',
    description: 'Complete stump removal and grinding services to clear your property of tree remnants after removal. Our powerful equipment can handle any size stump and access challenging locations.',
    audience: 'Property owners who have had trees removed and want complete site clearing',
    useCases: [
      'Post-tree removal cleanup',
      'New construction preparation',
      'Landscape renovation projects',
      'Preventing stump regrowth',
      'Eliminating pest habitats'
    ],
    benefits: [
      'Complete stump removal',
      'Prevents regrowth',
      'Eliminates pest habitats',
      'Allows immediate replanting',
      'Improves lawn appearance'
    ],
    permitInfo: 'Stump grinding typically doesn\'t require permits as it\'s part of tree removal process.',
    risks: [
      'Underground utility damage',
      'Property damage from equipment',
      'Incomplete removal leading to regrowth',
      'Surface root damage',
      'Soil compaction'
    ]
  },
  'tree-cabling-bracing': {
    name: 'Tree Cabling & Bracing',
    description: 'Structural support systems installed to protect valuable trees from failure and extend their lifespan. Our ISA-certified arborists use industry-standard materials and techniques.',
    audience: 'Property owners with valuable mature trees showing signs of structural weakness',
    useCases: [
      'Multi-stemmed trees needing support',
      'Trees with weak branch unions',
      'Storm damage prevention',
      'Extending life of historic trees',
      'Preventing splitting during heavy winds'
    ],
    benefits: [
      'Prevents tree failure',
      'Extends tree lifespan',
      'Reduces storm damage risk',
      'Preserves valuable specimens',
      'Minimal visual impact'
    ],
    permitInfo: 'Cabling systems generally don\'t require permits but must follow ANSI A300 standards.',
    risks: [
      'Improper installation causing damage',
      'Girdling from tight cables',
      'Creating weak points',
      'Hardware failure over time',
      'Tree health decline'
    ]
  }
};

interface ServicePageProps {
  params: {
    'service-slug': string;
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  const service = services[params['service-slug'] as keyof typeof services];
  
  if (!service) {
    notFound();
  }

  const faqs = [
    {
      question: `How much does ${service.name.toLowerCase()} cost in Portland?`,
      answer: `Costs vary based on tree size, location, complexity, and access. We provide free, no-obligation quotes after assessing your specific situation.`
    },
    {
      question: `Do I need a permit for ${service.name.toLowerCase()}?`,
      answer: service.permitInfo
    },
    {
      question: `How long does ${service.name.toLowerCase()} take?`,
      answer: `Timeframes vary from a few hours for simple jobs to several days for complex projects. We provide detailed timelines during the quoting process.`
    },
    {
      question: 'Are you licensed and insured?',
      answer: 'Yes, we are CCB Licensed #212995 and carry comprehensive liability and workers compensation insurance.'
    }
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-700 to-green-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/hero-tree.svg"
            alt={`${service.name} Portland`}
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {service.name} Portland
          </h1>
          <p className="text-xl max-w-3xl">
            {service.description}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Professional {service.name} Services
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                {service.description}
              </p>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  Ideal For: {service.audience}
                </h3>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Common Use Cases
              </h3>
              <ul className="space-y-3">
                {service.useCases.map((useCase, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Key Benefits of Professional {service.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subsections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Risks */}
            <div>
              <h3 className="text-2xl font-bold text-red-700 mb-6">
                Risks if {service.name} is Ignored
              </h3>
              <ul className="space-y-3">
                {service.risks.map((risk, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-red-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm2-6a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{risk}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How We Execute */}
            <div>
              <h3 className="text-2xl font-bold text-green-700 mb-6">
                How Urban Timber Executes {service.name}
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">ISA-Certified Arborists</h4>
                  <p className="text-gray-700">Our team holds International Society of Arboriculture certifications and follows industry best practices.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Advanced Equipment</h4>
                  <p className="text-gray-700">We use state-of-the-art equipment for safe, efficient service execution.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Safety Protocols</h4>
                  <p className="text-gray-700">OSHA-compliant safety procedures protect your property and our team.</p>
                </div>
              </div>
            </div>

            {/* Permit & Compliance */}
            <div>
              <h3 className="text-2xl font-bold text-blue-700 mb-6">
                Permit & Compliance Considerations
              </h3>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">{service.permitInfo}</p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600"><strong>CCB License:</strong> #212995</p>
                  <p className="text-sm text-gray-600"><strong>Insurance:</strong> Fully insured and bonded</p>
                  <p className="text-sm text-gray-600"><strong>Compliance:</strong> Portland city regulations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our {service.name} Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: 'Assessment', description: 'Thorough evaluation of tree health and site conditions' },
              { step: 'Plan', description: 'Detailed service plan and safety protocols' },
              { step: 'Quote', description: 'Transparent pricing with detailed cost breakdown' },
              { step: 'Schedule', description: 'Convenient appointment scheduling with minimal disruption' },
              { step: 'Perform', description: 'Professional execution with thorough cleanup' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.step}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <svg 
                    className={`w-5 h-5 text-gray-500 transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedFaq === index && (
                  <div className="px-6 py-4 border-t border-gray-200">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready for Professional {service.name}?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Contact Urban Timber Tree Service for expert {service.name.toLowerCase()} in Portland. 
            ISA-certified arborists ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:503-449-4066" 
              className="flex items-center justify-center bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Contact Now
            </a>
            <a 
              href="/tree-service-and-trimming-quote" 
              className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Get Quote
            </a>
          </div>
        </div>
      </section>

      {/* Schema.org Structured Data */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Urban Timber Tree Service",
            "description": `Professional ${service.name} services in Portland, Oregon`,
            "url": `https://urbantimber.com/services/${params['service-slug']}`,
            "telephone": "503-449-4066",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "10808 SE Harold St",
              "addressLocality": "Portland",
              "addressRegion": "OR",
              "postalCode": "97266"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 45.5152,
              "longitude": -122.6784
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceType": service.name,
            "areaServed": "Portland Metro Area",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": service.name,
              "itemListElement": service.benefits.map((benefit, index) => ({
                "@type": "Offer",
                "itemOffered": benefit,
                "position": index + 1
              }))
            }
          })
        }}
      />

      <Footer />
    </div>
  );
}
