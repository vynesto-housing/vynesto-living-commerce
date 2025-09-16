import { Property, ShopItem, Service, User, University, Reward } from '../types';

export const mockUniversities: University[] = [
  {
    id: '1',
    name: 'University of Nairobi',
    location: 'Nairobi',
    coordinates: { lat: -1.2841, lng: 36.8155 },
    popularAreas: ['Kikuyu', 'Westlands', 'Parklands', 'Kawangware']
  },
  {
    id: '2',
    name: 'Jomo Kenyatta University',
    location: 'Juja',
    coordinates: { lat: -1.0962, lng: 37.0145 },
    popularAreas: ['Juja', 'Kalimoni', 'Gate A', 'Gachororo']
  },
  {
    id: '3',
    name: 'Kenyatta University',
    location: 'Kahawa',
    coordinates: { lat: -1.1847, lng: 36.9342 },
    popularAreas: ['Kahawa West', 'Githurai', 'Kenyatta Road', 'Kamiti']
  }
];

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Modern Single Room - UoN',
    description: 'Clean and comfortable single room near University of Nairobi with shared facilities.',
    type: 'single',
    price: 3500,
    location: 'Kikuyu',
    university: 'University of Nairobi',
    amenities: ['WiFi', 'Water', 'Security', 'Shared Kitchen', 'Study Area'],
    images: ['/src/assets/mock-single-room.jpg'],
    ownerId: '1',
    owner: {
      id: '1',
      name: 'John Mbugua',
      phone: '+254712345678',
      email: 'john@example.com',
      verified: true,
      rating: 4.8,
      totalProperties: 12
    },
    available: true,
    verified: true,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: '2',
    title: 'Spacious Bedsitter - JKUAT',
    description: 'Self-contained bedsitter with kitchenette, perfect for JKUAT students.',
    type: 'bedsitter',
    price: 6000,
    location: 'Juja',
    university: 'Jomo Kenyatta University',
    amenities: ['WiFi', 'Water', 'Electricity', 'Kitchenette', 'Private Bathroom', 'Security'],
    images: ['/src/assets/mock-bedsitter.jpg'],
    ownerId: '2',
    owner: {
      id: '2',
      name: 'Mary Wanjiku',
      phone: '+254723456789',
      email: 'mary@example.com',
      verified: true,
      rating: 4.9,
      totalProperties: 8
    },
    available: true,
    verified: true,
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-02-01')
  },
  {
    id: '3',
    title: 'Premium One-Bedroom - KU',
    description: 'Fully furnished one-bedroom apartment near Kenyatta University campus.',
    type: 'one-bedroom',
    price: 8500,
    location: 'Kahawa West',
    university: 'Kenyatta University',
    amenities: ['WiFi', 'Water', 'Electricity', 'Full Kitchen', 'Living Room', 'Balcony', 'Parking', '24/7 Security'],
    images: ['/src/assets/mock-one-bedroom.jpg'],
    ownerId: '3',
    owner: {
      id: '3',
      name: 'David Kimani',
      phone: '+254734567890',
      email: 'david@example.com',
      verified: true,
      rating: 4.7,
      totalProperties: 6
    },
    available: true,
    verified: true,
    createdAt: new Date('2024-02-10'),
    updatedAt: new Date('2024-02-10')
  }
];

export const mockShopItems: ShopItem[] = [
  {
    id: '1',
    name: 'Maize Flour (2kg)',
    description: 'Premium quality maize flour for everyday cooking',
    category: 'groceries',
    price: 120,
    images: ['https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop'],
    vendorId: '1',
    vendor: {
      id: '1',
      name: 'Campus Groceries',
      description: 'Your trusted grocery provider',
      phone: '+254745678901',
      email: 'groceries@campus.com',
      verified: true,
      rating: 4.8,
      totalProducts: 150,
      badge: 'verified'
    },
    inStock: true,
    rating: 4.7,
    reviews: 89,
    createdAt: new Date('2024-01-01')
  },
  {
    id: '2',
    name: 'Rice (5kg)',
    description: 'Long grain white rice, perfect for students',
    category: 'groceries',
    price: 450,
    images: ['https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=400&h=300&fit=crop'],
    vendorId: '1',
    vendor: {
      id: '1',
      name: 'Campus Groceries',
      description: 'Your trusted grocery provider',
      phone: '+254745678901',
      email: 'groceries@campus.com',
      verified: true,
      rating: 4.8,
      totalProducts: 150,
      badge: 'verified'
    },
    inStock: true,
    rating: 4.6,
    reviews: 124,
    createdAt: new Date('2024-01-01')
  },
  {
    id: '3',
    name: 'Student T-Shirt',
    description: 'Comfortable cotton t-shirt for everyday wear',
    category: 'fashion',
    price: 800,
    images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop'],
    vendorId: '2',
    vendor: {
      id: '2',
      name: 'Campus Fashion',
      description: 'Trendy clothes for students',
      phone: '+254756789012',
      email: 'fashion@campus.com',
      verified: true,
      rating: 4.5,
      totalProducts: 85,
      badge: 'featured'
    },
    inStock: true,
    rating: 4.4,
    reviews: 67,
    createdAt: new Date('2024-01-15')
  },
  {
    id: '4',
    name: 'Notebook Set (5pcs)',
    description: 'High-quality notebooks for taking notes',
    category: 'books',
    price: 300,
    images: ['https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop'],
    vendorId: '3',
    vendor: {
      id: '3',
      name: 'Campus Books',
      description: 'Academic materials and stationery',
      phone: '+254767890123',
      email: 'books@campus.com',
      verified: true,
      rating: 4.9,
      totalProducts: 200,
      badge: 'top-service'
    },
    inStock: true,
    rating: 4.8,
    reviews: 156,
    createdAt: new Date('2024-01-20')
  }
];

export const mockServices: Service[] = [
  {
    id: '1',
    name: 'Laundry Service',
    description: 'Professional washing and ironing service',
    type: 'laundry',
    price: 200,
    duration: '24 hours',
    vendorId: '4',
    vendor: {
      id: '4',
      name: 'Clean Campus Laundry',
      description: 'Professional laundry services',
      phone: '+254778901234',
      email: 'laundry@campus.com',
      verified: true,
      rating: 4.7,
      totalProducts: 3,
      badge: 'verified'
    },
    available: true,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=300&fit=crop'
  },
  {
    id: '2',
    name: 'Meal Delivery',
    description: 'Fresh, home-cooked meals delivered to your room',
    type: 'food',
    price: 350,
    duration: '30-45 minutes',
    vendorId: '5',
    vendor: {
      id: '5',
      name: 'Campus Eats',
      description: 'Delicious meals for students',
      phone: '+254789012345',
      email: 'food@campus.com',
      verified: true,
      rating: 4.8,
      totalProducts: 25,
      badge: 'top-service'
    },
    available: true,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop'
  },
  {
    id: '3',
    name: 'Room Cleaning',
    description: 'Deep cleaning service for your room',
    type: 'cleaning',
    price: 500,
    duration: '2-3 hours',
    vendorId: '6',
    vendor: {
      id: '6',
      name: 'Sparkle Clean',
      description: 'Professional cleaning services',
      phone: '+254790123456',
      email: 'clean@campus.com',
      verified: true,
      rating: 4.9,
      totalProducts: 5,
      badge: 'featured'
    },
    available: true,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1558618644-fcd25c85cd64?w=400&h=300&fit=crop'
  }
];

export const mockRewards: Reward[] = [
  {
    id: '1',
    type: 'cashback',
    title: '5% Cashback',
    description: 'Get 5% cashback on all bookings',
    value: 5,
    requirements: ['Complete 3 bookings', 'Maintain good rating'],
    available: true,
    category: 'student'
  },
  {
    id: '2',
    type: 'bursary',
    title: 'Academic Bursary',
    description: 'Ksh 10,000 towards academic expenses',
    value: 10000,
    pointsCost: 50000,
    requirements: ['Maintain GPA > 3.0', 'Complete 10 bookings', 'Write testimonial'],
    available: true,
    category: 'student'
  },
  {
    id: '3',
    type: 'badge',
    title: 'Verified Landlord',
    description: 'Verified status for trusted landlords',
    value: 0,
    requirements: ['Complete verification', 'Maintain 4+ rating', '5+ properties'],
    available: true,
    category: 'landlord'
  },
  {
    id: '4',
    type: 'points',
    title: 'Welcome Bonus',
    description: 'Get 1000 points for signing up',
    value: 1000,
    requirements: ['Complete profile', 'Verify email'],
    available: true,
    category: 'student'
  }
];

export const mockUser: User = {
  id: '1',
  email: 'student@example.com',
  role: 'student',
  profile: {
    firstName: 'Jane',
    lastName: 'Doe',
    phone: '+254701234567',
    university: 'University of Nairobi',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b608?w=200&h=200&fit=crop&crop=face',
    verified: true,
    walletBalance: 2500,
    rewardPoints: 15420
  },
  createdAt: new Date('2024-01-01'),
  updatedAt: new Date('2024-02-15')
};