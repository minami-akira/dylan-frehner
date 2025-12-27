import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const highlights = [
    {
      title: 'Agent Runtimes',
      description: 'Tool-calling, memory/state, structured outputs',
      icon: '🤖',
    },
    {
      title: 'RAG Systems',
      description: 'Semantic + lexical retrieval, vector search',
      icon: '🔍',
    },
    {
      title: 'LLMOps',
      description: 'Offline benchmarks, A/B tests, safety checks',
      icon: '⚡',
    },
    {
      title: 'Production Ready',
      description: 'Docker, Kubernetes, CI/CD, observability',
      icon: '🚀',
    },
  ]

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen py-24 px-6 relative"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            About Me
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            I'm a GenAI / AI Platform Engineer specializing in building agent runtimes,
            tool-calling systems, and RAG retrieval platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-purple-500/50 transition-all"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-white">
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
            <li className="flex items-start">
              <span className="text-purple-400 mr-3 mt-1">✓</span>
              <span>#1 rank on Bittensor Subnet 62 (Ridges) with agentic software-engineering agent</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-3 mt-1">✓</span>
              <span>Shipped production medical-imaging inference pipeline (Subnet 76)</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-3 mt-1">✓</span>
              <span>End-to-end ownership of GenAI products with strong Python + cloud-native delivery</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default About
