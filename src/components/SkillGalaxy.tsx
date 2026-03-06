import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Text, Float } from '@react-three/drei';
import * as THREE from 'three';

const skills = [
  { name: 'AI Dev', color: '#00f3ff', radius: 1.5, speed: 0.5 },
  { name: 'Automation', color: '#bc13fe', radius: 2.5, speed: 0.3 },
  { name: 'Digital Mktg', color: '#00ffff', radius: 3.5, speed: 0.2 },
  { name: 'Web Dev', color: '#ff00ff', radius: 4.5, speed: 0.4 },
  { name: 'App Dev', color: '#00f3ff', radius: 5.5, speed: 0.25 },
  { name: 'UI/UX', color: '#bc13fe', radius: 6.5, speed: 0.15 },
];

function Planet({ skill, index }: { skill: any; index: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const planetRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += skill.speed * 0.01;
    }
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      <group position={[skill.radius, 0, 0]}>
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh ref={planetRef}>
            <sphereGeometry args={[0.3, 32, 32]} />
            <meshStandardMaterial
              color={skill.color}
              emissive={skill.color}
              emissiveIntensity={0.5}
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>
          <Text
            position={[0, 0.5, 0]}
            fontSize={0.2}
            color="white"
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.02}
            outlineColor="#000"
          >
            {skill.name}
          </Text>
        </Float>
      </group>
      {/* Orbit Ring */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[skill.radius - 0.02, skill.radius + 0.02, 64]} />
        <meshBasicMaterial color={skill.color} transparent opacity={0.1} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

export function SkillGalaxy() {
  return (
    <div className="w-full h-[600px] relative">
      <Canvas camera={{ position: [0, 5, 10], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        {/* Central Sun (Supan) */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh>
            <sphereGeometry args={[0.8, 64, 64]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive="#bc13fe"
              emissiveIntensity={2}
              roughness={0.1}
              metalness={1}
            />
          </mesh>
          <Text
            position={[0, 1.2, 0]}
            fontSize={0.4}
            color="white"
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.05}
            outlineColor="#000"
          >
            SD
          </Text>
        </Float>

        {skills.map((skill, index) => (
          <Planet key={index} skill={skill} index={index} />
        ))}

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2 + 0.2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
      
      <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
        <p className="text-gray-400 text-sm font-display uppercase tracking-widest">
          Drag to explore the skill galaxy
        </p>
      </div>
    </div>
  );
}
