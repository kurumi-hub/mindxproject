// mockdata.js

export const queuedFiles = [
  { name: 'threat_vector_analysis_q3.csv', size: '42.5 MB', status: 'READY' },
  { name: 'network_traffic_dump_012.pcap', size: '891.0 MB', status: 'READY' },
  { name: 'syslog_archive_2023.log', size: '15.2 MB', status: 'READY' },
];

export const scanFeed = [
  { name: 'installer_v4.2.exe', hash: 'MD5: a81c...90fb', status: 'INFECTED', rf: '0.98', xg: '0.95', nn: '0.99', isScanning: false },
  { name: 'company_logo_hq.png', hash: 'MD5: b902...22e1', status: 'SAFE', rf: '0.01', xg: '0.03', nn: '0.00', isScanning: false },
  { name: 'kernel_patch.diff', hash: 'MD5: c412...77a4', status: 'SCANNING', rf: '--', xg: '--', nn: '--', isScanning: true },
];