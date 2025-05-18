import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/theme/useTheme';

const navItems = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why SoftSell', href: '#why-softsell' },
  { label: 'Get Valuation', href: '#contact' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      setPastHero(window.scrollY >= window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-blue-950/0 dark:bg-gray-950/80' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-24 md:h-28">
          <motion.a 
            href="#" 
            className={`text-3xl md:text-4xl font-extrabold bg-clip-text bg-gradient-to-r from-primary to-accent tracking-tight flex items-center
            ${pastHero ? 'text-blue-400 dark:text-white' : 'text-white'}`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            style={{ letterSpacing: '-0.03em' }}
          >
            SoftSell
          </motion.a>

          {/* <nav className="hidden md:flex items-center space-x-10 lg:space-x-14">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-lg font-medium text-gray-600 hover:text-primary transition-colors relative group px-2 py-1"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </nav> */}

          <div className="hidden md:flex items-center ml-8 gap-4">
            <button
              onClick={toggleTheme}
              aria-label="Toggle light/dark mode"
              className="rounded-full p-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-gray-700" />}
            </button>
            <Button 
              asChild 
              size="lg"
              className={`hover:from-primary/90 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 px-7 py-3 text-lg font-bold rounded-full ${pastHero ? 'text-white border border-blue-400 bg-blue-400' : 'text-blue-400 border border-white bg-white'}`}
            >
              <a href="#contact" className="flex items-center">
                Get a Free Valuation
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          <motion.div 
            className="md:hidden flex items-center"
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={toggleTheme}
              aria-label="Toggle light/dark mode"
              className="rounded-full p-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition mr-2"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-gray-700" />}
            </button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-primary hover:bg-primary/10"
            >
              {mobileMenuOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-24 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg overflow-hidden"
          >
            <motion.nav 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col space-y-1 p-4"
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * (index + 1) }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-2"
              >
                <Button 
                  asChild 
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg px-6 py-3 text-lg font-semibold rounded-full"
                >
                  <a 
                    href="#contact" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center"
                  >
                    Get a Free Valuation
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
