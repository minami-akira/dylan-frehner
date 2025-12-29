import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    errorMessage: '',
  })

  // EmailJS Configuration
  // Replace these with your actual EmailJS credentials
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate EmailJS credentials
    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' || 
        EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || 
        EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        errorMessage: 'Email service not configured. Please set up EmailJS credentials.',
      })
      return
    }

    setStatus({ submitting: true, submitted: false, error: false, errorMessage: '' })

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'hi@dylanfrehner.com', // Your email address
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      setStatus({
        submitting: false,
        submitted: true,
        error: false,
        errorMessage: '',
      })

      // Reset form after successful submission
      setFormData({ name: '', email: '', message: '' })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, submitted: false }))
      }, 5000)
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        errorMessage: 'Failed to send message. Please try again or contact me directly at hi@dylanfrehner.com',
      })
    }
  }

  const contactMethods = [
    {
      type: 'Email',
      value: 'hi@dylanfrehner.com',
      link: 'mailto:hi@dylanfrehner.com',
      icon: '✉️',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      type: 'Phone',
      value: '(561)-327-3633',
      link: 'tel:+15613273633',
      icon: '📞',
      gradient: 'from-blue-600 to-cyan-600',
    },
  ]

  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Let's Connect
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Interested in collaborating on AI/ML projects or have questions?
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-purple-500/50 transition-all block group"
              >
                <div className="flex items-center gap-4">
                  <div className={`text-4xl bg-gradient-to-r ${method.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform`}>
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-purple-400 transition-colors">
                      {method.type}
                    </h3>
                    <p className="text-slate-400">{method.value}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            onSubmit={handleSubmit}
            className="bg-slate-900/50 border border-slate-800 p-8 rounded-xl"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder="Your message..."
                  required
                />
              </div>
              {/* Error Message */}
              {status.error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm"
                >
                  {status.errorMessage}
                </motion.div>
              )}

              {/* Success Message */}
              {status.submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              <motion.button
                type="submit"
                whileHover={status.submitting ? {} : { scale: 1.05 }}
                whileTap={status.submitting ? {} : { scale: 0.95 }}
                className={`w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-lg font-semibold text-white transition-all shadow-lg shadow-purple-500/50 ${
                  status.submitting || status.submitted ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={status.submitting || status.submitted}
              >
                {status.submitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : status.submitted ? (
                  'Message Sent!'
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </div>
          </motion.form>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center text-slate-500"
        >
          <p>© {new Date().getFullYear()} Dylan Frehner. All rights reserved.</p>
        </motion.div>
      </section>
    </div>
  )
}

export default Contact

