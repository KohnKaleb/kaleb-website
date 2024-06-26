/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 css.glb --draco 
Author: Erik Egnatosyan (https://sketchfab.com/sans.egnatosyan)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/css-logo-3d-model-17b34c2b98714c6799544939f476eed3
Title: CSS logo 3d model
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Css(props) {
  const { nodes, materials } = useGLTF('/css.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -1.578]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[20.789, 136.746, 10.172]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group position={[326.27, 35.487, 1926.616]}>
              <mesh geometry={nodes.Object_7.geometry} material={materials['Material.002']} />
              <mesh geometry={nodes.Object_8.geometry} material={materials['Material.003']} />
            </group>
            <mesh geometry={nodes.Object_5.geometry} material={materials['Material.005']} position={[-142.941, -32.748, -5922.869]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={100} />
            <mesh geometry={nodes.Object_10.geometry} material={materials['Material.001']} position={[-182.684, 35.487, 1926.616]} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/css.glb')
