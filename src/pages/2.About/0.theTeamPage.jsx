import TheTeam from './4.theTeam'

export default function TheTeamPage() {
  return (
    <main>
      <section className="pt-28 pb-16" style={{ background: 'var(--color-zurich-950)' }}>
        <div className="layout-spine text-center">
          <h1 className="font-heading text-4xl md:text-5xl text-gradient-blue">
            Our Team
          </h1>
          <p className="mt-3 text-base" style={{ color: 'var(--color-zurich-200)' }}>
            Meet the dedicated team behind FFOU's mission.
          </p>
        </div>
      </section>
      <TheTeam />
    </main>
  )
}
