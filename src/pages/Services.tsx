import { DollarSign, Wrench, Shield, Smartphone, Building, Home, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Services() {
  const mainServices = [
    {
      icon: DollarSign,
      title: 'Financial & Accounting Management',
      description: 'Comprehensive financial services to keep your community fiscally healthy.',
      features: [
        'Monthly financial statements',
        'Budget preparation and management',
        'Assessment collection',
        'Accounts payable/receivable',
        'Annual audit coordination',
        'Reserve fund analysis'
      ]
    },
    {
      icon: Wrench,
      title: 'Physical & Maintenance Management',
      description: 'Proactive maintenance and facility management services.',
      features: [
        'Vendor management and oversight',
        'Preventive maintenance programs',
        'Emergency response 24/7',
        'Property inspections',
        'Project management',
        'Common area maintenance'
      ]
    },
    {
      icon: Shield,
      title: 'Insurance & Risk Management',
      description: 'Protect your community with comprehensive insurance coordination.',
      features: [
        'Insurance policy review',
        'Claims assistance',
        'Risk assessment',
        'Safety compliance',
        'Liability management',
        'Coverage recommendations'
      ]
    },
    {
      icon: Smartphone,
      title: 'Technology & Innovation',
      description: 'Modern tools and platforms for efficient community management.',
      features: [
        'Online payment portal',
        'Document management system',
        'Work order tracking',
        'Board member portal',
        'Real-time reporting',
        'Mobile app access'
      ]
    }
  ];

  const propertyTypes = [
    {
      icon: Building,
      title: 'Condominiums',
      description: 'Specialized management for condominium associations of all sizes.'
    },
    {
      icon: Home,
      title: 'HOAs',
      description: 'Comprehensive services for homeowners associations and planned communities.'
    },
    {
      icon: Building,
      title: 'Commercial Properties',
      description: 'Professional management for commercial buildings and mixed-use properties.'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-slate-200 max-w-3xl">
            Comprehensive property management solutions designed to enhance your community's value and quality of life.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl">
                        <Icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-slate-900">{service.title}</h2>
                    </div>
                    <p className="text-lg text-slate-600 mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <img
                      src={`https://images.pexels.com/photos/${
                        [3184291, 1370704, 5668858, 5926382][index]
                      }/pexels-photo-${
                        [3184291, 1370704, 5668858, 5926382][index]
                      }.jpeg?auto=compress&cs=tinysrgb&w=800`}
                      alt={service.title}
                      className="rounded-2xl shadow-2xl"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Property Types We Manage</h2>
            <p className="text-xl text-slate-600">
              Specialized expertise for every type of community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {propertyTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-xl transition"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-6 mx-auto">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 text-center">{type.title}</h3>
                  <p className="text-slate-600 text-center">{type.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Excellence?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let us show you how our comprehensive services can benefit your community.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white hover:bg-slate-100 text-blue-600 font-semibold rounded-lg transition"
          >
            Request a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
