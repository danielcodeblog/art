'use client';

import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FloatingShape({ position, color, speed, size }: { position: [number, number, number], color: string, speed: number, size: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y += Math.sin(time * speed) * 0.01;
    meshRef.current.rotation.x += 0.01 * speed;
    meshRef.current.rotation.y += 0.01 * speed;
  });

  return (
    <Float speed={speed * 2} rotationIntensity={2} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[size, 0]} />
        <meshStandardMaterial color={color} wireframe opacity={0.1} transparent />
      </mesh>
    </Float>
  );
}

function Particles({ count = 100 }) {
  const [points] = useState(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 100;
      p[i * 3 + 1] = (Math.random() - 0.5) * 100;
      p[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }
    return p;
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          args={[points, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.1} color="#3B82F6" transparent opacity={0.3} sizeAttenuation />
    </points>
  );
}

export default function Floating3DBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
      <Canvas camera={{ position: [0, 0, 50], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <FloatingShape position={[-20, 10, 0]} color="#3B82F6" speed={0.5} size={2} />
        <FloatingShape position={[20, -10, -10]} color="#3B82F6" speed={0.8} size={1.5} />
        <FloatingShape position={[-15, -20, 5]} color="#3B82F6" speed={0.3} size={3} />
        <FloatingShape position={[10, 25, -5]} color="#3B82F6" speed={0.6} size={1} />
        <Particles count={200} />
      </Canvas>
    </div>
  );
}
