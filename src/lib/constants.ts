// VYNESTO Platform Constants

export const APP_NAME = 'VYNESTO';
export const APP_DESCRIPTION = 'Student Housing & Services Platform for Kenya';

// Reward System
export const POINTS_TO_KSH_RATIO = 5; // 5 points = 1 Ksh
export const WELCOME_BONUS_POINTS = 1000;
export const BOOKING_POINTS_MULTIPLIER = 0.1; // 10% of booking value in points
export const PURCHASE_POINTS_MULTIPLIER = 0.05; // 5% of purchase value in points

// Property Types
export const PROPERTY_TYPES = {
  SINGLE: 'single',
  BEDSITTER: 'bedsitter',
  ONE_BEDROOM: 'one-bedroom',
} as const;

export const PROPERTY_TYPE_LABELS = {
  [PROPERTY_TYPES.SINGLE]: 'Single Room',
  [PROPERTY_TYPES.BEDSITTER]: 'Bedsitter',
  [PROPERTY_TYPES.ONE_BEDROOM]: 'One Bedroom',
};

// Price Ranges (Ksh)
export const PROPERTY_PRICE_RANGES = {
  [PROPERTY_TYPES.SINGLE]: { min: 2000, max: 5000 },
  [PROPERTY_TYPES.BEDSITTER]: { min: 4000, max: 7000 },
  [PROPERTY_TYPES.ONE_BEDROOM]: { min: 7000, max: 10000 },
};

// Service Types
export const SERVICE_TYPES = {
  LAUNDRY: 'laundry',
  FOOD: 'food',
  CLEANING: 'cleaning',
} as const;

// Shop Categories
export const SHOP_CATEGORIES = {
  GROCERIES: 'groceries',
  FOOD: 'food',
  FASHION: 'fashion',
  ELECTRONICS: 'electronics',
  BOOKS: 'books',
} as const;

// User Roles
export const USER_ROLES = {
  STUDENT: 'student',
  LANDLORD: 'landlord', 
  VENDOR: 'vendor',
  ADMIN: 'admin',
} as const;

// Booking Status
export const BOOKING_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  ESCROW: 'escrow',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
} as const;

// Order Status  
export const ORDER_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
} as const;

// Payment Methods
export const PAYMENT_METHODS = {
  MPESA: 'mpesa',
  CARD: 'card',
  PAYPAL: 'paypal',
  WALLET: 'wallet',
} as const;

// Contact Information
export const CONTACT_INFO = {
  PHONE: '0707241736',
  EMAIL: 'hello@vynesto.com',
  LOCATION: 'Nairobi, Kenya',
  SUPPORT_HOURS: '24/7',
};

// Social Media
export const SOCIAL_LINKS = {
  FACEBOOK: 'https://facebook.com/vynesto',
  TWITTER: 'https://twitter.com/vynesto',
  INSTAGRAM: 'https://instagram.com/vynesto',
  LINKEDIN: 'https://linkedin.com/company/vynesto',
};

// Navigation Routes
export const ROUTES = {
  HOME: '/',
  SHOP: '/shop',
  SERVICES: '/services',
  REWARDS: '/rewards',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  BOOKINGS: '/bookings',
  PROPERTIES: '/properties',
  LOGIN: '/login',
  REGISTER: '/register',
  BLOG: '/blog',
  FAQS: '/faqs',
  SUPPORT: '/support',
  PRIVACY: '/privacy-policy',
  TERMS: '/terms-of-service',
  LIST_PROPERTY: '/list-property',
  BECOME_VENDOR: '/become-vendor',
  STUDENT_ASSISTANCE: '/student-assistance',
  SCHOLARSHIP_REQUEST: '/scholarship-request',
  RENT_SUPPORT: '/rent-support',
  VENDOR_MICROLOANS: '/vendor-microloans',
  LANDLORD_SUPPORT: '/landlord-support',
} as const;