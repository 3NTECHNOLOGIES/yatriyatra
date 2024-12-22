"use client";

import React, { useEffect, useRef } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import contactImage from "@/assets/images/banner.jpg";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "react-toastify";

function ContactUs() {
  const [state, handleSubmit] = useForm("mqaazoqb");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.succeeded) {
      toast("Message sent successfully");
      formRef.current?.reset();
    }
  }, [state.succeeded]);

  return (
    <section className="py-16 px-6 bg-gray-100 " id="contact-us">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left Section: Form */}
        <div className="flex flex-col space-y-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center sm:text-left">
            We'd Love To Hear From You
          </h2>
          <p className="text-lg text-gray-600 text-center sm:text-left">
            Whether you have a question or just want to say hello, reach out to
            us and we'll get back to you soon.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit} ref={formRef}>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-black"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-black"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>

            {/* Number */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="number"
                id="number"
                name="number"
                required
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-black"
              />
              <ValidationError
                prefix="Number"
                field="number"
                errors={state.errors}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-black"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={state.submitting}
                className="bg-primary hover:bg-primary/80 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Right Section: Contact Information & Image */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800 text-center sm:text-left">
            Our Contact Info
          </h3>
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-6">
            <div className="flex items-center gap-4 text-gray-800">
              <FaPhoneAlt className="w-6 h-6 text-primary" />
              <span className="text-lg">+91 9910960325, +91 8191068288</span>
            </div>
            <div className="flex items-center gap-4 text-gray-800">
              <FaEnvelope className="w-6 h-6 text-primary" />
              <span className="text-lg">contact@yatriyatra.com</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-6">
            <div className="flex items-center gap-4 text-gray-800">
              <FaMapMarkerAlt className="w-6 h-6 text-primary" />
              <span className="text-lg">
                Shop No. 09, First Floor, Global City Centre-2, Above Dominos,
                Near Flora Avenue 33, Sector-33, Sohna Road,
                Gurugram, Haryana-122103
              </span>
            </div>
          </div>

          {/* Contact Image */}
          <div className="relative h-72 sm:h-96 rounded-lg overflow-hidden shadow-lg mt-8 group hover:scale-105 transition-all duration-500 ease-in-out transform">
            <Image
              src={contactImage}
              alt="Contact Us"
              layout="fill"
              objectFit="cover"
              className="transform group-hover:scale-105 transition-transform duration-500"
              priority
            />
            {/* Decorative Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </div>
      </div>
      {/* Optional Map Section */}
      <div className="w-full mt-24 container">
        {/* <h3 className="text-3xl font-semibold  mb-6 text-primary">
          Our Location
        </h3> */}
        <div className="relative w-full h-72 rounded-xl shadow-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14229.457915764038!2d77.1025!3d28.7041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0218a5c43adf%3A0x1b9be7a82e42b9!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1686336711963!5m2!1sen!2sus"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
