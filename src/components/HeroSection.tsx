import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Star, Users, Award } from 'lucide-react';

interface HeroSectionProps {
  onBookingClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onBookingClick }) => {
  return (
    <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Badge 
                variant="secondary" 
                className="bg-card/20 text-primary-foreground border-primary-foreground/20"
              >
                ✨ Premium Professional Services
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Book Your Perfect
                <span className="block bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">
                  Wellness Experience
                </span>
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Discover exceptional spa, beauty, and wellness services with our premium booking platform. 
                Expert professionals, seamless scheduling, and unforgettable experiences await.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-accent" />
                <span>2,500+ Happy Clients</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-accent fill-current" />
                <span>4.9 Average Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-accent" />
                <span>Award Winning Service</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="accent" 
                size="xl" 
                onClick={onBookingClick}
                className="font-semibold hover:shadow-glow"
              >
                <Calendar className="h-5 w-5" />
                Book Appointment
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                View Services
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative lg:block hidden">
            <div className="relative w-full h-96 bg-gradient-card rounded-3xl shadow-elegant animate-scale-in">
              <div className="absolute inset-6 bg-gradient-primary/10 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="bg-primary/20 rounded-full w-24 h-24 flex items-center justify-center mx-auto">
                    <Calendar className="h-12 w-12 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground">Easy Booking</h3>
                    <p className="text-muted-foreground">Schedule in seconds</p>
                  </div>
                </div>
              </div>
              
              {/* Floating cards */}
              <div className="absolute -top-4 -right-4 bg-card rounded-lg p-4 shadow-soft animate-slide-up">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                  <span className="text-sm font-medium text-foreground">Available Today</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-card rounded-lg p-4 shadow-soft animate-slide-up">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-accent fill-current" />
                  <span className="text-sm font-medium text-foreground">Premium Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};