'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "How much does tree removal cost in Portland?",
    answer: "Tree removal costs in Portland typically range from $300 to $2,500 depending on tree size, location, and complexity. Small trees under 30 feet may cost $300-$800, medium trees 30-60 feet cost $800-$1,500, and large trees over 60 feet can cost $1,500-$3,000+. Factors like proximity to structures, power lines, and accessibility affect pricing. We provide free, detailed estimates for Portland tree removal projects."
  },
  {
    question: "Do I need a permit to remove a tree in Salem?",
    answer: "Yes, Salem has tree removal regulations. Trees over 20 inches in diameter typically require a permit, especially in certain zones. Our team handles the permit process for you when required. During your free estimate, we'll measure the tree, check local requirements, and let you know if a permit is needed before any work begins in Salem."
  },
  {
    question: "What's the response time for emergency tree removal?",
    answer: "We offer 24/7 emergency tree service for both Portland and Salem. For dangerous situations like fallen trees on structures or blocking roads, we respond within 1-2 hours. Non-immediate emergencies are typically handled within 24 hours. Call (503) 449-4066 immediately for emergency tree service in Portland or Salem."
  },
  {
    question: "Are you licensed and insured for tree work?",
    answer: "Absolutely! We're CCB licensed #212995, fully insured with liability and workers' compensation coverage, and employ ISA certified arborists. This protects you and your property throughout the tree service process. We're also familiar with local tree codes and permit requirements in both Portland and Salem."
  },
  {
    question: "Do you offer same-day tree service?",
    answer: "Yes, we offer same-day tree service throughout Portland and Salem when scheduling permits. For non-emergency jobs like routine pruning or scheduled removals, we can often accommodate same-day requests. Emergency situations always receive priority response. Call us early in the day for the best availability."
  },
  {
    question: "What areas do you service in Oregon?",
    answer: "We serve Portland, Salem, and surrounding areas including Multnomah County, Marion County, Keizer, Beaverton, Gresham, Hillsboro, West Linn, Lake Oswego, and nearby communities. If you're in the greater Portland-Salem area, we can help with your tree service needs."
  },
  {
    question: "How do I know if a tree needs to be removed?",
    answer: "Signs a tree may need removal include: dead or dying branches, fungal growth at the base, leaning suddenly after storms, cracks in the trunk, root damage, or proximity to power lines/structures. Our ISA certified arborists provide free tree health assessments throughout Portland and Salem to help you make informed decisions."
  },
  {
    question: "What's included in your tree removal service?",
    answer: "Our complete tree removal service includes: safe tree felling or sectional removal, cleanup of all debris, stump grinding (optional), and site restoration. We handle everything from permits to final cleanup. All work is performed by trained professionals using industry-standard safety equipment."
  },
  {
    question: "Do you offer free estimates?",
    answer: "Yes! We provide free, no-obligation estimates for all tree services in Portland and Salem. Our arborists visit your property, assess the trees, discuss your goals, and provide detailed written quotes with no hidden fees. Call (503) 449-4066 to schedule your free tree service estimate."
  },
  {
    question: "What's the best time of year for tree trimming?",
    answer: "Most trees are best trimmed during late winter or early spring while dormant. However, dead or hazardous branches should be removed immediately regardless of season. Our arborists understand Oregon's tree species and can recommend optimal timing for your specific trees in Portland or Salem."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about tree service in Portland and Salem, Oregon
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-green-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-green-700 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-green-100 mb-6">
              Our tree service experts are here to help. Call us for a free consultation or estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:503-449-4066"
                className="inline-flex items-center justify-center bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                📞 Call (503) 449-4066
              </a>
              <a
                href="/quote"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-colors"
              >
                Request Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
