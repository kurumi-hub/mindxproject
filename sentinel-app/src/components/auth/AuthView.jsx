import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthView = ({ setView }) => {
  const [activeTab, setActiveTab] = useState('login'); // 'login' or 'register'
  

  return (
    <div className="flex h-screen bg-dark-bg text-white relative overflow-hidden">
      {/* Left Side */}
      <div className="w-1/2 p-16 flex flex-col justify-center relative z-10">
        <div className="mb-4 text-brand-cyan font-bold tracking-widest text-sm">SENTINEL <span className="text-gray-500">| THREAT INTELLIGENCE</span></div>
        <h1 className="text-6xl font-bold mb-2">Sovereign</h1>
        <h1 className="text-6xl font-bold text-brand-cyan mb-6">Intelligence.</h1>
        <p className="text-gray-400 text-lg mb-12 max-w-md leading-relaxed">
          Access the most advanced security ecosystem powered by neural-link detection and real-time threat mitigation.
        </p>
        <div className="flex gap-6">
          <div className="bg-dark-surface p-4 rounded-lg border border-dark-border w-48">
            <div className="text-gray-400 text-xs mb-2 flex justify-between"><span>🛡️</span> <span className="text-blue-400">STATUS</span></div>
            <div className="text-2xl font-bold">99.9%</div>
            <div className="text-xs text-gray-500 mt-1">Global Uptime & Protection</div>
          </div>
          <div className="bg-dark-surface p-4 rounded-lg border border-dark-border w-48">
            <div className="text-gray-400 text-xs mb-2 flex justify-between"><span className="text-status-safe">●</span> <span className="text-status-safe">ACTIVE ML</span></div>
            <div className="text-2xl font-bold">2.4ms</div>
            <div className="text-xs text-gray-500 mt-1">Threat Detection Latency</div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-1/2 flex items-center justify-center relative z-10">
        <div className="bg-dark-surface p-10 rounded-xl border border-dark-border w-[450px]">
          <div className="flex bg-dark-bg rounded-md p-1 mb-8">
            <button 
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-2 text-sm font-semibold rounded transition ${activeTab === 'login' ? 'bg-dark-surface shadow text-white' : 'text-gray-400 hover:text-white'}`}>
              SIGN IN
            </button>
            <button 
              onClick={() => setActiveTab('register')}
              className={`flex-1 py-2 text-sm font-semibold rounded transition ${activeTab === 'register' ? 'bg-dark-surface shadow text-white' : 'text-gray-400 hover:text-white'}`}>
              REGISTER
            </button>
          </div>
          
          <h2 className="text-2xl font-semibold mb-2">Authentication</h2>
          <p className="text-gray-400 text-sm mb-6">Enter your credentials to access the command center.</p>
          
          {activeTab === 'login' 
          ? <LoginForm setView={setView} /> 
          : <RegisterForm setActiveTab={setActiveTab} />
}

        </div>
      </div>
      
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 15% 50%, rgba(0, 229, 255, 0.4), transparent 50%)' }}></div>
    </div>
  );
};

export default AuthView;