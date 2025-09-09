import React from 'react';
import { CompanyInfo, SectionProps } from '../types';
import company from '../data/company.json';

/**
 * About Component
 * 
 * Displays the about section with company information, statistics,
 * and a featured image. Features a background image with overlay
 * and responsive statistics cards.
 * 
 * @param props - Section component props
 * @returns JSX element
 */
const About: React.FC<SectionProps> = ({ className = "" }) => {
  const companyData = company as CompanyInfo;

  return (
    <section
      className={`py-16 bg-cover bg-center bg-no-repeat relative ${className}`}
      style={{
        backgroundImage: "url('/images/Leonardo_Vision_XL_Exterior_view_of_a_modern_construction_comp_0.jpg')"
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white mb-6">
                About {companyData.name}
              </h2>
              <p className="text-lg text-gray-100 leading-relaxed">
                {companyData.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <div className="bg-orange-600 text-white px-6 py-3 rounded-lg text-center">
                  <div className="font-bold text-2xl">20+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="bg-gray-800 text-white px-6 py-3 rounded-lg text-center">
                  <div className="font-bold text-2xl">500+</div>
                  <div className="text-sm">Projects Completed</div>
                </div>
                <div className="bg-orange-600 text-white px-6 py-3 rounded-lg text-center">
                  <div className="font-bold text-2xl">100%</div>
                  <div className="text-sm">Client Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 bg-gray-200 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/images/Leonardo_Vision_XL_Exterior_view_of_a_modern_construction_comp_1.jpg"
                  alt="Modern Construction Company"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">Expert Team</div>
                <div className="text-sm">Licensed & Insured</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
