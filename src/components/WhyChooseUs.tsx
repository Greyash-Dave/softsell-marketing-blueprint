import { Award, ShieldCheck, Users, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
  {
    icon: <Award className="h-12 w-12 text-primary" />,
    title: 'Best Market Rates',
    description: 'We ensure you get competitive prices for your licenses, maximizing your return on investment.',
    gradient: 'from-yellow-500/20 to-orange-500/20',
  },
  {
    icon: <ShieldCheck className="h-12 w-12 text-primary" />,
    title: 'Secure & Compliant',
    description: 'Our process is fully compliant with software vendor policies, ensuring a safe and legitimate transaction.',
    gradient: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    icon: <Users className="h-12 w-12 text-primary" />,
    title: 'Expert Support',
    description: 'Our team of experts is here to guide you through every step of the selling process with personalized assistance.',
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const WhyChooseUs = () => {
  return (
    <section 
      id="why-softsell" 
      className="py-24 md:py-32 bg-gradient-to-b from-white via-green-50 to-blue-50 dark:bg-gradient-to-b dark:from-gray-950 dark:via-gray-900 dark:to-black relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <Sparkles className="h-6 w-6 text-primary mr-2" />
            <span className="text-primary font-semibold">Why Choose Us</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-6 dark:text-gray-100">
            The SoftSell Advantage
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer a trusted, efficient, and profitable way to manage your surplus software assets.
            Experience the difference with our comprehensive service.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 md:gap-12"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              className="group"
            >
              <div className="relative h-full bg-white dark:bg-gray-900/90 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border dark:border-gray-800">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 flex justify-center items-center h-16 w-16 rounded-full bg-gradient-to-br from-primary/10 to-primary/20 mr-4 dark:bg-primary/10 dark:text-primary/80">
                      {benefit.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4 text-center">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed dark:text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust indicators */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary/5 text-primary font-medium">
            <ShieldCheck className="h-5 w-5 mr-2" />
            Trusted by 1000+ Businesses
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
