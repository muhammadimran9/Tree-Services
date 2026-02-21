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
import FAQSection from '@/components/FAQSection';
import { EmergencyCTA, FreeEstimateCTA, SameDayCTA, TrustBuilderCTA } from '@/components/CTASections';

export const metadata: Metadata = {
  title: 'Tree Service Portland & Salem Oregon | #1 Rated Tree Removal | Free Quotes',
  description:
    'Top-rated tree service in Portland & Salem, Oregon. Licensed & insured arborists with 20+ years experience. Tree removal, pruning, stump grinding & 24/7 emergency services. Call (503) 449-4066 for FREE estimate today!',
  keywords: [
    'tree service Portland Oregon',
    'tree service Salem Oregon',
    'Portland tree removal',
    'Salem tree removal',
    'tree trimming Portland OR',
    'tree trimming Salem OR',
    'emergency tree removal Portland',
    'emergency tree removal Salem',
    'stump grinding Portland',
    'stump grinding Salem',
    'certified arborist Portland',
    'certified arborist Salem',
    'affordable tree removal Portland',
    'affordable tree removal Salem',
    'tree removal near me Portland',
    'tree removal near me Salem',
    'best tree service Portland',
    'best tree service Salem',
    'tree service multnomah county',
    'tree service marion county',
  ],
  openGraph: {
    title: 'Tree Service Portland & Salem Oregon | #1 Rated Tree Removal & Care',
    description:
      'Top-rated tree service in Portland & Salem, Oregon. Licensed & insured. Free estimates! Call (503) 449-4066',
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
        <EmergencyCTA />
        <AuthoritySection />
        <ServicesQuickLinks />
        <AboutTeaser />
        <ReviewsSection />
        <DetailedServicesGrid />
        <WhyChooseSection />
        <FreeEstimateCTA />
        <FAQSection />
        <SameDayCTA />
        <TrustBuilderCTA />
      </main>
      <Footer />
    </div>
  );
}
