"use client";

import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCalendarAlt, FaClock, FaUser } from "react-icons/fa";
import { BlogPost } from "@/services/blogService";

// Utility functions
const getBlogCoverImage = (imageUrl?: string): string =>
  imageUrl || "/images/blog-placeholder.svg";

const formatDate = (dateString: string): string =>
  new Date(dateString).toLocaleDateString();

const getReadTime = (content?: string): number =>
  Math.ceil((content?.length || 0) / 200);

const AuthorAvatar = memo(({ name }: { name: string }) => (
  <div className="flex-shrink-0 bg-gray-200 rounded-full flex items-center justify-center text-gray-700">
    <FaUser />
  </div>
));
AuthorAvatar.displayName = "AuthorAvatar";

interface BlogCardProps {
  post: BlogPost;
  isFeatured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, isFeatured = false }) => {
  // Calculate classes based on whether the card is featured
  const imageHeight = isFeatured ? "h-80 md:h-auto" : "h-52";
  const titleClass = isFeatured
    ? "text-2xl md:text-3xl font-bold mb-4 text-gray-900 hover:text-primary transition-colors"
    : "font-bold text-xl mb-3 text-gray-900 hover:text-primary transition-colors line-clamp-2";

  return (
    <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
      <div className={isFeatured ? "grid md:grid-cols-2 gap-0" : ""}>
        <div className={`relative ${imageHeight} overflow-hidden`}>
          <Link href={`/blog/${post.id}`}>
            <div className="relative w-full h-full">
              <Image
                src={getBlogCoverImage(post.imageUrl)}
                alt={post.title}
                fill
                priority={isFeatured}
                className="object-cover transition duration-700 hover:scale-105"
                sizes={
                  isFeatured
                    ? "(max-width: 768px) 100vw, 50vw"
                    : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                }
              />
            </div>
          </Link>
          {!isFeatured && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary rounded-full text-xs font-medium shadow-sm">
                {post.category.name}
              </span>
            </div>
          )}
        </div>

        <div className={isFeatured ? "p-8 md:p-10 flex flex-col" : "p-6"}>
          {isFeatured && (
            <div className="flex items-center mb-4">
              <span className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm font-medium">
                {post.category.name}
              </span>
              <span className="mx-2 text-gray-300">•</span>
              <span className="text-sm text-gray-500">
                {formatDate(post.date)}
              </span>
            </div>
          )}

          {!isFeatured && (
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <FaCalendarAlt className="mr-1 text-primary text-xs" />
              <span>{formatDate(post.date)}</span>
              <span className="mx-2 text-gray-300">•</span>
              <FaClock className="mr-1 text-primary text-xs" />
              <span>
                {post.content
                  ? `${getReadTime(post.content)} min read`
                  : "Quick read"}
              </span>
            </div>
          )}

          <h3 className={titleClass}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </h3>

          <div className="text-gray-600 mb-6 flex-grow">
            {post.content
              ? `${post.content
                  .substring(0, isFeatured ? 200 : 150)
                  .replace(/<[^>]*>/g, "")}...`
              : `Click to read this ${isFeatured ? "featured " : ""}article`}
          </div>

          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center">
              <div
                className={`${isFeatured ? "h-10 w-10" : "h-8 w-8"} mr-${
                  isFeatured ? "3" : "2"
                }`}
              >
                <AuthorAvatar name={post.author.name} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {post.author.name}
                </p>
                {isFeatured && (
                  <p className="text-xs text-gray-500">
                    <span>{post.views} views</span>
                    {post.content && (
                      <>
                        <span className="mx-1">•</span>
                        <span>{getReadTime(post.content)} min read</span>
                      </>
                    )}
                  </p>
                )}
              </div>
            </div>

            <Link
              href={`/blog/${post.id}`}
              className={
                isFeatured
                  ? "inline-flex items-center px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
                  : "text-primary text-sm font-medium hover:underline"
              }
            >
              {isFeatured ? "Read Article" : "Read More →"}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default memo(BlogCard);
