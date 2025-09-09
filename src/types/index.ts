/**
 * TypeScript type definitions for the Construction Website Template
 * 
 * This file contains all the type definitions used throughout the application
 * to ensure type safety and better developer experience.
 */

// Company Information Types
export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  social: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
  };
}

// Service Types
export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

// Project Types
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'Residential' | 'Commercial' | 'Infrastructure' | 'Site Management' | 'Renovation' | 'Facilities';
}

// Testimonial Types
export interface Testimonial {
  id: number;
  name: string;
  feedback: string;
  rating: number;
  image: string;
  project?: string;
}

// Gallery Image Types
export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: 'Aerial Views' | 'Machinery' | 'Commercial' | 'Residential' | 'Foundation' | 'Company' | 'Office' | 'Renovation';
}

// Equipment Types (for Equipment Fleet page)
export interface Equipment {
  id: number;
  name: string;
  description: string;
  image: string;
  specifications: string[];
  category: 'Heavy Machinery' | 'Crane Operations' | 'Construction Complex' | 'Project Management';
}

// Navigation Types
export interface NavItem {
  name: string;
  href: string;
  current?: boolean;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// Component Props Types
export interface HeroProps {
  backgroundImage?: string;
  title?: string;
  subtitle?: string;
  showStats?: boolean;
}

export interface SectionProps {
  className?: string;
  children: React.ReactNode;
}

export interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

// Page Metadata Types
export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Form Validation Types
export interface FormErrors {
  [key: string]: string | undefined;
}

// Theme Types
export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

// Animation Types
export interface AnimationProps {
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  type?: 'fade' | 'slide' | 'scale';
}

// Utility Types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
