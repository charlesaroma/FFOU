import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function DonationCTA() {
  return (
    <section className="py-20 bg-[#f1f5f9]">
      <div className="layout-spine">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 bg-white p-12 shadow-sm border border-slate-100">
          <div className="max-w-xl">
             <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
                Your donations support <br />
                our critical work
             </h2>
          </div>
          <Link
            to="/donate"
            className="px-10 py-5 bg-[#f8fafc] border border-slate-200 text-slate-800 font-bold text-sm uppercase tracking-widest hover:border-marine-600 transition-all text-center"
          >
            Make A Donation Today
          </Link>
        </div>
      </div>
    </section>
  )
}
