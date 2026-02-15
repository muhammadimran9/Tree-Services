import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-green-700 to-green-900 text-white">
      <div className="absolute inset-0">
        <Image
          src="/hero-tree.svg"
          alt="Tree Service Portland Oregon - Urban Timber Tree Service"
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Tree Service Portland, Oregon
          </h1>
          <div className="text-xl md:text-2xl mb-8 text-green-100 font-semibold">
            Award Winning | 30 YEARS ISA CERTIFIED | 5-STAR RATING | VOTED #1 TREE SERVICE IN PORTLAND
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link 
              href="/tree-service-and-trimming-quote" 
              className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors text-center"
            >
              GET A QUOTE
            </Link>
            <Link 
              href="/emergency-services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-700 transition-colors text-center"
            >
              EMERGENCY SERVICE
            </Link>
          </div>
          
          {/* As Seen In */}
          <div className="mt-8">
            <p className="text-sm text-green-200 mb-4">AS SEEN IN:</p>
            <div className="flex flex-wrap gap-6 items-center">
              <div className="bg-white/10 px-4 py-2 rounded text-sm font-medium">Yahoo</div>
              <div className="bg-white/10 px-4 py-2 rounded text-sm font-medium">EIN Presswire</div>
              <div className="bg-white/10 px-4 py-2 rounded text-sm font-medium">Economic News Observer</div>
              <div className="bg-white/10 px-4 py-2 rounded text-sm font-medium">Global Tech Times</div>
              <div className="bg-white/10 px-4 py-2 rounded text-sm font-medium">Associated Press</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
