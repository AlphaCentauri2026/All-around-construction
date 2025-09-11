import React from 'react';
import { Testimonial, SectionProps } from '../types';
import testimonials from '../data/testimonials.json';

/**
 * Testimonials Component
 * 
 * Displays the testimonials section with a grid of client testimonial cards.
 * Each card shows a star rating, quote icon, feedback text, and client information.
 * Features a background image with overlay and responsive grid layout.
 * 
 * @param props - Section component props
 * @returns JSX element
 */
const Testimonials: React.FC<SectionProps> = ({ className = "" }) => {
  const testimonialsData = testimonials as Testimonial[];

  return (
    <section
      className={`py-16 bg-cover bg-center bg-no-repeat relative ${className}`}
      style={{
        backgroundImage: "url('/All around construction images/pexels-pixabay-534220.jpg')"
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Don&apos;t just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Star Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote Icon */}
                <div className="mb-4">
                  <svg
                    className="w-8 h-8 text-orange-600 opacity-50"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M10 8v8H6V8h4zm0 0v2a2 2 0 11-4 0v-2h4zm12 0v8h-4V8h4zm0 0v2a2 2 0 11-4 0v-2h4z"/>
                  </svg>
                </div>

                {/* Feedback */}
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  &quot;{testimonial.feedback}&quot;
                </p>

                {/* Client Name */}
                <div className="border-t pt-4 flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-orange-200"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">Happy Client</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
