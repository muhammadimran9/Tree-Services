import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AuthoritySection from '@/components/AuthoritySection';
import ServicesQuickLinks from '@/components/ServicesQuickLinks';
import AboutTeaser from '@/components/AboutTeaser';
import ReviewsSection from '@/components/ReviewsSection';
import DetailedServicesGrid from '@/components/DetailedServicesGrid';
import WhyChooseSection from '@/components/WhyChooseSection';

export const metadata: Metadata = {
  title: 'Tree Service Portland Oregon | #1 Rated Tree Removal & Care | Free Quotes',
  description:
    'Top-rated tree service in Portland, Oregon. Licensed & insured arborists with 20+ years experience. Tree removal, pruning, stump grinding & emergency services. Available 24/7. Call (503) 449-4066 for FREE estimate today!',
  keywords: [
    'tree service Portland Oregon',
    'Portland tree removal',
    'tree trimming Portland OR',
    'emergency tree service Portland',
    'stump grinding Portland',
    'certified arborist Portland',
    'affordable tree service Portland',
    'tree care Portland',
    'tree removal near me',
    'Portland tree company',
  ],
  openGraph: {
    title: 'Tree Service Portland Oregon | #1 Rated Tree Removal & Care',
    description:
      'Top-rated tree service in Portland, Oregon. Licensed & insured. Free estimates! Call (503) 449-4066',
    url: 'https://hhhhhhj.netlify.app',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Tree Service Portland Oregon - Tree Removal & Care',
      },
    ],
  },
  alternates: {
    canonical: 'https://hhhhhhj.netlify.app',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <AuthoritySection />
        <ServicesQuickLinks />
        <AboutTeaser />
        <ReviewsSection />
        <DetailedServicesGrid />
        <WhyChooseSection />
      </main>
      <Footer />
    </div>
  );
}
