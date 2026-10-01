import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export default function ProjectsGallery3D({ position = [0, 0, -60], isMobile, onSelectProject }) {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.15;
    }
  });

  const projects = [
    { id: 'unifyed', title: 'unifyED', pos: [-2.6, 0, 0], rot: [0, 0.2, 0] },
    { id: 'viora', title: 'Viora', pos: [-1.3, 0, -1.2], rot: [0, 0.1, 0] },
    { id: 'neolibrary', title: 'NeoLibrary', pos: [0, 0, -2.4], rot: [0, 0, 0] },
    { id: 'lifeos', title: 'LifeOS', pos: [1.3, 0, -1.2], rot: [0, -0.1, 0] },
    { id: 'urbannest', title: 'UrbanNest', pos: [2.6, 0, 0], rot: [0, -0.2, 0] },
  ];

  return (
    <group position={position}>
      <group ref={groupRef}>
        {projects.map((p, idx) => (
          <Float key={idx} speed={1.5 + idx * 0.2} rotationIntensity={0.3} floatIntensity={0.4} position={p.pos} rotation={p.rot}>
            <mesh onClick={() => onSelectProject(p.id)}>
              <boxGeometry args={[isMobile ? 1.8 : 2.4, 1.4, 0.1]} />
              <meshStandardMaterial color="#08080a" roughness={0.2} metalness={0.8} />
            </mesh>
            <mesh position={[0, 0, 0.051]}>
              <planeGeometry args={[isMobile ? 1.7 : 2.3, 1.3]} />
              <meshStandardMaterial color="#050508" emissive="#121008" emissiveIntensity={0.6} />
            </mesh>
            {/* Gold Edge Glow */}
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[isMobile ? 1.84 : 2.45, 1.45, 0.02]} />
              <meshStandardMaterial color="#F5C542" emissive="#F5C542" emissiveIntensity={0.5} />
            </mesh>
          </Float>
        ))}
      </group>
    </group>
  );
}
