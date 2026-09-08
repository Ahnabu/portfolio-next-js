'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

function FloatingGeometries() {
  const torusRef = useRef();
  const icosaRef = useRef();
  const octaRef = useRef();
  const ringRef = useRef();

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.15;
      torusRef.current.rotation.y = t * 0.2;
    }
    if (icosaRef.current) {
      icosaRef.current.rotation.x = -t * 0.12;
      icosaRef.current.rotation.z = t * 0.18;
    }
    if (octaRef.current) {
      octaRef.current.rotation.y = t * 0.25;
      octaRef.current.rotation.z = -t * 0.1;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 2 + Math.sin(t * 0.3) * 0.2;
      ringRef.current.rotation.z = t * 0.1;
    }
  });

  return (
    <>
      {/* Top right floating cyber torus */}
      <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5} position={[8, 4, -8]}>
        <mesh ref={torusRef}>
          <torusGeometry args={[2.5, 0.4, 16, 64]} />
          <meshStandardMaterial
            color="#00ff99"
            wireframe
            transparent
            opacity={0.35}
            emissive="#00ff99"
            emissiveIntensity={0.3}
          />
        </mesh>
      </Float>

      {/* Middle left floating icosahedron */}
      <Float speed={1.8} rotationIntensity={1.5} floatIntensity={2} position={[-8, -2, -6]}>
        <mesh ref={icosaRef}>
          <icosahedronGeometry args={[2.2, 1]} />
          <meshStandardMaterial
            color="#00ff99"
            wireframe
            transparent
            opacity={0.3}
            emissive="#00e187"
            emissiveIntensity={0.25}
          />
        </mesh>
      </Float>

      {/* Lower right floating octahedron */}
      <Float speed={2.5} rotationIntensity={2} floatIntensity={1.8} position={[7, -8, -10]}>
        <mesh ref={octaRef}>
          <octahedronGeometry args={[2.8, 0]} />
          <meshStandardMaterial
            color="#00ff99"
            wireframe
            transparent
            opacity={0.25}
            emissive="#00ff99"
            emissiveIntensity={0.2}
          />
        </mesh>
      </Float>

      {/* Far background orbital ring */}
      <Float speed={1} rotationIntensity={0.5} floatIntensity={1} position={[-4, 8, -14]}>
        <mesh ref={ringRef}>
          <ringGeometry args={[4.5, 4.6, 64]} />
          <meshBasicMaterial
            color="#00ff99"
            wireframe
            transparent
            opacity={0.25}
            side={THREE.DoubleSide}
          />
        </mesh>
      </Float>
    </>
  );
}

function CyberGrid() {
  const gridRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (gridRef.current) {
      gridRef.current.position.z = (t * 0.8) % 2;
    }
  });

  return (
    <group position={[0, -10, -5]} rotation={[-Math.PI / 2.3, 0, 0]}>
      <gridHelper
        ref={gridRef}
        args={[80, 50, '#00ff99', '#27272c']}
        position={[0, 0, 0]}
      />
    </group>
  );
}

function CameraRig() {
  useFrame((state) => {
    // Subtle parallax with mouse
    const targetX = (state.pointer.x * 0.8);
    const targetY = (state.pointer.y * 0.5);
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX, 0.04);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.04);
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function CanvasBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} color="#00ff99" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#00e187" />

        <CameraRig />
        <FloatingGeometries />
        <CyberGrid />

        {/* Dynamic neon cyber sparkles */}
        <Sparkles
          count={120}
          scale={[30, 30, 20]}
          size={2.5}
          speed={0.4}
          color="#00ff99"
          opacity={0.6}
        />
        <Sparkles
          count={60}
          scale={[20, 20, 15]}
          size={1.5}
          speed={0.2}
          color="#ffffff"
          opacity={0.4}
        />
      </Canvas>
    </div>
  );
}
