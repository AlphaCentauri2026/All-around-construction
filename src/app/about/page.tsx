import { Navigation, Footer } from '../../components';
import company from '../../data/company.json';

export default function About() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center bg-no-repeat pt-16"
        style={{
          backgroundImage: "url('/images/Leonardo_Vision_XL_Aerial_view_of_a_modern_construction_site_w_0.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About {company.name}
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Our Story, Mission, and Commitment to Excellence
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {company.description}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Founded in 2008, All-Around Construction began as a small family business with a simple mission: to provide exceptional construction services that exceed client expectations. What started as a local operation has grown into one of the most trusted construction companies in the region, completing over 500 projects and maintaining a 100% client satisfaction rate.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our growth has been built on a foundation of integrity, quality craftsmanship, and unwavering commitment to our clients. We believe that every construction project is an opportunity to create something extraordinary, and we approach each job with the same dedication and attention to detail that we brought to our very first project.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/Leonardo_Vision_XL_Exterior_view_of_a_modern_construction_comp_0.jpg"
                alt="Modern Construction Company"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h3 className="text-3xl font-bold text-center mb-8">Our Achievements</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">20+</span>
                </div>
                <h4 className="text-lg font-semibold">Years Experience</h4>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">500+</span>
                </div>
                <h4 className="text-lg font-semibold">Projects Completed</h4>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">100%</span>
                </div>
                <h4 className="text-lg font-semibold">Client Satisfaction</h4>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">25+</span>
                </div>
                <h4 className="text-lg font-semibold">Heavy Machines</h4>
              </div>
            </div>
          </div>

          {/* Equipment Gallery */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8">Our Equipment & Facilities</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { src: "/images/Leonardo_Vision_XL_Closeup_of_construction_machinery_like_bull_0.jpg", alt: "Heavy Machinery", title: "Heavy Equipment", desc: "Advanced bulldozers & excavators" },
                { src: "/images/Leonardo_Vision_XL_Modern_construction_office_interior_with_ar_0.jpg", alt: "Modern Office", title: "Project Management", desc: "State-of-the-art planning facilities" },
                { src: "/images/Leonardo_Vision_XL_Commercial_building_under_construction_cran_0.jpg", alt: "Construction Crane", title: "Crane Operations", desc: "High-rise construction capabilities" },
                { src: "/images/Leonardo_Vision_XL_Exterior_view_of_a_modern_construction_comp_0.jpg", alt: "Construction Complex", title: "Modern Facilities", desc: "Professional construction complex" }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission & Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-4">
                To provide exceptional construction services that exceed our clients&apos; expectations while maintaining the highest standards of safety and quality. We are committed to building lasting relationships through integrity, innovation, and superior craftsmanship.
              </p>
              <p className="text-gray-700 mb-4">
                Every project we undertake is an opportunity to demonstrate our dedication to excellence and our passion for creating spaces that inspire and endure.
              </p>
              <img
                src="/images/Leonardo_Vision_XL_Construction_site_overview_showing_foundati_0.jpg"
                alt="Our Mission"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <ul className="text-gray-700 space-y-3 mb-4">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Quality craftsmanship in every project, no matter the size</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Safety as our top priority for our team and clients</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Honesty and transparency in all communications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Community involvement and local partnerships</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Environmental responsibility and sustainable practices</span>
                </li>
              </ul>
              <img
                src="/images/Leonardo_Vision_XL_Renovation_project_inside_a_modern_office_c_0.jpg"
                alt="Our Values"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Company History Timeline */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8">
            <h3 className="text-3xl font-bold text-center mb-8">Our Journey</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2008</div>
                <h4 className="text-xl font-bold mb-2">Company Founded</h4>
                <p className="text-gray-600">Started as a small family business with a vision for quality construction</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2015</div>
                <h4 className="text-xl font-bold mb-2">Rapid Growth</h4>
                <p className="text-gray-600">Expanded team and services to meet growing demand in the region</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2024</div>
                <h4 className="text-xl font-bold mb-2">Industry Leader</h4>
                <p className="text-gray-600">Recognized as one of the most trusted construction companies with 500+ completed projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}