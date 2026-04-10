import React from 'react';
import { Icon } from '@iconify/react';

export default function GetInvolvedForm() {
  return (
    <main className="min-h-screen bg-surface-500 pb-20 pt-32">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Top Section: Staggered Images and Text */}
        <section className="flex flex-col lg:flex-row gap-16 mb-24 items-center">
          {/* Decorative Image */}
          <div className="w-full lg:w-1/2">
            <img 
              src="https://ik.imagekit.io/sbgenu6wj/FFOU/programs%20page/images.png" 
              alt="FFOU Community Action" 
              className="w-full h-auto block"
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1521791136064-7986c2923216?auto=format&fit=crop&q=80&w=800' }}
            />
          </div>

          {/* Heading and Lead Text */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl md:text-[44px] font-bold text-slate-800 mb-8 leading-tight">
              Volunteer with us
            </h1>
            <div className="space-y-6 text-slate-600 leading-[1.8] text-[15px]">
              <p>
                FFOU operates as a central hub for fisheries sector optimization, and our impact is scaled through the strategic aggregation of resources. We invite organizations, technical experts, and advocates to deploy their assets within our framework to drive systemic change across Uganda's aquatic landscape.
              </p>
              <p>
                By aligning with our mission, you are not simply "helping"; you are investing in the industrialization of the blue economy, the protection of fundamental fishing rights, and the deployment of high-utility digital infrastructure. Whether through capital deployment, technical volunteering, or policy advocacy, your involvement is a critical catalyst for sector-wide resilience and sustainable growth.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="max-w-[860px] mx-auto space-y-8">
          
          {/* Card 1: Contact Information */}
          <div className="bg-white p-10 md:p-14 shadow-sm border border-slate-100 rounded-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-10">Contact Information</h2>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Dropdown 1 */}
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-slate-700">Volunteer Type*</label>
                <div className="relative">
                  <select className="w-full bg-white border border-slate-200 p-4 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-marine-500/10 appearance-none cursor-pointer">
                    <option>Select Option</option>
                    <option>Legal Counsel (Human Rights & Compliance)</option>
                    <option>Environmental Consultant (Aquaculture & Climate)</option>
                    <option>Field Officer (Community Mobilization)</option>
                    <option>Business & Financial Literacy Trainer</option>
                    <option>Health Resource Specialist (HIV & WASH)</option>
                    <option>Policy Advocate & Communications</option>
                    <option>Research & Data Analyst</option>
                  </select>
                  <Icon icon="mdi:chevron-down" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
                </div>
              </div>

              {/* Dropdown 2 */}
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-slate-700">Programs</label>
                <div className="relative">
                  <select className="w-full bg-white border border-slate-200 p-4 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-marine-500/10 appearance-none cursor-pointer">
                    <option>Select Program</option>
                    <option>ICT Integration</option>
                    <option>Capacity Building</option>
                    <option>Aquaculture</option>
                  </select>
                  <Icon icon="mdi:chevron-down" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
                </div>
              </div>

              {/* Name Fields */}
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-slate-700">First name*</label>
                <input type="text" className="bg-white border border-slate-200 p-4 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-marine-500/10" placeholder="" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-slate-700">Last name*</label>
                <input type="text" className="bg-white border border-slate-200 p-4 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-marine-500/10" placeholder="" />
              </div>

              {/* Email - Full Width */}
              <div className="flex flex-col gap-2 md:col-span-2 mt-2">
                <label className="text-[13px] font-bold text-slate-700">Email address</label>
                <input type="email" className="bg-white border border-slate-200 p-4 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-marine-500/10" placeholder="" />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2 md:col-span-1 mt-2">
                <label className="text-[13px] font-bold text-slate-700">Phone number</label>
                <div className="flex">
                  <span className="bg-slate-50 border border-r-0 border-slate-200 p-4 text-sm text-slate-500 font-bold">+256</span>
                  <input type="text" className="flex-1 bg-white border border-slate-200 p-4 rounded-sm rounded-l-none text-sm focus:outline-none focus:ring-2 focus:ring-marine-500/10" placeholder="700 000 000" />
                </div>
              </div>
            </form>
          </div>

          {/* Card 2: Additional Notes */}
          <div className="bg-white p-10 md:p-14 shadow-sm border border-slate-100 rounded-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-10">Additional Notes</h2>
            
            <div className="space-y-8">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-slate-700">How did you hear about FFOU?</label>
                <div className="relative">
                  <select className="w-full bg-white border border-slate-200 p-4 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-marine-500/10 appearance-none cursor-pointer">
                    <option>Select Option</option>
                    <option>Social Media</option>
                    <option>Website</option>
                    <option>Friend/Word of Mouth</option>
                  </select>
                  <Icon icon="mdi:chevron-down" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-slate-700">Any Comments?</label>
                <textarea rows={5} className="w-full bg-white border border-slate-200 p-4 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-marine-500/10" placeholder="Tell us more about your interest..."></textarea>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <button className="bg-marine-600 text-white font-bold py-4 px-12 rounded-sm text-sm tracking-widest hover:bg-marine-700 transition-all shadow-lg hover:shadow-marine-600/20 active:scale-[0.98] cursor-pointer">
              Submit form
            </button>
          </div>

        </section>
      </div>
    </main>
  );
}
