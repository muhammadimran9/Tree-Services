'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// FAQ data - in production this would come from a CMS or database
const faqData = [
  {
    category: 'Tree Care & Maintenance',
    questions: [
      {
        question: 'How often should I water my trees in Portland?',
        answer: 'Portland trees typically need deep watering once a week during dry summer months, less in spring and fall. Young trees need more frequent watering. Check soil moisture 2-3 inches deep before watering.'
      },
      {
        question: 'What\'s the best time of year to prune trees in Oregon?',
        answer: 'Late winter through early spring (February-March) is ideal for most trees. Avoid pruning in fall as it can stimulate new growth that may be damaged by winter cold.'
      },
      {
        question: 'How do I know if my tree is healthy?',
        answer: 'Look for vibrant green leaves, new growth, strong bark, and no dead branches. Warning signs include discolored leaves, fungal growth, cracks in bark, and leaning.'
      },
      {
        question: 'Should I mulch around my trees?',
        answer: 'Yes! Apply 2-4 inches of organic mulch around the base, keeping it 2-3 inches away from the trunk. Mulch retains moisture, regulates temperature, and prevents weeds.'
      }
    ]
  },
  {
    category: 'Tree Removal & Safety',
    questions: [
      {
        question: 'When should I remove a tree?',
        answer: 'Remove trees that are dead, dying, hazardous, causing property damage, or in the way of construction. Look for signs like extensive dead wood, fungal growth, or leaning toward structures.'
      },
      {
        question: 'Do I need a permit to remove a tree in Portland?',
        answer: 'Portland requires permits for trees 12 inches or more in diameter. Protected or heritage trees may always need permits. Urban Timber handles all permit applications.'
      },
      {
        question: 'How much does tree removal cost?',
        answer: 'Costs vary from $300 for small trees to $3,000+ for large, difficult removals. Factors include size, location, access, and complexity. We provide free estimates.'
      },
      {
        question: 'Is stump grinding included in tree removal?',
        answer: 'Yes, we include stump grinding with most tree removals. This prevents regrowth and allows for immediate replanting or landscaping.'
      }
    ]
  },
  {
    category: 'Emergency Services',
    questions: [
      {
        question: 'What constitutes a tree emergency?',
        answer: 'Tree emergencies include trees on power lines, blocking roads, damaged by storms, or in immediate danger of falling on people or property. Call 24/7 for emergency service.'
      },
      {
        question: 'How quickly can you respond to tree emergencies?',
        answer: 'We offer 24/7 emergency response throughout Portland metro area. Typical response time is 1-2 hours depending on location and severity.'
      },
      {
        question: 'Does insurance cover emergency tree removal?',
        answer: 'Many homeowners policies cover tree removal if it falls on structures or blocks access. We can help document damage and work with insurance companies.'
      },
      {
        question: 'What should I do after storm damage?',
        answer: 'Stay away from damaged trees, call professionals immediately, document damage with photos, and contact your insurance company if structures are affected.'
      }
    ]
  },
  {
    category: 'Pricing & Services',
    questions: [
      {
        question: 'Are your arborists certified?',
        answer: 'Yes, all our arborists hold ISA (International Society of Arboriculture) certifications and follow ANSI A300 standards for tree care.'
      },
      {
        question: 'Are you licensed and insured?',
        answer: 'We are CCB Licensed #212995 and carry comprehensive liability and workers\' compensation insurance for your protection.'
      },
      {
        question: 'Do you offer free estimates?',
        answer: 'Yes, we provide free, no-obligation quotes for all tree services. Our estimates include detailed cost breakdowns and timelines.'
      },
      {
        question: 'What areas do you service?',
        answer: 'We serve the entire Portland metro area including Beaverton, Lake Oswego, Gresham, Tigard, Hillsboro, Milwaukie, and surrounding communities.'
      }
    ]
  }
];

export default function FAQPage() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
    setExpandedQuestion(null); // Close questions when switching categories
  };

  const toggleQuestion = (questionId: string) => {
    setExpandedQuestion(expandedQuestion === questionId ? null : questionId);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl max-w-3xl">
            Get answers to common questions about tree care, removal, and our services 
            from Portland's trusted arborists.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-8">
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category.category)}
                  className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-left"
                  aria-expanded={expandedCategory === category.category}
                  aria-controls={`category-${categoryIndex}`}
                >
                  <h2 className="text-2xl font-bold text-gray-900">
                    {category.category}
                  </h2>
                  <svg 
                    className={`w-6 h-6 text-gray-500 transition-transform ${expandedCategory === category.category ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Questions */}
                {expandedCategory === category.category && (
                  <div 
                    id={`category-${categoryIndex}`}
                    className="mt-4 space-y-4"
                    role="region"
                    aria-labelledby={`category-${categoryIndex}-header`}
                  >
                    {category.questions.map((faq, questionIndex) => {
                      const questionId = `${categoryIndex}-${questionIndex}`;
                      return (
                        <div key={questionId} className="border border-gray-200 rounded-lg overflow-hidden">
                          <button
                            onClick={() => toggleQuestion(questionId)}
                            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                            aria-expanded={expandedQuestion === questionId}
                            aria-controls={`answer-${questionId}`}
                          >
                            <span className="font-semibold text-gray-900">
                              {faq.question}
                            </span>
                            <svg 
                              className={`w-5 h-5 text-gray-500 transition-transform ${expandedQuestion === questionId ? 'rotate-180' : ''}`}
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          
                          {expandedQuestion === questionId && (
                            <div 
                              id={`answer-${questionId}`}
                              className="px-6 py-4 border-t border-gray-200 bg-gray-50"
                              role="region"
                              aria-labelledby={`question-${questionId}`}
                            >
                              <p className="text-gray-700 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-green-700 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="mb-6 text-green-100">
              Can't find the answer you're looking for? 
              Contact our expert arborists directly for personalized advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:503-449-4066" 
                className="flex items-center justify-center bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (503) 449-4066
              </a>
              <a 
                href="/quote" 
                className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Ask a Question
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
