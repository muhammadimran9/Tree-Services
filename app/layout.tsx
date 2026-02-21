import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#166534',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://hhhhhhj.netlify.app'),
  title: {
    default: "Tree Services Portland & Salem OR | Expert Tree Removal & Care | Free Quotes",
    template: "%s | Tree Services Portland & Salem",
  },
  description:
    "#1 Tree Service in Portland & Salem, Oregon. Licensed & insured arborists providing tree removal, trimming, stump grinding & emergency services. 24/7 availability. Call (503) 449-4066 for FREE estimate!",
  keywords: [
    "tree service Portland",
    "tree service Salem",
    "tree removal Portland OR",
    "tree removal Salem OR",
    "tree trimming Portland",
    "tree trimming Salem",
    "stump grinding Portland",
    "stump grinding Salem",
    "emergency tree service Portland",
    "emergency tree service Salem",
    "certified arborist Portland",
    "certified arborist Salem",
    "tree care Portland Oregon",
    "tree care Salem Oregon",
    "affordable tree service",
    "professional tree removal",
    "tree pruning Portland",
    "tree pruning Salem",
    "tree cutting service",
    "Portland tree company",
    "Salem tree company",
    "tree services near me",
    "local tree service Portland",
    "local tree service Salem",
    "residential tree service",
    "commercial tree service",
    "tree service multnomah county",
    "tree service marion county",
  ],
  authors: [{ name: 'Tree Services Portland' }],
  creator: 'Tree Services Portland',
  publisher: 'Tree Services Portland',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: "Tree Services Portland & Salem OR | Expert Tree Removal & Care",
    description:
      "#1 Rated Tree Service in Portland & Salem. Licensed & insured team with 20+ years experience. Tree removal, trimming, stump grinding. Free estimates!",
    type: "website",
    locale: "en_US",
    url: "https://hhhhhhj.netlify.app",
    siteName: "Tree Services Portland & Salem",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Professional tree services in Portland, Oregon - Tree removal, trimming, and care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tree Services Portland & Salem OR | Expert Tree Removal & Care",
    description:
      "#1 Rated Tree Service in Portland & Salem. Licensed & insured. Free estimates! Call (503) 449-4066",
    images: ["/images/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://hhhhhhj.netlify.app",
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'Tree Services',
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
    "url": "https://hhhhhhj.netlify.app",
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
      "Salem",
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
      "NE Portland",
      "Keizer",
      "Multnomah County",
      "Marion County"
    ],
    "logo": "https://hhhhhhj.netlify.app/logo.png",
    "image": "https://hhhhhhj.netlify.app/images/og-default.jpg",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <meta name="google-adsense-account" content="ca-pub-XXXXXXXXXXXXXXXX" />
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
