'use client';

import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

function ResponsiveCamera() {
  const { size, camera } = useThree();

  useEffect(() => {
    if (size.width < 640) {
      camera.position.z = 13.5;
      camera.fov = 62;
    } else if (size.width < 1024) {
      camera.position.z = 12;
      camera.fov = 60;
    } else {
      camera.position.z = 11;
      camera.fov = 58;
    }
    camera.updateProjectionMatrix();
  }, [size.width, camera]);

  return null;
}

function CyberWavePlane() {
  const meshRef = useRef();
  const { size } = useThree();
  const isMobile = size.width < 768;

  // Responsive plane sizing and grid density
  const { geometry, count } = useMemo(() => {
    const width = isMobile ? 38 : 60;
    const height = isMobile ? 38 : 60;
    const segments = isMobile ? 22 : 36;
    const geo = new THREE.PlaneGeometry(width, height, segments, segments);
    return { geometry: geo, count: geo.attributes.position.count };
  }, [isMobile]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 0.8;
    const pos = geometry.attributes.position;
    for (let i = 0; i < count; i++) {
      const u = pos.getX(i);
      const v = pos.getY(i);
      const z = Math.sin(u * 0.25 + t) * Math.cos(v * 0.25 + t * 0.7) * (isMobile ? 1.1 : 1.6);
      pos.setZ(i, z);
    }
    pos.needsUpdate = true;
  });

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      rotation={[-Math.PI / 2.2, 0, 0]}
      position={[0, isMobile ? -8 : -9, isMobile ? -10 : -12]}
    >
      <meshStandardMaterial
        wireframe
        color="#00ff99"
        emissive="#004d2e"
        emissiveIntensity={0.6}
        transparent
        opacity={isMobile ? 0.25 : 0.32}
      />
    </mesh>
  );
}

function FloatingCyberObjects() {
  const torusRef = useRef();
  const icosaRef = useRef();
  const octaRef = useRef();
  const dodecaRef = useRef();
  const ringRef = useRef();

  const { viewport, size } = useThree();
  const isMobile = size.width < 768;
  const isTablet = size.width >= 768 && size.width < 1024;
  const scale = isMobile ? 0.52 : isTablet ? 0.75 : 1;

  // Dynamically position objects within the visible screen frustum
  const xRight = Math.min(viewport.width * 0.38, isMobile ? 3.5 : 9);
  const xLeft = Math.max(-viewport.width * 0.38, isMobile ? -3.5 : -9);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.18;
      torusRef.current.rotation.y = t * 0.22;
    }
    if (icosaRef.current) {
      icosaRef.current.rotation.x = -t * 0.14;
      icosaRef.current.rotation.z = t * 0.16;
    }
    if (octaRef.current) {
      octaRef.current.rotation.y = t * 0.25;
      octaRef.current.rotation.x = t * 0.12;
    }
    if (dodecaRef.current) {
      dodecaRef.current.rotation.y = -t * 0.18;
      dodecaRef.current.rotation.z = t * 0.15;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 2.5 + Math.sin(t * 0.3) * 0.15;
      ringRef.current.rotation.z = t * 0.08;
    }
  });

  return (
    <>
      {/* Upper Right Glowing Cyber Torus */}
      <Float speed={2} rotationIntensity={1.2} floatIntensity={1.8} position={[xRight, 4 * scale, -8]}>
        <mesh ref={torusRef} scale={scale}>
          <torusGeometry args={[2.6, 0.45, 16, 64]} />
          <meshStandardMaterial
            color="#00ff99"
            wireframe
            transparent
            opacity={0.35}
            emissive="#00ff99"
            emissiveIntensity={0.4}
          />
        </mesh>
      </Float>

      {/* Mid Left Glowing Icosahedron */}
      <Float speed={1.8} rotationIntensity={1.4} floatIntensity={2} position={[xLeft, -1 * scale, -6]}>
        <mesh ref={icosaRef} scale={scale}>
          <icosahedronGeometry args={[2.4, 1]} />
          <meshStandardMaterial
            color="#00e5ff"
            wireframe
            transparent
            opacity={0.3}
            emissive="#00e5ff"
            emissiveIntensity={0.35}
          />
        </mesh>
      </Float>

      {/* Lower Right Octahedron */}
      <Float speed={2.5} rotationIntensity={1.8} floatIntensity={2} position={[xRight * 0.9, -8 * scale, -10]}>
        <mesh ref={octaRef} scale={scale}>
          <octahedronGeometry args={[3, 0]} />
          <meshStandardMaterial
            color="#00ff99"
            wireframe
            transparent
            opacity={0.28}
            emissive="#00ff99"
            emissiveIntensity={0.3}
          />
        </mesh>
      </Float>

      {/* Lower Left Dodecahedron */}
      <Float speed={2.2} rotationIntensity={1.5} floatIntensity={1.6} position={[xLeft * 0.9, -11 * scale, -9]}>
        <mesh ref={dodecaRef} scale={scale}>
          <dodecahedronGeometry args={[2.5, 0]} />
          <meshStandardMaterial
            color="#00e5ff"
            wireframe
            transparent
            opacity={0.25}
            emissive="#00e5ff"
            emissiveIntensity={0.3}
          />
        </mesh>
      </Float>

      {/* Far Background Giant Orbital Ring */}
      <Float speed={1} rotationIntensity={0.4} floatIntensity={1} position={[0, 8 * scale, -15]}>
        <mesh ref={ringRef} scale={scale}>
          <ringGeometry args={[6, 6.1, 80]} />
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

function ResponsiveSparkles() {
  const { size } = useThree();
  const isMobile = size.width < 768;

  return (
    <>
      <Sparkles
        count={isMobile ? 65 : 140}
        scale={isMobile ? [18, 18, 14] : [32, 32, 22]}
        size={isMobile ? 1.6 : 2.4}
        speed={0.45}
        color="#00ff99"
        opacity={0.65}
      />
      <Sparkles
        count={isMobile ? 40 : 80}
        scale={isMobile ? [14, 14, 10] : [25, 25, 18]}
        size={isMobile ? 1.3 : 1.8}
        speed={0.3}
        color="#00e5ff"
        opacity={0.5}
      />
    </>
  );
}

function CameraRig() {
  const { size } = useThree();
  const isMobile = size.width < 768;

  useFrame((state) => {
    // Parallax tracking with mouse (toned down on touch/mobile)
    const factor = isMobile ? 0.35 : 0.9;
    const targetX = state.pointer.x * factor;
    const targetY = state.pointer.y * (factor * 0.7);
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
        camera={{ position: [0, 0, 11], fov: 58 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={0.9} color="#00ff99" />
        <pointLight position={[-10, -10, -5]} intensity={1.2} color="#00e5ff" />
        <pointLight position={[0, 8, 2]} intensity={0.8} color="#00ff99" />

        <ResponsiveCamera />
        <CameraRig />
        <FloatingCyberObjects />
        <CyberWavePlane />
        <ResponsiveSparkles />
      </Canvas>
    </div>
  );
}
