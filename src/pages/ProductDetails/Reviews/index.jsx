import React from "react";

const ReviewSection = () => {
  return (
    <section className="container mx-auto my-8 px-4 sm:px-6 lg:px-8">
      <h3 className="text-lg font-semibold mb-4">
        Customer questions & answers
      </h3>

      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8">
        {/* Customer Reviews Section */}
        <div className="space-y-6 flex-1">
          {/* Review 1 */}
          <div className="flex items-start space-x-4">
            <img
              src="https://via.placeholder.com/50"
              alt="Reviewer 1"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-green-600">Sienna</span>
                <div className="flex items-center">
                  <span className="text-sm text-gray-500">
                    December 4, 2022 at 3:12 pm
                  </span>
                  <div className="ml-2 flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus, suscipit exercitationem accusantium...
              </p>
            </div>
          </div>

          {/* Review 2 */}
          <div className="flex items-start space-x-4">
            <img
              src="https://via.placeholder.com/50"
              alt="Reviewer 2"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-green-600">Brenna</span>
                <div className="flex items-center">
                  <span className="text-sm text-gray-500">
                    December 4, 2022 at 3:12 pm
                  </span>
                  <div className="ml-2 flex">
                    {[...Array(4)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                    <span className="text-gray-300">★</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus, suscipit exercitationem accusantium...
              </p>
            </div>
          </div>
        </div>

        {/* Ratings Summary Section */}
        <div className="flex-1 border-t border-gray-300 pt-6 lg:border-t-0 lg:pt-0 lg:pl-8">
          <h4 className="text-lg font-semibold mb-2">Customer reviews</h4>
          <p className="text-gray-700 mb-4">4.8 out of 5</p>
          <ul className="space-y-1 text-gray-700">
            {[
              { stars: 5, percentage: 50 },
              { stars: 4, percentage: 25 },
              { stars: 3, percentage: 15 },
              { stars: 2, percentage: 5 },
              { stars: 1, percentage: 5 },
            ].map((rating, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="w-12 text-sm font-medium">
                  {rating.stars} star
                </span>
                <div className="flex-1 h-2 bg-gray-200 rounded">
                  <div
                    className="h-full bg-green-500 rounded"
                    style={{ width: `${rating.percentage}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600">
                  {rating.percentage}%
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Add Review Section */}
      <div className="mt-8">
        <h4 className="text-lg font-semibold mb-4">Add a review</h4>
        <textarea
          placeholder="Write Comment"
          className="w-full p-3 border rounded mb-4 resize-none"
        ></textarea>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            placeholder="Name"
            className="p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Website"
            className="p-2 border rounded"
          />
        </div>
        <button className="w-full sm:w-auto px-6 py-2 bg-teal-500 text-white rounded">
          Submit Review
        </button>
      </div>
    </section>
  );
};

export default ReviewSection;
