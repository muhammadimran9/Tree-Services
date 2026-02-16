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
  title: 'Tree Service Portland Oregon | Tree Services - Free Quotes',
  description:
    'Professional tree service in Portland, Oregon. Licensed and insured team with decades of experience providing tree removal, pruning, stump grinding, and emergency services. Call (503) 449-4066 for a free estimate.',
  openGraph: {
    title: 'Tree Service Portland Oregon | Tree Services',
    description:
      'Professional tree service in Portland, Oregon from a licensed and insured tree care team.',
    url: 'https://yourtreeservicewebsite.com',
    images: [
      {
        url: 'https://yourtreeservicewebsite.com/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Tree Service Portland Oregon - Tree Services',
      },
    ],
  },
  alternates: {
    canonical: 'https://yourtreeservicewebsite.com',
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
