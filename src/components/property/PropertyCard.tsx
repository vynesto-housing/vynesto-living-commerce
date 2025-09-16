import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Star, Shield, Wifi, Car } from 'lucide-react';
import { Property } from '@/types';

interface PropertyCardProps {
  property: Property;
  imageOverride?: string;
}

const PropertyCard = ({ property, imageOverride }: PropertyCardProps) => {
  const getAmenityIcon = (amenity: string) => {
    if (amenity.toLowerCase().includes('wifi')) return <Wifi className="h-3 w-3" />;
    if (amenity.toLowerCase().includes('parking')) return <Car className="h-3 w-3" />;
    if (amenity.toLowerCase().includes('security')) return <Shield className="h-3 w-3" />;
    return null;
  };

  return (
    <Card className="hover-lift overflow-hidden">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={imageOverride || property.images[0]}
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
            <div className="flex items-center space-x-1 mt-1 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{property.location} • {property.university}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">
              Ksh {property.price.toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground">per month</div>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{property.owner.rating}</span>
            <span className="text-sm text-muted-foreground">
              ({property.owner.totalProperties} properties)
            </span>
          </div>
          <Badge variant="outline" className="text-xs">
            {property.available ? 'Available' : 'Occupied'}
          </Badge>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {property.amenities.slice(0, 3).map((amenity) => (
            <Badge key={amenity} variant="secondary" className="text-xs flex items-center space-x-1">
              {getAmenityIcon(amenity)}
              <span>{amenity}</span>
            </Badge>
          ))}
          {property.amenities.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{property.amenities.length - 3} more
            </Badge>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Owner:</span>
            <span className="font-medium">{property.owner.name}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Contact:</span>
            <span>{property.owner.phone}</span>
          </div>
        </div>

        <Link to={`/property/${property.id}`} className="block mt-4">
          <Button className="w-full">
            View Details & Book
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;