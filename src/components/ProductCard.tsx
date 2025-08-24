import { Link } from 'react-router-dom';
import { Product } from '../types';
import { Card, CardContent } from '@/components/ui/card';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.id}`} className="group">
      <Card className="bg-card border-border hover:border-accent-red transition-smooth shadow-dark hover:shadow-red/20 overflow-hidden">
        <div className="aspect-square overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-accent-red transition-smooth">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-sm mb-3 capitalize">
            {product.category}
          </p>
          <p className="font-bold text-xl text-accent-red">
            ${product.price}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;