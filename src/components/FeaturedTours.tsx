import React from "react";
import { FaMapMarkedAlt, FaPlaneDeparture, FaHeart } from "react-icons/fa";

import "@/components/FeaturedTours.css";

function FeaturedTours() {
  const tours = [
    {
      title: "Paris City Tour",
      description:
        "Experience the beauty of Paris with a guided city tour visiting iconic landmarks like the Eiffel Tower, Notre-Dame Cathedral, and the Louvre.",
      price: "$299",
      duration: "5 Days",
      image: "https://via.placeholder.com/400x300?text=Paris",
      icon: <FaMapMarkedAlt className="text-2xl" />,
    },
    {
      title: "Maldives Island Getaway",
      description:
        "Relax in the crystal-clear waters of the Maldives. Enjoy luxury resorts, overwater bungalows, and stunning beaches for a dream vacation.",
      price: "$999",
      duration: "7 Days",
      image: "https://via.placeholder.com/400x300?text=Maldives",
      icon: <FaPlaneDeparture className="text-2xl" />,
    },
    {
      title: "Kyoto Cultural Escape",
      description:
        "Explore the cultural heart of Japan. Visit ancient temples, traditional tea houses, and the beautiful Arashiyama Bamboo Grove in Kyoto.",
      price: "$499",
      duration: "6 Days",
      image: "https://via.placeholder.com/400x300?text=Kyoto",
      icon: <FaHeart className="text-2xl" />,
    },
    {
      title: "New York Adventure",
      description:
        "Discover the hustle and bustle of New York City. Visit Central Park, Times Square, and the Statue of Liberty in this thrilling tour.",
      price: "$799",
      duration: "4 Days",
      image: "https://via.placeholder.com/400x300?text=New+York",
      icon: <FaPlaneDeparture className="text-2xl" />,
    },
    {
      title: "Rome Heritage Tour",
      description:
        "Step into history with a heritage tour of Rome. Explore ancient ruins like the Colosseum, Roman Forum, and the Pantheon.",
      price: "$399",
      duration: "5 Days",
      image: "https://via.placeholder.com/400x300?text=Rome",
      icon: <FaMapMarkedAlt className="text-2xl" />,
    },
  ];

  return (
    <section className="bg-white py-20 container">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">
          Featured Tours
        </h2>
        <p className="text-lg text-gray-600">
          Explore our handpicked tours for an unforgettable experience.
        </p>
      </div>

      {/* Carousel Container with hover effect */}
      <div className="relative overflow-hidden carousel-container py-11">
        {/* Scrollable Tours */}
        <div className="flex gap-6 animate-carousel">
          {tours.concat(tours).map((tour, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-3xl shadow-lg transform transition duration-300 hover:scale-105 w-80 flex-shrink-0 cursor-pointer"
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-64 object-cover rounded-t-3xl"
              />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {tour.icon}
                  <h3 className="text-xl font-semibold text-blue-900">
                    {tour.title}
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">{tour.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-pink-600 font-semibold">
                    {tour.price}
                  </span>
                  <span className="text-gray-500">{tour.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedTours;
