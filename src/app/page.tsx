"use client";

import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, ChevronDown } from "lucide-react";
import Link from "next/link";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import AnimatedText from "@/components/AnimatedText";
import CyberName from "@/components/CyberName";
import CyberTerminal from "@/components/CyberTerminal";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <>
      <section id="hero" style={{ 
        minHeight: "100vh", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "flex-start",
        paddingTop: "5rem",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Massive Background Text Watermark */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100%", textAlign: "center", zIndex: 0, pointerEvents: "none", opacity: 0.02 }}>
          <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5, ease: "easeOut" }}>
            <span style={{ fontSize: "28vw", fontWeight: 900, letterSpacing: "-0.05em", color: "var(--on-surface)", whiteSpace: "nowrap", WebkitTextStroke: "2px var(--accent-primary)", WebkitTextFillColor: "transparent" }}>
              ENGINE
            </span>
          </motion.div>
        </div>

        <div className="container" style={{ position: "relative", zIndex: 10, width: "100%", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "4rem" }}>
          <motion.div 
            initial="hidden" 
            animate="visible" 
            transition={{ staggerChildren: 0.15 }}
            style={{ flex: "1 1 500px", maxWidth: "800px" }}
          >
            {/* Availability Status */}
            <motion.div variants={fadeUp} style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2.5rem" }}>
              <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ position: "absolute", width: "100%", height: "100%", background: "var(--accent-secondary)", borderRadius: "50%", opacity: 0.5, animation: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite" }}></span>
                <span style={{ position: "relative", width: "10px", height: "10px", background: "var(--accent-secondary)", borderRadius: "50%", boxShadow: "0 0 10px var(--accent-secondary)" }}></span>
              </div>
              <span style={{ color: "var(--on-surface-muted)", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>
                Actively developing cognitive systems
              </span>
            </motion.div>

            {/* Elite Badge */}
            <motion.div variants={fadeUp} style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", padding: "0.6rem 1.2rem", background: "rgba(6, 182, 212, 0.05)", border: "1px solid rgba(6, 182, 212, 0.25)", borderRadius: "999px", marginBottom: "3rem", color: "var(--accent-primary)", boxShadow: "0 0 20px rgba(6, 182, 212, 0.1)" }}>
              <BrainCircuit size={16} />
              <span style={{fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", fontSize: "0.75rem"}}>Cognitive Systems Architect & AI Engineer</span>
            </motion.div>
            
            {/* Ultra Premium Cinematic Neural Decoding Typography */}
            <div style={{ marginBottom: "2rem" }}>
              <CyberName text="SPARSH" className="premium-name" delay={200} />
              <CyberName text="SHANKHDHAR" className="premium-name premium-surname" delay={800} />
            </div>
            
            {/* Elite AI Subtext */}
            <motion.p variants={fadeUp} style={{ fontSize: "1.35rem", color: "var(--on-surface-muted)", maxWidth: "650px", marginBottom: "4rem", lineHeight: 1.8, fontWeight: 400 }}>
              Specialized in hyper-integrated LLM terminals, sophisticated machine learning architectures, and deep Python data pipelines. Architecting sovereign intelligence for complex real-world optimization.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div variants={fadeUp} style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", alignItems: "center" }}>
              <Link href="#projects" className="btn-primary ambient-glow">
                Explore Neural Architectures <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
          
          {/* CyberTerminal on the Right */}
          <div style={{ flex: "1 1 400px", display: "flex", justifyContent: "center" }}>
             <CyberTerminal />
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
          style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", zIndex: 10 }}
        >
          <span style={{ fontSize: "0.7rem", color: "var(--on-surface-muted)", textTransform: "uppercase", letterSpacing: "2px", fontWeight: 600 }}>Descend</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
            <ChevronDown size={20} color="var(--accent-primary)" />
          </motion.div>
        </motion.div>
      </section>

      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />

      <style jsx>{`
        .premium-name {
          font-size: clamp(4.5rem, 11vw, 9.5rem);
          font-weight: 900;
          line-height: 0.95;
          letter-spacing: -0.06em;
          background: linear-gradient(to right, #ffffff 20%, #666666 50%, #ffffff 80%);
          background-size: 200% auto;
          animation: shine 5s linear infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0px 4px 20px rgba(255, 255, 255, 0.1);
          margin-bottom: 0.2rem;
          display: block;
        }
        .premium-surname {
          background: linear-gradient(to right, var(--accent-primary) 20%, #ffffff 50%, var(--accent-secondary) 80%);
          background-size: 200% auto;
          animation: shine 4s reverse linear infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 50px rgba(6, 182, 212, 0.5));
        }
        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }
        @keyframes ping {
          75%, 100% { transform: scale(2.5); opacity: 0; }
        }
      `}</style>
    </>
  );
}
