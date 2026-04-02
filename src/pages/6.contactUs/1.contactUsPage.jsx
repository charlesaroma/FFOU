import { useRef, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Icon } from '@iconify/react'

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string(),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().min(20, 'Please provide at least 20 characters').required('Message is required'),
})

const initialValues = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

const contactDetails = [
  {
    icon: 'ph:map-pin-bold',
    title: 'Office Address',
    content: 'P.O. BOX 130763\nWabyona Building, 2nd floor\nNamboole – Bweyogerere, Jinja Road',
  },
  {
    icon: 'ph:envelope-bold',
    title: 'Email',
    content: 'info@ffou.org',
    link: 'mailto:info@ffou.org',
  },
  {
    icon: 'ph:phone-bold',
    title: 'Phone Numbers',
    content: 'Reception: +256 414 583 081\nAg. Executive Director: +256 414 583 081\nPresident: +256 414 673 910',
  },
  {
    icon: 'ph:globe-bold',
    title: 'Website & Toll Free',
    content: 'www.ffou.org\nToll Free: 0800 100261',
  },
]

function ContactHero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section 
      ref={sectionRef}
      className="relative pt-28 pb-20 overflow-hidden min-h-[55vh] flex items-center" 
      style={{ background: 'var(--color-zurich-950)' }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-zurich-400) 2px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        
        {/* Floating Orbs */}
        <motion.div
          className="absolute right-1/3 top-1/3 w-[500px] h-[400px] rounded-full opacity-20"
          style={{ 
            background: 'radial-gradient(circle, var(--color-zurich-500) 0%, transparent 70%)',
            filter: 'blur(100px)',
            y,
          }}
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        <motion.div
          className="absolute left-1/4 bottom-1/4 w-[300px] h-[300px] rounded-full opacity-15"
          style={{ 
            background: 'radial-gradient(circle, var(--color-militant-500) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-16 right-16 opacity-10"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Icon icon="ph:envelope-simple-bold" className="text-8xl text-zurich-400" />
      </motion.div>

      <div className="layout-spine relative z-10 text-center" style={{ opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <span
            className="px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase backdrop-blur-sm"
            style={{
              background: 'rgba(79, 160, 221, 0.2)',
              color: 'var(--color-zurich-300)',
              border: '1px solid rgba(79, 160, 221, 0.4)',
            }}
          >
            <span className="inline-flex items-center gap-2">
              <Icon icon="ph:chat-circle-bold" className="text-sm" />
              Get in Touch
            </span>
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-heading text-3xl md:text-4xl lg:text-5xl mt-3 mb-6 text-gradient-blue"
          style={{ textShadow: '0 0 60px rgba(35, 136, 212, 0.3)' }}
        >
          Contact Us
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl max-w-2xl mx-auto"
          style={{ color: 'var(--color-zurich-200)' }}
        >
          Have questions about membership, programs, or partnerships? We'd love to hear from you.
        </motion.p>

        {/* Response Time Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex justify-center"
        >
          <div
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full backdrop-blur-sm"
            style={{
              background: 'rgba(39, 163, 87, 0.15)',
              border: '1px solid rgba(39, 163, 87, 0.3)',
            }}
          >
            <Icon icon="ph:clock-bold" className="text-militant-400 text-lg" />
            <span className="text-sm text-zurich-200">We typically respond within 24 hours</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full" preserveAspectRatio="none" style={{ height: '60px' }}>
          <path
            fill="var(--surface-b)"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  )
}

function ContactDetails() {
  return (
    <section className="py-16" style={{ background: 'var(--surface-b)' }}>
      <div className="layout-spine">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactDetails.map((detail, i) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-6 rounded-2xl cursor-pointer transition-shadow"
              style={{ 
                background: 'var(--surface-a)', 
                border: '1px solid var(--nav-stroke)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <motion.div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'var(--color-zurich-100)' }}
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                <Icon icon={detail.icon} className="text-2xl" style={{ color: 'var(--color-zurich-500)' }} />
              </motion.div>
              <h3 className="font-heading text-lg mb-2" style={{ color: 'var(--text-main)' }}>
                {detail.title}
              </h3>
              {detail.link ? (
                <a 
                  href={detail.link}
                  className="text-sm hover:text-zurich-500 transition-colors"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {detail.content}
                </a>
              ) : (
                <p className="text-sm whitespace-pre-line leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {detail.content}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState(null)

  const handleSubmit = async (values, { setSubmitting }) => {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log('Contact Form:', values)
    setSubmitted(true)
    setSubmitting(false)
  }

  const inputStyles = (fieldName) => `
    w-full px-4 py-3.5 rounded-xl border text-sm bg-transparent transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-zurich-500/30 focus:border-zurich-500
    ${focusedField === fieldName ? 'border-zurich-500 shadow-sm shadow-zurich-500/10' : ''}
  `
  const labelStyles = "block text-sm font-semibold mb-2"
  const errorStyles = "text-xs text-red-500 mt-1.5 flex items-center gap-1"

  return (
    <section className="py-20" style={{ background: 'var(--surface-a)' }}>
      <div className="layout-spine">
        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-semibold tracking-widest uppercase text-zurich-500"
            >
              Send a Message
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-3xl md:text-4xl mt-3 mb-5" 
              style={{ color: 'var(--text-main)' }}
            >
              We'd Love to Hear From You
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base leading-relaxed mb-8" 
              style={{ color: 'var(--text-muted)' }}
            >
              Whether you're interested in membership, partnership opportunities, or have questions about our programs, 
              our team is here to help.
            </motion.p>

            <div className="space-y-4">
              {[
                { icon: 'ph:shield-check-bold', title: 'Registered Organization', desc: 'FFOU is registered with NGO Bureau', color: 'var(--color-militant-500)', bg: 'var(--color-militant-50)' },
                { icon: 'ph:users-three-bold', title: '131+ Member Associations', desc: 'Representing fishers across Uganda', color: 'var(--color-zurich-500)', bg: 'var(--color-zurich-50)' },
                { icon: 'ph:headset-bold', title: 'Toll Free Line', desc: '0800 100261', color: 'var(--color-amber-500)', bg: 'var(--color-amber-50)' },
              ].map((item, i) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-xl transition-all cursor-pointer"
                  style={{ background: item.bg }}
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: 'var(--surface-a)' }}
                  >
                    <Icon icon={item.icon} className="text-xl" style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: 'var(--text-main)' }}>{item.title}</p>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 px-8 rounded-2xl" 
                style={{ background: 'var(--surface-b)' }}
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                  className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" 
                  style={{ background: 'var(--color-militant-100)' }}
                >
                  <Icon icon="ph:check-circle-bold" className="text-5xl text-militant-500" />
                </motion.div>
                <h3 className="font-heading text-3xl mb-4" style={{ color: 'var(--text-main)' }}>
                  Message Sent!
                </h3>
                <p className="text-base max-w-md mx-auto mb-8" style={{ color: 'var(--text-muted)' }}>
                  Thank you for reaching out. Our team will respond within 2 business days.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 rounded-xl font-semibold text-sm"
                  style={{ background: 'var(--color-zurich-500)', color: '#fff' }}
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting, errors, touched }) => (
                  <Form 
                    className="rounded-2xl p-8 shadow-lg" 
                    style={{ background: 'var(--surface-b)', border: '1px solid var(--nav-stroke)' }}
                  >
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className={labelStyles} style={{ color: 'var(--text-main)' }}>
                          Full Name *
                        </label>
                        <Field
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your full name"
                          className={inputStyles('name')}
                          style={{ borderColor: errors.name && touched.name ? 'var(--color-red-500)' : 'var(--nav-stroke)', color: 'var(--text-main)' }}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                        />
                        <ErrorMessage name="name">
                          {msg => <p className={errorStyles}><Icon icon="ph:warning-circle-bold" /> {msg}</p>}
                        </ErrorMessage>
                      </div>
                      <div>
                        <label htmlFor="email" className={labelStyles} style={{ color: 'var(--text-main)' }}>
                          Email Address *
                        </label>
                        <Field
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          className={inputStyles('email')}
                          style={{ borderColor: errors.email && touched.email ? 'var(--color-red-500)' : 'var(--nav-stroke)', color: 'var(--text-main)' }}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                        />
                        <ErrorMessage name="email">
                          {msg => <p className={errorStyles}><Icon icon="ph:warning-circle-bold" /> {msg}</p>}
                        </ErrorMessage>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5 mt-5">
                      <div>
                        <label htmlFor="phone" className={labelStyles} style={{ color: 'var(--text-main)' }}>
                          Phone Number
                        </label>
                        <Field
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+256 700 000 000"
                          className={inputStyles('phone')}
                          style={{ borderColor: 'var(--nav-stroke)', color: 'var(--text-main)' }}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className={labelStyles} style={{ color: 'var(--text-main)' }}>
                          Subject *
                        </label>
                        <Field
                          id="subject"
                          name="subject"
                          type="text"
                          placeholder="How can we help?"
                          className={inputStyles('subject')}
                          style={{ borderColor: errors.subject && touched.subject ? 'var(--color-red-500)' : 'var(--nav-stroke)', color: 'var(--text-main)' }}
                          onFocus={() => setFocusedField('subject')}
                          onBlur={() => setFocusedField(null)}
                        />
                        <ErrorMessage name="subject">
                          {msg => <p className={errorStyles}><Icon icon="ph:warning-circle-bold" /> {msg}</p>}
                        </ErrorMessage>
                      </div>
                    </div>

                    <div className="mt-5">
                      <label htmlFor="message" className={labelStyles} style={{ color: 'var(--text-main)' }}>
                        Message *
                      </label>
                      <Field
                        id="message"
                        name="message"
                        as="textarea"
                        rows={5}
                        placeholder="Tell us about your inquiry..."
                        className={inputStyles('message')}
                        style={{ borderColor: errors.message && touched.message ? 'var(--color-red-500)' : 'var(--nav-stroke)', color: 'var(--text-main)', resize: 'vertical' }}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                      />
                      <ErrorMessage name="message">
                        {msg => <p className={errorStyles}><Icon icon="ph:warning-circle-bold" /> {msg}</p>}
                      </ErrorMessage>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className="w-full mt-8 py-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-lg"
                      style={{ 
                        background: 'var(--color-zurich-500)', 
                        color: '#fff',
                        boxShadow: '0 4px 20px rgba(35, 136, 212, 0.3)'
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Icon icon="ph:paper-plane-tilt-bold" className="text-lg" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </Form>
                )}
              </Formik>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default function ContactUsPage() {
  return (
    <main>
      <ContactHero />
      <ContactDetails />
      <ContactForm />
    </main>
  )
}
