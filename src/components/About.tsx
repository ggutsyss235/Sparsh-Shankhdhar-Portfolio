"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Database, Network, Cpu } from "lucide-react";
import React, { useState } from "react";
import CyberName from "./CyberName";

const SpotlightCard = ({ children, delay }: { children: React.ReactNode, delay: number }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        padding: "2rem",
        display: "flex",
        alignItems: "center",
        gap: "2rem",
        borderLeft: isHovered ? "2px solid var(--accent-primary)" : "2px solid var(--glass-border)",
        background: "var(--surface-high)",
        overflow: "hidden",
        transition: "border-color 0.4s ease"
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.15), transparent 80%)`,
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.4s ease",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      
      {/* Glow border overlay effect */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          border: "1px solid transparent",
          background: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.8), transparent 100%) border-box`,
          WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.4s ease",
          pointerEvents: "none",
          zIndex: 1
        }}
      />

      <div style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", gap: "2rem", width: "100%" }}>
        {children}
      </div>
    </motion.div>
  );
};

export default function About() {
  return (
    <section id="about" className="container" style={{ paddingTop: "8rem", position: "relative" }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "3rem" }}>
          <CyberName text="COGNITIVE" className="section-title display-text" delay={0} />
          <h2 className="section-title display-text text-gradient" style={{ marginBottom: "0.2rem" }}>VISION</h2>
        </div>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "3rem" }}>
          
          <div className="surface-level-1" style={{ padding: "3rem", borderTop: "1px solid var(--glass-border)", borderLeft: "1px solid var(--glass-border)", display: "flex", flexDirection: "column", gap: "1.5rem", position: "relative", overflow: "hidden" }}>
            <Cpu size={200} color="var(--accent-secondary)" style={{ position: "absolute", right: "-50px", bottom: "-50px", opacity: 0.05, transform: "rotate(-15deg)" }} />
            
            <h3 style={{ fontSize: "1.8rem", fontWeight: 700, color: "var(--on-surface)", marginBottom: "0.5rem", letterSpacing: "-0.5px" }}>
              Architecting Intelligence at the Root Depth.
            </h3>
            <p style={{ fontSize: "1.1rem", color: "var(--on-surface-muted)", lineHeight: 1.8 }}>
              I am an Artificial Intelligence Engineer and Machine Learning Researcher obsessed with the architecture of cognitive systems and predictive algorithms. Currently accelerating through a Bachelor's degree in Computer Science at SRMS Institutions (2022 - 2026), my work focuses on translating highly complex mathematical models into scalable, real-world intelligent infrastructure.
            </p>
            <p style={{ fontSize: "1.1rem", color: "var(--on-surface-muted)", lineHeight: 1.8 }}>
              I specialize in the end-to-end deployment lifecycle of deep learning frameworks—from rigorous data engineering and dynamic feature extraction using Python, to fine-tuning sovereign Large Language Models and engineering spatial optimization pipelines. I believe that elite AI development requires an uncompromising integration of robust algorithmic logic, profound bias reduction, and elegant, high-velocity computational architecture.
            </p>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { icon: <BrainCircuit size={24} color="var(--accent-primary)"/>, title: "Algorithmic Architecture", desc: "Engineering scalable deep neural networks, complex predictive models, and sophisticated integration of LLM cognitive terminals." },
              { icon: <Database size={24} color="var(--accent-secondary)"/>, title: "Data Intelligence", desc: "Performing high-dimensional space analysis, rigorous feature engineering, and advanced statistical anomaly detection methodologies." },
              { icon: <Network size={24} color="var(--on-surface)"/>, title: "Sovereign Systems", desc: "Building standalone, bias-reduced Python infrastructures that autonomously bridge complex academic research with real-world capability." }
            ].map((item, i) => (
              <SpotlightCard key={i} delay={i * 0.15}>
                <div style={{ padding: "1rem", background: "rgba(0,0,0,0.3)", borderRadius: "12px", boxShadow: "inset 0 0 10px rgba(0,0,0,0.5)" }}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="display-text" style={{ fontSize: "1.3rem", fontWeight: 600, marginBottom: "0.4rem" }}>{item.title}</h3>
                  <p style={{ color: "var(--on-surface-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
}
