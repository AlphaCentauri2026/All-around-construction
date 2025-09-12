import { Navigation, Footer } from '../../components';
import testimonials from '../../data/testimonials.json';

export default function Testimonials() {
  const additionalTestimonials = [
    {
      id: 7,
      name: "Thompson Construction Services",
      feedback: "Construction Template exceeded our expectations with their professional heavy equipment operations and modern construction techniques. They were always on time and kept us informed throughout the foundation work process.",
      rating: 5,
      image: "/All around construction images/pexels-rezwan-1078884.jpg",
      project: "Foundation & Site Work"
    },
    {
      id: 8,
      name: "Martinez Development Group",
      feedback: "Working with Construction Template was a pleasure. Their attention to detail in machinery operations and commitment to excellence is unmatched. Would definitely hire them again!",
      rating: 5,
      image: "/All around construction images/excavator-2642387_1280.jpg",
      project: "Heavy Equipment Operations"
    },
    {
      id: 9,
      name: "Davis Commercial Properties",
      feedback: "The quality of work from Construction Template is outstanding. They transformed our commercial space using modern construction techniques and crane operations.",
      rating: 5,
      image: "/All around construction images/construction-257326_1280.jpg",
      project: "Commercial Construction"
    },
    {
      id: 10,
      name: "Johnson Property Management",
      feedback: "From consultation to completion, Construction Template provided exceptional service. Their expertise in residential construction and professionalism made our project a success.",
      rating: 5,
      image: "/All around construction images/pexels-rezwan-1216544.jpg",
      project: "Residential Development"
    },
    {
      id: 11,
      name: "Thompson Office Solutions",
      feedback: "Construction Template delivered exactly what they promised. Their modern renovation techniques and project management were top-notch throughout our office renovation.",
      rating: 5,
      image: "/All around construction images/pexels-sevenstormphotography-439416.jpg",
      project: "Office Renovation"
    },
    {
      id: 12,
      name: "Rodriguez Construction Management",
      feedback: "We couldn't be happier with our new construction management facility. Construction Template's quality work and advanced equipment made the entire process enjoyable.",
      rating: 5,
      image: "/All around construction images/architect-1080589_1280.jpg",
      project: "Construction Management"
    }
  ];

  const allTestimonials = [...testimonials, ...additionalTestimonials];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section with Testimonial Carousel Preview */}
      <section className="relative h-screen pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/All around construction images/pexels-bidvine-517980-1249611.jpg"
            alt="Client Testimonials"
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
                    Client Stories
                  </span>
                </div>
                <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
                  Client
                  <span className="block text-orange-400">Testimonials</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Discover why our clients choose us for their construction needs and what makes us their trusted partner.
                </p>
                <div className="flex items-center space-x-8 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">500+</div>
                    <div className="text-sm text-gray-300">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400 flex items-center gap-1">
                      4.9
                      <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div className="text-sm text-gray-300">Average Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">98%</div>
                    <div className="text-sm text-gray-300">Repeat Business</div>
                  </div>
                </div>
                <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105">
                  Read All Reviews
                </button>
              </div>
              <div className="hidden lg:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center mb-6">
                    <img
                      src="/All around construction images/pexels-life-of-pix-2489.jpg"
                      alt="Client"
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-white">Johnson Property Development</h3>
                      <p className="text-gray-300">Modern Construction Project</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 italic leading-relaxed">
                    &quot;Outstanding modern construction techniques and attention to detail! They delivered exceptional quality in our residential development project.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials with Large Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Featured Reviews</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real clients who experienced our exceptional service
            </p>
          </div>

          {/* Large Featured Testimonial */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-3xl p-12 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <img
                      src="/All around construction images/construction-4754309_1280.jpg"
                      alt="Featured Client"
                      className="w-20 h-20 rounded-full object-cover mr-6"
                    />
                    <div>
                      <h3 className="text-3xl font-bold">Chen Commercial Group</h3>
                      <p className="text-orange-100 text-lg">Construction Client</p>
                      <p className="text-orange-200">Commercial Construction Project</p>
                    </div>
                  </div>
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-2xl leading-relaxed italic mb-8">
                    &quot;Construction Template delivered exactly what they promised. Their modern construction techniques and crane operations were top-notch throughout our commercial build. They completed on time and within budget using state-of-the-art equipment. Highly recommend!&quot;
                  </blockquote>
                  <div className="flex items-center">
                    <div className="bg-white/20 rounded-lg p-4 mr-6">
                      <div className="text-2xl font-bold">$2.5M</div>
                      <div className="text-sm">Project Value</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4 mr-6">
                      <div className="text-2xl font-bold">8</div>
                      <div className="text-sm">Months</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="text-2xl font-bold">100%</div>
                      <div className="text-sm">Satisfaction</div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="/All around construction images/construction-257326_1280.jpg"
                    alt="Commercial Project"
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Grid with Different Sizes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTestimonials.slice(0, 6).map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`group relative overflow-hidden rounded-2xl shadow-lg ${
                  index === 0 ? 'md:col-span-2 lg:col-span-1' : 
                  index === 2 ? 'lg:col-span-2' : ''
                }`}
              >
                <div className={`relative p-8 ${
                  index === 0 ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white' :
                  index === 2 ? 'bg-gradient-to-br from-orange-50 to-orange-100' : 'bg-white'
                }`}>
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className={`font-bold ${index === 0 ? 'text-white' : 'text-gray-900'}`}>
                        {testimonial.name}
                      </h4>
                      <p className={`text-sm ${index === 0 ? 'text-gray-300' : 'text-gray-600'}`}>
                        {testimonial.project || 'Happy Client'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className={`w-5 h-5 ${
                        index === 0 ? 'text-yellow-300' : 'text-orange-400'
                      }`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <blockquote className={`italic leading-relaxed mb-6 ${
                    index === 0 ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    &quot;{testimonial.feedback}&quot;
                  </blockquote>
                  
                  <div className="flex items-center justify-between">
                    <span className={`text-sm ${
                      index === 0 ? 'text-gray-400' : 'text-gray-500'
                    }`}>Verified Customer</span>
                    <span className={`text-sm font-semibold flex items-center gap-1 ${
                      index === 0 ? 'text-orange-400' : 'text-orange-600'
                    }`}>
                      5.0
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
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
            <h2 className="text-5xl font-bold text-white mb-6">Success Stories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real projects, real results, real satisfaction from our valued clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Johnson Property Development",
                project: "Modern Residential Complex",
                image: "/All around construction images/pexels-life-of-pix-2489.jpg",
                projectImage: "/All around construction images/architect-1080589_1280.jpg",
                quote: "They delivered exceptional quality in our residential development using modern construction techniques.",
                value: "$2.5M",
                duration: "12 months"
              },
              {
                name: "Chen Commercial Group",
                project: "Commercial Tower Project",
                image: "/All around construction images/construction-4754309_1280.jpg",
                projectImage: "/All around construction images/construction-257326_1280.jpg",
                quote: "Professional crane operations and modern construction techniques throughout our commercial project.",
                value: "$8.5M",
                duration: "18 months"
              },
              {
                name: "Park Office Solutions",
                project: "Office Renovation",
                image: "/All around construction images/pexels-sevenstormphotography-439416.jpg",
                projectImage: "/All around construction images/pexels-pixabay-534220.jpg",
                quote: "Quality renovation work using advanced construction methods made the process enjoyable.",
                value: "$450K",
                duration: "3 months"
              }
            ].map((story, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white">{story.name}</h3>
                    <p className="text-gray-300">{story.project}</p>
                  </div>
                </div>
                <div className="relative mb-6">
                  <img 
                    src={story.projectImage} 
                    alt={story.project}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                </div>
                <blockquote className="text-gray-300 italic mb-6 leading-relaxed">
                  &quot;{story.quote}&quot;
                </blockquote>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-orange-400 font-bold text-lg">{story.value}</div>
                    <div className="text-gray-400 text-sm">Project Value</div>
                  </div>
                  <div>
                    <div className="text-orange-400 font-bold text-lg">{story.duration}</div>
                    <div className="text-gray-400 text-sm">Duration</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Why Clients Trust Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our track record speaks for itself - here&apos;s what sets us apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ),
                title: "Award Winning",
                description: "Recognized for excellence in construction and customer service",
                stat: "15+ Awards"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "On-Time Delivery",
                description: "We complete projects on schedule, every time",
                stat: "98% On-Time"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                ),
                title: "Budget Conscious",
                description: "Transparent pricing with no hidden costs",
                stat: "100% Transparent"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Fully Insured",
                description: "Licensed, bonded, and insured for your protection",
                stat: "Fully Licensed"
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="bg-orange-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                <div className="text-orange-600 font-bold text-lg">{item.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Happy Clients?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Let us create your success story with exceptional construction services
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