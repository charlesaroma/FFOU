import { useState } from 'react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import MediaCenterHero from './2.mediaCenterHero'

const news = [
  {
    title: 'FFOU Launches New ABAVUBI App Features for Market Access',
    date: 'March 2024',
    category: 'Technology',
    excerpt: 'The latest update brings real-time pricing data from 40 new landing sites across Lakes Victoria and Albert.',
  },
  {
    title: '131 Member Associations Participate in Annual Federation Conference',
    date: 'February 2024',
    category: 'Events',
    excerpt: 'The 2024 annual conference brought together leaders from Uganda\'s five great lake regions to align on strategic priorities.',
  },
  {
    title: 'FFOU Partners with FAO on Sustainable Aquaculture Initiative',
    date: 'January 2024',
    category: 'Partnerships',
    excerpt: 'A new three-year collaboration will expand cage fish farming training across Lake Victoria and Lake Albert.',
  },
  {
    title: 'Fisheries Regulation Training Reaches 5,000 Community Members',
    date: 'December 2023',
    category: 'Programs',
    excerpt: 'FFOU\'s advocacy program surpassed its annual training target, covering fishing zones, licensing, and legal rights.',
  },
  {
    title: 'Women Fishers Leadership Program Expands Across Three Lakes',
    date: 'November 2023',
    category: 'Community',
    excerpt: 'Over 800 women in fishing communities have graduated from FFOU\'s financial literacy and leadership workshops.',
  },
  {
    title: 'FFOU Submits Recommendations to National Fisheries Policy Review',
    date: 'October 2023',
    category: 'Advocacy',
    excerpt: 'The federation presented a consolidated position paper representing views from all 131 member associations.',
  },
]

const categoryColors = {
  Technology: { bg: 'var(--color-zurich-50)', color: 'var(--color-zurich-600)' },
  Events: { bg: '#f5f3ff', color: '#7c3aed' },
  Partnerships: { bg: 'var(--color-militant-100)', color: 'var(--color-militant-500)' },
  Programs: { bg: '#fef3c7', color: '#d97706' },
  Community: { bg: '#fce7f3', color: '#db2777' },
  Advocacy: { bg: '#ecfdf5', color: '#059669' },
}

function NewsSection() {
  return (
    <section className="py-24" style={{ background: 'var(--surface-a)' }}>
      <div className="layout-spine">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 mb-16 items-end">
          <div className="max-w-xl">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-zurich-500 mb-4 block">Latest Intelligence</span>
            <h2 className="font-header text-4xl md:text-5xl" style={{ color: 'var(--text-main)' }}>
              News & Updates
            </h2>
          </div>
          <div className="flex-1">
             <p className="text-slate-500 text-sm leading-relaxed max-w-lg">
                Stay informed with the latest developments, conference updates, and strategic announcements from the Federation.
             </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {news.map((item, i) => {
            const tc = categoryColors[item.category] || categoryColors.Programs
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex gap-4 p-6 rounded-2xl group hover:shadow-md transition-shadow cursor-pointer"
                style={{ background: 'var(--surface-b)', border: '1px solid var(--nav-stroke)' }}
              >
                <div className="flex-1">
                  <span
                    className="text-xs font-semibold px-2 py-1 rounded-full inline-block mb-3"
                    style={{ background: tc.bg, color: tc.color }}
                  >
                    {item.category}
                  </span>
                  <h3
                    className="font-heading text-lg mb-2 group-hover:text-zurich-500 transition-colors leading-snug"
                    style={{ color: 'var(--text-main)' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-muted)' }}>
                    {item.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{item.date}</span>
                    <span className="text-xs font-semibold text-zurich-500 flex items-center gap-1">
                      Read more <Icon icon="ph:arrow-right-bold" className="text-xs" />
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default function MediaCenterPage() {
  return (
    <main>
      <MediaCenterHero />
      <NewsSection />
      {/* Publications and Gallery are now handled in their own dedicated dynamic routes */}
    </main>
  )
}