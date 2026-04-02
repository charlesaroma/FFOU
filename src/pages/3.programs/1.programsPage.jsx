import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

function ProgramsHero() {
  return (
    <section 
      className="relative pt-28 pb-16 overflow-hidden" 
      style={{ background: 'var(--color-zurich-950)' }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-zurich-400) 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
      />
      <div
        className="absolute left-1/3 top-1/2 -translate-y-1/2 w-[500px] h-[400px] rounded-full opacity-15 blur-3xl"
        style={{ background: 'var(--color-zurich-500)' }}
      />
      <div
        className="absolute right-1/4 bottom-1/4 w-[300px] h-[300px] rounded-full opacity-10 blur-3xl"
        style={{ background: 'var(--color-militant-500)' }}
      />

      <div className="layout-spine relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs font-semibold tracking-widest uppercase text-zurich-400"
        >
          What We Do
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-heading text-4xl md:text-5xl mt-3 mb-4 text-gradient-blue"
        >
          Our Programs
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-lg max-w-2xl mx-auto"
          style={{ color: 'var(--color-zurich-200)' }}
        >
          FFOU drives sustainable change across Uganda's fisheries sub-sector through comprehensive programs focused on empowerment, innovation, and community development.
        </motion.p>
      </div>
    </section>
  )
}

const programs = [
  {
    icon: 'ph:device-mobile-bold',
    color: 'var(--color-zurich-500)',
    bg: 'var(--color-zurich-50)',
    title: 'SMart Fisher Technology (ABAVUBI App)',
    description: 'The ABAVUBI Fisher Mobile App, developed by FFOU with support from GIZ-RFBCP under the German government, has enhanced market linkages and improved access to information relevant to the fisheries business chain.',
    points: [
      'Develop the ABAVUBI mobile application with modules that provide solutions to intended users\' current challenges',
      'Build the capacity of fisheries business chain stakeholders on the use of the app',
      'Sensitize fisheries groups to appreciate the ABAVUBI Mobile App services',
      'Train IT administrators within fishing communities to extend technical assistance',
      'Set up a call center with a toll-free helpline and digital forums',
      'Conduct campaigns on safety on the lake and market linkages',
      'Carry out surveys on consumer satisfaction and app service appreciation',
      'Constantly upgrade the mobile app to suit user needs',
      'Provide comprehensive health data insights aligned with national HMIS indicators',
    ],
  },
  {
    icon: 'ph:users-three-bold',
    color: 'var(--color-militant-500)',
    bg: 'var(--color-militant-100)',
    title: 'Capacity Building for Women & Youth',
    description: 'FFOU has enhanced the capacity of women and youth within fisher communities for better participation in the fisheries business chain.',
    points: [
      'Enhance the capacity of women and youth to participate in the leadership of associations',
      'Train in leadership, business, and other skills as well as financial literacy',
      'Source for low-interest loans to train folks to start or boost their businesses',
      'Encourage and train them in aquaculture fish farming as diversity from catch fisheries for better livelihood',
      'Empower their contribution to the decision-making mechanism within the fisheries business chains',
      'Mobilize and organize more of them into DBOs, associations, and Sacco\'s',
    ],
  },
  {
    icon: 'ph:scales-bold',
    color: 'var(--color-amber-500)',
    bg: 'var(--color-amber-50)',
    title: 'Legislation, Policies & Human Rights',
    description: 'To inform fisheries communities on related fisheries policies, regulations, and human rights, FFOU has comprehensive interventions.',
    points: [
      'Sensitize communities on existing policies and regulations and the benefits of being compliant',
      'Promote human rights and fishing rights of the fisher folk through awareness campaigns',
      'Collaborate with government and fisheries co-management bodies',
      'Train trainers and community counselors on compliance',
      'Conduct legal clinics in partnership with law and human rights CBOs',
      'Partner with research institutions for awareness of non-compliance implications',
      'Carry out stakeholder\'s dialogue on current issues in the subsector',
    ],
  },
  {
    icon: 'ph:fish-bold',
    color: 'var(--color-violet-500)',
    bg: 'var(--color-violet-100)',
    title: 'Sustainable Aquaculture',
    description: 'FFOU increased fish production and sustainable development of aquaculture and aquaponics among fish farming communities.',
    points: [
      'Provide fish farming training for 200 interested groups within our membership',
      'Set up an FFOU Centre for technical training, research, and demonstration in fish hatching and breeding',
      'Encourage and promote co-operatives among aquaculture fish farmers for easy access to information and financial resources',
      'Sensitize and encourage fisher folks to diversify towards aquaculture and aquaponics through fish cages',
      'Promote aquaculture activities within fishing communities',
      'Provide technical support for the establishment of fishponds and cages',
    ],
  },
  {
    icon: 'ph:leaf-bold',
    color: 'var(--color-emerald-500)',
    bg: 'var(--color-emerald-100)',
    title: 'Climate Change Action',
    description: 'FFOU has enhanced the participation of fishers and lake users in the protection of the ecosystem within the fisheries industry environment.',
    points: [
      'Engage in awareness campaigns on proper waste and garbage disposal',
      'Promote reforestation in depleted districts around the lakes',
      'Mobilize resources for climate change action and protection of the ecosystem',
      'Encourage community participation in regulating water hyacinth on lake boundaries',
      'Ensure improved sanitization and hygiene through WASH programs and eco-friendly toilets',
      'Encourage reusable and cost-effective sources of energy for production and preservation',
      'Tree planting initiatives',
    ],
  },
  {
    icon: 'ph:student-bold',
    color: 'var(--color-rose-500)',
    bg: 'var(--color-rose-100)',
    title: 'Girl Child Support',
    description: 'The "Girl Child Support" program is dedicated to empowering marginalized young girls to reach their full potential through comprehensive education, health, and economic empowerment initiatives.',
    points: [
      'Scholarships and educational support',
      'Health and hygiene workshops',
      'Life skills training',
      'Vocational training for girls aged 5-18 from disadvantaged communities',
      'Increase school enrollment and retention',
      'Improve health and well-being',
      'Enhance economic opportunities',
      'Community advocacy and sensitization',
    ],
  },
  {
    icon: 'ph:tool-bold',
    color: 'var(--color-indigo-500)',
    bg: 'var(--color-indigo-100)',
    title: 'Vocational Training',
    description: 'Vocational training is a key initiative to empower fisheries communities with practical skills for sustainable livelihoods.',
    points: [
      'Advanced fishing techniques and sustainable fish farming practices',
      'Fish processing, storage, and market readiness',
      'Equipment maintenance skills',
      'Business management and entrepreneurship training',
      'Value addition techniques',
      'Practical hands-on training and expert-led workshops',
      'Enable participants to maximize profits and improve food security',
    ],
  },
  {
    icon: 'ph:first-aid-kit-bold',
    color: 'var(--color-red-500)',
    bg: 'var(--color-red-100)',
    title: 'HIV Prevention & Care',
    description: 'FFOU\'s HIV Prevention and Care program targets fisheries communities, addressing the unique HIV/AIDS challenges they face.',
    points: [
      'HIV testing and counseling',
      'Peer education and outreach',
      'Condom distribution and promotion',
      'STI treatment and management',
      'Care and support for PLHIV (People Living with HIV)',
      'Economic empowerment for vulnerable groups',
      'Protecting and supporting sex workers',
      'Reduce HIV transmission and promote healthy behaviors',
    ],
  },
]

function ProgramCards() {
  return (
    <section className="py-16" style={{ background: 'var(--surface-a)' }}>
      <div className="layout-spine">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl" style={{ color: 'var(--text-main)' }}>
            Program Focus Areas
          </h2>
          <p className="mt-2 text-sm max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            FFOU implements comprehensive programs addressing the needs of fishing communities across Uganda.
          </p>
        </div>

        <div className="space-y-8">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 rounded-xl"
              style={{ background: 'var(--surface-b)', border: '1px solid var(--nav-stroke)' }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: p.bg }}
                  >
                    <Icon icon={p.icon} className="text-2xl" style={{ color: p.color }} />
                  </div>
                  <h3 className="font-heading text-xl mb-2" style={{ color: 'var(--text-main)' }}>
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {p.description}
                  </p>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-sm font-semibold mb-3" style={{ color: 'var(--text-main)' }}>
                    Key Interventions:
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {p.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-2 text-sm"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        <Icon
                          icon="ph:check-circle-fill"
                          className="text-base flex-shrink-0 mt-0.5"
                          style={{ color: p.color }}
                        />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SACCO() {
  return (
    <section className="py-16" style={{ background: 'var(--surface-b)' }}>
      <div className="layout-spine">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl"
          style={{ background: 'var(--surface-a)', border: '1px solid var(--nav-stroke)' }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'var(--color-zurich-50)' }}
              >
                <Icon icon="ph:bank-bold" className="text-2xl" style={{ color: 'var(--color-zurich-600)' }} />
              </div>
              <h3 className="font-heading text-2xl mb-3" style={{ color: 'var(--text-main)' }}>
                Uganda Fisheries Cooperative SACCO
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                This is a member-only forum for discussing development issues concerning the cooperative society. The SACCO is committed to being transparent, compliant, and accountable to its members.
              </p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                <strong>Current Compliance Focus:</strong> The leadership is actively working on recovering all original documents to comply with cooperative laws. This action is necessary because the SACCO was previously closed by the authority due to issues with the old leadership.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                <strong>Membership & Eligibility:</strong> Membership is open to everyone who is connected to fisheries activities or involved in promoting the sector.
              </p>
            </div>

            <div className="p-6 rounded-xl" style={{ background: 'var(--color-zurich-50)' }}>
              <h4 className="font-heading text-lg mb-4" style={{ color: 'var(--text-main)' }}>
                How to Join/Manage Accounts Online
              </h4>
              <div className="space-y-3">
                {[
                  { step: '1', text: 'Download the ABAVUBI FISHER MOBILE SOFTWARE APPLICATION' },
                  { step: '2', text: 'Select "business" and proceed with "Uganda fisheries SACCO membership"' },
                  { step: '3', text: 'Open your own mobile wallet account for savings and account management' },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{ background: 'var(--color-zurich-500)', color: '#fff' }}
                    >
                      {item.step}
                    </div>
                    <p className="text-sm pt-0.5" style={{ color: 'var(--text-muted)' }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function MonitoringEvaluation() {
  return (
    <section className="py-16" style={{ background: 'var(--surface-a)' }}>
      <div className="layout-spine">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl"
          style={{ background: 'var(--color-zurich-950)' }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Icon icon="ph:chart-line-up-bold" className="text-3xl text-zurich-400" />
            <h3 className="font-heading text-2xl text-gradient-blue">
              Monitoring and Evaluation
            </h3>
          </div>
          <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-zurich-200)' }}>
            A monitoring and evaluation framework was developed to identify indicators at impact, outcome, and output levels. Projects implemented by FFOU will have their indicators of achievement of results linked to the Strategic plan indicators.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { level: 'Impact', desc: 'Long-term outcomes and societal changes' },
              { level: 'Outcome', desc: 'Medium-term changes in behavior and capacity' },
              { level: 'Output', desc: 'Direct products and deliverables' },
            ].map((item) => (
              <div key={item.level} className="p-4 rounded-lg" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <h4 className="font-semibold text-sm text-white mb-1">{item.level} Indicators</h4>
                <p className="text-xs" style={{ color: 'var(--color-zurich-300)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm leading-relaxed mt-4" style={{ color: 'var(--color-zurich-200)' }}>
            For learning and adaptive planning, FFOU conducts annual plans and review meetings to assess progress. Monthly reports are submitted to development partners. Quarterly monitoring is considered appropriate, with annual review meetings able to adjust monitoring intervals as needed.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export { ProgramsHero, ProgramCards, SACCO, MonitoringEvaluation }

import GetInvolved from './2.getInvolved'
import Donate from './3.Donate'

export default function ProgramsPage() {
  return (
    <main>
      <ProgramsHero />
      <ProgramCards />
      <SACCO />
      <MonitoringEvaluation />
      <GetInvolved />
      <Donate />
    </main>
  )
}
