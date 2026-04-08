import React from 'react';

export default function PublicationCard({ item }) {
  return (
    <div className="bg-white border border-slate-100 shadow-sm flex flex-col h-full rounded-sm overflow-hidden group hover:border-cerulean-300 transition-all">
      {/* Icon Area with Tan Background */}
      <div className="bg-[#fdf7e9] h-[200px] flex items-center justify-center relative">
        <div className="relative transform transition-transform duration-500 group-hover:scale-110">
          <svg width="80" height="80" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M128 0C92.7 0 64 28.7 64 64V448C64 483.3 92.7 512 128 512H384C419.3 512 448 483.3 448 448V160L288 0H128Z" fill="#ff4d4d" fillOpacity="0.1"/>
            <path d="M288 0V160H448L288 0Z" fill="#ff4d4d" fillOpacity="0.2"/>
            <rect x="144" y="240" width="224" height="32" rx="4" fill="#a52a2a" />
            <rect x="144" y="304" width="224" height="32" rx="4" fill="#a52a2a" />
            <rect x="144" y="368" width="160" height="32" rx="4" fill="#a52a2a" />
            <text x="50%" y="120" dominantBaseline="middle" textAnchor="middle" fill="#a52a2a" fontSize="80" fontWeight="bold">PDF</text>
          </svg>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-8 flex flex-col grow">
        <h4 className="text-slate-800 font-bold text-base mb-2 uppercase tracking-tight">
          {item.name}
        </h4>
        <p className="text-slate-400 text-[11px] font-bold mb-8">
          Last Updated: {item.updated}
        </p>
        
        <div className="mt-auto">
          <a 
            href={item.fileUrl} 
            download
            className="block w-full bg-cerulean-600 text-white text-center py-3 text-[12px] font-bold uppercase tracking-widest rounded-sm hover:bg-cerulean-700 transition-colors shadow-md active:scale-[0.98] cursor-pointer"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
}
