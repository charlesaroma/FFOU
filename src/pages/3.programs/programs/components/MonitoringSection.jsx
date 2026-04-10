import React from 'react';
import { Icon } from '@iconify/react';

export default function MonitoringSection() {
  return (
    <section className="py-24 bg-surface-500 border-t border-slate-100">
      {/* Grid Constrainer */}
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Intro Block Group */}
        <div className="flex flex-col md:flex-row gap-16 mb-20">
          {/* Header Area */}
          <div className="max-w-xl">
            {/* Tag Badge */}
            <span className="bg-gold-100 text-gold-700 text-[10px] font-bold px-3 py-1 uppercase rounded-sm mb-6 inline-block">
              Performance Benchmarks
            </span>
            {/* Main Title */}
            <h2 className="text-4xl font-bold text-slate-700 mb-8 leading-tight">
              Systemic Monitoring<br />& Evaluation
            </h2>
          </div>
          {/* Description Area */}
          <div className="flex-1">
            <p className="text-slate-600 leading-relaxed mb-6">
              Our operational framework integrates tools to track performance across three critical levels: impact, outcome, and output. Every milestone within the FFOU portfolio is benchmarked against specific outcomes of achievement, ensuring direct alignment with our National Strategic Plan.
            </p>
            <p className="text-slate-600 leading-relaxed">
              To drive continuous improvement and data-based planning, we implement a rigorous review cycle.
            </p>
          </div>
        </div>

        {/* Audit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: 'Quarterly Audits', 
              desc: 'This process takes a deep dive assessment of the strategy performance, ensuring that all our programs are reaching our defined operational strategy.', 
              icon: 'mdi:clipboard-text' 
            },
            { 
              title: 'Monthly Reporting', 
              desc: 'Communication is paramount, our process of routine monthly reporting ensures our partners are updated on our achievements and milestones.', 
              icon: 'mdi:file-document' 
            },
            { 
              title: 'Annual Reviews', 
              desc: 'Reflective and mandatory we find it extremely useful to gauge our impact and adjustment for our National Strategic Plan based on the causes of our project.', 
              icon: 'mdi:calendar-check' 
            }
          ].map((item, i) => (
            <div key={i} className="bg-surface-600 p-10 rounded-sm text-center flex flex-col items-center">
              {/* Card Container */}
              {/* Icon Circle */}
              <div className="w-16 h-16 rounded-full border-2 border-marine-500/20 flex items-center justify-center mb-8">
                <Icon icon={item.icon} className="text-3xl text-marine-600" />
              </div>
              {/* Card Title */}
              <h4 className="text-xl font-bold text-slate-700 mb-4">{item.title}</h4>
              {/* Card Description */}
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
