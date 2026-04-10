import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { publicationsData } from '../../../data/publicationsData';

export default function PublicationSidebar() {
  return (
    <aside className="w-full lg:w-[320px] shrink-0">
      <div className="bg-white shadow-sm border border-slate-100 overflow-hidden">
        {/* Sidebar Header */}
        <div className="bg-cerulean-600 px-8 py-5">
          <h3 className="text-white font-bold text-lg tracking-wide">Resource Library</h3>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col">
          <NavLink
            to="/media-center/publications/all"
            className={({ isActive }) => 
              `flex items-center justify-between px-8 py-5 text-sm font-semibold transition-all border-b border-slate-50 cursor-pointer ${
                isActive ? 'text-cerulean-600 bg-surface-500' : 'text-slate-500 hover:bg-slate-50 hover:text-cerulean-500'
              }`
            }
          >
            <span>All Publications</span>
            <Icon icon="mdi:chevron-right" className="text-xs opacity-40" />
          </NavLink>

          {publicationsData.map((category) => (
            <NavLink
              key={category.slug}
              to={`/media-center/publications/${category.slug}`}
              className={({ isActive }) => 
                `flex items-center justify-between px-8 py-5 text-sm font-semibold transition-all border-b border-slate-50 cursor-pointer ${
                  isActive ? 'text-cerulean-600 bg-surface-500' : 'text-slate-500 hover:bg-slate-50 hover:text-cerulean-500'
                }`
              }
            >
              <span>{category.category}</span>
              <Icon icon="mdi:chevron-right" className="text-xs opacity-40" />
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}
