import React, { useEffect, useRef, useState, ReactNode } from "react";
import styles from "../styles/Animations.module.css";

interface ScrollRevealProps {
  children: ReactNode;
}

const ScrollRevealBottom: React.FC<ScrollRevealProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 0.2);

        observer.disconnect(); // Stop observing once visible
        return () => clearTimeout(timer); // Clear timeout if unmounted
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
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.animated_component} ${
        isVisible ? styles.fadeInFromBottom : ""
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollRevealBottom;
