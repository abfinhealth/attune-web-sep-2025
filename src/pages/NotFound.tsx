
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-attune-gray py-16">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-6xl font-bold text-attune-purple-dark mb-4">404</h1>
          <p className="text-xl text-gray-700 mb-8">Oops! The page you're looking for doesn't exist.</p>
          <Link to="/" className="btn-primary inline-flex">
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
