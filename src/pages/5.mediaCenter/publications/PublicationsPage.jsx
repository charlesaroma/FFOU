import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import PublicationHero from './PublicationHero';
import PublicationSidebar from './PublicationSidebar';
import PublicationCard from './PublicationCard';
import { publicationsData } from '../../../data/publicationsData';

export default function PublicationsPage() {
  const { category: categorySlug } = useParams();

  // Default to 'all' if no category is specified
  if (!categorySlug) {
    return <Navigate to="/media-center/publications/all" replace />;
  }

  // Logic to filter data
  let activeCategory = null;
  let displayItems = [];

  if (categorySlug === 'all') {
    activeCategory = {
      category: "All Publications",
      description: "Explore all of FFOU's official documents, reports, and outreach resources in one place."
    };
    displayItems = publicationsData.flatMap(cat => cat.items);
  } else {
    activeCategory = publicationsData.find(cat => cat.slug === categorySlug);
    displayItems = activeCategory ? activeCategory.items : [];
  }

  if (!activeCategory && categorySlug !== 'all') {
    return <div className="py-40 text-center font-bold text-slate-400">Category not found</div>;
  }

  return (
    <main className="bg-white min-h-screen">
      <PublicationHero />
      
      <div className="max-w-[1240px] mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Side: Navigation Sidebar */}
          <PublicationSidebar />

          {/* Right Side: Dynamic Content Area */}
          <div className="flex-1">
            {/* Category Header */}
            <div className="mb-12">
              <h2 className="text-[32px] md:text-[38px] font-bold text-slate-800 mb-6 leading-tight">
                {activeCategory?.category}
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed max-w-3xl font-medium">
                {activeCategory?.description}
              </p>
            </div>

            {/* Publication Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {displayItems.length > 0 ? (
                displayItems.map((item) => (
                  <PublicationCard key={item.id} item={item} />
                ))
              ) : (
                <p className="text-slate-400 font-bold col-span-full py-20 text-center border-2 border-dashed border-slate-100 italic">
                  No documents found in this category.
                </p>
              )}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
