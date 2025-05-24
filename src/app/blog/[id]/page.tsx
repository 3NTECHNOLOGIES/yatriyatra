"use client";

import React, { useEffect, useState, useMemo } from "react";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  FaCalendarAlt,
  FaClock,
  FaChevronLeft,
  FaEye,
  FaUser,
} from "react-icons/fa";
import { HiBookmark } from "react-icons/hi";
import { blogService, BlogPost } from "@/services/blogService";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import { ShareButton } from "@/components/ShareButton";
import BlogContentViewer from "@/components/BlogContentViewer";

// Utility functions
const getBlogCoverImage = (imageUrl?: string): string =>
  imageUrl || "/images/blog-placeholder.svg";
const formatDate = (dateString: string): string =>
  new Date(dateString).toLocaleDateString();
const getReadTime = (content?: string): number =>
  Math.ceil((content?.length || 0) / 200);

// UI Components
const MetaItem = ({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <span className="text-white/80 text-xs flex items-center">
    <span className="mr-2 text-white/80">{icon}</span> {children}
  </span>
);

const Tag = ({ name }: { name: string }) => (
  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs hover:bg-gray-200 transition-colors cursor-pointer">
    #{name}
  </span>
);

export default function BlogPostPage() {
  // Use the useParams hook to get params
  const params = useParams();
  const postId = params?.id as string;

  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!postId) return;

    const fetchBlog = async () => {
      try {
        setLoading(true);
        const response = await blogService.getBlogById(postId);

        if (!response.success || !response.data.blog) {
          notFound();
        }

        // Verify that the blog is published, otherwise show 404
        if (response.data.blog.status !== "published") {
          notFound();
        }

        setPost(response.data.blog);
        setError(null);
      } catch (err: any) {
        if (err.response?.status === 404) {
          notFound();
        }
        setError("Failed to fetch blog post. Please try again later.");
        console.error("Error fetching blog:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [postId]);

  // Memoized values
  const tags = useMemo(() => ["travel", "adventure", "vacation"], []);

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
          <div className="mb-4">
            <svg
              className="mx-auto h-12 w-12 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Error Loading Blog Post
          </h3>
          <p className="text-red-500 mb-4">{error}</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
            >
              Try Again
            </button>
            <Link
              href="/blog"
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return null; // This will trigger the notFound() UI
  }

  return (
    <div className="min-h-screen bg-gray-50" suppressHydrationWarning>
      {/* Hero Header */}
      <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={getBlogCoverImage(post.coverImage)}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>

        {/* Content positioned at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="mb-4 flex items-center flex-wrap gap-3">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-md">
              {post.category.name}
            </span>
            <MetaItem icon={<FaCalendarAlt />}>
              {formatDate(post.date)}
            </MetaItem>
            <MetaItem icon={<FaEye />}>{post.views} views</MetaItem>
            {post.content && (
              <MetaItem icon={<FaClock />}>
                {getReadTime(post.content)} min read
              </MetaItem>
            )}
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10 mr-3 bg-white/20 rounded-full flex items-center justify-center text-white">
              <FaUser />
            </div>
            <div>
              <h3 className="font-medium text-white text-sm md:text-base">
                {post.author.name}
              </h3>
              <p className="text-xs text-white/70">{post.author.email}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Reading Progress Bar */}
      <ReadingProgressBar />

      {/* Main Content Area */}
      <div className="relative bg-white shadow-sm -mt-6 rounded-t-3xl z-10">
        <div className="max-w-3xl mx-auto px-6 md:px-8 py-12">
          {/* Navigation Bar */}
          <div className="flex justify-between items-center mb-8 pb-6 border-b border-gray-100">
            <Link
              href="/blog"
              className="text-gray-600 hover:text-secondary text-sm font-medium flex items-center group"
            >
              <FaChevronLeft className="mr-2 h-3 w-3 text-gray-400 group-hover:text-secondary transition-colors" />
              Back to Blog
            </Link>

            <div className="flex items-center space-x-3">
              <button
                className="text-gray-400 hover:text-secondary transition-colors"
                aria-label="Bookmark this article"
              >
                <HiBookmark className="w-5 h-5" />
              </button>
              <ShareButton title={post.title} />
            </div>
          </div>

          {/* Article Excerpt */}
          {/* {post.content && post.content.length > 100 && (
            <div className="mb-8">
              <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-secondary pl-4 italic">
                {post.content.substring(0, 120).replace(/<[^>]*>/g, "")}...
              </p>
            </div>
          )} */}

          {/* Article Content */}
          <article className="mb-12 text-black">
            {post.content ? (
              <BlogContentViewer content={post.content} />
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>
                  The complete content of this article is not available yet.
                </p>
              </div>
            )}
          </article>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 items-center mb-12 pt-6 border-t border-gray-100">
            <span className="text-gray-700 text-sm font-medium">Tags:</span>
            {tags.map((tag) => (
              <Tag key={tag} name={tag} />
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-secondary py-12 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Browse our holiday packages and book your dream vacation today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#packages"
              className="inline-flex items-center px-6 py-3 bg-white text-secondary text-sm font-medium rounded-md hover:bg-gray-100 transition-colors"
            >
              Explore Packages
            </Link>
            <Link
              href="/#contact-us"
              className="inline-flex items-center px-6 py-3 border border-white text-white text-sm font-medium rounded-md hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
