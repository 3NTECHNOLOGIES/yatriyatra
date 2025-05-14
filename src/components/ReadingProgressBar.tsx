"use client";

import { useEffect, useState } from "react";

export default function ReadingProgressBar() {
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const updateReadingProgress = () => {
      const content = document.querySelector(".blog-content");
      if (!content) return;

      const contentBox = content.getBoundingClientRect();
      const contentStart = contentBox.top;
      const contentEnd = contentBox.bottom;
      const windowHeight = window.innerHeight;

      // If content is completely visible, progress is 100%
      if (contentEnd <= windowHeight) {
        setReadingProgress(100);
        return;
      }

      // If content hasn't started yet, progress is 0%
      if (contentStart >= windowHeight) {
        setReadingProgress(0);
        return;
      }

      // Calculate progress percentage
      const totalContentHeight = contentBox.height;
      const visibleContentHeight =
        Math.min(windowHeight, contentEnd) - Math.max(0, contentStart);
      const progress = (visibleContentHeight / totalContentHeight) * 100;
      setReadingProgress(progress);
    };

    window.addEventListener("scroll", updateReadingProgress);
    // Initial calculation
    updateReadingProgress();

    return () => window.removeEventListener("scroll", updateReadingProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div
        className="h-full bg-secondary transition-all duration-200 ease-out"
        style={{ width: `${readingProgress}%` }}
      />
    </div>
  );
}
