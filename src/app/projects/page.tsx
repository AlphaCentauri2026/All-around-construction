import { Navigation, Footer } from '../../components';
import projects from '../../data/projects.json';

export default function Projects() {
  const additionalProjects = [
    {
      id: 7,
      title: "Modern Residential Complex",
      description: "Large-scale residential development featuring contemporary design and sustainable building practices.",
      image: "/All around construction images/architect-1080589_1280.jpg",
      category: "Residential"
    },
    {
      id: 8,
      title: "Office Space Renovation",
      description: "Complete office renovation with modern interiors and advanced construction techniques.",
      image: "/All around construction images/pexels-sevenstormphotography-439416.jpg",
      category: "Renovation"
    },
    {
      id: 9,
      title: "Commercial Building Project",
      description: "Ground-up commercial construction with crane operations and structural steel work.",
      image: "/All around construction images/construction-4754309_1280.jpg",
      category: "Commercial"
    },
    {
      id: 10,
      title: "Construction Management Hub",
      description: "Modern project management facility with digital planning tools and coordination spaces.",
      image: "/All around construction images/architect-3979490_1280.jpg",
      category: "Management"
    },
    {
      id: 11,
      title: "Heavy Equipment Operations",
      description: "Site development project utilizing advanced heavy machinery and earth-moving equipment.",
      image: "/All around construction images/excavator-6669780_1280.jpg",
      category: "Machinery"
    },
    {
      id: 12,
      title: "Foundation & Site Work",
      description: "Complete foundation work and site preparation for large-scale construction projects.",
      image: "/All around construction images/pexels-rezwan-1145434.jpg",
      category: "Foundation"
    }
  ];

  const allProjects = [...projects, ...additionalProjects];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section with Portfolio Preview */}
      <section className="relative h-screen pt-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/All around construction images/pexels-pixabay-159358.jpg"
            alt="Construction Projects"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent"></div>
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <div className="inline-block mb-6">
                  <span className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Portfolio
                  </span>
                </div>
                <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
                  Our
                  <span className="block text-orange-400">Projects</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Discover our portfolio of exceptional construction projects that showcase our expertise, 
                  craftsmanship, and commitment to excellence.
                </p>
                <div className="flex items-center space-x-8 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">50+</div>
                    <div className="text-sm text-gray-300">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">15+</div>
                    <div className="text-sm text-gray-300">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">100%</div>
                    <div className="text-sm text-gray-300">Satisfaction</div>
                  </div>
                </div>
                <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105">
                  View All Projects
                </button>
              </div>
              <div className="hidden lg:block">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="relative group">
                      <img src="/All around construction images/pexels-rezwan-1216544.jpg" alt="Residential Project" className="w-full h-48 object-cover rounded-lg" />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                        <span className="text-white font-semibold">Residential</span>
                      </div>
                    </div>
                    <div className="relative group">
                      <img src="/Leonardo_Vision_XL_Commercial_building_under_construction_cran_2.jpg" alt="Commercial Project" className="w-full h-32 object-cover rounded-lg" />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                        <span className="text-white font-semibold">Commercial</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="relative group">
                      <img src="/Leonardo_Vision_XL_Closeup_of_construction_machinery_like_bull_2.jpg" alt="Heavy Equipment" className="w-full h-32 object-cover rounded-lg" />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                        <span className="text-white font-semibold">Machinery</span>
                      </div>
                    </div>
                    <div className="relative group">
                      <img src="/Leonardo_Vision_XL_Renovation_project_inside_a_modern_office_c_2.jpg" alt="Renovation" className="w-full h-48 object-cover rounded-lg" />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                        <span className="text-white font-semibold">Renovation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects with Asymmetric Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of our most impressive and diverse construction projects
            </p>
          </div>

          {/* Large Featured Project */}
          <div className="mb-16">
            <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-96 lg:h-auto">
                  <img
                    src="/All around construction images/pexels-life-of-pix-2489.jpg"
                    alt="Featured Project"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-2 inline-block">
                      Featured Project
                    </span>
                    <h3 className="text-3xl font-bold text-white mb-2">Modern Construction Complex</h3>
                    <p className="text-gray-300">State-of-the-art construction facility with advanced equipment and modern infrastructure</p>
                  </div>
                </div>
                <div className="p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-white mb-6">Exceptional Craftsmanship</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    This stunning home addition showcases our commitment to quality and attention to detail. 
                    From the initial design phase to the final touches, every aspect was carefully planned and executed.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <div className="text-2xl font-bold text-orange-400 mb-1">2,000</div>
                      <div className="text-gray-400 text-sm">Square Feet</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-400 mb-1">6</div>
                      <div className="text-gray-400 text-sm">Months</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-400 mb-1">$450K</div>
                      <div className="text-gray-400 text-sm">Budget</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-400 mb-1">100%</div>
                      <div className="text-gray-400 text-sm">Satisfaction</div>
                    </div>
                  </div>
                  <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 w-fit">
                    View Project Details
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Project Grid with Different Sizes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.slice(0, 6).map((project, index) => (
              <div
                key={project.id}
                className={`group relative overflow-hidden rounded-2xl shadow-lg ${
                  index === 0 ? 'md:col-span-2 lg:col-span-1' : 
                  index === 2 ? 'lg:col-span-2' : ''
                }`}
              >
                <div className={`relative overflow-hidden ${
                  index === 0 ? 'h-80' : 
                  index === 2 ? 'h-64' : 'h-64'
                }`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <div className="flex items-center justify-between">
                    <button className="text-orange-600 font-semibold hover:text-orange-700 transition duration-300">
                      View Details →
                    </button>
                    <div className="flex space-x-1">
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

      {/* Project Categories with Stats */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: "url('/All around construction images/pexels-bidvine-517980-1249611.jpg')",
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
              We specialize in a wide range of construction projects across different sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Residential",
                description: "Modern Homes & Developments",
                image: "/All around construction images/architect-1080589_1280.jpg",
                count: "25+",
                projects: "Projects"
              },
              {
                title: "Commercial",
                description: "Office Buildings & Towers",
                image: "/All around construction images/construction-4754309_1280.jpg",
                count: "15+",
                projects: "Projects"
              },
              {
                title: "Heavy Equipment",
                description: "Machinery & Site Operations",
                image: "/All around construction images/excavator-6669780_1280.jpg",
                count: "20+",
                projects: "Machines"
              },
              {
                title: "Foundation Work",
                description: "Site Development & Foundations",
                image: "/All around construction images/pexels-rezwan-1145434.jpg",
                count: "30+",
                projects: "Sites"
              }
            ].map((category, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="relative mb-6">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
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

      {/* Client Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Client Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear what our satisfied clients have to say about our work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Johnson Property Development",
                role: "Construction Client",
                image: "/All around construction images/pexels-rezwan-1078884.jpg",
                quote: "Outstanding modern construction techniques and attention to detail! They delivered exceptional quality in our residential development project.",
                rating: 5
              },
              {
                name: "Chen Commercial Group",
                role: "Commercial Client",
                image: "/All around construction images/construction-257326_1280.jpg",
                quote: "Completed on time and within budget using state-of-the-art equipment. Highly recommend their professional operations and excellent project management.",
                rating: 5
              },
              {
                name: "Park Office Solutions",
                role: "Renovation Client",
                image: "/All around construction images/pexels-pixabay-534220.jpg",
                quote: "Professional team with excellent communication and modern renovation techniques. They made our office renovation project stress-free and enjoyable.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-orange-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed">&quot;{testimonial.quote}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}