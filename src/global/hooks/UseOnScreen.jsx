// src/useOnScreen.js
import { useEffect, useState } from 'react';

function useOnScreen(ref) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {


           const timer = setTimeout(() => {
          setIsVisible(true);
        }, 150);

        observer.disconnect(); // Stop observing once visible
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isVisible;
}

export default useOnScreen;