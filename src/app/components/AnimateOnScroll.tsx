"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function AnimateOnScroll({
  children,
  className = "",
  delay = 0,
  variant = "",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "" | "from-left" | "from-right" | "scale-up";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay > 0 ? `delay-${delay}` : "";

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${variant} ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}
