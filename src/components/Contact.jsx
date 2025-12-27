import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const contactMethods = [
    {
      type: 'Email',
      value: 'hi@dylanfrehner.com',
      link: 'mailto:hi@dylanfrehner.com',
      icon: '✉️',
    },
    {
      type: 'Phone',
      value: '(561)-327-3633',
      link: 'tel:+15613273633',
      icon: '📞',
    },
  ]

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen py-24 px-6 relative flex items-center"
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Let's Connect
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Interested in collaborating on AI/ML projects or have questions?
            I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-slate-900/50 border border-slate-800 p-8 rounded-xl hover:border-purple-500/50 transition-all text-center"
            >
              <div className="text-4xl mb-4">{method.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {method.type}
              </h3>
              <p className="text-slate-400">{method.value}</p>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center text-slate-500"
        >
          <p>© {new Date().getFullYear()} Dylan Frehner. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
