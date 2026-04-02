import Donate from './3.Donate'

export default function DonatePage() {
  return (
    <main>
      <section className="pt-28 pb-16" style={{ background: 'var(--color-zurich-950)' }}>
        <div className="layout-spine text-center">
          <h1 className="font-heading text-4xl md:text-5xl text-gradient-blue">
            Support Our Work
          </h1>
          <p className="mt-3 text-base max-w-xl mx-auto" style={{ color: 'var(--color-zurich-200)' }}>
            Your contribution helps FFOU support fishing communities across Uganda.
          </p>
        </div>
      </section>
      <Donate />
    </main>
  )
}
