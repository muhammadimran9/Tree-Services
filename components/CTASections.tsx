import Link from 'next/link';

// Emergency CTA Section
export function EmergencyCTA() {
  return (
    <section className="py-16 md:py-20 bg-red-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6">
          <span className="inline-block bg-yellow-400 text-red-900 px-4 py-2 rounded-full font-bold text-sm mb-4">
            ⚠️ EMERGENCY SERVICE AVAILABLE 24/7
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Storm Damage? Fallen Tree? We're Here NOW!
        </h2>
        <p className="text-red-100 mb-6 text-lg">
          Dangerous trees require immediate attention. Our emergency crews respond fast to protect your property and family.
        </p>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6 max-w-2xl mx-auto">
          <p className="text-sm md:text-base">
            <strong>Immediate Response for:</strong> Trees on structures • Blocked roads • Power line damage • Storm damage cleanup
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:503-449-4066"
            className="inline-flex items-center justify-center bg-yellow-400 text-red-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors shadow-lg"
          >
            🚨 CALL EMERGENCY: (503) 449-4066
          </a>
        </div>
        <p className="mt-4 text-sm text-red-100">
          Serving Portland & Salem • Available 24/7 • Fast Response Guaranteed
        </p>
      </div>
    </section>
  );
}

// Free Estimate CTA Section
export function FreeEstimateCTA() {
  return (
    <section className="py-16 md:py-20 bg-green-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get Your FREE Tree Service Estimate Today
        </h2>
        <p className="text-green-100 mb-6 text-lg">
          No obligation, no pressure. Just honest pricing from Portland & Salem's trusted tree service experts.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl mb-2">📋</div>
            <h3 className="font-semibold mb-1">Detailed Quote</h3>
            <p className="text-sm text-green-100">Written estimates with complete cost breakdown</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl mb-2">👨‍💼</div>
            <h3 className="font-semibold mb-1">Expert Consultation</h3>
            <p className="text-sm text-green-100">ISA certified arborists assess your trees</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl mb-2">⏰</div>
            <h3 className="font-semibold mb-1">Fast Response</h3>
            <p className="text-sm text-green-100">Quick scheduling at your convenience</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/quote"
            className="inline-flex items-center justify-center bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg"
          >
            📝 Request Free Quote Online
          </Link>
          <a
            href="tel:503-449-4066"
            className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-800 transition-colors"
          >
            📞 Call for Quick Quote
          </a>
        </div>
      </div>
    </section>
  );
}

// Same Day Service CTA
export function SameDayCTA() {
  return (
    <section className="py-12 bg-orange-500 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">
              Need Service Today? We Can Help!
            </h3>
            <p className="text-orange-100">
              Same-day tree service available throughout Portland & Salem. Call now to check availability.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="tel:503-449-4066"
              className="inline-flex items-center justify-center bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              📞 (503) 449-4066
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Trust Builder CTA
export function TrustBuilderCTA() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Portland & Salem Homeowners Trust Us
          </h2>
          <p className="text-gray-300 text-lg">
            Local expertise, licensed professionals, and thousands of satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">30+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">5,000+</div>
            <div className="text-gray-300">Trees Serviced</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">4.9★</div>
            <div className="text-gray-300">Customer Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
            <div className="text-gray-300">Emergency Service</div>
          </div>
        </div>

        <div className="bg-green-700 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Experience the Best Tree Service in Oregon?
          </h3>
          <p className="text-green-100 mb-6">
            Join thousands of satisfied customers across Portland and Salem who trust us with their trees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:503-449-4066"
              className="inline-flex items-center justify-center bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              📞 Call (503) 449-4066
            </a>
            <Link
              href="/quote"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-colors"
            >
              Get Started Online
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
