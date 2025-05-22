"use client";

import { useEffect, useState, useCallback } from "react";

// Utility function to throttle frequent function calls
function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastCall = 0;
  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
}

export default function ReadingProgressBar() {
  const [readingProgress, setReadingProgress] = useState(0);

  // Memoize the progress calculation function
  const calculateProgress = useCallback(() => {
    const content = document.querySelector(".blog-content");
    if (!content) return 0;

    const contentBox = content.getBoundingClientRect();
    const contentStart = contentBox.top;
    const contentEnd = contentBox.bottom;
    const windowHeight = window.innerHeight;

    // If content is completely visible, progress is 100%
    if (contentEnd <= windowHeight) {
      return 100;
    }

    // If content hasn't started yet, progress is 0%
    if (contentStart >= windowHeight) {
      return 0;
    }

    // Calculate progress percentage based on visible content
    const totalContentHeight = contentBox.height;
    const visibleContentHeight =
      Math.min(windowHeight, contentEnd) - Math.max(0, contentStart);
    return Math.min(
      100,
      Math.max(0, (visibleContentHeight / totalContentHeight) * 100)
    );
  }, []);

  useEffect(() => {
    // Throttled update function to improve performance
    const updateReadingProgress = throttle(() => {
      const progress = calculateProgress();
      setReadingProgress(progress);
    }, 100); // Update at most every 100ms

    window.addEventListener("scroll", updateReadingProgress);
    window.addEventListener("resize", updateReadingProgress);

    // Initial calculation
    updateReadingProgress();

    return () => {
      window.removeEventListener("scroll", updateReadingProgress);
      window.removeEventListener("resize", updateReadingProgress);
    };
  }, [calculateProgress]);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div
        className="h-full bg-secondary transition-all duration-200 ease-out"
        style={{ width: `${readingProgress}%` }}
      />
    </div>
  );
}
