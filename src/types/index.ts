export interface User {
  id: string;
  email: string;
  role: 'student' | 'landlord' | 'vendor' | 'admin';
  profile: UserProfile;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  phone?: string;
  university?: string;
  avatar?: string;
  verified: boolean;
  walletBalance: number;
  rewardPoints: number;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  type: 'single' | 'bedsitter' | 'one-bedroom';
  price: number;
  location: string;
  university: string;
  amenities: string[];
  images: string[];
  ownerId: string;
  owner: PropertyOwner;
  available: boolean;
  verified: boolean;
  coordinates?: {
    lat: number;
    lng: number;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface PropertyOwner {
  id: string;
  name: string;
  phone: string;
  email: string;
  verified: boolean;
  rating: number;
  totalProperties: number;
}

export interface Booking {
  id: string;
  propertyId: string;
  property: Property;
  studentId: string;
  student: User;
  status: 'pending' | 'confirmed' | 'escrow' | 'completed' | 'cancelled';
  checkIn: Date;
  checkOut: Date;
  totalAmount: number;
  paymentMethod: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ShopItem {
  id: string;
  name: string;
  description: string;
  category: 'food' | 'groceries' | 'fashion' | 'electronics' | 'books';
  price: number;
  images: string[];
  vendorId: string;
  vendor: Vendor;
  inStock: boolean;
  rating: number;
  reviews: number;
  createdAt: Date;
}

export interface Vendor {
  id: string;
  name: string;
  description: string;
  phone: string;
  email: string;
  verified: boolean;
  rating: number;
  totalProducts: number;
  badge?: 'top-service' | 'verified' | 'featured';
}

export interface Service {
  id: string;
  name: string;
  description: string;
  type: 'laundry' | 'food' | 'cleaning';
  price: number;
  duration: string;
  vendorId: string;
  vendor: Vendor;
  available: boolean;
  rating: number;
  image: string;
}

export interface CartItem {
  id: string;
  item: ShopItem;
  quantity: number;
  addedAt: Date;
}

export interface Order {
  id: string;
  items: CartItem[];
  studentId: string;
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'delivered' | 'cancelled';
  deliveryAddress: string;
  paymentMethod: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ServiceBooking {
  id: string;
  serviceId: string;
  service: Service;
  studentId: string;
  scheduledDate: Date;
  status: 'pending' | 'confirmed' | 'in-progress' | 'completed' | 'cancelled';
  totalAmount: number;
  paymentMethod: string;
  createdAt: Date;
}

export interface Reward {
  id: string;
  type: 'cashback' | 'points' | 'bursary' | 'scholarship' | 'badge';
  title: string;
  description: string;
  value: number;
  pointsCost?: number;
  requirements: string[];
  available: boolean;
  category: 'student' | 'landlord' | 'vendor';
}

export interface Transaction {
  id: string;
  userId: string;
  type: 'credit' | 'debit';
  amount: number;
  description: string;
  category: 'booking' | 'shop' | 'service' | 'reward' | 'refund';
  reference?: string;
  createdAt: Date;
}

export interface University {
  id: string;
  name: string;
  location: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  popularAreas: string[];
}

export interface PaymentMethod {
  id: string;
  type: 'mpesa' | 'card' | 'paypal' | 'wallet';
  name: string;
  details?: any;
  isDefault: boolean;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'booking' | 'payment' | 'reward' | 'system';
  read: boolean;
  createdAt: Date;
}

export interface DashboardStats {
  totalBookings: number;
  totalRevenue: number;
  activeListings: number;
  pendingPayments: number;
  rewardPoints: number;
  walletBalance: number;
  monthlyGrowth: number;
}