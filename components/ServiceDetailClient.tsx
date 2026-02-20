'use client';

import { useState } from 'react';
import Image from 'next/image';

type ServiceData = {
  name: string;
  description: string;
  audience: string;
  useCases: string[];
  benefits: string[];
  permitInfo: string;
  risks: string[];
};

interface ServiceDetailClientProps {
  service: ServiceData;
  slug: string;
}

export default function ServiceDetailClient({ service, slug }: ServiceDetailClientProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: `How much does ${service.name.toLowerCase()} cost in Portland?`,
      answer:
        'Costs vary based on tree size, location, complexity, and access. We provide free, no-obligation quotes after assessing your specific situation.',
    },
    {
      question: `Do I need a permit for ${service.name.toLowerCase()}?`,
      answer: service.permitInfo,
    },
    {
      question: `How long does ${service.name.toLowerCase()} take?`,
      answer:
        'Timeframes vary from a few hours for simple jobs to several days for complex projects. We provide detailed timelines during the quoting process.',
    },
    {
      question: 'Are you licensed and insured?',
      answer:
        'Yes, we are CCB Licensed #212995 and carry comprehensive liability and workers compensation insurance.',
    },
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-700 to-green-900 text-white h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/hero-tree.jpg"
            alt={`${service.name} Portland`}
            fill
            className="object-cover opacity-20"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    <svg
                      className="w-6 h-6 text-green-600 mr-3 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
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
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
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
                    <svg
                      className="w-5 h-5 text-red-600 mr-3 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm2-6a1 1 0 11-2 0 1 1 0 012 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{risk}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How We Execute */}
            <div>
              <h3 className="text-2xl font-bold text-green-700 mb-6">
                How Our Team Executes {service.name}
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">ISA-Certified Arborists</h4>
                  <p className="text-gray-700">
                    Our team holds International Society of Arboriculture certifications and
                    follows industry best practices.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Advanced Equipment</h4>
                  <p className="text-gray-700">
                    We use state-of-the-art equipment for safe, efficient service execution.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Safety Protocols</h4>
                  <p className="text-gray-700">
                    OSHA-compliant safety procedures protect your property and our team.
                  </p>
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
                  <p className="text-sm text-gray-600">
                    <strong>CCB License:</strong> #212995
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Insurance:</strong> Fully insured and bonded
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Compliance:</strong> Portland city regulations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Comprehensive Guide to {service.name} in Portland, Oregon
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-lg leading-relaxed">
              When it comes to {service.name.toLowerCase()} in Portland, Oregon, property owners
              need a service provider they can trust. Our experienced tree care team has been serving
              the Portland metropolitan area for over 30 years, providing expert tree care
              services backed by ISA certification and CCB licensing. Our team of certified
              arborists understands the unique challenges of maintaining trees in Portland&apos;s
              climate, from the wet winters to the dry summers.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Why Choose Professional {service.name}?
            </h3>
            <p>
              Professional {service.name.toLowerCase()} is essential for maintaining the health,
              safety, and beauty of your property. In Portland, where trees are a vital part of
              the urban landscape, proper tree care requires expertise, specialized equipment,
              and knowledge of local regulations. Our ISA-certified arborists bring decades of
              experience to every project, ensuring that your trees receive the best possible
              care while protecting your property and complying with all local ordinances.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Understanding Portland&apos;s Tree Care Requirements
            </h3>
            <p>
              Portland has specific regulations regarding tree work, and understanding these
              requirements is crucial for property owners. The city&apos;s Urban Forestry division
              oversees tree protection and removal permits, particularly for trees over 12 inches
              in diameter. Our team is well-versed in Portland&apos;s tree codes and can help
              navigate the permit process, ensuring all work is completed legally and safely. We
              maintain CCB License #212995 and carry comprehensive insurance, giving you peace of
              mind that your project is in qualified hands.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              The Tree Services Difference
            </h3>
            <p>
              What sets our tree service team apart is our commitment to excellence and
              safety. Every member of our team holds ISA (International Society of Arboriculture)
              certification, demonstrating their expertise in tree care best practices. We use
              state-of-the-art equipment and follow OSHA safety protocols, ensuring that every
              project is completed safely and efficiently. Our 30+ years of experience in the
              Portland area means we understand the local tree species, common issues, and the
              best approaches for maintaining healthy urban trees.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Common Scenarios Requiring {service.name}
            </h3>
            <p>
              Property owners throughout Portland encounter various situations that require
              professional {service.name.toLowerCase()}. Whether you&apos;re dealing with a
              hazardous tree threatening your home, planning a landscape renovation, or
              addressing storm damage, our team has the expertise to handle your specific needs.
              We serve all areas of Portland, including Beaverton, Lake Oswego, Gresham, Tigard,
              Hillsboro, and surrounding communities. Our local knowledge and experience make us
              the preferred choice for tree care throughout the metro area.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Investment in Quality Tree Care
            </h3>
            <p>
              Investing in professional {service.name.toLowerCase()} is an investment in your
              property&apos;s value, safety, and aesthetic appeal. While DIY tree work may seem
              cost-effective initially, the risks of property damage, personal injury, and
              improper techniques can lead to much higher costs down the road. Our professional
              services ensure that work is done correctly the first time, protecting your
              investment and maintaining the health of your trees. We provide transparent,
              detailed quotes so you know exactly what to expect, with no hidden fees or
              surprises.
            </p>
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
              { step: 'Perform', description: 'Professional execution with thorough cleanup' },
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
            Contact Tree Services for expert {service.name.toLowerCase()} in Portland.
            ISA-certified arborists ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:503-449-4066"
              className="flex items-center justify-center bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Contact Now
            </a>
            <a
              href="/quote"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Get Quote
            </a>
          </div>
        </div>
      </section>

      {/* Schema.org Structured Data */}
      <section aria-hidden="true" className="hidden">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Tree Services',
              description: `Professional ${service.name} services in Portland, Oregon`,
              url: `https://yourtreeservicewebsite.com/services/${slug}`,
              telephone: '503-449-4066',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '10808 SE Harold St',
                addressLocality: 'Portland',
                addressRegion: 'OR',
                postalCode: '97266',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 45.5152,
                longitude: -122.6784,
              },
              openingHours: 'Mo-Su 00:00-23:59',
              serviceType: service.name,
              areaServed: 'Portland Metro Area',
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: service.name,
                itemListElement: service.benefits.map((benefit, index) => ({
                  '@type': 'Offer',
                  itemOffered: benefit,
                  position: index + 1,
                })),
              },
            }),
          }}
        />
      </section>
    </>
  );
}

