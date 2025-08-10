import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Astronaut({ scrollProgress }) {
  const groupRef = useRef();
  const helmetRef = useRef();
  const laptopRef = useRef();

  const helmetMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: "#1a1a1a",
      metalness: 0.9,
      roughness: 0.1,
      envMapIntensity: 1,
    });
  }, []);

  const visorMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: "#333",
      metalness: 1,
      roughness: 0,
      transparent: true,
      opacity: 0.8,
    });
  }, []);

  const suitMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: "#0a0a0a",
      metalness: 0.3,
      roughness: 0.7,
    });
  }, []);

  const laptopMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: "#1a1a1a",
      metalness: 0.8,
      roughness: 0.2,
    });
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      const rotation = scrollProgress * Math.PI * 2;
      groupRef.current.rotation.y = rotation;

      const zPosition = 5 - scrollProgress * 3;
      groupRef.current.position.z = zPosition;

      const scale = 1 + scrollProgress * 0.5;
      groupRef.current.scale.setScalar(scale);
    }

    if (laptopRef.current) {
      laptopRef.current.position.set(0.5, -0.3, 0.8);
      laptopRef.current.rotation.set(-0.2, -0.3, 0);
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 5]}>
      <mesh position={[0, -1, 0]} material={suitMaterial}>
        <cylinderGeometry args={[0.6, 0.4, 2, 16]} />
      </mesh>

      <mesh
        position={[-0.8, -0.5, 0]}
        rotation={[0, 0, 0.3]}
        material={suitMaterial}
      >
        <cylinderGeometry args={[0.15, 0.12, 1.2, 8]} />
      </mesh>
      <mesh
        position={[0.8, -0.5, 0]}
        rotation={[0, 0, -0.3]}
        material={suitMaterial}
      >
        <cylinderGeometry args={[0.15, 0.12, 1.2, 8]} />
      </mesh>

      <group ref={helmetRef} position={[0, 0.8, 0]}>
        <mesh material={helmetMaterial}>
          <sphereGeometry args={[0.5, 32, 32]} />
        </mesh>

        <mesh position={[0, 0, 0.4]} material={visorMaterial}>
          <sphereGeometry args={[0.35, 16, 16, 0, Math.PI]} />
        </mesh>
      </group>

      <group ref={laptopRef}>
        <mesh position={[0, 0, 0]} material={laptopMaterial}>
          <boxGeometry args={[0.8, 0.02, 0.6]} />
        </mesh>

        <mesh
          position={[0, 0.25, -0.25]}
          rotation={[-0.3, 0, 0]}
          material={laptopMaterial}
        >
          <boxGeometry args={[0.8, 0.5, 0.02]} />
        </mesh>

        <mesh position={[0, 0.25, -0.24]} rotation={[-0.3, 0, 0]}>
          <boxGeometry args={[0.75, 0.45, 0.001]} />
          <meshBasicMaterial color="#4FC3F7" transparent opacity={0.8} />
        </mesh>
      </group>

      {Array.from({ length: 20 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 4,
            (Math.random() - 0.5) * 4,
            (Math.random() - 0.5) * 4,
          ]}
        >
          <sphereGeometry args={[0.01, 4, 4]} />
          <meshBasicMaterial color="#4FC3F7" transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  );
}

export default Astronaut;
