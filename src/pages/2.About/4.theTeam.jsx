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

      {/* Leadership Intro */}
      <section className="py-10 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-8 xl:px-12 text-center">
            <p className="italic text-lg md:text-xl font-medium text-marine-700">
                FFOU is led by a team of qualified and experienced executive
            </p>
        </div>
      </section>

      {/* Board Section */}
      <section className="py-16 bg-[#e5f1fa]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-8 xl:px-12">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {leadership.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="bg-marine-400 p-8 rounded-lg mb-6 shadow-xl aspect-square flex items-center justify-center flex-col">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white mb-6">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="font-header text-white text-xl md:text-2xl tracking-tight">{member.name}</h3>
                </div>
                <p className="font-bold text-marine-800 uppercase tracking-widest text-sm md:text-base">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FFOU STAFF Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-8 xl:px-12">
          <h2 className="font-header text-3xl md:text-5xl text-center mb-12 text-marine-700 uppercase">FFOU STAFF</h2>
          
          {/* Main Staff Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {staffMain.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="flex flex-col h-full bg-[#f8fafc] rounded-lg shadow-md overflow-hidden">
                    <div className="aspect-square bg-gray-200">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="bg-marine-800 p-3">
                        <h4 className="font-header text-lg text-white tracking-wide">{member.name}</h4>
                    </div>
                </div>
                <p className="mt-3 font-bold text-marine-500 text-sm uppercase tracking-wide">{member.role}</p>
              </motion.div>
            ))}
          </div>

          {/* Support Staff Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {staffSupport.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="text-center"
              >
                <div className="flex flex-col h-full bg-[#f8fafc] rounded-lg shadow-sm overflow-hidden group">
                    <div className="aspect-square bg-gray-200 overflow-hidden">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="bg-marine-700 p-2">
                        <h4 className="font-header text-sm md:text-base text-white truncate">{member.name}</h4>
                    </div>
                </div>
                <p className="mt-2 font-bold text-marine-500 text-[10px] md:text-xs uppercase tracking-tight">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Structure Chart Section */}
      <section className="py-24 bg-[#f1f5f9] overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-8 xl:px-12 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <h3 className="font-header text-3xl md:text-5xl text-marine-800 uppercase tracking-tight mb-4">FFOU Structures</h3>
                <div className="h-1 w-24 bg-cerulean-500 mx-auto rounded-full" />
                <p className="mt-6 text-marine-400 max-w-2xl mx-auto text-lg leading-relaxed">
                    A multi-tiered governance and management framework designed for efficiency, transparency, and community impact.
                </p>
            </motion.div>

            <div className="relative max-w-7xl mx-auto overflow-x-auto pb-12 mask-fade-edges">
                <div className="min-w-[1200px] flex flex-col items-center gap-8">
                    
                    {/* Governance Tier */}
                    <div className="flex flex-col items-center">
                        <StructureNode label="Delegate's Conference" type="governance" />
                        <Connector />
                        <StructureNode label="National Executive Committee" type="governance" />
                        <Connector />
                        <StructureNode label="Executive Director" type="executive" />
                    </div>

                    <div className="w-full relative py-8">
                        {/* Horizontal Line for 4 Directorates */}
                        <div className="absolute top-0 left-[12.5%] right-[12.5%] h-px bg-zurich-200" />
                        
                        <div className="grid grid-cols-4 gap-4 pt-8">
                            
                            {/* Column 1: Compliancy */}
                            <div className="flex flex-col items-center gap-4">
                                <StructureNode label="Director Compliancy Quality & Legal" type="director" />
                                <Connector />
                                <div className="grid grid-cols-1 gap-3 w-full px-4">
                                    <StructureNode label="ICT Officer" type="staff" />
                                    <StructureNode label="Research & Development Officers" type="staff" />
                                    <StructureNode label="M&E Officer" type="staff" />
                                </div>
                            </div>

                            {/* Column 2: Programs */}
                            <div className="flex flex-col items-center gap-4">
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
                            <div className="flex flex-col items-center gap-4">
                                <StructureNode label="Director Women & Youth Affairs" type="director" />
                                <Connector />
                                <div className="grid grid-cols-2 gap-3 w-full px-2">
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
                            <div className="flex flex-col items-center gap-4">
                                <StructureNode label="Director Finance & Administration" type="director" />
                                <Connector />
                                <div className="grid grid-cols-2 gap-3 w-full px-2 max-w-[280px]">
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
                    <div className="mt-8 flex flex-col items-center">
                        <div className="w-[50%] h-px bg-marine-200 mb-8" />
                        <StructureNode 
                            label="Fisheries Associations & Local Landing Site Committees" 
                            type="community" 
                            isWide
                        />
                        <div className="mt-6 flex items-center gap-3 text-marine-400">
                            <Icon icon="ph:arrow-u-up-left-bold" className="text-xl" />
                            <span className="text-sm font-bold tracking-widest uppercase italic">Represented at Delegate's Conference</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* NEC Members Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-8 xl:px-12">
            <h2 className="font-header text-2xl md:text-3xl text-center mb-16 text-marine-700 max-w-2xl mx-auto leading-relaxed">
                FFOU National Executive Committee (NEC) Members
            </h2>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
                {necMembers.map((member, i) => (
                    <motion.div
                        key={member.name}
                        initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-6 items-start"
                    >
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shrink-0 shadow-lg border-2 border-marine-100">
                            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="pt-2">
                            <h4 className="font-bold text-marine-800 text-lg mb-2">{member.name}</h4>
                            <p className="text-sm leading-relaxed text-marine-400">{member.role}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>
    </main>
  )
}
