import React from 'react';
{/*import { X, ExternalLink, Github, CheckCircle2 } from 'lucide-react';*/}
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { MapPin, Mail, Award, Lock } from 'lucide-react'; // regular UI icons

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8 relative space-y-6">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
            {project.category}
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900 mt-2">{project.title}</h2>
        </div>

        {/* Overview Image */}
        <div className="h-56 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>

        {/* Architecture Details */}
        {project.architecture && (
          <div className="space-y-4">
            <h3 className="font-bold text-slate-900 text-base border-b border-slate-100 pb-2">
              System Architecture & Metrics
            </h3>
            
            <p className="text-slate-600 text-sm leading-relaxed">
              {project.architecture.overview}
            </p>

            <div>
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Key Highlights:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.architecture.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200/60">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Footer Links */}
        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex gap-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md shadow-indigo-500/20"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Visit Live Demo</span>
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-slate-500 hover:text-slate-900 text-xs font-bold"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}

function motion({}){
  let a=8;
  let b = 78;

  return 
}
