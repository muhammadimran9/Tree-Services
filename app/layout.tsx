import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Tree Services | Professional Tree Care in Portland OR",
    template: "%s | Tree Services",
  },
  description:
    "Professional tree services in Portland, Oregon. Licensed and insured team providing tree removal, pruning, stump grinding, and 24/7 emergency services.",
  keywords:
    "tree service Portland, tree removal Portland, tree pruning, stump grinding, emergency tree service, certified arborist, tree services company",
  openGraph: {
    title: "Tree Services | Professional Tree Care in Portland OR",
    description:
      "Professional tree services in Portland, Oregon. Licensed and insured team providing complete tree care for your property.",
    type: "website",
    locale: "en_US",
    url: "https://yourtreeservicewebsite.com",
    siteName: "Tree Services",
    images: [
      {
        url: "https://yourtreeservicewebsite.com/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Tree services and professional tree care in Portland, Oregon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tree Services | Professional Tree Care in Portland OR",
    description:
      "Professional tree services in Portland, Oregon from a licensed and insured team.",
    images: ["https://yourtreeservicewebsite.com/images/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://yourtreeservicewebsite.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Tree Services",
    "description": "Professional tree services in Portland, Oregon including removal, pruning, stump grinding, and emergency tree care.",
    "url": "https://yourtreeservicewebsite.com",
    "telephone": "503-449-4066",
    "email": "info@yourtreeservicewebsite.com",
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
      "Portland",
      "Beaverton",
      "Lake Oswego",
      "Gresham",
      "Tigard",
      "Hillsboro",
      "Milwaukie",
      "West Linn",
      "Oregon City",
      "Happy Valley",
      "SE Portland",
      "NE Portland"
    ],
    "logo": "https://yourtreeservicewebsite.com/logo.png",
    "image": "https://yourtreeservicewebsite.com/images/og-default.jpg",
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
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
