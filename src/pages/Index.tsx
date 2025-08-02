import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ServiceCatalog } from '@/components/ServiceCatalog';
import { BookingModal } from '@/components/BookingModal';
import { Footer } from '@/components/Footer';
import { Service } from '@/components/ServiceCard';

const Index = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleBookingClick = () => {
    setIsBookingModalOpen(true);
  };

  const handleServiceBook = (service: Service) => {
    setSelectedService(service);
    setIsBookingModalOpen(true);
  };

  const handleLoginClick = () => {
    // TODO: Implement login functionality
    alert('Login functionality will be implemented in the next version!');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onBookingClick={handleBookingClick}
        onLoginClick={handleLoginClick}
      />
      
      <main>
        <HeroSection onBookingClick={handleBookingClick} />
        <ServiceCatalog onBookService={handleServiceBook} />
      </main>

      <Footer />

      <BookingModal 
        open={isBookingModalOpen}
        onOpenChange={setIsBookingModalOpen}
        service={selectedService}
      />
    </div>
  );
};

export default Index;
