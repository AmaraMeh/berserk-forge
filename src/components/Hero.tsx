import { Button } from '@/components/ui/button';
const backgroundImage = '/lovable-uploads/f091b40f-8431-4d72-a567-5212d96f5db4.png';

const Hero = () => {
  return (
    <section 
      className="min-h-screen relative flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Animated dark overlay */}
      <div className="absolute inset-0 bg-black/75 animate-fade-in"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent-red/30 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent-red/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-accent-red/40 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Content with staggered animations */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h1 className="font-heading text-5xl sm:text-6xl lg:text-8xl font-bold text-foreground mb-8 tracking-wider animate-fade-in-up leading-tight">
          Embrace the 
          <span className="block text-accent-red animate-glow">Struggle</span>
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl text-light-gray mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Forge your destiny with premium apparel inspired by the darkest tales of struggle and triumph.
        </p>
        
        <Button 
          variant="destructive"
          size="lg"
          className="bg-accent-red hover:bg-accent-red/90 text-foreground font-bold px-16 py-6 text-xl tracking-wide shadow-red transition-all duration-500 hover:scale-105 animate-pulse-glow hover-lift group"
          onClick={() => window.location.href = '/shop'}
          style={{ animationDelay: '0.6s' }}
        >
          <span className="group-hover:tracking-widest transition-all duration-300">
            SHOP THE COLLECTION
          </span>
        </Button>
      </div>
    </section>
  );
};

export default Hero;