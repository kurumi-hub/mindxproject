// 3. Queue View (Image 3)
import { queuedFiles } from './mockdata';
const QueueView = () => (

  
  <div className="h-full flex flex-col">
    <div className="flex justify-between items-end mb-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Intelligence Queue</h1>
        <p className="text-gray-400 text-sm">Configure heuristic models and stage datasets for deep-packet inspection.</p>
      </div>
      <div className="text-right">
        <div className="text-xs text-gray-500 mb-1">SYSTEM LOAD</div>
        <div className="text-2xl font-bold">14.2% <span className="text-sm text-status-safe">NOMINAL</span></div>
      </div>
    </div>

    <div className="flex flex-1 gap-6">
      {/* Models Column */}
      <div className="w-1/3 flex flex-col gap-4">
        <h3 className="font-semibold text-sm flex items-center gap-2"><span className="text-brand-cyan">⬡</span> Model Selection</h3>
        {['Random Forest', 'XGBoost', 'LightGBM'].map((model, i) => (
          <div key={model} className="bg-dark-surface p-4 rounded border border-dark-border flex justify-between items-center cursor-pointer hover:border-gray-600 transition">
            <div>
              <div className="font-semibold text-sm">{model}</div>
              <div className="text-[10px] text-gray-500 uppercase">{['Ensemble Learning', 'Gradient Boosting', 'High Efficiency'][i]}</div>
            </div>
            <input type="checkbox" defaultChecked={i !== 1} className="accent-brand-cyan w-4 h-4 rounded" />
          </div>
        ))}
        <p className="text-xs text-gray-500 mt-4">Selected models will execute in parallel across 16 core instances for minimum latency.</p>
      </div>

      {/* Upload & Queue Column */}
      <div className="w-2/3 flex flex-col gap-6">
        <div className="border-2 border-dashed border-dark-border rounded-xl p-12 flex flex-col items-center justify-center bg-dark-surface/50 hover:bg-dark-surface transition">
          <div className="bg-dark-bg p-3 rounded-lg mb-4 text-brand-cyan">↑</div>
          <h3 className="font-bold mb-2">Drag and drop assets</h3>
          <p className="text-xs text-gray-500 mb-6">Supported formats: .JSON, .CSV, .PCAP, .LOG (Max 2GB per file)</p>
          <button className="bg-dark-bg border border-dark-border px-6 py-2 rounded text-sm hover:text-brand-cyan transition">BROWSE FILES</button>
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-sm flex items-center gap-2">☰ Currently Queued</h3>
            <span className="bg-dark-surface text-xs px-2 py-1 rounded text-brand-cyan">3 FILES PENDING</span>
          </div>
          <div className="space-y-2">
            {queuedFiles.map(f => (
              <div key={f.name} className="bg-dark-surface p-4 rounded border border-dark-border flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="text-brand-cyan text-xl">📄</div>
                  <div>
                    <div className="text-sm font-semibold">{f.name}</div>
                    <div className="text-xs text-gray-500">{f.size} • {f.status}</div>
                  </div>
                </div>
                <button className="text-gray-500 hover:text-white">✕</button>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-end">
           <button className="bg-brand-cyan text-black font-bold px-8 py-3 rounded shadow-[0_0_15px_rgba(0,229,255,0.3)] hover:bg-brand-cyanHover transition flex items-center gap-2">
             🚀 START SCAN
           </button>
        </div>
      </div>
    </div>
  </div>
);

export default QueueView