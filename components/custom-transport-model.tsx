"use client"

import { useGLTF } from "@react-three/drei"
import { useRef } from "react"

interface CustomTransportModelProps {
  rotation?: number
}

function CustomTransportModel({ rotation = 0 }: CustomTransportModelProps) {
  // Reference the GLB file from the public folder
  const { scene } = useGLTF("/models/transport-vehicle.glb")
  
  // Clone the scene so each component gets its own instance
  const clonedScene = useRef(scene.clone())

  return <primitive object={clonedScene.current} scale={1.5} position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, rotation]} />
}

// Preload the model for better performance
useGLTF.preload("/models/transport-vehicle.glb")

export default CustomTransportModel
