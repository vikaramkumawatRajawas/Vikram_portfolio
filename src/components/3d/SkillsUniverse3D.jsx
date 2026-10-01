import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export default function SkillsUniverse3D({ position = [0, 0, -38], isMobile }) {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.12;
    }
  });

  const skillObjects = [
    // Languages Cluster
    { name: 'Java', pos: [-2.2, 1.2, 0], color: '#F5C542' },
    { name: 'Python', pos: [-1.8, -1.2, 1.0], color: '#FFD966' },
    { name: 'JavaScript', pos: [-2.5, 0, -1.0], color: '#D4A72C' },
    // Frontend Cluster
    { name: 'HTML5', pos: [2.2, 1.4, -0.5], color: '#F5C542' },
    { name: 'CSS3', pos: [1.8, -1.1, 0.8], color: '#FFD966' },
    { name: 'React.js', pos: [2.6, 0.2, 1.2], color: '#D4A72C' },
    // Database Cluster
    { name: 'MySQL', pos: [0, 2.0, -1.5], color: '#F5C542' },
    // Tools Cluster
    { name: 'Git', pos: [0, -1.8, 1.5], color: '#FFD966' },
    { name: 'GitHub', pos: [-1.2, 1.8, 1.2], color: '#D4A72C' },
    { name: 'VS Code', pos: [1.2, -1.8, -1.2], color: '#F5C542' },
    { name: 'Antigravity', pos: [0, 0, -2.0], color: '#FFD966' },
  ];

  return (
    <group position={position}>
      {/* Central Glowing Core */}
      <mesh position={[0, 0, 0]}>
        <octahedronGeometry args={[0.6, 2]} />
        <meshStandardMaterial color="#F5C542" emissive="#FFD966" emissiveIntensity={1.5} wireframe />
      </mesh>

      {/* Orbiting Tech Nodes */}
      <group ref={groupRef}>
        {skillObjects.map((s, idx) => (
          <Float key={idx} speed={2 + idx * 0.2} rotationIntensity={0.6} floatIntensity={0.6} position={s.pos}>
            <mesh>
              <boxGeometry args={[isMobile ? 0.9 : 1.1, 0.36, 0.08]} />
              <meshStandardMaterial color="#0c0c0e" metalness={0.9} roughness={0.2} />
            </mesh>
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[isMobile ? 0.94 : 1.15, 0.4, 0.02]} />
              <meshStandardMaterial color={s.color} emissive={s.color} emissiveIntensity={0.6} />
            </mesh>
          </Float>
        ))}
      </group>
    </group>
  );
}
