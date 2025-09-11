import { Navigation, Footer } from '../../components';
import services from '../../data/services.json';

export default function Services() {
  const additionalServices = [
    {
      id: 7,
      title: "Interior Renovation",
      description: "Modern office interior renovations with contemporary design and structural improvements.",
      image: "/All around construction images/workers-6721726_1280.jpg"
    },
    {
      id: 8,
      title: "Equipment Operations",
      description: "Professional heavy machinery operations for site preparation and construction needs.",
      image: "/All around construction images/excavator-2642387_1280.jpg"
    },
    {
      id: 9,
      title: "Foundation Work",
      description: "Complete foundation and structural work for residential and commercial buildings.",
      image: "/All around construction images/pexels-quang-nguyen-vinh-222549-2138126.jpg"
    },
    {
      id: 10,
      title: "Project Management",
      description: "State-of-the-art construction management with digital planning and coordination.",
      image: "/All around construction images/architect-1080589_1280.jpg"
    }
  ];

  const allServices = [...services, ...additionalServices];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section with Split Layout */}
      <section className="relative h-screen pt-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/All around construction images/construction-4754309_1280.jpg"
            alt="Construction Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <div className="inline-block mb-6">
                  <span className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Our Services
                  </span>
                </div>
                <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
                  Comprehensive
                  <span className="block text-orange-400">Construction</span>
                  <span className="block">Solutions</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  From residential renovations to commercial construction, we handle every aspect of your building project with expertise and precision.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105">
                    Get Quote
                  </button>
                  <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg text-lg transition duration-300">
                    View Portfolio
                  </button>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <img src="/All around construction images/architect-3979490_1280.jpg" alt="Residential Construction" className="w-full h-24 object-cover rounded mb-2" />
                      <h3 className="text-white font-semibold">Residential</h3>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <img src="/Leonardo_Vision_XL_Commercial_building_under_construction_cran_3.jpg" alt="Commercial Construction" className="w-full h-24 object-cover rounded mb-2" />
                      <h3 className="text-white font-semibold">Commercial</h3>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <img src="/All around construction images/excavator-2642387_1280.jpg" alt="Heavy Equipment" className="w-full h-24 object-cover rounded mb-2" />
                      <h3 className="text-white font-semibold">Equipment</h3>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <img src="/All around construction images/workers-6721726_1280.jpg" alt="Renovation" className="w-full h-24 object-cover rounded mb-2" />
                      <h3 className="text-white font-semibold">Renovations</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase with Masonry Layout */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive range of construction services covers every aspect of your building needs
            </p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {allServices.map((service, index) => (
              <div
                key={service.id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden group break-inside-avoid ${
                  index % 3 === 0 ? 'lg:col-span-2' : ''
                }`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105">
                      Learn More
                    </button>
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section with Timeline */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: "url('/All around construction images/pexels-pixabay-159358.jpg')",
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach that ensures quality, efficiency, and your complete satisfaction
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-600 hidden lg:block"></div>
            
            <div className="space-y-16">
              {[
                {
                  step: "01",
                  title: "Consultation",
                  description: "We discuss your vision, requirements, and budget to understand your project goals.",
                  image: "/Leonardo_Vision_XL_Modern_construction_office_interior_with_ar_0.jpg",
                  side: "left"
                },
                {
                  step: "02",
                  title: "Planning & Design",
                  description: "Detailed project planning, architectural drawings, and material selection using modern construction management tools.",
                  image: "/Leonardo_Vision_XL_Exterior_view_of_a_modern_construction_comp_0.jpg",
                  side: "right"
                },
                {
                  step: "03",
                  title: "Construction",
                  description: "Expert craftsmanship and quality work with regular progress updates using advanced construction equipment.",
                  image: "/Leonardo_Vision_XL_Closeup_of_construction_machinery_like_bull_0.jpg",
                  side: "left"
                },
                {
                  step: "04",
                  title: "Completion",
                  description: "Final inspection, quality assurance, and project handover with comprehensive documentation.",
                  image: "/Leonardo_Vision_XL_Construction_site_overview_showing_foundati_0.jpg",
                  side: "right"
                }
              ].map((item, index) => (
                <div key={index} className={`flex items-center ${item.side === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`w-full lg:w-1/2 ${item.side === 'left' ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                      <div className="flex items-center mb-4">
                        <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                          {item.step}
                        </div>
                        <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {item.description}
                      </p>
                      <div className="flex items-center">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div>
                          <div className="text-white font-semibold">Construction Phase</div>
                          <div className="text-gray-400 text-sm">Professional Equipment</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:block w-1/2">
                    <div className="relative">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Let&apos;s discuss your construction needs and create something amazing together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105">
              Get Free Quote
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold py-4 px-8 rounded-lg text-lg transition duration-300">
              Call Us Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}