import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Blog() {
  const posts = [
    {
      title: '10 Tips for Effective HOA Board Leadership',
      excerpt: 'Learn essential strategies for running a successful homeowners association board and building community engagement.',
      category: 'Leadership',
      author: 'Jennifer Martinez',
      date: '2024-10-01',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Understanding Reserve Funds: A Complete Guide',
      excerpt: 'Everything you need to know about building and maintaining adequate reserve funds for your property.',
      category: 'Financial',
      author: 'Lisa Chen',
      date: '2024-09-28',
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Preventive Maintenance: Save Money Long-Term',
      excerpt: 'Discover how proactive maintenance programs can reduce costs and extend the life of your property assets.',
      category: 'Maintenance',
      author: 'Robert Williams',
      date: '2024-09-22',
      image: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Technology Trends in Property Management',
      excerpt: 'Explore the latest technological innovations transforming how communities are managed today.',
      category: 'Technology',
      author: 'David Thompson',
      date: '2024-09-15',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Managing Difficult Homeowner Situations',
      excerpt: 'Professional strategies for addressing conflicts and maintaining positive community relationships.',
      category: 'Community',
      author: 'Jennifer Martinez',
      date: '2024-09-10',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Insurance Claims: What Board Members Need to Know',
      excerpt: 'Navigate the insurance claims process effectively with this comprehensive guide for HOA boards.',
      category: 'Insurance',
      author: 'Lisa Chen',
      date: '2024-09-05',
      image: 'https://images.pexels.com/photos/5668838/pexels-photo-5668838.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Blog & Insights</h1>
          <p className="text-xl text-slate-200 max-w-3xl">
            Expert advice, industry insights, and helpful tips for property management success.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                    </div>
                  </div>
                  <Link to="#" className="inline-flex items-center text-blue-600 font-medium mt-4 hover:text-blue-700">
                    Read more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
