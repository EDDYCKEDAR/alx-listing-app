// Button component props interface
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  className?: string;
}

// Card component props interface
export interface CardProps {
  id: string;
  title: string;
  description?: string;
  image: string;
  price: number;
  location: string;
  rating?: number;
  onClick?: () => void;
  className?: string;
}

// Property listing interface
export interface PropertyListing {
  id: string;
  title: string;
  description: string;
  images: string[];
  price: number;
  location: string;
  rating: number;
  reviews: number;
  amenities: string[];
  host: {
    name: string;
    avatar: string;
    verified: boolean;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
}

// User interface
export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  verified: boolean;
}
