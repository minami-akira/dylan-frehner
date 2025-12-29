import React, { useState } from 'react'
import { motion } from 'framer-motion'
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
    <div className="min-h-screen pt-24 pb-16 relative z-0">
      <section className="max-w-7xl mx-auto px-6 relative z-10">
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
        <div className="flex justify-center gap-4 mb-12 flex-wrap relative z-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setFilter(cat)
              }}
              type="button"
              className={`px-6 py-2 rounded-lg font-medium transition-all capitalize cursor-pointer relative z-10 ${
                filter === cat
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50 hover:from-purple-500 hover:to-pink-500'
                  : 'bg-slate-800/50 border border-slate-700 text-slate-400 hover:border-purple-500/50 hover:bg-slate-800 hover:text-slate-300'
              }`}
              style={{ pointerEvents: 'auto', touchAction: 'manipulation' }}
            >
              {cat === 'all' ? 'All' : cat === 'ai' ? 'AI' : 'Platform'}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-purple-500/50 transition-all group cursor-pointer hover:-translate-y-2"
                style={{ pointerEvents: 'auto' }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-300 rounded-full text-xs hover:bg-purple-500/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${project.gradient} transition-all duration-500 rounded`} />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-slate-400 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Projects
