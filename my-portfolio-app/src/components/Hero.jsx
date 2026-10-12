import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Calculator, 
  FileText,
  User,
  ShieldCheck
} from 'lucide-react';

export default function Hero({ profile, copyEmail, copiedEmail, scrollToSection, setShowResume, isAdmin }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentRole = profile.roles[roleIndex % profile.roles.length];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => prev + 1);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, profile.roles]);

  return (
    <section id="hero" className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-cyan-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill & Admin Indicator */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-semibold shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{profile.status}</span>
              </div>

              {isAdmin && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-800 text-xs font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                  <span>Admin Verified</span>
                </div>
              )}
            </div>

            {/* Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500">{profile.name}</span>
              </h1>
              
              {/* Typewriter */}
              <div className="h-10 mt-2 flex items-center text-xl sm:text-2xl font-bold text-slate-700">
                <span className="mr-2">I am a</span>
                <span className="text-indigo-600 underline decoration-cyan-400 underline-offset-4">{displayedText}</span>
                <span className="inline-block w-0.5 h-6 bg-indigo-600 ml-1 animate-pulse" />
              </div>
            </div>

            {/* Bio */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
              {profile.bio}
            </p>

            {/* Location & Email */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-medium text-slate-600 pt-1">
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
                <MapPin className="w-4 h-4 text-indigo-600" />
                <span>{profile.location}</span>
              </div>

              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
                <span className="truncate max-w-[200px]">{profile.email}</span>
                <button
                  onClick={copyEmail}
                  className="p-1 hover:bg-slate-100 rounded text-slate-500 hover:text-indigo-600 transition-colors"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg shadow-indigo-500/25 flex items-center gap-2 transition-all active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>Get in Touch</span>
              </button>

              <button
                onClick={() => scrollToSection('estimator')}
                className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-200 shadow-sm flex items-center gap-2 transition-all hover:border-slate-300 active:scale-95"
              >
                <Calculator className="w-4 h-4 text-indigo-600" />
                <span>Estimate Project</span>
              </button>
            </div>

            {/* Social Links (Inline Brand SVGs) */}
            <div className="flex items-center gap-3 pt-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Connect:</span>
              <div className="flex gap-2">
                {/*GitHub*/}
                <a href={profile.socials.github} target="_blank" rel="noreferrer" className="p-2 bg-white hover:bg-indigo-50 border border-slate-200 rounded-lg text-slate-600 hover:text-indigo-600 shadow-sm transition-all" title="GitHub">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
                
                {/*LinkedIn*/}
                <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="p-2 bg-white hover:bg-indigo-50 border border-slate-200 rounded-lg text-slate-600 hover:text-indigo-600 shadow-sm transition-all" title="LinkedIn">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </a>

                {/* Twitter / X */}
                <a href={profile.socials.twitter} target="_blank" rel="noreferrer" className="p-2 bg-white hover:bg-indigo-50 border border-slate-200 rounded-lg text-slate-600 hover:text-indigo-600 shadow-sm transition-all" title="Twitter">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* Profile Card & Photo Display */}
          <div className="lg:col-span-5">
            <div className="bg-white/90 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-6 shadow-xl shadow-slate-200/60 space-y-6">
              
              {/* Photo & Header */}
              <div className="flex items-center gap-4 border-b border-slate-100 pb-5">
                <div className="relative group">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-indigo-500 shadow-md bg-slate-100 flex items-center justify-center">
                    {profile.avatarUrl ? (
                      <img 
                        src={profile.avatarUrl} 
                        alt={profile.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop'; }}
                      />
                    ) : (
                      <User className="w-10 h-10 text-slate-400" />
                    )}
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 border-2 border-white rounded-full" title="Active Status" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-extrabold text-slate-900 text-lg truncate">{profile.name}</h3>
                  <p className="text-xs text-slate-500 font-medium truncate">{profile.title}</p>
                  <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md inline-block mt-1">
                    Software & Web Dev
                  </span>
                </div>

                <button
                  onClick={() => setShowResume(true)}
                  className="p-2.5 bg-slate-100 hover:bg-slate-200 rounded-xl text-slate-600 transition-colors shrink-0"
                  title="View Resume PDF"
                >
                  <FileText className="w-4 h-4" />
                </button>
              </div>

              {/* Grid of Key Stats */}
              <div className="grid grid-cols-2 gap-3">
                {profile.stats.map((stat, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/60 hover:bg-indigo-50/50 transition-colors">
                    <div className="text-xl sm:text-2xl font-black text-indigo-600">{stat.value}</div>
                    <div className="text-xs font-semibold text-slate-600 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}