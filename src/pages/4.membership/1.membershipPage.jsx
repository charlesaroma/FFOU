import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

function MembershipHero() {
  return (
    <section
      className="relative pt-28 pb-16 overflow-hidden"
      style={{ background: 'var(--color-zurich-950)' }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-zurich-400) 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
      />
      <div
        className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[500px] h-[400px] rounded-full opacity-15 blur-3xl"
        style={{ background: 'var(--color-militant-500)' }}
      />

      <div className="layout-spine relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs font-semibold tracking-widest uppercase"
          style={{ color: 'var(--color-zurich-400)' }}
        >
          Join FFOU
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-heading text-4xl md:text-5xl mt-3 mb-4 text-gradient-blue"
        >
          Membership
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-lg max-w-2xl mx-auto"
          style={{ color: 'var(--color-zurich-200)' }}
        >
          Join over 131 member associations driving sustainable fishing and community
          development across Uganda's five great lakes.
        </motion.p>
      </div>
    </section>
  )
}

import MembershipTiers from './2.membershipTiers'
import MembershipForm from './3.membershipForm'

export default function MembershipPage() {
  return (
    <main>
      <MembershipHero />
      <MembershipTiers />
      <MembershipForm />
    </main>
  )
}
