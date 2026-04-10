import React from 'react'
import { motion } from 'framer-motion'

export default function MediaCenterHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src="https://ik.imagekit.io/sbgenu6wj/FFOU/programs%20page/programsHero.png?updatedAt=1775579643146"
        alt="Media Centre FFOU"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-marine-900/60" />
      <div className="relative z-10 text-center px-6 mt-16">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-white text-5xl md:text-6xl font-bold tracking-tight mb-4"
        >
          Media Centre
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-medium"
        >
          Explore our official visual gallery and extensive publications chronicling our grassroots impact across Uganda's lakes.
        </motion.p>
      </div>
    </section>
  )
}
