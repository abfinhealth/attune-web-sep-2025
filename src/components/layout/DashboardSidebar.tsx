import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Settings, 
  LogOut, 
  ChevronRight, 
  ChevronDown,
  TrendingUp,
  Store,
  MapPin,
  FileText as CustomReportingIcon,
  LineChart,
  BarChart, // Added for Impact Analysis
  Shield, // Added for User Management
  Target, // Added for Strategic Planning
  Milestone // Added for Implementation Tracking
} from 'lucide-react';

const DashboardSidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <>
      {/* Mobile overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden ${isOpen ? 'block' : 'hidden'}`}
        onClick={() => setIsOpen(false)}
      />
      
      {/* Mobile toggle */}
      <button 
        className="fixed top-4 left-4 bg-white p-2 rounded-md shadow-md z-30 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="sr-only">Open sidebar</span>
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-md z-30 transition-transform transform lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="px-6 pt-8 pb-6 border-b">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-attune-teal ml-8">Attune Platform</span>
            </Link>
          </div>
          
          {/* Rest of the sidebar content remains the same */}
          <div className="flex-1 px-4 py-6 overflow-y-auto">
            <nav className="space-y-1">
              
              <Link
                to="/dashboard"
                className={`flex items-center px-2 py-3 rounded-md ${
                  isActive('/dashboard') ? 'bg-attune-teal-light text-attune-teal font-medium' : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <LayoutDashboard className="h-5 w-5 mr-3" />
                Executive Dashboard
              </Link>
              
              <Link
                to="/dashboard/marketing"
                className={`flex items-center px-2 py-3 rounded-md ${
                  isActive('/dashboard/marketing') ? 'bg-attune-teal-light text-attune-teal font-medium' : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <TrendingUp className="h-5 w-5 mr-3" />
                Marketing
              </Link>
              
              <Link
                to="/dashboard/product"
                className={`flex items-center px-2 py-3 rounded-md ${
                  isActive('/dashboard/product') ? 'bg-attune-teal-light text-attune-teal font-medium' : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Store className="h-5 w-5 mr-3" />
                Product
              </Link>
              
              <Link
                to="/dashboard/branch"
                className={`flex items-center px-2 py-3 rounded-md ${
                  isActive('/dashboard/branch') ? 'bg-attune-teal-light text-attune-teal font-medium' : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <MapPin className="h-5 w-5 mr-3" />
                Branch/Retail
              </Link>
              
              <Link
                to="/dashboard/hr"
                className={`flex items-center px-2 py-3 rounded-md ${
                  isActive('/dashboard/hr') ? 'bg-attune-teal-light text-attune-teal font-medium' : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Users className="h-5 w-5 mr-3" />
                HR
              </Link>

              <Link
                to="/dashboard/analytics"
                className={`flex items-center px-2 py-3 rounded-md ${
                  isActive('/dashboard/analytics') ? 'bg-attune-teal-light text-attune-teal font-medium' : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <LineChart className="h-5 w-5 mr-3" />
                Analytics & Insights
              </Link>

              <Link
                to="/dashboard/impact-analysis"
                className={`flex items-center px-2 py-3 rounded-md ${
                  isActive('/dashboard/impact-analysis') ? 'bg-attune-teal-light text-attune-teal font-medium' : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <BarChart className="h-5 w-5 mr-3" />
                Impact Analysis
              </Link>
              
              <Link
                to="/dashboard/strategic-planning"
                className={`flex items-center px-2 py-3 rounded-md ${
                  isActive('/dashboard/strategic-planning') ? 'bg-attune-teal-light text-attune-teal font-medium' : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Target className="h-5 w-5 mr-3" />
                Strategic Planning
              </Link>
              
              <Link
                to="/dashboard/implementation-tracking"
                className={`flex items-center px-2 py-3 rounded-md ${
                  isActive('/dashboard/implementation-tracking') ? 'bg-attune-teal-light text-attune-teal font-medium' : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Milestone className="h-5 w-5 mr-3" />
                Implementation Tracking
              </Link>

              <Link
                to="/dashboard/custom-reporting"
                className={`flex items-center px-2 py-3 rounded-md ${
                  isActive('/dashboard/custom-reporting') ? 'bg-attune-teal-light text-attune-teal font-medium' : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <CustomReportingIcon className="h-5 w-5 mr-3" />
                Custom Reporting
              </Link>

              <Link
                to="/dashboard/user-management"
                className={`flex items-center px-2 py-3 rounded-md ${
                  isActive('/dashboard/user-management') ? 'bg-attune-teal-light text-attune-teal font-medium' : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Shield className="h-5 w-5 mr-3" />
                User Management
              </Link>

              <h3 className="px-3 pt-5 pb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Member Tools
              </h3>
              
              <Link
                to="/dashboard/member-assessment"
                className={`flex items-center px-2 py-3 rounded-md ${
                  isActive('/dashboard/member-assessment') ? 'bg-attune-teal-light text-attune-teal font-medium' : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <FileText className="h-5 w-5 mr-3" />
                Assessment Tool
              </Link>
              
              <div className="mt-auto pt-4">
                <Link
                  to="/settings"
                  className="flex items-center px-2 py-3 text-gray-600 hover:bg-gray-100 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  <Settings className="h-5 w-5 mr-3" />
                  Settings
                </Link>
                
                <button
                  className="flex items-center px-2 py-3 w-full text-left text-gray-600 hover:bg-gray-100 rounded-md"
                >
                  <LogOut className="h-5 w-5 mr-3" />
                  Logout
                </button>
              </div>
            </nav>
          </div>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;
