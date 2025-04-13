'use client';
import { useState } from 'react';
import { GraduationCap, House, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <GraduationCap size={30} className="text-indigo-600" />
            <span className="text-xl font-bold text-indigo-600 ml-2">CsharpQuizes</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <button className="flex items-center text-indigo-600 hover:text-indigo-800 transition font-medium">
              <House size={20} className="mr-1" />
              Home
            </button>
          </div>

          {/* Mobile Burger Icon */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Items */}
        {menuOpen && (
          <div className="md:hidden mt-2 space-y-2">
            <button className="block w-full text-left px-4 py-2 text-indigo-600 hover:bg-gray-100 transition">
              <House size={18} className="inline mr-2" />
              Home
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
