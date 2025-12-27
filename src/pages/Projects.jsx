import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Bittensor Subnet 62 Agent',
      category: 'ai',
      description: 'Agentic software-engineering agent that achieved #1 rank on Bittensor Subnet 62',
      tech: ['Python', 'LLM APIs', 'Tool-calling', 'Docker'],
      gradient: 'from-purple-600 to-pink-600',
      icon: '🤖',
    },
    {
      id: 2,
      title: 'Medical Imaging Pipeline',
      category: 'ai',
      description: 'Production medical-imaging inference pipeline for Bittensor Subnet 76',
      tech: ['Python', 'ML', 'Docker', 'Kubernetes'],
      gradient: 'from-blue-600 to-cyan-600',
      icon: '🏥',
    },
    {
      id: 3,
      title: 'RAG Retrieval System',
      category: 'ai',
      description: 'Advanced RAG system with semantic + lexical retrieval and vector search',
      tech: ['Python', 'Vector DBs', 'LangChain', 'Embeddings'],
      gradient: 'from-green-600 to-emerald-600',
      icon: '🔍',
    },
    {
      id: 4,
      title: 'LLMOps Platform',
      category: 'platform',
      description: 'Evaluation and reliability platform with offline benchmarks and A/B testing',
      tech: ['Python', 'MLOps', 'Monitoring', 'Azure'],
      gradient: 'from-orange-600 to-red-600',
      icon: '⚡',
    },
    {
      id: 5,
      title: 'Agent Runtime Engine',
      category: 'ai',
      description: 'Core agent runtime with task planning, memory management, and tool-calling',
      tech: ['Python', 'Agent Systems', 'State Management'],
      gradient: 'from-indigo-600 to-purple-600',
      icon: '⚙️',
    },
    {
      id: 6,
      title: 'Cloud Infrastructure',
      category: 'platform',
      description: 'Secure cloud deployments with containerization and observability',
      tech: ['Docker', 'Kubernetes', 'Azure', 'AWS', 'Terraform'],
      gradient: 'from-teal-600 to-blue-600',
      icon: '☁️',
    },
  ]

  const categories = ['all', 'ai', 'platform']
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Projects
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Showcasing my work in AI, agent systems, and cloud infrastructure
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-lg font-medium transition-all capitalize ${
                filter === cat
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-slate-800/50 border border-slate-700 text-slate-400 hover:border-purple-500/50'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-purple-500/50 transition-all group cursor-pointer"
              >
                <div className={`text-5xl mb-4 group-hover:scale-110 transition-transform`}>
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={`mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r ${project.gradient} transition-all duration-300 rounded`} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  )
}

export default Projects
