import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, MapPin, CreditCard, Check } from 'lucide-react';
import { Service } from './ServiceCard';

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  service: Service | null;
}

const STAFF_MEMBERS = [
  { id: '1', name: 'Sarah Johnson', specialties: ['Massage', 'Wellness'], rating: 4.9, available: true },
  { id: '2', name: 'Emily Chen', specialties: ['Facial', 'Nails'], rating: 4.8, available: true },
  { id: '3', name: 'Michael Davis', specialties: ['Hair', 'Massage'], rating: 4.9, available: false },
];

const TIME_SLOTS = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
];

export const BookingModal: React.FC<BookingModalProps> = ({ open, onOpenChange, service }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedStaff, setSelectedStaff] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleBooking = () => {
    // Here you would handle the actual booking logic
    alert('Booking confirmed! You will receive a confirmation email shortly.');
    onOpenChange(false);
    setCurrentStep(1);
    setSelectedStaff(null);
    setSelectedDate(null);
    setSelectedTime(null);
  };

  if (!service) return null;

  const availableStaff = STAFF_MEMBERS.filter(staff => 
    staff.available && staff.specialties.includes(service.category)
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            Book Your Appointment
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Complete your booking in just a few simple steps
          </DialogDescription>
        </DialogHeader>

        {/* Progress Indicator */}
        <div className="flex items-center justify-between mb-6">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                  step <= currentStep
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {step < currentStep ? (
                  <Check className="h-4 w-4" />
                ) : (
                  step
                )}
              </div>
              {step < 4 && (
                <div
                  className={`w-16 h-1 mx-2 transition-colors ${
                    step < currentStep ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Service Summary */}
        <Card className="mb-6 bg-gradient-card border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">{service.name}</CardTitle>
            <CardDescription className="flex items-center space-x-4 text-sm">
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {service.duration} min
              </span>
              <span className="flex items-center">
                <CreditCard className="h-4 w-4 mr-1" />
                ${service.price}
              </span>
              <Badge variant="outline">{service.category}</Badge>
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Step Content */}
        <div className="space-y-6">
          {/* Step 1: Select Staff */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Select Your Provider</h3>
              <div className="grid gap-3">
                {availableStaff.map((staff) => (
                  <Card
                    key={staff.id}
                    className={`cursor-pointer transition-all hover:shadow-soft ${
                      selectedStaff === staff.id
                        ? 'ring-2 ring-primary bg-primary/5'
                        : 'hover:bg-muted/50'
                    }`}
                    onClick={() => setSelectedStaff(staff.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                            <User className="h-5 w-5 text-primary-foreground" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{staff.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {staff.specialties.join(', ')}
                            </p>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          ⭐ {staff.rating}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Select Date */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Choose Date</h3>
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 14 }, (_, i) => {
                  const date = new Date();
                  date.setDate(date.getDate() + i);
                  const dateStr = date.toISOString().split('T')[0];
                  const isSelected = selectedDate === dateStr;
                  
                  return (
                    <Button
                      key={i}
                      variant={isSelected ? "default" : "outline"}
                      size="sm"
                      className="h-16 flex flex-col p-2"
                      onClick={() => setSelectedDate(dateStr)}
                    >
                      <span className="text-xs">{date.toLocaleDateString('en', { weekday: 'short' })}</span>
                      <span className="text-sm font-medium">{date.getDate()}</span>
                    </Button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 3: Select Time */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Select Time</h3>
              <div className="grid grid-cols-3 gap-3">
                {TIME_SLOTS.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    onClick={() => setSelectedTime(time)}
                    className="h-12"
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">Confirm Your Booking</h3>
              <Card className="bg-gradient-card">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">
                        {selectedDate && new Date(selectedDate).toLocaleDateString('en', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                      <p className="text-sm text-muted-foreground">at {selectedTime}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <User className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">
                        {availableStaff.find(s => s.id === selectedStaff)?.name}
                      </p>
                      <p className="text-sm text-muted-foreground">Your service provider</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">SereneBook Spa</p>
                      <p className="text-sm text-muted-foreground">123 Wellness Ave, Downtown</p>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">Total</span>
                      <span className="text-xl font-bold text-primary">${service.price}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6 border-t border-border">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 1}
          >
            Back
          </Button>
          
          {currentStep < 4 ? (
            <Button
              onClick={handleNext}
              disabled={
                (currentStep === 1 && !selectedStaff) ||
                (currentStep === 2 && !selectedDate) ||
                (currentStep === 3 && !selectedTime)
              }
            >
              Next
            </Button>
          ) : (
            <Button
              variant="success"
              onClick={handleBooking}
              className="font-semibold"
            >
              Confirm Booking
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};