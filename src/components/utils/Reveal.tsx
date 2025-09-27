import React, { useEffect, useRef, useState } from "react";

// Simple scroll-reveal wrapper that adds the Tailwind "animate-fade-in" class
// when the element becomes visible. Respects reduced motion preferences.
// Usage: <Reveal delay={100}><MySection /></Reveal>

type RevealProps = {
  children: React.ReactNode;
  delay?: number; // in ms
  className?: string;
};

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const Reveal: React.FC<RevealProps> = ({ children, delay = 0, className }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(prefersReducedMotion());

  useEffect(() => {
    if (!ref.current || prefersReducedMotion()) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // use small timeout for staggered effect
            const t = window.setTimeout(() => setVisible(true), delay);
            observer.disconnect();
            return () => window.clearTimeout(t);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={[
        // initial state: slightly translated and transparent
        visible ? "animate-fade-in" : "opacity-0 translate-y-2",
        // ensures hardware acceleration smoothness
        "will-change-transform will-change-opacity",
        className ?? "",
      ].join(" ")}
    >
      {children}
    </div>
  );
};

export default Reveal;
