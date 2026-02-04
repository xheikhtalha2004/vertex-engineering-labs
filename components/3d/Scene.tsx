'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { ReactNode, Suspense } from 'react';

interface SceneProps {
    children: ReactNode;
    className?: string;
    cameraPosition?: [number, number, number];
    cameraFov?: number;
    enableOrbitControls?: boolean;
    autoRotate?: boolean;
}

/**
 * Scene - Reusable Three.js Canvas wrapper
 * Handles camera setup, lights, and orbital controls
 */
export default function Scene({
    children,
    className = '',
    cameraPosition = [0, 0, 8],
    cameraFov = 50,
    enableOrbitControls = true,
    autoRotate = false
}: SceneProps) {
    return (
        <div className={className}>
            <Canvas camera={{ position: cameraPosition, fov: cameraFov }}>
                <Suspense fallback={null}>
                    <ambientLight intensity={0.3} />
                    <pointLight position={[10, 10, 10]} intensity={1} color="#4F6DF5" />
                    <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7B8FF7" />

                    {children}

                    {enableOrbitControls && (
                        <OrbitControls
                            enableZoom={false}
                            enablePan={false}
                            autoRotate={autoRotate}
                        />
                    )}
                </Suspense>
            </Canvas>
        </div>
    );
}
