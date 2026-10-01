import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

export default function ProfilesSpace3D({ position = [0, 0, -102], isMobile }) {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.08;
    }
  });

  const portals = [
    { name: 'GitHub', pos: [-2.6, 0.6, 0], color: '#F5C542' },
    { name: 'LinkedIn', pos: [-0.9, -0.6, 0.5], color: '#FFD966' },
    { name: 'LeetCode', pos: [0.9, 0.6, 0.5], color: '#D4A72C' },
    { name: 'Instagram', pos: [2.6, -0.6, 0], color: '#F5C542' },
  ];

  return (
    <group position={position}>
      <group ref={groupRef}>
        {portals.map((portal, idx) => (
          <Float key={idx} speed={1.8 + idx * 0.3} rotationIntensity={0.4} floatIntensity={0.6} position={portal.pos}>
            <mesh>
              <cylinderGeometry args={[0.7, 0.7, 0.08, 32]} />
              <meshStandardMaterial color="#0b0b0d" metalness={0.9} roughness={0.1} />
            </mesh>
            <mesh position={[0, 0, 0]}>
              <cylinderGeometry args={[0.73, 0.73, 0.02, 32]} />
              <meshStandardMaterial color={portal.color} emissive={portal.color} emissiveIntensity={0.7} />
            </mesh>
          </Float>
        ))}
      </group>
    </group>
  );
}
