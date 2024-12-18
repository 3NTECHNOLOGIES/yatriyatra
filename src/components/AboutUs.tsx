import React from "react";
import Image from "next/image";
import aboutImage from "@/assets/images/banner.jpg"; // Replace with your actual image path

function AboutUs() {
  return (
    <section className="relative bg-gradient-to-r from-blue-100 to-indigo-200 py-20 px-6">
      <div className="container mx-auto gap-12 items-center">
        <div className="flex flex-col justify-center text-gray-800">
          <h2 className="text-4xl md:text-6xl font-extrabold text-center  text-gray-900 leading-tight mb-6">
            About <span className="text-primary">Yatri Yatra</span>
          </h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed ">
            At <strong className="text-primary">Yatri Yatra</strong>, we
            understand that travel is more than just a journey; it’s an
            experience filled with excitement, exploration, and cherished
            moments. Our mission is to make every traveler’s dream a reality by
            offering reliable and affordable travel services.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed ">
            We specialize in providing a wide range of travel solutions,
            including bus and train ticket bookings, flight reservations, hotel
            accommodations, and customized holiday packages. Whether you’re
            planning a quick weekend getaway, a family vacation, or a corporate
            trip, Yatri Yatra ensures that every detail is taken care of so you
            can focus on enjoying the experience.
          </p>

          <div className="mt-12 bg-white p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-semibold text-center text-gray-900 mb-6">
              What Sets Us Apart?
            </h3>
            <ul className="space-y-4 text-lg text-gray-600">
              <li>
                🌍 <strong>Convenience</strong>: Easy-to-use platform for all
                your bookings.
              </li>
              <li>
                💰 <strong>Affordability</strong>: Competitive pricing for all
                services.
              </li>
              <li>
                ✅ <strong>Reliability</strong>: Trusted partners for seamless
                travel experiences.
              </li>
              <li>
                📞 <strong>Customer Support</strong>: 24/7 dedicated team ready
                to assist you.
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-center text-gray-900 mb-6">
              Our Vision
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed ">
              We aim to revolutionize the travel industry by simplifying the
              booking process and providing an all-in-one solution for
              travelers. Whether you’re a solo adventurer or a family looking
              for a relaxing vacation, Yatri Yatra strives to make your travel
              experience effortless and enjoyable.
            </p>
          </div>

          {/* Services Section */}
          <div className="mt-12 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-xl">
              <h4 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Our Services
              </h4>
              <ul className="text-lg text-gray-600 space-y-4">
                <li>🚍 Bus and Train Tickets</li>
                <li>✈️ Flight Tickets</li>
                <li>🏨 Hotel Bookings</li>
                <li>🎒 Customized Holiday Packages</li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 flex flex-wrap justify-center  gap-6">
            <button className="bg-primary hover:bg-primary/90 text-white font-semibold px-10 py-4 rounded-full shadow-xl transition-transform transform hover:scale-105">
              Learn More
            </button>
            <button className="border-2 border-primary text-primary font-semibold px-10 py-4 rounded-full shadow-xl transition-transform transform hover:scale-105 hover:bg-primary hover:text-white">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
