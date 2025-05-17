
import { Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-2xl font-bold text-white mb-2">SoftSell</p>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="hover:text-primary transition-colors flex items-center" aria-label="Twitter">
            <Twitter className="h-5 w-5 mr-1" /> 
            <span>Twitter</span>
          </a>
          <a href="#" className="hover:text-primary transition-colors flex items-center" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 mr-1" />
            <span>LinkedIn</span>
          </a>
          <a href="#" className="hover:text-primary transition-colors flex items-center" aria-label="Facebook">
            <Facebook className="h-5 w-5 mr-1" />
            <span>Facebook</span>
          </a>
        </div>
        <div className="space-x-4 mb-4">
          <a href="#" className="hover:text-primary transition-colors text-sm">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors text-sm">Terms of Service</a>
          <a href="mailto:contact@softsell.com" className="hover:text-primary transition-colors text-sm">contact@softsell.com</a>
        </div>
        <p className="text-sm">&copy; {currentYear} SoftSell. All rights reserved.</p>
        <p className="text-xs mt-2">Built with Lovable.dev</p>
      </div>
    </footer>
  );
};

export default Footer;
