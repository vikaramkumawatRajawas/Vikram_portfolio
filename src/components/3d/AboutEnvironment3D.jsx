import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export default function AboutEnvironment3D({ position = [0, 0, -18], isMobile }) {
  const panelRef = useRef();

  useFrame((state) => {
    if (panelRef.current) {
      panelRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.05;
      panelRef.current.position.y = Math.cos(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group position={position}>
      {/* Background Gold Ambient Ring */}
      <mesh position={[0, 0, -2]}>
        <torusGeometry args={[3.8, 0.015, 16, 100]} />
        <meshStandardMaterial color="#F5C542" emissive="#F5C542" emissiveIntensity={0.6} />
      </mesh>

      {/* Floating 3D Glass Information Screen */}
      <group ref={panelRef}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[isMobile ? 3.4 : 5.2, 3.2, 0.08]} />
          <meshStandardMaterial
            color="#08080a"
            roughness={0.1}
            metalness={0.8}
            transparent
            opacity={0.88}
          />
        </mesh>
        
        {/* Gold Frame Border */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[isMobile ? 3.46 : 5.26, 3.26, 0.02]} />
          <meshStandardMaterial color="#F5C542" emissive="#F5C542" emissiveIntensity={0.4} />
        </mesh>

        {/* Floating Stat Spheres */}
        <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6} position={[-2.2, 1.4, 0.4]}>
          <mesh>
            <sphereGeometry args={[0.32, 24, 24]} />
            <meshStandardMaterial color="#D4A72C" emissive="#FFD966" emissiveIntensity={0.8} />
          </mesh>
        </Float>
        <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.6} position={[2.2, -1.4, 0.4]}>
          <mesh>
            <sphereGeometry args={[0.26, 24, 24]} />
            <meshStandardMaterial color="#F5C542" emissive="#F5C542" emissiveIntensity={0.8} />
          </mesh>
        </Float>
      </group>
    </group>
  );
}
