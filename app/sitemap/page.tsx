import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sitemap | Urban Timber Tree Service',
  description: 'Complete sitemap of Urban Timber Tree Service website. Find all pages and services.',
  alternates: {
    canonical: 'https://urbantimber.com/sitemap'
  }
};

export default function SitemapPage() {
  const pages = [
    {
      title: 'Home',
      url: '/',
      description: 'Tree Service Portland Oregon - Professional tree care services'
    },
    {
      title: 'About Us',
      url: '/about',
      description: 'Learn about Urban Timber Tree Service and our team'
    },
    {
      title: 'Contact Us',
      url: '/contact',
      description: 'Get in touch with Urban Timber Tree Service'
    },
    {
      title: 'Blog',
      url: '/blog',
      description: 'Tree care tips and insights from ISA-certified arborists'
    },
    {
      title: 'Services',
      url: '/services',
      description: 'All tree services offered by Urban Timber'
    },
    {
      title: 'Tree Service Portland Oregon',
      url: '/locations/portland-tree-service',
      description: 'Local tree service page targeting Portland, Oregon neighborhoods'
    },
    {
      title: 'Tree Removal',
      url: '/services/tree-removal',
      description: 'Professional tree removal services in Portland'
    },
    {
      title: 'Tree Trimming',
      url: '/services/tree-trimming',
      description: 'Expert tree trimming and pruning services'
    },
    {
      title: 'Stump Grinding',
      url: '/services/stump-grinding',
      description: 'Complete stump removal and grinding services'
    },
    {
      title: 'Emergency Tree Service',
      url: '/services/emergency-tree-service',
      description: '24/7 emergency tree services for storm damage'
    },
    {
      title: 'Arborist Services',
      url: '/services/arborist-services',
      description: 'Professional arborist consultations and services'
    },
    {
      title: 'Privacy Policy',
      url: '/privacy-policy',
      description: 'Privacy policy and data protection information'
    },
    {
      title: 'Terms & Conditions',
      url: '/terms-conditions',
      description: 'Terms and conditions for our services'
    },
    {
      title: 'Disclaimer',
      url: '/disclaimer',
      description: 'Website and service disclaimer'
    },
    {
      title: 'Sitemap',
      url: '/sitemap',
      description: 'Complete website sitemap'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Sitemap</h1>
          <p className="text-gray-600 mb-8">
            Find all pages and services on the Urban Timber Tree Service website.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pages.map((page, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  <Link href={page.url} className="text-green-700 hover:text-green-800 transition-colors">
                    {page.title}
                  </Link>
                </h2>
                <p className="text-gray-600 text-sm mb-3">{page.description}</p>
                <Link 
                  href={page.url}
                  className="text-green-700 hover:text-green-800 text-sm font-medium"
                >
                  Visit Page →
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Areas</h2>
            <p className="text-gray-700 mb-4">
              Urban Timber Tree Service proudly serves the following areas in the Portland, Oregon metropolitan region:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700">
              <div>• Portland</div>
              <div>• Beaverton</div>
              <div>• Lake Oswego</div>
              <div>• Gresham</div>
              <div>• Tigard</div>
              <div>• Hillsboro</div>
              <div>• Milwaukie</div>
              <div>• West Linn</div>
              <div>• Oregon City</div>
              <div>• Happy Valley</div>
              <div>• SE Portland</div>
              <div>• NE Portland</div>
            </div>
          </div>

          <div className="mt-8 bg-green-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <div className="text-gray-700 space-y-2">
              <p><strong>Urban Timber Tree Service Inc.</strong></p>
              <p>10808 SE Harold St, Portland, OR 97266</p>
              <p>Phone: <a href="tel:503-449-4066" className="text-green-700 hover:text-green-800">(503) 449-4066</a></p>
              <p>Email: <a href="mailto:office@urbantimbertree.com" className="text-green-700 hover:text-green-800">office@urbantimbertree.com</a></p>
              <p className="mt-4"><strong>CCB License #212995</strong></p>
              <p><strong>ISA Certified Arborists</strong></p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
