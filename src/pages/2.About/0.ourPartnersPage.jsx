import AboutOurPartners from './5.ourPartners'

export default function OurPartnersPage() {
  return (
    <main>
      <section className="pt-28 pb-16" style={{ background: 'var(--color-zurich-950)' }}>
        <div className="layout-spine text-center">
          <h1 className="font-heading text-4xl md:text-5xl text-gradient-blue">
            Our Partners
          </h1>
          <p className="mt-3 text-base" style={{ color: 'var(--color-zurich-200)' }}>
            Organizations we collaborate with to drive impact.
          </p>
        </div>
      </section>
      <AboutOurPartners />
    </main>
  )
}
