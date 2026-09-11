import { GraduationCap } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import React from "react";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex bg-white font-sans">
      {/* Left Branding Side (Hidden on Mobile) */}
      <div className="hidden lg:flex flex-col justify-between w-1/2 bg-[#0a0a0a] p-12 relative overflow-hidden border-r-4 border-primary">
        {/* Background Image with heavy black overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2000" 
            alt="University Background" 
            className="w-full h-full object-cover opacity-10 grayscale mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
        
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -mr-20 -mt-20 z-0"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -ml-20 -mb-20 z-0"></div>
        
        <div className="relative z-10">
          <Link to="/" className="flex items-center gap-3 w-fit group">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <span className="font-bold font-serif text-2xl tracking-tight text-white">Salok University</span>
          </Link>
        </div>

        <div className="relative z-10 max-w-md">
          <h1 className="text-4xl font-serif font-bold text-white leading-tight mb-4">
            Empowering the <span className="text-primary font-black">Next Generation</span> of Innovators.
          </h1>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            Log in to access your personalized academic dashboard, connect with peers, and unlock a world of educational resources.
          </p>
        </div>
        
        <div className="relative z-10 flex items-center gap-4 text-gray-500 text-sm">
          <span>&copy; {new Date().getFullYear()} Salok University</span>
          <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
          <Link to="/contact" className="hover:text-primary transition-colors">Help Center</Link>
        </div>
      </div>

      {/* Right Form Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-[#f8fafc]">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

