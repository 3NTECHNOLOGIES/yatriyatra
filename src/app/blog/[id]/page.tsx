"use client";

import React, { useEffect, useState } from "react";
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
import { BlogPost } from "@/services/blogService";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import { ShareButton } from "@/components/ShareButton";
import BlogContentViewer from "@/components/BlogContentViewer";
import { API_BASE_URL } from "@/config/api";

// Utility functions
const getBlogCoverImage = (imageUrl?: string): string => {
  if (!imageUrl) return "/images/blog-placeholder.svg";
  return imageUrl;
};

const formatDate = (dateString: string): string =>
  new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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

interface BlogDetailResponse {
  success: boolean;
  message: string;
  data: {
    blog: BlogPost;
  };
}

export default function BlogPostPage() {
  const params = useParams();
  const postId = params?.id as string;

  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/blogs/${postId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-store",
          // @ts-ignore
          agent: new (require("https").Agent)({
            rejectUnauthorized: false,
          }),
        });

        if (!response.ok) {
          if (response.status === 404) {
            notFound();
          }
          throw new Error("Failed to fetch blog post");
        }

        const responseData = (await response.json()) as BlogDetailResponse;

        if (responseData.success && responseData.data.blog) {
          setPost(responseData.data.blog);
          setError(null);
        } else {
          setError(responseData.message || "Failed to fetch blog post");
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch blog post"
        );
        console.error("Error fetching blog:", err);
      } finally {
        setLoading(false);
      }
    };

    if (postId) {
      fetchBlogPost();
    }
  }, [postId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !post) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50" suppressHydrationWarning>
      {/* Hero Header */}
      <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          {post.coverImage ? (
            <Image
              src={getBlogCoverImage(post.coverImage)}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
              unoptimized
            />
          ) : (
            <Image
              src="/images/blog-placeholder.svg"
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          )}
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

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            {post.content ? (
              <BlogContentViewer content={post.content} />
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>The content of this article is not available.</p>
              </div>
            )}
          </article>
        </div>
      </div>
    </div>
  );
}
