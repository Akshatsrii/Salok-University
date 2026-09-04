import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Branding Side (Hidden on Mobile) */}
      <div className="hidden lg:flex flex-col justify-between w-1/2 bg-[#1a2b4c] p-12 relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffb800]/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#007bff]/20 rounded-full blur-3xl -ml-20 -mb-20"></div>
        
        <div className="relative z-10">
          <Link to="/" className="flex items-center gap-3 w-fit group">
            <div className="w-10 h-10 rounded-full bg-[#ffb800] flex items-center justify-center text-[#1a2b4c] shadow-lg group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <span className="font-bold text-2xl tracking-tight text-white">Salok University</span>
          </Link>
        </div>

        <div className="relative z-10 max-w-md">
          <h1 className="text-4xl font-extrabold text-white leading-tight mb-4">
            Empowering the <span className="text-[#ffb800]">Next Generation</span> of Innovators.
          </h1>
          <p className="text-gray-300 text-lg font-light leading-relaxed">
            Log in to access your personalized academic dashboard, connect with peers, and unlock a world of educational resources.
          </p>
        </div>
        
        <div className="relative z-10 flex items-center gap-4 text-gray-400 text-sm">
          <span>&copy; {new Date().getFullYear()} Salok ERP</span>
          <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
          <Link to="/contact" className="hover:text-white transition-colors">Help Center</Link>
        </div>
      </div>

      {/* Right Form Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50/50">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
    </div>
  );
}

