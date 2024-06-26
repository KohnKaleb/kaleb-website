/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 c.glb --draco 
Author: AnshiNoWara (https://sketchfab.com/AnshiNoWara)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/c-1b277fc32bbc451fa6f40e298996ba91
Title: C++
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function C(props) {
  const { nodes, materials } = useGLTF('/c.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh geometry={nodes['C++_C++_0'].geometry} material={materials.material} position={[0, 0, 199.569]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      </group>
    </group>
  )
}

useGLTF.preload('/c.glb')
