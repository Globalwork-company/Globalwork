
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const location = useLocation();
  
  const navItems = [
    { href: '/jobs', label: 'Jobs' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-blue-900">
                GlobalWork Pass
              </Link>
            </div>
            <nav className="hidden md:ml-8 md:flex md:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-blue-900 border-b-2 border-blue-900'
                      : 'text-gray-700 hover:text-blue-900'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-blue-900 hover:bg-blue-800" asChild>
              <Link to="/jobs">Browse Jobs</Link>
            </Button>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
