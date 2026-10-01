import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import GoldParticles3D from './GoldParticles3D';
import HeroWorkspace3D from './HeroWorkspace3D';
import AboutEnvironment3D from './AboutEnvironment3D';
import SkillsUniverse3D from './SkillsUniverse3D';
import ProjectsGallery3D from './ProjectsGallery3D';
import EducationTimeline3D from './EducationTimeline3D';
import ProfilesSpace3D from './ProfilesSpace3D';
import ContactTerminal3D from './ContactTerminal3D';

// Camera Scroll & Mouse Controller
function CameraController({ mousePos, scrollProgress }) {
  useFrame((state) => {
    // 3D camera target positions: Hero (z=4.8) -> Contact (z=-117.2)
    // Total Z travel distance: 122 units
    const targetZ = 4.8 - (scrollProgress / 100) * 122;

    // Subtle parallax tilt from mouse movement
    const targetX = mousePos.current.x * 0.45;
    const targetY = mousePos.current.y * 0.35;

    // Smooth lerp camera position
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.08);
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, 0.5 + targetY, 0.05);

    // Look slightly downward into the 3D continuous world
    state.camera.lookAt(targetX * 0.2, targetY * 0.2, state.camera.position.z - 5);
  });

  return null;
}

export default function ExperienceWorld({ scrollProgress = 0, onSelectProject }) {
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
    <div
      className="experience-world-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <Canvas
        camera={{ position: [0, 0.5, 4.8], fov: isMobile ? 55 : 45 }}
        style={{ width: '100%', height: '100%', background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Master Lighting System */}
        <ambientLight intensity={0.85} />
        <directionalLight position={[5, 12, 8]} intensity={1.4} color="#ffffff" />
        <pointLight position={[-4, 4, 4]} intensity={2.5} color="#F5C542" />
        <pointLight position={[4, 3, 2]} intensity={2.0} color="#FFD966" />
        <spotLight position={[0, 8, 4]} intensity={2.2} angle={0.6} penumbra={0.8} color="#F5C542" />

        {/* Dynamic Camera Controller */}
        <CameraController mousePos={mousePos} scrollProgress={scrollProgress} />

        {/* Instanced 3D Particles across the world */}
        <GoldParticles3D count={isMobile ? 50 : 130} isMobile={isMobile} />

        {/* Continuous 3D World Environments along the Z-axis */}
        {/* 1. Hero Workspace (z = 0) */}
        <HeroWorkspace3D mousePos={mousePos} isMobile={isMobile} />

        {/* 2. About Environment (z = -18) */}
        <AboutEnvironment3D position={[0, 0, -18]} isMobile={isMobile} />

        {/* 3. Skills Universe (z = -38) */}
        <SkillsUniverse3D position={[0, 0, -38]} isMobile={isMobile} />

        {/* 4. Projects Gallery (z = -60) */}
        <ProjectsGallery3D position={[0, 0, -60]} isMobile={isMobile} onSelectProject={onSelectProject} />

        {/* 5. Education & Certifications Timeline (z = -82) */}
        <EducationTimeline3D position={[0, 0, -82]} isMobile={isMobile} />

        {/* 6. Developer Profiles Space (z = -102) */}
        <ProfilesSpace3D position={[0, 0, -102]} isMobile={isMobile} />

        {/* 7. Contact Terminal (z = -122) */}
        <ContactTerminal3D position={[0, 0, -122]} isMobile={isMobile} />
      </Canvas>
    </div>
  );
}
