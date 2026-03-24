"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ExternalLink, Code, Brain } from "lucide-react";
import React, { useRef } from "react";
import CyberName from "./CyberName";

const projects = [
  {
    title: "SeatProX Cognitive Engine",
    date: "Feb 2026 - Mar 2026",
    description: "A sovereign piece of infrastructure for intelligent examination seating optimization. Engineered a hyper-integrated LLM terminal and cognitive engine capable of massive real-time spatial optimization and algorithmic anti-cheating control.",
    tags: ["LLMs", "Spatial Optimization", "Python", "Algorithms"]
  },
  {
    title: "AI Pathway Guidance System",
    date: "Aug 2025 - Present",
    description: "A highly sophisticated platform leveraging advanced ML models to parse complex job market datasets. Engineered meticulously for radical bias reduction and dynamic feature engineering to recommend hyper-personalized career trajectories.",
    tags: ["Machine Learning", "Recommendation Systems", "Feature Engineering", "Scikit-Learn"]
  }
];

const TiltProjectCard = ({ project, index }: { project: any, index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);
  
  // Inverse transforms for the holographic glare sweeping across the card
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["-100%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["-100%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
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
    x.set(0); y.set(0);
  };

  return (
    <div style={{ perspective: 1500, display: "flex", flexDirection: "column" }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: index * 0.15 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="glass-panel ambient-glow-hover"
      >
        <div style={{ 
          padding: "3rem", display: "flex", flexDirection: "column", height: "100%", position: "relative", overflow: "hidden", zIndex: 1 
        }}>
          {/* Holographic Glare Layer */}
          <motion.div 
            style={{
              position: "absolute", top: 0, left: 0, width: "200%", height: "200%",
              background: "radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, transparent 40%)",
              x: glareX, y: glareY,
              pointerEvents: "none", zIndex: 10, mixBlendMode: "overlay"
            }}
          />

          <div style={{
            position: "absolute", top: "-50px", right: "-50px", width: "150px", height: "150px",
            background: index % 2 === 0 ? "var(--accent-primary)" : "var(--accent-secondary)",
            filter: "blur(100px)", opacity: 0.2, zIndex: 0
          }}></div>

          <div style={{ position: "relative", zIndex: 2, flexGrow: 1, transform: "translateZ(40px)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
              <Brain size={32} className="text-gradient" />
              <span style={{ fontSize: "0.75rem", color: "var(--on-surface-muted)", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 600 }}>{project.date}</span>
            </div>
            
            <h3 className="display-text" style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: "1rem", lineHeight: 1.2 }}>
              {project.title}
            </h3>
            
            <p style={{ color: "var(--on-surface-muted)", fontSize: "1.05rem", marginBottom: "2.5rem", lineHeight: 1.7 }}>
              {project.description}
            </p>
          </div>
          
          <div style={{ position: "relative", zIndex: 2, marginTop: "auto", transform: "translateZ(30px)" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "2rem" }}>
              {project.tags.map((tag: string, i: number) => (
                <span key={i} style={{ 
                  fontSize: "0.75rem", padding: "0.4rem 1rem", background: "var(--surface-high)", 
                  borderRadius: "4px", color: "var(--on-surface)", textTransform: "uppercase", letterSpacing: "0.5px", fontWeight: 500
                }}>
                  {tag}
                </span>
              ))}
            </div>
            
            <div style={{ display: "flex", gap: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid var(--glass-border)" }}>
              <a href="#" style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", fontWeight: 500, color: "var(--on-surface-muted)", transition: "color 0.3s" }} onMouseOver={(e) => e.currentTarget.style.color="var(--accent-primary)"} onMouseOut={(e) => e.currentTarget.style.color="var(--on-surface-muted)"}>
                <Code size={18} /> Architecture Base
              </a>
              <a href="#" style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", fontWeight: 500, color: "var(--accent-secondary)" }}>
                <ExternalLink size={18} /> Initialize Terminal
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="container" style={{ paddingTop: "8rem" }}>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "3rem" }}>
        <CyberName text="SOVEREIGN" className="section-title display-text" delay={0} />
        <h2 className="section-title display-text text-gradient" style={{ marginBottom: "0.2rem" }}>INFRASTRUCTURE</h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "3rem" }}>
        {projects.map((project, index) => (
          <TiltProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
