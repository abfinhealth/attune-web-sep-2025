
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BarChart, 
  Users, 
  FileText, 
  Settings, 
  ChevronDown,
  ChevronUp,
  HelpCircle,
  X,
  Menu
} from 'lucide-react';

const DashboardSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({
    'financial-health': false,
    'analytics': false,
  });

  const toggleMenu = (menu: string) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  const mainNavItems = [
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: LayoutDashboard
    }
  ];

  const secondaryNavItems = [
    {
      name: 'Financial Health',
      key: 'financial-health',
      icon: Users,
      children: [
        { name: 'Member Assessment', href: '/dashboard/member-assessment' },
        { name: 'Employee Assessment', href: '/dashboard/employee-assessment' },
        { name: 'Benchmarks', href: '/dashboard/benchmarks' },
      ]
    },
    {
      name: 'Analytics & Insights',
      key: 'analytics',
      icon: BarChart,
      children: [
        { name: 'Trend Analysis', href: '/dashboard/trend-analysis' },
        { name: 'Segmentation', href: '/dashboard/segmentation' },
        { name: 'Impact Analysis', href: '/dashboard/impact-analysis' },
      ]
    },
    {
      name: 'Reports',
      href: '/dashboard/reports',
      icon: FileText,
    },
    {
      name: 'Settings',
      href: '/dashboard/settings',
      icon: Settings,
    },
    {
      name: 'Help & Resources',
      href: '/dashboard/help',
      icon: HelpCircle,
    }
  ];

  return (
    <>
      {/* Mobile sidebar toggle */}
      <div className="fixed inset-0 bg-gray-900/80 lg:hidden z-40" 
           style={{ display: isOpen ? 'block' : 'none' }} 
           onClick={() => setIsOpen(false)} />
           
      <div className="lg:hidden fixed top-0 left-0 z-40 flex items-center p-4">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 focus:outline-none">
          <Menu size={24} />
        </button>
      </div>

      {/* Sidebar for mobile */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-sidebar transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-full flex flex-col overflow-y-auto bg-white border-r border-gray-200">
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
            <div className="flex items-center">
              <img 
                src="/placeholder.svg"
                alt="Attune Logo"
                className="h-8 w-auto"
              />
              <span className="ml-2 text-xl font-semibold text-attune-teal">Attune</span>
            </div>
            <button 
              className="lg:hidden text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>
          
          <div className="flex flex-col flex-grow p-4 space-y-4">
            <div className="space-y-1">
              {mainNavItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) => `
                    flex items-center px-2 py-2 text-sm font-medium rounded-md
                    ${isActive ? 'bg-attune-teal-light text-attune-teal' : 'text-gray-700 hover:bg-gray-100'}
                  `}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </NavLink>
              ))}
            </div>
            
            <div className="border-t border-gray-200 pt-4">
              <div className="px-2 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Analytics
              </div>
              <nav className="space-y-1">
                {secondaryNavItems.map((item) => (
                  item.children ? (
                    <div key={item.name} className="space-y-1">
                      <button
                        onClick={() => toggleMenu(item.key)}
                        className={`w-full flex items-center justify-between px-2 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100`}
                      >
                        <div className="flex items-center">
                          <item.icon className="mr-3 h-5 w-5" />
                          {item.name}
                        </div>
                        {expandedMenus[item.key] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>
                      
                      {expandedMenus[item.key] && (
                        <div className="ml-8 space-y-1">
                          {item.children.map((child) => (
                            <NavLink
                              key={child.name}
                              to={child.href}
                              className={({ isActive }) => `
                                block px-2 py-2 text-sm font-medium rounded-md
                                ${isActive ? 'text-attune-teal' : 'text-gray-600 hover:text-gray-900'}
                              `}
                            >
                              {child.name}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className={({ isActive }) => `
                        flex items-center px-2 py-2 text-sm font-medium rounded-md
                        ${isActive ? 'bg-attune-teal-light text-attune-teal' : 'text-gray-700 hover:bg-gray-100'}
                      `}
                    >
                      <item.icon className="mr-3 h-5 w-5" />
                      {item.name}
                    </NavLink>
                  )
                ))}
              </nav>
            </div>
          </div>
          
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-attune-teal-light flex items-center justify-center text-attune-teal font-medium">
                  CU
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">Community First CU</p>
                <p className="text-xs text-gray-500">Admin User</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardSidebar;
