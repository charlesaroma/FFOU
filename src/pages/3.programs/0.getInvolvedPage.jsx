import GetInvolved from './2.getInvolved'

export default function GetInvolvedPage() {
  return (
    <main>
      <section className="pt-28 pb-16" style={{ background: 'var(--color-zurich-950)' }}>
        <div className="layout-spine text-center">
          <h1 className="font-heading text-4xl md:text-5xl text-gradient-blue">
            Get Involved
          </h1>
          <p className="mt-3 text-base max-w-xl mx-auto" style={{ color: 'var(--color-zurich-200)' }}>
            There are many ways to support Uganda's fisheries communities.
          </p>
        </div>
      </section>
      <GetInvolved />
    </main>
  )
}
