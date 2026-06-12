"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Sparkles, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

export default function HeroModel() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        {/* Placeholder for the Gas Stove / Appliance */}
        <boxGeometry args={[3, 1.5, 2]} />
        <MeshDistortMaterial
          color="#1E3A5F"
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.8}
          roughness={0.2}
          distort={0.1}
          speed={2}
        />
      </mesh>

      {/* Decorative floating elements */}
      <mesh position={[-3, 2, -2]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#FF7A00" emissive="#FF7A00" emissiveIntensity={2} />
      </mesh>

      <Sparkles count={100} scale={10} size={4} speed={0.4} opacity={0.5} color="#4A90E2" />
    </Float>
  );
}
