'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

// Blog posts data - in production this would come from a CMS or database
const blogPosts = {
  'seasonal-tree-care-portland': {
    title: 'Essential Seasonal Tree Care Tips for Portland Homeowners',
    content: `
      <h2>Spring Tree Care (March - May)</h2>
      <p>Spring is the perfect time to assess winter damage and prepare your trees for the growing season. Our ISA-certified arborists recommend:</p>
      <ul>
        <li>Inspect for winter storm damage</li>
        <li>Prune dead or damaged branches</li>
        <li>Apply slow-release fertilizer</li>
        <li>Mulch around base to retain moisture</li>
        <li>Monitor for pest activity</li>
      </ul>

      <h2>Summer Tree Care (June - August)</h2>
      <p>Portland's dry summers require special attention to tree health and water management:</p>
      <ul>
        <li>Deep watering during drought periods</li>
        <li>Avoid heavy pruning during heat stress</li>
        <li>Monitor for signs of disease</li>
        <li>Provide shade for young trees</li>
        <li>Watch for pest infestations</li>
      </ul>

      <h2>Fall Tree Care (September - November)</h2>
      <p>Fall preparation helps trees survive Portland's wet winters:</p>
      <ul>
        <li>Reduce watering frequency</li>
        <li>Apply winter fertilizer</li>
        <li>Wrap young trees for protection</li>
        <li>Clean up fallen leaves</li>
        <li>Final pruning before dormancy</li>
      </ul>

      <h2>Winter Tree Care (December - February)</h2>
      <p>Winter dormancy requires minimal intervention but important monitoring:</p>
      <ul>
        <li>Protect from frost damage</li>
        <li>Remove snow accumulation</li>
        <li>Inspect for structural weaknesses</li>
        <li>Plan spring pruning</li>
        <li>Avoid major pruning during freezing</li>
      </ul>
    `,
    date: '2024-02-15',
    readTime: '5 min read',
    category: 'Tree Care Tips',
    image: '/blog/seasonal-tree-care.jpg'
  },
  'portland-tree-removal-permits': {
    title: 'Understanding Portland Tree Removal Permits: A Complete Guide',
    content: `
      <h2>When Do You Need a Tree Removal Permit in Portland?</h2>
      <p>Portland's Urban Forestry requires permits for removing trees that meet certain criteria:</p>
      <ul>
        <li>Trees 12 inches or more in diameter</li>
        <li>Trees in protected zones or heritage areas</li>
        <li>Trees on commercial properties</li>
        <li>Trees affecting public right-of-way</li>
      </ul>

      <h2>Permit Application Process</h2>
      <p>The permit process typically takes 2-4 weeks and includes:</p>
      <ul>
        <li>Tree assessment and documentation</li>
        <li>Site plan review</li>
        <li>Public notice posting (if required)</li>
        <li>Inspection and approval</li>
      </ul>

      <h2>Exemptions and Special Cases</h2>
      <p>Certain situations may not require permits:</p>
      <ul>
        <li>Hazardous trees (immediate danger)</li>
        <li>Trees under 12 inches diameter</li>
        <li>Fruit trees on residential property</li>
        <li>Trees removed for construction permits</li>
      </ul>

      <h2>How Urban Timber Tree Service Helps</h2>
      <p>We handle the entire permit process for you:</p>
      <ul>
        <li>Free permit assessment</li>
        <li>Complete application preparation</li>
        <li>Coordination with city officials</li>
        <li>Compliance with all regulations</li>
      </ul>
    `,
    date: '2024-02-10',
    readTime: '8 min read',
    category: 'Regulations',
    image: '/blog/tree-permits.jpg'
  }
};

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: BlogPostProps) {
  const [showToc, setShowToc] = useState(false);
  
  const post = blogPosts[params.slug as keyof typeof blogPosts];
  
  if (!post) {
    notFound();
  }

  // Extract H2 headings for TOC
  const headings = post.content.match(/<h2[^>]*>([^<]+)<\/h2>/g) || [];
  const cleanHeadings = headings.map(heading => 
    heading.replace(/<[^>]*>/g, '').replace(/<\/h2>/, '')
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-700 to-green-900 text-white">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl">
            <div className="flex items-center text-sm text-green-100 mb-4">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </time>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
              <span className="mx-2">•</span>
              <span className="bg-green-600 px-2 py-1 rounded text-xs">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      {cleanHeadings.length > 0 && (
        <section className="py-8 bg-gray-50 border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => setShowToc(!showToc)}
              className="flex items-center text-green-700 font-semibold hover:text-green-800 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {showToc ? 'Hide' : 'Show'} Table of Contents
            </button>
            
            {showToc && (
              <div className="mt-4 bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3">Quick Navigation</h3>
                <ul className="space-y-2">
                  {cleanHeadings.map((heading, index) => (
                    <li key={index}>
                      <a 
                        href={`#heading-${index}`}
                        className="text-green-700 hover:text-green-800 transition-colors"
                      >
                        {heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Article Content */}
      <article className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{
              __html: post.content.replace(
                /<h2([^>]*)>([^<]+)<\/h2>/g, 
                (match, p1, content) => {
                  const cleanContent = content.replace(/<[^>]*>/g, '');
                  const headingId = cleanContent.toLowerCase().replace(/[^a-z0-9]/g, '-');
                  return `<h2 id="heading-${cleanContent}"${p1}>${cleanContent}</h2>`;
                }
              )
            }}
          />
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-green-700 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">
              Need Professional Tree Service?
            </h2>
            <p className="mb-6 text-green-100">
              Get expert tree care from Portland's trusted arborists. 
              Contact us for professional tree services.
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
              <Link 
                href="/tree-service-and-trimming-quote" 
                className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
