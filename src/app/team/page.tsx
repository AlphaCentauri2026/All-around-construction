import { Navigation, Footer } from '../../components';

export default function Team() {
  const equipmentFleet = [
    {
      id: 1,
      name: "Heavy Machinery Division",
      type: "Equipment Operations",
      description: "Our advanced heavy machinery fleet handles the most demanding construction projects with precision and power.",
      image: "/All around construction images/excavator-1174428_1280.jpg",
      capabilities: ["Excavation", "Site Preparation", "Heavy Lifting"],
      power: "500+ HP Combined",
      projects: "100+ Sites"
    },
    {
      id: 2,
      name: "Crane Operations",
      type: "High-Rise Construction",
      description: "State-of-the-art crane operations for commercial and high-rise construction projects.",
      image: "/All around construction images/construction-257326_1280.jpg",
      capabilities: ["Tower Crane Operations", "Material Lifting", "Structural Assembly"],
      capacity: "200 Ton Capacity",
      projects: "50+ High-Rises"
    },
    {
      id: 3,
      name: "Modern Construction Complex",
      type: "Operations Headquarters",
      description: "Our state-of-the-art construction complex serves as the nerve center for all project operations.",
      image: "/All around construction images/pexels-life-of-pix-2489.jpg",
      capabilities: ["Project Management", "Equipment Storage", "Material Procurement"],
      size: "50,000 sq ft",
      projects: "500+ Managed"
    },
    {
      id: 4,
      name: "Project Management Hub",
      type: "Digital Operations Center",
      description: "Advanced project management facilities with digital planning tools and coordination systems.",
      image: "/All around construction images/architect-3979490_1280.jpg",
      capabilities: ["Digital Planning", "Project Tracking", "Client Coordination"],
      technology: "Latest BIM Software",
      projects: "200+ Digital Projects"
    },
    {
      id: 5,
      name: "Foundation Specialists",
      type: "Site Development",
      description: "Specialized foundation work and site development capabilities for complex construction projects.",
      image: "/All around construction images/pexels-rezwan-1078884.jpg",
      capabilities: ["Foundation Laying", "Site Grading", "Structural Integrity"],
      experience: "25+ Years",
      projects: "300+ Foundations"
    },
    {
      id: 6,
      name: "Renovation Division",
      type: "Interior Construction",
      description: "Advanced renovation techniques for modern office spaces and commercial interiors.",
      image: "/All around construction images/pexels-sevenstormphotography-439416.jpg",
      capabilities: ["Interior Renovation", "Modern Design", "Structural Modifications"],
      expertise: "Contemporary Construction",
      projects: "150+ Renovations"
    },
    {
      id: 7,
      name: "Residential Construction",
      type: "Home Building",
      description: "Modern residential construction using sustainable materials and advanced building techniques.",
      image: "/All around construction images/architect-1080589_1280.jpg",
      capabilities: ["Custom Homes", "Sustainable Design", "Modern Architecture"],
      materials: "Green Certified",
      projects: "75+ Homes"
    },
    {
      id: 8,
      name: "Aerial Operations",
      type: "Site Surveillance",
      description: "Aerial view capabilities for comprehensive site management and project oversight.",
      image: "/All around construction images/pexels-bidvine-517980-1249611.jpg",
      capabilities: ["Site Monitoring", "Progress Tracking", "Safety Oversight"],
      coverage: "Real-time Monitoring",
      projects: "All Active Sites"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section with Equipment Preview */}
      <section className="relative h-screen pt-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/All around construction images/pexels-pixabay-159358.jpg"
            alt="Our Equipment & Facilities"
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
                    Our Equipment
                  </span>
                </div>
                <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
                  Our Advanced
                  <span className="block text-orange-400">Equipment Fleet</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Our state-of-the-art equipment and modern facilities are the backbone of our construction operations.
                  Discover the advanced machinery and technology that powers our success.
                </p>
                <div className="flex items-center space-x-8 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">25+</div>
                    <div className="text-sm text-gray-300">Heavy Machines</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">500+</div>
                    <div className="text-sm text-gray-300">HP Combined Power</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">100%</div>
                    <div className="text-sm text-gray-300">Operational Uptime</div>
                  </div>
                </div>
                <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105">
                  Explore Our Fleet
                </button>
              </div>
              <div className="hidden lg:block">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <img src="/All around construction images/excavator-1174428_1280.jpg" alt="Heavy Machinery" className="w-16 h-16 rounded-full mx-auto mb-3 object-cover" />
                      <h3 className="text-white font-semibold text-center">Heavy Equipment</h3>
                      <p className="text-gray-300 text-sm text-center">500+ HP Power</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <img src="/All around construction images/construction-257326_1280.jpg" alt="Crane Operations" className="w-16 h-16 rounded-full mx-auto mb-3 object-cover" />
                      <h3 className="text-white font-semibold text-center">Crane Operations</h3>
                      <p className="text-gray-300 text-sm text-center">200 Ton Capacity</p>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <img src="/All around construction images/pexels-life-of-pix-2489.jpg" alt="Construction Complex" className="w-16 h-16 rounded-full mx-auto mb-3 object-cover" />
                      <h3 className="text-white font-semibold text-center">Operations Hub</h3>
                      <p className="text-gray-300 text-sm text-center">50,000 sq ft</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <img src="/All around construction images/architect-3979490_1280.jpg" alt="Project Management" className="w-16 h-16 rounded-full mx-auto mb-3 object-cover" />
                      <h3 className="text-white font-semibold text-center">Digital Center</h3>
                      <p className="text-gray-300 text-sm text-center">Latest BIM Tech</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Fleet Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Equipment Fleet</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced equipment fleet brings decades of power and precision to every construction project
            </p>
          </div>

          {/* Featured Equipment */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <img
                      src="/All around construction images/excavator-1174428_1280.jpg"
                      alt="Heavy Machinery Division"
                      className="w-24 h-24 rounded-full object-cover mr-6"
                    />
                    <div>
                      <h3 className="text-4xl font-bold">Heavy Machinery Division</h3>
                      <p className="text-orange-400 text-xl">Equipment Operations</p>
                      <p className="text-gray-300">500+ HP Combined Power</p>
                    </div>
                  </div>
                  <p className="text-xl text-gray-300 leading-relaxed mb-8">
                    &quot;Our advanced heavy machinery fleet handles the most demanding construction projects with precision and power.
                    From excavation to site preparation, our equipment delivers exceptional results on every job.&quot;
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-orange-400">100+</div>
                      <div className="text-gray-300 text-sm">Sites Prepared</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-orange-400">500+</div>
                      <div className="text-gray-300 text-sm">HP Power</div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="/All around construction images/excavator-2642387_1280.jpg"
                    alt="Heavy Equipment"
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Equipment Grid with Different Layouts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipmentFleet.slice(1, 7).map((equipment, index) => (
              <div
                key={equipment.id}
                className={`group relative overflow-hidden rounded-2xl shadow-lg ${
                  index === 0 ? 'md:col-span-2 lg:col-span-1' :
                  index === 2 ? 'lg:col-span-2' : ''
                }`}
              >
                <div className={`relative p-8 ${
                  index === 0 ? 'bg-gradient-to-br from-orange-600 to-orange-700 text-white' :
                  index === 2 ? 'bg-gradient-to-br from-gray-50 to-gray-100' : 'bg-white'
                }`}>
                  <div className="flex items-center mb-6">
                    <img
                      src={equipment.image}
                      alt={equipment.name}
                      className="w-20 h-20 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className={`text-2xl font-bold ${index === 0 ? 'text-white' : 'text-gray-900'}`}>
                        {equipment.name}
                      </h4>
                      <p className={`text-lg ${index === 0 ? 'text-orange-100' : 'text-orange-600'}`}>
                        {equipment.type}
                      </p>
                      <p className={`text-sm ${index === 0 ? 'text-gray-300' : 'text-gray-600'}`}>
                        {equipment.power || equipment.capacity || equipment.size || equipment.technology || equipment.experience} • {equipment.projects}
                      </p>
                    </div>
                  </div>

                  <p className={`leading-relaxed mb-6 ${
                    index === 0 ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {equipment.description}
                  </p>

                  <div className="space-y-3">
                    <h5 className={`font-semibold ${index === 0 ? 'text-white' : 'text-gray-900'}`}>
                      Capabilities:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {equipment.capabilities.map((capability, capIndex) => (
                        <span
                          key={capIndex}
                          className={`text-xs px-3 py-1 rounded-full ${
                            index === 0
                              ? 'bg-white/20 text-white'
                              : 'bg-orange-100 text-orange-800'
                          }`}
                        >
                          {capability}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Culture & Values */}
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
            <h2 className="text-5xl font-bold text-white mb-6">Our Equipment Standards</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The values and principles that guide our equipment operations and define our construction excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Power & Precision",
                description: "Our heavy machinery delivers unmatched power and precision for the most demanding construction projects.",
                image: "/All around construction images/excavator-6669780_1280.jpg",
                stat: "500+ HP Fleet"
              },
              {
                icon: "🎯",
                title: "Advanced Technology",
                description: "State-of-the-art equipment with cutting-edge technology ensures superior project outcomes.",
                image: "/All around construction images/architect-3979490_1280.jpg",
                stat: "Latest BIM Tech"
              },
              {
                icon: "🔒",
                title: "Safety First",
                description: "All our equipment meets the highest safety standards, protecting our operations and the community.",
                image: "/All around construction images/pexels-life-of-pix-2489.jpg",
                stat: "100% Safety Record"
              }
            ].map((value, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="bg-orange-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{value.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{value.description}</p>
                <div className="relative mb-4">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                </div>
                <div className="text-orange-400 font-bold">{value.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Partnership */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Partner With Our Equipment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re always expanding our fleet and looking for equipment partnerships and skilled operators
            </p>
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Partner With Us?</h3>
                <div className="space-y-6">
                  {[
                    "Access to state-of-the-art construction projects",
                    "Competitive equipment rental rates",
                    "Professional maintenance and support",
                    "Opportunities for skilled equipment operators",
                    "Partnership with an industry-leading company",
                    "Consistent work on diverse construction sites"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <div className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 text-sm font-bold">
                        ✓
                      </div>
                      <span className="text-gray-700 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
                <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105 mt-8">
                  Contact Equipment Division
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src="/All around construction images/excavator-1174428_1280.jpg" alt="Heavy Equipment" className="w-full h-32 object-cover rounded-lg" />
                  <img src="/All around construction images/construction-257326_1280.jpg" alt="Crane Operations" className="w-full h-24 object-cover rounded-lg" />
                </div>
                <div className="space-y-4 mt-8">
                  <img src="/All around construction images/pexels-life-of-pix-2489.jpg" alt="Construction Complex" className="w-full h-24 object-cover rounded-lg" />
                  <img src="/All around construction images/pexels-bidvine-517980-1249611.jpg" alt="Aerial Operations" className="w-full h-32 object-cover rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}