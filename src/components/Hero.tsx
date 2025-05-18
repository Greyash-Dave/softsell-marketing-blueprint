import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-background dark:bg-gradient-to-br dark:from-[#0a0a23] dark:via-[#181824] dark:to-black"
    >
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2000&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'scale(1.1)', // Slightly larger to prevent edges on scroll
        }}
      />
      
      {/* Gradient overlay (light and dark) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/50 to-background/80 dark:from-[#0a0a23]/90 dark:via-[#181824]/80 dark:to-black/80" />
      
      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white dark:text-gray-100 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Turn Unused Software{' '}
            <span className="block mt-2">Licenses into</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
              Cash
            </span>
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-200 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The fastest way to sell your excess software licenses at competitive prices. 
            SoftSell makes it simple, secure, and profitable.
          </motion.p>
          
          <motion.div 
            className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              asChild 
              className="bg-primary/90 hover:bg-primary/80 text-white dark:bg-primary/90 dark:text-white dark:hover:bg-primary/80 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <a href="#contact">
                Get a Free Valuation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="border-2 border-white/20 text-black hover:bg-white/10 px-8 py-6 text-lg rounded-full backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1 dark:border-primary/60 dark:text-primary dark:hover:bg-primary/10"
            >
              <a href="#how-it-works">
                Learn How It Works
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <ChevronDown className="h-8 w-8 text-white/60" />
      </motion.div>
    </section>
  );
};

export default Hero;
