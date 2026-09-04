import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Shapes() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Float floatIntensity={3} rotationIntensity={2} speed={2}>
        <mesh position={[-2, 1, 0]} castShadow>
          <octahedronGeometry args={[1]} />
          <meshStandardMaterial color="#ffb800" roughness={0.1} metalness={0.5} />
        </mesh>
      </Float>
      
      <Float floatIntensity={2} rotationIntensity={3} speed={1.5}>
        <mesh position={[2, -1, 1]} castShadow>
          <torusGeometry args={[0.8, 0.2, 16, 32]} />
          <meshStandardMaterial color="#1a2b4c" roughness={0.2} metalness={0.8} />
        </mesh>
      </Float>
      
      <Float floatIntensity={4} rotationIntensity={1} speed={1}>
        <mesh position={[0, 2, -2]} castShadow>
          <icosahedronGeometry args={[0.7]} />
          <meshStandardMaterial color="#007bff" roughness={0.3} metalness={0.2} wireframe />
        </mesh>
      </Float>
    </group>
  );
}

export function AbstractGeometry3D() {
  return (
    <div className="w-full h-full absolute inset-0 -z-10 pointer-events-none opacity-50">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <Shapes />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
