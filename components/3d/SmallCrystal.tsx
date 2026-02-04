'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * SmallCrystal - Smaller crystal for services section center
 */
export default function SmallCrystal() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
            meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.15) * 0.1;
        }
    });

    return (
        <group>
            <mesh ref={meshRef}>
                <icosahedronGeometry args={[1.2, 0]} />
                <meshPhongMaterial
                    color="#4F6DF5"
                    transparent
                    opacity={0.2}
                    shininess={100}
                />
            </mesh>
            <lineSegments>
                <icosahedronGeometry args={[1.2, 0]} />
                <lineBasicMaterial color="#4F6DF5" transparent opacity={0.8} />
            </lineSegments>
        </group>
    );
}
