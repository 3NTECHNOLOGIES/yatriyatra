"use client";

import { useState } from "react";
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
  const pageUrl =
    url || (typeof window !== "undefined" ? window.location.href : "");

  const shareLinks = [
    {
      name: "Facebook",
      icon: <FaFacebookF size={14} />,
      color: "#3b5998",
      getUrl: () =>
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          pageUrl
        )}`,
    },
    {
      name: "Twitter",
      icon: <FaTwitter size={14} />,
      color: "#1da1f2",
      getUrl: () =>
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          title
        )}&url=${encodeURIComponent(pageUrl)}`,
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn size={14} />,
      color: "#0077b5",
      getUrl: () =>
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          pageUrl
        )}`,
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp size={14} />,
      color: "#25d366",
      getUrl: () =>
        `https://wa.me/?text=${encodeURIComponent(`${title} ${pageUrl}`)}`,
    },
  ];

  const handleShare = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    window.open(url, "_blank", "width=600,height=400");
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-500 hover:text-secondary p-2 transition-colors rounded-full"
        aria-label="Share this article"
      >
        <FaShareAlt />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 bg-white shadow-md rounded-md p-2 z-20">
          <div className="flex items-center space-x-2 py-1">
            {shareLinks.map((link) => (
              <button
                key={link.name}
                onClick={(e) => handleShare(e, link.getUrl())}
                className={`text-[${link.color}] hover:bg-[${link.color}]/10 p-2 rounded-full transition-colors`}
                aria-label={`Share on ${link.name}`}
                style={{ color: link.color }}
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
