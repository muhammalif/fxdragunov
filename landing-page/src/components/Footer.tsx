import React from 'react';
import { Facebook, Instagram, Youtube, Send, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      {/* Main Footer Content */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6 lg:px-16 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="h-10 w-36 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm">
                <img src={logo} alt="FXDragunov Logo" className="h-6" />
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
                Transform your trading journey with our cutting-edge forex solutions. Join thousands of successful traders worldwide.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/saepudin.sa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-700 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-gray-600 dark:text-gray-300 hover:text-orange-400 dark:hover:text-orange-400"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/fxdragunov/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-700 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-gray-600 dark:text-gray-300 hover:text-orange-400 dark:hover:text-orange-400"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.youtube.com/@fxdragunovindonesia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-700 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-gray-600 dark:text-gray-300 hover:text-orange-400 dark:hover:text-orange-400"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.t.me/fxdragunov" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-700 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-gray-600 dark:text-gray-300 hover:text-orange-400 dark:hover:text-orange-400"
                >
                  <Send className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.tiktok.com/@fxdragunov" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-700 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-gray-600 dark:text-gray-300 hover:text-orange-400 dark:hover:text-orange-400"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h6 className="font-bold text-lg mb-6 text-gray-900 dark:text-white">Company</h6>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/about" 
                    className="text-gray-600 dark:text-gray-300 hover:text-orange-400 dark:hover:text-orange-400 transition-colors duration-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/articles" 
                    className="text-gray-600 dark:text-gray-300 hover:text-orange-400 dark:hover:text-orange-400 transition-colors duration-300"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/" 
                    className="text-gray-600 dark:text-gray-300 hover:text-orange-400 dark:hover:text-orange-400 transition-colors duration-300"
                  >
                    Products
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h6 className="font-bold text-lg mb-6 text-gray-900 dark:text-white">Contact Us</h6>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <Phone className="w-5 h-5 mr-3 text-orange-400" />
                  <a 
                    href="tel:+6282127232415"
                    className="hover:text-orange-400 dark:hover:text-orange-400 transition-colors duration-300"
                  >
                    +62 8212 7232 415
                  </a>
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <Mail className="w-5 h-5 mr-3 text-orange-400" />
                  <a 
                    href="mailto:fxdragunov@gmail.com"
                    className="hover:text-orange-400 dark:hover:text-orange-400 transition-colors duration-300"
                  >
                    fxdragunov@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-gray-100 dark:bg-gray-700 py-4 transition-colors duration-200">
        <div className="container mx-auto px-6 lg:px-16">
          <p className="text-center text-sm text-gray-600 dark:text-gray-300">
            <strong>Disclaimer:</strong> All information provided by FXDragunov is for educational and informational purposes only and should not be considered as investment advice. Please consult a financial advisor before making any investment decisions.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gradient-to-r from-orange-400 to-red-500 py-4">
        <div className="container mx-auto px-6 lg:px-16">
          <p className="text-center text-white font-medium">
            © 2024 FXDragunov Indonesia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
