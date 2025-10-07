import { Users, Target, Heart, Award } from 'lucide-react';

export function About() {
  const team = [
    {
      name: 'Jennifer Martinez',
      role: 'Chief Executive Officer',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'David Thompson',
      role: 'Director of Operations',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Lisa Chen',
      role: 'Financial Controller',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Robert Williams',
      role: 'Community Relations Manager',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">About PropertyPro</h1>
          <p className="text-xl text-slate-200 max-w-3xl">
            Leading property management services with a commitment to excellence, innovation, and community building.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 mb-4">
                Founded in 2004, Ocean Management has grown from a small local operation to one of the region's most trusted property management companies. Our journey began with a simple mission: to provide exceptional service that puts community needs first.
              </p>
              <p className="text-lg text-slate-600 mb-4">
                Today, we manage over 500 properties, serving thousands of homeowners and residents. Our success is built on strong relationships, transparent communication, and a commitment to leveraging technology for better outcomes.
              </p>
              <p className="text-lg text-slate-600">
                We continue to evolve and adapt to the changing needs of modern communities while maintaining the personal touch that has defined our service from the beginning.
              </p>
            </div>
            <img
              src="https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Our office building"
              className="rounded-2xl shadow-2xl"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="text-center p-8 bg-slate-50 rounded-xl">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Mission</h3>
              <p className="text-slate-600">
                To deliver exceptional property management services that enhance community value, foster positive relationships, and provide peace of mind to property owners and residents.
              </p>
            </div>

            <div className="text-center p-8 bg-slate-50 rounded-xl">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Values</h3>
              <p className="text-slate-600">
                Integrity, transparency, responsiveness, and innovation guide everything we do. We believe in treating every property as if it were our own and every client as a valued partner.
              </p>
            </div>

            <div className="text-center p-8 bg-slate-50 rounded-xl">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Vision</h3>
              <p className="text-slate-600">
                To be the most trusted and innovative property management company in the region, setting new standards for service excellence and community engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-slate-600 font-medium">Properties Managed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-slate-600 font-medium">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">5,000+</div>
              <div className="text-slate-600 font-medium">Happy Homeowners</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-slate-600 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
