import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import { AuthProvider, useAuth } from './context/AuthContext'
import RequireRole from './components/RequireRole'
import AntiScrapeGuard from './components/AntiScrapeGuard'
import SidebarLayout from './components/SidebarLayout'
import Login from './pages/Login'

// Lazy load all pages to reduce initial bundle
const Dashboard = React.lazy(() => import('./pages/Dashboard'))
const Copilot = React.lazy(() => import('./pages/Copilot'))
const Portal = React.lazy(() => import('./pages/Portal'))
const EconomyData = React.lazy(() => import('./pages/EconomyData'))
const RegulatoryHub = React.lazy(() => import('./pages/RegulatoryHub'))
const Simulator = React.lazy(() => import('./pages/Simulator'))
const Map = React.lazy(() => import('./pages/Map'))
const Matchmaking = React.lazy(() => import('./pages/Matchmaking'))
const FinanceHub = React.lazy(() => import('./pages/FinanceHub'))
const LifeQuality = React.lazy(() => import('./pages/LifeQuality'))
const SiteSelector = React.lazy(() => import('./pages/SiteSelector'))
const RoadmapBuilder = React.lazy(() => import('./pages/RoadmapBuilder'))
const SectorOpportunities = React.lazy(() => import('./pages/SectorOpportunities'))
const Aftercare = React.lazy(() => import('./pages/Aftercare'))
const ExecutiveBoard = React.lazy(() => import('./pages/ExecutiveBoard'))
const DigitalTwin = React.lazy(() => import('./pages/DigitalTwin'))
const DealRoom = React.lazy(() => import('./pages/DealRoom'))
const ApixTrackRecord = React.lazy(() => import('./pages/ApixTrackRecord'))
const RoiSimulator = React.lazy(() => import('./pages/RoiSimulator'))
const Interoperability = React.lazy(() => import('./pages/Interoperability'))
const OpenData = React.lazy(() => import('./pages/OpenData'))
const Newsletter = React.lazy(() => import('./pages/Newsletter'))

const LoadingFallback = () => <div style={{ padding: '2rem', textAlign: 'center' }}>Chargement...</div>

function AppContent() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <>
        <AntiScrapeGuard />
        <Login />
      </>
    );
  }

  return (
    <BrowserRouter>
      <AntiScrapeGuard />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<SidebarLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="executive" element={<RequireRole roles={['agent']}><ExecutiveBoard /></RequireRole>} />
            <Route path="deal-room" element={<RequireRole roles={['agent']}><DealRoom /></RequireRole>} />
            <Route path="digital-twin" element={<DigitalTwin />} />
            <Route path="interoperability" element={<Interoperability />} />
            <Route path="open-data" element={<OpenData />} />
            <Route path="newsletter" element={<Newsletter />} />
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
      </Suspense>
    </BrowserRouter>
  );
}

function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </AuthProvider>
  )
}

export default App
