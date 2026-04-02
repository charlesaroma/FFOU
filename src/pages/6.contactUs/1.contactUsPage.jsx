import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { motion } from 'framer-motion'
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
  return (
    <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: 'var(--color-zurich-950)' }}>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-zurich-400) 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
      />
      <div
        className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[500px] h-[400px] rounded-full opacity-15 blur-3xl"
        style={{ background: 'var(--color-zurich-500)' }}
      />

      <div className="layout-spine relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs font-semibold tracking-widest uppercase"
          style={{ color: 'var(--color-zurich-400)' }}
        >
          Get in Touch
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-heading text-4xl md:text-5xl mt-3 mb-4 text-gradient-blue"
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-lg max-w-2xl mx-auto"
          style={{ color: 'var(--color-zurich-200)' }}
        >
          Have questions about membership, programs, or partnerships? We'd love to hear from you.
        </motion.p>
      </div>
    </section>
  )
}

function ContactDetails() {
  return (
    <section className="py-12" style={{ background: 'var(--surface-b)' }}>
      <div className="layout-spine">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactDetails.map((detail, i) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-5 rounded-xl"
              style={{ background: 'var(--surface-a)', border: '1px solid var(--nav-stroke)' }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                style={{ background: 'var(--color-zurich-50)' }}
              >
                <Icon icon={detail.icon} className="text-xl" style={{ color: 'var(--color-zurich-500)' }} />
              </div>
              <h3 className="font-heading text-base mb-1" style={{ color: 'var(--text-main)' }}>
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
                <p className="text-sm whitespace-pre-line" style={{ color: 'var(--text-muted)' }}>
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

  const handleSubmit = async (values, { setSubmitting }) => {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log('Contact Form:', values)
    setSubmitted(true)
    setSubmitting(false)
  }

  const inputStyles = "w-full px-4 py-3 rounded-xl border text-sm bg-transparent transition-all focus:outline-none focus:ring-2 focus:ring-zurich-500/30"
  const labelStyles = "block text-sm font-semibold mb-1.5"
  const errorStyles = "text-xs text-red-500 mt-1"

  return (
    <section className="py-16" style={{ background: 'var(--surface-a)' }}>
      <div className="layout-spine">
        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-zurich-500">
              Send a Message
            </span>
            <h2 className="font-heading text-2xl md:text-3xl mt-2 mb-4" style={{ color: 'var(--text-main)' }}>
              We'd Love to Hear From You
            </h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
              Whether you're interested in membership, partnership opportunities, or have questions about our programs, 
              our team is here to help.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg" style={{ background: 'var(--surface-b)' }}>
                <Icon icon="ph:shield-check-bold" className="text-xl text-militant-500" />
                <div>
                  <p className="text-sm font-semibold" style={{ color: 'var(--text-main)' }}>Registered Organization</p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>FFOU is registered with NGO Bureau</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg" style={{ background: 'var(--surface-b)' }}>
                <Icon icon="ph:users-three-bold" className="text-xl text-zurich-500" />
                <div>
                  <p className="text-sm font-semibold" style={{ color: 'var(--text-main)' }}>131+ Member Associations</p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Representing fishers across Uganda</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg" style={{ background: 'var(--surface-b)' }}>
                <Icon icon="ph:headset-bold" className="text-xl text-militant-500" />
                <div>
                  <p className="text-sm font-semibold" style={{ color: 'var(--text-main)' }}>Toll Free Line</p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>0800 100261</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="text-center py-12 px-6 rounded-2xl" style={{ background: 'var(--surface-b)' }}>
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: 'var(--color-militant-100)' }}>
                  <Icon icon="ph:check-circle-bold" className="text-4xl text-militant-500" />
                </div>
                <h3 className="font-heading text-2xl mb-3" style={{ color: 'var(--text-main)' }}>
                  Message Sent!
                </h3>
                <p className="text-sm max-w-md mx-auto mb-6" style={{ color: 'var(--text-muted)' }}>
                  Thank you for reaching out. Our team will respond within 2 business days.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 rounded-lg font-semibold text-sm"
                  style={{ background: 'var(--color-zurich-500)', color: '#fff' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="rounded-2xl p-6" style={{ background: 'var(--surface-b)', border: '1px solid var(--nav-stroke)' }}>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className={labelStyles} style={{ color: 'var(--text-main)' }}>
                          Full Name *
                        </label>
                        <Field
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your full name"
                          className={inputStyles}
                          style={{ borderColor: 'var(--nav-stroke)', color: 'var(--text-main)' }}
                        />
                        <ErrorMessage name="name" component="p" className={errorStyles} />
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
                          className={inputStyles}
                          style={{ borderColor: 'var(--nav-stroke)', color: 'var(--text-main)' }}
                        />
                        <ErrorMessage name="email" component="p" className={errorStyles} />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label htmlFor="phone" className={labelStyles} style={{ color: 'var(--text-main)' }}>
                          Phone Number
                        </label>
                        <Field
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+256 700 000 000"
                          className={inputStyles}
                          style={{ borderColor: 'var(--nav-stroke)', color: 'var(--text-main)' }}
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
                          className={inputStyles}
                          style={{ borderColor: 'var(--nav-stroke)', color: 'var(--text-main)' }}
                        />
                        <ErrorMessage name="subject" component="p" className={errorStyles} />
                      </div>
                    </div>

                    <div className="mt-4">
                      <label htmlFor="message" className={labelStyles} style={{ color: 'var(--text-main)' }}>
                        Message *
                      </label>
                      <Field
                        id="message"
                        name="message"
                        as="textarea"
                        rows={4}
                        placeholder="Tell us about your inquiry..."
                        className={inputStyles}
                        style={{ borderColor: 'var(--nav-stroke)', color: 'var(--text-main)', resize: 'vertical' }}
                      />
                      <ErrorMessage name="message" component="p" className={errorStyles} />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-6 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.01] disabled:opacity-60"
                      style={{ background: 'var(--color-zurich-500)', color: '#fff' }}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Icon icon="ph:paper-plane-tilt-bold" />
                          Send Message
                        </>
                      )}
                    </button>
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
