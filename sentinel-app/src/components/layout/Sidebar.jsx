import React from 'react';

const Sidebar = ({ activeTab, setActiveTab }) => (
  <div className="w-64 bg-dark-surface border-r border-dark-border flex flex-col">
    <div className="p-6 border-b border-dark-border flex items-center gap-3">
      <div className="bg-brand-cyan text-black w-8 h-8 rounded flex items-center justify-center font-bold text-xl shadow-[0_0_10px_rgba(0,229,255,0.4)]">S</div>
      <div>
        <div className="font-bold tracking-wider text-sm leading-tight text-brand-cyan">SENTINEL</div>
        <div className="text-[9px] text-gray-500 uppercase tracking-widest">Threat Intelligence</div>
      </div>
    </div>
    <nav className="flex-1 py-6 px-3 space-y-1">
      <button onClick={() => setActiveTab('queue')} className={`w-full flex items-center px-4 py-3 text-sm rounded-md transition ${activeTab === 'queue' ? 'bg-dark-bg text-brand-cyan border border-dark-border' : 'text-gray-400 hover:text-white hover:bg-dark-bg/50'}`}>⊞ Dashboard</button>
      <button className="w-full flex items-center px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-dark-bg/50 rounded-md transition">📁 My Files</button>
      <button onClick={() => setActiveTab('analysis')} className={`w-full flex items-center px-4 py-3 text-sm rounded-md transition ${activeTab === 'analysis' ? 'bg-dark-bg text-brand-cyan border border-dark-border' : 'text-gray-400 hover:text-white hover:bg-dark-bg/50'}`}>📈 Analysis</button>
      <button className="w-full flex items-center px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-dark-bg/50 rounded-md transition">⬡ Models</button>
      <button onClick={() => setActiveTab('pricing')} className={`w-full flex items-center px-4 py-3 text-sm rounded-md transition ${activeTab === 'pricing' ? 'bg-dark-bg text-brand-cyan border border-dark-border' : 'text-gray-400 hover:text-white hover:bg-dark-bg/50'}`}>💳 Pricing</button>
      <button className="w-full flex items-center px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-dark-bg/50 rounded-md transition">⚙️ Settings</button>
    </nav>
    <div className="p-4">
      <button onClick={() => setActiveTab('queue')} className="w-full bg-brand-cyan text-black font-bold py-3 rounded-md text-sm hover:bg-brand-cyanHover shadow-[0_0_15px_rgba(0,229,255,0.2)]">NEW ANALYSIS</button>
    </div>
    <div className="p-4 border-t border-dark-border flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-gray-700"></div>
      <div>
        <div className="text-sm font-semibold">Admin_Root</div>
        <div className="text-[10px] text-gray-500">Level 4 Access</div>
      </div>
    </div>
  </div>
);

export default Sidebar;