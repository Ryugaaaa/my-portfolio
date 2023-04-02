import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import LinkedIn3D from "./LinkedIn3D"

const SocialMedia = () => {
  return (
    <Canvas>
    <Suspense fallback={null}>
      <Stage environment="city" intensity={0.6}>
        <LinkedIn3D/>
      </Stage>
      <OrbitControls enableZoom={false} autoRotate />
    </Suspense>
  </Canvas>
  )
}

export default SocialMedia