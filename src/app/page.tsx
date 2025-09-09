import { Navigation, Footer } from '../components';
import company from '../data/company.json';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section with Parallax Effect */}
      <section
        className="relative h-screen bg-cover bg-center bg-fixed pt-16"
        style={{
          backgroundImage: "url('/images/Leonardo_Vision_XL_Commercial_building_under_construction_cran_1.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent"></div>
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="text-center text-white max-w-5xl">
            <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-white shadow-2xl bg-orange-600 flex items-center justify-center">
              <span className="text-white font-bold text-5xl">AC</span>
            </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              {company.name}
            </h1>
            <p className="text-2xl md:text-3xl mb-8 font-light">
              {company.tagline}
            </p>
            <div className="flex justify-center space-x-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400">20+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400">500+</div>
                <div className="text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400">100%</div>
                <div className="text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section with Diagonal Layout */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="inline-block">
                <span className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Welcome
                </span>
              </div>
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                Your Trusted Construction Partner
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {company.description}
              </p>
              <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-orange-600">
                <p className="text-gray-700 italic">
                  "We believe every construction project is an opportunity to create something extraordinary. 
                  From the first blueprint to the final nail, we pour our passion and expertise into every detail."
                </p>
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/images/Leonardo_Vision_XL_Exterior_view_of_a_modern_construction_comp_2.jpg"
                    alt="Modern Construction Company"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/images/Leonardo_Vision_XL_Modern_construction_office_interior_with_ar_3.jpg"
                    alt="Construction Management Office"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/images/Leonardo_Vision_XL_Closeup_of_construction_machinery_like_bull_3.jpg"
                    alt="Heavy Construction Equipment"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/images/Leonardo_Vision_XL_Construction_site_overview_showing_foundati_2.jpg"
                    alt="Construction Site Overview"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section with Cards */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: "url('/images/Leonardo_Vision_XL_Commercial_building_under_construction_cran_2.jpg')",
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Why Choose Us</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles and values that make us the right choice for your construction needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="bg-orange-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🏗️</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quality First</h3>
              <p className="text-gray-300 leading-relaxed">
                We never compromise on quality, using only the finest materials and employing skilled craftsmen 
                who take pride in their work.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="bg-orange-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⏰</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Timely Delivery</h3>
              <p className="text-gray-300 leading-relaxed">
                We respect your time and deliver projects on schedule, every time. Our project management 
                ensures efficient workflow and timely completion.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="bg-orange-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Integrity</h3>
              <p className="text-gray-300 leading-relaxed">
                Honest communication, transparent pricing, and ethical business practices in all our dealings. 
                Your trust is our most valuable asset.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Start Your Project?</h2>
          <p className="text-xl text-orange-100 leading-relaxed mb-8">
            Transform your construction dreams into reality through exceptional craftsmanship, 
            innovative solutions, and unwavering commitment to excellence. We build not just structures, 
            but lasting relationships and communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105">
              Get Free Quote
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold py-4 px-8 rounded-lg text-lg transition duration-300">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}