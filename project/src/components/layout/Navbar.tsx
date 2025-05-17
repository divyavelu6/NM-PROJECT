import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, BarChart2, MessageSquare, Settings, Home } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Leaf className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900 hidden sm:block">
                Climate Resilient Design
              </span>
            </Link>
          </div>
          
          <div className="flex items-center">
            <div className="hidden md:ml-6 md:flex md:space-x-2">
              {[
                { path: '/', icon: <Home size={20} />, text: 'Home' },
                { path: '/assistant', icon: <MessageSquare size={20} />, text: 'Assistant' },
                { path: '/dashboard', icon: <BarChart2 size={20} />, text: 'Dashboard' },
                { path: '/settings', icon: <Settings size={20} />, text: 'Settings' },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors ${
                    isActive(item.path)
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {item.icon}
                  <span className="ml-2">{item.text}</span>
                </Link>
              ))}
            </div>
          </div>
          
          <div className="flex md:hidden items-center">
            {/* Mobile menu button */}
            <div className="flex space-x-1">
              {[
                { path: '/', icon: <Home size={20} /> },
                { path: '/assistant', icon: <MessageSquare size={20} /> },
                { path: '/dashboard', icon: <BarChart2 size={20} /> },
                { path: '/settings', icon: <Settings size={20} /> },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`p-2 rounded-md flex items-center ${
                    isActive(item.path)
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;