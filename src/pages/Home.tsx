import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, MapPin, Star, Wifi, Shield, Car, Home as HomeIcon, ShoppingBag, Wrench, Gift, Users, TrendingUp, Award } from 'lucide-react';
import { mockProperties, mockUniversities } from '@/lib/mockData';
import mockSingleRoom from '@/assets/mock-single-room.jpg';
import mockBedsitter from '@/assets/mock-bedsitter.jpg';
import mockOneBedroom from '@/assets/mock-one-bedroom.jpg';

const HomePage = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [selectedUniversity, setSelectedUniversity] = useState('');
  const [propertyType, setPropertyType] = useState('');

  const propertyImages = {
    single: mockSingleRoom,
    bedsitter: mockBedsitter,
    'one-bedroom': mockOneBedroom,
  };

  const featuredProperties = mockProperties.slice(0, 3);
  const stats = [
    { label: 'Properties Listed', value: '2,500+', icon: HomeIcon },
    { label: 'Happy Students', value: '15,000+', icon: Users },
    { label: 'Partner Universities', value: '25+', icon: Award },
    { label: 'Success Rate', value: '98%', icon: TrendingUp },
  ];

  const features = [
    {
      icon: HomeIcon,
      title: 'Quality Housing',
      description: 'Verified properties near your university with all essential amenities.',
    },
    {
      icon: ShoppingBag,
      title: 'Campus Marketplace',
      description: 'Buy everything you need from groceries to electronics at student prices.',
    },
    {
      icon: Wrench,
      title: 'Essential Services',
      description: 'Laundry, food delivery, and cleaning services at your doorstep.',
    },
    {
      icon: Gift,
      title: 'Rewards Program',
      description: 'Earn points on every transaction and unlock scholarships and bursaries.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section min-h-[600px] flex items-center justify-center text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Your Student Life,
                <span className="block gradient-text bg-gradient-to-r from-white to-gray-200">Simplified</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                Find verified housing, shop essentials, access services, and earn rewards - all in one platform designed for Kenyan students.
              </p>
            </div>

            {/* Search Bar */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 glass">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Location</label>
                  <Input
                    placeholder="Enter area or university"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">University</label>
                  <Select value={selectedUniversity} onValueChange={setSelectedUniversity}>
                    <SelectTrigger className="bg-white/20 border-white/30 text-white">
                      <SelectValue placeholder="Select university" />
                    </SelectTrigger>
                    <SelectContent>
                      {mockUniversities.map((uni) => (
                        <SelectItem key={uni.id} value={uni.name}>
                          {uni.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Property Type</label>
                  <Select value={propertyType} onValueChange={setPropertyType}>
                    <SelectTrigger className="bg-white/20 border-white/30 text-white">
                      <SelectValue placeholder="Room type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single">Single Room</SelectItem>
                      <SelectItem value="bedsitter">Bedsitter</SelectItem>
                      <SelectItem value="one-bedroom">One Bedroom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">&nbsp;</label>
                  <Button size="lg" className="w-full bg-primary hover:bg-primary-hover">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/shop">
                <Button variant="secondary" size="lg" className="space-x-2">
                  <ShoppingBag className="h-5 w-5" />
                  <span>Shop Now</span>
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="space-x-2 bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <Wrench className="h-5 w-5" />
                  <span>Book Services</span>
                </Button>
              </Link>
              <Link to="/rewards">
                <Button variant="outline" size="lg" className="space-x-2 bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <Gift className="h-5 w-5" />
                  <span>View Rewards</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="flex justify-center mb-2">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Properties</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover verified, student-friendly accommodations near top universities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <Card key={property.id} className="hover-lift overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={propertyImages[property.type] || propertyImages.single}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-3 left-3 bg-primary">
                    {property.type.replace('-', ' ')}
                  </Badge>
                  {property.verified && (
                    <Badge className="absolute top-3 right-3 bg-success">
                      <Shield className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
                
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{property.title}</CardTitle>
                      <CardDescription className="flex items-center space-x-1 mt-1">
                        <MapPin className="h-4 w-4" />
                        <span>{property.location} • {property.university}</span>
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">Ksh {property.price.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">per month</div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{property.owner.rating}</span>
                      <span className="text-sm text-muted-foreground">({property.owner.totalProperties} properties)</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {property.available ? 'Available' : 'Occupied'}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {property.amenities.slice(0, 3).map((amenity) => (
                      <Badge key={amenity} variant="secondary" className="text-xs">
                        {amenity}
                      </Badge>
                    ))}
                    {property.amenities.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{property.amenities.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <Link to={`/property/${property.id}`}>
                    <Button className="w-full">View Details</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/properties">
              <Button variant="outline" size="lg">View All Properties</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Everything You Need</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From housing to daily essentials, we've got your student life covered
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 text-white/90">
            Join thousands of students who have found their perfect accommodation through VYNESTO
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" variant="secondary" className="text-primary">
                Sign Up Free
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;