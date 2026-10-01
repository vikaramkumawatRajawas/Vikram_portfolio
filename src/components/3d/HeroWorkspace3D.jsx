import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export default function HeroWorkspace3D({ mousePos, isMobile }) {
  const groupRef = useRef();
  const haloRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      const targetX = mousePos.current.x * 0.3;
      const targetY = mousePos.current.y * 0.3;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetY, 0.05);
    }
    if (haloRef.current) {
      haloRef.current.rotation.z += 0.006;
      haloRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
    }
  });

  const techBadges = [
    { name: 'Java', pos: isMobile ? [-1.6, 1.4, 0.2] : [-2.8, 1.8, 0.5], color: '#F5C542' },
    { name: 'Python', pos: isMobile ? [1.6, 1.3, 0.1] : [2.7, 1.6, 0.2], color: '#FFD966' },
    { name: 'JavaScript', pos: isMobile ? [-1.5, -0.1, 0.5] : [-2.5, -0.2, 1.0], color: '#D4A72C' },
    { name: 'React', pos: isMobile ? [1.5, 0.1, 0.4] : [2.6, 0.1, 0.8], color: '#F5C542' },
    { name: 'MySQL', pos: isMobile ? [1.4, -0.8, 0.2] : [2.4, -0.9, 0.4], color: '#FFD966' },
    { name: 'Git & GitHub', pos: isMobile ? [-1.4, -0.9, 0.2] : [-2.6, -1.0, 0.3], color: '#D4A72C' },
  ];

  return (
    <group position={[0, 0, 0]}>
      <group ref={groupRef} position={[0, -0.5, 0]}>
        {/* Outer 3D Gold Orbit Halo Ring */}
        <mesh ref={haloRef} position={[0, 0.8, -0.2]}>
          <torusGeometry args={[2.5, 0.018, 16, 100]} />
          <meshStandardMaterial color="#FFD966" emissive="#F5C542" emissiveIntensity={0.8} metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Desk Base */}
        <mesh position={[0, -0.1, 0]}>
          <boxGeometry args={[4.2, 0.12, 2.2]} />
          <meshStandardMaterial color="#111111" roughness={0.3} metalness={0.8} />
        </mesh>
        
        {/* Gold Trim for Desk */}
        <mesh position={[0, -0.16, 1.1]}>
          <boxGeometry args={[4.22, 0.02, 0.02]} />
          <meshStandardMaterial color="#F5C542" emissive="#F5C542" emissiveIntensity={0.6} />
        </mesh>

        {/* Desk Legs */}
        <mesh position={[-1.9, -1.0, 0.9]}>
          <cylinderGeometry args={[0.04, 0.04, 1.8]} />
          <meshStandardMaterial color="#1f1f1f" metalness={0.9} />
        </mesh>
        <mesh position={[1.9, -1.0, 0.9]}>
          <cylinderGeometry args={[0.04, 0.04, 1.8]} />
          <meshStandardMaterial color="#1f1f1f" metalness={0.9} />
        </mesh>
        <mesh position={[-1.9, -1.0, -0.9]}>
          <cylinderGeometry args={[0.04, 0.04, 1.8]} />
          <meshStandardMaterial color="#1f1f1f" metalness={0.9} />
        </mesh>
        <mesh position={[1.9, -1.0, -0.9]}>
          <cylinderGeometry args={[0.04, 0.04, 1.8]} />
          <meshStandardMaterial color="#1f1f1f" metalness={0.9} />
        </mesh>

        {/* Main Monitor Stand */}
        <mesh position={[0, 0.05, -0.4]}>
          <cylinderGeometry args={[0.3, 0.35, 0.03]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.9} />
        </mesh>
        <mesh position={[0, 0.55, -0.4]}>
          <cylinderGeometry args={[0.04, 0.04, 1.0]} />
          <meshStandardMaterial color="#333333" metalness={0.9} />
        </mesh>
        
        {/* Main Curved Ultrawide Code Monitor Screen */}
        <group position={[0, 1.1, -0.38]}>
          <mesh>
            <boxGeometry args={[3.2, 1.7, 0.08]} />
            <meshStandardMaterial color="#0a0a0a" roughness={0.2} metalness={0.9} />
          </mesh>
          <mesh position={[0, 0, 0.042]}>
            <planeGeometry args={[3.08, 1.58]} />
            <meshStandardMaterial color="#050508" emissive="#121008" emissiveIntensity={0.8} roughness={0.1} />
          </mesh>
          {[-0.55, -0.35, -0.15, 0.05, 0.25, 0.45].map((y, idx) => (
            <mesh key={idx} position={[-0.8 + (idx % 3) * 0.3, y, 0.045]}>
              <planeGeometry args={[1.2 + (idx % 2) * 0.4, 0.06]} />
              <meshStandardMaterial
                color={idx % 2 === 0 ? "#FFD966" : "#F5C542"}
                emissive={idx % 2 === 0 ? "#FFD966" : "#F5C542"}
                emissiveIntensity={1.2}
              />
            </mesh>
          ))}
          <mesh position={[0.4, -0.55, 0.046]}>
            <planeGeometry args={[0.08, 0.1]} />
            <meshStandardMaterial color="#FFD966" emissive="#FFD966" emissiveIntensity={2} />
          </mesh>
        </group>

        {/* 3D Laptop */}
        <group position={[-1.2, 0.02, 0.3]} rotation={[0, 0.35, 0]}>
          <mesh>
            <boxGeometry args={[1.1, 0.03, 0.8]} />
            <meshStandardMaterial color="#1a1a1a" metalness={0.8} />
          </mesh>
          <group position={[0, 0.38, -0.38]} rotation={[-0.25, 0, 0]}>
            <mesh>
              <boxGeometry args={[1.1, 0.72, 0.02]} />
              <meshStandardMaterial color="#0a0a0a" metalness={0.9} />
            </mesh>
            <mesh position={[0, 0, 0.012]}>
              <planeGeometry args={[1.02, 0.65]} />
              <meshStandardMaterial color="#08080c" emissive="#d4a72c" emissiveIntensity={0.3} />
            </mesh>
          </group>
        </group>

        {/* Coffee Mug */}
        <group position={[1.4, 0.12, 0.4]}>
          <mesh>
            <cylinderGeometry args={[0.12, 0.1, 0.28]} />
            <meshStandardMaterial color="#111111" roughness={0.4} />
          </mesh>
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0.125, 0.105, 0.06]} />
            <meshStandardMaterial color="#F5C542" emissive="#F5C542" emissiveIntensity={0.5} />
          </mesh>
        </group>

        {/* Desk Plant */}
        <group position={[1.5, 0.15, -0.4]}>
          <mesh>
            <cylinderGeometry args={[0.16, 0.12, 0.3]} />
            <meshStandardMaterial color="#1a1a1a" metalness={0.6} />
          </mesh>
          <mesh position={[0, 0.25, 0]}>
            <sphereGeometry args={[0.2, 12, 12]} />
            <meshStandardMaterial color="#2d4a29" roughness={0.8} />
          </mesh>
        </group>
      </group>

      {/* Floating Technology Badges */}
      {techBadges.map((b, idx) => (
        <Float key={idx} speed={1.8 + idx * 0.3} rotationIntensity={0.5} floatIntensity={0.8} position={b.pos}>
          <mesh>
            <boxGeometry args={[isMobile ? 0.85 : 1.0, 0.34, 0.06]} />
            <meshStandardMaterial color="#0d0d0d" roughness={0.2} metalness={0.9} transparent opacity={0.85} />
          </mesh>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[isMobile ? 0.89 : 1.04, 0.38, 0.02]} />
            <meshStandardMaterial color={b.color} emissive={b.color} emissiveIntensity={0.5} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}
