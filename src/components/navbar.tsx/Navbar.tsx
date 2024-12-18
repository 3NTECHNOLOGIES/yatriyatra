"use client";
import { useState } from "react";
import { FaGlobe, FaRegHeart, FaBars, FaTimes } from "react-icons/fa";
import { PiAirplaneTiltFill } from "react-icons/pi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg w-full">
      {/* Top Header */}
      <div className="hidden md:flex justify-center items-center px-8 py-4 text-gray-600 text-sm border-b bg-[#f1f2f3a0] ">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <FaGlobe className="text-secondary" />{" "}
            <span className="text-gray-700">Shop 2,500 operators</span>
          </span>
          <span>
            4.5 stars on{" "}
            <span className="text-green-500 font-semibold">Trustpilot</span>{" "}
            (7,324 reviews)
          </span>
          <span className="flex items-center gap-2">
            <FaRegHeart className="text-red-500" />{" "}
            <span className="text-gray-700">24/7 Customer Support</span>
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex justify-between items-center px-8 py-4 container sticky">
        {/* Logo */}
        <div className="text-primary text-3xl font-extrabold tracking-wide flex flex-row">
          Yatri
          <span className="text-secondary">Yatra</span>
          <PiAirplaneTiltFill className="text-primary w-5 h-5" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-800 font-semibold">
          <li className="hover:text-primary transition duration-300 cursor-pointer">
            Destinations
          </li>
          <li className="hover:text-primary transition duration-300 cursor-pointer">
            Adventure Styles
          </li>
          <li className="hover:text-primary transition duration-300 cursor-pointer">
            Deals
          </li>
          <li className="hover:text-primary transition duration-300 cursor-pointer">
            Contact
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 text-3xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gradient-to-b from-white to-gray-50 text-gray-800 text-center font-medium border-t">
          <li className="py-3 hover:text-primary transition duration-300 cursor-pointer">
            Destinations
          </li>
          <li className="py-3 hover:text-primary transition duration-300 cursor-pointer">
            Adventure Styles
          </li>
          <li className="py-3 hover:text-primary transition duration-300 cursor-pointer">
            Deals
          </li>
          <li className="py-3 hover:text-primary transition duration-300 cursor-pointer">
            Contact
          </li>
        </ul>
      )}
    </nav>
  );
}
