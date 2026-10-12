import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
//import Estimator from './components/Estimator';
import Contact from './components/Contact';
import AdminModal from './components/AdminModal';
import AdminLoginModal from './components/AdminLoginModal';
import ResumeModal from './components/ResumeModal';
import CustomizerModal from './components/CustomizerModal';

import {
  initialProfile,
  initialCertifications,
  initialSkills,
  initialProjects,
  initialExperience
} from './data/portfolioData';

export default function App() {
  const [profile, setProfile] = useState(initialProfile);
  const [certifications, setCertifications] = useState(initialCertifications);
  const [skills, setSkills] = useState(initialSkills);
  const [projects] = useState(initialProjects);
  const [experience] = useState(initialExperience);

  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Admin Auth State
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  // Admin Inbox State
  const [showAdminInbox, setShowAdminInbox] = useState(false);
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('portfolio_messages');
    return saved ? JSON.parse(saved) : [];
  });

  // Modals state
  const [selectedProject, setSelectedProject] = useState(null);
  const [showCustomizer, setShowCustomizer] = useState(false);
  const [showResume, setShowResume] = useState(false);

  // Toast system state
  const [toastMessage, setToastMessage] = useState(null);

  // Sync Inbox Messages to localStorage
  useEffect(() => {
    localStorage.setItem('portfolio_messages', JSON.stringify(messages));
  }, [messages]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // --- Inbox / Contact Handlers ---
  const handleSendMessage = (newMessage) => {
    const formatted = {
      id: Date.now(),
      ...newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      read: false
    };
    setMessages((prev) => [formatted, ...prev]);
    showToast("Message sent to Admin Inbox!");
  };

  const toggleReadStatus = (id) => {
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, read: !m.read } : m)));
  };

  const markAllAsRead = () => {
    setMessages((prev) => prev.map((m) => ({ ...m, read: true })));
    showToast("All messages marked as read.");
  };

  const clearReadMessages = () => {
    setMessages((prev) => prev.filter((m) => !m.read));
    showToast("Read messages cleared.");
  };

  const deleteMessage = (id) => {
    setMessages((prev) => prev.filter((m) => m.id !== id));
    showToast("Message deleted.");
  };

  const exportCSV = () => {
    if (messages.length === 0) {
      showToast("No messages to export.");
      return;
    }
    const headers = ["ID", "Name", "Email", "Subject", "Message", "Timestamp", "ReadStatus"];
    const rows = messages.map((m) => [
      m.id,
      `"${m.name.replace(/"/g, '""')}"`,
      `"${m.email.replace(/"/g, '""')}"`,
      `"${(m.subject || '').replace(/"/g, '""')}"`,
      `"${m.message.replace(/"/g, '""')}"`,
      `"${m.timestamp}"`,
      m.read ? "Read" : "Unread"
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `inbox_export_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("Exported messages to CSV!");
  };

  const unreadCount = messages.filter((m) => !m.read).length;

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'skills', label: 'Tech Stack' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'certificat' },
    { id: 'experience', label: 'Career' },
    /*{ id: 'estimator', label: 'Estimator' },*/
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    showToast("Email address copied to clipboard!");
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans relative pb-16 md:pb-0">
      
      {/* Navigation */}
      <Navbar
        activeSection={activeSection}
        navLinks={navLinks}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
        setShowAdminLogin={setShowAdminLogin}
        setShowCustomizer={setShowCustomizer}
        setShowResume={setShowResume}
        setShowAdminInbox={setShowAdminInbox}
        unreadCount={unreadCount}
      />

      {/* Main Content */}
      <main>
        <Hero
          profile={profile}
          copyEmail={copyEmail}
          copiedEmail={copiedEmail}
          scrollToSection={scrollToSection}
          setShowResume={setShowResume}
          isAdmin={isAdmin}
        />

        <TechStack skills={skills} />

        <Projects projects={projects} setSelectedProject={setSelectedProject} />

        <Certifications certifications={certifications} />

        <Experience experience={experience} />

        {/*<Estimator scrollToSection={scrollToSection} />*/}

        <Contact profile={profile} onSendMessage={handleSendMessage} showToast={showToast} />
      </main>

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-slate-200 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 space-y-2">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </div>
      </footer>

      {/* Admin Floating Inbox Toggle Button (Visible when logged in as Admin) */}
      {isAdmin && (
        <button
          onClick={() => setShowAdminInbox(true)}
          className="fixed bottom-6 left-6 z-40 bg-slate-900 text-white hover:bg-slate-800 px-4 py-2.5 rounded-2xl shadow-2xl border border-slate-700 text-xs font-bold flex items-center gap-2 cursor-pointer transition-all hover:scale-105"
        >
          <span>📬 Admin Inbox</span>
          {unreadCount > 0 && (
            <span className="bg-indigo-500 text-white text-[10px] px-2 py-0.5 rounded-full font-black animate-pulse">
              {unreadCount}
            </span>
          )}
        </button>
      )}

      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-20 md:bottom-6 right-6 z-50 bg-slate-900 text-white text-xs font-semibold px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2 border border-slate-700">
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Modals */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      
      {showAdminLogin && (
        <AdminLoginModal
          onClose={() => setShowAdminLogin(false)}
          onLoginSuccess={() => {
            setIsAdmin(true);
            setShowAdminLogin(false);
            showToast("Admin mode unlocked! You can now customize profile data and view messages.");
          }}
        />
      )}

      {showResume && (
        <ResumeModal
          profile={profile}
          skills={skills}
          experience={experience}
          certifications={certifications}
          onClose={() => setShowResume(false)}
        />
      )}

      {showCustomizer && (
        <CustomizerModal
          profile={profile}
          setProfile={setProfile}
          certifications={certifications}
          setCertifications={setCertifications}
          onClose={() => setShowCustomizer(false)}
          showToast={showToast}
        />
      )}

      {/* Admin Inbox Modal */}
      {showAdminInbox && (
        <AdminModal
          messages={messages}
          unreadCount={unreadCount}
          toggleReadStatus={toggleReadStatus}
          markAllAsRead={markAllAsRead}
          clearReadMessages={clearReadMessages}
          deleteMessage={deleteMessage}
          exportCSV={exportCSV}
          onClose={() => setShowAdminInbox(false)}
          showToast={showToast}
        />
      )}

    </div>
  );
}