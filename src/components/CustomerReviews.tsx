import React from "react";
import { FaStar, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function CustomerReviews() {
  const reviews = [
    {
      name: "Emily Johnson",
      location: "Paris, France",
      review:
        "Our trip to Paris was absolutely magical! The team handled everything perfectly, from accommodations to guided tours.",
      rating: 5,
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Michael Brown",
      location: "Kyoto, Japan",
      review:
        "Exploring Kyoto's ancient temples was a dream come true! I loved every second of this well-organized trip.",
      rating: 4.5,
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Sophia Davis",
      location: "Maldives",
      review:
        "Crystal-clear waters and seamless planning made this vacation unforgettable. Highly recommended!",
      rating: 4,
      image: "https://via.placeholder.com/150",
    },
    {
      name: "David Smith",
      location: "Rome, Italy",
      review:
        "A wonderful experience! Every detail was taken care of, leaving us free to enjoy the beauty of Rome.",
      rating: 4.8,
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Olivia Brown",
      location: "Santorini, Greece",
      review:
        "Breathtaking views and perfect organization. This was the most romantic trip we could have imagined.",
      rating: 5,
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <section
      className="bg-secondary py-16 px-6 text-white overflow-hidden"
      id="reviews"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold">
            What Our Travelers Say
          </h2>
          <p className="text-gray-300 mt-4 text-lg">
            Hear from our happy customers who’ve explored the world with us.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex space-x-6 animate-scroll"
            style={{
              animation: "scroll 15s linear infinite",
            }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white text-secondary rounded-lg shadow-lg p-8 space-y-6 min-w-[300px] max-w-[350px] flex-shrink-0"
              >
                {/* Reviewer Info */}
                <div className="flex items-center space-x-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-16 h-16 rounded-full object-cover shadow-md"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{review.name}</h3>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                </div>

                {/* Review Content */}
                <p className="text-gray-600 italic relative">
                  <FaQuoteLeft className="absolute -left-6 text-primary text-2xl" />
                  {review.review}
                  <FaQuoteRight className="absolute -right-6 text-primary text-2xl" />
                </p>

                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-lg ${
                        i < Math.floor(review.rating)
                          ? "text-primary"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  {review.rating % 1 !== 0 && (
                    <FaStar className="text-lg text-primary opacity-50" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Animation Keyframes */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </section>
  );
}

export default CustomerReviews;
