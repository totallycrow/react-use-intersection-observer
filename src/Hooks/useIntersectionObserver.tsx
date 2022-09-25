import React, { useState } from "react";
import { useRef, useEffect } from "react";

export default function useIntersectionObserver() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0];
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 1,
    });
    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);
  return [ref, isVisible];
}
