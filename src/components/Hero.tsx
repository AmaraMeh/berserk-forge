import { Button } from '@/components/ui/button';
import backgroundImage from '../assets/background.jpg';

const Hero = () => {
  return (
    <section 
      className="min-h-screen relative flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-8 tracking-wider">
          Embrace the Struggle
        </h1>
        
        <p className="text-lg sm:text-xl text-light-gray mb-12 max-w-2xl mx-auto leading-relaxed">
          Forge your destiny with premium apparel inspired by the darkest tales of struggle and triumph.
        </p>
        
        <Button 
          variant="destructive"
          size="lg"
          className="bg-accent-red hover:bg-accent-red/90 text-foreground font-bold px-12 py-4 text-lg tracking-wide shadow-red transition-smooth hover:shadow-red/50"
          onClick={() => window.location.href = '/shop'}
        >
          SHOP THE COLLECTION
        </Button>
      </div>
    </section>
  );
};

export default Hero;