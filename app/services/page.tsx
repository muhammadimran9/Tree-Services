import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import servicesData from '@/data/services.json';

export const metadata: Metadata = {
  title: 'Our Tree Services - Professional Tree Care & Maintenance',
  description: 'Complete tree services including removal, pruning, stump grinding, and emergency services. Licensed arborists serving your area.',
  openGraph: {
    title: 'Our Tree Services - Professional Tree Care & Maintenance',
    description: 'Complete tree services including removal, pruning, stump grinding, and emergency services.',
  },
};

export default function ServicesPage() {
  const services = servicesData.services;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Professional Tree Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive tree care services performed by certified arborists. 
              Safety, quality, and customer satisfaction are our top priorities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service) => (
              <div key={service.id} className="bg-gray-50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-green-700 mb-4">{service.title}</h2>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
