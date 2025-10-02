import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function FloatingParticles({ count = 600 }) {
  const points = useRef<THREE.Points>(null);
  const positions = useMemo(() => new Float32Array(count * 3), [count]);
  const speeds = useMemo(() => new Float32Array(count), [count]);

  useMemo(() => {
    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
      speeds[i] = 0.001 + Math.random() * 0.006;
    }
  }, [count, positions, speeds]);

  useFrame((state) => {
    if (!points.current) return;
    const t = state.clock.getElapsedTime();
    const arr = points.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] += Math.sin(t * speeds[i]) * 0.005;
    }
    points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#ffffff" sizeAttenuation transparent opacity={0.9} />
    </points>
  );
}

export function LowPolyWave() {
  const meshRef = useRef<THREE.Mesh>(null);
  const geomRef = useRef<THREE.PlaneGeometry>(null);

  useMemo(() => {
    // nothing eager
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const geom = geomRef.current;
    if (!geom) return;
    const pos = geom.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z = Math.sin(x * 1.2 + t * 1.4) * 0.15 + Math.cos(y * 1.3 + t * 1.1) * 0.15;
      pos.setZ(i, z);
    }
    pos.needsUpdate = true;
    geom.computeVertexNormals();
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(t * 0.08) * 0.02;
    }
  });

  return (
    <mesh ref={meshRef} rotation-x={-Math.PI / 2} receiveShadow>
      <planeGeometry ref={geomRef} args={[8, 8, 80, 80]} />
      <meshStandardMaterial color="#27408b" wireframe={false} flatShading />
    </mesh>
  );
}

export function AnimatedText() {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t * 0.6) * 0.2;
  });
  return (
    <group ref={group}>
      <mesh>
        <torusKnotGeometry args={[1.1, 0.3, 160, 24]} />
        <meshStandardMaterial color="#5b8bf7" metalness={0.6} roughness={0.25} />
      </mesh>
    </group>
  );
}


