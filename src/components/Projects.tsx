import React from 'react';
import { Project, SectionProps } from '../types';
import projects from '../data/projects.json';

/**
 * Projects Component
 * 
 * Displays the projects section with a grid of project cards.
 * Each project card shows an image with hover effects, title overlay,
 * and detailed information on hover. Features a background image with overlay.
 * 
 * @param props - Section component props
 * @returns JSX element
 */
const Projects: React.FC<SectionProps> = ({ className = "" }) => {
  const projectsData = projects as Project[];

  return (
    <section
      className={`py-16 bg-cover bg-center bg-no-repeat relative ${className}`}
      style={{
        backgroundImage: "url('/All around construction images/construction-4754309_1280.jpg')"
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Projects</h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Explore our portfolio of completed construction projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm leading-relaxed">{project.description}</p>
                  </div>
                </div>

                {/* Title overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-white font-bold text-lg">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
