import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Head({ position = [0, 0, 0] }) {
  const meshRef = useRef()
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime()
      // Gentle head movement that follows the waving motion
      meshRef.current.rotation.y = Math.sin(time * 0.5) * 0.1 + Math.sin(time * 2) * 0.05
      // Slight nod in sync with waving
      meshRef.current.rotation.x = Math.sin(time * 2) * 0.02
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <MeshDistortMaterial
          color="#9333ea"
          attach="material"
          distort={0.1}
          speed={1}
          roughness={0.2}
          metalness={0.6}
        />
      </mesh>
    </Float>
  )
}

function Body({ position = [0, -1.2, 0] }) {
  const meshRef = useRef()
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.1
    }
  })

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.3}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[1, 1.5, 0.8]} />
        <MeshDistortMaterial
          color="#7c3aed"
          attach="material"
          distort={0.05}
          speed={0.8}
          roughness={0.3}
          metalness={0.5}
        />
      </mesh>
    </Float>
  )
}

function Glasses({ position = [0, 0.1, 0.85] }) {
  return (
    <group position={position}>
      <mesh position={[-0.3, 0, 0]}>
        <torusGeometry args={[0.25, 0.03, 16, 100]} />
        <meshStandardMaterial color="#ec4899" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0.3, 0, 0]}>
        <torusGeometry args={[0.25, 0.03, 16, 100]} />
        <meshStandardMaterial color="#ec4899" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.15, 0.02, 0.02]} />
        <meshStandardMaterial color="#ec4899" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  )
}

// Waving arm component with proper joint hierarchy
function WavingArm({ position = [0.7, -0.8, 0] }) {
  const shoulderRef = useRef()
  const elbowRef = useRef()
  const handRef = useRef()
  
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()
    
    if (shoulderRef.current) {
      // Keep arm raised up high - fixed position, no vertical movement
      const armLift = -Math.PI / 2.5 // Raise arm up high and keep it there
      shoulderRef.current.rotation.x = armLift
      // Keep slight side angle for natural position
      shoulderRef.current.rotation.z = -0.3
    }
    
    if (elbowRef.current) {
      // Elbow stays fixed - no movement
      elbowRef.current.rotation.x = 0
    }
    
    if (handRef.current) {
      // Hand rotates at the top only - side to side rotation
      const waveHand = Math.sin(time * 2.5) * 0.6 // Rotate hand side to side
      handRef.current.rotation.z = waveHand
      // Slight wrist tilt for natural rotation
      handRef.current.rotation.x = Math.sin(time * 2.5) * 0.15
      handRef.current.rotation.y = Math.sin(time * 2.5) * 0.1
    }
  })

  return (
    <group position={position}>
      {/* Shoulder joint - controls entire arm */}
      <group ref={shoulderRef} rotation={[0, 0, -0.4]}>
        {/* Upper arm */}
        <mesh position={[0, -0.35, 0]}>
          <boxGeometry args={[0.2, 0.5, 0.2]} />
          <MeshDistortMaterial color="#8b5cf6" distort={0.05} speed={0.8} />
        </mesh>
        
        {/* Elbow joint */}
        <group ref={elbowRef} position={[0, -0.7, 0]}>
          {/* Lower arm */}
          <mesh position={[0, -0.25, 0]}>
            <boxGeometry args={[0.18, 0.4, 0.18]} />
            <MeshDistortMaterial color="#a78bfa" distort={0.05} speed={0.8} />
          </mesh>
          
          {/* Hand */}
          <group ref={handRef} position={[0, -0.5, 0]}>
            <mesh>
              <boxGeometry args={[0.15, 0.15, 0.1]} />
              <meshStandardMaterial color="#c4b5fd" />
            </mesh>
            {/* Fingers */}
            <mesh position={[-0.05, -0.08, 0]}>
              <boxGeometry args={[0.03, 0.12, 0.03]} />
              <meshStandardMaterial color="#c4b5fd" />
            </mesh>
            <mesh position={[0, -0.08, 0]}>
              <boxGeometry args={[0.03, 0.12, 0.03]} />
              <meshStandardMaterial color="#c4b5fd" />
            </mesh>
            <mesh position={[0.05, -0.08, 0]}>
              <boxGeometry args={[0.03, 0.12, 0.03]} />
              <meshStandardMaterial color="#c4b5fd" />
            </mesh>
          </group>
        </group>
      </group>
    </group>
  )
}

// Static left arm
function LeftArm({ position = [-0.7, -0.8, 0] }) {
  return (
    <group position={position} rotation={[0, 0, 0.3]}>
      <mesh position={[0, -0.3, 0]}>
        <boxGeometry args={[0.2, 0.5, 0.2]} />
        <MeshDistortMaterial color="#8b5cf6" distort={0.05} speed={0.8} />
      </mesh>
      <mesh position={[0, -0.7, 0]}>
        <boxGeometry args={[0.18, 0.4, 0.18]} />
        <MeshDistortMaterial color="#a78bfa" distort={0.05} speed={0.8} />
      </mesh>
      {/* Hand */}
      <mesh position={[0, -0.95, 0]}>
        <boxGeometry args={[0.15, 0.15, 0.1]} />
        <meshStandardMaterial color="#c4b5fd" />
      </mesh>
    </group>
  )
}

function Character() {
  return (
    <group>
      <Head />
      <Body />
      <Glasses />
      
      {/* Arms */}
      <LeftArm />
      <WavingArm />
    </group>
  )
}

const Character3D = ({ className = '' }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div className={`w-full h-full ${className}`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} color="#ec4899" intensity={0.5} />
        <directionalLight position={[0, 5, 5]} intensity={0.5} />
        
        <Character />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  )
}

export default Character3D

