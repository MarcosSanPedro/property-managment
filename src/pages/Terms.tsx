import { CheckCircle2, ExternalLink, Shield, FileText, Gavel, Mail, Phone, MapPin, Clock } from 'lucide-react';

export function Terms() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Terms of Service</h1>
          <p className="mt-3 text-slate-200">Last updated: October 2025</p>
        </div>
      </section>

      {/* Intro */}
      <section className="-mt-8 pb-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
            <p className="text-slate-700">
              These Terms govern your use of the Ocean Property Management website and services. By accessing or using the site,
              you agree to these Terms.
            </p>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle2 className="h-5 w-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-slate-900">Use of the Site</h2>
            </div>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Comply with all applicable laws while using the site</li>
              <li>No misuse, interference, scraping, or unauthorized access methods</li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-3">
              <ExternalLink className="h-5 w-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-slate-900">Client Portal and Third-Party Services</h2>
            </div>
            <p className="text-slate-700">
              Links to third-party services, including the Client Portal, are provided for convenience. Your use of those
              services is governed by the third party's terms and policies. We are not responsible for third-party content
              or practices.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="h-5 w-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-slate-900">Content and Intellectual Property</h2>
            </div>
            <p className="text-slate-700">
              The site, including text, graphics, logos, and design elements, is owned by Ocean Property Management or our
              licensors and protected by intellectual property laws. You may not reproduce, distribute, or create
              derivative works without permission.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="h-5 w-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-slate-900">Disclaimers</h2>
            </div>
            <p className="text-slate-700">
              The site is provided on an "as is" and "as available" basis. We disclaim all warranties, express or
              implied, including merchantability, fitness for a particular purpose, and non-infringement. We do not
              warrant that the site will be error-free, secure, or available at all times.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-3">
              <Gavel className="h-5 w-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-slate-900">Limitation of Liability</h2>
            </div>
            <p className="text-slate-700">
              To the fullest extent permitted by law, Ocean Property Management is not liable for any indirect, incidental, special,
              consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or
              indirectly, resulting from your use of or inability to use the site.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="h-5 w-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-slate-900">Indemnification</h2>
            </div>
            <p className="text-slate-700">
              You agree to indemnify and hold harmless Ocean Property Management and our employees, contractors, and partners from
              any claims, damages, liabilities, and expenses arising from your use of the site or violation of these Terms.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="h-5 w-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-slate-900">Changes to the Terms</h2>
            </div>
            <p className="text-slate-700">
              We may update these Terms from time to time. We will post the updated version on this page and indicate the
              effective date above. Your continued use constitutes acceptance of the changes.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-3">
              <Gavel className="h-5 w-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-slate-900">Governing Law</h2>
            </div>
            <p className="text-slate-700">
              These Terms are governed by the laws of the State of Florida, without regard to its conflict of laws
              principles.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Panel */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
            <p className="text-slate-700 mb-6">For questions about these Terms, contact us:</p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2 text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <p>2525 SW 27th Ave, Suite 101</p>
                    <p>Miami, FL 33133</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <a href="mailto:info@oceanmgmt.net" className="hover:text-blue-600">info@oceanmgmt.net</a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <a href="tel:+13055550123" className="hover:text-blue-600">(305) 555-0123</a>
                </div>
              </div>
              <div>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-5 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                >
                  Go to Contact Page
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


