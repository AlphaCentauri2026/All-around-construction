import { Navigation, Footer } from '../components';
import company from '../data/company.json';
import services from '../data/services.json';
import projects from '../data/projects.json';
import testimonials from '../data/testimonials.json';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Trust Building Top Bar */}
      <section className="bg-slate-900 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>20+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>500+ Projects Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Free Consultation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Split Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
                  TRUSTED CONSTRUCTION EXPERTS
                </span>
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Building Your
                  <span className="text-orange-600 block">Future Today</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                  {company.description}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 py-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">20+</div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">500+</div>
                  <div className="text-sm text-slate-600">Projects Done</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">100%</div>
                  <div className="text-sm text-slate-600">Satisfaction</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get Free Estimate
                </button>
                <button className="border-2 border-slate-300 text-slate-700 hover:border-orange-600 hover:text-orange-600 font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  View Our Projects
                </button>
              </div>
            </div>

            {/* Right Side - Image Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
                    <img
                      src="/All around construction images/pexels-life-of-pix-2489.jpg"
                      alt="Modern Construction Company"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500 delay-100">
                    <img
                      src="/All around construction images/architect-3979490_1280.jpg"
                      alt="Construction Management Office"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="aspect-square rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500 delay-200">
                    <img
                      src="/All around construction images/excavator-1174428_1280.jpg"
                      alt="Heavy Construction Equipment"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500 delay-300">
                    <img
                      src="/All around construction images/pexels-rezwan-1145434.jpg"
                      alt="Construction Site Overview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              {/* Floating CTA Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-6 max-w-xs border-l-4 border-orange-600">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Licensed & Bonded</div>
                    <div className="text-sm text-slate-600">Since 2004</div>
                  </div>
                </div>
                <p className="text-sm text-slate-600">
                  Fully insured with comprehensive coverage for all your construction needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              OUR SERVICES
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Comprehensive Construction Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From concept to completion, we deliver exceptional construction services
              with modern techniques and premium materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service) => (
              <div key={service.id} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  {service.id === 1 && (
                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  )}
                  {service.id === 2 && (
                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )}
                  {service.id === 3 && (
                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  )}
                  {service.id === 4 && (
                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                  {service.id === 5 && (
                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )}
                  {service.id === 6 && (
                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                <button className="text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-300 flex items-center gap-2 group">
                  Learn More
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              OUR WORK
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore our portfolio of successful construction projects that showcase our expertise and commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 6).map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-slate-200 line-clamp-3">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              TESTIMONIALS
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about our construction services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-slate-700 mb-6 leading-relaxed">
                  &ldquo;{testimonial.feedback}&rdquo;
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-600 font-bold text-lg">
                      {testimonial.name.split(' ')[0][0]}{testimonial.name.split(' ')[1]?.[0] || ''}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.project}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/All around construction images/construction-4754309_1280.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Build Your Dream Project?
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Let&apos;s discuss your construction needs and create something extraordinary together.
                Our team is ready to bring your vision to life with expertise and precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Start Your Project
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Call (555) 123-4567
                </button>
              </div>
            </div>
            <div className="text-white text-center lg:text-right">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                  <div className="text-sm">Emergency Support</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-orange-400 mb-2">30-Day</div>
                  <div className="text-sm">Warranty</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-orange-400 mb-2">$10M</div>
                  <div className="text-sm">Insurance Coverage</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-orange-400 mb-2">50+</div>
                  <div className="text-sm">Expert Team Members</div>
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