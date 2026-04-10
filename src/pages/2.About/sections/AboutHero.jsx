import React from 'react'

export default function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src="https://ik.imagekit.io/sbgenu6wj/FFOU/programs%20page/programsHero.png?updatedAt=1775579643146"
        alt="About FFOU"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-marine-900/60" />
      <div className="relative z-10 text-center px-6 mt-16">
        <h1 className="text-white text-5xl md:text-6xl font-bold tracking-tight mb-4">
          Who We Are
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-medium">
          The national umbrella body uniting 131 fisheries associations to advocate, empower, and transform Uganda's fisheries sector.
        </p>
      </div>
    </section>
  )
}
