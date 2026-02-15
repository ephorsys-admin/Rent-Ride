import { motion } from 'framer-motion'

const ScrollReveal = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.6, -0.05, 0.01, 0.99]
      }}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal