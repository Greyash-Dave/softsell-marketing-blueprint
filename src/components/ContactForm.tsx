import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  licenseType: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, licenseType: value }));
     if (errors.licenseType) {
      setErrors((prev) => ({ ...prev, licenseType: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.company.trim()) newErrors.company = 'Company is required.';
    if (!formData.licenseType) newErrors.licenseType = 'License type is required.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);

    console.log('Form data submitted:', formData);
    toast({
      title: "Valuation Request Sent!",
      description: "Thank you! We've received your information and will be in touch shortly.",
      variant: "default",
    });
    setFormData({ name: '', email: '', company: '', licenseType: '', message: '' }); // Reset form
  };

  const licenseOptions = ["Microsoft", "Adobe", "Oracle", "SAP", "Other"];

  return (
    <section 
      id="contact" 
      className="py-24 md:py-32 bg-gradient-to-b from-slate-100 via-white to-blue-50 dark:bg-gradient-to-b dark:from-gray-950 dark:via-gray-900 dark:to-black relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-6 dark:text-gray-100">
            Get Your Free Valuation
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Fill out the form below, and our team will provide you with a no-obligation valuation for your software licenses.
            Start your journey to maximizing your software asset value today.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 dark:bg-gray-900/90 dark:border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">Full Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="e.g. Jane Doe" 
                    className={`h-12 rounded-lg ${errors.name ? 'border-destructive' : 'border-gray-200 dark:border-gray-700'} focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
                  />
                  {errors.name && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-destructive mt-1"
                    >
                      {errors.name}
                    </motion.p>
                  )}
        </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700">Email Address</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="e.g. jane.doe@example.com" 
                    className={`h-12 rounded-lg ${errors.email ? 'border-destructive' : 'border-gray-200'} focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200`}
                  />
                  {errors.email && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-destructive mt-1"
                    >
                      {errors.email}
                    </motion.p>
                  )}
            </div>
            </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-gray-700">Company Name</Label>
                  <Input 
                    id="company" 
                    name="company" 
                    value={formData.company} 
                    onChange={handleChange} 
                    placeholder="e.g. Acme Corp" 
                    className={`h-12 rounded-lg ${errors.company ? 'border-destructive' : 'border-gray-200'} focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200`}
                  />
                  {errors.company && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-destructive mt-1"
                    >
                      {errors.company}
                    </motion.p>
                  )}
            </div>
                <div className="space-y-2">
                  <Label htmlFor="licenseType" className="text-gray-700">License Type</Label>
                  <Select 
                    name="licenseType" 
                    value={formData.licenseType} 
                    onValueChange={handleSelectChange}
                  >
                    <SelectTrigger 
                      className={`h-12 rounded-lg ${errors.licenseType ? 'border-destructive' : 'border-gray-200'} focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200`}
                    >
                  <SelectValue placeholder="Select a license type" />
                </SelectTrigger>
                <SelectContent>
                  {licenseOptions.map(option => (
                    <SelectItem key={option} value={option}>{option}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
                  {errors.licenseType && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-destructive mt-1"
                    >
                      {errors.licenseType}
                    </motion.p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-700">Additional Information (Optional)</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Tell us more about your licenses..." 
                  rows={4}
                  className="rounded-lg border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 rounded-lg bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-primary/80 dark:text-white"
                size="lg" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    Get Valuation
                    <Send className="ml-2 h-5 w-5" />
                  </span>
                )}
              </Button>
            </form>
          </div>

          {/* Trust badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500"
          >
            <div className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
              <span>Secure & Confidential</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
              <span>No Obligation</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
              <span>Quick Response</span>
        </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
