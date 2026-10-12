{/*import React, { useState } from 'react';
import { Calculator, ArrowRight, Check } from 'lucide-react';
import { estimatorOptions } from '../data/portfolioData';

export default function Estimator({ scrollToSection }) {
  const [selectedType, setSelectedType] = useState(estimatorOptions.types[0].id);
  const [selectedFeatures, setSelectedFeatures] = useState(['auth', 'pwa']);

  const typeData = estimatorOptions.types.find(t => t.id === selectedType);

  const toggleFeature = (id) => {
    setSelectedFeatures(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const calculatedPrice = typeData.basePrice + selectedFeatures.reduce((acc, featId) => {
    const feat = estimatorOptions.features.find(f => f.id === featId);
    return acc + (feat ? feat.price : 0);
  }, 0);

  const calculatedHours = typeData.baseHours + selectedFeatures.reduce((acc, featId) => {
    const feat = estimatorOptions.features.find(f => f.id === featId);
    return acc + (feat ? feat.hours : 0);
  }, 0);
*/}
{/*  return (
    <section id="estimator" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Project Scope & Cost Estimator
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Configure your application requirements for an instant ballpark estimate.
          </p>
        </div>

        
        <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8">
          
       
          <div className="md:col-span-7 space-y-6">
            
           
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                1. Select Project Type
              </label>
              <div className="space-y-2">
                {estimatorOptions.types.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`w-full text-left p-3 rounded-xl border text-xs font-bold transition-all flex justify-between items-center ${
                      selectedType === type.id
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-500/20'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span>{type.name}</span>
                    <span className="opacity-80">${type.basePrice}+</span>
                  </button>
                ))}
              </div>
            </div>

            
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                2. Select Add-on Modules
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {estimatorOptions.features.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-2.5 rounded-xl border text-xs font-semibold transition-all flex items-center justify-between ${
                        isChecked
                          ? 'bg-indigo-50 border-indigo-300 text-indigo-700'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <span>{feat.name}</span>
                      {isChecked && <Check className="w-3.5 h-3.5 text-indigo-600" />}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

       
          <div className="md:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Estimated Summary
              </span>
              <h3 className="font-extrabold text-slate-900 text-lg mb-4">{typeData.name}</h3>

              <div className="space-y-3 border-y border-slate-100 py-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500 font-medium">Est. Turnaround:</span>
                  <span className="font-bold text-slate-800">~{Math.ceil(calculatedHours / 20)} Weeks</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500 font-medium">Est. Total Hours:</span>
                  <span className="font-bold text-slate-800">{calculatedHours} hrs</span>
                </div>
              </div>

              <div className="mt-6">
                <span className="text-xs font-semibold text-slate-500 block">Total Projected Cost</span>
                <div className="text-3xl font-black text-indigo-600">${calculatedPrice.toLocaleString()}</div>
              </div>
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="mt-6 w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md shadow-indigo-500/20 flex items-center justify-center gap-1.5 transition-all active:scale-95"
            >
              <span>Book Project Discussion</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}*/}