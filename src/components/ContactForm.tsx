
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
import { toast } from "@/hooks/use-toast"; // Using shadcn toast

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
      variant: "default", // 'default' typically has a greenish hue or a checkmark
    });
    setFormData({ name: '', email: '', company: '', licenseType: '', message: '' }); // Reset form
  };

  const licenseOptions = ["Microsoft", "Adobe", "Oracle", "SAP", "Other"];

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Get Your Free Valuation
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            Fill out the form below, and our team will provide you with a no-obligation valuation for your software licenses.
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-white p-8 md:p-10 rounded-lg shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="e.g. Jane Doe" className={errors.name ? 'border-destructive' : ''} />
              {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="e.g. jane.doe@example.com" className={errors.email ? 'border-destructive' : ''} />
              {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
            </div>
            <div>
              <Label htmlFor="company">Company Name</Label>
              <Input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="e.g. Acme Corp" className={errors.company ? 'border-destructive' : ''} />
              {errors.company && <p className="text-sm text-destructive mt-1">{errors.company}</p>}
            </div>
            <div>
              <Label htmlFor="licenseType">License Type</Label>
              <Select name="licenseType" value={formData.licenseType} onValueChange={handleSelectChange}>
                <SelectTrigger className={errors.licenseType ? 'border-destructive' : ''}>
                  <SelectValue placeholder="Select a license type" />
                </SelectTrigger>
                <SelectContent>
                  {licenseOptions.map(option => (
                    <SelectItem key={option} value={option}>{option}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.licenseType && <p className="text-sm text-destructive mt-1">{errors.licenseType}</p>}
            </div>
            <div>
              <Label htmlFor="message">Additional Information (Optional)</Label>
              <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us more about your licenses..." rows={4} />
            </div>
            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Get Valuation'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
