import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

const validationSchema = Yup.object({
  organizationName: Yup.string().required('Organization name is required'),
  registrationNumber: Yup.string().required('Registration number is required'),
  category: Yup.string().required('Please select a membership category'),
  contactPerson: Yup.string().required('Contact person name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  address: Yup.string().required('Physical address is required'),
  region: Yup.string().required('Region is required'),
  website: Yup.string().url('Invalid website URL').optional(),
  missionStatement: Yup.string().min(50, 'Please provide at least 50 characters').required('Mission statement is required'),
  agreeTerms: Yup.boolean().oneOf([true], 'You must agree to the terms').required(),
})

const initialValues = {
  organizationName: '',
  registrationNumber: '',
  category: '',
  contactPerson: '',
  email: '',
  phone: '',
  address: '',
  region: '',
  website: '',
  missionStatement: '',
  agreeTerms: false,
}

const inputStyles = "w-full px-4 py-3 rounded-xl border text-sm bg-transparent transition-all focus:outline-none focus:ring-2 focus:ring-zurich-500/30"
const labelStyles = "block text-sm font-semibold mb-1.5"
const errorStyles = "text-xs text-red-500 mt-1"

function InputField({ label, name, type = 'text', as, children, ...props }) {
  return (
    <div>
      <label htmlFor={name} className={labelStyles} style={{ color: 'var(--text-main)' }}>
        {label}
      </label>
      <Field
        id={name}
        name={name}
        type={type}
        as={as}
        className={inputStyles}
        style={{ borderColor: 'var(--nav-stroke)', color: 'var(--text-main)' }}
        {...props}
      >
        {children}
      </Field>
      <ErrorMessage name={name} component="p" className={errorStyles} />
    </div>
  )
}

function SuccessMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-12 px-6"
    >
      <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: 'var(--color-militant-100)' }}>
        <Icon icon="ph:check-circle-bold" className="text-4xl text-militant-500" />
      </div>
      <h3 className="font-heading text-2xl mb-3" style={{ color: 'var(--text-main)' }}>
        Application Submitted!
      </h3>
      <p className="text-sm max-w-md mx-auto mb-6" style={{ color: 'var(--text-muted)' }}>
        Thank you for your interest in FFOU membership. Our team will review your application and contact you within 5 business days.
      </p>
      <div className="p-3 rounded-lg inline-block" style={{ background: 'var(--surface-b)' }}>
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
          <strong>Next steps:</strong> Check your email for confirmation.
        </p>
      </div>
    </motion.div>
  )
}

export default function MembershipForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (values, { setSubmitting }) => {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log('Membership Application:', values)
    setSubmitted(true)
    setSubmitting(false)
  }

  if (submitted) {
    return (
      <section id="apply" className="py-16" style={{ background: 'var(--surface-b)' }}>
        <div className="layout-spine max-w-2xl mx-auto">
          <SuccessMessage />
        </div>
      </section>
    )
  }

  return (
    <section id="apply" className="py-16" style={{ background: 'var(--surface-b)' }}>
      <div className="layout-spine">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-zurich-500">
              Join FFOU
            </span>
            <h2 className="font-heading text-3xl md:text-4xl mt-2" style={{ color: 'var(--text-main)' }}>
              Membership Application
            </h2>
            <p className="mt-3 text-sm" style={{ color: 'var(--text-muted)' }}>
              Complete the form below to apply for membership. Our team will review your application within 5 business days.
            </p>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form className="rounded-2xl p-6 md:p-8" style={{ background: 'var(--surface-a)', boxShadow: 'var(--shadow-lg)' }}>
                <div className="grid md:grid-cols-2 gap-4">
                  <InputField label="Organization Name" name="organizationName" placeholder="e.g., Jinja Fishers Cooperative" />
                  <InputField label="Registration Number" name="registrationNumber" placeholder="e.g., S.5914/12345" />
                </div>

                <div className="mt-4">
                  <InputField
                    label="Membership Category"
                    name="category"
                    as="select"
                  >
                    <option value="">Select a category</option>
                    <option value="ordinary">Ordinary Membership (UGX 200,000)</option>
                    <option value="associate">Associate Membership (UGX 500,000)</option>
                  </InputField>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <InputField label="Contact Person" name="contactPerson" placeholder="Full name" />
                  <InputField label="Email Address" name="email" type="email" placeholder="contact@organization.org" />
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <InputField label="Phone Number" name="phone" type="tel" placeholder="+256 700 000 000" />
                  <InputField label="Website (Optional)" name="website" placeholder="https://" />
                </div>

                <div className="mt-4">
                  <InputField label="Physical Address" name="address" placeholder="Plot number, street, district" />
                </div>

                <div className="mt-4">
                  <InputField
                    label="Region / District"
                    name="region"
                    as="select"
                  >
                    <option value="">Select your region</option>
                    <option value="central">Central Region (Kampala, Wakiso, Mukono)</option>
                    <option value="eastern">Eastern Region (Jinja, Iganga, Tororo)</option>
                    <option value="western">Western Region (Masindi, Hoima, Kaseese)</option>
                    <option value="northern">Northern Region (Lira, Gulu, Nebbi)</option>
                    <option value="lake-victoria">Lake Victoria Basin</option>
                    <option value="lake-albert">Lake Albert Basin</option>
                    <option value="lake-kyoga">Lake Kyoga Basin</option>
                  </InputField>
                </div>

                <div className="mt-4">
                  <label htmlFor="missionStatement" className={labelStyles} style={{ color: 'var(--text-main)' }}>
                    Mission Statement
                  </label>
                  <Field
                    id="missionStatement"
                    name="missionStatement"
                    as="textarea"
                    rows={3}
                    placeholder="Describe your organization's mission..."
                    className={inputStyles}
                    style={{ borderColor: errors.missionStatement && touched.missionStatement ? 'var(--color-zurich-500)' : 'var(--nav-stroke)', color: 'var(--text-main)', resize: 'vertical' }}
                  />
                  <ErrorMessage name="missionStatement" component="p" className={errorStyles} />
                </div>

                <div className="mt-4">
                  <label className="flex items-start gap-2 cursor-pointer">
                    <Field
                      type="checkbox"
                      name="agreeTerms"
                      className="mt-1 w-4 h-4 rounded"
                      style={{ accentColor: 'var(--color-zurich-500)' }}
                    />
                    <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
                      I agree to abide by the FFOU Constitution and pay all prescribed fees.
                    </span>
                  </label>
                  <ErrorMessage name="agreeTerms" component="p" className={errorStyles} />
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
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Icon icon="ph:paper-plane-tilt-bold" />
                      Submit Application
                    </>
                  )}
                </button>

                <p className="text-xs text-center mt-3" style={{ color: 'var(--text-muted)' }}>
                  By submitting, you confirm that all information provided is accurate.
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  )
}
