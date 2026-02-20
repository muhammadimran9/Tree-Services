import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-full mr-3"></div>
              <span className="text-xl font-bold">Tree Services</span>
            </div>
            <div className="text-gray-300 mb-4 space-y-2 text-sm">
              <p>10808 SE Harold St</p>
              <p>Portland, OR 97266</p>
              <a 
                href="tel:503-449-4066" 
                className="block text-green-400 hover:text-green-300 transition-colors font-medium"
              >
                (503) 449-4066
              </a>
              <a 
                href="mailto:info@yourtreeservicewebsite.com" 
                className="block text-green-400 hover:text-green-300 transition-colors break-all"
              >
                info@yourtreeservicewebsite.com
              </a>
              <p className="font-semibold text-green-400">CCB #212995</p>
              <p className="font-semibold text-green-400">ISA Certified</p>
            </div>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </a>
              <a 
                href="https://yelp.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Yelp"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.152 6.896c-.948 0-1.716-.769-1.716-1.716s.768-1.716 1.716-1.716 1.716.769 1.716 1.716-.768 1.716-1.716 1.716zm1.716 6.208c0 .948-.769 1.716-1.716 1.716s-1.716-.769-1.716-1.716.768-1.716 1.716-1.716 1.716.769 1.716 1.716zm-1.716 7.916c-.948 0-1.716-.769-1.716-1.716s.768-1.716 1.716-1.716 1.716.769 1.716 1.716-.768 1.716-1.716 1.716zm-6.208-6.208c0 .948-.769 1.716-1.716 1.716s-1.716-.769-1.716-1.716.768-1.716 1.716-1.716 1.716.769 1.716 1.716zm12.416 0c0 .948-.769 1.716-1.716 1.716s-1.716-.769-1.716-1.716.768-1.716 1.716-1.716 1.716.769 1.716 1.716z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/tree-removal" className="text-gray-300 hover:text-white transition-colors">Tree Removal</Link></li>
              <li><Link href="/services/tree-trimming" className="text-gray-300 hover:text-white transition-colors">Tree Trimming</Link></li>
              <li><Link href="/services/stump-grinding" className="text-gray-300 hover:text-white transition-colors">Stump Grinding</Link></li>
              <li><Link href="/services/emergency-tree-service" className="text-gray-300 hover:text-white transition-colors">Emergency Service</Link></li>
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Areas</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Portland</li>
              <li>Beaverton</li>
              <li>Lake Oswego</li>
              <li>Gresham</li>
              <li>Tigard</li>
              <li>Hillsboro</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/quote" className="text-gray-300 hover:text-white transition-colors">Get Quote</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center text-gray-400 text-xs">
            <p>© {new Date().getFullYear()} Tree Services. All rights reserved.</p>
            <div className="flex flex-wrap gap-4 mt-2 sm:mt-0">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms</Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
