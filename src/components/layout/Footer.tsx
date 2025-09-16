import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import vynestoLogo from '@/assets/vynesto-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src={vynestoLogo} alt="VYNESTO" className="h-8 w-auto" />
              <span className="text-xl font-bold gradient-text">VYNESTO</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Connecting students with quality housing, services, and opportunities across Kenya.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>0707241736</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>hello@vynesto.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Find Housing
              </Link>
              <Link to="/shop" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Marketplace
              </Link>
              <Link to="/services" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/rewards" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Rewards Program
              </Link>
              <Link to="/blog" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <Link to="/faqs" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                FAQs
              </Link>
              <Link to="/support" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Support
              </Link>
            </div>
          </div>

          {/* Student Support */}
          <div className="space-y-4">
            <h3 className="font-semibold">Student Support</h3>
            <div className="space-y-2">
              <Link to="/student-assistance" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Student Assistance
              </Link>
              <Link to="/scholarship-request" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Scholarship Request
              </Link>
              <Link to="/rent-support" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Rent Support
              </Link>
            </div>

            <div className="pt-2">
              <h4 className="font-medium text-sm mb-2">Legal</h4>
              <div className="space-y-1">
                <Link to="/privacy-policy" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms-of-service" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>

          {/* Partner With Us */}
          <div className="space-y-4">
            <h3 className="font-semibold">Partner With Us</h3>
            <div className="space-y-3">
              <div className="space-y-2">
                <p className="text-sm font-medium">For Property Owners</p>
                <Link to="/list-property">
                  <Button variant="outline" size="sm" className="w-full">
                    List Your Property
                  </Button>
                </Link>
                <Link to="/landlord-support" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Landlord Support
                </Link>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium">For Service Providers</p>
                <Link to="/become-vendor">
                  <Button variant="outline" size="sm" className="w-full">
                    Become a Vendor
                  </Button>
                </Link>
                <Link to="/vendor-microloans" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Vendor Microloans
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} VYNESTO. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>Made with ❤️ for Kenyan students</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;