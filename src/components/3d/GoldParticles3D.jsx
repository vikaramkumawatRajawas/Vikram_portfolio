import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function GoldParticles3D({ count = 120, isMobile = false }) {
  const meshRef = useRef();
  const actualCount = isMobile ? Math.floor(count * 0.4) : count;

  const [positions, speeds] = useMemo(() => {
    const pos = new Float32Array(actualCount * 3);
    const spd = new Float32Array(actualCount * 3);
    for (let i = 0; i < actualCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 24;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = -Math.random() * 140 + 10;

      spd[i * 3] = (Math.random() - 0.5) * 0.015;
      spd[i * 3 + 1] = (Math.random() - 0.5) * 0.015;
      spd[i * 3 + 2] = (Math.random() - 0.5) * 0.01;
    }
    return [pos, spd];
  }, [actualCount]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(() => {
    if (!meshRef.current) return;
    for (let i = 0; i < actualCount; i++) {
      positions[i * 3] += speeds[i * 3];
      positions[i * 3 + 1] += speeds[i * 3 + 1];
      positions[i * 3 + 2] += speeds[i * 3 + 2];

      // Wrap particles around 3D world boundaries
      if (positions[i * 3] < -14) positions[i * 3] = 14;
      if (positions[i * 3] > 14) positions[i * 3] = -14;
      if (positions[i * 3 + 1] < -12) positions[i * 3 + 1] = 12;
      if (positions[i * 3 + 1] > 12) positions[i * 3 + 1] = -12;

      dummy.position.set(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]);
      dummy.scale.setScalar(0.04 + (i % 3) * 0.02);
      dummy.updateMatrix();

      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, actualCount]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshStandardMaterial
        color="#F5C542"
        emissive="#FFD966"
        emissiveIntensity={1.2}
        roughness={0.2}
        metalness={0.9}
      />
    </instancedMesh>
  );
}
