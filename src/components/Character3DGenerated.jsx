import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float } from '@react-three/drei'
import * as THREE from 'three'

// Head component
function Head({ position = [0, 1.5, 0] }) {
  const headRef = useRef()
  
  useFrame(({ clock }) => {
    if (headRef.current) {
      // Gentle floating motion
      headRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 1.5) * 0.05
    }
  })

  return (
    <group ref={headRef} position={position}>
      {/* Main head */}
      <mesh>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial
          color="#9333ea"
          metalness={0.3}
          roughness={0.4}
        />
      </mesh>
      
      {/* Hair */}
      <mesh position={[0, 0.3, -0.1]}>
        <boxGeometry args={[0.5, 0.2, 0.3]} />
        <meshStandardMaterial color="#1a1a2e" />
      </mesh>
      
      {/* Eyes */}
      <mesh position={[-0.15, 0.1, 0.35]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0.15, 0.1, 0.35]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      
      {/* Eye pupils */}
      <mesh position={[-0.15, 0.1, 0.38]}>
        <sphereGeometry args={[0.03, 16, 16]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      <mesh position={[0.15, 0.1, 0.38]}>
        <sphereGeometry args={[0.03, 16, 16]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      
      {/* Glasses */}
      <mesh position={[-0.25, 0.05, 0.32]}>
        <torusGeometry args={[0.12, 0.02, 16, 32]} />
        <meshStandardMaterial color="#ec4899" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0.25, 0.05, 0.32]}>
        <torusGeometry args={[0.12, 0.02, 16, 32]} />
        <meshStandardMaterial color="#ec4899" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0.05, 0.32]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.15, 0.02, 0.02]} />
        <meshStandardMaterial color="#ec4899" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Smile */}
      <mesh position={[0, -0.1, 0.35]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.15, 0.02, 16, 32]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
    </group>
  )
}

// Torso component
function Torso({ position = [0, 0.5, 0] }) {
  const torsoRef = useRef()
  
  useFrame(({ clock }) => {
    if (torsoRef.current) {
      torsoRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 1.5) * 0.05
    }
  })

  return (
    <group ref={torsoRef} position={position}>
      <mesh>
        <boxGeometry args={[0.6, 0.8, 0.4]} />
        <meshStandardMaterial
          color="#7c3aed"
          metalness={0.2}
          roughness={0.5}
        />
      </mesh>
      
      {/* Shirt details */}
      <mesh position={[0, 0.2, 0.21]}>
        <boxGeometry args={[0.3, 0.2, 0.05]} />
        <meshStandardMaterial color="#6d28d9" />
      </mesh>
    </group>
  )
}

// Waving arm with proper hierarchy
function WavingArm({ position = [0.5, 0.8, 0] }) {
  const shoulderRef = useRef()
  const handRef = useRef()
  
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()
    
    if (shoulderRef.current) {
      // Raise arm up high and keep it there
      const armLift = -Math.PI / 2.2
      shoulderRef.current.rotation.x = armLift
      shoulderRef.current.rotation.z = -0.2
    }
    
    if (handRef.current) {
      // Hand rotates at the top - side to side rotation
      const waveHand = Math.sin(time * 2.5) * 0.6
      handRef.current.rotation.z = waveHand
      handRef.current.rotation.x = Math.sin(time * 2.5) * 0.15
    }
  })

  return (
    <group position={position}>
      <group ref={shoulderRef} rotation={[0, 0, -0.2]}>
        {/* Upper arm */}
        <mesh position={[0, -0.3, 0]}>
          <boxGeometry args={[0.15, 0.5, 0.15]} />
          <meshStandardMaterial color="#8b5cf6" />
        </mesh>
        
        {/* Lower arm */}
        <group position={[0, -0.7, 0]}>
          <mesh position={[0, -0.2, 0]}>
            <boxGeometry args={[0.13, 0.4, 0.13]} />
            <meshStandardMaterial color="#a78bfa" />
          </mesh>
          
          {/* Hand */}
          <group ref={handRef} position={[0, -0.5, 0]}>
            <mesh>
              <boxGeometry args={[0.12, 0.12, 0.1]} />
              <meshStandardMaterial color="#c4b5fd" />
            </mesh>
            {/* Fingers */}
            <mesh position={[-0.04, -0.08, 0]}>
              <boxGeometry args={[0.025, 0.1, 0.025]} />
              <meshStandardMaterial color="#c4b5fd" />
            </mesh>
            <mesh position={[0, -0.08, 0]}>
              <boxGeometry args={[0.025, 0.1, 0.025]} />
              <meshStandardMaterial color="#c4b5fd" />
            </mesh>
            <mesh position={[0.04, -0.08, 0]}>
              <boxGeometry args={[0.025, 0.1, 0.025]} />
              <meshStandardMaterial color="#c4b5fd" />
            </mesh>
          </group>
        </group>
      </group>
    </group>
  )
}

// Left arm (static)
function LeftArm({ position = [-0.5, 0.8, 0] }) {
  return (
    <group position={position} rotation={[0, 0, 0.2]}>
      <mesh position={[0, -0.3, 0]}>
        <boxGeometry args={[0.15, 0.5, 0.15]} />
        <meshStandardMaterial color="#8b5cf6" />
      </mesh>
      <mesh position={[0, -0.7, 0]}>
        <boxGeometry args={[0.13, 0.4, 0.13]} />
        <meshStandardMaterial color="#a78bfa" />
      </mesh>
      <mesh position={[0, -0.95, 0]}>
        <boxGeometry args={[0.12, 0.12, 0.1]} />
        <meshStandardMaterial color="#c4b5fd" />
      </mesh>
    </group>
  )
}

// Legs
function Legs({ position = [0, -0.5, 0] }) {
  return (
    <group position={position}>
      {/* Left leg */}
      <mesh position={[-0.15, -0.6, 0]}>
        <boxGeometry args={[0.15, 0.6, 0.15]} />
        <meshStandardMaterial color="#6d28d9" />
      </mesh>
      {/* Right leg */}
      <mesh position={[0.15, -0.6, 0]}>
        <boxGeometry args={[0.15, 0.6, 0.15]} />
        <meshStandardMaterial color="#6d28d9" />
      </mesh>
      {/* Feet */}
      <mesh position={[-0.15, -1.1, 0.1]}>
        <boxGeometry args={[0.15, 0.1, 0.25]} />
        <meshStandardMaterial color="#1a1a2e" />
      </mesh>
      <mesh position={[0.15, -1.1, 0.1]}>
        <boxGeometry args={[0.15, 0.1, 0.25]} />
        <meshStandardMaterial color="#1a1a2e" />
      </mesh>
    </group>
  )
}

// Main character group
function Character() {
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.2}>
      <group>
        <Head />
        <Torso />
        <WavingArm />
        <LeftArm />
        <Legs />
      </group>
    </Float>
  )
}

const Character3DGenerated = ({ className = '' }) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0.5, 3], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, 3, -5]} color="#ec4899" intensity={0.5} />
        <directionalLight position={[0, 5, 5]} intensity={0.8} />
        <spotLight position={[0, 5, 0]} angle={0.5} penumbra={0.5} intensity={0.5} />
        
        <Character />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.8}
        />
      </Canvas>
    </div>
  )
}

export default Character3DGenerated

