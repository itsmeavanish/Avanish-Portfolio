import React from 'react'

export default function Main() {
  return (
    <Canvas >7-%
              <PerspectiveCamera makeDefault position={[0, 0, 5]} />
              <Scene3D />
              <ambientLight intensity={0.5} />
              <OrbitControls 
                enableZoom={false}
                enablePan={true}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
              />
      </Canvas>
  )
}
