import React from 'react';
import { Service, SectionProps } from '../types';
import services from '../data/services.json';

/**
 * Services Component
 * 
 * Displays the services section with a grid of service cards.
 * Each service card shows an icon, title, description, and call-to-action button.
 * Features a background image with overlay and responsive grid layout.
 * 
 * @param props - Section component props
 * @returns JSX element
 */
const Services: React.FC<SectionProps> = ({ className = "" }) => {
  const servicesData = services as Service[];

  return (
    <section
      className={`py-16 bg-cover bg-center bg-no-repeat relative ${className}`}
      style={{
        backgroundImage: "url('/images/Leonardo_Vision_XL_Aerial_view_of_a_modern_construction_site_w_1.jpg')"
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              We offer comprehensive construction services to meet all your building needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-700 transition-colors">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="px-6 pb-6">
                  <button className="w-full bg-gray-100 hover:bg-orange-600 text-gray-700 hover:text-white py-2 px-4 rounded-lg transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
