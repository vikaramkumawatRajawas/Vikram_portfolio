import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

export default function EducationTimeline3D({ position = [0, 0, -82], isMobile }) {
  const lineRef = useRef();

  useFrame((state) => {
    if (lineRef.current) {
      lineRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.05;
    }
  });

  return (
    <group position={position}>
      {/* 3D Glowing Timeline Laser Line */}
      <mesh ref={lineRef} position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.025, 0.025, 7.5, 16]} />
        <meshStandardMaterial color="#FFD966" emissive="#F5C542" emissiveIntensity={1.2} />
      </mesh>

      {/* Floating Milestone Nodes */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5} position={[-2.4, 0.8, 0.2]}>
        <mesh>
          <boxGeometry args={[isMobile ? 1.6 : 2.2, 1.1, 0.08]} />
          <meshStandardMaterial color="#0c0c0e" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[isMobile ? 1.64 : 2.24, 1.14, 0.02]} />
          <meshStandardMaterial color="#F5C542" emissive="#F5C542" emissiveIntensity={0.5} />
        </mesh>
      </Float>

      <Float speed={2.4} rotationIntensity={0.3} floatIntensity={0.5} position={[2.4, -0.8, 0.2]}>
        <mesh>
          <boxGeometry args={[isMobile ? 1.6 : 2.2, 1.1, 0.08]} />
          <meshStandardMaterial color="#0c0c0e" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[isMobile ? 1.64 : 2.24, 1.14, 0.02]} />
          <meshStandardMaterial color="#FFD966" emissive="#FFD966" emissiveIntensity={0.5} />
        </mesh>
      </Float>
    </group>
  );
}
