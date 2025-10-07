import { FileText, Download, HelpCircle } from 'lucide-react';

export function Resources() {
  const documents = [
    { title: 'Property Management Guide', category: 'Guide', size: '2.5 MB' },
    { title: 'HOA Financial Best Practices', category: 'Financial', size: '1.8 MB' },
    { title: 'Maintenance Checklist', category: 'Maintenance', size: '0.5 MB' },
    { title: 'Board Member Handbook', category: 'Governance', size: '3.2 MB' }
  ];

  const faqs = [
    {
      question: 'What types of properties do you manage?',
      answer: 'We manage a variety of property types including homeowners associations (HOAs), condominium associations, commercial properties, and mixed-use developments of all sizes.'
    },
    {
      question: 'How are management fees structured?',
      answer: 'We offer flexible fee structures based on property size and services needed. Contact us for a custom quote tailored to your community.'
    },
    {
      question: 'How do I make a payment?',
      answer: 'Homeowners can make payments through our online portal, by check, or through automatic bank draft. Simply log in to your account to set up your preferred payment method.'
    },
    {
      question: 'Can I access documents online?',
      answer: 'Yes! All homeowners and board members have access to our online portal where you can view and download governing documents, meeting minutes, financial statements, and other important files 24/7.'
    },
    {
      question: 'How do I submit a maintenance request?',
      answer: 'Maintenance requests can be submitted through our online portal, mobile app, email, or phone. You can also track the status of your requests in real-time through the portal.'
    },
    {
      question: 'How often will I receive financial reports?',
      answer: 'Financial reports are provided monthly and include detailed income statements, balance sheets, accounts receivable aging, and budget variance analysis. Board members also have real-time access through our online portal.'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Resources</h1>
          <p className="text-xl text-slate-200 max-w-3xl">
            Helpful guides, documents, and frequently asked questions for property owners and board members.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-5">Downloads & Forms</h2>
          <p className="text-gray-600 mb-12">
              Access important documents and forms. Homeowners can find additional resources in the
              client portal.
            </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documents.map((doc, index) => (
              <div key={index} className="flex items-center justify-between p-6 bg-slate-50 rounded-xl border border-slate-200 hover:shadow-lg transition">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{doc.title}</h3>
                    <p className="text-sm text-slate-600">{doc.category} · {doc.size}</p>
                  </div>
                </div>
                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                  <Download className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8">
            <div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Need access to more documents?</h3>
                <p className="text-slate-600 mb-4">
                  Homeowners and board members can access the full document library, including
                  governing documents, meeting minutes, and financial reports through the client
                  portal.
                </p>
                <a
                  href={import.meta.env.VITE_CLIENT_PORTAL_URL || 'https://portal.example.com'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                >
                  Access Portal
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-12">
            <HelpCircle className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
