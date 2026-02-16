import Link from 'next/link';

export default function AuthoritySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Local Arborists Dedicated to Preserving Portland's Urban Canopy
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our team of ISA Certified Arborists brings decades of combined experience to every project. 
              We specialize in both residential and commercial tree care, providing expert solutions that 
              protect the health and beauty of Portland's urban forest. From delicate pruning to complex removals, 
              we combine scientific knowledge with practical expertise to deliver outstanding results for property 
              owners throughout the Portland metro area.
            </p>
          </div>
          
          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:503-449-4066" 
              className="flex items-center justify-center bg-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (503) 449-4066
            </a>
            <Link 
              href="/quote" 
              className="border-2 border-green-700 text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
