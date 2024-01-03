import { useEffect, useRef, useState } from 'react';

export const useOnScroll = () => {
  const [visible, setVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = elementRef.current;
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: [0.1],
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return {
    elementRef,
    visible,
  };
};