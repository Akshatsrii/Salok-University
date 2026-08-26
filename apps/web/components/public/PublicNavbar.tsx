"use client";

import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';

export const PublicNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Salok ERP
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium">Home</Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium">About</Link>
            
            <div className="relative group cursor-pointer">
              <span className="flex items-center text-gray-600 hover:text-blue-600 font-medium">
                Academics <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" />
              </span>
            </div>
            
            <Link href="/admissions" className="text-gray-600 hover:text-blue-600 font-medium">Admissions</Link>
            
            <div className="relative group cursor-pointer">
              <span className="flex items-center text-gray-600 hover:text-blue-600 font-medium">
                Campus Life <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" />
              </span>
            </div>
            
            <Link href="/placements" className="text-gray-600 hover:text-blue-600 font-medium">Placements</Link>
            <Link href="/research" className="text-gray-600 hover:text-blue-600 font-medium">Research</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 font-medium">Contact</Link>
            
            <Link href="/login" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
              Login
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-900">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
