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
      toast.success("Message sent successfully");
      formRef.current?.reset();
    }
  }, [state.succeeded]);

  return (
    <section className="md:h-screen bg-gray-50 flex flex-col items-center justify-center px-4 md:px-8">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Section: Form */}
        <div className="p-6 md:p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Contact CLIQTAX TECHNOLOGIES PRIVATE LIMITED
          </h2>
          <p className="text-gray-600 mb-6">
            We'd love to hear from you! Whether you have a question or just want
            to say hello, reach out to us, and we'll get back to you soon.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit} ref={formRef}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="number"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="number"
                name="number"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 focus:ring-2 focus:ring-primary"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Section: Contact Information */}
        <div className="p-6 md:p-12 bg-gray-100 flex flex-col justify-center space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800">
            Our Contact Info
          </h3>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-primary w-6 h-6" />
              <span className="text-gray-700 text-sm">
                Registered Address: The i-Thum, Tower -B, Office No. 1028, 10th
                Floor, Plot No. A-40, Block -A, Sector-62, Gautam Buddha Nagar,
                Noida, Uttar Pradesh, India, 201309
              </span>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-primary w-6 h-6" />
              <span className="text-gray-700 text-sm">
                Delhi Branch Address: FIRST FLOOR, OFFICE NO 102, SHREE SHYAM
                COMPLEX, VIKAS MARG, LAXMI NAGAR, East Delhi, Delhi, 110092
              </span>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-primary w-6 h-6" />
              <span className="text-gray-700 text-sm">
                Haryana Branch Address: Shop No. 09, First Floor, Global City
                Centre-2, Above Dominos, Near Flora Avenue 33, Sector-33, Sohna
                Road, Gurugram, Haryana-122103
              </span>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-primary w-6 h-6" />
              <span className="text-gray-700 text-sm">
                +91 9910960325, +91 8191068288
              </span>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-primary w-6 h-6" />
              <span className="text-gray-700 text-sm">
                contact@yatriyatra.com
              </span>
            </div>
          </div>

          <div className="relative h-40 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={contactImage}
              alt="Contact Us"
              layout="fill"
              objectFit="cover"
              priority
              className="hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
