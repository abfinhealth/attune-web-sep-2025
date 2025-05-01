
import { useState } from 'react';
import { Bell, Search, HelpCircle, Menu } from 'lucide-react';

const DashboardHeader = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <header className="sticky top-0 z-10 bg-white shadow-sm border-b border-gray-200">
      <div className="h-16 flex items-center px-4 sm:px-6 lg:px-8">
        {/* Left side: Menu button and title */}
        <div className="flex items-center gap-2">
          <button 
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
          <h1 className="text-xl font-semibold text-gray-900">Attune Platform</h1>
        </div>
        
        {/* Spacer to push right side content */}
        <div className="flex-grow"></div>
        
        {/* Right side: Search and icons */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative max-w-xs">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-attune-teal focus:border-attune-teal sm:text-sm"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {/* Help */}
          <button className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none">
            <HelpCircle size={20} />
          </button>
          
          {/* Notifications */}
          <button className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none relative">
            <Bell size={20} />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-attune-orange"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
