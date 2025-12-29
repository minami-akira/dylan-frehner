import React, { useState } from 'react'
import { motion } from 'framer-motion'

const CharacterImage = ({ className = '', imageUrl = '/images/character.png' }) => {
  const [imageError, setImageError] = useState(false)

  return (
    <div className={`w-full h-full flex items-center justify-center ${className}`}>
      <motion.div
        className="relative"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Waving hand animation */}
        <motion.div
          className="absolute -top-4 -right-4 z-10"
          animate={{
            rotate: [0, 20, -20, 20, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            transformOrigin: 'bottom center',
          }}
        >
          <motion.div
            className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"
            style={{
              boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)',
            }}
          />
        </motion.div>

        {!imageError ? (
          /* Character image */
          <motion.img
            src={imageUrl}
            alt="Character"
            className="w-full h-auto max-w-md object-contain"
            onError={() => setImageError(true)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        ) : (
          /* Placeholder if image doesn't exist */
          <motion.div
            className="w-full h-full max-w-md mx-auto flex items-center justify-center bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl border border-purple-500/30"
            style={{ minHeight: '400px' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center p-8">
              <motion.div
                className="text-6xl mb-4"
                animate={{
                  rotate: [0, 20, -20, 20, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                👋
              </motion.div>
              <p className="text-slate-400 text-sm mt-4">
                Add your image at <code className="text-purple-400">public/images/character.png</code>
              </p>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

export default CharacterImage

