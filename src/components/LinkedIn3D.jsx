/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 LinkedIn3D.gltf --transform
Author: timtime3d (https://sketchfab.com/timislav)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/linkedin-logo-b384da257fba4a6491393a8d887b1961
Title: Linkedin Logo
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/LinkedIn3D-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.Material} position={[0, 0, 0.12]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-1.03, 1.09, 0.07]} />
      <mesh geometry={nodes.Object_6.geometry} material={materials['Material.001']} position={[-0.78, -0.7, 0.24]} rotation={[Math.PI / 2, 0, 0]} scale={[2.33, 0.79, 2.33]} />
    </group>
  )
}

useGLTF.preload('/LinkedIn3D-transformed.glb')
