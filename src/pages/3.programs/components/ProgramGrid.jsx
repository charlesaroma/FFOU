import React from 'react';
import { Link } from 'react-router-dom';
import { programsData } from '../../../data/programsData';

export default function ProgramGrid() {
  return (
    <section className="py-20 bg-surface-500">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {programsData.map((p) => (
            <Link 
              key={p.slug} 
              to={`/programs/${p.slug}`}
              className="relative group block overflow-hidden aspect-4/5 bg-surface-700 shadow-sm rounded-[4px]"
            >
              {/* Full Background Image */}
              <img 
                src={p.cardImage} 
                className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105" 
                alt={p.cardTitle}
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800' }}
              />
              {/* Inner Floating Information Box */}
              <div className="absolute inset-x-5 bottom-5 bg-marine-800/40 backdrop-blur-md rounded-md py-4 px-3 flex items-center justify-center min-h-[70px] border border-white/10 transition-colors duration-300 group-hover:bg-marine-800/60 shadow-lg">
                <h3 className="text-white font-bold text-lg md:text-[19px] leading-tight text-center drop-shadow-md">
                  {p.cardTitle}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
