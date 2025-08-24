import { mockProducts } from '../data/products';
import ProductCard from './ProductCard';

const FeaturedGrid = () => {
  const featuredProducts = mockProducts.slice(0, 4);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Items
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our most coveted pieces, forged in darkness and refined through struggle.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGrid;