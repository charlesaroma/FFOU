import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import PartnerSection from '../programs/components/PartnerSection'

const resourceMobilisation = [
  {
    opt: "OPTION 1",
    title: "Identifying and engaging with donors",
    desc: "Identify potential donors who have an interest in funding policies and campaign strategies. Contact them and maintain a relationship by providing the facts about your work.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
  },
  {
    opt: "OPTION 2",
    title: "Partnering with local and international NGOs",
    desc: "Working with international and national NGOs will allow us to form a mutually beneficial partnership to work towards common goals. Forming NGOs or alliances naturally facilitates capacity-building among groups globally focused on rural development strategies.",
    img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800"
  },
  {
    opt: "OPTION 3",
    title: "Membership contributions",
    desc: "This is a key route of mobilizing resources for community-based associations within organizations. Often associations run programs that require funds from their members to run day to day activities and facilitate other resources within.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
  },
  {
    opt: "OPTION 4",
    title: "Organizing events",
    desc: "Festivals are a large piece of community-based mobilization where organizations raise funds to fuel operations and campaigns. Some common events include community workshops, offering exhibition spaces for agricultural projects, and crafts.",
    img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=800"
  }
];

const actionCards = [
  {
    title: "Financial Contributions",
    desc: "Your financial gifts directly support FFOU educational programs, health campaigns, and structural infrastructure projects across Uganda's landing sites.",
    icon: "mdi:file-document"
  },
  {
    title: "Skills & Field Volunteering",
    desc: "Offer your expertise! We engage IT specialists, community educators, and legal advocates to run workshops and mentor individuals within our focal regions.",
    icon: "mdi:file-document"
  },
  {
    title: "Advocacy & Digital Adoption",
    desc: "Partner with us to amplify the ABAVUBI FISHER app usage across landing sites. Share our stories, or back our advocacy campaigns to secure favorable fisheries policies.",
    icon: "mdi:file-document"
  }
];


export default function GetInvolved() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section Wrapper */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <img 
          src="https://ik.imagekit.io/sbgenu6wj/FFOU/programs%20page/programsHero.png?updatedAt=1775579643146" 
          alt="Several Ways to Get Involved and Serve"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-marine-800/60" />
        {/* Content Wrapper */}
        <div className="relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-4xl md:text-6xl font-bold px-4 max-w-4xl mx-auto leading-tight"
          >
            Several Ways to<br/>Get Involved and Serve
          </motion.h1>
        </div>
      </section>

      {/* Core Mobilise Section container */}
      <section className="max-w-[1000px] mx-auto px-6 py-20">
        {/* Header Block Group */}
        <div className="mb-12">
          {/* Main Category Badge */}
          <span className="inline-block bg-gold-100 text-gold-600 font-bold px-4 py-1.5 text-xs mb-6">
            To increase Reach outs
          </span>
          {/* Main Content Title */}
          <h2 className="text-[36px] md:text-[44px] font-bold text-slate-700 mb-6 leading-tight max-w-2xl">
            How we mobilise resources for sustainable fisheries
          </h2>
          {/* Main Content Description */}
          <p className="text-[15px] text-slate-600 leading-[1.8] max-w-3xl">
            FFOU has a well-thought-out, broad resource mobilization and strategic direction that matches right and utilization effectively. To address the resources and mobilize the resources needed to implement the strategic plan. It ensures robust resource mobilization and management and utilization generally via various sources.
          </p>
        </div>

        {/* Options List Container */}
        <div className="space-y-6">
          {resourceMobilisation.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row bg-white shadow-sm border border-slate-100"
            >
              {/* Option Image Div */}
              <div className="md:w-2/5 h-64 md:h-auto">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
              {/* Option Details Div */}
              <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                <span className="inline-block border border-crimson-500 text-crimson-500 text-[10px] font-bold rounded-full px-4 py-1 w-max mb-4">
                  {item.opt}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-slate-700 mb-4">
                  {item.title}
                </h3>
                <p className="text-[14px] text-slate-600 leading-[1.8]">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Button Div */}
        <div className="mt-12 text-center">
          <button className="border border-slate-300 text-slate-500 px-8 py-2.5 text-sm hover:bg-slate-50 transition-colors">
            See more...
          </button>
        </div>
      </section>

      {/* Partner Banner Wrapper Component */}
      <PartnerSection />

      {/* Summary Action Grid Outer Section */}
      <section className="bg-surface-500 px-6 py-24">
        <div className="max-w-[1240px] mx-auto">
          {/* Grid Top Segment */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Grid Left Heading */}
            <div>
              <span className="inline-block bg-gold-100 text-gold-600 font-bold px-4 py-1.5 text-xs mb-6">
                Empower Communities
              </span>
              <h2 className="text-[36px] md:text-[44px] font-bold text-slate-700 leading-tight">
                From Planning to Action, Every Contribution Counts
              </h2>
            </div>
            {/* Grid Right Info / CTA */}
            <div className="lg:pt-14">
              <p className="text-[15px] text-slate-600 leading-[1.8] mb-6">
                By contributing today, you ensure that vital resources are channeled to empower vulnerable groups in the fisheries sector. We provide platforms for donations, structural collaborations, and hands on skill building.
              </p>
              <Link 
                to="/programs/get-involved/form" 
                className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 font-bold transition-colors text-sm inline-block"
              >
                Get Involved Now
              </Link>
            </div>
          </div>

          {/* Core Feature Grid - Loop */}
          <div className="grid md:grid-cols-3 gap-6">
            {actionCards.map((card, idx) => (
              <div key={idx} className="bg-surface-700 p-10 h-full flex flex-col">
                {/* Feature Grid Item */}
                <div className="mb-6">
                  <Icon icon={card.icon} className="text-4xl text-cerulean-500" />
                </div>
                <h3 className="text-content-main font-bold text-slate-700 mb-4">
                  {card.title}
                </h3>
                <p className="text-[14px] text-slate-600 leading-[1.8]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
