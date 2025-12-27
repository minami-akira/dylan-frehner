import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const experiences = [
    {
      title: 'Miner (Agent Runtime & Applied ML)',
      company: 'Bittensor Network',
      period: '10/2025 | Remote',
      description: 'Bittensor is an open, decentralized ML network organized into specialized subnets.',
      achievements: [
        'Achieved #1 rank on Subnet 62 (Ridges) by architecting an agentic, tool-augmented LLM software-engineering agent',
        'Designed core agent runtime/orchestration engine: task planning loop, shared state/memory, tool-calling interfaces',
        'Engineered context-management for cost and reliability using token budgeting and retrieval-first context injection',
        'Hardened tool execution safety and correctness via strict tool-call parsing/validation',
        'Built validation-first workflow that continuously verifies changes inside sandboxed environments',
        'Operationalized the miner like a production service with containerization and observability',
      ],
      tech: ['Python', 'Git', 'Linux', 'Docker', 'LLM APIs', 'Tool-calling', 'Sandboxed execution'],
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      title: 'AI Software Engineer (Generative AI / LLM Systems)',
      company: 'Azumo',
      period: '04/2018 – 09/2025 | Hybrid',
      description: 'Azumo delivers AI and Generative AI development services for businesses building intelligent applications.',
      achievements: [
        'Owned end-to-end delivery of GenAI products, translating business needs into production architectures',
        'Built RAG systems using semantic + lexical retrieval, vector search, and structured prompting',
        'Implemented agentic workflows with tool-calling and structured outputs for multi-step automation',
        'Developed evaluation and reliability platforms (offline benchmarks, online checks, A/B experiments)',
        'Operationalized LLMOps/MLOps pipelines with automated tests, monitoring, and rollout strategies',
        'Shipped secure cloud deployments (Azure-first; AWS as needed) using containerization',
      ],
      tech: ['Python', 'PyTorch/TensorFlow', 'LangChain/LangGraph', 'Vector DBs', 'Docker', 'Kubernetes', 'Azure/AWS'],
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      title: 'Software Engineer II',
      company: 'Lambda',
      period: '02/2013 - 03/2018',
      description: 'Lambda is an AI cloud infrastructure company focused on GPU compute.',
      achievements: [
        'Built and shipped customer-facing web experiences for an AI-focused compute platform',
        'Developed backend services in Python supporting core product workflows',
        'Owned features end-to-end from implementation to deployment',
        'Improved reliability and observability with structured logging and alerting',
        'Collaborated across infra/security to integrate cloud-native services',
      ],
      tech: ['TypeScript', 'React', 'Python', 'APIs', 'Postgres', 'Cloud Services'],
      gradient: 'from-green-600 to-emerald-600',
    },
  ]

  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Professional Experience
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Building AI systems and platforms that make a difference
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.01, y: -4 }}
              className="bg-slate-900/50 border border-slate-800 p-8 rounded-xl hover:border-purple-500/50 transition-all group relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${exp.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-purple-300 mb-1">{exp.company}</p>
                  <p className="text-slate-400">{exp.period}</p>
                </div>
              </div>
              
              <p className="text-slate-300 mb-6 italic">{exp.description}</p>
              
              <ul className="space-y-2 mb-6">
                {exp.achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start text-slate-300"
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.15 + i * 0.05 }}
                  >
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.15 + i * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-300 rounded-full text-sm cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Experience
