"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const position = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });

  const addInteractiveListeners = useCallback(() => {
    const elements = document.querySelectorAll("a, button, [data-cursor]");
    elements.forEach((el) => {
      el.addEventListener("mouseenter", () => setIsExpanded(true));
      el.addEventListener("mouseleave", () => setIsExpanded(false));
    });
  }, []);

  useEffect(() => {
    // Skip on touch devices
    if (typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0)) {
      return;
    }

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    addInteractiveListeners();

    // Re-attach on DOM changes
    const observer = new MutationObserver(addInteractiveListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    // Lerp animation loop
    let raf: number;
    const animate = () => {
      const lerp = 0.12;
      position.current.x += (target.current.x - position.current.x) * lerp;
      position.current.y += (target.current.y - position.current.y) * lerp;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${position.current.x}px, ${position.current.y}px)`;
      }

      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      observer.disconnect();
    };
  }, [addInteractiveListeners]);

  if (!isVisible) return null;

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${isExpanded ? "expanded" : ""}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 99999,
        mixBlendMode: "difference",
      }}
    />
  );
}
