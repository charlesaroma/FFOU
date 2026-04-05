import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import { useState } from 'react'

const footerLinks = {
  Organization: [
    { label: 'About FFOU', to: '/about/about-us' },
    { label: 'Our Team', to: '/about/the-team' },
    { label: 'Our Story', to: '/about/about-us#our-story' },
    { label: 'Partners', to: '/about/our-partners' },
  ],
  Impact: [
    { label: 'Advocacy', to: '/programs' },
    { label: 'ABAVUBI App', to: '/programs' },
    { label: 'Sustainability', to: '/programs' },
    { label: 'Health Services', to: '/programs' },
  ],
  Resources: [
    { label: 'Media Center', to: '/media-center' },
    { label: 'Publications', to: '/media-center/publications' },
    { label: 'Gallery', to: '/media-center/gallery' },
    { label: 'Membership', to: '/membership' },
  ],
}

const socials = [
  { icon: 'ph:facebook-logo-duotone', href: '#', label: 'Facebook', color: '#1877F2' },
  { icon: 'ph:twitter-logo-duotone', href: '#', label: 'Twitter', color: '#1DA1F2' },
  { icon: 'ph:linkedin-logo-duotone', href: '#', label: 'LinkedIn', color: '#0A66C2' },
  { icon: 'ph:youtube-logo-duotone', href: '#', label: 'YouTube', color: '#FF0000' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setTimeout(() => setSubscribed(false), 3000)
      setEmail('')
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden bg-marine-800 text-marine-100 pt-10">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-marine-500 via-cerulean-500 to-marine-600" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-marine-500/10 blur-3xl rounded-full" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-cerulean-500/5 blur-3xl rounded-full" />


      {/* Main Footer Grid */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 xl:px-12 relative z-10 pt-32 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 xl:gap-20">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-4 mb-8 group">
              <img 
                src="/apple-touch-icon.png" 
                alt="FFOU Logo"
                className="w-14 h-14 rounded-2xl shadow-xl group-hover:rotate-12 transition-transform duration-500 object-contain bg-marine-500 p-1.5"
              />
              <div className="flex flex-col">
                <span className="font-header text-2xl text-white tracking-widest uppercase leading-none mb-1">FFOU</span>
                <span className="text-[10px] text-marine-300 font-bold tracking-[0.2em] uppercase">FEDERATION OF UGANDA</span>
              </div>
            </Link>
            <p className="text-base leading-relaxed text-marine-100 mb-8 max-w-sm">
              The apex umbrella body representing the interests of fishing organizations across Uganda, dedicated to ethical fishing and community prosperity.
            </p>
            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all group overflow-hidden"
                >
                  <Icon icon={s.icon} className="text-marine-200 text-xl group-hover:scale-110 transition-transform" style={{ '--hover-color': s.color }} />
                </a>
              ))}
            </div>
          </div>

          {/* Dynamic Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-1">
              <h4 className="text-white font-header text-sm tracking-[0.2em] uppercase mb-8 pb-2 border-b border-white/5">
                {title}
              </h4>
              <ul className="flex flex-col gap-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm transition-all text-marine-100 hover:text-marine-400 hover:pl-2 flex items-center group"
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity mr-2 text-[8px]">▶</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Column */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-header text-sm tracking-[0.2em] uppercase mb-8 pb-2 border-b border-white/5">
              Stay Updated
            </h4>
            <p className="text-xs text-marine-200 mb-6 leading-relaxed">
              Receive the latest fisheries reports and community impact stories.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative group">
                <Icon icon="ph:envelope-simple-duotone" className="absolute left-4 top-1/2 -translate-y-1/2 text-marine-300 group-focus-within:text-marine-400 transition-colors" />
                <input 
                  type="email" 
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-hidden focus:border-marine-500/50 transition-all placeholder:text-marine-500"
                  required
                />
              </div>
              <button 
                type="submit"
                className="w-full py-3 bg-white/8 hover:bg-white/15 text-white text-xs font-bold rounded-xl transition-all active:scale-95 border border-white/5"
              >
                {subscribed ? 'THANKS FOR JOINING!' : 'SUBSCRIBE NOW'}
              </button>
            </form>
          </div>
        </div>

        {/* Global Impact Contact Strip */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-between items-center gap-10">
          <div className="flex flex-wrap gap-8">
            {[
              { icon: 'ph:map-pin-duotone', label: 'HEAD OFFICE', text: 'Kampala, Uganda' },
              { icon: 'ph:envelope-duotone', label: 'GENERAL INQUIRIES', text: 'info@ffou.org' },
              { icon: 'ph:phone-duotone', label: 'SITUATION ROOM', text: '+256 414 555 000' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-marine-500/5 border border-marine-500/10 group-hover:bg-marine-500 group-hover:border-marine-500 transition-all shrink-0">
                  <Icon icon={item.icon} className="text-marine-400 text-xl group-hover:text-white" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-marine-400 tracking-widest">{item.label}</div>
                  <div className="text-sm text-white group-hover:text-marine-300 transition-colors">{item.text}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Social / Back to Top Combo */}
          <button 
            onClick={scrollToTop}
            className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 shadow-2xl"
            aria-label="Back to top"
          >
            <Icon icon="ph:arrow-up-bold" className="text-white text-xl group-hover:animate-bounce" />
          </button>
        </div>
      </div>

      {/* Bottom Bar: Professional & Transparent */}
      <div className="bg-black/40 border-t border-white/5 py-8">
        <div className="max-w-[1440px] mx-auto px-6 md:px-8 xl:px-12 flex flex-col md:flex-row items-center justify-between gap-6 opacity-60">
          <div className="flex items-center gap-4 text-[10px] font-bold tracking-[0.2em] text-marine-300">
            <span>© {new Date().getFullYear()} FFOU UGANDA</span>
            <span className="w-1 h-1 rounded-full bg-marine-600" />
            <span>ESTABLISHED 2017</span>
            <span className="w-1 h-1 rounded-full bg-marine-600" />
            <span>NGO BUREAU REGISTERED</span>
          </div>
          <div className="flex gap-8 text-[10px] font-bold tracking-widest uppercase">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/membership" className="hover:text-white transition-colors">Legal Status</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}