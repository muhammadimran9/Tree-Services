import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Urban Timber Tree Service Inc. - Professional Tree Care Portland OR",
    template: "%s | Urban Timber Tree Service"
  },
  description: "Professional tree services in Portland, Oregon. CCB Licensed #212995, ISA Certified Arborists. Tree removal, pruning, stump grinding, and 24/7 emergency services.",
  keywords: "tree service Portland, tree removal Portland, tree pruning, stump grinding, emergency tree service, CCB 212995, ISA certified arborist, Urban Timber Tree Service",
  openGraph: {
    title: "Urban Timber Tree Service Inc. - Professional Tree Care Portland OR",
    description: "Professional tree services in Portland, Oregon. CCB Licensed #212995, ISA Certified Arborists. Tree removal, pruning, stump grinding, and 24/7 emergency services.",
    type: "website",
    locale: "en_US",
    url: "https://urbantimber.com",
    siteName: "Urban Timber Tree Service",
    images: [
      {
        url: "https://urbantimber.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Urban Timber Tree Service - Professional Tree Care Portland"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Urban Timber Tree Service Inc. - Professional Tree Care Portland OR",
    description: "Professional tree services in Portland, Oregon. CCB Licensed #212995, ISA Certified Arborists.",
    images: ["https://urbantimber.com/images/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://urbantimber.com"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Urban Timber Tree Service Inc.",
    "description": "Professional tree services in Portland, Oregon. CCB Licensed #212995, ISA Certified Arborists.",
    "url": "https://urbantimber.com",
    "telephone": "503-449-4066",
    "email": "office@urbantimbertree.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "10808 SE Harold St",
      "addressLocality": "Portland",
      "addressRegion": "OR",
      "postalCode": "97266",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 45.5152,
      "longitude": -122.6784
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "areaServed": [
      "Portland", "Beaverton", "Lake Oswego", "Gresham", 
      "Tigard", "Hillsboro", "Milwaukie", "West Linn", 
      "Oregon City", "Happy Valley", "SE Portland", "NE Portland"
    ],
    "logo": "https://urbantimber.com/logo.png",
    "image": "https://urbantimber.com/images/og-image.jpg",
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Contractor License",
        "name": "CCB License #212995"
      },
      {
        "@type": "EducationalOccupationalCredential", 
        "credentialCategory": "Professional Certification",
        "name": "ISA Certified Arborists"
      }
    ],
    "serviceType": [
      "Tree Removal", "Tree Pruning", "Stump Grinding", 
      "Tree Cabling & Bracing", "Emergency Tree Service", 
      "Tree Assessment", "Commercial Tree Care"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "120",
      "bestRating": "5",
      "worstRating": "1"
    },
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Check"]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
