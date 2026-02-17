'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPostClientProps {
  post: any;
  slug: string;
}

export default function BlogPostClient({ post, slug }: BlogPostClientProps) {
  const [showToc, setShowToc] = useState(false);

  // Extract H2 headings for TOC
  const content = post.content || '';
  const headings: string[] = content.match(/<h2[^>]*>([^<]+)<\/h2>/g) || [];
  const cleanHeadings = headings.map((heading: string) => 
    heading.replace(/<[^>]*>/g, '').replace(/<\/h2>/, '')
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-green-700 to-green-900 text-white">
        {post.image && (
          <div className="absolute inset-0">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover opacity-20"
              unoptimized={post.image.startsWith('http')}
            />
          </div>
        )}
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
              <span>{post.readTime || '5 min read'}</span>
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
              __html: (post.content || '').replace(
                /<h2([^>]*)>([^<]+)<\/h2>/g,
                (_match: string, p1: string, content: string) => {
                  const cleanContent = content.replace(/<[^>]*>/g, '');
                  return `<h2 id="heading-${cleanContent}"${p1}>${cleanContent}</h2>`;
                }
              ),
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
                href="/quote" 
                className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
