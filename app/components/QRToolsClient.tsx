'use client';

import { useState } from 'react';
import TabNavigation from './TabNavigation';
import QRGenerator from './QRGenerator';
import QRExtractor from './QRExtractor';

type Tab = 'generator' | 'extractor';

export default function QRToolsClient() {
  const [activeTab, setActiveTab] = useState<Tab>('generator');

  return (
    <>
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === 'generator' && <QRGenerator />}
      {activeTab === 'extractor' && <QRExtractor />}
    </>
  );
}
