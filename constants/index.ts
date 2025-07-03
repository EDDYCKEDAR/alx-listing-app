// API Configuration
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  TIMEOUT: 10000,
};

// UI Text Constants
export const UI_TEXT = {
  BOOK_NOW: 'Book Now',
  VIEW_DETAILS: 'View Details',
  SEARCH_PLACEHOLDER: 'Search destinations...',
  LOADING: 'Loading...',
  ERROR_MESSAGE: 'Something went wrong. Please try again.',
  NO_RESULTS: 'No results found.',
};

// Navigation Links
export const NAVIGATION_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/stays', label: 'Stays' },
  { href: '/experiences', label: 'Experiences' },
  { href: '/help', label: 'Help' },
];

// Property Categories
export const PROPERTY_CATEGORIES = [
  'Entire place',
  'Private room',
  'Shared room',
  'Hotel room',
];

// Amenities
export const AMENITIES = [
  'WiFi',
  'Kitchen',
  'Parking',
  'Pool',
  'Hot tub',
  'Gym',
  'Washer',
  'Dryer',
  'Pet friendly',
  'Smoking allowed',
];

// Price Range
export const PRICE_RANGE = {
  MIN: 0,
  MAX: 1000,
  STEP: 10,
};

// Image Paths
export const IMAGE_PATHS = {
  PLACEHOLDER: '/assets/images/placeholder.jpg',
  LOGO: '/assets/images/logo.png',
  DEFAULT_AVATAR: '/assets/images/default-avatar.png',
};

// Breakpoints for responsive design
export const BREAKPOINTS = {
  SM: '640px',
  MD: '768px',
  LG: '1024px',
  XL: '1280px',
  '2XL': '1536px',
};
