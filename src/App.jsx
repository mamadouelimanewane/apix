import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import { AuthProvider, useAuth } from './context/AuthContext'
import RequireRole from './components/RequireRole'
import AntiScrapeGuard from './components/AntiScrapeGuard'
import SidebarLayout from './components/SidebarLayout'
import Login from './pages/Login'
import AdminLayout from './pages/admin/AdminLayout'

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
const GuichetUnique = React.lazy(() => import('./pages/GuichetUnique'))
const LogisticsTracking = React.lazy(() => import('./pages/LogisticsTracking'))
const BusinessPlanGenerator = React.lazy(() => import('./pages/BusinessPlanGenerator'))
const VirtualTours = React.lazy(() => import('./pages/VirtualTours'))
const FundingFinder = React.lazy(() => import('./pages/FundingFinder'))
const EsgTracker = React.lazy(() => import('./pages/EsgTracker'))
const InvestorEvents = React.lazy(() => import('./pages/InvestorEvents'))
const CulturalGuide = React.lazy(() => import('./pages/CulturalGuide'))
const JobBoard = React.lazy(() => import('./pages/JobBoard'))
const WarRoom = React.lazy(() => import('./pages/WarRoom'))
const AIAvatar = React.lazy(() => import('./pages/AIAvatar'))
const SmartContracts = React.lazy(() => import('./pages/SmartContracts'))
const SatelliteMap = React.lazy(() => import('./pages/SatelliteMap'))
const BrownfieldMarket = React.lazy(() => import('./pages/BrownfieldMarket'))
const LegalLibrary = React.lazy(() => import('./pages/LegalLibrary'))
const TaxIncentives = React.lazy(() => import('./pages/TaxIncentives'))
const ComplianceChecker = React.lazy(() => import('./pages/ComplianceChecker'))
const LegalAvatar = React.lazy(() => import('./pages/LegalAvatar'))
const MacroReports = React.lazy(() => import('./pages/MacroReports'))
const FactorCosts = React.lazy(() => import('./pages/FactorCosts'))

// Wow features
const ZesExplorer = React.lazy(() => import('./pages/ZesExplorer'))
const PitchDeckGenerator = React.lazy(() => import('./pages/PitchDeckGenerator'))
const CarbonSimulator = React.lazy(() => import('./pages/CarbonSimulator'))
const LiveTransparency = React.lazy(() => import('./pages/LiveTransparency'))

// Admin pages
const AdminDashboard = React.lazy(() => import('./pages/admin/AdminDashboard'))
const AdminCRM = React.lazy(() => import('./pages/admin/AdminCRM'))
const AdminGuichet = React.lazy(() => import('./pages/admin/AdminGuichet'))
const AdminZes = React.lazy(() => import('./pages/admin/AdminZes'))
const AdminContent = React.lazy(() => import('./pages/admin/AdminContent'))
const AdminLiveData = React.lazy(() => import('./pages/admin/AdminLiveData'))

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

            <Route path="macro-reports" element={<MacroReports />} />
            <Route path="factor-costs" element={<FactorCosts />} />

            <Route path="guichet-unique" element={<GuichetUnique />} />
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
            
            <Route path="guichet-unique" element={<GuichetUnique />} />
            <Route path="tracking" element={<LogisticsTracking />} />
            <Route path="business-plan" element={<BusinessPlanGenerator />} />
            <Route path="virtual-tours" element={<VirtualTours />} />
            <Route path="funding" element={<FundingFinder />} />
            <Route path="esg-tracker" element={<EsgTracker />} />
            <Route path="events" element={<InvestorEvents />} />
            <Route path="culture" element={<CulturalGuide />} />
            <Route path="jobs" element={<JobBoard />} />

            <Route path="war-room" element={<WarRoom />} />
            <Route path="ai-avatar" element={<AIAvatar />} />
            <Route path="smart-contracts" element={<SmartContracts />} />
            <Route path="satellite" element={<SatelliteMap />} />
            <Route path="brownfield" element={<BrownfieldMarket />} />

            <Route path="legal-library" element={<LegalLibrary />} />
            <Route path="tax-incentives" element={<TaxIncentives />} />
            <Route path="compliance" element={<ComplianceChecker />} />
            <Route path="legal-avatar" element={<LegalAvatar />} />
            
            {/* Wow Features */}
            <Route path="zes-explorer" element={<ZesExplorer />} />
            <Route path="pitch-deck" element={<PitchDeckGenerator />} />
            <Route path="carbon-simulator" element={<CarbonSimulator />} />
            <Route path="live-data" element={<LiveTransparency />} />
          </Route>

          {/* BACKOFFICE ROUTES */}
          <Route path="/admin" element={<RequireRole roles={['agent']}><AdminLayout /></RequireRole>}>
            <Route index element={<AdminDashboard />} />
            <Route path="crm" element={<AdminCRM />} />
            <Route path="guichet" element={<AdminGuichet />} />
            <Route path="zes" element={<AdminZes />} />
            <Route path="content" element={<AdminContent />} />
            <Route path="live-data" element={<AdminLiveData />} />
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
