import React from 'react';
import ProgramsHero from './components/ProgramsHero';
import ProgramGrid from './components/ProgramGrid';
import MonitoringSection from './components/MonitoringSection';
import PartnerSection from './components/PartnerSection';

export default function ProgramsPage() {
  return (
    <main className="min-h-screen">
      {/* Main Hero Banner */}
      <ProgramsHero />
      
      {/* Program Portfolio Grid */}
      <ProgramGrid />
      
      {/* Audit & Structural Monitoring */}
      <MonitoringSection />
      
      {/* Collaboration Call to Action */}
      <PartnerSection />
    </main>
  );
}
