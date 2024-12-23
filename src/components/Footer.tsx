import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-secondary text-white py-12 px-6">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-3 text-center md:text-left">
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
                href="#about-us"
                className="text-gray-300 hover:text-primary transition duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#contact-us"
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

        {/* Contact Info Section */}
        <div>
          <div className="mb-4 space-y-1">
            <h3 className="text-2xl font-bold">Our Contact Info</h3>
            <p className="text-[11px] font-medium italic uppercase">
              CLIQTAX TECHNOLOGIES PRIVATE LIMITED
            </p>
          </div>
          <div className="space-y-6 text-gray-200">
            <div>
              <h4 className="font-semibold">Registered Address:</h4>
              <p>
                The i-Thum, Tower-B, Office No. 1028, 10th Floor, Plot No. A-40,
                Block -A, Sector-62, Gautam Buddha Nagar, Noida, Uttar Pradesh,
                India, 201309
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Delhi Branch Address:</h4>
              <p>
                First Floor, Office No. 102, Shree Shyam Complex, Vikas Marg,
                Laxmi Nagar, East Delhi, Delhi, 110092
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Haryana Branch Address:</h4>
              <p>
                Shop No. 09, First Floor, Global City Centre-2, Above Dominos,
                Near Flora Avenue 33, Sector-33, Sohna Road, Gurugram,
                Haryana-122103
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-8 border-t border-gray-500"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <Link
            href="#"
            className="w-10 h-10 flex items-center justify-center bg-primary rounded-full hover:bg-white hover:text-primary transition duration-300"
          >
            <FaFacebookF className="text-lg" />
          </Link>
          <Link
            href="#"
            className="w-10 h-10 flex items-center justify-center bg-primary rounded-full hover:bg-white hover:text-primary transition duration-300"
          >
            <FaTwitter className="text-lg" />
          </Link>
          <Link
            href="#"
            className="w-10 h-10 flex items-center justify-center bg-primary rounded-full hover:bg-white hover:text-primary transition duration-300"
          >
            <FaInstagram className="text-lg" />
          </Link>
        </div>

        {/* Footer Text */}
        <p className="text-gray-300 text-sm text-center md:text-left">
          © 2024 Yatri Yatra | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
