import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// 3D Developer Workstation Scene
function WorkstationScene({ mousePos }) {
  const groupRef = useRef();
  const ringRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      // Subtle mouse-parallax interaction
      const targetX = mousePos.current.x * 0.35;
      const targetY = mousePos.current.y * 0.35;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetY, 0.05);
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += 0.005;
      ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.6, 0]}>
      {/* Outer 3D Gold Orbit Halo Ring */}
      <mesh ref={ringRef} position={[0, 0.8, -0.2]}>
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

      {/* Main Monitor Base & Stand */}
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
        {/* Monitor Frame */}
        <mesh>
          <boxGeometry args={[3.2, 1.7, 0.08]} />
          <meshStandardMaterial color="#0a0a0a" roughness={0.2} metalness={0.9} />
        </mesh>
        
        {/* Code Display Screen */}
        <mesh position={[0, 0, 0.042]}>
          <planeGeometry args={[3.08, 1.58]} />
          <meshStandardMaterial
            color="#050508"
            emissive="#121008"
            emissiveIntensity={0.8}
            roughness={0.1}
          />
        </mesh>

        {/* Glowing Gold Code Lines on Monitor Screen */}
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
        {/* Code Cursor Glow */}
        <mesh position={[0.4, -0.55, 0.046]}>
          <planeGeometry args={[0.08, 0.1]} />
          <meshStandardMaterial color="#FFD966" emissive="#FFD966" emissiveIntensity={2} />
        </mesh>
      </group>

      {/* 3D Laptop */}
      <group position={[-1.2, 0.02, 0.3]} rotation={[0, 0.35, 0]}>
        {/* Keyboard Base */}
        <mesh>
          <boxGeometry args={[1.1, 0.03, 0.8]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.8} />
        </mesh>
        {/* Screen */}
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
        {/* Gold VK Logo Ring on Mug */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.125, 0.105, 0.06]} />
          <meshStandardMaterial color="#F5C542" emissive="#F5C542" emissiveIntensity={0.5} />
        </mesh>
      </group>

      {/* Small Desk Plant */}
      <group position={[1.5, 0.15, -0.4]}>
        {/* Pot */}
        <mesh>
          <cylinderGeometry args={[0.16, 0.12, 0.3]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.6} />
        </mesh>
        {/* Foliage spheres */}
        <mesh position={[0, 0.25, 0]}>
          <sphereGeometry args={[0.2, 12, 12]} />
          <meshStandardMaterial color="#2d4a29" roughness={0.8} />
        </mesh>
        <mesh position={[0.08, 0.32, 0.05]}>
          <sphereGeometry args={[0.14, 12, 12]} />
          <meshStandardMaterial color="#3b5e36" roughness={0.8} />
        </mesh>
      </group>
    </group>
  );
}

// Floating Tech Badges
function FloatingTechBadges({ isMobile }) {
  const badges = [
    { name: 'Java', pos: isMobile ? [-1.6, 1.4, 0.2] : [-2.8, 1.8, 0.5], color: '#F5C542' },
    { name: 'Python', pos: isMobile ? [1.6, 1.3, 0.1] : [2.7, 1.6, 0.2], color: '#FFD966' },
    { name: 'JavaScript', pos: isMobile ? [-1.5, -0.1, 0.5] : [-2.5, -0.2, 1.0], color: '#D4A72C' },
    { name: 'React', pos: isMobile ? [1.5, 0.1, 0.4] : [2.6, 0.1, 0.8], color: '#F5C542' },
    { name: 'MySQL', pos: isMobile ? [1.4, -0.8, 0.2] : [2.4, -0.9, 0.4], color: '#FFD966' },
    { name: 'Git & GitHub', pos: isMobile ? [-1.4, -0.9, 0.2] : [-2.6, -1.0, 0.3], color: '#D4A72C' },
  ];

  return (
    <>
      {badges.map((b, idx) => (
        <Float key={idx} speed={1.8 + idx * 0.3} rotationIntensity={0.5} floatIntensity={0.8} position={b.pos}>
          <mesh>
            <boxGeometry args={[isMobile ? 0.85 : 1.0, 0.34, 0.06]} />
            <meshStandardMaterial
              color="#0d0d0d"
              roughness={0.2}
              metalness={0.9}
              transparent
              opacity={0.85}
            />
          </mesh>
          {/* Gold Outline */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[isMobile ? 0.89 : 1.04, 0.38, 0.02]} />
            <meshStandardMaterial color={b.color} emissive={b.color} emissiveIntensity={0.5} />
          </mesh>
        </Float>
      ))}
    </>
  );
}

// Master Canvas Component
export default function ThreeCanvas() {
  const mousePos = useRef({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e) => {
      mousePos.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="three-canvas-container" style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Canvas
        camera={{ position: [0, 0.5, isMobile ? 6.2 : 4.8], fov: isMobile ? 55 : 45 }}
        style={{ width: '100%', height: '100%', background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-3, 3, 2]} intensity={2.2} color="#F5C542" />
        <pointLight position={[3, 2, 2]} intensity={1.7} color="#FFD966" />
        <spotLight position={[0, 5, 2]} intensity={2.0} angle={0.6} penumbra={0.8} color="#F5C542" />

        <WorkstationScene mousePos={mousePos} />
        <FloatingTechBadges isMobile={isMobile} />

        {/* Cinematic Gold Particles */}
        <Sparkles count={isMobile ? 35 : 75} scale={[7, 5, 5]} size={isMobile ? 2.5 : 3.5} speed={0.4} color="#F5C542" />
        <Sparkles count={isMobile ? 20 : 45} scale={[6, 4, 4]} size={isMobile ? 2.0 : 2.5} speed={0.6} color="#FFD966" />
      </Canvas>
    </div>
  );
}
