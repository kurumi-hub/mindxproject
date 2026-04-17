import React from 'react';

const Topbar = () => (
  <div className="h-16 border-b border-dark-border flex items-center justify-between px-8 bg-dark-bg/80 backdrop-blur">
    <div className="w-96 relative">
      <span className="absolute left-3 top-2.5 text-gray-500 text-sm">🔍</span>
      <input type="text" placeholder="Search systems or telemetry..." className="w-full bg-dark-surface border border-dark-border rounded-md pl-9 pr-4 py-2 text-sm focus:outline-none focus:border-brand-cyan text-white" />
    </div>
    <div className="flex items-center gap-4 text-gray-400">
      <button className="hover:text-white">🔔</button>
      <button className="hover:text-white">🛡️</button>
      <button className="hover:text-white">❓</button>
    </div>
  </div>
);

export default Topbar;