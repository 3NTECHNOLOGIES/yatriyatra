import React from "react";
import Image from "next/image";
import bannerImage from "@/assets/images/banner.jpg";

function Banner() {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="relative md:py-40 mt-10 py-14">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={bannerImage}
            alt="Banner"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight animate-fade-up">
            Discover Amazing Places
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-white/80 max-w-2xl animate-fade-up delay-150">
            Find tours, trips, and adventures that inspire you to explore the
            world.
          </p>
          <div className="mt-6 flex gap-4 flex-wrap items-center justify-center">
            <button className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105">
              Explore Now
            </button>
            <button className="bg-white text-gray-800 hover:bg-gray-200 font-semibold px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
