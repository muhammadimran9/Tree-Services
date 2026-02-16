export default function ReviewsSection() {
  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Outstanding service! The team was professional, efficient, and left our yard cleaner than when they arrived. Highly recommend!",
      location: "Portland, OR"
    },
    {
      name: "Michael Chen", 
      rating: 5,
      text: "The crew removed a dangerous tree from our property with incredible skill. They handled all the permits and made the process seamless.",
      location: "Beaverton, OR"
    },
    {
      name: "Emily Rodriguez",
      rating: 5, 
      text: "Fair pricing, excellent communication, and quality work. Our trees have never looked better after their pruning service.",
      location: "Lake Oswego, OR"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Customer Reviews
          </h2>
          <p className="text-xl text-gray-600">
            We&apos;re committed to exceptional service
          </p>
        </div>

        {/* Review Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center bg-white p-6 rounded-lg shadow-sm">
            <div className="text-4xl font-bold text-green-700 mb-2">120+</div>
            <div className="text-gray-600">5-Star Reviews</div>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-sm">
            <div className="text-4xl font-bold text-green-700 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-sm">
            <div className="text-4xl font-bold text-green-700 mb-2">2024</div>
            <div className="text-gray-600">Best of Portland Award</div>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "{review.text}"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-600 rounded-full mr-3"></div>
                <div>
                  <div className="font-semibold text-gray-900">{review.name}</div>
                  <div className="text-sm text-gray-600">{review.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Widget Placeholder */}
        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
          <div className="mb-4">
            <div className="text-2xl font-bold text-green-700 mb-2">See All Our Reviews</div>
            <p className="text-gray-600">Read what our customers are saying on Google, Yelp, and other platforms</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://google.com/search?q=tree+services+portland+oregon+reviews" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Google Reviews
            </a>
            <a 
              href="https://www.yelp.com/search?find_desc=tree+services&find_loc=Portland%2C+OR" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Yelp Reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
