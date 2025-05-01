
import { useState } from 'react';
import { Bell, Search, HelpCircle } from 'lucide-react';

const DashboardHeader = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex justify-between items-center px-4 py-3 sm:px-6 lg:px-8">
        <h1 className="text-xl font-semibold text-gray-900">Attune Platform</h1>
        
        <div className="flex items-center space-x-4">
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
          <button className="p-1 rounded-full text-gray-600 hover:text-gray-900 focus:outline-none">
            <HelpCircle className="h-6 w-6" />
          </button>
          
          {/* Notifications */}
          <button className="p-1 rounded-full text-gray-600 hover:text-gray-900 focus:outline-none relative">
            <Bell className="h-6 w-6" />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-attune-orange transform translate-x-1/2 -translate-y-1/2"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
