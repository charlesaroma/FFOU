import React from 'react';
import { Link } from 'react-router-dom';

export default function PartnerSection() {
  return (
    <section className="relative py-32 bg-marine-500 overflow-hidden">
      {/* Background Image Layer */}
      <img 
        src="https://ik.imagekit.io/sbgenu6wj/FFOU/programs%20page/programsPartner.png?updatedAt=1775580530471" 
        className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-overlay"
        alt="Partner background"
      />
      {/* Content Wrapper */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        {/* Title */}
        <h2 className="text-white text-5xl font-bold mb-8">Partner with Us...</h2>
        {/* Description */}
        <p className="text-surface-600 text-lg mb-12">
          FFOU is always seeking strategic partnerships with associations, businesses, and institutions that share our vision. Through collaboration, we can extend our programs and impact more communities.
        </p>
        {/* Action Button Segment */}
        <Link 
          to="/programs/get-involved/form" 
          className="inline-block border-2 border-white text-white font-bold px-10 py-4 hover:bg-surface-500 hover:text-marine-800 transition-all text-sm tracking-widest cursor-pointer"
        >
          GET INVOLVED NOW
        </Link>
      </div>
    </section>
  )
}
