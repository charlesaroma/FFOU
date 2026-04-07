import { Link } from 'react-router-dom'
import { programsData } from '../../data/programsData'

export default function ProgramAreas() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Programs</h2>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            FFOU implements a range of programs designed to empower fishing communities, promote sustainability, and drive innovation in the fisheries sub-sector.
          </p>
        </div>

        <div className="standard-grid">
          {programsData.slice(0, 9).map((p) => (
            <Link 
              key={p.slug} 
              to={`/programs/${p.slug}`}
              className="program-card shadow-lg"
            >
              <img 
                src={p.image} 
                className="w-full h-full object-cover" 
                alt={p.title}
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800' }}
              />
              <div className="program-card-overlay">
                <h3 className="text-marine-800 font-bold text-lg">{p.shortTitle}</h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            to="/programs" 
            className="inline-block bg-marine-600 text-white font-bold px-10 py-4 hover:bg-marine-700 transition-all text-sm tracking-widest rounded-sm"
          >
            VIEW ALL PROGRAMS
          </Link>
        </div>
      </div>
    </section>
  )
}
