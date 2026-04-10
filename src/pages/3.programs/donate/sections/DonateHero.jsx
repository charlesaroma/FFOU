import React from 'react'

export default function DonateHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src="https://ik.imagekit.io/sbgenu6wj/FFOU/programs%20page/programsHero.png?updatedAt=1775579643146"
        alt="Donate to FFOU"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-marine-900/70" />
      <div className="relative z-10 text-center px-6 mt-16">
        <h1 className="text-white text-5xl md:text-6xl font-bold tracking-tight mb-4">
          Support Our Mission
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-medium">
          Your donation directly funds training, digital tools, and advocacy for over 2 million fisherfolks across Uganda's five great lakes.
        </p>
      </div>
    </section>
  )
}
