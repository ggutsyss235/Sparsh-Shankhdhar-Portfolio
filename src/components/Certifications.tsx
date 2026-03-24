"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck } from "lucide-react";
import React, { useState } from "react";
import CyberName from "./CyberName";

const certifications = [
  { name: "Unsupervised Learning Methods", issuer: "IBM", date: "Feb 2026" },
  { name: "Natural Language Processing", issuer: "IBM", date: "Feb 2026" },
  { name: "Supervised Learning Methods", issuer: "IBM", date: "Feb 2026" },
  { name: "Machine Learning Methods and Tools", issuer: "IBM", date: "Feb 2026" },
  { name: "Data Analytics for ML", issuer: "IBM", date: "Feb 2026" },
  { name: "Generative AI Mastermind", issuer: "Outskill", date: "Feb 2026" },
  { name: "Mastering the Art of Prompting", issuer: "IBM SkillsBuild", date: "Nov 2024" },
  { name: "Getting Started with AI", issuer: "IBM SkillsBuild", date: "Nov 2024" },
  { name: "AI Tools Workshop", issuer: "United Latino Students Association", date: "Dec 2025" }
];

const CertCard = ({ cert, index }: { cert: any, index: number }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.15 }}
      whileHover={{ y: -5 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="surface-level-1"
      style={{ 
        padding: "2rem", 
        borderRadius: "16px",
        border: "1px solid var(--glass-border)",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        transition: "all 0.4s ease",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Glare/Spotlight Layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.15), transparent 80%)`,
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.4s ease",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      
      {/* Glow Overlay Border mask */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          border: "1px solid transparent",
          background: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.8), transparent 100%) border-box`,
          WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.4s ease",
          pointerEvents: "none",
          zIndex: 1
        }}
      />

      <div style={{ position: "absolute", top: 0, right: 0, width: "100px", height: "100px", background: "var(--accent-secondary)", opacity: 0.05, filter: "blur(40px)", borderRadius: "50%", zIndex: 0 }}></div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", zIndex: 2 }}>
        <Award size={28} className="text-gradient" />
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "rgba(16, 185, 129, 0.1)", padding: "0.3rem 0.8rem", borderRadius: "99px" }}>
          <ShieldCheck size={14} color="var(--accent-secondary)" />
          <span style={{ fontSize: "0.75rem", color: "var(--accent-secondary)", fontWeight: 600, textTransform: "uppercase" }}>Verified</span>
        </div>
      </div>
      
      <div style={{ position: "relative", zIndex: 2 }}>
        <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--on-surface)", marginBottom: "0.5rem", lineHeight: 1.3 }}>
          {cert.name}
        </h3>
        <p style={{ fontSize: "0.95rem", color: "var(--on-surface-muted)", fontWeight: 500 }}>
          Issued by <span style={{ color: "var(--on-surface)" }}>{cert.issuer}</span>
        </p>
      </div>

      <div style={{ marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid var(--glass-border)", display: "flex", justifyContent: "space-between", position: "relative", zIndex: 2 }}>
        <span style={{ fontSize: "0.8rem", color: "var(--on-surface-muted)", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 600 }}>
          {cert.date}
        </span>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="container" style={{ padding: "4rem 0" }}>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "3rem" }}>
        <CyberName text="VERIFIED" className="section-title display-text" delay={0} />
        <h2 className="section-title display-text text-gradient" style={{ marginBottom: "0.2rem" }}>CREDENTIALS</h2>
      </div>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
        {certifications.map((cert, index) => (
          <CertCard key={index} cert={cert} index={index} />
        ))}
      </div>
    </section>
  );
}
