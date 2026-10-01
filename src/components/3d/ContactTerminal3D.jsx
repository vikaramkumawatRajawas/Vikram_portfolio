import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

export default function ContactTerminal3D({ position = [0, 0, -122], isMobile }) {
  const terminalRef = useRef();

  useFrame((state) => {
    if (terminalRef.current) {
      terminalRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group position={position}>
      {/* 3D Communication Terminal Panel */}
      <group ref={terminalRef}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[isMobile ? 3.4 : 5.0, 3.4, 0.08]} />
          <meshStandardMaterial color="#08080a" roughness={0.1} metalness={0.8} transparent opacity={0.9} />
        </mesh>
        
        {/* Terminal Gold Frame */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[isMobile ? 3.46 : 5.06, 3.46, 0.02]} />
          <meshStandardMaterial color="#F5C542" emissive="#F5C542" emissiveIntensity={0.5} />
        </mesh>

        {/* Floating Glowing Sphere Core */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.7} position={[0, 2.2, 0]}>
          <mesh>
            <icosahedronGeometry args={[0.45, 1]} />
            <meshStandardMaterial color="#FFD966" emissive="#F5C542" emissiveIntensity={1.4} wireframe />
          </mesh>
        </Float>
      </group>
    </group>
  );
}
