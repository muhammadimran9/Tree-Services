'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Tree Services - Home">
            <div className="w-8 h-8 bg-green-700 rounded-full mr-3" aria-hidden="true"></div>
            <span className="text-xl font-bold text-green-700">Tree Services</span>
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button 
                className="text-gray-700 hover:text-green-600 transition-colors flex items-center"
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
                aria-expanded={servicesDropdown}
                aria-haspopup="true"
                aria-label="Services menu"
              >
                Services
                <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesDropdown && (
                <div 
                  className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg py-2 mt-1"
                  onMouseEnter={() => setServicesDropdown(true)}
                  onMouseLeave={() => setServicesDropdown(false)}
                  role="menu"
                >
                  <Link href="/services/tree-removal" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600" role="menuitem">
                    Tree Removal
                  </Link>
                  <Link href="/services/tree-trimming" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600" role="menuitem">
                    Tree Trimming
                  </Link>
                  <Link href="/services/stump-grinding" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600" role="menuitem">
                    Stump Grinding
                  </Link>
                  <Link href="/services/emergency-tree-service" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600" role="menuitem">
                    Emergency Tree Service
                  </Link>
                  <Link href="/services/arborist-services" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600" role="menuitem">
                    Arborist Services
                  </Link>
                </div>
              )}
            </div>
            <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-600 transition-colors">
              Contact
            </Link>
            <Link href="/locations" className="text-gray-700 hover:text-green-600 transition-colors">
              Locations
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-green-600 transition-colors">
              Blog
            </Link>
          </div>

          {/* Phone CTA - Right */}
          <div className="hidden lg:flex items-center space-x-3">
            <a 
              href="mailto:info@yourtreeservicewebsite.com" 
              className="flex items-center text-gray-700 hover:text-green-600 transition-colors"
              title="Email Tree Services"
              aria-label="Email Tree Services"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="sr-only">Email</span>
            </a>
            <a 
              href="tel:503-449-4066" 
              className="flex items-center bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition-colors"
              aria-label="Call Tree Services at 503-449-4066"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (503) 449-4066
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 p-2 rounded"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200" role="menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Services with dropdown */}
              <div>
                <button
                  onClick={() => setServicesDropdown(!servicesDropdown)}
                  className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md"
                >
                  Services
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {servicesDropdown && (
                  <div className="pl-6 space-y-1">
                    <Link href="/services/tree-removal" className="block px-3 py-2 text-gray-600 hover:text-green-600 hover:bg-gray-50 rounded-md" role="menuitem">
                      Tree Removal
                    </Link>
                    <Link href="/services/tree-trimming" className="block px-3 py-2 text-gray-600 hover:text-green-600 hover:bg-gray-50 rounded-md" role="menuitem">
                      Tree Trimming
                    </Link>
                    <Link href="/services/stump-grinding" className="block px-3 py-2 text-gray-600 hover:text-green-600 hover:bg-gray-50 rounded-md" role="menuitem">
                      Stump Grinding
                    </Link>
                    <Link href="/services/emergency-tree-service" className="block px-3 py-2 text-gray-600 hover:text-green-600 hover:bg-gray-50 rounded-md" role="menuitem">
                      Emergency Tree Service
                    </Link>
                    <Link href="/services/arborist-services" className="block px-3 py-2 text-gray-600 hover:text-green-600 hover:bg-gray-50 rounded-md" role="menuitem">
                      Arborist Services
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md" role="menuitem">
                About
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md" role="menuitem">
                Contact
              </Link>
              <Link href="/locations" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md" role="menuitem">
                Locations
              </Link>
              <Link href="/blog" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md" role="menuitem">
                Blog
              </Link>
              
              {/* Mobile Phone CTA */}
              <div className="pt-4 border-t border-gray-200">
                <a 
                  href="tel:503-449-4066" 
                  className="flex items-center justify-center bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (503) 449-4066
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
