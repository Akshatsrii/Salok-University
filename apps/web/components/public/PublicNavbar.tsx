import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";

export function PublicNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 z-50">
      {/* Quick Switcher Top Bar */}
      <div className="bg-[#1a2b4c] text-white/80 text-xs font-medium py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-end gap-6">
          <span className="text-gray-400">Information for:</span>
          <Link href="#" className="hover:text-white transition-colors">Prospective Students</Link>
          <Link href="#" className="hover:text-white transition-colors">Current Students</Link>
          <Link href="#" className="hover:text-white transition-colors">Faculty & Staff</Link>
          <Link href="#" className="hover:text-white transition-colors">Parents</Link>
          <Link href="/alumni" className="hover:text-white transition-colors">Alumni</Link>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-[#007bff] rounded-xl flex items-center justify-center text-white font-bold text-xl">S</div>
                <span className="font-extrabold text-2xl text-[#1a2b4c] tracking-tight">Salok<span className="text-[#007bff]">.</span></span>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-700 hover:text-[#007bff] font-semibold transition-colors">About</Link>
              <Link href="/academics" className="text-gray-700 hover:text-[#007bff] font-semibold transition-colors">Academics</Link>
              <Link href="/campus-life" className="text-gray-700 hover:text-[#007bff] font-semibold transition-colors">Campus Life</Link>
              <Link href="/contact" className="text-gray-700 hover:text-[#007bff] font-semibold transition-colors">Contact</Link>
              <Link href="/login" className="bg-[#1a2b4c] hover:bg-gray-800 text-white px-6 py-2.5 rounded-full font-bold transition-all flex items-center gap-2 shadow-md">
                ERP Login <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex items-center md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-[#007bff]">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-1">
              <Link href="/about" className="block px-3 py-3 text-base font-bold text-gray-700 hover:text-[#007bff] hover:bg-gray-50 rounded-lg">About</Link>
              <Link href="/academics" className="block px-3 py-3 text-base font-bold text-gray-700 hover:text-[#007bff] hover:bg-gray-50 rounded-lg">Academics</Link>
              <Link href="/campus-life" className="block px-3 py-3 text-base font-bold text-gray-700 hover:text-[#007bff] hover:bg-gray-50 rounded-lg">Campus Life</Link>
              <Link href="/login" className="block mt-4 px-3 py-3 text-base font-bold text-white bg-[#007bff] text-center rounded-lg">ERP Login</Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
