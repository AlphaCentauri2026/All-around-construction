import React from 'react';
import { CompanyInfo, HeroProps } from '../types';
import company from '../data/company.json';

/**
 * Hero Component
 * 
 * Displays the main hero section with company branding and call-to-action.
 * Features a background image, company logo, name, tagline, and primary button.
 * 
 * @param props - Hero component props
 * @returns JSX element
 */
const Hero: React.FC<HeroProps> = ({ 
  backgroundImage = "url('/All around construction images/construction-257326_1280.jpg')",
  title,
  subtitle 
}) => {
  const companyData = company as CompanyInfo;

  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat pt-16"
      style={{ backgroundImage }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center text-white max-w-4xl">
          {/* Logo */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-white shadow-lg bg-orange-600 flex items-center justify-center">
              <span className="text-white font-bold text-3xl">AC</span>
            </div>
          </div>
          
          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {title || companyData.name}
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 font-light">
            {subtitle || companyData.tagline}
          </p>
          
          {/* Call to Action Button */}
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
