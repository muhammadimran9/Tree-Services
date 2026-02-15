import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function EmergencyServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Emergency Hero Section */}
      <section className="bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="mb-6">
              <svg className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              24/7 Emergency Tree Service
            </h1>
            <p className="text-xl mb-8">
              Immediate response for hazardous trees, storm damage, and dangerous situations. 
              Available 24 hours a day, 7 days a week throughout Portland metro area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:503-449-4066" 
                className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (503) 449-4066
              </a>
              <a 
                href="mailto:office@urbantimbertree.com" 
                className="bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-800 transition-colors flex items-center justify-center"
              >
                <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What Constitutes Emergency */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What Constitutes a Tree Emergency?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-red-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Trees on Power Lines
              </h3>
              <p className="text-gray-600">
                Trees touching or threatening power lines pose immediate electrical hazards and require urgent attention.
              </p>
            </div>

            <div className="bg-red-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Trees on Structures
              </h3>
              <p className="text-gray-600">
                Trees that have fallen or are leaning on homes, buildings, or other structures require immediate removal.
              </p>
            </div>

            <div className="bg-red-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Blocking Roads/Access
              </h3>
              <p className="text-gray-600">
                Fallen trees blocking roads, driveways, or emergency access routes need immediate clearing.
              </p>
            </div>

            <div className="bg-red-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Storm Damage
              </h3>
              <p className="text-gray-600">
                Trees damaged by storms, high winds, or lightning that could fall or cause further damage.
              </p>
            </div>

            <div className="bg-red-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Cracked or Splitting Trees
              </h3>
              <p className="text-gray-600">
                Trees showing signs of splitting, cracking, or structural failure that could fall at any moment.
              </p>
            </div>

            <div className="bg-red-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Uprooted Trees
              </h3>
              <p className="text-gray-600">
                Trees that have been partially or completely uprooted but are still hanging or threatening to fall.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Emergency Response */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Emergency Response Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Immediate Dispatch
              </h3>
              <p className="text-gray-600">
                24/7 dispatch team responds immediately to your emergency call.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Rapid Assessment
              </h3>
              <p className="text-gray-600">
                ISA-certified arborists assess the situation and determine immediate safety measures.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Safe Removal
              </h3>
              <p className="text-gray-600">
                Professional team safely removes hazardous trees with minimal property impact.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Complete Cleanup
              </h3>
              <p className="text-gray-600">
                Thorough cleanup and debris removal to restore your property safely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-700 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Emergency Service Area
            </h2>
            <p className="text-center mb-6 text-green-100">
              We provide 24/7 emergency tree service throughout the entire Portland metro area
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
              <div className="bg-green-600 p-3 rounded">
                <div className="font-semibold">Portland</div>
              </div>
              <div className="bg-green-600 p-3 rounded">
                <div className="font-semibold">Beaverton</div>
              </div>
              <div className="bg-green-600 p-3 rounded">
                <div className="font-semibold">Lake Oswego</div>
              </div>
              <div className="bg-green-600 p-3 rounded">
                <div className="font-semibold">Gresham</div>
              </div>
              <div className="bg-green-600 p-3 rounded">
                <div className="font-semibold">Tigard</div>
              </div>
              <div className="bg-green-600 p-3 rounded">
                <div className="font-semibold">Hillsboro</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
