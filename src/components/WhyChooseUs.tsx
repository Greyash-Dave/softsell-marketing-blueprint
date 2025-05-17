
import { Award, ShieldCheck, Users } from 'lucide-react'; // Using ShieldCheck instead of Handshake for 'Secure'

const benefits = [
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: 'Best Market Rates',
    description: 'We ensure you get competitive prices for your licenses, maximizing your return.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Secure & Compliant',
    description: 'Our process is fully compliant with software vendor policies, ensuring a safe transaction.',
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Expert Support',
    description: 'Our team of experts is here to guide you through every step of the selling process.',
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-softsell" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Why Choose SoftSell?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a trusted, efficient, and profitable way to manage your surplus software assets.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title} 
              className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 flex justify-center items-center h-12 w-12 rounded-full bg-primary/10 mr-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{benefit.title}</h3>
              </div>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
