"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  FaGlobe,
  FaRegHeart,
  FaBars,
  FaTimes,
  FaPhoneVolume,
} from "react-icons/fa";
import { MdEmail, MdOutlinePayment } from "react-icons/md";
import { PiAirplaneTiltFill } from "react-icons/pi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Function to handle navigation to home page sections
  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetSection: string
  ) => {
    e.preventDefault();

    // Only handle routing when not on home page
    if (pathname !== "/") {
      router.push("/");

      // Save the target section in sessionStorage to scroll after navigation completes
      sessionStorage.setItem("scrollTarget", targetSection);
    } else {
      // If already on home page, just scroll to the section
      const element = document.getElementById(targetSection.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Effect to handle scrolling to target section after navigation
  useEffect(() => {
    if (pathname === "/") {
      const scrollTarget = sessionStorage.getItem("scrollTarget");
      if (scrollTarget) {
        // Small delay to ensure the page is fully loaded
        setTimeout(() => {
          const element = document.getElementById(scrollTarget.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
          // Clear the target after scrolling
          sessionStorage.removeItem("scrollTarget");
        }, 500);
      }
    }
  }, [pathname]);

  // Nav items with proper href attributes
  const navItems = [
    { name: "Bus", link: "/#contact-us" },
    { name: "Train", link: "/#contact-us" },
    { name: "Flight", link: "/#contact-us" },
    { name: "Hotel", link: "/#contact-us" },
    { name: "Holidays", link: "/#contact-us" },
    { name: "Offers", link: "/#contact-us" },
    { name: "Contact", link: "/#contact-us" },
    { name: "Blog", link: "/blog" },
    { name: "PayNow", link: "/#contact-us" },
  ];

  return (
    <nav className="bg-white shadow-lg w-full">
      {/* Top Header */}
      <div className="bg-[#f1f2f3a0] ">
        <div className="hidden md:flex justify-between items-center px-8 py-4 text-gray-600 text-sm border-b container">
          <Link
            href={"mailto:contact@yatriyatra.com"}
            className="flex items-center gap-2"
          >
            <MdEmail className="text-secondary text-lg" />{" "}
            <span className="text-secondary">contact@yatriyatra.com</span>
          </Link>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <FaGlobe className="text-secondary" />{" "}
              <span className="text-gray-700">Best Price Guarantee</span>
            </span>
            <span className="flex items-center gap-2">
              <MdOutlinePayment className="text-secondary" />{" "}
              <span className="text-gray-700">Secure Payments</span>
            </span>
            <span className="flex items-center gap-2">
              <FaRegHeart className="text-red-500" />{" "}
              <span className="text-gray-700">24/7 Customer Support</span>
            </span>
          </div>
          <Link href={"tel:+919910960325"} className="flex items-center gap-2">
            <FaPhoneVolume className="text-secondary text-lg" />{" "}
            <span className="text-secondary">+919910960325</span>
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex justify-between items-center px-8 py-4 container sticky">
        {/* Logo */}
        <Link href={"/"} className="items-center justify-center flex flex-col">
          <div className="text-primary text-3xl font-extrabold tracking-wide flex flex-row">
            Yatri
            <span className="text-secondary">Yatra</span>
            <PiAirplaneTiltFill className="text-primary w-5 h-5" />
          </div>
          <span className="text-secondary text-[12px] italic">
            Your Holidays Getaway Partner
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-800 font-semibold">
          {navItems?.map((item: any, index: number) => {
            // Regular link for Blog, customized navigation for others
            if (item.name === "Blog") {
              return (
                <Link href={item.link} key={index}>
                  <li className="hover:text-primary transition duration-300 cursor-pointer">
                    {item.name}
                  </li>
                </Link>
              );
            } else {
              return (
                <a
                  href={item.link}
                  key={index}
                  onClick={(e) =>
                    handleNavigation(e, item.link.split("/").pop() || "")
                  }
                >
                  <li className="hover:text-primary transition duration-300 cursor-pointer">
                    {item.name}
                  </li>
                </a>
              );
            }
          })}
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
          {navItems?.map((item: any, index: number) => {
            // Regular link for Blog, customized navigation for others
            if (item.name === "Blog") {
              return (
                <Link href={item.link} key={index}>
                  <li className="py-3 hover:text-primary transition duration-300 cursor-pointer">
                    {item.name}
                  </li>
                </Link>
              );
            } else {
              return (
                <a
                  href={item.link}
                  key={index}
                  onClick={(e) =>
                    handleNavigation(e, item.link.split("/").pop() || "")
                  }
                >
                  <li className="py-3 hover:text-primary transition duration-300 cursor-pointer">
                    {item.name}
                  </li>
                </a>
              );
            }
          })}
        </ul>
      )}
    </nav>
  );
}
