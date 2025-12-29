import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const skillCategories = [
    {
      title: 'Generative AI / Agents',
      skills: [
        'LLM tool-calling',
        'Agent orchestration',
        'Context engineering',
        'Structured outputs',
        'Model routing/fallbacks',
        'Prompt iteration',
      ],
      gradient: 'from-purple-600 to-pink-600',
      icon: '🤖',
    },
    {
      title: 'Retrieval / RAG',
      skills: [
        'Semantic + lexical retrieval',
        'Vector databases',
        'Embedding pipelines',
        'Evaluation/grounding workflows',
      ],
      gradient: 'from-blue-600 to-cyan-600',
      icon: '🔍',
    },
    {
      title: 'LLMOps / MLOps',
      skills: [
        'Offline/online evals',
        'A/B tests',
        'Safety checks',
        'Regression gates',
        'Monitoring',
        'Rollbacks',
      ],
      gradient: 'from-green-600 to-emerald-600',
      icon: '⚡',
    },
    {
      title: 'Frontend',
      skills: [
        'TypeScript',
        'React',
        'HTML/CSS',
        'Tailwind CSS',
        'Material UI',
      ],
      gradient: 'from-yellow-600 to-orange-600',
      icon: '🎨',
    },
    {
      title: 'Backend',
      skills: [
        'Python',
        'APIs/services',
        'Async workflows',
        'Postgres/MySQL',
        'Redis',
        'Data modeling',
      ],
      gradient: 'from-indigo-600 to-purple-600',
      icon: '⚙️',
    },
    {
      title: 'Systems Practices',
      skills: [
        'Reliability engineering',
        'Incident response',
        'Secure execution/sandboxing',
        'Performance tuning',
      ],
      gradient: 'from-red-600 to-pink-600',
      icon: '🛡️',
    },
    {
      title: 'Infra / Cloud',
      skills: [
        'Docker',
        'Kubernetes concepts',
        'CI/CD (GitHub Actions)',
        'Azure (preferred) + AWS',
        'Observability (logs/metrics/tracing)',
      ],
      gradient: 'from-teal-600 to-blue-600',
      icon: '☁️',
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
            Skills & Expertise
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Technologies and practices I work with daily
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-purple-500/50 transition-all group hover:-translate-y-2"
              style={{ pointerEvents: 'auto' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {category.skills.map((skill, i) => (
                  <motion.li
                    key={i}
                    className="text-slate-300 flex items-center text-sm hover:text-slate-200 transition-colors"
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                  >
                    <span className={`w-2 h-2 rounded-full mr-3 flex-shrink-0 bg-gradient-to-r ${category.gradient}`} />
                    <span>{skill}</span>
                  </motion.li>
                ))}
              </ul>
              <div className={`mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r ${category.gradient} transition-all duration-500 rounded`} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Skills
