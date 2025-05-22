import Link from "next/link";
import Image from "next/image";

export default function BlogNotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="mb-8">
          <Image
            src="/images/404.svg"
            alt="404 Not Found"
            width={400}
            height={300}
            className="mx-auto"
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Blog Post Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          The blog post you're looking for doesn't exist or has been removed.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/blog"
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Back to Blog
          </Link>
          <Link
            href="/"
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
