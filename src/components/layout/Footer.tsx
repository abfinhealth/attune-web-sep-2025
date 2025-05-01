
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-attune-gray-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Attune</h3>
            <p className="text-gray-300 mb-4">
              We help credit unions transform through financial health. Our integrated approach connects mission to margin, revolutionizing how you operate, measure success, and compete in the market.
            </p>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/strategic-framework" className="text-gray-300 hover:text-attune-teal transition-colors">Strategic Framework</Link></li>
              <li><Link to="/implementation-partnership" className="text-gray-300 hover:text-attune-teal transition-colors">Implementation Partnership</Link></li>
              <li><Link to="/measurement-platform" className="text-gray-300 hover:text-attune-teal transition-colors">Measurement Platform</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-attune-teal transition-colors">Service Packages</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-300 hover:text-attune-teal transition-colors">Blog</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-attune-teal transition-colors">Case Studies</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-attune-teal transition-colors">Research</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-attune-teal transition-colors">Resources</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-attune-teal transition-colors">About Us</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-attune-teal transition-colors">Our Team</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-attune-teal transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-attune-teal transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Attune Insights, Inc. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="#" className="text-gray-400 hover:text-attune-teal transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-gray-400 hover:text-attune-teal transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
