import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function OurStory() {
  return (
    <section className="py-24 bg-white border-t border-slate-50">
      <div className="layout-spine">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase mb-8 block">
              STORY ABOUT US
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-10 leading-tight">
              Empowering sustainable <br />
              fisheries practices
            </h2>
          </motion.div>

          {/* Description Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-slate-600 text-lg leading-relaxed">
              With over a decade of experience in the sector, the Federation of Fisheries Organisations Uganda (FFOU) is a leading non-profit organization committed to promoting ethical and sustainable fishing practices in Uganda.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              FFOU currently coordinates 131 member associations. This gives us the opportunity to coordinate and build capacity of our membership for a viable fisheries sub-sector. Our programs include advocacy, lake cultures, ICT integration, capacity building for women and youth, climate change initiatives, and awareness campaigns addressing HIV/AIDS, malaria, TB, and the importance of girl-child education.
            </p>
            
            <Link 
              to="/about/about-us" 
              className="inline-block text-marine-600 font-bold text-sm tracking-widest uppercase hover:text-marine-700 transition-colors"
            >
              Learn more...
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
