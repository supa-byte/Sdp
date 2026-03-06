import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Sparkles, Text } from '@react-three/drei';
import * as THREE from 'three';

function SDLogo() {
  const groupRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = state.clock.elapsedTime * 0.5;
      ring1Ref.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = -state.clock.elapsedTime * 0.3;
      ring2Ref.current.rotation.y = state.clock.elapsedTime * 0.4;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={groupRef}>
        {/* SD Text */}
        <Text
          position={[0, 0, 0]}
          fontSize={2.5}
          font="https://fonts.gstatic.com/s/spacegrotesk/v15/V8mQoQDjQSkGpu8pn62IFA37Nq28Yw.woff"
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.05}
          outlineColor="#bc13fe"
        >
          SD
        </Text>

        {/* Planetary Rings */}
        <mesh ref={ring1Ref}>
          <torusGeometry args={[2.5, 0.05, 16, 100]} />
          <meshStandardMaterial color="#00f3ff" emissive="#00f3ff" emissiveIntensity={2} />
        </mesh>
        
        <mesh ref={ring2Ref} rotation={[Math.PI / 4, 0, 0]}>
          <torusGeometry args={[3.5, 0.02, 16, 100]} />
          <meshStandardMaterial color="#bc13fe" emissive="#bc13fe" emissiveIntensity={1} />
        </mesh>
      </group>
    </Float>
  );
}

export function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#00f3ff" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#bc13fe" />
        
        <SDLogo />
        
        <Sparkles count={300} scale={15} size={2} speed={0.4} opacity={0.5} color="#00ffff" />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
