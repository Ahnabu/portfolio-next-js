'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function BeaconGlobe() {
  const globeRef = useRef();
  const innerRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (globeRef.current) {
      globeRef.current.rotation.y = t * 0.25;
      globeRef.current.rotation.x = 0.2;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y = -t * 0.4;
      innerRef.current.rotation.z = t * 0.2;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = t * 0.5;
      ring1Ref.current.rotation.x = Math.sin(t * 0.4) * 0.3;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -t * 0.4;
      ring2Ref.current.rotation.y = Math.cos(t * 0.3) * 0.3;
    }
  });

  return (
    <group>
      {/* Outer Wireframe Globe */}
      <mesh ref={globeRef}>
        <sphereGeometry args={[1.8, 24, 24]} />
        <meshStandardMaterial
          wireframe
          color="#00ff99"
          emissive="#00ff99"
          emissiveIntensity={0.6}
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Inner Pulsing Hologram Core */}
      <mesh ref={innerRef}>
        <dodecahedronGeometry args={[0.9, 0]} />
        <meshStandardMaterial
          color="#00e5ff"
          emissive="#00e5ff"
          emissiveIntensity={1.4}
          wireframe
        />
      </mesh>

      {/* Orbiting Communication Ring 1 */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.5, 0.02, 16, 64]} />
        <meshBasicMaterial color="#00ff99" />
      </mesh>

      {/* Orbiting Communication Ring 2 */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[2.8, 0.015, 16, 64]} />
        <meshBasicMaterial color="#00e5ff" />
      </mesh>

      {/* Floating Signal Pulses */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshBasicMaterial color="#00ff99" />
      </mesh>
    </group>
  );
}

export default function SignalBeacon3D() {
  return (
    <div className="w-full h-[220px] relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#232329]/70 to-[#14141a]/90 border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.4)]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.9} />
        <pointLight position={[4, 4, 4]} intensity={1.8} color="#00ff99" />
        <pointLight position={[-4, -4, -4]} intensity={1.2} color="#00e5ff" />
        <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.5}>
          <BeaconGlobe />
        </Float>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
      </Canvas>

      <div className="absolute top-3 left-4 flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/60 border border-accent/40 backdrop-blur-md text-[11px] font-mono text-accent">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
        <span>GLOBAL TRANSMISSION // OPEN FOR COLLABORATION</span>
      </div>
    </div>
  );
}
