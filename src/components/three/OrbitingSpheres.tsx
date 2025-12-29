import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Float, Octahedron, Torus } from '@react-three/drei';
import * as THREE from 'three';

export function OrbitingSpheres() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {[...Array(8)].map((_, i) => {
        const isEven = i % 2 === 0;
        const radius = 4;
        const angle = (i * Math.PI * 2) / 8;
        const position: [number, number, number] = [
          Math.cos(angle) * radius,
          Math.sin(angle) * radius,
          0
        ];

        return (
          <Float
            key={i}
            speed={1.5}
            rotationIntensity={1}
            floatIntensity={0.8}
            position={position}
          >
            {isEven ? (
              <Octahedron args={[0.3]}>
                <meshStandardMaterial
                  color="#d4b5ff"
                  metalness={0.6}
                  roughness={0.3}
                  emissive="#d4b5ff"
                  emissiveIntensity={0.3}
                />
              </Octahedron>
            ) : (
              <Torus args={[0.2, 0.1, 16, 32]} rotation={[Math.PI / 2, 0, 0]}>
                <meshStandardMaterial
                  color="#ffb5c0"
                  metalness={0.6}
                  roughness={0.3}
                  emissive="#ffb5c0"
                  emissiveIntensity={0.3}
                />
              </Torus>
            )}
          </Float>
        );
      })}
    </group>
  );
}