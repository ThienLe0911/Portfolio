'use client';

import { useEffect, useRef } from 'react';

type Direction = 'up' | 'left' | 'right' | 'none';

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add('sr-visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const dirClass: Record<Direction, string> = {
    up: 'sr-up',
    left: 'sr-left',
    right: 'sr-right',
    none: 'sr-fade',
  };

  return (
    <div ref={ref} className={`${dirClass[direction]} ${className}`}>
      {children}
    </div>
  );
}
