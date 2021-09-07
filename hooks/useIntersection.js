import { useState, useEffect } from 'react';

const useIntersection = (ref, threshold = 1, rootMargin = '0px 0px -50px 0px') => {
  const [isIntersected, setIsIntersected] = useState(false);
  useEffect(() => {
    if (ref.current) {
      const ob = new IntersectionObserver(
        ([entry], observer) => {
          if (entry.intersectionRatio >= threshold) {
            setIsIntersected(true);
          } else {
            setIsIntersected(false);
          }
        },
        { threshold, root: null, rootMargin }
      );
      ob.observe(ref.current);

      return () => {
        ob.unobserve(ref.current);
      };
    }
  }, [ref.current, threshold]);
  return isIntersected;
};

export default useIntersection;
