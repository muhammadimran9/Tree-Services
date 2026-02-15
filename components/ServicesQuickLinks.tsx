import Link from 'next/link';

export default function ServicesQuickLinks() {
  const services = [
    {
      title: "Tree Removal",
      description: "Safe and efficient tree removal services for hazardous or unwanted trees with minimal impact on your property.",
      link: "/services/tree-removal"
    },
    {
      title: "Tree Trimming", 
      description: "Professional tree pruning and trimming to maintain health, improve structure, and enhance appearance.",
      link: "/services/tree-trimming"
    },
    {
      title: "Tree Cabling & Bracing",
      description: "Structural support systems to protect valuable trees from storm damage and structural failure.",
      link: "/services/tree-cabling-bracing"
    },
    {
      title: "Stump Grinding",
      description: "Complete stump removal and grinding services to clear your property and prevent regrowth.",
      link: "/services/stump-grinding"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 flex flex-col h-full">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">
                {service.description}
              </p>
              <Link 
                href={service.link}
                className="inline-flex items-center text-green-700 font-semibold hover:text-green-800 transition-colors"
              >
                Contact Now
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
