import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-9xl font-bold text-green-700 mb-4">404</h1>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. The page may have been moved, 
            deleted, or the URL may be incorrect.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 transition-colors"
            >
              Go to Homepage
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-green-700 text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Popular Services</h3>
              <ul className="space-y-1 text-gray-600">
                <li><Link href="/services/tree-removal" className="hover:text-green-700">Tree Removal</Link></li>
                <li><Link href="/services/tree-trimming" className="hover:text-green-700">Tree Trimming</Link></li>
                <li><Link href="/services/stump-grinding" className="hover:text-green-700">Stump Grinding</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Quick Links</h3>
              <ul className="space-y-1 text-gray-600">
                <li><Link href="/about" className="hover:text-green-700">About Us</Link></li>
                <li><Link href="/blog" className="hover:text-green-700">Blog</Link></li>
                <li><Link href="/sitemap" className="hover:text-green-700">Sitemap</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
              <ul className="space-y-1 text-gray-600">
                <li><a href="tel:503-449-4066" className="hover:text-green-700">(503) 449-4066</a></li>
                <li><a href="mailto:info@yourtreeservicewebsite.com" className="hover:text-green-700">Email Us</a></li>
                <li><Link href="/contact" className="hover:text-green-700">Contact Form</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
