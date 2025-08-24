import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-primary-dark/95 backdrop-blur-md border-b border-border shadow-dark sticky top-0 z-50 animate-slide-in-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with enhanced animation */}
          <Link 
            to="/" 
            className="font-heading text-3xl font-bold text-foreground hover:text-accent-red transition-all duration-500 hover:scale-105 group"
          >
            <span className="inline-block group-hover:animate-pulse">STRUGGLER</span>
          </Link>

          {/* Navigation Links with stagger animation */}
          <div className="hidden md:flex items-center space-x-12">
            <Link 
              to="/" 
              className="text-foreground hover:text-accent-red transition-all duration-300 font-medium text-lg relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-red transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/shop" 
              className="text-foreground hover:text-accent-red transition-all duration-300 font-medium text-lg relative group"
            >
              Shop
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-red transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/contact" 
              className="text-foreground hover:text-accent-red transition-all duration-300 font-medium text-lg relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-red transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Cart Icon with enhanced hover */}
          <div className="flex items-center">
            <button className="text-foreground hover:text-accent-red transition-all duration-300 p-3 hover:scale-110 hover:rotate-12 group">
              <ShoppingCart size={28} className="group-hover:animate-pulse" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;