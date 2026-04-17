// 2. Pricing View (Image 2)
const PricingView = () => (
  <div className="max-w-5xl mx-auto">
    <div className="flex justify-between items-end mb-10">
      <div>
        <div className="text-xs text-gray-400 tracking-widest mb-2">SYSTEM CAPACITY UPDATE</div>
        <h1 className="text-4xl font-bold">Elevate Your</h1>
        <h1 className="text-4xl font-bold text-brand-cyan">Detection Logic.</h1>
        <p className="text-gray-400 mt-4 max-w-lg text-sm">Scale your security operations with our next-generation neural detection models. Select a tactical tier to unlock prioritized processing.</p>
      </div>
      <div className="text-right">
        <h2 className="text-6xl font-black text-dark-border opacity-50">SNTL-</h2>
        <h2 className="text-6xl font-black text-dark-border opacity-50 -mt-4">v2</h2>
        <div className="text-xs text-gray-500 mt-2">CURRENT PROTOCOL: FREE_ACCESS_TIER</div>
      </div>
    </div>

    <div className="grid grid-cols-3 gap-6 mb-8">
      {/* Basic Card */}
      <div className="bg-dark-surface border border-dark-border rounded-xl p-8 flex flex-col">
        <h3 className="text-lg font-semibold mb-1">Basic</h3>
        <p className="text-xs text-gray-400 mb-6">Individual research & scanning.</p>
        <div className="text-4xl font-bold mb-8">$0 <span className="text-sm font-normal text-gray-500">/ month</span></div>
        <ul className="space-y-4 mb-8 flex-1 text-sm">
          <li className="flex items-center text-gray-300"><span className="text-brand-cyan mr-2">✓</span> Standard ML Models</li>
          <li className="flex items-center text-gray-300"><span className="text-brand-cyan mr-2">✓</span> 5 Concurrent Scans</li>
          <li className="flex items-center text-gray-600">✕ Priority Processing</li>
          <li className="flex items-center text-gray-600">✕ API Access</li>
        </ul>
        <button className="w-full py-2 bg-dark-bg border border-dark-border rounded text-sm text-gray-300">CURRENT PLAN</button>
      </div>
      {/* Pro Card */}
      <div className="bg-dark-surface border border-brand-cyan rounded-xl p-8 flex flex-col relative shadow-[0_0_30px_rgba(0,229,255,0.05)]">
        <span className="absolute top-0 right-4 -translate-y-1/2 bg-brand-cyan text-black text-[10px] font-bold px-2 py-1 rounded-full">RECOMMENDED</span>
        <h3 className="text-lg font-semibold mb-1 text-brand-cyan">Professional</h3>
        <p className="text-xs text-gray-400 mb-6">Full tactical suite for growing teams.</p>
        <div className="text-4xl font-bold mb-8">$149 <span className="text-sm font-normal text-gray-500">/ month</span></div>
        <ul className="space-y-4 mb-8 flex-1 text-sm">
          <li className="flex items-center text-gray-200"><span className="text-brand-cyan mr-2">✓</span> All ML Models</li>
          <li className="flex items-center text-gray-200"><span className="text-brand-cyan mr-2">✓</span> 50 Concurrent Scans</li>
          <li className="flex items-center text-gray-200"><span className="text-brand-cyan mr-2">✓</span> Priority Processing</li>
          <li className="flex items-center text-gray-200"><span className="text-brand-cyan mr-2">✓</span> Standard API Access</li>
        </ul>
        <button className="w-full py-2 bg-brand-cyan text-black font-bold rounded text-sm shadow-[0_0_15px_rgba(0,229,255,0.3)]">UPGRADE TO PRO</button>
      </div>
      {/* Enterprise Card */}
      <div className="bg-dark-surface border border-dark-border rounded-xl p-8 flex flex-col">
        <h3 className="text-lg font-semibold mb-1">Enterprise</h3>
        <p className="text-xs text-gray-400 mb-6">Custom infrastructure and dedicated nodes.</p>
        <div className="text-4xl font-bold mb-8">Contact <span className="text-sm font-normal text-gray-500">for quote</span></div>
        <ul className="space-y-4 mb-8 flex-1 text-sm">
          <li className="flex items-center text-gray-300"><span className="text-brand-cyan mr-2">✓</span> Custom Model Training</li>
          <li className="flex items-center text-gray-300"><span className="text-brand-cyan mr-2">✓</span> Unlimited Concurrent Scans</li>
          <li className="flex items-center text-gray-300"><span className="text-brand-cyan mr-2">✓</span> Real-time Priority (L1)</li>
          <li className="flex items-center text-gray-300"><span className="text-brand-cyan mr-2">✓</span> Dedicated Security Engineer</li>
        </ul>
        <button className="w-full py-2 bg-dark-bg border border-dark-border rounded text-sm text-brand-cyan hover:bg-dark-border">UPGRADE TO ENTERPRISE</button>
      </div>
    </div>
  </div>
);

export default PricingView