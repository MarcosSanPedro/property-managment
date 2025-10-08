import { Shield, FileText, Lock, Clock, Cookie, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';

export function Privacy() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="mt-3 text-slate-200">Last updated: October 2025</p>
        </div>
      </section>

      {/* Intro + Last Updated card */}
      <section className="-mt-8 pb-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
            <p className="text-slate-700">
              This Privacy Policy describes how Ocean Property Management ("we", "us", or "our") collects,
              uses, discloses, and protects information when you visit our website and use our
              services.
            </p>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="h-5 w-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-slate-900">Information We Collect</h2>
            </div>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>
                Information you provide: contact form details (name, email, phone, message), proposal requests,
                and any files you upload.
              </li>
              <li>
                Automatically collected: device and browser information, IP address, pages visited, and interactions for
                analytics and performance.
              </li>
              <li>
                Third-party data: limited information from service providers needed to deliver services (e.g., client portal,
                analytics, email delivery).
              </li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="h-5 w-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-slate-900">How We Use Your Information</h2>
            </div>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Respond to inquiries and provide requested services</li>
              <li>Operate, maintain, secure, and improve our website</li>
              <li>Communicate updates, notices, and service information</li>
              <li>Comply with legal obligations and enforce our policies</li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-3">
              <ExternalLink className="h-5 w-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-slate-900">Sharing of Information</h2>
            </div>
            <p className="text-slate-700">
              We do not sell your personal information. We may share information with trusted vendors who perform
              services on our behalf (e.g., hosting, analytics, client portal providers), subject to confidentiality and
              security obligations, and when required by law.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="h-5 w-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-slate-900">Data Retention</h2>
            </div>
            <p className="text-slate-700">
              We retain personal information only as long as necessary to fulfill the purposes outlined in this policy,
              comply with legal obligations, resolve disputes, and enforce agreements.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-3">
              <Lock className="h-5 w-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-slate-900">Security</h2>
            </div>
            <p className="text-slate-700">
              We implement reasonable technical and organizational safeguards to protect your information. However, no
              method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="h-5 w-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-slate-900">Your Rights</h2>
            </div>
            <p className="text-slate-700">
              Depending on your location, you may have rights to access, correct, or delete your personal information.
              To exercise these rights, please contact us using the details below.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-3">
              <Cookie className="h-5 w-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-slate-900">Cookies and Tracking</h2>
            </div>
            <p className="text-slate-700">
              We use cookies and similar technologies for functionality and analytics. You can control cookies through
              your browser settings. Disabling cookies may affect site functionality.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-3">
              <ExternalLink className="h-5 w-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-slate-900">Third-Party Links and Client Portal</h2>
            </div>
            <p className="text-slate-700">
              Our website may link to third-party sites, including our Client Portal. We are not responsible for the
              privacy practices of those sites. Please review their respective policies.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="h-5 w-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-slate-900">Children's Privacy</h2>
            </div>
            <p className="text-slate-700">
              Our services are not directed to children under 13. We do not knowingly collect personal information from
              children under 13.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="h-5 w-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-slate-900">Changes to This Policy</h2>
            </div>
            <p className="text-slate-700">
              We may update this Privacy Policy from time to time. We will post the updated version on this page and
              adjust the "Last updated" date.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Panel */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
            <p className="text-slate-700 mb-6">If you have questions about this Privacy Policy, please contact us:</p>
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


