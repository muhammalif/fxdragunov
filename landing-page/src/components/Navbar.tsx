import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 transition-colors duration-200">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-16">
        <Link to="/" className="flex items-center">
          <div className="h-10 w-auto bg-white rounded-lg flex items-center justify-center px-3 py-2 shadow-md">
            <img src={logo} alt="FXDragunov Logo" className="h-full w-auto" />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="text-gray-800 dark:text-gray-200 text-lg font-medium hover:text-orange-400 dark:hover:text-orange-400 transition-colors duration-300"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-gray-800 dark:text-gray-200 text-lg font-medium hover:text-orange-400 dark:hover:text-orange-400 transition-colors duration-300"
          >
            About Us
          </Link>
          <Link 
            to="/articles" 
            className="text-gray-800 dark:text-gray-200 text-lg font-medium hover:text-orange-400 dark:hover:text-orange-400 transition-colors duration-300"
          >
            Blog
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <DarkModeToggle />
          <a 
            href="https://wa.me/6282127232415" 
            className="bg-orange-400 text-white px-6 py-2 rounded-full shadow-md hover:bg-red-500 transition duration-300"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <DarkModeToggle />
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <X className="h-6 w-6 text-gray-800 dark:text-gray-200" />
            ) : (
              <Menu className="h-6 w-6 text-gray-800 dark:text-gray-200" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white dark:bg-gray-900 shadow-lg z-50 border-t border-gray-200 dark:border-gray-700">
          <ul className="flex flex-col items-center py-6 space-y-4">
            <li>
              <Link 
                to="/" 
                className="text-gray-800 dark:text-gray-200 text-lg hover:text-orange-400 dark:hover:text-orange-400 transition-colors duration-300" 
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="text-gray-800 dark:text-gray-200 text-lg hover:text-orange-400 dark:hover:text-orange-400 transition-colors duration-300" 
                onClick={toggleMenu}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                to="/articles" 
                className="text-gray-800 dark:text-gray-200 text-lg hover:text-orange-400 dark:hover:text-orange-400 transition-colors duration-300" 
                onClick={toggleMenu}
              >
                Blog
              </Link>
            </li>
            <li>
              <a 
                href="https://wa.me/6282127232415" 
                className="bg-orange-400 text-white px-6 py-2 rounded-full shadow-md hover:bg-red-500 transition duration-300"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
