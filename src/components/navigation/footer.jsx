import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="bg-surface-600 pt-20">
      <div className="max-w-[1240px] mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand - Span 2 units for better width */}
          <div className="lg:col-span-2 space-y-10">
            <Link to="/">
              <div className="w-[140px] h-[80px] flex items-start justify-start">
                <img
                  src="/logo.png"
                  alt="FFOU Logo"
                  className="w-[140px] h-[80px] object-contain object-left block"
                />
              </div>
            </Link>
            <p className="text-[14px] text-slate-500 pt-6 leading-relaxed font-semibold max-w-[440px]">
              FFOU is a national non-profit umbrella body representing non-state
              actors in the fisheries sub-sector. Established in 2011, the
              federation serves as a unified voice for 131 member associations
              across Uganda's five major lakes: Victoria, Kyoga, Albert, George,
              and Edward.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-marine-600 font-bold text-content-sm mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about/about-us" },
                { label: "Membership", to: "/membership" },
                { label: "Publications", to: "/media-center/publications" },
                { label: "Contact Us", to: "/contact-us" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-slate-500 text-[13px] font-bold hover:text-marine-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Programs */}
          <div className="lg:col-span-1">
            <h4 className="text-marine-600 font-bold text-content-sm mb-6">
              Our Programs
            </h4>
            <ul className="space-y-4">
              {[
                { label: "ICT Integration", to: "/programs/ict-integration" },
                {
                  label: "Capacity Building",
                  to: "/programs/capacity-building",
                },
                { label: "Aquaculture", to: "/programs/aquaculture" },
                { label: "Climate Change", to: "/programs/climate-change" },
                {
                  label: "HIV Prevention & Care",
                  to: "/programs/hiv-prevention",
                },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-slate-500 text-[13px] font-bold hover:text-marine-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Socials */}
          <div className="lg:col-span-1 flex flex-col">
            <div className="mb-6">
              <h4 className="text-marine-600 font-bold text-content-sm mb-6">
                Our Location
              </h4>
              <p className="text-slate-500 text-[13px] font-bold leading-relaxed">
                Wabyona Building Namboole,
                <br />
                Bweyogerere, Jinja Road
              </p>
            </div>

            <hr className="border-t border-marine-200/50 my-4" />

            <div className="mt-4">
              <h4 className="text-marine-600 font-bold text-content-sm mb-6">
                Follow Us On Socials
              </h4>
              <div className="flex gap-4">
                {[
                  "ph:facebook-logo-bold",
                  "ph:twitter-logo-bold",
                  "ph:linkedin-logo-bold",
                  "ph:youtube-logo-bold",
                ].map((icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-marine-500 hover:text-cerulean-500 transition-all"
                  >
                    <Icon icon={icon} className="text-xl" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Bar with Top Horizontal Divider */}
      <div className="bg-surface-700 py-10 mb-0 relative border-t border-marine-200/40">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-12">
            
            {/* Col 1: Aligned under Brand */}
            <div className="lg:col-span-2 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-surface-500 flex items-center justify-center shadow-sm">
                <Icon
                  icon="ph:envelope-simple-light"
                  className="text-2xl text-marine-600"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[17px] font-bold text-marine-700 mb-1">
                  Email Address
                </span>
                <span className="text-[14px] font-bold text-slate-500">
                  info@ffou.org
                </span>
              </div>
            </div>

            {/* Col 2: Aligned under Quick Links */}
            <div className="lg:col-span-1 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-surface-500 flex items-center justify-center shadow-sm">
                <Icon
                  icon="ph:phone-light"
                  className="text-2xl text-marine-600"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[17px] font-bold text-marine-700 mb-1">
                  Toll Free
                </span>
                <span className="text-[14px] font-bold text-slate-500">
                  0800 100261
                </span>
              </div>
            </div>

            {/* Col 3: Aligned under Programs */}
            <div className="lg:col-span-1 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-surface-500 flex items-center justify-center shadow-sm">
                <Icon
                  icon="ph:device-mobile-light"
                  className="text-2xl text-marine-600"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[17px] font-bold text-marine-700 mb-1">
                  Phone Number
                </span>
                <span className="text-[14px] font-bold text-slate-500">
                  +(256) 417336800
                </span>
                <span className="text-[14px] font-bold text-slate-500">
                  +(256) 414583081
                </span>
              </div>
            </div>
            
            {/* Col 4: Empty (Under Location) */}
            <div className="hidden lg:block lg:col-span-1"></div>
          </div>
        </div>
      </div>

      {/* Final Copyright */}
      <div className="bg-marine-800 py-6 text-center">
        <span className="text-[12px] text-surface-500/70 font-semibold">
          Copyright © 2026 Federation of Fisheries Organisations Uganda
        </span>
      </div>
    </footer>
  );
}
