import { Float, OrbitControls } from "@react-three/drei"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"
import nftImageUrl from "../../assets/nft-image.png"

function NFTBox() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const texture = useLoader(THREE.TextureLoader, nftImageUrl)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    meshRef.current.rotation.y = Math.sin(t * 1) * 0.5
  })

  return (
    <Float speed={0.4} rotationIntensity={0.2} floatIntensity={1}>
      <mesh ref={meshRef} scale={1} rotation={[0, 0, 0]}>
        <boxGeometry args={[3, 3, 0.01]} />
        <meshStandardMaterial transparent map={texture} />
      </mesh>
    </Float>
  )
}

export function ThreeScene() {
  return (
    <Canvas camera={{ fov: 50, position: [0, 0, 5] }}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={3} />
      <NFTBox />
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}
