import React, { useState } from 'react';
import { X, Lock, Key, ShieldAlert } from 'lucide-react';

export default function AdminLoginModal({ onClose, onLoginSuccess }) {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (passcode === 'admin123') {
      onLoginSuccess();
    } else {
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-slate-200 relative space-y-4">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-800 rounded-full bg-slate-100"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto border border-indigo-100">
            <Lock className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-extrabold text-slate-900">Admin Mode Access</h3>
          <p className="text-xs text-slate-500">
            Enter the admin passcode to unlock the live portfolio editor.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-3">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Passcode</label>
            <div className="relative">
              <Key className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="password"
                placeholder="Enter passcode"
                value={passcode}
                onChange={(e) => { setPasscode(e.target.value); setError(false); }}
                className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            {error && (
              <p className="text-[11px] text-red-600 font-semibold mt-1 flex items-center gap-1">
                <ShieldAlert className="w-3 h-3" />
                <span>Incorrect passcode. Default is "*******"</span>
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md transition-all"
          >
            Unlock Admin Customizer
          </button>
        </form>

      </div>
    </div>
  );
}