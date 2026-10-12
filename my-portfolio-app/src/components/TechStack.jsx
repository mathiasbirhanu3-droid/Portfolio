import React, { useState } from 'react';
import { Layers, Search } from 'lucide-react';

export default function TechStack({ skills }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...new Set(skills.map(s => s.category))];

  const filteredSkills = skills.filter(skill => {
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-16 bg-white border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Tech Stack & Tools</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Expertise & Technical Mastery
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Modern technologies and frameworks I build scalable web systems with daily.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl border border-slate-200/60 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-white text-indigo-600 shadow-sm border border-slate-200/50'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
            />
          </div>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200/80 hover:border-indigo-200 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-slate-800 text-sm">{skill.name}</span>
                <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                  {skill.category}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-200/80 h-2 rounded-full overflow-hidden mt-3">
                <div
                  className="bg-gradient-to-r from-indigo-500 to-cyan-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <div className="flex justify-between items-center mt-2 text-[11px] text-slate-500 font-semibold">
                <span>Proficient</span>
                {/*<span>{skill.level}%</span>*/}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}