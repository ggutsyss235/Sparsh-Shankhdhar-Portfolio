"use client";

import { motion } from "framer-motion";
import React from "react";
import CyberName from "./CyberName";

const skillsTop = [
  "Machine Learning", "Deep Neural Networks", "Generative AI", "Natural Language Processing", 
  "Computer Vision", "Python Architecture", "PyTorch", "TensorFlow"
];

const skillsBottom = [
  "Scikit-Learn", "Pandas & NumPy", "Data Engineering", "Recommendation Systems", 
  "Hugging Face", "LLM Integration", "Predictive Modeling", "Feature Engineering"
];

const KineticMarquee = ({ items, direction = 1, speed = 40 }: { items: string[], direction?: number, speed?: number }) => {
  return (
    <div style={{ display: "flex", overflow: "hidden", whiteSpace: "nowrap", position: "relative", width: "100vw", left: "50%", transform: "translateX(-50%)", padding: "1rem 0" }}>
      {/* Fade masks for smooth edges */}
      <div style={{ position: "absolute", left: 0, top: 0, width: "15vw", height: "100%", background: "linear-gradient(to right, var(--void), transparent)", zIndex: 10 }}></div>
      <div style={{ position: "absolute", right: 0, top: 0, width: "15vw", height: "100%", background: "linear-gradient(to left, var(--void), transparent)", zIndex: 10 }}></div>
      
      <motion.div
        animate={{ x: direction === 1 ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
        style={{ display: "flex", gap: "3rem", paddingRight: "3rem", width: "fit-content" }}
      >
        {/* Render items twice to create the infinite loop seamlessly */}
        {[...items, ...items].map((skill, index) => (
          <span 
            key={index} 
            className="display-text"
            style={{ 
              fontSize: "clamp(3rem, 6vw, 6rem)", 
              fontWeight: 900, 
              color: "transparent", 
              WebkitTextStroke: index % 2 === 0 ? "1px var(--on-surface-muted)" : "1px var(--accent-primary)",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              transition: "all 0.3s ease",
              cursor: "default"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = index % 2 === 0 ? "var(--on-surface)" : "var(--accent-primary)";
              e.currentTarget.style.webkitTextStroke = "0px";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = "transparent";
              e.currentTarget.style.webkitTextStroke = index % 2 === 0 ? "1px var(--on-surface-muted)" : "1px var(--accent-primary)";
            }}
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "8rem 0", overflow: "hidden", position: "relative" }}>
      <div className="container" style={{ marginBottom: "4rem" }}>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <CyberName text="NEURAL" className="section-title display-text" delay={0} />
          <h2 className="section-title display-text text-gradient" style={{ marginBottom: "0.2rem" }}>CAPABILITIES</h2>
        </div>
      </div>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <KineticMarquee items={skillsTop} direction={-1} speed={60} />
        <KineticMarquee items={skillsBottom} direction={1} speed={50} />
      </div>

      <div className="container" style={{ textAlign: "center", marginTop: "5rem" }}>
        <p style={{ color: "var(--on-surface-muted)", fontSize: "1rem", letterSpacing: "1px", textTransform: "uppercase" }}>
          + Deep mathematical foundations in algorithmic design, regression analysis, and spatial optimization.
        </p>
      </div>
    </section>
  );
}
