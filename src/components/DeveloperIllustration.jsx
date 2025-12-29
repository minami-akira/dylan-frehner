import React from 'react'
import { motion } from 'framer-motion'

const DeveloperIllustration = ({ className = '' }) => {
  return (
    <div className={`w-full h-full flex items-center justify-center ${className}`}>
      <motion.div
        className="relative w-full max-w-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <svg
          viewBox="0 0 400 500"
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background gradient */}
          <defs>
            <linearGradient id="skinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fdbcb4" />
              <stop offset="100%" stopColor="#f8a5a5" />
            </linearGradient>
            <linearGradient id="hairGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2c1810" />
              <stop offset="100%" stopColor="#1a0f08" />
            </linearGradient>
            <linearGradient id="shirtGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#6d28d9" />
            </linearGradient>
            <linearGradient id="screenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </linearGradient>
          </defs>

          {/* Desk */}
          <rect x="50" y="380" width="300" height="20" fill="#1e293b" rx="5" />
          
          {/* Monitor */}
          <g>
            {/* Monitor stand */}
            <rect x="180" y="360" width="40" height="20" fill="#334155" />
            {/* Monitor screen */}
            <rect x="120" y="200" width="160" height="160" fill="#0f172a" rx="5" />
            <rect x="130" y="210" width="140" height="140" fill="url(#screenGradient)" rx="3" />
            {/* Screen glow */}
            <rect x="125" y="205" width="150" height="150" fill="#3b82f6" opacity="0.3" rx="3" />
            {/* Code lines on screen */}
            <line x1="145" y1="230" x2="245" y2="230" stroke="#10b981" strokeWidth="2" />
            <line x1="145" y1="250" x2="220" y2="250" stroke="#10b981" strokeWidth="2" />
            <line x1="145" y1="270" x2="255" y2="270" stroke="#10b981" strokeWidth="2" />
            <line x1="145" y1="290" x2="235" y2="290" stroke="#10b981" strokeWidth="2" />
            <line x1="145" y1="310" x2="200" y2="310" stroke="#10b981" strokeWidth="2" />
            {/* Monitor frame */}
            <rect x="115" y="195" width="170" height="170" fill="none" stroke="#475569" strokeWidth="3" rx="5" />
          </g>

          {/* Keyboard */}
          <rect x="140" y="370" width="120" height="8" fill="#334155" rx="2" />
          <rect x="145" y="372" width="110" height="4" fill="#1e293b" rx="1" />

          {/* Mouse */}
          <ellipse cx="280" cy="374" rx="12" ry="8" fill="#475569" />

          {/* Chair */}
          <rect x="220" y="340" width="60" height="40" fill="#475569" rx="3" />
          <rect x="225" y="335" width="50" height="8" fill="#64748b" rx="2" />

          {/* Developer - Head */}
          <g>
            {/* Face */}
            <ellipse cx="200" cy="150" rx="45" ry="50" fill="url(#skinGradient)" />
            
            {/* Hair */}
            <path
              d="M 155 120 Q 155 100 165 100 Q 175 90 185 95 Q 195 90 205 95 Q 215 90 225 95 Q 235 90 245 100 Q 255 100 255 120 Q 255 140 245 150 Q 235 160 225 155 Q 215 160 205 155 Q 195 160 185 155 Q 175 160 165 150 Q 155 140 155 120 Z"
              fill="url(#hairGradient)"
            />
            
            {/* Eyes */}
            <ellipse cx="185" cy="145" rx="8" ry="10" fill="#ffffff" />
            <ellipse cx="215" cy="145" rx="8" ry="10" fill="#ffffff" />
            <ellipse cx="185" cy="147" rx="5" ry="7" fill="#000000" />
            <ellipse cx="215" cy="147" rx="5" ry="7" fill="#000000" />
            
            {/* Glasses */}
            <ellipse cx="185" cy="145" rx="15" ry="12" fill="none" stroke="#ec4899" strokeWidth="2" />
            <ellipse cx="215" cy="145" rx="15" ry="12" fill="none" stroke="#ec4899" strokeWidth="2" />
            <line x1="200" y1="145" x2="200" y2="145" stroke="#ec4899" strokeWidth="2" />
            
            {/* Nose */}
            <ellipse cx="200" cy="160" rx="4" ry="6" fill="#e8a5a5" />
            
            {/* Mouth - Smile */}
            <path
              d="M 185 175 Q 200 185 215 175"
              stroke="#000000"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </g>

          {/* Body - Torso */}
          <rect x="170" y="200" width="60" height="80" fill="url(#shirtGradient)" rx="5" />
          
          {/* Arms */}
          {/* Left arm (typing) */}
          <ellipse cx="160" cy="240" rx="12" ry="35" fill="url(#skinGradient)" transform="rotate(-20 160 240)" />
          <ellipse cx="155" cy="280" rx="10" ry="30" fill="url(#skinGradient)" transform="rotate(-10 155 280)" />
          
          {/* Right arm (on mouse) */}
          <ellipse cx="240" cy="240" rx="12" ry="35" fill="url(#skinGradient)" transform="rotate(20 240 240)" />
          <ellipse cx="245" cy="280" rx="10" ry="30" fill="url(#skinGradient)" transform="rotate(10 245 280)" />
          
          {/* Hands */}
          <ellipse cx="150" cy="310" rx="8" ry="12" fill="url(#skinGradient)" />
          
          {/* Animated waving right hand */}
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 250 310; 20 250 310; -20 250 310; 20 250 310; 0 250 310"
              dur="1s"
              repeatCount="indefinite"
            />
            <ellipse cx="250" cy="310" rx="8" ry="12" fill="url(#skinGradient)" />
          </g>
          
          {/* Legs */}
          <rect x="180" y="280" width="20" height="100" fill="#1e293b" rx="3" />
          <rect x="200" y="280" width="20" height="100" fill="#1e293b" rx="3" />
          
          {/* Shoes */}
          <ellipse cx="190" cy="385" rx="15" ry="8" fill="#0f172a" />
          <ellipse cx="210" cy="385" rx="15" ry="8" fill="#0f172a" />
        </svg>
      </motion.div>
    </div>
  )
}

export default DeveloperIllustration

