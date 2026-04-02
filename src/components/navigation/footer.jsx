import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

const footerLinks = {
  Organization: [
    { label: 'About FFOU', to: '/about' },
    { label: 'Our Team', to: '/about' },
    { label: 'Our Story', to: '/about' },
    { label: 'Partners', to: '/about' },
  ],
  Programs: [
    { label: 'Advocacy', to: '/programs' },
    { label: 'ABAVUBI App', to: '/programs' },
    { label: 'Sustainability', to: '/programs' },
    { label: 'Community Support', to: '/programs' },
  ],
  Resources: [
    { label: 'Media Center', to: '/media-center' },
    { label: 'Publications', to: '/media-center' },
    { label: 'Gallery', to: '/media-center' },
    { label: 'Membership', to: '/membership' },
  ],
}

const socials = [
  { icon: 'ph:facebook-logo-bold', href: '#', label: 'Facebook' },
  { icon: 'ph:twitter-logo-bold', href: '#', label: 'Twitter' },
  { icon: 'ph:youtube-logo-bold', href: '#', label: 'YouTube' },
  { icon: 'ph:whatsapp-logo-bold', href: '#', label: 'WhatsApp' },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-thamar-950)', color: 'var(--color-smoke-500)' }}>
      {/* Top CTA Banner */}
      <div style={{ background: 'var(--color-zurich-600)' }} className="py-10">
        <div className="layout-spine flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-2xl text-white tracking-wide">
              Join the Federation
            </h3>
            <p className="text-zurich-100 text-sm mt-1">
              Be part of 131+ member associations driving change across Uganda's fisheries.
            </p>
          </div>
          <Link
            to="/membership"
            className="px-6 py-3 rounded-xl bg-white text-zurich-700 font-semibold text-sm hover:bg-zurich-50 transition-colors shadow-md whitespace-nowrap"
          >
            Become a Member
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="layout-spine py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-zurich-500 flex items-center justify-center">
                <Icon icon="ph:fish-bold" className="text-white text-xl" />
              </div>
              <div>
                <div className="font-heading text-xl text-white tracking-wider">FFOU</div>
                <div className="text-xs text-thamar-300">Federation of Fisheries Organizations Uganda</div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-thamar-200)' }}>
              A national non-profit umbrella body promoting ethical fishing practices and sustainable
              development for improved livelihoods across Uganda's five great lakes.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-thamar-800 flex items-center justify-center hover:bg-zurich-600 transition-colors"
                >
                  <Icon icon={s.icon} className="text-thamar-200 text-base" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">
                {title}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm transition-colors hover:text-zurich-400"
                      style={{ color: 'var(--color-thamar-200)' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div
          className="mt-12 pt-8 flex flex-col md:flex-row gap-4 md:gap-8"
          style={{ borderTop: '1px solid var(--color-thamar-800)' }}
        >
          {[
            { icon: 'ph:map-pin-bold', text: 'Kampala, Uganda' },
            { icon: 'ph:envelope-bold', text: 'info@ffou.org' },
            { icon: 'ph:globe-bold', text: 'www.ffou.org' },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-thamar-200)' }}>
              <Icon icon={item.icon} className="text-zurich-400 text-base shrink-0" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid var(--color-thamar-800)' }}>
        <div className="layout-spine py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs" style={{ color: 'var(--color-thamar-300)' }}>
          <span>© {new Date().getFullYear()} Federation of Fisheries Organizations Uganda. All rights reserved.</span>
          <span>Established 2017 · Registered NGO</span>
        </div>
      </div>
    </footer>
  )
}