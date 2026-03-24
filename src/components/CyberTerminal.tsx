"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";

const terminalLines = [
  { text: "System.initialize()", delay: 0 },
  { text: "> Loading cognitive frameworks...", delay: 800 },
  { text: "> Compiling neural pathways... [OK]", delay: 1500 },
  { text: "> Validating data pipelines... [OK]", delay: 2000 },
  { text: " ", delay: 2200 },
  { text: "Engine.deploy({", delay: 2800 },
  { text: "  architect: 'Sparsh Shankhdhar',", delay: 3100 },
  { text: "  specialty: 'Machine Learning',", delay: 3400 },
  { text: "  status: 'Deployed & Ready',", delay: 3700 },
  { text: "  performance: 'Optimal'", delay: 4000 },
  { text: "});", delay: 4300 },
  { text: " ", delay: 4500 },
  { text: "> CONSOLE: Systems 100% Operational.", delay: 5200 },
];

export default function CyberTerminal() {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    const timeouts = terminalLines.map((line, index) => {
      return setTimeout(() => {
        setVisibleLines((v) => Math.max(v, index + 1));
      }, line.delay);
    });

    return () => timeouts.forEach((t) => clearTimeout(t));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50, rotateY: 15 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
      style={{
        width: "100%",
        maxWidth: "500px",
        background: "rgba(5, 5, 10, 0.4)",
        backdropFilter: "blur(20px)",
        borderRadius: "16px",
        border: "1px solid rgba(6, 182, 212, 0.2)",
        boxShadow: "0 25px 50px -12px rgba(6, 182, 212, 0.15), 0 0 0 1px rgba(6, 182, 212, 0.05) inset",
        overflow: "hidden",
        position: "relative",
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
    >
      {/* Terminal Header */}
      <div style={{
        padding: "1rem",
        background: "rgba(0,0,0,0.5)",
        borderBottom: "1px solid rgba(6, 182, 212, 0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ff5f56" }} />
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ffbd2e" }} />
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#27c93f" }} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--accent-primary)", opacity: 0.8, fontSize: "0.8rem", fontFamily: "monospace", letterSpacing: "1px" }}>
          <Terminal size={14} /> root@sparsh-nexus
        </div>
      </div>

      {/* Terminal Body */}
      <div style={{
        padding: "1.5rem",
        fontFamily: "'Fira Code', 'Courier New', Courier, monospace",
        color: "var(--on-surface-muted)",
        fontSize: "0.95rem",
        lineHeight: "1.6",
        minHeight: "300px"
      }}>
        {terminalLines.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}
            style={{ 
              color: line.text.includes("System.") || line.text.includes("Engine.") || line.text.includes("CONSOLE") 
                ? "var(--accent-primary)" 
                : line.text.includes("[OK]") 
                  ? "#27c93f" 
                  : line.text.includes("'") 
                    ? "#ffbd2e" 
                    : "inherit",
              display: "flex",
              gap: "0.5rem"
            }}
          >
            {line.text === " " ? <br/> : <span>{line.text}</span>}
          </motion.div>
        ))}
        <motion.div
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          style={{ width: "8px", height: "18px", background: "var(--accent-primary)", display: "inline-block", marginTop: "10px" }}
        />
      </div>

      {/* Cybernetic Accent Glow */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "60%",
        height: "1px",
        background: "linear-gradient(90deg, transparent, var(--accent-primary), transparent)",
        boxShadow: "0 0 20px 2px var(--accent-primary)"
      }} />
    </motion.div>
  );
}
