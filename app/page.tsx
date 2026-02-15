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
  title: "Tree Service Portland Oregon | Urban Timber Tree Service - Free Quotes",
  description: "Professional tree service in Portland, Oregon. ISA certified arborists, 30+ years experience, 5-star rating. Tree removal, pruning, emergency services. Call (503) 449-4066 for free estimate.",
  openGraph: {
    title: "Tree Service Portland Oregon | Urban Timber Tree Service",
    description: "Professional tree service in Portland, Oregon. ISA certified arborists, 30+ years experience, 5-star rating.",
    url: "https://urbantimber.com",
    images: [
      {
        url: "https://urbantimber.com/images/homepage-og.jpg",
        width: 1200,
        height: 630,
        alt: "Tree Service Portland Oregon - Urban Timber Tree Service"
      }
    ]
  },
  alternates: {
    canonical: "https://urbantimber.com"
  }
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
