import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

export function MainSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
      sphereRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.2;
    }
  });

  return (
    <group>
      <Float
        speed={2}
        rotationIntensity={1}
        floatIntensity={1}
      >
        <Sphere ref={sphereRef} args={[1, 100, 100]} scale={2}>
          <MeshDistortMaterial
            color="#b185db"
            attach="material"
            distort={0.5}
            speed={2}
            roughness={0.2}
            metalness={0.6}
          />
        </Sphere>
      </Float>
    </group>
  );
}