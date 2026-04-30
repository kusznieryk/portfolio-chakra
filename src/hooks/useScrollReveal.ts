import { useEffect, useRef, useState } from "react";

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

interface UseScrollRevealReturn {
  ref: React.RefObject<HTMLDivElement>;
  isVisible: boolean;
}

export const useScrollReveal = (
  options: UseScrollRevealOptions = {}
): UseScrollRevealReturn => {
  const { threshold = 0.1, rootMargin = "0px" } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin]);

  return { ref, isVisible };
};

export default useScrollReveal;
