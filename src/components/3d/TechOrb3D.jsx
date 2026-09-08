'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

function TechCore() {
  const coreRef = useRef();
  const wireRef = useRef();
  const ringRef1 = useRef();
  const ringRef2 = useRef();
  const particlesRef = useRef();

  // Create constellation nodes
  const nodes = React.useMemo(() => {
    const pts = [];
    const count = 28;
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const r = 2.2;
      pts.push([
        r * Math.cos(theta) * Math.sin(phi),
        r * Math.sin(theta) * Math.sin(phi),
        r * Math.cos(phi),
      ]);
    }
    return pts;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.3;
      coreRef.current.rotation.x = t * 0.2;
    }
    if (wireRef.current) {
      wireRef.current.rotation.y = -t * 0.25;
      wireRef.current.rotation.z = t * 0.15;
    }
    if (ringRef1.current) {
      ringRef1.current.rotation.z = t * 0.4;
      ringRef1.current.rotation.x = Math.PI / 3;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.z = -t * 0.35;
      ringRef2.current.rotation.y = Math.PI / 4;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.15;
    }
  });

  return (
    <group>
      {/* Inner Glowing Crystal Core */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.1, 0]} />
        <meshStandardMaterial
          color="#00ff99"
          emissive="#00ff99"
          emissiveIntensity={1.2}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>

      {/* Wireframe Hologram Shell */}
      <mesh ref={wireRef}>
        <icosahedronGeometry args={[1.6, 1]} />
        <meshStandardMaterial
          color="#00e5ff"
          wireframe
          emissive="#00e5ff"
          emissiveIntensity={0.8}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Gyro Data Ring 1 */}
      <mesh ref={ringRef1}>
        <torusGeometry args={[2.5, 0.025, 16, 64]} />
        <meshBasicMaterial color="#00ff99" />
      </mesh>

      {/* Gyro Data Ring 2 */}
      <mesh ref={ringRef2}>
        <torusGeometry args={[2.7, 0.02, 16, 64]} />
        <meshBasicMaterial color="#00e5ff" />
      </mesh>

      {/* Constellation Orbiting Nodes */}
      <group ref={particlesRef}>
        {nodes.map((pos, idx) => (
          <mesh key={idx} position={pos}>
            <sphereGeometry args={[0.06, 8, 8]} />
            <meshStandardMaterial
              color={idx % 2 === 0 ? '#00ff99' : '#00e5ff'}
              emissive={idx % 2 === 0 ? '#00ff99' : '#00e5ff'}
              emissiveIntensity={2}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}

export default function TechOrb3D() {
  return (
    <div className="w-full h-[240px] sm:h-[300px] relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#232329]/60 to-[#14141a]/90 border border-white/10 mb-8 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
      {/* Canvas */}
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#00ff99" />
        <pointLight position={[-5, -5, -5]} intensity={1.2} color="#00e5ff" />
        <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.4}>
          <TechCore />
        </Float>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.2}
          maxPolarAngle={Math.PI / 1.6}
          minPolarAngle={Math.PI / 2.8}
        />
      </Canvas>

      {/* Overlay Badge */}
      <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-accent/40 backdrop-blur-md text-xs font-mono text-accent">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        <span>INTERACTIVE TECH MATRIX // DRAG TO ROTATE</span>
      </div>

      <div className="absolute bottom-3 right-4 text-[11px] font-mono text-white/40">
        FULL STACK ECOSYSTEM
      </div>
    </div>
  );
}
