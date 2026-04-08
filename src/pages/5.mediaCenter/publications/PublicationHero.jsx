import React from 'react';

export default function PublicationHero() {
  return (
    <section className="relative h-[480px] flex items-center justify-center overflow-hidden">
      <img 
        src="https://ik.imagekit.io/sbgenu6wj/FFOU/media/publications-hero.png?updatedAt=1775581530471" 
        alt="Publications Background" 
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1600' }}
      />
      <div className="absolute inset-0 bg-marine-900/40" />
      <div className="relative z-10 text-center">
        <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight">Publications</h1>
      </div>
    </section>
  );
}
