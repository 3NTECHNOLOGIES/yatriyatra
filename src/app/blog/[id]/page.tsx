import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaCalendarAlt, FaClock, FaChevronLeft } from "react-icons/fa";
import { HiBookmark } from "react-icons/hi";
import { blogPosts, BlogPost } from "@/data/blogPosts";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import { ShareButton } from "@/components/ShareButton";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const postId = parseInt(params.id);
  const post = blogPosts.find((post: BlogPost) => post.id === postId);

  if (!post) {
    notFound();
  }

  // Tags specific to this post
  const tags = ["travel", "summer", "vacation"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>

        {/* Content positioned at bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-12 text-white z-10 w-full max-w-5xl mx-auto">
          <div className="mb-4 flex items-center space-x-3">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-md">
              {post.category}
            </span>
            <span className="text-white/80 text-xs flex items-center">
              <FaCalendarAlt className="mr-2 text-white/80" /> {post.date}
            </span>
            <span className="text-white/80 text-xs flex items-center">
              <FaClock className="mr-2 text-white/80" /> {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center">
            <div className="relative w-10 h-10 mr-3">
              <Image
                src={post.authorImage}
                alt={post.author}
                fill
                className="rounded-full border border-white/30 object-cover"
                sizes="40px"
              />
            </div>
            <div>
              <h3 className="font-medium text-white text-sm md:text-base">
                {post.author}
              </h3>
              <p className="text-xs text-white/70">{post.authorRole}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Reading Progress Bar */}
      <ReadingProgressBar />

      {/* Main Content Area */}
      <div className="bg-white shadow-sm -mt-6 relative rounded-t-3xl z-10">
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
          <div className="mb-8">
            <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-secondary pl-4 italic">
              {post.excerpt}
            </p>
          </div>

          {/* Article Content */}
          <article className="prose prose-slate max-w-none prose-headings:text-gray-800 prose-headings:font-bold prose-p:text-gray-600 prose-a:text-secondary prose-a:font-medium prose-img:rounded-lg prose-img:shadow-sm mb-12">
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="blog-content"
            />
          </article>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-12 pt-6 border-t border-gray-100">
            <span className="text-gray-700 text-sm font-medium">Tags:</span>
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs hover:bg-gray-200 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
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
              href="/#contact-us"
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
