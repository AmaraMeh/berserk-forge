import { useParams } from 'react-router-dom';
import { mockProducts } from '../data/products';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = mockProducts.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Product Not Found</h1>
          <p className="text-muted-foreground">The item you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="aspect-square overflow-hidden rounded-lg shadow-dark">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <p className="text-accent-red text-sm font-medium uppercase tracking-wide mb-2">
              {product.category}
            </p>
            
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {product.name}
            </h1>
            
            <p className="text-3xl font-bold text-accent-red mb-8">
              ${product.price}
            </p>
            
            <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
              {product.description}
            </p>
            
            <Button 
              size="lg"
              className="bg-accent-red hover:bg-accent-red/90 text-foreground font-bold shadow-red transition-smooth hover:shadow-red/50 flex items-center gap-3"
            >
              <ShoppingCart size={20} />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;