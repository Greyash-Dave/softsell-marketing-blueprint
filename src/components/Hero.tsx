
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="bg-gradient-to-br from-primary/10 via-background to-background pt-32 pb-20 md:pt-40 md:pb-28 text-center"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2000&auto=format&fit=crop')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div> {/* Overlay increased to 60% */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white animate-fade-in-up">
          Turn Unused Software <br className="hidden sm:inline" />Licenses into <span className="text-accent">Cash</span>
        </h1>
        <p 
          className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-200 animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          The fastest way to sell your excess software licenses at competitive prices. SoftSell makes it simple, secure, and profitable.
        </p>
        <div 
          className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="#contact">
              Get a Free Valuation
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-gray-300 text-white hover:bg-white/10 hover:text-white">
            <a href="#how-it-works">
              Learn How It Works
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
