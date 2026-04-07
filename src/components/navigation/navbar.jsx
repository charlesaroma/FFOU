import { useState, useRef, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { motion, AnimatePresence } from 'framer-motion'
import { programsData } from '../../data/programsData'

const dropdownItems = {
  About: [
    { label: 'About Us', to: '/about/about-us' },
    { label: 'The Team', to: '/about/the-team' },
    { label: 'Our Partners', to: '/about/our-partners' },
  ],
  Programs: [
    { label: 'Programs', to: '/programs' },
    { label: 'Get Involved', to: '/programs/get-involved' },
    { label: 'Donate', to: '/programs/donate' },
  ],
  'Media Centre': [
    { label: 'Publications', to: '/media-center/publications' },
    { label: 'Gallery', to: '/media-center/gallery' },
  ],
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()
  const dropdownRef = useRef(null)

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

  return (
    <div className="absolute top-6 left-0 right-0 z-50 flex justify-center w-full px-4 md:px-8">
      <header className="w-full max-w-[1380px] bg-cerulean-500 shadow-2xl h-[95px] rounded-sm">
        <div className="w-full px-6 lg:px-12 h-full flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center h-full">
          <img 
            src="/logo.png" 
            alt="FFOU Logo" 
            className="w-[110px] md:w-[130px] h-[60px] md:h-[75px] object-contain block transition-all"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-10 h-full" ref={dropdownRef}>
          <NavLink 
            to="/" 
            className={({ isActive }) => `h-full flex items-center text-white text-[13px] font-bold uppercase tracking-wider transition-colors border-t-4 ${isActive ? 'border-gold-400' : 'border-transparent hover:text-blue-200'}`}
          >
            HOME
          </NavLink>
          
          <div className="relative group h-full flex items-center">
            <button 
              onMouseEnter={() => setActiveDropdown('About')}
              className={`h-full flex items-center text-white text-[13px] font-bold uppercase tracking-wider transition-colors border-t-4 ${activeDropdown === 'About' || location.pathname.includes('/about') ? 'border-gold-400' : 'border-transparent hover:text-blue-200'}`}
            >
              ABOUT
            </button>
            <AnimatePresence>
              {activeDropdown === 'About' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-0 w-48 bg-cerulean-500 shadow-xl rounded-sm overflow-hidden border-t-2 border-gold-400"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {dropdownItems.About.map(link => (
                    <Link key={link.to} to={link.to} className="block px-6 py-4 text-sm font-bold text-white hover:bg-cerulean-600 transition-all">
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative group h-full flex items-center">
            <button 
              onMouseEnter={() => setActiveDropdown('Programs')}
              className={`h-full flex items-center text-white text-[13px] font-bold uppercase tracking-wider transition-colors border-t-4 ${(activeDropdown === 'Programs' || location.pathname.includes('/programs')) ? 'border-gold-400' : 'border-transparent hover:text-blue-200'}`}
            >
              PROGRAMS
            </button>
            <AnimatePresence>
              {activeDropdown === 'Programs' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-0 w-48 bg-cerulean-500 shadow-xl rounded-sm overflow-hidden border-t-2 border-gold-400"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {dropdownItems.Programs.map(link => (
                    <Link key={link.to} to={link.to} className="block px-6 py-4 text-sm font-bold text-white hover:bg-cerulean-600 transition-all">
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink 
            to="/membership" 
            className={`h-full flex items-center text-white text-[13px] font-bold uppercase tracking-wider transition-colors border-t-4 ${location.pathname.includes('/membership') ? 'border-gold-400' : 'border-transparent hover:text-blue-200'}`}
          >
            MEMBERSHIP
          </NavLink>
          
          <div className="relative group h-full flex items-center">
            <button 
              onMouseEnter={() => setActiveDropdown('Media Centre')}
              className={`h-full flex items-center text-white text-[13px] font-bold uppercase tracking-wider transition-colors border-t-4 ${(activeDropdown === 'Media Centre' || location.pathname.includes('/media-center')) ? 'border-gold-400' : 'border-transparent hover:text-blue-200'}`}
            >
              MEDIA CENTRE
            </button>
            <AnimatePresence>
              {activeDropdown === 'Media Centre' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-0 w-48 bg-cerulean-500 shadow-xl rounded-sm overflow-hidden border-t-2 border-gold-400"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {dropdownItems['Media Centre'].map(link => (
                    <Link key={link.to} to={link.to} className="block px-6 py-4 text-sm font-bold text-white hover:bg-cerulean-600 transition-all">
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Action Button */}
        <div className="flex items-center h-full gap-4">
          <Link to="/programs/donate" className="bg-gold-500 text-white font-bold px-8 py-4 text-[13px] uppercase hover:bg-gold-400 transition-all rounded-sm hidden lg:flex items-center">
            DONATE
          </Link>
          <button className="lg:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon icon={menuOpen ? 'ph:x-bold' : 'ph:list-bold'} />
          </button>
        </div>
      </div>
      </header>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: 'auto' }} 
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-4 right-4 md:left-8 md:right-8 bg-cerulean-600 rounded-b-md shadow-2xl overflow-hidden mt-1"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              <Link to="/" onClick={() => setMenuOpen(false)} className="text-white font-bold text-sm">HOME</Link>
              <div className="space-y-4">
                <span className="text-cerulean-200 text-[10px] font-bold uppercase tracking-widest">About</span>
                {dropdownItems.About.map(link => (
                  <Link key={link.to} to={link.to} onClick={() => setMenuOpen(false)} className="block text-white font-bold text-sm pl-4">{link.label.toUpperCase()}</Link>
                ))}
              </div>
              <div className="space-y-4">
                <span className="text-cerulean-200 text-[10px] font-bold uppercase tracking-widest">Programs</span>
                {dropdownItems.Programs.map(link => (
                  <Link key={link.to} to={link.to} onClick={() => setMenuOpen(false)} className="block text-white font-bold text-sm pl-4 leading-tight">{link.label.toUpperCase()}</Link>
                ))}
              </div>
              <Link to="/membership" onClick={() => setMenuOpen(false)} className="text-white font-bold text-sm">MEMBERSHIP</Link>
              <Link to="/media-center" onClick={() => setMenuOpen(false)} className="text-white font-bold text-sm">MEDIA CENTRE</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
