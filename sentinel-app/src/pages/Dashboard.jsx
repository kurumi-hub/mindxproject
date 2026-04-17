import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Topbar from '../components/layout/Topbar';
import QueueView from '../components/dashboard/QueueView';
import AnalysisView from '../components/dashboard/AnalysisView';
import PricingView from '../components/dashboard/PricingView';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('queue');

  return (
    <div className="flex h-screen bg-dark-bg text-white overflow-hidden font-sans">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 p-8 overflow-y-auto">
          {activeTab === 'queue' && <QueueView />}
          {activeTab === 'analysis' && <AnalysisView />}
          {activeTab === 'pricing' && <PricingView />}
        </main>
      </div>
    </div>
  );
}