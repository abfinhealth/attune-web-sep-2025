
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="text-2xl font-bold text-primary mb-4 block">
              Attune
            </Link>
            <p className="text-muted-foreground">
              Helping financial institutions measure and improve member financial health.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link to="/customers" className="block text-muted-foreground hover:text-foreground transition-colors">
                Customers
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <div className="space-y-2">
              <Link
                to="/how-it-works"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                How It Works
              </Link>
              <Link to="/demo" className="block text-muted-foreground hover:text-foreground transition-colors">
                Demo
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <Link to="/demo" className="block text-muted-foreground hover:text-foreground transition-colors">
                Book Demo
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Attune Insights, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
