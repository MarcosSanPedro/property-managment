import { Link } from 'react-router-dom';
import { Building2, Users, Shield, TrendingUp, Clock, Award, ArrowRight, CheckCircle, Star } from 'lucide-react';

export function Home() {
  const services = [
    {
      icon: Building2,
      title: 'Financial Management',
      description: 'Comprehensive accounting, budgeting, and financial reporting services.'
    },
    {
      icon: Users,
      title: 'Community Relations',
      description: 'Foster positive relationships between boards, owners, and residents.'
    },
    {
      icon: Shield,
      title: 'Risk & Compliance',
      description: 'Insurance coordination and regulatory compliance management.'
    },
    {
      icon: TrendingUp,
      title: 'Technology Solutions',
      description: 'Modern portal access and real-time community management tools.'
    }
  ];

  const features = [
    'Responsive 24/7 Support',
    'Technology-Driven Solutions',
    'Experienced Team',
    'Transparent Reporting',
    'Proactive Maintenance',
    'Board Member Training'
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'HOA Board President',
      property: 'Sunset Gardens',
      quote: 'Ocean Property Management transformed how we manage our community. Their technology platform makes everything seamless.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Property Owner',
      property: 'Harbor View Condos',
      quote: 'Professional, responsive, and always available. Best property management company we have worked with.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Board Treasurer',
      property: 'Lakeside Estates',
      quote: 'Their financial reporting is transparent and easy to understand. Highly recommend their services.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('/hero.webp')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Professional Property Management You Can Trust
            </h1>
            <p className="text-xl text-slate-200 mb-8 leading-relaxed">
              We provide comprehensive property and association management services for condos, HOAs, and commercial properties with technology-driven solutions and personalized care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
              >
                Request Proposal
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 font-semibold rounded-lg transition"
              >
                Client Portal
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive property management solutions tailored to your community's needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-xl hover:border-blue-300 transition group"
                >
                  <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-xl mb-4 group-hover:bg-blue-600 transition">
                    <Icon className="h-7 w-7 text-blue-600 group-hover:text-white transition" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                  <Link to="/services" className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Choose Us?</h2>
              <p className="text-lg text-slate-600 mb-8">
                With over 20 years of experience, we combine traditional values with modern technology to deliver exceptional property management services.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
              >
                Learn About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="/why-us.jpeg"
                alt="Modern residential community"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">500+</div>
                    <div className="text-sm text-slate-600">Properties Managed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-slate-600">
              Trusted by hundreds of communities across the region
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:shadow-lg transition"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.role}</div>
                  <div className="text-sm text-slate-500">{testimonial.property}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for a free consultation and discover how we can help manage your property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-slate-100 text-blue-600 font-semibold rounded-lg transition"
            >
              Request Proposal
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-blue-700 text-white font-semibold rounded-lg border-2 border-white transition"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
