"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

function NeuralTerrain() {
  const ref = useRef<any>(null);
  const count = 15000; // High density for the neural sea
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 50;     // x
      pos[i * 3 + 1] = 0;                          // y (calculated in frame)
      pos[i * 3 + 2] = (Math.random() - 0.5) * 50; // z
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    const time = state.clock.elapsedTime * 0.4;
    const positionsArray = ref.current.geometry.attributes.position.array;
    
    // Create flowing wave algorithms over the 15,000 points
    for (let i = 0; i < count; i++) {
      const x = positionsArray[i * 3];
      const z = positionsArray[i * 3 + 2];
      
      // Complex intersecting sine/cosine waves for a "cognitive terrain" look
      const y = Math.sin(x * 0.15 + time) * Math.cos(z * 0.15 + time) * 1.5;
      positionsArray[i * 3 + 1] = y;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
    
    // Interactive Tilt based on mouse position
    const targetRotX = state.pointer.y * 0.05 + Math.PI / 5;
    const targetRotY = state.pointer.x * 0.05;
    
    ref.current.rotation.x += (targetRotX - ref.current.rotation.x) * 0.05;
    ref.current.rotation.y += (targetRotY - ref.current.rotation.y) * 0.05;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#06b6d4" size={0.04} sizeAttenuation={true} depthWrite={false} opacity={0.5} />
    </Points>
  );
}

export default function ThreeCanvas() {
  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 0, pointerEvents: "none" }}>
      <Canvas camera={{ position: [0, 2, 8], fov: 60 }}>
        {/* Deep black fog to blend the edges of the terrain smoothly into the void */}
        <fog attach="fog" args={["#000000", 5, 25]} />
        <ambientLight intensity={0.5} />
        <NeuralTerrain />
      </Canvas>
    </div>
  );
}
