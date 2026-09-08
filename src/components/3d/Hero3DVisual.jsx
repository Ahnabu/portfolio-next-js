'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function GyroscopeGimbal() {
  const ringX = useRef();
  const ringY = useRef();
  const ringZ = useRef();
  const satellitesGroup = useRef();
  const scanLine = useRef();

  const { viewport, size } = useThree();
  const isMobile = size.width < 640;
  // Compute responsive scale to prevent clipping on mobile viewports
  const scale = isMobile ? Math.min(0.72, viewport.width / 9.5) : Math.min(1, viewport.width / 8.5);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // 3-axis independent gyroscopic rotations
    if (ringX.current) {
      ringX.current.rotation.x = t * 0.45;
      ringX.current.rotation.y = Math.sin(t * 0.2) * 0.2;
    }
    if (ringY.current) {
      ringY.current.rotation.y = -t * 0.35;
      ringY.current.rotation.z = Math.cos(t * 0.25) * 0.25;
    }
    if (ringZ.current) {
      ringZ.current.rotation.z = t * 0.5;
      ringZ.current.rotation.x = Math.sin(t * 0.3) * 0.3;
    }

    if (satellitesGroup.current) {
      satellitesGroup.current.rotation.z = -t * 0.6;
      satellitesGroup.current.rotation.y = Math.sin(t * 0.4) * 0.4;
    }

    // Scanning laser line up and down
    if (scanLine.current) {
      scanLine.current.position.y = Math.sin(t * 1.5) * 2.8 * scale;
    }
  });

  return (
    <group scale={scale}>
      {/* Outer Ring - Axis X */}
      <mesh ref={ringX}>
        <torusGeometry args={[3.4, 0.04, 16, 80]} />
        <meshStandardMaterial
          color="#00ff99"
          emissive="#00ff99"
          emissiveIntensity={1.2}
          roughness={0.2}
        />
      </mesh>

      {/* Middle Ring - Axis Y */}
      <mesh ref={ringY}>
        <torusGeometry args={[3.7, 0.035, 16, 80]} />
        <meshStandardMaterial
          color="#00e5ff"
          emissive="#00e5ff"
          emissiveIntensity={1.2}
          roughness={0.2}
        />
      </mesh>

      {/* Inner Cyber Segment Ring - Axis Z */}
      <mesh ref={ringZ}>
        <ringGeometry args={[3.1, 3.16, 64]} />
        <meshBasicMaterial
          color="#00ff99"
          wireframe
          side={THREE.DoubleSide}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Laser Holographic Scan Line */}
      <mesh ref={scanLine} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[5.8, 0.05]} />
        <meshBasicMaterial
          color="#00ff99"
          transparent
          opacity={0.45}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Orbiting Satellites */}
      <group ref={satellitesGroup}>
        {/* Node 1: Green Octahedron */}
        <mesh position={[3.6, 0, 0]}>
          <octahedronGeometry args={[0.26, 0]} />
          <meshStandardMaterial
            color="#00ff99"
            emissive="#00ff99"
            emissiveIntensity={1.8}
          />
        </mesh>

        {/* Node 2: Cyan Wireframe Cube */}
        <mesh position={[-3.6, 0, 0]}>
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <meshStandardMaterial
            color="#00e5ff"
            wireframe
            emissive="#00e5ff"
            emissiveIntensity={1.6}
          />
        </mesh>

        {/* Node 3: Glowing Sphere */}
        <mesh position={[0, 3.6, 0]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial
            color="#00ff99"
            emissive="#00ff99"
            emissiveIntensity={2}
          />
        </mesh>

        {/* Node 4: Cyan Tetrahedron */}
        <mesh position={[0, -3.6, 0]}>
          <tetrahedronGeometry args={[0.26, 0]} />
          <meshStandardMaterial
            color="#00e5ff"
            emissive="#00e5ff"
            emissiveIntensity={1.8}
          />
        </mesh>
      </group>
    </group>
  );
}

export default function Hero3DVisual() {
  return (
    <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] xl:w-[540px] xl:h-[540px] flex items-center justify-center">
      {/* Background Hologram Radial Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/15 via-cyan-400/10 to-accent/15 rounded-full blur-3xl -z-10 animate-pulse pointer-events-none" />

      {/* 3D WebGL Canvas with Gyroscope & Satellites */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 8.5], fov: 50 }}
          gl={{ alpha: true, antialias: true }}
          dpr={[1, 1.5]}
        >
          <ambientLight intensity={0.9} />
          <pointLight position={[6, 6, 6]} intensity={2} color="#00ff99" />
          <pointLight position={[-6, -6, -6]} intensity={1.5} color="#00e5ff" />
          <Float speed={2} rotationIntensity={0.3} floatIntensity={0.6}>
            <GyroscopeGimbal />
          </Float>
        </Canvas>
      </div>

      {/* Central Profile Image with Futuristic Cyber Ring & Corner Accents */}
      <div className="relative z-10 w-[210px] h-[210px] sm:w-[270px] sm:h-[270px] xl:w-[390px] xl:h-[390px] rounded-full overflow-hidden border-2 border-accent/60 shadow-[0_0_60px_rgba(0,255,153,0.35)] hover:shadow-[0_0_90px_rgba(0,255,153,0.6)] transition-all duration-500 group">
        <Image
          src="/myPhoto.png"
          priority
          quality={100}
          fill
          alt="Syed Md Abu Horaira"
          className="object-contain rounded-full group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Inner Hologram Glass Glare */}
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-white/10 pointer-events-none rounded-full" />
      </div>

      {/* Floating Cyber Status Tag */}
      <div className="absolute -bottom-2 xl:bottom-4 px-3 sm:px-4 py-1.5 rounded-full bg-[#1c1c22]/90 border border-accent/50 backdrop-blur-md shadow-[0_0_20px_rgba(0,255,153,0.3)] flex items-center gap-2 text-[10px] sm:text-xs font-mono text-white z-20">
        <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
        <span className="text-accent font-semibold tracking-wider">ONLINE // READY TO BUILD</span>
      </div>
    </div>
  );
}
