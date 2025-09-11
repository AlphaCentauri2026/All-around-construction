import { Navigation, Footer } from '../../components';

export default function Gallery() {
  const galleryImages = [
    // Aerial Views
    { src: "/All around construction images/pexels-bidvine-517980-1249611.jpg", alt: "Aerial View of Modern Construction Site", category: "Aerial Views" },
    { src: "/All around construction images/pexels-pixabay-159358.jpg", alt: "Bird's Eye View Construction Site", category: "Aerial Views" },
    { src: "/All around construction images/pexels-pixabay-534220.jpg", alt: "Overhead Construction Site View", category: "Aerial Views" },
    { src: "/All around construction images/workers-6721726_1280.jpg", alt: "Aerial Construction Site Perspective", category: "Aerial Views" },

    // Construction Machinery
    { src: "/All around construction images/excavator-1174428_1280.jpg", alt: "Heavy Construction Equipment", category: "Machinery" },
    { src: "/All around construction images/excavator-2642387_1280.jpg", alt: "Professional Bulldozer Operations", category: "Machinery" },
    { src: "/All around construction images/excavator-6669780_1280.jpg", alt: "Advanced Construction Machinery", category: "Machinery" },
    { src: "/All around construction images/construction-257326_1280.jpg", alt: "Heavy Equipment at Work", category: "Machinery" },

    // Commercial Construction
    { src: "/All around construction images/construction-4754309_1280.jpg", alt: "Commercial Building with Crane", category: "Commercial" },
    { src: "/All around construction images/construction-257326_1280.jpg", alt: "Office Tower Construction", category: "Commercial" },
    { src: "/All around construction images/pexels-rezwan-1216544.jpg", alt: "High-Rise Commercial Project", category: "Commercial" },
    { src: "/All around construction images/pexels-rezwan-1145434.jpg", alt: "Commercial Construction Site", category: "Commercial" },

    // Residential Construction
    { src: "/All around construction images/architect-3979490_1280.jpg", alt: "Modern Residential Construction", category: "Residential" },
    { src: "/All around construction images/architect-1080589_1280.jpg", alt: "Contemporary Home Building", category: "Residential" },
    { src: "/All around construction images/pexels-rezwan-1216544.jpg", alt: "Residential Development Project", category: "Residential" },
    { src: "/All around construction images/pexels-rezwan-1145434.jpg", alt: "Modern House Construction", category: "Residential" },

    // Foundation & Site Work
    { src: "/All around construction images/pexels-rezwan-1078884.jpg", alt: "Foundation Work Overview", category: "Foundation" },
    { src: "/All around construction images/pexels-quang-nguyen-vinh-222549-2138126.jpg", alt: "Site Development Progress", category: "Foundation" },
    { src: "/All around construction images/pexels-rezwan-1145434.jpg", alt: "Construction Site Foundations", category: "Foundation" },
    { src: "/All around construction images/construction-257326_1280.jpg", alt: "Structural Foundation Work", category: "Foundation" },

    // Company & Office Exteriors
    { src: "/All around construction images/pexels-life-of-pix-2489.jpg", alt: "Modern Construction Company", category: "Company" },
    { src: "/All around construction images/pexels-rezwan-1216544.jpg", alt: "Construction Firm Headquarters", category: "Company" },
    { src: "/All around construction images/construction-4754309_1280.jpg", alt: "Professional Construction Office", category: "Company" },
    { src: "/All around construction images/pexels-bidvine-517980-1249611.jpg", alt: "Modern Construction Complex", category: "Company" },

    // Office Interiors
    { src: "/All around construction images/architect-3979490_1280.jpg", alt: "Construction Management Office", category: "Office" },
    { src: "/All around construction images/architect-1080589_1280.jpg", alt: "Project Planning Office", category: "Office" },
    { src: "/All around construction images/pexels-sevenstormphotography-439416.jpg", alt: "Architectural Design Studio", category: "Office" },
    { src: "/All around construction images/workers-6721726_1280.jpg", alt: "Modern Construction Workspace", category: "Office" },

    // Renovation Projects
    { src: "/All around construction images/pexels-sevenstormphotography-439416.jpg", alt: "Office Renovation Project", category: "Renovation" },
    { src: "/All around construction images/pexels-pixabay-534220.jpg", alt: "Interior Renovation Work", category: "Renovation" },
    { src: "/All around construction images/workers-6721726_1280.jpg", alt: "Modern Office Renovation", category: "Renovation" },
    { src: "/All around construction images/pexels-pixabay-159358.jpg", alt: "Commercial Renovation Project", category: "Renovation" }
  ];

  const categories = ["All", "Aerial Views", "Machinery", "Commercial", "Residential", "Foundation", "Company", "Office", "Renovation"];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section with Gallery Preview */}
      <section className="relative h-screen pt-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/All around construction images/pexels-pixabay-534220.jpg"
            alt="Project Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent"></div>
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <div className="inline-block mb-6">
                  <span className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Project Gallery
                  </span>
                </div>
                <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
                  Our Work
                  <span className="block text-orange-400">in Pictures</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Explore our comprehensive portfolio showcasing the quality, craftsmanship, and attention to detail 
                  that defines our construction projects.
                </p>
                <div className="flex items-center space-x-8 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">40+</div>
                    <div className="text-sm text-gray-300">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">8</div>
                    <div className="text-sm text-gray-300">Categories</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">100%</div>
                    <div className="text-sm text-gray-300">Quality</div>
                  </div>
                </div>
                <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105">
                  Browse Gallery
                </button>
              </div>
              <div className="hidden lg:block">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="relative group">
                      <img src="/All around construction images/architect-1080589_1280.jpg" alt="Residential Project" className="w-full h-48 object-cover rounded-lg" />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                        <span className="text-white font-semibold">Residential</span>
                      </div>
                    </div>
                    <div className="relative group">
                      <img src="/All around construction images/construction-257326_1280.jpg" alt="Commercial Project" className="w-full h-32 object-cover rounded-lg" />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                        <span className="text-white font-semibold">Commercial</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="relative group">
                      <img src="/All around construction images/excavator-2642387_1280.jpg" alt="Heavy Equipment" className="w-full h-32 object-cover rounded-lg" />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                        <span className="text-white font-semibold">Machinery</span>
                      </div>
                    </div>
                    <div className="relative group">
                      <img src="/All around construction images/pexels-pixabay-159358.jpg" alt="Aerial Construction View" className="w-full h-48 object-cover rounded-lg" />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                        <span className="text-white font-semibold">Aerial Views</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of our most impressive and diverse construction projects
            </p>
          </div>

          {/* Large Featured Image */}
          <div className="mb-16">
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/All around construction images/pexels-rezwan-1216544.jpg"
                alt="Featured Project"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                      Featured Project
                    </span>
                    <h3 className="text-4xl font-bold text-white mb-2">Modern Construction Complex</h3>
                    <p className="text-gray-300 text-lg">State-of-the-art construction facility showcasing modern building techniques and equipment</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-orange-400 mb-1">$450K</div>
                    <div className="text-gray-300 text-sm">Project Value</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="bg-gray-200 hover:bg-orange-600 text-gray-700 hover:text-white px-6 py-3 rounded-full transition duration-300 font-semibold"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Masonry Gallery Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg break-inside-avoid hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {image.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="text-white font-semibold text-lg mb-1">{image.alt}</h4>
                    <p className="text-gray-300 text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories Showcase */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: "url('/All around construction images/workers-6721726_1280.jpg')",
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Project Categories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our diverse range of construction projects across different categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Residential",
                description: "Modern Homes & Developments",
                image: "/All around construction images/pexels-rezwan-1216544.jpg",
                count: "15+",
                projects: "Projects"
              },
              {
                title: "Commercial",
                description: "Office Buildings & Towers",
                image: "/All around construction images/construction-4754309_1280.jpg",
                count: "10+",
                projects: "Projects"
              },
              {
                title: "Machinery",
                description: "Heavy Equipment Operations",
                image: "/All around construction images/excavator-6669780_1280.jpg",
                count: "20+",
                projects: "Machines"
              },
              {
                title: "Foundation",
                description: "Site Development & Foundations",
                image: "/All around construction images/pexels-rezwan-1145434.jpg",
                count: "25+",
                projects: "Sites"
              }
            ].map((category, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="relative mb-6">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-32 h-32 rounded-2xl mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute -top-2 -right-2 bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {category.count}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                <p className="text-gray-300 mb-4">{category.description}</p>
                <div className="text-orange-400 font-semibold">{category.count} {category.projects}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and client satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: "500+",
                label: "Projects Completed",
                description: "Successfully delivered construction projects using advanced techniques",
                image: "/All around construction images/pexels-bidvine-517980-1249611.jpg"
              },
              {
                number: "100%",
                label: "Client Satisfaction",
                description: "Happy clients who trust our modern construction methods",
                image: "/All around construction images/architect-3979490_1280.jpg"
              },
              {
                number: "15+",
                label: "Years Experience",
                description: "Decades of modern construction expertise and equipment operation",
                image: "/All around construction images/excavator-1174428_1280.jpg"
              },
              {
                number: "25+",
                label: "Heavy Machines",
                description: "Professional heavy equipment fleet for all project needs",
                image: "/All around construction images/pexels-pixabay-159358.jpg"
              }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative mb-6">
                  <img 
                    src={stat.image} 
                    alt={stat.label}
                    className="w-20 h-20 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="text-4xl font-bold text-orange-600 mb-2">{stat.number}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{stat.label}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Let us bring your construction vision to life with the same quality and attention to detail you see in our gallery
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold py-4 px-8 rounded-lg text-lg transition duration-300">
              Get Free Quote
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}