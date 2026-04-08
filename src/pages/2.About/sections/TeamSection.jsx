import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

const StructureNode = ({ label, type, isWide }) => {
  const styles = {
    governance: 'bg-marine-100 border-marine-300 text-marine-800 font-bold text-xs md:text-sm',
    executive: 'bg-marine-600 border-marine-500 text-white font-bold shadow-lg shadow-marine-500/20 text-sm',
    director: 'bg-marine-800 border-marine-700 text-white font-semibold text-[11px] md:text-xs',
    staff: 'bg-white border-slate-200 text-slate-700 text-[10px] md:text-[11px] leading-tight hover:border-marine-300 hover:shadow-md transition-all',
    community: 'bg-cerulean-500 border-cerulean-600 text-white font-bold shadow-xl shadow-cerulean-500/20 text-xs md:text-sm',
  }

  return (
    <motion.div
      whileHover={{ y: -1, scale: 1.02 }}
      className={`px-3 py-2 rounded-lg border flex items-center justify-center min-w-[140px] max-w-[220px] ${isWide ? 'md:min-w-[400px]' : ''} ${styles[type] || styles.staff}`}
    >
      {label}
    </motion.div>
  )
}

const Connector = () => (
  <div className="w-px h-8 bg-marine-200 shrink-0 relative">
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-marine-200" />
  </div>
)

const leadership = [
  { name: 'MR. KANYANA EZRA', role: 'PRESIDENT', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400' },
  { name: 'MS. NYANGOMA SALAMA', role: 'VICE PRESIDENT', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400' },
  { name: 'MS. ASASIRA ANGEL', role: 'ACTING EXECUTIVE DIRECTOR', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' },
]

const staffMain = [
  { name: 'Restituta Kemigisha', role: 'DEPUTY E.D - PROGRAMS', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400' },
  { name: 'Okoth Ivan', role: 'HEAD OF LEGAL AND PROJECTS', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400' },
  { name: 'Gimei Alex', role: 'IT PROJECT MANAGER', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' },
]

const staffSupport = [
  { name: 'Mutaawe Joshua', role: 'ASSISTANT PROGRAMS OFFICER', image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=400' },
  { name: 'Bagonza Moses', role: 'MARKETING MANAGER', image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=400' },
  { name: 'Walakira James', role: 'FIELD MANAGER', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400' },
  { name: 'Nabaguzi Maria Flavia', role: 'ADMINISTRATIVE ASSISTANT / SECRETARY', image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400' },
]

const necMembers = [
  { 
    name: 'Mr. KANYANA EZRA', 
    role: 'FFOU President Federation of Fisheries Organisations Uganda (FFOU Chairperson NEC)', 
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200' 
  },
  { 
    name: 'Mr. Wanzusi Robert', 
    role: "Managing Director Uganda Worker's Education Association (UWEA) (Regional Chairperson Eastern Uganda)", 
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200' 
  },
  { 
    name: 'Ms. Nyangoma Salama', 
    role: 'FFOU Vice President Consultant in Agriculture and Fisheries (Vice Chairperson NEC)', 
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200' 
  },
  { 
    name: 'Ms. Asasira Angel', 
    role: 'Acting Executive Director Federation of Fisheries Organizations Uganda (Regional Chairperson Western Uganda)', 
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200' 
  },
  { 
    name: 'Mr. Kironde David', 
    role: 'FFOU National Treasurer and Consultant in Business Administration (Chairperson Membership and Business Committee)', 
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200' 
  },
  { 
    name: 'Mr. Waswa Senyange Richard', 
    role: 'Chairman Historical Fisheries Association/Business man (Regional Chairperson Central Buganda)', 
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200' 
  },
  { 
    name: 'Mr. Kalema Micheal', 
    role: 'FFOU Consultant (Chairperson Resource Mobilization Committee)', 
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=200' 
  },
  { 
    name: 'Ms. Faridah Nanfuka', 
    role: 'Fish Farmer (Committee Member)', 
    image: 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&q=80&w=200' 
  },
  { 
    name: 'Ms. Mutesi Gladys', 
    role: 'District Councilor Buikwe District and Auditor at Digital fish Uganda Limited (Chairperson Women and Youth Committee)', 
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?auto=format&fit=crop&q=80&w=200' 
  },
  { 
    name: 'Hon. Bakabulindi Charles', 
    role: "Worker's Member of Parliament, Kampala-Uganda (Trustee)", 
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200' 
  },
  { 
    name: 'Mr. Nowamani Mark', 
    role: 'Lawyer, High Court Advocate (Chairperson Compliancy, Quality and Legal)', 
    image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=200' 
  },
  { 
    name: 'Dr. Ssempebwa Cox (PHD)', 
    role: 'Chief Administrative Officer Wakiso (Chairperson Finance and Administration Committee)', 
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200' 
  },
]

export default function TheTeam() {
  return (
    <main>
      {/* Board & Leadership Section */}
      <section className="py-24 bg-white border-b border-slate-50">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-amber-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">EXECUTIVE GOVERNANCE</span>
            <h2 className="font-header text-4xl md:text-5xl text-slate-800">Board Of Directors</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {leadership.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-4/5 overflow-hidden rounded-2xl mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-500">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                    />
                    <div className="absolute inset-x-0 bottom-0 p-8 bg-linear-to-t from-marine-900/80 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="text-amber-400 text-[9px] font-bold uppercase tracking-widest">{member.role}</span>
                    </div>
                </div>
                <div className="text-center">
                  <h3 className="font-header text-2xl text-slate-800 mb-2 group-hover:text-marine-600 transition-colors uppercase">{member.name}</h3>
                  <div className="w-12 h-0.5 bg-slate-200 mx-auto group-hover:w-20 group-hover:bg-amber-400 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FFOU STAFF Section */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-[1240px] mx-auto px-6 text-center">
          <div className="mb-20">
            <span className="text-marine-600 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">CORE OPERATIONS</span>
            <h2 className="font-header text-4xl md:text-5xl text-slate-800 uppercase leading-tight">National Secretariat</h2>
          </div>
          
          {/* Main Staff Grid */}
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-20">
            {staffMain.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                  <div className="aspect-square rounded-xl overflow-hidden mb-6 bg-slate-100">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                  </div>
                  <h4 className="font-header text-lg text-slate-800 tracking-wide mb-2 uppercase">{member.name}</h4>
                  <p className="font-bold text-marine-500 text-[9px] uppercase tracking-widest border-t border-slate-50 pt-3">{member.role}</p>
              </motion.div>
            ))}
          </div>

          {/* Support Staff Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {staffSupport.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="aspect-4/5 rounded-xl overflow-hidden mb-4 shadow-sm border border-slate-100 group-hover:shadow-lg transition-all duration-300">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h4 className="font-header text-sm text-slate-700 truncate mb-1 uppercase tracking-tight">{member.name}</h4>
                <p className="font-bold text-slate-400 text-[8px] uppercase tracking-widest leading-tight">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Structure Chart Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-24"
            >
                <span className="text-cerulean-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">INSTITUTIONAL FRAMEWORK</span>
                <h3 className="font-header text-4xl md:text-6xl text-slate-800 uppercase tracking-tight mb-8">FFOU Governance Structures</h3>
                <p className="mt-6 text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
                    A multi-tiered matrix designed for professional efficiency, democratic transparency, and national community impact.
                </p>
            </motion.div>

            <div className="relative max-w-7xl mx-auto overflow-x-auto pb-12 mask-fade-edges">
                <div className="min-w-[1200px] flex flex-col items-center gap-10">
                    
                    {/* Governance Tier */}
                    <div className="flex flex-col items-center">
                        <StructureNode label="Delegate's Conference" type="governance" />
                        <Connector />
                        <StructureNode label="National Executive Committee" type="governance" />
                        <Connector />
                        <StructureNode label="Executive Director" type="executive" />
                    </div>

                    <div className="w-full relative py-12">
                        {/* Horizontal Line for 4 Directorates */}
                        <div className="absolute top-0 left-[12.5%] right-[12.5%] h-px bg-slate-200" />
                        
                        <div className="grid grid-cols-4 gap-4 pt-10">
                            
                            {/* Column 1: Compliancy */}
                            <div className="flex flex-col items-center gap-6">
                                <StructureNode label="Director Compliancy Quality & Legal" type="director" />
                                <Connector />
                                <div className="grid grid-cols-1 gap-4 w-full px-4">
                                    <StructureNode label="ICT Officer" type="staff" />
                                    <StructureNode label="Research & Development Officers" type="staff" />
                                    <StructureNode label="M&E Officer" type="staff" />
                                </div>
                            </div>

                            {/* Column 2: Programs */}
                            <div className="flex flex-col items-center gap-6">
                                <StructureNode label="Director Programs" type="director" />
                                <Connector />
                                <StructureNode label="Regional Coordinators" type="staff" />
                                <Connector />
                                <StructureNode label="District Coordinators" type="staff" />
                                <Connector />
                                <StructureNode label="Project Officers" type="staff" />
                                <Connector />
                                <StructureNode label="Assistant Field Officers" type="staff" />
                            </div>

                            {/* Column 3: Women & Youth */}
                            <div className="flex flex-col items-center gap-6">
                                <StructureNode label="Director Women & Youth Affairs" type="director" />
                                <Connector />
                                <div className="grid grid-cols-2 gap-4 w-full px-2">
                                    <StructureNode label="Gender Office" type="staff" />
                                    <StructureNode label="Youth Office" type="staff" />
                                </div>
                                <div className="flex flex-col items-center mt-2">
                                    <Connector />
                                    <StructureNode label="Support Staff" type="staff" />
                                    <Connector />
                                    <StructureNode label="Volunteers / Interns" type="staff" />
                                </div>
                            </div>

                            {/* Column 4: Finance & Admin */}
                            <div className="flex flex-col items-center gap-6">
                                <StructureNode label="Director Finance & Administration" type="director" />
                                <Connector />
                                <div className="grid grid-cols-2 gap-4 w-full px-2 max-w-[300px]">
                                    <StructureNode label="HR Office" type="staff" />
                                    <StructureNode label="Internal Auditor" type="staff" />
                                    <StructureNode label="Accountant" type="staff" />
                                    <StructureNode label="Finance Officer" type="staff" />
                                    <StructureNode label="Procurement Officer" type="staff" />
                                    <StructureNode label="Public Relations Officer" type="staff" />
                                </div>
                                <div className="mt-2 pl-[50%] w-full">
                                    <Connector />
                                    <StructureNode label="Accounts Assistant" type="staff" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Shared Bottom Section */}
                    <div className="mt-12 flex flex-col items-center">
                        <div className="w-[60%] h-px bg-slate-200 mb-12" />
                        <StructureNode 
                            label="Fisheries Associations & Local Landing Site Committees" 
                            type="community" 
                            isWide
                        />
                        <div className="mt-10 flex items-center gap-4 text-slate-400">
                            <Icon icon="ph:arrow-u-up-left-bold" className="text-2xl" />
                            <span className="text-[10px] font-bold tracking-[0.3em] uppercase italic bg-slate-50 px-4 py-2 rounded-full">Represented at Delegate's Conference</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* NEC Members Section */}
      <section className="py-32 bg-[#f8fafc]">
        <div className="max-w-[1240px] mx-auto px-6">
            <div className="text-center mb-24">
              <span className="text-amber-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">DEMOCRATIC OVERSIGHT</span>
              <h2 className="font-header text-4xl md:text-5xl text-slate-800 uppercase max-w-2xl mx-auto leading-tight">
                  National Executive <br />Committee (NEC)
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-x-16 gap-y-20 max-w-6xl mx-auto">
                {necMembers.map((member, i) => (
                    <motion.div
                        key={member.name}
                        initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="flex gap-8 items-start group cursor-default"
                    >
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden shrink-0 shadow-lg border-2 border-white group-hover:shadow-2xl transition-all duration-500">
                            <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                        </div>
                        <div className="pt-3">
                            <h4 className="font-header text-xl text-slate-800 mb-3 group-hover:text-marine-600 transition-colors uppercase tracking-tight">{member.name}</h4>
                            <p className="text-[11px] leading-relaxed text-slate-500 font-medium uppercase tracking-wide">{member.role}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>
    </main>
  )
}
