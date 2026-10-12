import React, { useState } from 'react';
import { Send, CheckCircle, Sparkles, Mail, User, MessageSquare, Tag } from 'lucide-react';

export default function Contact({ profileName = "Mathias", onSendMessage }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const QUICK_STARTERS = [
    { 
      label: "🚀 Project Hiring", 
      subject: "Contract Hiring Inquiry", 
      message: "Hi! I checked your portfolio and would like to discuss hiring you for a web development project." 
    },
    { 
      label: "💬 Quick Question", 
      subject: "General Technical Inquiry", 
      message: "Hello! I have a quick question regarding your tech stack and current project availability." 
    },
    { 
      label: "📊 Quote Request", 
      subject: "Custom Project Quote", 
      message: "Hi! I'd like to get a formal cost and timeline estimate for a new web application." 
    }
  ];

  const applyStarter = (starter) => {
    setFormData((prev) => ({
      ...prev,
      subject: starter.subject,
      message: starter.message
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    onSendMessage(formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Send a Direct Message</h2>
          <p className="text-slate-600 text-sm">Your message delivers directly into the private admin inbox.</p>
        </div>

        {/* Card Form */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50">
          
          {/* Quick Starter Templates */}
          <div className="mb-6 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>Quick Starter Templates</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {QUICK_STARTERS.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => applyStarter(item)}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-700 text-xs font-semibold border border-slate-200/80 transition-all hover:border-indigo-200 cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {submitted ? (
            <div className="text-center py-10 space-y-3">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Message Delivered!</h3>
              <p className="text-slate-600 text-xs max-w-sm mx-auto">
                Thank you for reaching out. Your submission is now available inside the Admin Inbox.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-500/20 cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    <span>Your Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                    placeholder="Nati Kebede"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span>Your Email *</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                    placeholder="Nati@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                  <Tag className="w-3.5 h-3.5 text-slate-400" />
                  <span>Subject</span>
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  placeholder="Project Proposal / Inquiry"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-xs font-bold text-slate-700 flex items-center gap-1">
                    <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                    <span>Message *</span>
                  </label>
                  <span className="text-[10px] text-slate-400">{formData.message.length} chars</span>
                </div>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all resize-none"
                  placeholder="Write your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-lg shadow-indigo-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Message to {profileName}</span>
              </button>
            </form>
          )}

        </div>
      </div>
    </section>
  );
}