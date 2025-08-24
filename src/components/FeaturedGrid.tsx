import { mockProducts } from '../data/products';
import ProductCard from './ProductCard';

const FeaturedGrid = () => {
  const featuredProducts = mockProducts.slice(0, 4);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-red rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent-red rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-wide">
            Featured <span className="text-accent-red">Items</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            Discover our most coveted pieces, forged in darkness and refined through struggle.
          </p>
          <div className="w-24 h-1 bg-accent-red mx-auto mt-8 animate-scale-in"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <div key={product.id} style={{ animationDelay: `${index * 0.2}s` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGrid;