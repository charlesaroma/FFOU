import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

export default function Footer() {
  return (
    <footer className="bg-[#f0f9ff] pt-20">
      <div className="max-w-[1240px] mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          
          {/* Brand */}
          <div className="lg:col-span-1 space-y-6">
            <Link to="/">
              <img src="/apple-touch-icon.png" alt="FFOU Logo" className="w-16 h-16 bg-white p-2 rounded-sm shadow-sm" />
            </Link>
            <p className="text-[10px] text-slate-500 leading-relaxed font-medium">
              FFOU is a national non-profit umbrella body representing non-state actors in the fisheries sub-sector. Established in 2011, the federation serves as a unified voice for 131 member associations across Uganda's five major lakes: Victoria, Kyoga, Albert, George, and Edward.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-marine-800 font-bold text-sm mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about/about-us' },
                { label: 'Membership', to: '/membership' },
                { label: 'Publications', to: '/media-center/publications' },
                { label: 'Contact Us', to: '/contact-us' },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-slate-500 text-[10px] font-bold hover:text-marine-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Programs */}
          <div>
            <h4 className="text-marine-800 font-bold text-sm mb-6">Our Programs</h4>
            <ul className="space-y-3">
              {[
                { label: 'ICT Integration', to: '/programs/ict-integration' },
                { label: 'Capacity Building', to: '/programs/capacity-building' },
                { label: 'Aquaculture', to: '/programs/aquaculture' },
                { label: 'Climate Change', to: '/programs/climate-change' },
                { label: 'HIV Prevention & Care', to: '/programs/hiv-prevention' },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-slate-500 text-[10px] font-bold hover:text-marine-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Location */}
          <div>
            <h4 className="text-marine-800 font-bold text-sm mb-6">Our Location</h4>
            <p className="text-slate-500 text-[10px] font-bold leading-relaxed">
              Wabyona Building Namboole,<br />
              Bweyogerere, Jinja Road
            </p>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-marine-800 font-bold text-sm mb-6">Follow Us On Socials</h4>
            <div className="flex gap-4">
              {['ph:facebook-logo-bold', 'ph:twitter-logo-bold', 'ph:linkedin-logo-bold', 'ph:youtube-logo-bold'].map((icon, i) => (
                <a key={i} href="#" className="text-marine-600 hover:text-cerulean-500 transition-all">
                  <Icon icon={icon} className="text-xl" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Info Bar */}
      <div className="bg-[#e0f2fe] py-6 mb-0">
        <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <Icon icon="ph:envelope-simple-bold" className="text-marine-500" />
            </div>
            <div>
              <span className="block text-[8px] uppercase font-bold text-marine-800">Email Address</span>
              <span className="text-[10px] font-bold text-slate-500">info@ffou.org</span>
            </div>
          </div>
          <div className="flex items-center gap-4 border-slate-200 md:border-x px-0 md:px-8">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <Icon icon="ph:phone-call-bold" className="text-marine-500" />
            </div>
            <div>
              <span className="block text-[8px] uppercase font-bold text-marine-800">Toll Free</span>
              <span className="text-[10px] font-bold text-slate-500">0800 100261</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <Icon icon="ph:phone-bold" className="text-marine-500" />
            </div>
            <div>
              <span className="block text-[8px] uppercase font-bold text-marine-800">Phone Number</span>
              <span className="text-[10px] font-bold text-slate-500">+(256) 417336800</span>
              <br />
              <span className="text-[10px] font-bold text-slate-500">+(256) 414583081</span>
            </div>
          </div>
        </div>
      </div>

      {/* Final Copyright */}
      <div className="bg-marine-900 py-4 text-center">
        <span className="text-[8px] text-white/40 font-bold uppercase tracking-widest">
          Copyright © 2026 Federation of Fisheries Organisations Uganda
        </span>
      </div>
    </footer>
  )
}