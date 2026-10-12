import React from 'react';
import { X, Printer, Award, User } from 'lucide-react';

export default function ResumeModal({ profile, skills, experience, certifications, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-10 relative">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
          <button
            onClick={() => window.print()}
            className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / Save PDF</span>
          </button>

          <button onClick={onClose} className="p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Printable Document */}
        <div id="printable-resume" className="space-y-6 text-slate-800">
          
          {/* Header with Photo */}
          <div className="flex items-center gap-4 border-b border-slate-200 pb-5">
            <div className="w-16 h-16 rounded-2xl overflow-hidden border border-slate-300 bg-slate-100 shrink-0">
              {profile.avatarUrl ? (
                <img src={profile.avatarUrl} alt={profile.name} className="w-full h-full object-cover" />
              ) : (
                <User className="w-8 h-8 text-slate-400 m-auto mt-4" />
              )}
            </div>
            <div>
              <h1 className="text-2xl font-black text-slate-900">{profile.name}</h1>
              <p className="text-xs font-bold text-indigo-600 uppercase tracking-wider">{profile.title}</p>
              <p className="text-xs text-slate-500 mt-0.5">{profile.email} • {profile.location}</p>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Professional Summary</h2>
            <p className="text-xs leading-relaxed text-slate-600">{profile.bio}</p>
          </div>

          {/* Certifications */}
          {certifications && certifications.length > 0 && (
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Verified Certifications</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {certifications.map((certificat) => (
                  <div key={certificat.id} className="p-2 bg-slate-50 rounded-lg border border-slate-200 text-xs">
                    <span className="font-bold text-slate-900 block">{certificat.title}</span>
                    <span className="text-[11px] text-indigo-600">{certificat.issuer} ({certificat.date})</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Technical Skills</h2>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((s, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-semibold">
                  {s.name}
                </span>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Experience</h2>
            <div className="space-y-3">
              {experience.map((exp) => (
                <div key={exp.id} className="text-xs space-y-1">
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>{exp.role} — {exp.company}</span>
                    <span className="text-slate-500 font-normal">{exp.period}</span>
                  </div>
                  <p className="text-slate-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}