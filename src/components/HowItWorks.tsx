import { FileUp, DollarSign, Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: <FileUp className="h-12 w-12 text-primary" />,
    title: 'Upload License Info',
    description: 'Securely submit details about your unused software licenses through our easy-to-use platform.',
    color: 'from-blue-500/20 to-blue-600/20',
  },
  {
    icon: <DollarSign className="h-12 w-12 text-primary" />,
    title: 'Receive Instant Valuation',
    description: 'Our system provides a quick and fair market valuation for your licenses based on current demand.',
    color: 'from-green-500/20 to-green-600/20',
  },
  {
    icon: <Check className="h-12 w-12 text-primary" />,
    title: 'Get Paid Quickly',
    description: 'Once you accept our offer, receive prompt payment. We handle the rest of the resale process.',
    color: 'from-purple-500/20 to-purple-600/20',
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

const HowItWorks = () => {
  return (
    <section 
      id="how-it-works" 
      className="py-24 md:py-32 bg-gradient-to-b from-slate-50 via-blue-50 to-white dark:bg-gradient-to-b dark:from-gray-950 dark:via-gray-900 dark:to-black"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-6 dark:text-gray-100">
            How SoftSell Works
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Selling your surplus software licenses is straightforward with our three-step process.
            Get started in minutes and turn your unused licenses into cash.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 md:gap-12 relative"
        >
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 -translate-y-1/2" />
          
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={itemVariants}
              className="relative"
            >
              <div className="relative z-10 bg-white dark:bg-gray-900/90 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border dark:border-gray-800">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative">
                  <div className="flex justify-center items-center mb-6">
                    <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex items-center justify-center mb-4">
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white font-semibold text-sm dark:bg-primary/80 dark:text-white">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center dark:text-gray-100">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {/* Arrow connector for mobile */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center my-4">
                  <ArrowRight className="h-6 w-6 text-primary/40 rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
