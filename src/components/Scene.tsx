import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Stars, Float } from '@react-three/drei';
import * as THREE from 'three';
import { MainSphere } from './three/MainSphere';
import { OrbitingSpheres } from './three/OrbitingSpheres';
import { SceneLighting } from './three/SceneLighting';

export function Scene() {
  return (
    <>
      <Stars 
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      
      <MainSphere />
      <OrbitingSpheres />
      <SceneLighting />
    </>
  );
}