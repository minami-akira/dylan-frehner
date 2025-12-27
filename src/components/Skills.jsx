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
    },
    {
      title: 'Retrieval / RAG',
      skills: [
        'Semantic + lexical retrieval',
        'Vector databases',
        'Embedding pipelines',
        'Evaluation/grounding workflows',
      ],
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
    },
    {
      title: 'Systems Practices',
      skills: [
        'Reliability engineering',
        'Incident response',
        'Secure execution/sandboxing',
        'Performance tuning',
      ],
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
    },
  ]

  return (
    <section
      id="skills"
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
            Skills & Expertise
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-purple-500/50 transition-all"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="text-slate-300 flex items-center text-sm">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
