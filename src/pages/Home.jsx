import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Home = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  const quickLinks = [
    { name: 'View Projects', path: '/projects', icon: '🚀', color: 'from-purple-600 to-pink-600' },
    { name: 'My Experience', path: '/experience', icon: '💼', color: 'from-blue-600 to-cyan-600' },
    { name: 'Skills & Tech', path: '/skills', icon: '⚡', color: 'from-green-600 to-emerald-600' },
    { name: 'Get In Touch', path: '/contact', icon: '📧', color: 'from-orange-600 to-red-600' },
  ]

  return (
    <div className="min-h-screen pt-24">
      <section
        ref={ref}
        className="min-h-[90vh] flex items-center justify-center relative px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <motion.span
                className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm text-purple-300 font-medium"
                whileHover={{ scale: 1.05 }}
              >
                GenAI / AI Platform Engineer
              </motion.span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Dylan Frehner
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto leading-relaxed"
            >
              Building agent runtimes, tool-calling systems, and RAG retrieval platforms
            </motion.p>
            
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto"
            >
              Evaluation + LLMOps for reliable AI systems
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(139, 92, 246, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-lg font-semibold text-white transition-all shadow-lg shadow-purple-500/50"
                >
                  Get In Touch
                </motion.button>
              </Link>
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-slate-800/50 border border-slate-700 hover:bg-slate-800 rounded-lg font-semibold text-slate-200 transition-all"
                >
                  View My Work
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Quick Links Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {quickLinks.map((link, index) => (
              <Link key={index} to={link.path}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-purple-500/50 transition-all group cursor-pointer"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                    {link.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {link.name}
                  </h3>
                  <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${link.color} transition-all duration-300 rounded`} />
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
