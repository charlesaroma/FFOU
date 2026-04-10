import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { galleryData } from '../../../data/galleryData';

export default function Gallery() {
  const [selectedYear, setSelectedYear] = useState('2024');
  
  // Filter Logic
  const years = [...new Set(galleryData.map(item => item.year.toString()))];
  const filteredImages = galleryData.filter(item => item.year.toString() === selectedYear);

  return (
    <main className="min-h-screen bg-white">
      {/* Gallery Hero Section */}
      <section className="relative h-[480px] flex items-center justify-center overflow-hidden">
        <img 
          src="https://ik.imagekit.io/sbgenu6wj/FFOU/media/gallery-hero.png?updatedAt=1775581530471" 
          alt="Gallery Hero"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1600' }}
        />
        <div className="absolute inset-0 bg-marine-900/40" />
        <div className="relative z-10 text-center">
          <h1 className="text-white text-6xl md:text-8xl font-bold tracking-tight">Gallery</h1>
        </div>
      </section>

      {/* Intro Text Block */}
      <section className="py-20 bg-surface-500">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
            Witness the powerful moments captured on camera, showcasing the impact of our initiatives and projects.
          </p>
        </div>
      </section>

      {/* Filter and Grid Segment */}
      <section className="pb-32 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          
          {/* Year Filter Dropdown Area */}
          <div className="flex justify-end mb-8">
            <div className="relative inline-flex items-center bg-white border border-slate-200 px-4 py-2 rounded-sm shadow-sm group hover:border-marine-400 transition-colors">
              <span className="text-slate-400 text-xs font-bold mr-2 uppercase tracking-wider">Year:</span>
              <select 
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="bg-transparent text-slate-900 text-sm font-bold pr-8 focus:outline-none cursor-pointer appearance-none relative z-10"
              >
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <Icon icon="mdi:menu-down" className="text-marine-600 text-xs" />
              </div>
            </div>
          </div>

          {/* Gallery Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, delay: index * 0.03 }}
                  className="relative group aspect-square overflow-hidden bg-slate-100 shadow-sm cursor-pointer"
                >
                  <img 
                    src={image.url} 
                    alt={`Gallery item ${image.id}`}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800' }}
                  />
                  {/* Glassmorphic Overlay on Hover */}
                  <div className="absolute inset-0 bg-marine-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-brightness-110" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Load More Trigger */}
          <div className="mt-20 text-center">
            <button className="px-12 py-3 border-2 border-slate-200 text-slate-500 font-bold text-xs tracking-[0.2em] hover:border-marine-500 hover:text-marine-600 transition-all rounded-sm uppercase">
              See more...
            </button>
          </div>

        </div>
      </section>
    </main>
  );
}
