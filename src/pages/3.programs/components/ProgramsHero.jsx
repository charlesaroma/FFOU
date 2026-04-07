import React from 'react';

export default function ProgramsHero() {
  return (
    <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
      <img 
        src="https://ik.imagekit.io/sbgenu6wj/FFOU/programs%20page/programsHero.png?updatedAt=1775579643146" 
        alt="Background" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-marine-900/40" />
      <div className="relative z-10 text-center">
        <h1 className="text-white text-5xl md:text-6xl font-bold">Our Programs</h1>
      </div>
    </section>
  )
}
