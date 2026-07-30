import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import SidebarLayout from './components/SidebarLayout'
import Dashboard from './pages/Dashboard'
import Copilot from './pages/Copilot'
import Portal from './pages/Portal'
import EconomyData from './pages/EconomyData'
import RegulatoryHub from './pages/RegulatoryHub'
import Simulator from './pages/Simulator'
import Map from './pages/Map'
import Matchmaking from './pages/Matchmaking'
import FinanceHub from './pages/FinanceHub'
import LifeQuality from './pages/LifeQuality'
import SiteSelector from './pages/SiteSelector'
import RoadmapBuilder from './pages/RoadmapBuilder'
import SectorOpportunities from './pages/SectorOpportunities'
import Aftercare from './pages/Aftercare'
import ExecutiveBoard from './pages/ExecutiveBoard'
import DigitalTwin from './pages/DigitalTwin'
import DealRoom from './pages/DealRoom'
import ApixTrackRecord from './pages/ApixTrackRecord'
import RoiSimulator from './pages/RoiSimulator'
import Login from './pages/Login'
import { useState } from 'react'

function AppContent() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SidebarLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="executive" element={<ExecutiveBoard />} />
          <Route path="deal-room" element={<DealRoom />} />
          <Route path="digital-twin" element={<DigitalTwin />} />
          <Route path="track-record" element={<ApixTrackRecord />} />
          <Route path="roi-simulator" element={<RoiSimulator />} />
          <Route path="economy" element={<EconomyData />} />
          <Route path="opportunities" element={<SectorOpportunities />} />
          <Route path="regulatory" element={<RegulatoryHub />} />
          <Route path="map" element={<Map />} />
          <Route path="siteselector" element={<SiteSelector />} />
          
          <Route path="finance" element={<FinanceHub />} />
          <Route path="living" element={<LifeQuality />} />
          
          <Route path="roadmap" element={<RoadmapBuilder />} />
          <Route path="simulator" element={<Simulator />} />
          <Route path="copilot" element={<Copilot />} />
          <Route path="portal" element={<Portal />} />
          <Route path="matchmaking" element={<Matchmaking />} />
          <Route path="aftercare" element={<Aftercare />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
