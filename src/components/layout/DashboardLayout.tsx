
import { ReactNode } from 'react';
import DashboardSidebar from './DashboardSidebar';
import DashboardHeader from './DashboardHeader';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <DashboardSidebar />
      <div className="lg:pl-64 flex flex-col flex-1 h-screen overflow-hidden">
        <DashboardHeader />
        <main className="p-4 sm:p-6 md:p-8 overflow-y-auto flex-1">
          <div className="max-w-7xl mx-auto pb-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
