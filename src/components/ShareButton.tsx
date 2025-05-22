"use client";

import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaShareAlt,
} from "react-icons/fa";

interface ShareButtonProps {
  title: string;
  url?: string;
}

export function ShareButton({ title, url }: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Generate URL only once when the component mounts or props change
  const pageUrl = useMemo(() => {
    return url || (typeof window !== "undefined" ? window.location.href : "");
  }, [url]);

  // Create share links only when pageUrl changes
  const shareLinks = useMemo(
    () => [
      {
        name: "Facebook",
        icon: <FaFacebookF size={14} />,
        color: "#3b5998",
        url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          pageUrl
        )}`,
      },
      {
        name: "Twitter",
        icon: <FaTwitter size={14} />,
        color: "#1da1f2",
        url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          title
        )}&url=${encodeURIComponent(pageUrl)}`,
      },
      {
        name: "LinkedIn",
        icon: <FaLinkedinIn size={14} />,
        color: "#0077b5",
        url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          pageUrl
        )}`,
      },
      {
        name: "WhatsApp",
        icon: <FaWhatsapp size={14} />,
        color: "#25d366",
        url: `https://wa.me/?text=${encodeURIComponent(`${title} ${pageUrl}`)}`,
      },
    ],
    [pageUrl, title]
  );

  // Memoize the share handler
  const handleShare = useCallback((e: React.MouseEvent, url: string) => {
    e.preventDefault();
    window.open(url, "_blank", "width=600,height=400");
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-500 hover:text-secondary p-2 transition-colors rounded-full"
        aria-label="Share this article"
        aria-expanded={isOpen}
      >
        <FaShareAlt />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 bg-white shadow-md rounded-md p-2 z-20">
          <div className="flex items-center space-x-2 py-1">
            {shareLinks.map((link) => (
              <button
                key={link.name}
                onClick={(e) => handleShare(e, link.url)}
                className="p-2 rounded-full transition-colors"
                aria-label={`Share on ${link.name}`}
                style={{
                  color: link.color,
                  backgroundColor: "transparent",
                  transition: "background-color 0.2s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = `${link.color}20`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {link.icon}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
