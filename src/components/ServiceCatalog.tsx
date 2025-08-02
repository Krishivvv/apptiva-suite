import React, { useState, useMemo } from 'react';
import { ServiceCard, Service } from './ServiceCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';

// Sample service data
const SAMPLE_SERVICES: Service[] = [
  {
    id: '1',
    name: 'Deep Tissue Massage',
    description: 'Therapeutic massage targeting deep muscle layers for tension relief and improved mobility.',
    duration: 60,
    price: 120,
    category: 'Massage',
    rating: 4.9,
    image: '',
    popular: true
  },
  {
    id: '2',
    name: 'European Facial',
    description: 'Luxurious facial treatment with cleansing, exfoliation, and hydrating mask.',
    duration: 75,
    price: 95,
    category: 'Facial',
    rating: 4.8,
    image: ''
  },
  {
    id: '3',
    name: 'Hot Stone Therapy',
    description: 'Relaxing massage using heated stones to melt away stress and muscle tension.',
    duration: 90,
    price: 140,
    category: 'Massage',
    rating: 4.9,
    image: '',
    popular: true
  },
  {
    id: '4',
    name: 'Acrylic Manicure',
    description: 'Professional nail service with acrylic extensions and custom polish.',
    duration: 45,
    price: 65,
    category: 'Nails',
    rating: 4.7,
    image: ''
  },
  {
    id: '5',
    name: 'Aromatherapy Session',
    description: 'Holistic treatment combining essential oils with relaxation techniques.',
    duration: 60,
    price: 85,
    category: 'Wellness',
    rating: 4.8,
    image: ''
  },
  {
    id: '6',
    name: 'Keratin Hair Treatment',
    description: 'Professional hair smoothing treatment for silky, manageable hair.',
    duration: 120,
    price: 180,
    category: 'Hair',
    rating: 4.9,
    image: ''
  }
];

const CATEGORIES = ['All', 'Massage', 'Facial', 'Nails', 'Wellness', 'Hair'];

interface ServiceCatalogProps {
  onBookService: (service: Service) => void;
}

export const ServiceCatalog: React.FC<ServiceCatalogProps> = ({ onBookService }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const filteredServices = useMemo(() => {
    return SAMPLE_SERVICES.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <section id="services" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Premium Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of professional wellness and beauty services, 
            each designed to provide you with an exceptional experience.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full shadow-soft"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-200"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Filter Toggle */}
          <div className="flex justify-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="text-muted-foreground"
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              {showFilters ? 'Hide' : 'Show'} Advanced Filters
            </Button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-center">
          <Badge variant="outline" className="text-sm">
            {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
          </Badge>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onBook={onBookService}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <div className="text-muted-foreground mb-4">
              <Filter className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg">No services found matching your criteria.</p>
              <p className="text-sm">Try adjusting your search or filters.</p>
            </div>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};