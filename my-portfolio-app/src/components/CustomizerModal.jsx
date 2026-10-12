import React, { useState } from 'react';
import { X, Save, Plus, Trash2, Award, User } from 'lucide-react';

export default function CustomizerModal({ profile, setProfile, certifications, setCertifications, onClose, showToast }) {
  const [activeTab, setActiveTab] = useState('profile');

  const [formData, setFormData] = useState({
    name: profile.name,
    title: profile.title,
    location: profile.location,
    email: profile.email,
    avatarUrl: profile.avatarUrl,
    bio: profile.bio
  });

  const [certList, setCertList] = useState([...certifications]);

  const handleSaveProfile = () => {
    setProfile(prev => ({ ...prev, ...formData }));
    setCertifications(certList);
    showToast("Portfolio changes saved live!");
    onClose();
  };

  const addCertification = () => {
    const newCert = {
      id: Date.now(),
      title: "New Professional Certificate",
      issuer: "Certification Authority",
      date: "Issued 2024",
      credentialId: "CERT-" + Math.floor(100000 + Math.random() * 900000),
      verifyUrl: "https://example.com/verify",
      badgeColor: "from-indigo-600 to-cyan-500",
      skills: ["React", "Cloud"]
    };
    setCertList([...certList, newCert]);
  };

  const removeCert = (id) => {
    setCertList(certList.filter(c => c.id !== id));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8 relative space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <h2 className="text-lg font-extrabold text-slate-900">Admin Portfolio Editor</h2>
            <p className="text-xs text-slate-500">Edit photo, bio, & certifications live</p>
          </div>
          <button onClick={onClose} className="p-1 rounded-full text-slate-400 hover:text-slate-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Customizer Tabs */}
        <div className="flex border-b border-slate-200 gap-4">
          <button
            onClick={() => setActiveTab('profile')}
            className={`pb-2 text-xs font-bold flex items-center gap-1.5 border-b-2 transition-colors ${
              activeTab === 'profile' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Profile & Photo</span>
          </button>
          <button
            onClick={() => setActiveTab('certs')}
            className={`pb-2 text-xs font-bold flex items-center gap-1.5 border-b-2 transition-colors ${
              activeTab === 'certs' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Certifications ({certList.length})</span>
          </button>
        </div>

        {/* Tab 1: Profile & Photo */}
        {activeTab === 'profile' && (
          <div className="space-y-4 text-xs font-semibold text-slate-700">
            
            {/* Photo Input Preview */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border border-slate-300 bg-white shrink-0">
                <img src={formData.avatarUrl} alt="Preview" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <label className="block mb-1 text-slate-800">Profile Photo Image URL</label>
                <input
                  type="text"
                  value={formData.avatarUrl}
                  onChange={(e) => setFormData({ ...formData, avatarUrl: e.target.value })}
                  className="w-full p-2 rounded-xl border border-slate-200 bg-white font-mono text-[11px]"
                  placeholder="https://..."
                />
              </div>
            </div>

            <div>
              <label className="block mb-1">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50"
              />
            </div>

            <div>
              <label className="block mb-1">Job Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50"
              />
            </div>

            <div>
              <label className="block mb-1">Email</label>
              <input
                type="text"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50"
              />
            </div>

            <div>
              <label className="block mb-1">Bio Summary</label>
              <textarea
                rows={3}
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50"
              />
            </div>
          </div>
        )}

        {/* Tab 2: Certifications Manager */}
        {activeTab === 'certs' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-slate-700">Add / Edit Certifications</span>
              <button
                onClick={addCertification}
                className="px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-xl text-xs font-bold flex items-center gap-1 hover:bg-indigo-100"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Certification</span>
              </button>
            </div>

            <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
              {certList.map((cert) => (
                <div key={cert.id} className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs space-y-2">
                  <div className="flex justify-between items-center">
                    <input
                      type="text"
                      value={cert.title}
                      onChange={(e) => {
                        const updated = certList.map(c => c.id === cert.id ? { ...c, title: e.target.value } : c);
                        setCertList(updated);
                      }}
                      className="font-bold text-slate-900 bg-white border border-slate-200 px-2 py-1 rounded-lg w-3/4"
                    />
                    <button onClick={() => removeCert(cert.id)} className="text-red-500 hover:text-red-700 p-1">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Issuer"
                      value={cert.issuer}
                      onChange={(e) => {
                        const updated = certList.map(c => c.id === cert.id ? { ...c, issuer: e.target.value } : c);
                        setCertList(updated);
                      }}
                      className="p-1.5 bg-white border border-slate-200 rounded-lg text-[11px]"
                    />
                    <input
                      type="text"
                      placeholder="Date"
                      value={cert.date}
                      onChange={(e) => {
                        const updated = certList.map(c => c.id === cert.id ? { ...c, date: e.target.value } : c);
                        setCertList(updated);
                      }}
                      className="p-1.5 bg-white border border-slate-200 rounded-lg text-[11px]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer Save */}
        <div className="pt-4 border-t border-slate-100 flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 text-slate-500 font-bold text-xs">
            Cancel
          </button>
          <button
            onClick={handleSaveProfile}
            className="px-4 py-2 bg-indigo-600 text-white font-bold text-xs rounded-xl shadow-md flex items-center gap-1.5"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Save Portfolio</span>
          </button>
        </div>

      </div>
    </div>
  );
}