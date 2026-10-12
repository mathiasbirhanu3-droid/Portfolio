import React, { useState } from 'react';
import { 
  ShieldCheck, 
  X, 
  Inbox, 
  CheckCircle, 
  Trash2, 
  Mail, 
  Copy, 
  Check, 
  Share2, 
  User, 
  Clock, 
  Search, 
  CheckCheck, 
  Download, 
  MessageSquare 
} from 'lucide-react';

export default function AdminModal({ 
  messages = [], 
  unreadCount = 0, 
  toggleReadStatus, 
  markAllAsRead, 
  clearReadMessages, 
  deleteMessage, 
  exportCSV, 
  onClose,
  showToast
}) {
  const [copiedKey, setCopiedKey] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterTab, setFilterTab] = useState('all');

  const copyToClipboard = async (key, text, label) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      showToast?.(`Copied ${label} to clipboard!`);
      setTimeout(() => setCopiedKey(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const filteredMessages = messages.filter((msg) => {
    const matchesSearch = 
      msg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      msg.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (msg.subject && msg.subject.toLowerCase().includes(searchQuery.toLowerCase())) ||
      msg.message.toLowerCase().includes(searchQuery.toLowerCase());

    if (filterTab === 'unread') return matchesSearch && !msg.read;
    if (filterTab === 'read') return matchesSearch && msg.read;
    return matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-3xl max-h-[85vh] overflow-hidden shadow-2xl flex flex-col">
        
        {/* Top Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 text-sm">Admin Inbox Portal</h3>
              <p className="text-[11px] text-slate-500 font-medium">Manage and reply to incoming client messages</p>
            </div>
          </div>

          <button 
            onClick={onClose} 
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-xl transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sub-Header Toolbar */}
        <div className="px-6 py-3 bg-slate-100/60 border-b border-slate-200 space-y-3">
          <div className="flex flex-col sm:flex-row gap-2 sm:items-center justify-between">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search by name, email, or content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs cursor-pointer"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* Quick Action Buttons */}
            <div className="flex items-center gap-1.5">
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="px-2.5 py-1.5 rounded-xl bg-indigo-50 text-indigo-600 hover:bg-indigo-100 text-[11px] font-bold flex items-center gap-1 transition-all cursor-pointer"
                  title="Mark all as read"
                >
                  <CheckCheck className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Mark All Read</span>
                </button>
              )}

              {messages.some((m) => m.read) && (
                <button
                  onClick={clearReadMessages}
                  className="px-2.5 py-1.5 rounded-xl bg-slate-200/80 text-slate-700 hover:bg-rose-50 hover:text-rose-600 text-[11px] font-bold flex items-center gap-1 transition-all cursor-pointer"
                  title="Clear all read messages"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Clear Read</span>
                </button>
              )}

              <button
                onClick={exportCSV}
                className="px-2.5 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 text-[11px] font-bold flex items-center gap-1 transition-all cursor-pointer shadow-2xs"
                title="Export inbox to CSV"
              >
                <Download className="w-3.5 h-3.5 text-slate-500" />
                <span>Export CSV</span>
              </button>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-1">
              {[
                { id: 'all', label: 'All', count: messages.length },
                { id: 'unread', label: 'Unread', count: unreadCount },
                { id: 'read', label: 'Read', count: messages.length - unreadCount }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilterTab(tab.id)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    filterTab === tab.id
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'text-slate-600 hover:bg-slate-200/60'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                    filterTab === tab.id ? 'bg-indigo-500 text-white' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>

            <span className="text-[11px] text-slate-400 font-medium">
              Showing {filteredMessages.length} of {messages.length}
            </span>
          </div>
        </div>

        {/* Messages List Area */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4 bg-slate-50/30">
          {filteredMessages.length === 0 ? (
            <div className="text-center py-16 text-slate-400 space-y-2">
              <MessageSquare className="w-10 h-10 mx-auto opacity-30 text-slate-500" />
              <p className="text-xs font-medium">No messages found for this filter or search.</p>
            </div>
          ) : (
            filteredMessages.map((msg) => {
              const fullPayload = `From: ${msg.name} <${msg.email}>\nSubject: ${msg.subject || 'N/A'}\nTime: ${msg.timestamp}\n\nMessage:\n${msg.message}`;

              return (
                <div
                  key={msg.id}
                  className={`p-4 rounded-2xl border transition-all shadow-sm ${
                    msg.read ? 'bg-white border-slate-200' : 'bg-indigo-50/40 border-indigo-200 ring-1 ring-indigo-200/50'
                  }`}
                >
                  {/* Sender Row */}
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-slate-900 text-sm">{msg.name}</span>
                        {!msg.read && (
                          <span className="px-2 py-0.5 rounded-md bg-indigo-600 text-white text-[9px] font-extrabold tracking-wide uppercase">
                            New
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5 flex items-center gap-2 font-medium">
                        <span className="font-mono text-slate-700">{msg.email}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-slate-400 text-[11px]">
                          <Clock className="w-3 h-3" />
                          {msg.timestamp}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
                      <button
                        onClick={() => toggleReadStatus(msg.id)}
                        className={`p-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                          msg.read ? 'text-emerald-600 hover:bg-emerald-50' : 'text-slate-400 hover:text-indigo-600 hover:bg-white'
                        }`}
                        title={msg.read ? "Mark as Unread" : "Mark as Read"}
                      >
                        <CheckCircle className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => deleteMessage(msg.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                        title="Delete Message"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Subject */}
                  {msg.subject && (
                    <div className="text-xs font-bold text-slate-800 mb-2">
                      Subject: <span className="text-indigo-600">{msg.subject}</span>
                    </div>
                  )}

                  {/* Message Content */}
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 text-xs text-slate-700 leading-relaxed font-sans">
                    {msg.message}
                  </div>

                  {/* Action Bar */}
                  <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1.5">
                      <button
                        onClick={() => copyToClipboard(`msg-${msg.id}`, msg.message, "message content")}
                        className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-[11px] font-bold text-slate-700 flex items-center gap-1.5 transition-all cursor-pointer"
                      >
                        {copiedKey === `msg-${msg.id}` ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3 text-slate-400" />}
                        <span>Copy Message</span>
                      </button>

                      <button
                        onClick={() => copyToClipboard(`email-${msg.id}`, msg.email, "email address")}
                        className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-[11px] font-bold text-slate-700 flex items-center gap-1.5 transition-all cursor-pointer"
                      >
                        {copiedKey === `email-${msg.id}` ? <Check className="w-3 h-3 text-emerald-600" /> : <User className="w-3 h-3 text-slate-400" />}
                        <span>Copy Email</span>
                      </button>

                      <button
                        onClick={() => copyToClipboard(`full-${msg.id}`, fullPayload, "full CRM log")}
                        className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-[11px] font-bold text-slate-700 flex items-center gap-1.5 transition-all cursor-pointer"
                      >
                        {copiedKey === `full-${msg.id}` ? <Check className="w-3 h-3 text-emerald-600" /> : <Share2 className="w-3 h-3 text-slate-400" />}
                        <span>Copy All (CRM)</span>
                      </button>
                    </div>

                    <a
                      href={`mailto:${msg.email}?subject=Re: ${encodeURIComponent(msg.subject || 'Portfolio Inquiry')}`}
                      className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all shadow-md shadow-indigo-500/20"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Reply</span>
                    </a>
                  </div>

                </div>
              );
            })
          )}
        </div>

      </div>
    </div>
  );
}