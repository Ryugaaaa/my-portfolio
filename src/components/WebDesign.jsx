import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Laptop3D from "./Laptop3D"

const WebDesign = () => {
  return (
    <Canvas>
    <Suspense fallback={null}>
      <Stage environment="city" intensity={0.6}>
        <Laptop3D />
      </Stage>
      <OrbitControls enableZoom={false} autoRotate />
    </Suspense>
  </Canvas>
  )
}

export default WebDesign