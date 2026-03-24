"use client";

import { motion } from "framer-motion";

export default function AnimatedText({ 
  text, 
  el: Wrapper = "p", 
  className, 
  once = true 
}: { 
  text: string, 
  el?: any, 
  className?: string, 
  once?: boolean 
}) {
  const words = text.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 * i },
    }),
  };

  const child = {
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", damping: 14, stiffness: 80 } 
    },
    hidden: { opacity: 0, y: 80 },
  };

  return (
    <Wrapper className={className}>
      <motion.span 
        variants={container} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once, margin: "-100px" }}
        style={{ display: "inline-block", width: "100%" }}
      >
        {words.map((word: string, index: number) => (
          <span key={index} style={{ overflow: "hidden", display: "inline-block", marginRight: "0.25em", paddingBottom: "0.1em" }}>
            <motion.span variants={child} style={{ display: "inline-block" }}>
              {word === "{" ? <span className="text-gradient">{word}</span> : word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
}
