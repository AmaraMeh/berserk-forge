import { Link } from 'react-router-dom';
import { Product } from '../types';
import { Card, CardContent } from '@/components/ui/card';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.id}`} className="group block animate-fade-in hover-lift">
      <Card className="glass-effect premium-border hover:border-accent-red transition-all duration-500 overflow-hidden hover-glow relative shadow-glass hover:shadow-premium hover:glow-red">
        {/* Product image with enhanced hover effect */}
        <div className="aspect-square overflow-hidden relative">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          {/* Overlay gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Premium price tag with gradient */}
          <div className="absolute top-4 right-4 bg-gradient-premium text-foreground px-4 py-2 rounded-full font-bold text-sm transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 shadow-premium border border-accent-red/20">
            ${product.price}
          </div>
        </div>
        
        <CardContent className="p-6 relative">
          <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-accent-red transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 capitalize opacity-80 group-hover:opacity-100 transition-opacity duration-300">
            {product.category}
          </p>
          
          {/* Premium animated gradient border */}
          <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-premium group-hover:w-full transition-all duration-500 shadow-red"></div>
          
          {/* Corner accent glow */}
          <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-radial from-accent-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;