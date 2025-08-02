import React from 'react';
import { Calendar, MapPin, Phone, Mail, Instagram, Facebook, Twitter, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer: React.FC = () => {
  const handleWhatsAppContact = () => {
    const phoneNumber = "919752401122"; // Indian number format with country code
    const message = "Hi! I'm interested in booking a service at SereneBook. Could you please help me?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-primary p-2 rounded-lg">
                <Calendar className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">SereneBook</h3>
                <p className="text-xs text-muted-foreground">Professional Services</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your premier destination for professional wellness and beauty services. 
              Experience luxury, quality, and exceptional care.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>123 Wellness Ave, Downtown</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@serenebook.com</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleWhatsAppContact}
                className="flex items-center space-x-2 text-success hover:text-success hover:bg-success/10 p-0 h-auto font-normal justify-start"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Chat on WhatsApp</span>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#services" className="block text-muted-foreground hover:text-primary transition-colors">
                Our Services
              </a>
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <a href="#booking" className="block text-muted-foreground hover:text-primary transition-colors">
                Book Appointment
              </a>
            </div>
          </div>

          {/* Business Hours & Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Business Hours</h4>
            <div className="space-y-1 text-sm text-muted-foreground">
              <div className="flex justify-between">
                <span>Mon - Fri</span>
                <span>9AM - 8PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>9AM - 6PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>10AM - 5PM</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <h5 className="font-medium text-foreground text-sm">Follow Us</h5>
              <div className="flex space-x-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Twitter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2024 SereneBook. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};