"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#%&*+=-<>[]{}";

export default function CyberName({ text, className, delay = 0 }: { text: string, className: string, delay?: number }) {
  const [displayText, setDisplayText] = useState(text.replace(/./g, '0'));
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLHeadingElement>(null);

  // 3D Parallax & Magnetic Physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["20deg", "-20deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-20deg", "20deg"]);
  const translateX = useTransform(mouseXSpring, [-0.5, 0.5], [-30, 30]);
  const translateY = useTransform(mouseYSpring, [-0.5, 0.5], [-30, 30]);

  const handleMouseMove = (e: React.MouseEvent<HTMLHeadingElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  // Initial Decoder Logic
  useEffect(() => {
    let iterations = 0;
    let interval: NodeJS.Timeout;

    const startDecoding = () => {
      interval = setInterval(() => {
        setDisplayText(prev => 
          text.split("").map((letter, index) => {
            if (index < iterations) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          }).join("")
        );
        
        if (iterations >= text.length) {
          clearInterval(interval);
        }
        
        iterations += 1 / 4; 
      }, 40);
    };

    const timeout = setTimeout(startDecoding, delay);
    return () => { clearInterval(interval); clearTimeout(timeout); };
  }, [text, delay]);

  // Infinite Minimal Glitch Effect on Hover
  useEffect(() => {
    if (!isHovered) {
      setDisplayText(text);
      return;
    }
    
    const glitchInterval = setInterval(() => {
        const txtArr = text.split("");
        const idx1 = Math.floor(Math.random() * txtArr.length);
        const idx2 = Math.floor(Math.random() * txtArr.length);
        
        // Glitch 1-2 random characters temporarily
        txtArr[idx1] = chars[Math.floor(Math.random() * chars.length)];
        if (Math.random() > 0.5) txtArr[idx2] = chars[Math.floor(Math.random() * chars.length)];
        
        setDisplayText(txtArr.join(""));
        
        // Auto-fix glitch after 40ms to keep it jarring but readable
        setTimeout(() => setDisplayText(text), 40);
    }, 600); 

    return () => clearInterval(glitchInterval);
  }, [isHovered, text]);

  return (
    <div style={{ perspective: 1500, display: "block", position: "relative", zIndex: 100 }}>
      {/* 
        This wrapper captures mouse events widely, allowing for intense physics manipulation 
      */}
      <motion.h1 
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, filter: "blur(20px)", y: 20 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 1.2, delay: delay / 1000, ease: "easeOut" }}
        className={className}
        style={{ 
          rotateX, 
          rotateY,
          x: translateX,
          y: translateY,
          scale: isHovered ? 1.05 : 1,
          transformStyle: "preserve-3d",
          position: "relative",
          cursor: "none",
          transition: "scale 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
        }}
      >
        {displayText}
        
        {/* Extreme Chromatic Aberration Glow Layers active only on hover */}
        {isHovered && (
          <>
            {/* Shift Layer 1 (Cyan/Blue hue rotation) */}
            <motion.span 
              className={className}
              animate={{ x: [-3, 4, -2, 5, 0], y: [2, -2, 3, -4, 0] }}
              transition={{ repeat: Infinity, duration: 0.15, ease: "linear" }}
              style={{
                position: "absolute", top: 0, left: 0, 
                opacity: 0.8, zIndex: -1, 
                filter: "blur(6px) hue-rotate(90deg) brightness(1.5)",
                pointerEvents: "none", width: "100%", height: "100%", mixBlendMode: "screen",
                margin: 0
            }}>
              {displayText}
            </motion.span>
            
            {/* Shift Layer 2 (Red/Orange hue rotation) */}
            <motion.span 
              className={className}
              animate={{ x: [3, -4, 2, -5, 0], y: [-2, 2, -3, 4, 0] }}
              transition={{ repeat: Infinity, duration: 0.15, ease: "linear" }}
              style={{
                position: "absolute", top: 0, left: 0, 
                opacity: 0.8, zIndex: -1, 
                filter: "blur(6px) hue-rotate(-90deg) brightness(1.5)",
                pointerEvents: "none", width: "100%", height: "100%", mixBlendMode: "screen",
                margin: 0
            }}>
              {displayText}
            </motion.span>
          </>
        )}
      </motion.h1>
    </div>
  );
}
