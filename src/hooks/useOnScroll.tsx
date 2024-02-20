import { useEffect, useRef, useState } from 'react';

const throttle = <T extends (...args: any[]) => void>(
  func: T,
  wait: number
): T => {
  let timeout: NodeJS.Timeout | null;

  return function (this: any, ...args: any[]) {
    const context = this;

    const later = () => {
      timeout = null;
      func.apply(context, args);
    };

    clearTimeout(timeout as NodeJS.Timeout);
    timeout = setTimeout(later, wait);
  } as T;
};

const throttledFunction = throttle((arg: VoidFunction) => {
  arg();
}, 400);

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
        throttledFunction(() => { setVisible(entry.isIntersecting); })
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