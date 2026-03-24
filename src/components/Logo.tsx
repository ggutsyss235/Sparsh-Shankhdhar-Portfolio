"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Logo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileTap={{ scale: 0.95 }}
      style={{ position: 'relative', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
    >
      {/* Outer Cyberpunk HUD Ring (Slow Forward) */}
      <motion.svg 
        width="50" height="50" viewBox="0 0 100 100" 
        style={{ position: 'absolute', pointerEvents: 'none' }}
        animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      >
        <circle cx="50" cy="50" r="46" fill="none" stroke="var(--accent-primary)" strokeWidth="1" strokeDasharray="4 8" opacity="0.4" />
        <circle cx="50" cy="50" r="46" fill="none" stroke="var(--accent-primary)" strokeWidth="1.5" strokeDasharray="40 160" style={{ filter: 'drop-shadow(0 0 4px var(--accent-primary))' }} />
      </motion.svg>
      
      {/* Middle Optical Ring (Fast Reverse) */}
      <motion.svg 
        width="50" height="50" viewBox="0 0 100 100" 
        style={{ position: 'absolute', pointerEvents: 'none' }}
        animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      >
        <circle cx="50" cy="50" r="38" fill="none" stroke="var(--accent-secondary)" strokeWidth="1" strokeDasharray="80 40 10 40" opacity="0.7" style={{ filter: 'drop-shadow(0 0 3px var(--accent-secondary))' }} />
        <circle cx="50" cy="50" r="38" fill="none" stroke="var(--accent-secondary)" strokeWidth="2.5" strokeDasharray="2 200" style={{ filter: 'drop-shadow(0 0 6px var(--accent-secondary))' }} />
      </motion.svg>

      {/* Inner Precision Grid Ring (Expands on Hover) */}
      <motion.svg 
        width="50" height="50" viewBox="0 0 100 100" 
        style={{ position: 'absolute', pointerEvents: 'none', opacity: isHovered ? 1 : 0.2, transition: 'opacity 0.4s ease' }}
        animate={{ rotate: 360, scale: isHovered ? 1.15 : 1 }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      >
        <circle cx="50" cy="50" r="30" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="2 4" />
      </motion.svg>

      {/* Central Identity Matrix ('SS') */}
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 900, fontSize: '1.2rem', letterSpacing: '-1.5px' }}>
        <motion.span 
          animate={{ x: isHovered ? -4 : 0, color: isHovered ? '#ffffff' : 'var(--on-surface-muted)' }} 
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          style={{ textShadow: isHovered ? '0 0 15px var(--accent-primary)' : 'none', position: 'relative', zIndex: 2 }}
        >S</motion.span>
        <motion.span 
          animate={{ x: isHovered ? 4 : 0, color: isHovered ? 'var(--accent-primary)' : 'var(--on-surface-muted)' }} 
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          style={{ textShadow: isHovered ? '0 0 15px var(--accent-secondary)' : 'none', marginLeft: '-2.5px', position: 'relative', zIndex: 1 }}
        >S</motion.span>
      </div>
      
      {/* Biometric Matrix Scan Line (Active on Hover) */}
      {isHovered && (
         <motion.div 
           animate={{ y: [-12, 12, -12] }} 
           transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
           style={{ position: 'absolute', width: '30px', height: '2px', background: 'var(--accent-primary)', filter: 'blur(0.5px)', mixBlendMode: 'screen', boxShadow: '0 0 10px var(--accent-primary)', zIndex: 20 }}
         />
      )}
      
      {/* Core Energy Pulse Glow */}
      <motion.div
        animate={{ opacity: isHovered ? 0.3 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ position: 'absolute', inset: -15, background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 60%)', filter: 'blur(10px)', zIndex: -1, mixBlendMode: 'screen' }}
      />
    </motion.div>
  );
}
