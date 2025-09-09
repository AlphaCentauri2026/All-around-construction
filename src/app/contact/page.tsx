import { Navigation, Footer } from '../../components';
import company from '../../data/company.json';

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section with Contact Preview */}
      <section className="relative h-screen pt-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/Leonardo_Vision_XL_Aerial_view_of_a_modern_construction_site_w_0.jpg"
            alt="Contact Us"
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
                    Get In Touch
                  </span>
                </div>
                <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
                  Let&apos;s Build
                  <span className="block text-orange-400">Something Great</span>
                  <span className="block">Together</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Ready to start your construction project? Get in touch with our team of experts 
                  for a free consultation and quote.
                </p>
                <div className="flex items-center space-x-8 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">24/7</div>
                    <div className="text-sm text-gray-300">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">Free</div>
                    <div className="text-sm text-gray-300">Consultation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">24h</div>
                    <div className="text-sm text-gray-300">Response</div>
                  </div>
                </div>
                <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105">
                  Get Free Quote
                </button>
              </div>
              <div className="hidden lg:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-6">Quick Contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white font-semibold">Call Us</div>
                        <div className="text-gray-300">{company.phone}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white font-semibold">Email Us</div>
                        <div className="text-gray-300">{company.email}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white font-semibold">Visit Us</div>
                        <div className="text-gray-300">{company.address.city}, {company.address.state}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info with Split Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Get Your Free Quote</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fill out the form below and our team will get back to you within 24 hours with a detailed quote
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 shadow-2xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      First Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-lg"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-lg"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-lg"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-lg"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Project Type *
                  </label>
                  <select className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-lg">
                    <option>Select a service...</option>
                    <option>Residential Construction</option>
                    <option>Commercial Construction</option>
                    <option>Remodeling & Renovations</option>
                    <option>Foundation & Structural Work</option>
                    <option>Electrical & Plumbing</option>
                    <option>Roofing & Siding</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Project Budget
                  </label>
                  <select className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-lg">
                    <option>Select budget range...</option>
                    <option>Under $25,000</option>
                    <option>$25,000 - $50,000</option>
                    <option>$50,000 - $100,000</option>
                    <option>$100,000 - $250,000</option>
                    <option>$250,000 - $500,000</option>
                    <option>Over $500,000</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Message *
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-none text-lg"
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition duration-300 transform hover:scale-105 shadow-lg"
                >
                  Send Message & Get Quote
                </button>
              </form>
            </div>

            {/* Contact Information & Team */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-3xl p-8 text-white">
                <h3 className="text-3xl font-bold mb-8">Contact Information</h3>
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Office Address</h4>
                      <p className="text-orange-100 text-lg leading-relaxed">
                        {company.address.street}<br />
                        {company.address.city}, {company.address.state} {company.address.zip}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Phone Number</h4>
                      <p className="text-orange-100 text-lg">{company.phone}</p>
                      <p className="text-orange-200 text-sm">Mon-Fri: 8AM-6PM, Sat: 9AM-4PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Email Address</h4>
                      <p className="text-orange-100 text-lg">{company.email}</p>
                      <p className="text-orange-200 text-sm">We reply within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Equipment Contact */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Equipment Divisions</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <img src="/images/Leonardo_Vision_XL_Closeup_of_construction_machinery_like_bull_0.jpg" alt="Heavy Machinery" className="w-20 h-20 rounded-full mx-auto mb-3 object-cover" />
                    <h4 className="font-bold text-gray-900">Heavy Equipment</h4>
                    <p className="text-orange-600 text-sm font-semibold">500+ HP Power</p>
                    <p className="text-gray-500 text-xs">equipment@company.com</p>
                  </div>
                  <div className="text-center">
                    <img src="/images/Leonardo_Vision_XL_Commercial_building_under_construction_cran_0.jpg" alt="Crane Operations" className="w-20 h-20 rounded-full mx-auto mb-3 object-cover" />
                    <h4 className="font-bold text-gray-900">Crane Division</h4>
                    <p className="text-orange-600 text-sm font-semibold">200 Ton Capacity</p>
                    <p className="text-gray-500 text-xs">crane@company.com</p>
                  </div>
                  <div className="text-center">
                    <img src="/images/Leonardo_Vision_XL_Modern_construction_office_interior_with_ar_0.jpg" alt="Project Management" className="w-20 h-20 rounded-full mx-auto mb-3 object-cover" />
                    <h4 className="font-bold text-gray-900">Project Hub</h4>
                    <p className="text-orange-600 text-sm font-semibold">Digital Operations</p>
                    <p className="text-gray-500 text-xs">projects@company.com</p>
                  </div>
                  <div className="text-center">
                    <img src="/images/Leonardo_Vision_XL_Exterior_view_of_a_modern_construction_comp_0.jpg" alt="Construction Complex" className="w-20 h-20 rounded-full mx-auto mb-3 object-cover" />
                    <h4 className="font-bold text-gray-900">Main Complex</h4>
                    <p className="text-orange-600 text-sm font-semibold">Operations Center</p>
                    <p className="text-gray-500 text-xs">office@company.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section with Enhanced Design */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: "url('/images/Leonardo_Vision_XL_Aerial_view_of_a_modern_construction_site_w_3.jpg')",
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Visit Our Office</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Located in the heart of {company.address.city}, our office is easily accessible and ready to welcome you
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Our Location</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-orange-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-lg">{company.address.street}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-orange-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="text-lg">{company.address.city}, {company.address.state} {company.address.zip}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-orange-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg">Mon-Fri: 8AM-6PM, Sat: 9AM-4PM</span>
                  </div>
                </div>
                <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition duration-300 transform hover:scale-105 mt-8">
                  Get Directions
                </button>
              </div>
              <div className="relative">
                <img
                  src="/images/Leonardo_Vision_XL_Exterior_view_of_a_modern_construction_comp_1.jpg"
                  alt="Office Location"
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Don&apos;t wait - get your free consultation and quote today. Our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105">
              Call Now: {company.phone}
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold py-4 px-8 rounded-lg text-lg transition duration-300">
              Email Us: {company.email}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}