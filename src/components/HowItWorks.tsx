
import { FileUp, DollarSign, Check } from 'lucide-react';

const steps = [
  {
    icon: <FileUp className="h-10 w-10 text-primary" />,
    title: '1. Upload License Info',
    description: 'Securely submit details about your unused software licenses through our easy-to-use platform.',
  },
  {
    icon: <DollarSign className="h-10 w-10 text-primary" />,
    title: '2. Receive Instant Valuation',
    description: 'Our system provides a quick and fair market valuation for your licenses based on current demand.',
  },
  {
    icon: <Check className="h-10 w-10 text-primary" />,
    title: '3. Get Paid Quickly',
    description: 'Once you accept our offer, receive prompt payment. We handle the rest of the resale process.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            How SoftSell Works
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Selling your surplus software licenses is straightforward with our three-step process.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div 
              key={step.title} 
              className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex justify-center items-center mb-4 h-16 w-16 rounded-full bg-primary/10 mx-auto">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
