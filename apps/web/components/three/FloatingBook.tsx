"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows, PresentationControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function BookModel() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <Float floatIntensity={2} rotationIntensity={1.5}>
      <mesh ref={meshRef} castShadow receiveShadow>
        <boxGeometry args={[2, 0.4, 3]} />
        <meshStandardMaterial color="#1a2b4c" roughness={0.2} metalness={0.1} />
        {/* Pages */}
        <mesh position={[0.05, 0, 0]}>
          <boxGeometry args={[1.9, 0.3, 2.9]} />
          <meshStandardMaterial color="#fffdf5" roughness={0.8} />
        </mesh>
      </mesh>
    </Float>
  );
}

export function FloatingBook3D() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <PresentationControls global config={{ mass: 2, tension: 500 }} snap={{ mass: 4, tension: 1500 }} rotation={[0, 0.3, 0]} polar={[-Math.PI / 3, Math.PI / 3]} azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
          <BookModel />
        </PresentationControls>
        <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2} far={4} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
