"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Text } from "@react-three/drei";
import * as THREE from "three";

interface ApplianceModelProps {
  name: string;
  color: string;
  geometryType: "box" | "cylinder" | "sphere";
}

export default function ApplianceModel({ name, color, geometryType }: ApplianceModelProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      // Gentle floating rotation
      meshRef.current.rotation.y += 0.01;
      
      // Interactive scale on hover
      const targetScale = hovered ? 1.1 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh 
        ref={meshRef} 
        onPointerOver={() => setHover(true)} 
        onPointerOut={() => setHover(false)}
      >
        {geometryType === "box" && <boxGeometry args={[2.5, 3, 2]} />}
        {geometryType === "cylinder" && <cylinderGeometry args={[1.5, 1.5, 3, 32]} />}
        {geometryType === "sphere" && <sphereGeometry args={[1.8, 32, 32]} />}
        
        <MeshDistortMaterial
          color={color}
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.5}
          roughness={0.2}
          distort={hovered ? 0.3 : 0}
          speed={hovered ? 5 : 1}
        />
      </mesh>
      
      {/* Label above the 3D placeholder */}
      <Text
        position={[0, 2.5, 0]}
        fontSize={0.4}
        color="#1E3A5F"
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2"
      >
        {name}
      </Text>
    </Float>
  );
}
