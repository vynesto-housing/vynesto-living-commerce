import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Clock, Star, MapPin, Calendar as CalendarIcon, Shirt, UtensilsCrossed, Sparkles } from 'lucide-react';
import { mockServices } from '@/lib/mockData';
import { format } from 'date-fns';

const Services = () => {
  const [selectedType, setSelectedType] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [bookingService, setBookingService] = useState<string | null>(null);

  const serviceTypes = [
    { value: 'all', label: 'All Services' },
    { value: 'laundry', label: 'Laundry', icon: Shirt },
    { value: 'food', label: 'Food Delivery', icon: UtensilsCrossed },
    { value: 'cleaning', label: 'Cleaning', icon: Sparkles },
  ];

  const filteredServices = mockServices.filter(service => {
    return !selectedType || selectedType === 'all' || service.type === selectedType;
  });

  const getServiceIcon = (type: string) => {
    switch (type) {
      case 'laundry': return Shirt;
      case 'food': return UtensilsCrossed;
      case 'cleaning': return Sparkles;
      default: return Shirt;
    }
  };

  const handleBookService = (serviceId: string) => {
    setBookingService(serviceId);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Student Services</h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Professional services delivered right to your doorstep - laundry, food, and cleaning services
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Service Type Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4">
            {serviceTypes.map((type) => {
              const Icon = type.icon || Shirt;
              return (
                <Button
                  key={type.value}
                  variant={selectedType === type.value ? 'default' : 'outline'}
                  onClick={() => setSelectedType(type.value)}
                  className="flex items-center space-x-2"
                >
                  {type.icon && <Icon className="h-4 w-4" />}
                  <span>{type.label}</span>
                </Button>
              );
            })}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const ServiceIcon = getServiceIcon(service.type);
            return (
              <Card key={service.id} className="hover-lift overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-secondary flex items-center space-x-1">
                      <ServiceIcon className="h-3 w-3" />
                      <span>{service.type}</span>
                    </Badge>
                  </div>
                  {service.vendor.badge && (
                    <Badge className="absolute top-3 right-3 bg-success">
                      {service.vendor.badge}
                    </Badge>
                  )}
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <CardTitle className="text-xl">{service.name}</CardTitle>
                      <p className="text-muted-foreground">{service.description}</p>
                      
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{service.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{service.rating}</span>
                        </div>
                      </div>

                      <div className="text-sm text-muted-foreground">
                        by {service.vendor.name}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">
                        Ksh {service.price.toLocaleString()}
                      </div>
                      <Badge variant={service.available ? 'default' : 'secondary'}>
                        {service.available ? 'Available' : 'Unavailable'}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        className="w-full"
                        disabled={!service.available}
                        onClick={() => handleBookService(service.id)}
                      >
                        Book Now
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Book {service.name}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4 p-3 bg-muted rounded-lg">
                          <ServiceIcon className="h-6 w-6 text-primary" />
                          <div>
                            <p className="font-medium">{service.name}</p>
                            <p className="text-sm text-muted-foreground">{service.duration}</p>
                          </div>
                          <div className="ml-auto text-right">
                            <p className="font-bold text-primary">Ksh {service.price.toLocaleString()}</p>
                          </div>
                        </div>

                        <div>
                          <label className="text-sm font-medium mb-2 block">Select Date & Time</label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button variant="outline" className="w-full justify-start">
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={selectedDate}
                                onSelect={setSelectedDate}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </div>

                        <div className="space-y-2">
                          <p className="text-sm font-medium">Service Provider</p>
                          <div className="flex items-center space-x-2 p-2 bg-muted rounded">
                            <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-white text-sm">
                              {service.vendor.name[0]}
                            </div>
                            <div>
                              <p className="text-sm font-medium">{service.vendor.name}</p>
                              <div className="flex items-center space-x-1">
                                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                <span className="text-xs">{service.vendor.rating}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex space-x-2">
                          <Button variant="outline" className="flex-1">
                            Contact Provider
                          </Button>
                          <Button className="flex-1">
                            Confirm Booking
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No services found for the selected category.</p>
          </div>
        )}

        {/* How It Works */}
        <div className="mt-16 bg-muted/50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto text-white font-bold">
                1
              </div>
              <h4 className="font-semibold">Choose Service</h4>
              <p className="text-sm text-muted-foreground">Select from laundry, food delivery, or cleaning services</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto text-white font-bold">
                2
              </div>
              <h4 className="font-semibold">Book & Pay</h4>
              <p className="text-sm text-muted-foreground">Schedule your service and pay securely online</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center mx-auto text-white font-bold">
                3
              </div>
              <h4 className="font-semibold">Enjoy Service</h4>
              <p className="text-sm text-muted-foreground">Relax while our verified providers handle everything</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;