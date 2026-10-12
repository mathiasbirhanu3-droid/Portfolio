import React from 'react';
import { Code2, SlidersHorizontal, FileText, Menu, X, Sparkles, Lock, ShieldCheck } from 'lucide-react';

export default function Navbar({
  activeSection,
  navLinks,
  mobileMenuOpen,
  setMobileMenuOpen,
  scrollToSection,
  isAdmin,
  setIsAdmin,
  setShowAdminLogin,
  setShowCustomizer,
  setShowResume
}) {
  return (
    <>
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all duration-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2.5 text-left group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-slate-900 tracking-tight text-lg block leading-tight">Mathias Birhanu</span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-indigo-600 block">Software Engineer</span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1 rounded-full border border-slate-200/60">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-indigo-600 shadow-sm border border-slate-200/50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2">
            
            {/* ADMIN ONLY CUSTOMIZE BUTTON */}
            {isAdmin ? (
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setShowCustomizer(true)}
                  className="px-3 py-1.5 text-xs font-bold text-white bg-amber-500 hover:bg-amber-600 rounded-lg flex items-center gap-1.5 transition-colors shadow-sm animate-pulse"
                  title="Admin Customizer Mode"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Customize</span>
                </button>

                <button
                  onClick={() => setIsAdmin(false)}
                  className="p-1.5 text-xs font-semibold text-slate-500 hover:text-red-600 bg-slate-100 hover:bg-red-50 rounded-lg border border-slate-200"
                  title="Lock Admin Mode"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowAdminLogin(true)}
                className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                title="Admin Passcode Access"
              >
                <Lock className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={() => setShowResume(true)}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg flex items-center gap-1.5 shadow-md shadow-indigo-500/20 transition-all active:scale-95"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-slate-200 px-4 py-3 space-y-1 shadow-xl">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
                  activeSection === link.id
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <span>{link.label}</span>
                {activeSection === link.id && <Sparkles className="w-4 h-4 text-indigo-600" />}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Floating Bottom Nav for Touch Devices */}
      <div className="md:hidden fixed bottom-3 left-3 right-3 z-40 bg-white/90 backdrop-blur-md rounded-2xl p-1.5 border border-slate-200/80 shadow-2xl flex justify-around items-center">
        {navLinks.slice(0, 5).map((link) => {
          const isActive = activeSection === link.id;
          return (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`flex flex-col items-center py-1.5 px-2.5 rounded-xl transition-all ${
                isActive ? 'text-indigo-600 bg-indigo-50/80 font-bold' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <span className="text-[11px] uppercase tracking-wider">{link.label}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}