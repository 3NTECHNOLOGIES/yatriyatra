"use client";

import React, { useEffect, useState, useCallback, useMemo } from "react";
import Link from "next/link";
import { FaSearch, FaTimes, FaChevronDown } from "react-icons/fa";
import dynamic from "next/dynamic";
import { blogService, BlogFilters, BlogPost } from "@/services/blogService";
import BlogCard from "@/components/BlogCard";

// Custom hooks
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
}

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
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState<BlogFilters>({
    page: 1,
    limit: 10,
    sortBy: "createdAt",
    orderBy: "desc",
    status: "published",
  });
  const [categories, setCategories] = useState<string[]>(["All Posts"]);
  const [totalPages, setTotalPages] = useState(1);

  // Apply debouncing to search term
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // Update filters when debounced search term changes
  useEffect(() => {
    setFilters((prev) => ({ ...prev, search: debouncedSearchTerm, page: 1 }));
  }, [debouncedSearchTerm]);

  // Fetch blogs when filters change
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await blogService.getBlogs(filters);

        if (response.success) {
          setBlogs(response.data.blogs);
          setTotalPages(response.data.totalPages);

          const uniqueCategories = [
            "All Posts",
            ...Array.from(
              new Set(response.data.blogs.map((post) => post.category.name))
            ),
          ];
          setCategories(uniqueCategories);
          setError(null);
        } else {
          setError(response.message || "Failed to fetch blogs");
        }
      } catch (err) {
        setError("Failed to fetch blogs. Please try again later.");
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [filters]);

  // Memoized values
  const featuredPost = useMemo(() => {
    return blogs.length > 0
      ? blogs.reduce(
          (featured, current) =>
            current.views > (featured?.views || 0) ? current : featured,
          blogs[0]
        )
      : // blogs.filter((post) => !!post.featured)[0]
        null;
  }, [blogs]);

  const otherPosts = useMemo(() => {
    return featuredPost
      ? blogs.filter((post) => post.id !== featuredPost.id)
      : blogs;
  }, [blogs, featuredPost]);

  // Event handlers
  const handleCategoryClick = useCallback(
    (categoryName: string) => {
      const categoryId =
        categoryName === "All Posts"
          ? ""
          : blogs.find((b) => b.category.name === categoryName)?.category.id ||
            "";

      setFilters((prev) => ({ ...prev, categoryId, page: 1 }));
    },
    [blogs]
  );

  const handlePageChange = useCallback((newPage: number) => {
    setFilters((prev) => ({ ...prev, page: newPage }));
  }, []);

  // Render functions
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500">{error}</p>
          <button
            onClick={() => setFilters((prev) => ({ ...prev }))}
            className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50" suppressHydrationWarning>
      {/* Hero Header with Search */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h1 className="text-5xl font-bold text-white mb-6">
              Travel <span className="font-light">Blog</span>
            </h1>
            <p className="text-xl text-white/90">
              Discover travel tips, destinations, and stories to inspire your
              next adventure
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Find your next travel inspiration..."
                className="w-full py-4 px-6 pr-16 rounded-full shadow-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-white/30"
                aria-label="Search blog posts"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                className="absolute right-0 top-0 h-full px-6 rounded-r-full text-white bg-black/20 hover:bg-black/30 flex items-center justify-center"
                aria-label="Search"
              >
                <FaSearch className="text-xl" />
              </button>
            </div>

            {/* Categories */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium 
                    ${
                      (category === "All Posts" && !filters.categoryId) ||
                      (filters.categoryId &&
                        blogs.find((b) => b.category.id === filters.categoryId)
                          ?.category.name === category)
                        ? "bg-white text-primary"
                        : "bg-white/20 text-white hover:bg-white/30"
                    } transition duration-300`}
                  onClick={() => handleCategoryClick(category)}
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
      {(filters.categoryId || filters.search) && (
        <div className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-500 mr-2">
                  Active filters:
                </span>
                <div className="flex flex-wrap gap-2">
                  {filters.categoryId && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary text-white">
                      {blogs.find((b) => b.category.id === filters.categoryId)
                        ?.category.name || "Category"}
                      <button
                        className="ml-1 focus:outline-none"
                        onClick={() =>
                          setFilters((prev) => ({
                            ...prev,
                            categoryId: "",
                            page: 1,
                          }))
                        }
                        aria-label="Remove category filter"
                      >
                        <FaTimes className="h-3 w-3" />
                      </button>
                    </span>
                  )}
                  {filters.search && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary text-white">
                      Search: {filters.search}
                      <button
                        className="ml-1 focus:outline-none"
                        onClick={() => setSearchTerm("")}
                        aria-label="Remove search filter"
                      >
                        <FaTimes className="h-3 w-3" />
                      </button>
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center">
                {/* Sort options */}
                <select
                  className="px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700"
                  value={`${filters.sortBy || "date"}:${
                    filters.orderBy || "desc"
                  }`}
                  onChange={(e) => {
                    const [sortBy, orderBy] = e.target.value.split(":");
                    setFilters((prev) => ({
                      ...prev,
                      sortBy,
                      orderBy,
                      page: 1,
                    }));
                  }}
                >
                  <option value="date:desc">Newest First</option>
                  <option value="date:asc">Oldest First</option>
                  <option value="views:desc">Most Popular</option>
                  <option value="title:asc">Title A-Z</option>
                  <option value="title:desc">Title Z-A</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Featured Article */}
      {featuredPost && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center text-center">
            <div className="h-6 w-1 bg-primary rounded-full mr-3 text-center"></div>
            Featured Article
          </h2>

          <BlogCard post={featuredPost} isFeatured={true} />
        </section>
      )}

      {/* Main Content - Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
          <div className="h-6 w-1 bg-primary rounded-full mr-3"></div>
          Latest Articles
        </h2>

        {otherPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">
              No blog posts found. Try adjusting your filters.
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <nav className="mt-12 flex justify-center" aria-label="Pagination">
            <div className="inline-flex rounded-lg shadow-sm bg-white divide-x divide-gray-200">
              <button
                onClick={() =>
                  handlePageChange(Math.max(1, filters.page || 1) - 1)
                }
                disabled={(filters.page || 1) === 1}
                className="px-4 py-2 text-gray-500 hover:text-primary rounded-l-lg disabled:opacity-50 disabled:cursor-not-allowed"
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
              </button>

              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                // Create page numbers intelligently
                let pageNum = 1;
                const currentPage = filters.page || 1;

                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }

                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`px-4 py-2 ${
                      (filters.page || 1) === pageNum
                        ? "text-primary font-medium bg-blue-50"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                onClick={() => handlePageChange((filters.page || 1) + 1)}
                disabled={(filters.page || 1) >= totalPages}
                className="px-4 py-2 text-gray-500 hover:text-primary rounded-r-lg disabled:opacity-50 disabled:cursor-not-allowed"
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
              </button>
            </div>
          </nav>
        )}
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
              href="/#packages"
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
