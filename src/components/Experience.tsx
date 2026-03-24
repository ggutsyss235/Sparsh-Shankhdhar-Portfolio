"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, Crown } from "lucide-react";
import { useRef } from "react";
import CyberName from "./CyberName";

const experiences = [
  {
    title: "AI Integration Engineer (Intern)",
    company: "Where U Elevate",
    date: "June 2025 - August 2025",
    description: "Operated relentlessly as the vanguard of core AI integration. Executed the meticulous deployment of cognitive algorithms, optimizing neural frameworks, and engineering high-velocity data processing pipelines. Defined by a relentless drive to overcome severe infrastructural bottlenecks and build autonomous, world-class ML solutions.",
    highlight: true
  },
  {
    title: "Freelance",
    company: "Self-Employed",
    date: "Aug 2024 - Present",
    description: "Developing custom, high-performance web applications and cognitive AI interfaces for various clients. Architecting solutions using advanced Python data models, Next.js, and hyper-integrated Machine Learning utilities to solve critical performance bottlenecks.",
    highlight: false
  },
  {
    title: "Computer Science Scholar",
    company: "SRMS Institutions",
    date: "2022 - 2026",
    description: "Immersed in theoretical computer science, matrix operations, advanced algorithmic design, and rigorous mathematical frameworks governing predictive modeling and deep neural networks.",
    highlight: false
  }
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const laserHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="container" style={{ paddingTop: "8rem" }}>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "4rem" }}>
        <CyberName text="OPERATIONAL" className="section-title display-text" delay={0} />
        <h2 className="section-title display-text text-gradient" style={{ marginBottom: "0.2rem" }}>HISTORY</h2>
      </div>

      <div ref={ref} style={{ position: "relative", maxWidth: "800px", paddingLeft: "1rem" }}>
        {/* The Base Timeline Track */}
        <div style={{ position: "absolute", left: "2rem", top: 0, bottom: 0, width: "2px", background: "var(--glass-border)", zIndex: 0 }} />
        
        {/* The Laser Scroll Effect */}
        <div style={{ position: "absolute", left: "2rem", top: 0, bottom: 0, width: "2px", zIndex: 1 }}>
          <motion.div style={{
            width: "100%", height: laserHeight,
            background: "linear-gradient(to bottom, transparent, var(--accent-primary) 50%, var(--accent-secondary))",
            boxShadow: "0 0 20px var(--accent-primary), 0 0 40px var(--accent-secondary)",
            borderRadius: "4px"
          }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ position: "relative", paddingLeft: "4.5rem", zIndex: 2 }}
            >
              {/* Luminescence Node */}
              <div className="ambient-glow" style={{ position: "absolute", left: "12px", top: "0.2rem", width: "12px", height: "12px", borderRadius: "50%", background: exp.highlight ? "var(--accent-primary)" : "var(--void)", border: "2px solid var(--accent-primary)", boxShadow: exp.highlight ? "0 0 20px var(--accent-primary)" : "0 0 10px var(--accent-primary)" }} />

              <div className="surface-level-1" style={{ padding: "2.5rem", borderRadius: "16px", border: exp.highlight ? "1px solid var(--accent-primary)" : "1px solid var(--glass-border)", position: "relative", overflow: "hidden", boxShadow: exp.highlight ? "0 0 30px rgba(6, 182, 212, 0.15)" : "none" }}>
                
                {exp.highlight && (
                  <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "4px", background: "linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))", zIndex: 10 }}></div>
                )}

                <div style={{ position: "absolute", top: 0, right: 0, width: "150px", height: "150px", background: exp.highlight ? "var(--accent-primary)" : "var(--accent-secondary)", opacity: 0.05, filter: "blur(40px)", borderRadius: "50%" }}></div>

                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem", gap: "1rem", position: "relative", zIndex: 5 }}>
                  <div>
                    <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: exp.highlight ? "var(--accent-primary)" : "var(--on-surface)", marginBottom: "0.4rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      {exp.title}
                      {exp.highlight && <Crown size={20} color="var(--accent-secondary)" />}
                    </h3>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "var(--on-surface-muted)" }}>
                      <Briefcase size={16} />
                      <span style={{ fontWeight: 600, fontSize: "1rem", color: "var(--on-surface)" }}>{exp.company}</span>
                    </div>
                  </div>
                  <span style={{ fontSize: "0.85rem", color: exp.highlight ? "var(--void)" : "var(--on-surface-muted)", background: exp.highlight ? "var(--accent-primary)" : "var(--surface-high)", padding: "0.3rem 1rem", borderRadius: "99px", fontWeight: 700 }}>
                    {exp.date}
                  </span>
                </div>
                
                <p style={{ color: "var(--on-surface-muted)", lineHeight: 1.8, fontSize: "1.1rem", position: "relative", zIndex: 5 }}>
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
