import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

// Blog posts data - in production this would come from a CMS or database
const blogPosts = [
  {
    slug: 'seasonal-tree-care-portland',
    title: 'Essential Seasonal Tree Care Tips for Portland Homeowners',
    excerpt: 'Learn how to care for your trees throughout Portland\'s changing seasons with expert tips from ISA-certified arborists.',
    content: 'Comprehensive guide to seasonal tree maintenance in Portland\'s climate...',
    image: '/blog/seasonal-tree-care.jpg',
    date: '2024-02-15',
    readTime: '5 min read',
    category: 'Tree Care Tips'
  },
  {
    slug: 'portland-tree-removal-permits',
    title: 'Understanding Portland Tree Removal Permits: A Complete Guide',
    excerpt: 'Navigate Portland\'s tree removal permit requirements with our expert guidance on when permits are needed and how to obtain them.',
    content: 'Detailed information about Portland\'s tree removal permit process...',
    image: '/blog/tree-permits.jpg',
    date: '2024-02-10',
    readTime: '8 min read',
    category: 'Regulations'
  },
  {
    slug: 'storm-damage-tree-care',
    title: 'What to Do When Storm Damages Your Trees: Emergency Response Guide',
    excerpt: 'Immediate steps to take when storms damage your trees, plus how to prevent future damage with proper tree care.',
    content: 'Emergency tree care procedures and storm preparation tips...',
    image: '/blog/storm-damage.jpg',
    date: '2024-02-05',
    readTime: '6 min read',
    category: 'Emergency Care'
  },
  {
    slug: 'tree-disease-prevention',
    title: 'Common Tree Diseases in Portland and How to Prevent Them',
    excerpt: 'Identify and prevent common tree diseases affecting Portland\'s urban forest with expert guidance from certified arborists.',
    content: 'Comprehensive guide to Portland tree diseases and prevention...',
    image: '/blog/tree-disease.jpg',
    date: '2024-01-28',
    readTime: '7 min read',
    category: 'Tree Health'
  },
  {
    slug: 'best-trees-portland-landscaping',
    title: 'Best Trees for Portland Landscaping: Native Species Guide',
    excerpt: 'Discover the best native tree species for Portland landscaping that thrive in our climate and support local ecosystem.',
    content: 'Complete guide to selecting native trees for Portland properties...',
    image: '/blog/native-trees.jpg',
    date: '2024-01-20',
    readTime: '10 min read',
    category: 'Planting Guide'
  },
  {
    slug: 'winter-tree-protection',
    title: 'Winter Tree Protection: Keeping Your Trees Healthy Through Cold Months',
    excerpt: 'Essential winter tree care tips to protect your trees during Portland\'s cold, wet season.',
    content: 'Winter tree protection strategies and cold weather care...',
    image: '/blog/winter-care.jpg',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Seasonal Care'
  }
];

export default function BlogListingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Tree Care Tips & Insights
          </h1>
          <p className="text-xl max-w-3xl">
            Expert advice from ISA-certified arborists on tree care, maintenance, 
            and urban forest management in Portland, Oregon.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                {/* Featured Image */}
                <div className="relative h-48 bg-gray-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-700 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </time>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-green-700 transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-green-700 font-semibold hover:text-green-800 transition-colors"
                  >
                    Read More
                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-green-700 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">
              Need Professional Tree Service?
            </h2>
            <p className="mb-6 text-green-100">
              Get expert tree care from Portland's trusted arborists. 
              Read our tips or contact us for professional service.
            </p>
            <Link 
              href="/tree-service-and-trimming-quote" 
              className="inline-flex items-center bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get a Quote
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
