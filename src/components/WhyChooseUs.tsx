import React from "react";
import {
  FaDollarSign,
  FaUserShield,
  FaConciergeBell,
  FaPlaneDeparture,
  FaRegCalendarAlt,
  FaRegHandshake,
  FaHeart,
} from "react-icons/fa";

function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Why Travel With Us?
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Choosing the right travel partner is crucial to ensuring a smooth and
          enjoyable journey. Here’s why Yatri Yatra should be your first choice
          for travel planning:
        </p>
      </div>

      {/* Feature Cards */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[
          {
            title: "Best Price Guarantee",
            description:
              "We offer the most competitive rates in the industry. From affordable tickets to exclusive holiday packages, we help you save while delivering premium services.",
            icon: <FaDollarSign className="text-4xl text-primary" />,
          },
          {
            title: "Seamless Booking Process",
            description:
              "Our platform is designed to provide a hassle-free booking experience. Book your tickets, reserve hotels, or customize your vacation with just a few clicks.",
            icon: <FaRegCalendarAlt className="text-4xl text-primary" />,
          },
          {
            title: "Wide Range of Services",
            description:
              "From bus, train, and flight bookings to hotel accommodations, we offer everything you need under one roof. Our customized holiday packages ensure a trip tailored just for you.",
            icon: <FaConciergeBell className="text-4xl text-primary" />,
          },
          {
            title: "Trusted Partners",
            description:
              "We collaborate with trusted service providers to ensure a smooth journey. From top-rated airlines to quality hotels, your comfort and safety are our priority.",
            icon: <FaPlaneDeparture className="text-4xl text-primary" />,
          },
          {
            title: "24/7 Customer Support",
            description:
              "Our support team is available round the clock to assist you with any queries, changes, or concerns. We’re here to help at any time.",
            icon: <FaUserShield className="text-4xl text-primary" />,
          },
          {
            title: "Secure Payments",
            description:
              "We use advanced encryption technologies to ensure your payment details and personal information are always secure.",
            icon: <FaRegHandshake className="text-4xl text-primary" />,
          },
          {
            title: "Personalized Experiences",
            description:
              "We customize every trip to match your preferences and exceed your expectations. Every traveler is unique, and so are their needs.",
            icon: <FaHeart className="text-4xl text-primary" />,
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-center mb-4 text-primary">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <p className="text-lg text-gray-600 mb-4">
          Choose Yatri Yatra and enjoy a travel experience that’s affordable,
          reliable, and unforgettable. Let us make your holidays truly special!
        </p>
        <a
          href="#contact"
          className="bg-primary text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-secondary transition-all"
        >
          Contact Us Now
        </a>
      </div>
    </section>
  );
}

export default WhyChooseUs;
