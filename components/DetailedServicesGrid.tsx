import Link from 'next/link';

export default function DetailedServicesGrid() {
  const services = [
    {
      title: "Tree Trimming",
      benefits: [
        "Improves tree health and structure",
        "Enhances aesthetic appeal", 
        "Prevents storm damage",
        "Increases sunlight penetration"
      ],
      description: "Professional pruning services by ISA certified arborists to maintain tree health and safety."
    },
    {
      title: "Tree Removal",
      benefits: [
        "Complete hazard elimination",
        "Stump grinding included",
        "Debris cleanup guaranteed",
        "Permit handling available"
      ],
      description: "Safe and efficient removal of dangerous or unwanted trees with minimal property impact."
    },
    {
      title: "Tree Cabling & Bracing",
      benefits: [
        "Structural support for weak limbs",
        "Storm damage prevention",
        "Extends tree life",
        "Minimal visual impact"
      ],
      description: "Advanced support systems to protect valuable trees from structural failure."
    },
    {
      title: "Stump Grinding",
      benefits: [
        "Complete stump removal",
        "Root system elimination", 
        "Site restoration ready",
        "Prevents pest infestation"
      ],
      description: "Professional stump grinding to completely clear your property of tree remnants."
    },
    {
      title: "Tree Assessment",
      benefits: [
        "Health evaluation reports",
        "Risk analysis",
        "Treatment recommendations",
        "Insurance documentation"
      ],
      description: "Comprehensive tree health and safety assessments by certified arborists."
    },
    {
      title: "Commercial Tree Care",
      benefits: [
        "Property maintenance plans",
        "Liability reduction",
        "Enhanced curb appeal",
        "Regular scheduling"
      ],
      description: "Specialized tree services for commercial properties and municipal spaces."
    },
    {
      title: "Emergency Tree Service",
      benefits: [
        "24/7 response available",
        "Storm damage cleanup",
        "Hazardous tree removal",
        "Insurance claim assistance"
      ],
      description: "Rapid response emergency services for storm damage and hazardous situations."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Tree Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tree care solutions delivered by Portland's most trusted arborists
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-green-700 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t pt-4">
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Permit Info:</strong> We handle all required Portland tree removal permits
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Safety:</strong> Fully licensed, insured, and OSHA compliant
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center text-green-700 font-semibold hover:text-green-800 transition-colors text-sm"
                >
                  Get Service Quote
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
