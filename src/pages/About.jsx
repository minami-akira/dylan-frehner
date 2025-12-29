import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import DeveloperIllustration from '../components/DeveloperIllustration'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const highlights = [
    {
      title: 'Agent Runtimes',
      description: 'Tool-calling, memory/state, structured outputs',
      icon: '🤖',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      title: 'RAG Systems',
      description: 'Semantic + lexical retrieval, vector search',
      icon: '🔍',
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      title: 'LLMOps',
      description: 'Offline benchmarks, A/B tests, safety checks',
      icon: '⚡',
      gradient: 'from-green-600 to-emerald-600',
    },
    {
      title: 'Production Ready',
      description: 'Docker, Kubernetes, CI/CD, observability',
      icon: '🚀',
      gradient: 'from-orange-600 to-red-600',
    },
  ]

  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              About Me
            </motion.h1>
            <motion.p
              className="text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              I'm a GenAI / AI Platform Engineer specializing in building agent runtimes,
              tool-calling systems, and RAG retrieval platforms.
            </motion.p>
            <motion.p
              className="text-lg text-slate-500 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              Passionate about creating intelligent systems that solve real-world problems
              through cutting-edge AI technology and robust engineering practices.
            </motion.p>
          </motion.div>

          {/* Developer Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-96 lg:h-[500px] w-full"
          >
            <DeveloperIllustration />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-purple-500/50 transition-all group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-purple-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/20 p-8 rounded-xl max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Proven Execution
          </h3>
          <ul className="space-y-3 text-slate-300">
            {[
              '#1 rank on Bittensor Subnet 62 (Ridges) with agentic software-engineering agent',
              'Shipped production medical-imaging inference pipeline (Subnet 76)',
              'End-to-end ownership of GenAI products with strong Python + cloud-native delivery',
            ].map((item, i) => (
              <motion.li
                key={i}
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <span className="text-purple-400 mr-3 mt-1">✓</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>
    </div>
  )
}

export default About
