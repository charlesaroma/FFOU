import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

const dropdownItems = {
  About: [
    { label: "About Us", to: "/about/about-us" },
    { label: "The Team", to: "/about/the-team" },
    { label: "Our Partners", to: "/about/our-partners" },
  ],
  Programs: [
    { label: "Programs", to: "/programs" },
    { label: "Get Involved", to: "/programs/get-involved" },
    { label: "Donate", to: "/programs/donate" },
  ],
  "Media Centre": [
    { label: "Media Centre", to: "/media-center" },
    { label: "Publications", to: "/media-center/publications" },
    { label: "Gallery", to: "/media-center/gallery" },
  ],
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [openSection, setOpenSection] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActiveDropdown(null);
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-100 transition-all duration-500 py-4"
      >
        <div
          className="mx-auto max-w-[1380px] transition-all duration-500 px-4 md:px-8"
        >
          <div
            className="w-full bg-cerulean-500 shadow-2xl transition-all duration-500 overflow-visible rounded-[4px] h-[85px]"
          >
            <div className="w-full px-6 lg:px-12 h-full flex items-center justify-between">
              {/* Logo */}
              <Link to="/" className="flex items-center h-full">
                <img
                  src="/logo.png"
                  alt="FFOU Logo"
                  className="object-contain block transition-all duration-500 w-[110px] h-[60px]"
                />
              </Link>

              {/* Desktop Nav */}
              <nav
                className="hidden lg:flex items-center gap-6 xl:gap-8 h-full"
                ref={dropdownRef}
              >
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `h-full flex items-center text-white text-[11px] font-bold uppercase tracking-wider transition-colors border-t-4 cursor-pointer ${isActive ? "border-amber-400" : "border-transparent hover:text-blue-100"}`
                  }
                >
                  HOME
                </NavLink>

                {["About", "Programs", "Media Centre"].map((item) => (
                  <div
                    key={item}
                    className="relative h-full flex items-center"
                    onMouseEnter={() => setActiveDropdown(item)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`h-full flex items-center text-white text-[11px] font-bold uppercase tracking-wider transition-colors border-t-4 cursor-pointer ${
                        (item === "About" &&
                          location.pathname.includes("/about")) ||
                        (item === "Programs" &&
                          location.pathname.includes("/programs")) ||
                        (item === "Media Centre" &&
                          location.pathname.includes("/media-center"))
                          ? "border-amber-400"
                          : "border-transparent hover:text-blue-100"
                      }`}
                    >
                      {item}
                    </button>
                    <AnimatePresence>
                      {activeDropdown === item && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-0 w-60 bg-cerulean-600 shadow-2xl rounded-b-[4px] overflow-hidden border-t-2 border-amber-400 z-200"
                        >
                          {dropdownItems[item].map((link) => (
                            <Link
                              key={link.to}
                              to={link.to}
                              className="block px-6 py-4 text-[12px] font-bold text-white hover:bg-cerulean-400 transition-all border-b border-white/5 last:border-0"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                <NavLink
                  to="/membership"
                  className={({ isActive }) =>
                    `h-full flex items-center text-white text-[11px] font-bold uppercase tracking-wider transition-colors border-t-4 ${isActive ? "border-amber-400" : "border-transparent hover:text-blue-100"}`
                  }
                >
                  MEMBERSHIP
                </NavLink>
              </nav>

              {/* Action Button */}
              <div className="flex items-center h-full gap-4">
                <Link
                  to="/programs/donate"
                  className="bg-amber-500 text-white font-bold px-7 py-3 text-[11px] uppercase hover:bg-amber-600 transition-all rounded-[4px] hidden lg:flex items-center shadow-lg"
                >
                  DONATE
                </Link>
                <button
                  className="lg:hidden text-white text-3xl p-2 hover:bg-white/10 rounded-full transition-colors"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <Icon icon={menuOpen ? "mdi:close-thick" : "mdi:menu"} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Modern Full-Screen Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-110 bg-cerulean-500 lg:hidden flex flex-col"
          >
            <div className="flex items-center justify-between p-8 border-b border-white/10">
              <img src="/logo.png" alt="FFOU" className="h-12 object-contain" />
              <button
                className="text-white text-4xl p-2 hover:bg-white/10 rounded-full"
                onClick={() => setMenuOpen(false)}
              >
                <Icon icon="mdi:close-thick" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-8">
              <div className="flex flex-col">
                <Link
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between text-white font-bold text-2xl py-6 border-b border-white/10 active:bg-white/5 transition-colors px-2 rounded-[4px]"
                >
                  HOME
                  <Icon icon="mdi:chevron-right" className="text-white/30 text-xl" />
                </Link>

                {Object.entries(dropdownItems).map(([key, items]) => (
                  <div key={key} className="border-b border-white/10">
                    <button
                      onClick={() => setOpenSection(openSection === key ? null : key)}
                      className="w-full flex items-center justify-between text-white font-bold text-2xl py-6 cursor-pointer active:bg-white/5 transition-colors px-2 rounded-[4px]"
                    >
                      <span className="uppercase">{key}</span>
                      <div className="w-10 h-10 bg-white/10 rounded-[4px] flex items-center justify-center">
                        <Icon 
                          icon={openSection === key ? "mdi:minus-thick" : "mdi:plus-thick"} 
                          className={`text-2xl transition-transform ${openSection === key ? 'text-amber-400' : 'text-white'}`} 
                        />
                      </div>
                    </button>
                    <AnimatePresence>
                      {openSection === key && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col pb-4 mb-2">
                            {items.map((link) => (
                              <Link
                                key={link.to}
                                to={link.to}
                                onClick={() => setMenuOpen(false)}
                                className="text-white/90 font-semibold text-lg py-5 px-6 border-l-2 border-amber-400/50 bg-white/5 mb-1 flex items-center justify-between hover:bg-white/10 active:bg-white/20 transition-colors ml-2 mr-2 rounded-r-[4px]"
                              >
                                {link.label}
                                <Icon icon="mdi:arrow-right-thin" className="text-amber-400" />
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                <Link
                  to="/membership"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between text-white font-bold text-2xl py-6 border-b border-white/10 active:bg-white/5 transition-colors px-2 rounded-[4px]"
                >
                  MEMBERSHIP
                  <Icon icon="mdi:chevron-right" className="text-white/30 text-xl" />
                </Link>

                <div className="mt-12">
                  <Link
                    to="/programs/donate"
                    onClick={() => setMenuOpen(false)}
                    className="w-full bg-amber-500 text-cerulean-900 font-bold py-6 text-xl uppercase flex items-center justify-center gap-3 rounded-[4px] shadow-xl hover:bg-amber-400 active:scale-95 transition-all"
                  >
                    <Icon icon="mdi:heart" className="text-2xl" />
                    MAKE A DONATION
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
