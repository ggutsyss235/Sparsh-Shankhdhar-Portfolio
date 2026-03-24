"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "./Logo";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? "rgba(0, 0, 0, 0.6)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      transition: "all 0.4s ease",
      padding: scrolled ? "0.8rem 0" : "1.5rem 0"
    }}>
      {/* Scroll Matrix Laser Tracker */}
      <motion.div 
        style={{ 
          position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", 
          background: "linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))", 
          scaleX, originX: 0, 
          boxShadow: "0 0 10px var(--accent-primary), 0 0 20px var(--accent-secondary)",
          zIndex: 10
        }} 
      />

      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        
        <Link href="/" style={{ textDecoration: "none", zIndex: 10, display: "flex", alignItems: "center" }}>
          <Logo />
        </Link>
        
        {/* Dynamic Magnetic Nav Links */}
        <div style={{ display: "flex", gap: "0.2rem", flexWrap: "wrap", justifyContent: "flex-end" }}>
          {navLinks.map((link) => (
            <div
              key={link.name}
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
              style={{ position: 'relative' }}
            >
              <Link 
                href={link.href} 
                style={{ 
                  display: "block",
                  padding: "0.6rem 1.2rem",
                  color: hoveredLink === link.name ? "var(--on-surface)" : "var(--on-surface-muted)", 
                  textDecoration: "none", 
                  transition: "color 0.3s", 
                  fontSize: "0.95rem", 
                  fontWeight: 600,
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  position: "relative",
                  zIndex: 2
                }}
              >
                {link.name}
              </Link>
              
              {/* Dynamic Float Pill */}
              {hoveredLink === link.name && (
                <motion.div
                  layoutId="navbar-magnetic-pill"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(6, 182, 212, 0.08)",
                    border: "1px solid rgba(6, 182, 212, 0.4)",
                    borderRadius: "99px",
                    boxShadow: "0 0 20px rgba(6, 182, 212, 0.2)",
                    zIndex: 1
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
