// 4. Analysis View (Image 4)
import { scanFeed } from './mockdata';

const AnalysisView = () => (
  <div className="h-full flex flex-col">
    <div className="flex justify-between items-end mb-6">
      <div>
        <div className="text-xs text-gray-500 uppercase mb-1">Intelligence / Model Benchmarking</div>
        <h1 className="text-3xl font-bold">Threat Analysis <span className="text-brand-cyan">Output</span></h1>
      </div>
      <div className="flex gap-8 text-right">
        <div>
           <div className="text-xs text-gray-500">GLOBAL CONFIDENCE</div>
           <div className="text-2xl font-bold text-status-safe">99.98%</div>
        </div>
        <div>
           <div className="text-xs text-gray-500">MODELS ONLINE</div>
           <div className="text-2xl font-bold text-brand-cyan">06/06</div>
        </div>
      </div>
    </div>

    <div className="flex gap-6 flex-1 h-[calc(100%-80px)]">
      {/* Table Area */}
      <div className="flex-1 flex flex-col gap-6">
        <div className="bg-dark-surface border border-dark-border rounded-xl flex-1 overflow-hidden flex flex-col">
          <div className="px-6 py-4 border-b border-dark-border text-xs font-semibold text-gray-400 tracking-wider">LIVE SCAN FEED</div>
          <div className="p-6 flex-1 overflow-auto">
             <table className="w-full text-left text-sm">
                <thead>
                  <tr className="text-xs text-gray-500 border-b border-dark-border">
                    <th className="pb-4 font-medium">FILE ENTITY</th>
                    <th className="pb-4 font-medium">STATUS</th>
                    <th className="pb-4 font-medium">RANDOM FOREST</th>
                    <th className="pb-4 font-medium">XGBOOST</th>
                    <th className="pb-4 font-medium">NEURAL NET</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-dark-border">
                  {scanFeed.map(row => (
                    <tr key={row.name}>
                      <td className="py-4 flex items-center gap-3">
                         <span className={row.status === 'INFECTED' ? 'text-status-danger' : row.status === 'SAFE' ? 'text-status-safe' : 'text-gray-400'}>📄</span>
                         <div>
                           <div className="font-semibold text-gray-200">{row.name}</div>
                           <div className="text-[10px] text-gray-500">{row.hash}</div>
                         </div>
                      </td>
                      <td className="py-4">
                         <span className={`text-[10px] font-bold px-2 py-1 rounded ${row.status === 'INFECTED' ? 'bg-status-danger/20 text-status-danger' : row.status === 'SAFE' ? 'bg-status-safe/20 text-status-safe' : 'bg-gray-800 text-gray-400'}`}>
                           {row.status}
                         </span>
                      </td>
                      <td className={`py-4 ${row.status === 'INFECTED' ? 'text-status-danger' : row.status === 'SAFE' ? 'text-status-safe' : 'text-gray-500'}`}>{row.rf}</td>
                      <td className={`py-4 ${row.status === 'INFECTED' ? 'text-status-danger' : row.status === 'SAFE' ? 'text-status-safe' : 'text-gray-500'}`}>{row.xg}</td>
                      <td className={`py-4 ${row.status === 'INFECTED' ? 'text-status-danger' : row.status === 'SAFE' ? 'text-status-safe' : 'text-gray-500'}`}>{row.nn}</td>
                    </tr>
                  ))}
                </tbody>
             </table>
          </div>
        </div>
        
        {/* Stat Cards Bottom */}
        <div className="flex gap-6 h-28">
           <div className="flex-1 bg-dark-surface border border-dark-border rounded-xl p-6 flex justify-between items-center">
              <div>
                 <div className="text-xs text-gray-500 mb-1">TOTAL SCANNED</div>
                 <div className="text-3xl font-bold">14,204</div>
              </div>
              <div className="bg-dark-bg p-3 rounded text-brand-cyan">📊</div>
           </div>
           <div className="flex-1 bg-dark-surface border border-dark-border rounded-xl p-6 flex justify-between items-center">
              <div>
                 <div className="text-xs text-gray-500 mb-1">THREATS BLOCKED</div>
                 <div className="text-3xl font-bold text-status-danger">382</div>
              </div>
              <div className="bg-status-danger/20 p-3 rounded text-status-danger">🛡️</div>
           </div>
        </div>
      </div>

      {/* Inspector Panel */}
      <div className="w-[320px] flex flex-col gap-6">
        <div className="bg-dark-surface border border-dark-border rounded-xl p-6 flex-1">
          <div className="text-xs text-gray-500 mb-4 uppercase">Selected File Analysis</div>
          
          <div className="flex gap-4 items-center mb-8 bg-dark-bg p-3 rounded border border-status-danger/30">
            <div className="bg-status-danger/20 p-2 rounded text-status-danger">🕷️</div>
            <div>
               <div className="font-bold text-sm">installer_v4.2.exe</div>
               <div className="text-xs text-status-danger">Critical Malware Signature</div>
            </div>
          </div>

          <div className="mb-8">
             <div className="flex justify-between text-xs mb-2">
                <span className="text-gray-400">DETECTION CONFIDENCE</span>
                <span className="text-status-danger font-bold">98.4%</span>
             </div>
             <div className="w-full bg-dark-bg h-1.5 rounded-full overflow-hidden">
                <div className="bg-status-danger h-full w-[98.4%]"></div>
             </div>
          </div>

          <div className="mb-8">
             <div className="text-xs text-gray-500 mb-4 uppercase">Feature Importance Hierarchy</div>
             <div className="space-y-3">
                {[
                  { label: 'IAT_IMPORT', val: '0.85', w: '85%' },
                  { label: 'ENTROPY_L4', val: '0.72', w: '72%' },
                  { label: 'STR_OBFUSC', val: '0.64', w: '64%' },
                  { label: 'SECTION_RWX', val: '0.41', w: '41%' }
                ].map(f => (
                  <div key={f.label} className="flex items-center text-xs">
                     <span className="w-24 text-gray-400">{f.label}</span>
                     <div className="flex-1 bg-dark-bg h-1.5 rounded-full mx-3 overflow-hidden">
                        <div className="bg-brand-cyan h-full" style={{width: f.w}}></div>
                     </div>
                     <span className="text-gray-300 w-8 text-right">{f.val}</span>
                  </div>
                ))}
             </div>
          </div>

          <button className="w-full bg-status-danger text-white font-bold py-3 rounded mb-3 shadow-[0_0_15px_rgba(255,77,77,0.2)]">QUARANTINE ENTITY</button>
          <button className="w-full bg-dark-bg border border-dark-border text-gray-300 font-semibold py-3 rounded hover:bg-gray-800">EXPORT DETAILED REPORT</button>
        </div>

        <div className="bg-dark-surface border border-dark-border rounded-xl p-5">
           <div className="text-brand-cyan text-xs font-bold mb-2 flex items-center gap-2">⚡ SYSTEM INSIGHT</div>
           <p className="text-xs text-gray-400 leading-relaxed">
             Random Forest and Neural Net models show high alignment (Δ {'<'} 0.01) on this sample, indicating a known attack pattern from <span className="text-brand-cyan">APT-29</span> toolsets.
           </p>
        </div>
      </div>
    </div>
  </div>
);

export default AnalysisView