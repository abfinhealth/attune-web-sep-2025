
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import Approach from "./pages/Approach";
import Insights from "./pages/Insights";
import ForCreditUnions from "./pages/ForCreditUnions";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import MemberAssessment from "./pages/MemberAssessment";
import MarketingDashboard from "./pages/MarketingDashboard";
import ProductDashboard from "./pages/ProductDashboard";
import BranchDashboard from "./pages/BranchDashboard";
import HRDashboard from "./pages/HRDashboard";
import CustomReporting from "./pages/CustomReporting";
import AnalyticsDashboard from "./pages/AnalyticsDashboard";
import ImpactAnalysis from "./pages/ImpactAnalysis";
import UserManagement from "./pages/UserManagement";
import StrategicPlanning from "./pages/StrategicPlanning";
import ImplementationTracking from "./pages/ImplementationTracking";
import StrategicFramework from "./pages/StrategicFramework";
import ImplementationPartnership from "./pages/ImplementationPartnership";
import MeasurementPlatform from "./pages/MeasurementPlatform";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/credit-unions" element={<ForCreditUnions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/strategic-framework" element={<StrategicFramework />} />
          <Route path="/implementation-partnership" element={<ImplementationPartnership />} />
          <Route path="/measurement-platform" element={<MeasurementPlatform />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/member-assessment" element={<MemberAssessment />} />
          <Route path="/dashboard/marketing" element={<MarketingDashboard />} />
          <Route path="/dashboard/product" element={<ProductDashboard />} />
          <Route path="/dashboard/branch" element={<BranchDashboard />} />
          <Route path="/dashboard/hr" element={<HRDashboard />} />
          <Route path="/dashboard/custom-reporting" element={<CustomReporting />} />
          <Route path="/dashboard/analytics" element={<AnalyticsDashboard />} />
          <Route path="/dashboard/impact-analysis" element={<ImpactAnalysis />} />
          <Route path="/dashboard/user-management" element={<UserManagement />} />
          <Route path="/dashboard/strategic-planning" element={<StrategicPlanning />} />
          <Route path="/dashboard/implementation-tracking" element={<ImplementationTracking />} />
          <Route path="/settings" element={<Settings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
