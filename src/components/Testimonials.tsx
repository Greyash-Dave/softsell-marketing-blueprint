import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    title: 'IT Manager',
    company: 'Acme Solutions',
    quote:
      'SoftSell made it incredibly easy to turn our unused licenses into cash. The process was fast, transparent, and the support team was fantastic!',
    avatar:
      'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'Rahul Mehta',
    title: 'Procurement Lead',
    company: 'NextGen Tech',
    quote:
      'We were able to recover significant value from surplus software. Highly recommend SoftSell for their professionalism and quick payments.',
    avatar:
      'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Emily Chen',
    title: 'Finance Director',
    company: 'BrightWave',
    quote:
      'The SoftSell team was knowledgeable and responsive. We turned unused assets into budget for new projects!',
    avatar:
      'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Carlos Rivera',
    title: 'Operations Head',
    company: 'InnovaTech',
    quote:
      'A seamless experience from start to finish. The valuation was fair and the payment was prompt.',
    avatar:
      'https://randomuser.me/api/portraits/men/85.jpg',
  },
  {
    name: 'Sophie Dubois',
    title: 'Procurement Manager',
    company: 'EuroSoft',
    quote:
      'I was impressed by the transparency and professionalism. Highly recommended for any business with surplus licenses.',
    avatar:
      'https://randomuser.me/api/portraits/women/12.jpg',
  },
  {
    name: 'David Kim',
    title: 'IT Lead',
    company: 'Pacific Systems',
    quote:
      'SoftSell helped us recover value from licenses we thought were a sunk cost. The process was quick and easy.',
    avatar:
      'https://randomuser.me/api/portraits/men/51.jpg',
  },
];

const cardVariants = {
  initial: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 400, damping: 30 },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.3 },
  }),
};

const quoteVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, duration: 0.5 },
  },
};

const useResponsiveCards = () => {
  // 2 cards on md+, 1 card on mobile
  const [cardsToShow, setCardsToShow] = useState(2);
  useEffect(() => {
    const update = () => setCardsToShow(window.innerWidth < 768 ? 1 : 2);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return cardsToShow;
};

const AUTO_SWIPE_INTERVAL = 5000;

const Testimonials = () => {
  const cardsToShow = useResponsiveCards();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoSwipeRef = useRef<NodeJS.Timeout | null>(null);

  // Calculate which testimonials to show
  const getVisibleTestimonials = () => {
    if (cardsToShow === 1) {
      return [testimonials[index]];
    }
    // For 2 cards, wrap around if needed
    const first = testimonials[index];
    const second = testimonials[(index + 1) % testimonials.length];
    return [first, second];
  };
  const visibleTestimonials = getVisibleTestimonials();

  // Carousel navigation
  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setIndex((prev) => {
      let next = prev + newDirection * cardsToShow;
      if (next < 0) next = testimonials.length + next;
      if (next >= testimonials.length) next = next % testimonials.length;
      return next;
    });
  };

  // Auto-swiper logic
  useEffect(() => {
    if (isHovered) {
      if (autoSwipeRef.current) clearInterval(autoSwipeRef.current);
      return;
    }
    autoSwipeRef.current = setInterval(() => {
      paginate(1);
    }, AUTO_SWIPE_INTERVAL);
    return () => {
      if (autoSwipeRef.current) clearInterval(autoSwipeRef.current);
    };
    // eslint-disable-next-line
  }, [isHovered, cardsToShow]);

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-gradient-to-b from-blue-50 via-white to-slate-100 dark:from-gray-950 dark:via-gray-900 dark:to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-6 dark:text-gray-100">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Real feedback from businesses who trusted SoftSell to maximize their software asset value.
          </p>
        </motion.div>
        <div
          className="flex items-center justify-center gap-4 max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button
            aria-label="Previous testimonial"
            onClick={() => paginate(-1)}
            className="rounded-full p-2 bg-white/80 hover:bg-primary/10 border border-gray-200 shadow transition disabled:opacity-50 dark:bg-gray-900 dark:border-gray-800 dark:text-gray-100"
            disabled={testimonials.length <= cardsToShow}
          >
            <ChevronLeft className="h-6 w-6 text-primary" />
          </button>
          <div className="relative w-full max-w-2xl min-h-[420px] flex gap-6">
            <AnimatePresence custom={direction} initial={false} mode="wait">
              {visibleTestimonials.map((testimonial, idx) => (
                <motion.div
                  key={testimonial.name}
                  custom={direction}
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="w-full min-h-[420px] flex"
                  style={{ willChange: 'transform' }}
                >
                  <Card className="relative rounded-2xl border border-gray-200 dark:border-gray-800 shadow-2xl bg-white/90 dark:bg-gray-900/90 p-0 overflow-visible w-full flex flex-col justify-center transition-all duration-300 hover:shadow-3xl hover:border-primary dark:hover:border-primary group">
                    {/* Subtle quote icon in background */}
                    <Quote className="absolute top-6 left-6 h-12 w-12 text-primary/10 dark:text-primary/20 z-0" />
                    <CardContent className="flex flex-col items-center text-center px-8 py-10 relative z-10">
                      <motion.div
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className="mb-4"
                      >
                        <Avatar className="w-20 h-20 border-4 border-primary shadow-lg ring-4 ring-white dark:ring-gray-900">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200">{testimonial.name[0]}</AvatarFallback>
                        </Avatar>
                      </motion.div>
                      <motion.blockquote
                        variants={quoteVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-lg text-gray-700 italic mb-4 dark:text-gray-100"
                      >
                        “{testimonial.quote}”
                      </motion.blockquote>
                      <div className="font-semibold text-primary dark:text-accent text-lg">{testimonial.name}</div>
                      <div className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.title}, {testimonial.company}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <button
            aria-label="Next testimonial"
            onClick={() => paginate(1)}
            className="rounded-full p-2 bg-white/80 hover:bg-primary/10 border border-gray-200 shadow transition disabled:opacity-50 dark:bg-gray-900 dark:border-gray-800 dark:text-gray-100"
            disabled={testimonials.length <= cardsToShow}
          >
            <ChevronRight className="h-6 w-6 text-primary" />
          </button>
        </div>
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: testimonials.length }).map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`w-3 h-3 rounded-full border-2 transition focus:outline-none focus:ring-2 focus:ring-primary ${i === index ? 'bg-primary border-primary' : 'bg-gray-300 dark:bg-gray-700 border-gray-300 dark:border-gray-700'}`}
              onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 