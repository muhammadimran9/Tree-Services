import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Yelp - Tree Services Portland & Salem',
  description: 'Read reviews and leave feedback for Tree Services Portland & Salem on Yelp. See what our customers say about our tree removal, trimming, and care services.',
  openGraph: {
    title: 'Yelp - Tree Services Portland & Salem',
    description: 'Read our customer reviews on Yelp',
    url: '/yelp',
  },
};

export default function YelpPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Us on Yelp</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Read authentic customer reviews and share your experience with Tree Services Portland & Salem.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Yelp Reviews Matter</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Authentic Reviews</h3>
                  <p className="text-gray-600">Real experiences from verified customers</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Verified Service</h3>
                  <p className="text-gray-600">Yelp verified tree service provider</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Customer Feedback</h3>
                  <p className="text-gray-600">Direct communication with our team</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Quick Responses</h3>
                  <p className="text-gray-600">Fast replies to questions and reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Customers Say</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-red-600 pl-4">
              <div className="flex items-center mb-2">
                <div className="flex text-red-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-600 font-medium">Sarah M.</span>
              </div>
              <p className="text-gray-700">"Excellent tree removal service! They were professional, safe, and cleaned up everything. Highly recommend!"</p>
            </div>
            
            <div className="border-l-4 border-red-600 pl-4">
              <div className="flex items-center mb-2">
                <div className="flex text-red-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-600 font-medium">Mike R.</span>
              </div>
              <p className="text-gray-700">"Great team! They handled a difficult tree removal with expertise. Fair pricing and amazing customer service."</p>
            </div>

            <div className="border-l-4 border-red-600 pl-4">
              <div className="flex items-center mb-2">
                <div className="flex text-red-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-600 font-medium">Jennifer L.</span>
              </div>
              <p className="text-gray-700">"Professional arborists who really know their stuff. My trees have never looked better after their trimming service."</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Leave a Review</h2>
          <p className="text-gray-600 mb-4">
            Your feedback helps us improve and assists other homeowners in making informed decisions about their tree care needs.
          </p>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center">
              <svg className="w-5 h-5 text-red-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Share your experience with our services
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-red-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Help others choose the right tree service
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-red-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Support local businesses
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-red-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Provide valuable feedback to our team
            </li>
          </ul>
        </div>

        <div className="text-center">
          <a 
            href="https://yelp.com/biz/treeservicesportland" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.152 6.896c-.948 0-1.716-.769-1.716-1.716s.768-1.716 1.716-1.716 1.716.769 1.716 1.716-.768 1.716-1.716 1.716zm1.716 6.208c0 .948-.769 1.716-1.716 1.716s-1.716-.769-1.716-1.716.768-1.716 1.716-1.716 1.716.769 1.716 1.716zm-1.716 7.916c-.948 0-1.716-.769-1.716-1.716s.768-1.716 1.716-1.716 1.716.769 1.716 1.716-.768 1.716-1.716 1.716zm-6.208-6.208c0 .948-.769 1.716-1.716 1.716s-1.716-.769-1.716-1.716.768-1.716 1.716-1.716 1.716.769 1.716 1.716zm12.416 0c0 .948-.769 1.716-1.716 1.716s-1.716-.769-1.716-1.716.768-1.716 1.716-1.716 1.716.769 1.716 1.716z"/>
            </svg>
            Read Reviews on Yelp
          </a>
        </div>
      </div>
    </div>
  );
}
