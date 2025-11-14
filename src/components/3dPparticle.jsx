import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Scene3D() {
  const sphereRef = useRef();
  const materialRef = useRef();
  let mouseX = 0;
  let mouseY = 0;

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Smooth rotation based on mouse position
    sphereRef.current.rotation.y += (mouseX * 0.1 - sphereRef.current.rotation.y) * 0.1;
    sphereRef.current.rotation.x += (mouseY * 0.1 - sphereRef.current.rotation.x) * 0.1;
    
    // Animate distortion
    if (materialRef.current) {
      materialRef.current.distort = THREE.MathUtils.lerp(
        materialRef.current.distort,
        Math.sin(time * 0.5) * 0.3 + 0.5,
        0.1
      );
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 5]} intensity={1} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#6366F1" />
      
      <Sphere ref={sphereRef} args={[1.2, 100, 100]} >
        <MeshDistortMaterial
          ref={materialRef}
          color="#8B5CF6"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </>
  );
}

export default Scene3D;