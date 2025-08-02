import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Star, DollarSign } from 'lucide-react';

export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  category: string;
  rating: number;
  image: string;
  popular?: boolean;
}

interface ServiceCardProps {
  service: Service;
  onBook: (service: Service) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onBook }) => {
  return (
    <Card className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-gradient-card border-border overflow-hidden">
      <div className="relative h-48 bg-muted overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl text-primary/20">{service.name.charAt(0)}</div>
        </div>
        {service.popular && (
          <Badge 
            variant="default" 
            className="absolute top-3 right-3 bg-accent text-accent-foreground animate-pulse"
          >
            Popular
          </Badge>
        )}
      </div>
      
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {service.name}
            </CardTitle>
            <Badge variant="outline" className="mt-1 text-xs">
              {service.category}
            </Badge>
          </div>
          <div className="flex items-center space-x-1 text-accent">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm font-medium">{service.rating}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="py-3">
        <CardDescription className="text-muted-foreground leading-relaxed">
          {service.description}
        </CardDescription>
        
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
          <div className="flex items-center space-x-1 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span className="text-sm">{service.duration} min</span>
          </div>
          <div className="flex items-center space-x-1 text-primary font-semibold">
            <DollarSign className="h-4 w-4" />
            <span>{service.price}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Button 
          variant="elegant" 
          className="w-full group-hover:bg-gradient-primary group-hover:text-primary-foreground"
          onClick={() => onBook(service)}
        >
          Book Appointment
        </Button>
      </CardFooter>
    </Card>
  );
};