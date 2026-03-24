"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') || target.closest('button')) {
            setIsHovered(true);
        } else {
            setIsHovered(false);
        }
    }

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
        style={{
          position: 'fixed', top: 0, left: 0, width: '8px', height: '8px',
          backgroundColor: 'var(--accent-primary)', borderRadius: '50%',
          pointerEvents: 'none', zIndex: 10000,
          boxShadow: '0 0 15px var(--accent-primary)'
        }}
      />
      <motion.div
        animate={{
          x: mousePosition.x - (isHovered ? 24 : 16),
          y: mousePosition.y - (isHovered ? 24 : 16),
          scale: isHovered ? 1.5 : 1,
          opacity: isHovered ? 0.15 : 0.4
        }}
        transition={{ type: "tween", ease: "circOut", duration: 0.2 }}
        style={{
          position: 'fixed', top: 0, left: 0, width: isHovered ? '48px' : '32px', height: isHovered ? '48px' : '32px',
          border: '1.5px solid var(--accent-primary)', borderRadius: '50%',
          pointerEvents: 'none', zIndex: 9999,
          backgroundColor: isHovered ? 'var(--accent-primary)' : 'transparent',
          mixBlendMode: 'screen'
        }}
      />
    </>
  );
}
