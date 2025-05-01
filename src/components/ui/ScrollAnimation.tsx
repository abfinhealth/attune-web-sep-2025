
import { useEffect, useRef, ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  threshold?: number;
  className?: string;
  delay?: number;
}

const ScrollAnimation = ({ 
  children, 
  threshold = 0.1, 
  className = '',
  delay = 0
}: ScrollAnimationProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animated');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, delay]);

  return (
    <div ref={elementRef} className={`animate-on-scroll ${className}`} style={{transitionDelay: `${delay}ms`}}>
      {children}
    </div>
  );
};

export default ScrollAnimation;
