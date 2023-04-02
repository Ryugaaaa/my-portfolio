import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import React3D from "./React3D"

const Development = () => {
  return (
    <Canvas>
    <Suspense fallback={null}>
      <Stage environment="city" intensity={0.6}>
        <React3D/>
      </Stage>
      <OrbitControls enableZoom={false} autoRotate />
    </Suspense>
  </Canvas>
  )
}

export default Development