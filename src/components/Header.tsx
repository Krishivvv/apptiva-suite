import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Menu, User, Phone, MapPin, MessageCircle } from 'lucide-react';

interface HeaderProps {
  onBookingClick: () => void;
  onLoginClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBookingClick, onLoginClick }) => {
  const handleWhatsAppContact = () => {
    const phoneNumber = "919752401122"; // Indian number format with country code
    const message = "Hi! I'm interested in booking a service at SereneBook. Could you please help me?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <header className="bg-card shadow-soft border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <Calendar className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">SereneBook</h1>
              <p className="text-xs text-muted-foreground">Professional Services</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Contact Info & Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>Downtown Spa</span>
              </div>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={handleWhatsAppContact}
              className="hidden sm:flex text-success hover:text-success hover:bg-success/10"
              title="Contact us on WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={onLoginClick}
              className="hidden sm:flex"
            >
              <User className="h-4 w-4" />
              Login
            </Button>
            
            <Button
              variant="default"
              size="sm"
              onClick={onBookingClick}
              className="animate-glow"
            >
              Book Now
            </Button>

            {/* Mobile menu */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};