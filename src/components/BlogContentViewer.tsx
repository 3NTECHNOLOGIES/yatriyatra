"use client";

import React from "react";

// Interface for the component props
interface BlogContentViewerProps {
  content: string;
}

/**
 * A simple HTML content viewer that renders blog content with proper styling
 */
const BlogContentViewer = ({ content }: BlogContentViewerProps) => (
  <div className="blog-content">
    <style jsx global>{`
      .blog-content pre {
        background: #1e293b !important;
        color: #e2e8f0 !important;
        padding: 1rem !important;
        border-radius: 0.375rem !important;
        margin: 1.5rem 0 !important;
        overflow-x: auto !important;
        font-family: monospace !important;
        font-size: 0.875rem !important;
        line-height: 1.7 !important;
        position: relative !important;
      }
      .blog-content pre::before {
        content: "Code";
        display: block;
        background: #111827;
        color: white;
        padding: 0.5rem 1rem;
        margin: -1rem -1rem 1rem -1rem;
        border-radius: 0.375rem 0.375rem 0 0;
        font-weight: 500;
        font-size: 0.875rem;
      }
      .blog-content p {
        color: #4b5563;
        margin-bottom: 1rem;
        line-height: 1.7;
      }
    `}</style>
    <div
      className="prose max-w-none text-black"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </div>
);

export default BlogContentViewer;
