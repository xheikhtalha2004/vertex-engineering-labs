'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import * as THREE from 'three';

/**
 * CrystalMesh - Main 3D crystalline structure for hero section
 * Features: Rotating icos icosahedron, wireframe overlay, orbital rings, floating particles
 */
export default function CrystalMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.LineSegments>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
    if (wireRef.current) {
      wireRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      wireRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group>
      {/* Main crystal body */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2, 1]} />
        <meshPhongMaterial 
          color="#4F6DF5" 
          transparent 
          opacity={0.15}
          shininess={100}
          specular="#4F6DF5"
        />
      </mesh>
      
      {/* Wireframe overlay */}
      <lineSegments ref={wireRef}>
        <icosahedronGeometry args={[2, 1]} />
        <lineBasicMaterial color="#4F6DF5" transparent opacity={0.6} />
      </lineSegments>
      
      {/* Inner glow sphere */}
      <mesh>
        <sphereGeometry args={[0.8, 16, 16]} />
        <meshBasicMaterial color="#4F6DF5" transparent opacity={0.3} />
      </mesh>
      
      {/* Orbital rings */}
      {[...Array(3)].map((_, i) => (
        <group key={i} rotation={[Math.PI / 3 * i, Math.PI / 4 * i, 0]}>
          <Line
            points={[...Array(65)].map((_, j) => {
              const angle = (j / 64) * Math.PI * 2;
              return new THREE.Vector3(
                Math.cos(angle) * (3.5 + i * 0.5),
                Math.sin(angle) * (3.5 + i * 0.5),
                0
              );
            })}
            color="#4F6DF5"
            transparent
            opacity={0.15 - i * 0.03}
            lineWidth={1}
          />
        </group>
      ))}
      
      {/* Floating particles */}
      {[...Array(12)].map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const radius = 4 + Math.random() * 1.5;
        return (
          <mesh key={i} position={[
            Math.cos(angle) * radius,
            Math.sin(angle) * radius * 0.5,
            (Math.random() - 0.5) * 3
          ]}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshBasicMaterial color="#4F6DF5" transparent opacity={0.6} />
          </mesh>
        );
      })}
    </group>
  );
}
