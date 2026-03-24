"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Mail, FileText } from "lucide-react";
import React from "react";
import CyberName from "./CyberName";

const LinkedinIcon = ({ size = 24, color = "currentColor", className = "", style }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} style={style}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const GithubIcon = ({ size = 24, color = "currentColor", className = "", style }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} style={style}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const Fluid3DButton = ({ icon: Icon, label, color, href, delay, isDownload }: any) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["25deg", "-25deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-25deg", "25deg"]);
  
  // High-fidelity fluidic squeeze & stretch physics
  const scaleX = useTransform(mouseXSpring, [-0.5, 0.5], [0.92, 1.08]);
  const scaleY = useTransform(mouseYSpring, [-0.5, 0.5], [0.92, 1.08]);

  return (
    <div style={{ perspective: 1200 }}>
      <motion.a 
        href={href}
        target={(isDownload || href.startsWith("mailto:")) ? undefined : "_blank"}
        rel={(isDownload || href.startsWith("mailto:")) ? undefined : "noopener noreferrer"}
        download={isDownload ? "Sparsh_Shankhdhar_Resume.pdf" : undefined}
        initial={{ opacity: 0, scale: 0.5, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay, type: "spring", stiffness: 100 }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const mouseX = e.clientX - rect.left - rect.width / 2;
          const mouseY = e.clientY - rect.top - rect.height / 2;
          x.set(mouseX / rect.width);
          y.set(mouseY / rect.height);
        }}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        style={{
          rotateX, rotateY, scaleX, scaleY,
          transformStyle: "preserve-3d",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          width: "210px", height: "210px",
          borderRadius: "45px",
          background: `radial-gradient(120% 120% at 50% 0%, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0.6) 100%)`,
          border: `1px solid rgba(255,255,255,0.05)`,
          boxShadow: `0 20px 50px -20px ${color}55, inset 0 0 20px ${color}11`,
          position: "relative",
          textDecoration: "none",
          cursor: "none",
        }}
        whileHover={{ 
          boxShadow: `0 30px 60px -10px ${color}AA, inset 0 0 40px ${color}88`,
          borderColor: `${color}AA`,
          background: `radial-gradient(120% 120% at 50% 0%, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.8) 100%)`,
          outline: `1px solid ${color}44`,
          outlineOffset: "4px"
        }}
        whileTap={{ scale: 0.9, y: 0 }}
      >
        {/* Liquid fluid core plasma physics */}
        <motion.div 
          style={{
            position: "absolute", inset: '20px', borderRadius: 'inherit',
            background: color, filter: 'blur(35px)', opacity: 0.15, zIndex: 0, pointerEvents: "none"
          }}
          animate={{ scale: [1, 1.25, 1], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay }}
        />
        
        <div style={{ transform: "translateZ(60px)", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem", pointerEvents: "none" }}>
          <Icon size={72} color={color} style={{ filter: `drop-shadow(0 0 15px ${color})` }} />
          <span style={{ color: "#fff", fontWeight: 800, fontSize: "1.2rem", letterSpacing: "2.5px", textTransform: "uppercase", textShadow: `0 0 10px ${color}88` }}>{label}</span>
        </div>
      </motion.a>
    </div>
  )
}

export default function Contact() {
  const socialLinks = [
    { label: "LinkedIn", icon: LinkedinIcon, color: "#0077b5", href: "https://www.linkedin.com/in/sparsh-shankhdhar-a294b224b/" },
    { label: "GitHub", icon: GithubIcon, color: "#ffffff", href: "https://github.com/ggutsyss235" },
    { label: "Gmail", icon: Mail, color: "#EA4335", href: "mailto:codeforsparsh512@gmail.com?subject=Interested in Mr. Sparsh Shankhdhar's collaboration" },
    { label: "Resume", icon: FileText, color: "#00E0FF", href: "/resume.pdf", isDownload: true }
  ];

  return (
    <section id="contact" className="container" style={{ paddingTop: "8rem", paddingBottom: "10rem" }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "center", width: "100%" }}
      >
        <div style={{ display: "flex", gap: "1rem", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
          <CyberName text="INITIALIZE" className="section-title display-text" delay={0} />
          <h2 className="section-title display-text text-gradient" style={{ marginBottom: "0.2rem" }}>CONNECTION</h2>
        </div>
        
        <p style={{ color: "var(--on-surface-muted)", fontSize: "1.2rem", marginBottom: "5rem", lineHeight: 1.7, maxWidth: "600px", margin: "0 auto 5rem auto" }}>
          Ready to deploy a cognitive system or engineer a massive AI integration? Access my root directories immediately via the secure terminals below.
        </p>
        
        {/* Massive 3D Fluidic Holographic Grids */}
        <div style={{ 
          display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "4rem", 
          maxWidth: "1200px", margin: "0 auto" 
        }}>
          {socialLinks.map((link, index) => (
            <Fluid3DButton key={index} {...link} delay={index * 0.15} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
