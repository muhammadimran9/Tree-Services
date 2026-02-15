'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

// City data - in production this would come from a CMS or database
const cities = {
  'se-portland': {
    name: 'SE Portland',
    description: 'Southeast Portland tree service experts serving neighborhoods like Hawthorne, Division, Sellwood, and Eastmoreland. Our local arborists understand the unique urban forest challenges of SE Portland.',
    services: [
      'Tree removal for residential properties',
      'Emergency storm damage cleanup',
      'Tree pruning for power line clearance',
      'Stump grinding in tight spaces',
      'Commercial tree maintenance'
    ],
    coordinates: { lat: 45.5152, lng: -122.6784 },
    address: 'Serving SE Portland, OR 97266'
  },
  'ne-portland': {
    name: 'NE Portland',
    description: 'Northeast Portland tree care specialists serving Alberta, Irvington, Laurelhurst, and Hollywood areas. We provide comprehensive tree services for NE Portland\'s diverse urban canopy.',
    services: [
      'Heritage tree preservation',
      'Residential tree removal',
      'Tree health assessments',
      'Storm damage response',
      'Commercial tree management'
    ],
    coordinates: { lat: 45.5515, lng: -122.6510 },
    address: 'Serving NE Portland, OR 97211'
  },
  'downtown-portland': {
    name: 'Downtown Portland',
    description: 'Downtown Portland tree service experts handling urban tree challenges in the heart of the city. We specialize in commercial properties, parks, and municipal tree care with minimal disruption.',
    services: [
      'Commercial tree maintenance',
      'Municipal tree care',
      'Urban tree planting',
      'Tree removal in confined spaces',
      'Emergency storm response'
    ],
    coordinates: { lat: 45.5152, lng: -122.6784 },
    address: 'Serving Downtown Portland, OR 97204'
  },
  'beaverton': {
    name: 'Beaverton',
    description: 'Beaverton tree service professionals serving both residential and commercial clients. Our team understands Beaverton\'s tree ordinances and provides expert care for suburban properties.',
    services: [
      'Residential tree removal',
      'Commercial tree maintenance',
      'Tree pruning and shaping',
      'Stump grinding services',
      'Emergency tree removal'
    ],
    coordinates: { lat: 45.4870, lng: -122.8037 },
    address: 'Serving Beaverton, OR 97005'
  },
  'lake-oswego': {
    name: 'Lake Oswego',
    description: 'Lake Oswego tree care specialists serving this beautiful lakeside community. We provide premium tree services that enhance property values while preserving the natural beauty of Lake Oswego.',
    services: [
      'Premium tree pruning',
      'Lakeside tree care',
      'Property value enhancement',
      'Tree health assessments',
      'Emergency storm cleanup'
    ],
    coordinates: { lat: 45.4207, lng: -122.7067 },
    address: 'Serving Lake Oswego, OR 97034'
  },
  'gresham': {
    name: 'Gresham',
    description: 'Gresham tree service experts serving this growing east Portland community. We provide comprehensive tree care for both residential properties and commercial developments.',
    services: [
      'Residential tree removal',
      'Commercial tree services',
      'Tree pruning for safety',
      'Storm damage cleanup',
      'Urban forest management'
    ],
    coordinates: { lat: 45.5001, lng: -122.2229 },
    address: 'Serving Gresham, OR 97030'
  },
  'tigard': {
    name: 'Tigard',
    description: 'Tigard tree care professionals serving this vibrant Washington County community. Our arborists provide expert tree services with attention to local regulations and property needs.',
    services: [
      'Residential tree services',
      'Commercial tree maintenance',
      'Tree removal and pruning',
      'Stump grinding',
      'Emergency tree care'
    ],
    coordinates: { lat: 45.4311, lng: -122.7715 },
    address: 'Serving Tigard, OR 97223'
  },
  'hillsboro': {
    name: 'Hillsboro',
    description: 'Hillsboro tree service experts serving this growing Washington County city. We provide professional tree care for both residential properties and commercial developments.',
    services: [
      'Residential tree removal',
      'Commercial tree services',
      'Tree pruning and maintenance',
      'Storm damage response',
      'Urban tree planting'
    ],
    coordinates: { lat: 45.5228, lng: -122.9900 },
    address: 'Serving Hillsboro, OR 97024'
  },
  'milwaukie': {
    name: 'Milwaukie',
    description: 'Milwaukie tree care specialists serving this riverside community. Our team provides expert tree services with understanding of local conditions and regulations.',
    services: [
      'Riverside tree care',
      'Residential tree services',
      'Commercial tree maintenance',
      'Storm damage cleanup',
      'Tree health assessments'
    ],
    coordinates: { lat: 45.4465, lng: -122.6390 },
    address: 'Serving Milwaukie, OR 97222'
  },
  'west-linn': {
    name: 'West Linn',
    description: 'West Linn tree service professionals serving this beautiful Oregon community. Our arborists provide comprehensive tree care for rural and residential properties.',
    services: [
      'Rural tree removal',
      'Residential tree care',
      'Forest management',
      'Storm damage cleanup',
      'Tree planting services'
    ],
    coordinates: { lat: 45.5152, lng: -122.6784 },
    address: 'Serving West Linn, OR 97070'
  },
  'oregon-city': {
    name: 'Oregon City',
    description: 'Oregon City tree service experts serving this historic Clackamas County community. Our arborists provide professional tree care with respect for local heritage and regulations.',
    services: [
      'Historic tree preservation',
      'Residential tree services',
      'Commercial tree maintenance',
      'Storm damage response',
      'Urban forest management'
    ],
    coordinates: { lat: 45.3573, lng: -122.6060 },
    address: 'Serving Oregon City, OR 97045'
  },
  'happy-valley': {
    name: 'Happy Valley',
    description: 'Happy Valley tree care specialists serving this growing Clackamas County community. Our team provides expert tree services for new developments and established properties.',
    services: [
      'New development tree care',
      'Residential tree services',
      'Commercial tree maintenance',
      'Tree planting and establishment',
      'Storm damage response'
    ],
    coordinates: { lat: 45.4455, lng: -122.5805 },
    address: 'Serving Happy Valley, OR 97086'
  }
};

interface CityPageProps {
  params: {
    city: string;
  };
}

export default function CityPage({ params }: CityPageProps) {
  const city = cities[params.city as keyof typeof cities];
  
  if (!city) {
    notFound();
  }

  const allCities = Object.keys(cities);
  const currentIndex = allCities.indexOf(params.city);
  const prevCity = currentIndex > 0 ? allCities[currentIndex - 1] : null;
  const nextCity = currentIndex < allCities.length - 1 ? allCities[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-700 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Tree Service {city.name}, Portland Metro
          </h1>
          <p className="text-xl max-w-3xl">
            {city.description}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Services in {city.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {city.services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service}
                </h3>
                <p className="text-gray-600 text-sm">
                  Expert {service.toLowerCase()} provided by our ISA-certified arborists.
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-green-700 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">
                Get Expert Tree Service in {city.name}
              </h3>
              <p className="mb-6 text-green-100">
                Contact Urban Timber Tree Service for professional tree care in {city.name}. 
                ISA-certified arborists ready to help with all your tree service needs.
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
                <a 
                  href="/tree-service-and-trimming-quote" 
                  className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                  Get Free Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map and NAP Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Google Map */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Service Area - {city.name}
              </h3>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ height: '400px' }}>
                <iframe
                  src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(city.name + ', Oregon')}&center=${city.coordinates.lat},${city.coordinates.lng}&zoom=12&maptype=roadmap`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* NAP Details */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Urban Timber Tree Service
              </h3>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Service Address</h4>
                    <p className="text-gray-700">10808 SE Harold St, Portland, OR 97266</p>
                    <p className="text-gray-700">PO Box 86365</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                    <a 
                      href="tel:503-449-4066" 
                      className="text-green-700 font-semibold hover:text-green-800"
                    >
                      (503) 449-4066
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Service Area</h4>
                    <p className="text-gray-700">{city.address}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">License</h4>
                    <p className="text-gray-700">CCB License #212995</p>
                    <p className="text-gray-700">ISA Certified Arborists</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* City Interlinks */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Service Areas - Portland Metro
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allCities.map((citySlug) => {
              const cityData = cities[citySlug as keyof typeof cities];
              const isActive = citySlug === params.city;
              
              return (
                <Link
                  key={citySlug}
                  href={`/areas-served/${citySlug}`}
                  className={`p-4 rounded-lg text-center transition-colors ${
                    isActive 
                      ? 'bg-green-700 text-white' 
                      : 'bg-gray-50 text-gray-700 hover:bg-green-50 hover:text-green-600'
                  }`}
                >
                  <div className="font-semibold">
                    {cityData.name}
                  </div>
                  <div className="text-sm opacity-75">
                    Tree Service
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
