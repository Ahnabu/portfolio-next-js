'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function OrbitingSatellites() {
  const groupRef = useRef();
  const ringRef1 = useRef();
  const ringRef2 = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.z = t * 0.4;
      groupRef.current.rotation.x = Math.sin(t * 0.3) * 0.2;
    }
    if (ringRef1.current) {
      ringRef1.current.rotation.z = -t * 0.3;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.z = t * 0.5;
      ringRef2.current.rotation.y = Math.cos(t * 0.4) * 0.3;
    }
  });

  return (
    <>
      {/* Outer rotating neon ring */}
      <mesh ref={ringRef1}>
        <ringGeometry args={[3.2, 3.25, 64]} />
        <meshBasicMaterial
          color="#00ff99"
          side={THREE.DoubleSide}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Dashed outer cyber ring */}
      <mesh ref={ringRef2}>
        <ringGeometry args={[3.5, 3.54, 48]} />
        <meshBasicMaterial
          color="#00ff99"
          wireframe
          side={THREE.DoubleSide}
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Orbiting cyber nodes */}
      <group ref={groupRef}>
        <mesh position={[3.3, 0, 0]}>
          <octahedronGeometry args={[0.22, 0]} />
          <meshStandardMaterial
            color="#00ff99"
            emissive="#00ff99"
            emissiveIntensity={1}
          />
        </mesh>
        <mesh position={[-3.3, 0, 0]}>
          <boxGeometry args={[0.25, 0.25, 0.25]} />
          <meshStandardMaterial
            color="#00ff99"
            wireframe
            emissive="#00ff99"
            emissiveIntensity={0.8}
          />
        </mesh>
        <mesh position={[0, 3.3, 0]}>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial
            color="#00e187"
            emissive="#00e187"
            emissiveIntensity={1}
          />
        </mesh>
        <mesh position={[0, -3.3, 0]}>
          <tetrahedronGeometry args={[0.22, 0]} />
          <meshStandardMaterial
            color="#00ff99"
            emissive="#00ff99"
            emissiveIntensity={1}
          />
        </mesh>
      </group>
    </>
  );
}

export default function Hero3DVisual() {
  return (
    <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] xl:w-[500px] xl:h-[500px] flex items-center justify-center">
      {/* 3D Canvas with orbital rings & satellites */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 50 }}
          gl={{ alpha: true, antialias: true }}
          dpr={[1, 1.5]}
        >
          <ambientLight intensity={1} />
          <pointLight position={[5, 5, 5]} intensity={1.5} color="#00ff99" />
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
            <OrbitingSatellites />
          </Float>
        </Canvas>
      </div>

      {/* Central Profile Image with Glow and Floating Animation */}
      <div className="relative z-10 w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] xl:w-[380px] xl:h-[380px] rounded-full overflow-hidden border-2 border-[#00ff99]/40 shadow-[0_0_50px_rgba(0,255,153,0.3)] hover:shadow-[0_0_70px_rgba(0,255,153,0.5)] transition-all duration-500">
        <Image
          src="/myPhoto.png"
          priority
          quality={100}
          fill
          alt="Syed Md Abu Horaira"
          className="object-contain rounded-full hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
}
