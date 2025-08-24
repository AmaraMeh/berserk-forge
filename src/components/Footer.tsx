import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-dark border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
              STRUGGLER
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Premium apparel for those who embrace the darkness and emerge stronger. 
              Every piece tells a story of struggle and triumph.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-accent-red transition-smooth">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent-red transition-smooth">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent-red transition-smooth">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-accent-red transition-smooth">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent-red transition-smooth">Shop</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent-red transition-smooth">Size Guide</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent-red transition-smooth">Shipping</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-accent-red transition-smooth">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent-red transition-smooth">Returns</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent-red transition-smooth">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent-red transition-smooth">Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <p className="text-center text-muted-foreground">
            © 2024 Struggler. All rights reserved. Forged in darkness, tempered by struggle.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;