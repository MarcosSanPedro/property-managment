import { Link } from 'react-router-dom';
import { Building2, Mail, Phone, MapPin, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold text-white">Ocean Property Management</span>
            </div>
            <p className="text-sm mb-4">
              Professional property and association management services you can trust.
            </p>
            <div className="flex space-x-4">
              {/* <a href="#" className="text-slate-400 hover:text-blue-500 transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-500 transition">
                <Twitter className="h-5 w-5" />
              </a> */}
              <a href="https://www.linkedin.com/in/evian-rodriguez-254950175/" target="_blank" className="text-slate-400 hover:text-blue-500 transition">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-blue-500 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-500 transition">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-blue-500 transition">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-500 transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Client Portal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={import.meta.env.VITE_CLIENT_PORTAL_URL || 'https://portal.example.com'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition"
                >
                  Open Client Portal
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>2525 SW 27th Ave, Suite 101<br />Miami, FL 33133</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <span>info@oceanmgmt.net</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; {currentYear} Ocean Property Management Group, LLC. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-blue-500 transition">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-blue-500 transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
