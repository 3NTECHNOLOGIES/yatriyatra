"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaSearch,
  FaFilter,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaCalendarAlt,
  FaUserAlt,
  FaClock,
  FaTag,
} from "react-icons/fa";
import { blogPosts } from "@/data/blogPosts";
import dynamic from "next/dynamic";

// Create a client-only sort dropdown component
const SortDropdown = dynamic(() => import("@/components/SortDropdown"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-between w-48 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700">
      <span>Sort: Most Recent</span>
      <FaChevronDown className="ml-2 h-4 w-4 text-gray-500" />
    </div>
  ),
});

export default function BlogPage() {
  // All available categories from blog posts
  const allCategories = [
    "All Posts",
    ...Array.from(new Set(blogPosts.map((post) => post.category))),
  ];

  // Featured post is the first one
  const featuredPost = blogPosts[0];
  // Other posts start from the second one
  const otherPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header with Search */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6">
              Travel <span className="font-light">Blog</span>
            </h1>
            <p className="text-xl text-white/90 mb-10">
              Discover travel tips, destinations, and stories to inspire your
              next adventure
            </p>
          </div>

          {/* Large Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Find your next travel inspiration..."
                className="w-full py-4 px-6 pr-16 rounded-full shadow-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-white/30"
                aria-label="Search blog posts"
              />
              <button
                className="absolute right-0 top-0 h-full px-6 rounded-r-full text-white bg-black/20 hover:bg-black/30 flex items-center justify-center transition-all duration-300"
                aria-label="Search"
              >
                <FaSearch className="text-xl" />
              </button>
            </div>

            {/* Quick categories under search */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {allCategories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium 
                    ${
                      category === "All Posts"
                        ? "bg-white text-primary"
                        : "bg-white/20 text-white hover:bg-white/30"
                    } 
                    transition duration-300`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Background decorative pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        </div>
      </section>

      {/* Active filters strip */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-500 mr-2">
                Active filters:
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary text-white">
                  All Posts
                  <button
                    className="ml-1 focus:outline-none"
                    aria-label="Remove All Posts filter"
                  >
                    <FaTimes className="h-3 w-3" />
                  </button>
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary text-white">
                  #summer
                  <button
                    className="ml-1 focus:outline-none"
                    aria-label="Remove summer tag filter"
                  >
                    <FaTimes className="h-3 w-3" />
                  </button>
                </span>
              </div>
            </div>

            <div className="flex items-center">
              {/* More Filters Button */}
              <button
                className="flex items-center mr-6 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-600 hover:text-primary hover:bg-gray-100 transition-all duration-300"
                aria-label="Show more filters"
              >
                <FaFilter className="mr-2 text-primary" />
                <span>More filters</span>
              </button>

              {/* Client-side only sort dropdown */}
              <SortDropdown />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Article */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
          <div className="h-6 w-1 bg-primary rounded-full mr-3"></div>
          Featured Article
        </h2>

        <article className="bg-white rounded-xl shadow-sm overflow-hidden mb-12">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="h-80 md:h-auto relative overflow-hidden">
              <Image
                src={featuredPost.imageUrl}
                alt={featuredPost.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col">
              <div className="flex items-center mb-4">
                <span className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm font-medium">
                  {featuredPost.category}
                </span>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-sm text-gray-500">
                  {featuredPost.date}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 hover:text-primary transition-colors">
                <Link href={`/blog/${featuredPost.id}`}>
                  {featuredPost.title}
                </Link>
              </h3>

              <p className="text-gray-600 mb-6 flex-grow">
                {featuredPost.excerpt}
              </p>

              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center">
                  <div className="relative w-10 h-10 mr-3">
                    <Image
                      src={featuredPost.authorImage}
                      alt={featuredPost.author}
                      fill
                      className="rounded-full border-2 border-white shadow-sm object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {featuredPost.author}
                    </p>
                    <p className="text-xs text-gray-500">
                      {featuredPost.readTime}
                    </p>
                  </div>
                </div>

                <Link
                  href={`/blog/${featuredPost.id}`}
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  Read Article
                </Link>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* Main Content - Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
          <div className="h-6 w-1 bg-primary rounded-full mr-3"></div>
          Latest Articles
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <Link href={`/blog/${post.id}`}>
                  <div className="relative w-full h-full">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover transition duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </Link>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary rounded-full text-xs font-medium shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <FaCalendarAlt className="mr-1 text-primary text-xs" />
                  <span>{post.date}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <FaClock className="mr-1 text-primary text-xs" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900 hover:text-primary transition-colors line-clamp-2">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="relative w-8 h-8 mr-2">
                      <Image
                        src={post.authorImage}
                        alt={post.author}
                        fill
                        className="rounded-full border border-white shadow-sm object-cover"
                        sizes="32px"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {post.author}
                    </span>
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <nav className="mt-12 flex justify-center" aria-label="Pagination">
          <div className="inline-flex rounded-lg shadow-sm bg-white divide-x divide-gray-200">
            <a
              href="#"
              className="px-4 py-2 text-gray-500 hover:text-primary rounded-l-lg"
              aria-label="Previous page"
            >
              <span className="sr-only">Previous</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              className="px-4 py-2 text-primary font-medium bg-blue-50"
              aria-current="page"
            >
              1
            </a>
            <a href="#" className="px-4 py-2 text-gray-700 hover:bg-gray-50">
              2
            </a>
            <a href="#" className="px-4 py-2 text-gray-700 hover:bg-gray-50">
              3
            </a>
            <a
              href="#"
              className="px-4 py-2 text-gray-500 hover:text-primary rounded-r-lg"
              aria-label="Next page"
            >
              <span className="sr-only">Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </nav>
      </section>

      {/* Call To Action */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Browse our holiday packages and book your dream vacation today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact-us"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90"
            >
              Explore Packages
            </Link>
            <Link
              href="/#contact-us"
              className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
