import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-primary-dark border-b border-border shadow-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="font-heading text-2xl font-bold text-foreground hover:text-accent-red transition-smooth"
          >
            STRUGGLER
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-foreground hover:text-accent-red transition-smooth font-medium"
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className="text-foreground hover:text-accent-red transition-smooth font-medium"
            >
              Shop
            </Link>
            <Link 
              to="/contact" 
              className="text-foreground hover:text-accent-red transition-smooth font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Cart Icon */}
          <div className="flex items-center">
            <button className="text-foreground hover:text-accent-red transition-smooth p-2">
              <ShoppingCart size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;