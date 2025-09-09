/**
 * Components Index
 * 
 * Centralized export file for all reusable components.
 * This provides a clean import interface for other parts of the application.
 */

// Layout Components
export { default as Navigation } from './Navigation';
export { default as Footer } from './Footer';

// Section Components
export { default as Hero } from './Hero';
export { default as About } from './About';
export { default as Services } from './Services';
export { default as Projects } from './Projects';
export { default as Testimonials } from './Testimonials';
export { default as Contact } from './Contact';

// Re-export types for convenience
export type {
  HeroProps,
  SectionProps,
  ImageProps,
  CompanyInfo,
  Service,
  Project,
  Testimonial,
  ContactFormData,
  FormErrors,
  NavItem
} from '../types';
