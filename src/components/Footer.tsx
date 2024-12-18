import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-secondary text-white py-12 px-6 mt-1">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3 text-center md:text-left">
        {/* About Us Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4">About Us</h3>
          <p className="text-gray-200 leading-relaxed">
            At Yatri Yatra, we understand that travel is more than just a
            journey; it’s an experience filled with excitement, exploration, and
            cherished moments. Our mission is to make every traveler’s dream a
            reality by offering reliable and affordable travel services.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link
                href="/"
                className="text-gray-300 hover:text-primary transition duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-gray-300 hover:text-primary transition duration-300"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/terms-condition"
                className="text-gray-300 hover:text-primary transition duration-300"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="text-gray-300 hover:text-primary transition duration-300"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/refund-policy"
                className="text-gray-300 hover:text-primary transition duration-300"
              >
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <p className="text-gray-200 leading-relaxed">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:support@devicorn.com"
              className="hover:text-primary transition duration-300"
            >
              contact@yatriyatra.com
            </a>
          </p>
          <p className="text-gray-200 leading-relaxed">
            <strong>Phone:</strong> +918191068288
          </p>
          <p className="text-gray-200 leading-relaxed">
            <strong>Location:</strong> New York, USA
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="my-8 border-t border-gray-500"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Social Media Icons */}
        <div className="flex space-x-6">
          <Link
            href="#"
            className="w-10 h-10 flex items-center justify-center bg-primary rounded-full hover:bg-white hover:text-primary transition duration-300"
            aria-label="Facebook"
          >
            <FaFacebookF className="text-lg" />
          </Link>
          <Link
            href="#"
            className="w-10 h-10 flex items-center justify-center bg-primary rounded-full hover:bg-white hover:text-primary transition duration-300"
            aria-label="Twitter"
          >
            <FaTwitter className="text-lg" />
          </Link>
          <Link
            href="#"
            className="w-10 h-10 flex items-center justify-center bg-primary rounded-full hover:bg-white hover:text-primary transition duration-300"
            aria-label="Instagram"
          >
            <FaInstagram className="text-lg" />
          </Link>
        </div>

        {/* Footer Text */}
        <p className="mt-6 md:mt-0 text-gray-300 text-sm">
          © Copyright 2024 Yatri Yatra | All Rights Reserved |
        </p>
      </div>
    </footer>
  );
}

export default Footer;
