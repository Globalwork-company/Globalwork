
import React from 'react';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">GlobalWork Pass</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted partner for international job opportunities in Canada and USA. 
              We provide comprehensive support from application to arrival.
            </p>
            <div className="flex space-x-4">
              <div className="bg-blue-600 p-2 rounded">
                <Phone className="h-5 w-5" />
              </div>
              <div className="bg-green-600 p-2 rounded">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div className="bg-red-600 p-2 rounded">
                <Mail className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Browse Jobs</a></li>
              <li><a href="#" className="hover:text-white">How It Works</a></li>
              <li><a href="#" className="hover:text-white">Success Stories</a></li>
              <li><a href="#" className="hover:text-white">FAQs</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 210 204 3122</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="h-4 w-4 mr-2" />
                <span>WhatsApp Support</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@globalworkpass.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>California, USA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 GlobalWork Pass. All rights reserved.
            </div>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
