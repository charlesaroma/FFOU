import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

const leadership = [
  {
    name: 'Mr. Kanyana Ezra',
    role: 'President',
    image: 'https://ik.imagekit.io/sbgenu6wj/FFOU/Team%20Images/Ezra-Kanyana.png',
  },
  {
    name: 'Ms. Nyangoma Salama',
    role: 'Vice President',
    image: 'https://ik.imagekit.io/sbgenu6wj/FFOU/Team%20Images/Salama-Nyangoma.png',
  },
  {
    name: 'Ms. Asasira Angel',
    role: 'Acting Executive Director',
    image: 'https://ik.imagekit.io/sbgenu6wj/FFOU/Team%20Images/Angel.png',
  },
]

const staffMain = [
  {
    name: 'Restituta Kemigisha',
    role: 'Deputy E.D – Programs',
    image: 'https://ik.imagekit.io/sbgenu6wj/FFOU/Team%20Images/Restituta-Kemigisha.png',
  },
  {
    name: 'Okoth Ivan',
    role: 'Head of Legal & Projects',
    image: 'https://ik.imagekit.io/sbgenu6wj/FFOU/Team%20Images/Ivan-Okoth.png',
  },
  {
    name: 'Gimei Alex',
    role: 'IT Project Manager',
    image: 'https://ik.imagekit.io/sbgenu6wj/FFOU/Team%20Images/Alex-Gimei.png',
  },
]

const staffSupport = [
  {
    name: 'Mutaawe Joshua',
    role: 'Assistant Programs Officer',
    image: 'https://ik.imagekit.io/sbgenu6wj/FFOU/Team%20Images/Joshua-Mutaawe.png',
  },
  {
    name: 'Bagonza Moses',
    role: 'Marketing Manager',
    image: 'https://ik.imagekit.io/sbgenu6wj/FFOU/Team%20Images/Moses-Bagonza.png',
  },
  {
    name: 'Walakira James',
    role: 'Field Manager',
    image: 'https://ik.imagekit.io/sbgenu6wj/FFOU/Team%20Images/James-Walakira.png',
  },
  {
    name: 'Nabaguzi Maria Flavia',
    role: 'Administrative Secretary',
    image: 'https://ik.imagekit.io/sbgenu6wj/FFOU/Team%20Images/Flavia-Nabaguzi.png',
  },
]

const necMembers = [
  { name: 'Mr. Kanyana Ezra', role: 'FFOU President & NEC Chairperson', image: 'https://ik.imagekit.io/sbgenu6wj/FFOU/Team%20Images/Ezra-Kanyana.png' },
  { name: 'Mr. Wanzusi Robert', role: 'MD, Uganda Workers Education Association · Regional Chair Eastern Uganda', image: 'https://ik.imagekit.io/sbgenu6wj/FFOU/Team%20Images/Robert-Wanzusi.png' },
  { name: 'Ms. Nyangoma Salama', role: 'FFOU Vice President · NEC Vice Chairperson', image: 'https://ik.imagekit.io/sbgenu6wj/FFOU/Team%20Images/Salama-Nyangoma.png' },
  { name: 'Ms. Asasira Angel', role: 'Acting Executive Director · Regional Chair Western Uganda', image: 'https://ik.imagekit.io/sbgenu6wj/FFOU/Team%20Images/Angel.png' },
  { name: 'Mr. Kironde David', role: 'National Treasurer · Chair, Membership & Business Committee', image: 'https://ik.imagekit.io/sbgenu6wj/FFOU/Team%20Images/David-Kironde.png' },
  { name: 'Mr. Waswa Senyange Richard', role: 'Chairman, Historical Fisheries Association · Regional Chair Central Buganda', image: 'https://ik.imagekit.io/sbgenu6wj/FFOU/Team%20Images/Richard-Waswa.png' },
  { name: 'Mr. Kalema Micheal', role: 'FFOU Consultant · Chair, Resource Mobilization Committee', image: 'https://ik.imagekit.io/sbgenu6wj/FFOU/Team%20Images/Micheal-Kalema.png' },
  { name: 'Ms. Faridah Nanfuka', role: 'Fish Farmer · Committee Member', image: 'https://ik.imagekit.io/sbgenu6wj/FFOU/Team%20Images/Faridah-Nanfuka.png' },
  { name: 'Ms. Mutesi Gladys', role: 'District Councilor Buikwe · Chair, Women & Youth Committee', image: 'https://ik.imagekit.io/sbgenu6wj/FFOU/Team%20Images/Gladys-Mutesi.png' },
  { name: 'Hon. Bakabulindi Charles', role: "Worker's MP Kampala · Trustee", image: 'https://ik.imagekit.io/sbgenu6wj/FFOU/Team%20Images/Charles-Bakabulindi.png' },
  { name: 'Mr. Nowamani Mark', role: 'Advocate, High Court · Chair, Compliancy & Legal', image: 'https://ik.imagekit.io/sbgenu6wj/FFOU/Team%20Images/Mark-Nowamani.png' },
  { name: 'Dr. Ssempebwa Cox (PHD)', role: 'CAO Wakiso · Chair, Finance & Administration', image: 'https://ik.imagekit.io/sbgenu6wj/FFOU/Team%20Images/Cox-Ssempebwa.png' },
]

export default function TheTeam() {
  return (
    <main>
      {/* ── Board of Directors ─────────────────────────── */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[10px] font-bold tracking-[0.35em] text-amber-600 uppercase mb-3 block">
              Executive Governance
            </span>
            <h2 className="text-4xl font-bold text-slate-800 tracking-tight">Board of Directors</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {leadership.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-default"
              >
                <div className="relative aspect-4/5 overflow-hidden rounded-[4px] mb-5 shadow-sm group-hover:shadow-xl transition-all duration-500">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="text-center">
                  <span className="text-amber-500 text-[10px] font-bold uppercase tracking-widest block mb-2">{member.role}</span>
                  <h3 className="font-bold text-lg text-slate-800 mb-3 group-hover:text-marine-600 transition-colors">{member.name}</h3>
                  <div className="w-10 h-0.5 bg-slate-200 mx-auto group-hover:w-16 group-hover:bg-amber-400 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── National Secretariat ───────────────────────── */}
      <section className="py-24 bg-surface-500 border-b border-slate-100">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[10px] font-bold tracking-[0.35em] text-marine-500 uppercase mb-3 block">
              Core Operations
            </span>
            <h2 className="text-4xl font-bold text-slate-800 tracking-tight">National Secretariat</h2>
          </div>

          {/* Senior staff */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            {staffMain.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-slate-100 rounded-[4px] p-5 group hover:shadow-lg transition-all"
              >
                <div className="aspect-square rounded-[4px] overflow-hidden mb-5 bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>
                <p className="text-marine-500 text-[10px] font-bold uppercase tracking-wider mb-1">{member.role}</p>
                <h4 className="font-bold text-slate-800 text-base">{member.name}</h4>
              </motion.div>
            ))}
          </div>

          {/* Support staff */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {staffSupport.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group cursor-default"
              >
                <div className="aspect-4/5 rounded-[4px] overflow-hidden mb-3 border border-slate-100 group-hover:shadow-md transition-all">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider leading-tight mb-1">{member.role}</p>
                <h4 className="text-sm font-bold text-slate-700 truncate">{member.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── National Executive Committee ───────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[10px] font-bold tracking-[0.35em] text-amber-600 uppercase mb-3 block">
              Democratic Oversight
            </span>
            <h2 className="text-4xl font-bold text-slate-800 tracking-tight">
              National Executive Committee
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {necMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, x: i % 2 === 0 ? -16 : 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-5 items-start group cursor-default p-4 rounded-[4px] hover:bg-surface-500 border border-transparent hover:border-slate-100 transition-all"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-[4px] overflow-hidden shrink-0 border border-slate-100 group-hover:shadow-lg transition-all">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="pt-1">
                  <p className="text-[10px] text-amber-500 font-bold uppercase tracking-wider leading-relaxed mb-1">{member.role}</p>
                  <h4 className="font-bold text-slate-800 text-sm group-hover:text-marine-600 transition-colors">
                    {member.name}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
