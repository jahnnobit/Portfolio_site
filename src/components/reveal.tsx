"use client";

import { useEffect, useRef, useState } from "react";

export function Reveal({
  children,
  className = "",
  as: Tag = "div",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  delay?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // already in (or near) the viewport on mount → show right away
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 1.15) {
      const raf = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(raf);
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);

    // safety net: never leave content hidden
    const timeout = setTimeout(() => setVisible(true), 1500);

    return () => {
      io.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
