import { useState, useRef, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { motion, AnimatePresence } from 'framer-motion'

const dropdownItems = {
  About: [
    { label: 'About Us', to: '/about/about-us', desc: 'Who we are' },
    { label: 'The Team', to: '/about/the-team', desc: 'Leadership' },
    { label: 'Our Partners', to: '/about/our-partners', desc: 'Partners' },
  ],
  Programs: [
    { label: 'Get Involved', to: '/programs/get-involved', desc: 'Join our cause' },
    { label: 'Donate', to: '/programs/donate', desc: 'Support our work' },
  ],
  'Media Center': [
    { label: 'Publications', to: '/media-center/publications', desc: 'Reports & docs' },
    { label: 'Gallery', to: '/media-center/gallery', desc: 'Photos' },
  ],
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const dropdownRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    setActiveDropdown(null)
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3"
      style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
      }}
    >
      <div className="layout-spine flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div 
            className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md transition-transform group-hover:scale-105"
            style={{ background: 'var(--color-zurich-500)' }}
          >
            <Icon icon="ph:fish-bold" className="text-white text-xl" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-heading text-lg tracking-wider" style={{ color: 'var(--text-main)' }}>
              FFOU
            </span>
            <span className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
              Uganda
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive ? 'bg-zurich-500 text-white shadow-sm' : 'hover:text-zurich-600'
              }`
            }
            style={({ isActive }) => ({
              color: isActive ? '#fff' : 'var(--text-main)',
            })}
          >
            Home
          </NavLink>

          {/* About Dropdown */}
          <div className="relative">
            <NavLink
              to="/about/about-us"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                  isActive ? 'bg-zurich-500 text-white shadow-sm' : 'hover:text-zurich-600'
                }`
              }
              style={({ isActive }) => ({
                color: isActive ? '#fff' : 'var(--text-main)',
              })}
              onMouseEnter={() => setActiveDropdown('About')}
            >
              About <Icon icon="ph:caret-down-bold" className="text-xs" />
            </NavLink>
            <AnimatePresence>
              {activeDropdown === 'About' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-2 w-48 rounded-xl overflow-hidden"
                  style={{ 
                    background: 'var(--surface-a)', 
                    border: '1px solid var(--nav-stroke)',
                    boxShadow: 'var(--shadow-lg)'
                  }}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {dropdownItems.About.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block px-4 py-3 hover:bg-zurich-50 transition-colors"
                      style={{ borderBottom: '1px solid var(--nav-stroke)' }}
                    >
                      <span className="text-sm font-medium block" style={{ color: 'var(--text-main)' }}>
                        {item.label}
                      </span>
                      <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                        {item.desc}
                      </span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Programs Dropdown */}
          <div className="relative">
            <NavLink
              to="/programs/get-involved"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                  isActive ? 'bg-zurich-500 text-white shadow-sm' : 'hover:text-zurich-600'
                }`
              }
              style={({ isActive }) => ({
                color: isActive ? '#fff' : 'var(--text-main)',
              })}
              onMouseEnter={() => setActiveDropdown('Programs')}
            >
              Programs <Icon icon="ph:caret-down-bold" className="text-xs" />
            </NavLink>
            <AnimatePresence>
              {activeDropdown === 'Programs' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-2 w-48 rounded-xl overflow-hidden"
                  style={{ 
                    background: 'var(--surface-a)', 
                    border: '1px solid var(--nav-stroke)',
                    boxShadow: 'var(--shadow-lg)'
                  }}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {dropdownItems.Programs.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block px-4 py-3 hover:bg-zurich-50 transition-colors"
                      style={{ borderBottom: '1px solid var(--nav-stroke)' }}
                    >
                      <span className="text-sm font-medium block" style={{ color: 'var(--text-main)' }}>
                        {item.label}
                      </span>
                      <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                        {item.desc}
                      </span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink
            to="/membership"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive ? 'bg-zurich-500 text-white shadow-sm' : 'hover:text-zurich-600'
              }`
            }
            style={({ isActive }) => ({
              color: isActive ? '#fff' : 'var(--text-main)',
            })}
          >
            Membership
          </NavLink>

          {/* Media Center Dropdown */}
          <div className="relative">
            <NavLink
              to="/media-center/publications"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                  isActive ? 'bg-zurich-500 text-white shadow-sm' : 'hover:text-zurich-600'
                }`
              }
              style={({ isActive }) => ({
                color: isActive ? '#fff' : 'var(--text-main)',
              })}
              onMouseEnter={() => setActiveDropdown('Media Center')}
            >
              Media Center <Icon icon="ph:caret-down-bold" className="text-xs" />
            </NavLink>
            <AnimatePresence>
              {activeDropdown === 'Media Center' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-2 w-48 rounded-xl overflow-hidden"
                  style={{ 
                    background: 'var(--surface-a)', 
                    border: '1px solid var(--nav-stroke)',
                    boxShadow: 'var(--shadow-lg)'
                  }}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {dropdownItems['Media Center'].map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block px-4 py-3 hover:bg-zurich-50 transition-colors"
                      style={{ borderBottom: '1px solid var(--nav-stroke)' }}
                    >
                      <span className="text-sm font-medium block" style={{ color: 'var(--text-main)' }}>
                        {item.label}
                      </span>
                      <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                        {item.desc}
                      </span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive ? 'bg-zurich-500 text-white shadow-sm' : 'hover:text-zurich-600'
              }`
            }
            style={({ isActive }) => ({
              color: isActive ? '#fff' : 'var(--text-main)',
            })}
          >
            Contact Us
          </NavLink>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <Link
            to="/programs/donate"
            className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:scale-105"
            style={{ 
              background: 'var(--color-militant-500)', 
              color: '#fff',
              boxShadow: '0 2px 8px rgba(39, 163, 87, 0.3)',
            }}
          >
            <Icon icon="ph:heart-bold" className="text-base" />
            Donate
          </Link>

          <Link
            to="/membership"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:scale-105"
            style={{ 
              background: 'var(--color-zurich-500)', 
              color: '#fff',
              boxShadow: '0 2px 8px rgba(35, 136, 212, 0.3)',
            }}
          >
            <Icon icon="ph:users-three-bold" className="text-base" />
            Join FFOU
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
            style={{ color: 'var(--text-main)' }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon icon={menuOpen ? 'ph:x-bold' : 'ph:list-bold'} className="text-xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden"
            style={{
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(16px)',
              borderTop: '1px solid rgba(0, 0, 0, 0.08)',
            }}
          >
            <div className="layout-spine py-4 flex flex-col gap-1">
              <NavLink
                to="/"
                end
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive ? 'bg-zurich-500 text-white' : ''
                  }`
                }
                style={({ isActive }) => ({
                  color: isActive ? '#fff' : 'var(--text-main)',
                })}
              >
                Home
              </NavLink>

              {/* Mobile About Links */}
              <div className="px-4 py-2">
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                  About
                </span>
              </div>
              {dropdownItems.About.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className="pl-8 pr-4 py-2.5 text-sm"
                  style={{ color: 'var(--text-main)' }}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Programs Links */}
              <div className="px-4 py-2 mt-2">
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                  Programs
                </span>
              </div>
              {dropdownItems.Programs.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className="pl-8 pr-4 py-2.5 text-sm"
                  style={{ color: 'var(--text-main)' }}
                >
                  {item.label}
                </Link>
              ))}

              <NavLink
                to="/membership"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive ? 'bg-zurich-500 text-white' : ''
                  }`
                }
                style={({ isActive }) => ({
                  color: isActive ? '#fff' : 'var(--text-main)',
                })}
              >
                Membership
              </NavLink>

              {/* Mobile Media Center Links */}
              <div className="px-4 py-2 mt-2">
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                  Media Center
                </span>
              </div>
              {dropdownItems['Media Center'].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className="pl-8 pr-4 py-2.5 text-sm"
                  style={{ color: 'var(--text-main)' }}
                >
                  {item.label}
                </Link>
              ))}

              <NavLink
                to="/contact-us"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive ? 'bg-zurich-500 text-white' : ''
                  }`
                }
                style={({ isActive }) => ({
                  color: isActive ? '#fff' : 'var(--text-main)',
                })}
              >
                Contact Us
              </NavLink>

              <div className="flex flex-col gap-2 mt-3">
                <Link
                  to="/programs/donate"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-semibold text-center text-white"
                  style={{ background: 'var(--color-militant-500)' }}
                >
                  Donate
                </Link>
                <Link
                  to="/membership"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-semibold text-center text-white"
                  style={{ background: 'var(--color-zurich-500)' }}
                >
                  Join FFOU
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
