import React from 'react';
import { Award, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Certifications({ certifications }) {
  return (
    <section id="certifications" className="py-16 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Professional Certifications
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Badge Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-2xl bg-gradient-to-tr ${cert.badgeColor || 'from-indigo-600 to-cyan-500'} flex items-center justify-center text-white shadow-md`}>
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
                    {cert.date}
                  </span>
                </div>

                {/* Title & Issuer */}
                <h3 className="font-extrabold text-slate-900 text-base group-hover:text-indigo-600 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-bold text-indigo-600 mt-1">{cert.issuer}</p>
                <p className="text-[11px] font-mono text-slate-400 mt-1">ID: {cert.credentialId}</p>

                {/* Skills tags */}
                {cert.skills && (
                  <div className="flex flex-wrap gap-1 mt-4 pt-3 border-t border-slate-100">
                    {cert.skills.map((skill, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Verify Link */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Credential</span>
                </span>
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                >
                  <span>Verify</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}