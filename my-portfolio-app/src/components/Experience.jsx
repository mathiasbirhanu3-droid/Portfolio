import React, { useState } from 'react';
import { Calendar, Briefcase, GraduationCap, CheckCircle } from 'lucide-react';

export default function Experience({ experience }) {
  const [filterType, setFilterType] = useState('All');

  const filteredExperience = filterType === 'All'
    ? experience
    : experience.filter(item => item.type === filterType);

  return (
    <section id="experience" className="py-16 bg-slate-100/60 border-y border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Experience & Education
          </h2>
        </div>

        {/* Filter Toggle */}
        <div className="flex justify-center gap-2 mb-10">
          {['All', 'Work', 'Education'].map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                filterType === type
                  ? 'bg-white text-indigo-600 shadow-sm border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-indigo-200 ml-4 sm:ml-8 space-y-8">
          {filteredExperience.map((item) => (
            <div key={item.id} className="relative pl-6 sm:pl-8 group">
              
              {/* Timeline Icon Marker */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-white border-2 border-indigo-600 flex items-center justify-center text-indigo-600 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-200">
                {item.type === 'Work' ? <Briefcase className="w-3.5 h-3.5" /> : <GraduationCap className="w-3.5 h-3.5" />}
              </div>

              {/* Card Body */}
              <div className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">{item.role}</h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 w-fit">
                    {item.period}
                  </span>
                </div>

                <div className="text-xs font-bold text-indigo-600 mb-3">{item.company}</div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Bullet Highlights */}
                {item.highlights && (
                  <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}