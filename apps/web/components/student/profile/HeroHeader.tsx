"use client";

import { Mail, Phone, MapPin, Award } from "lucide-react";

export const HeroHeader = () => {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden relative">
      <div className="h-32 bg-gradient-to-r from-[#1a2b4c] to-[#007bff]"></div>
      <div className="px-8 pb-8 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 -mt-12">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-6">
            <img 
              src="https://ui-avatars.com/api/?name=Rahul+Sharma&background=ffb800&color=fff&size=200" 
              alt="Profile" 
              className="w-32 h-32 rounded-2xl border-4 border-white shadow-md bg-white object-cover"
            />
            <div className="text-center md:text-left pb-2">
              <h2 className="text-3xl font-extrabold text-gray-900">Rahul Sharma</h2>
              <p className="text-gray-500 font-medium">B.Tech Computer Science • 3rd Year</p>
              <div className="flex items-center justify-center md:justify-start gap-4 mt-3 text-sm text-gray-600">
                <span className="flex items-center gap-1"><Mail className="w-4 h-4 text-[#007bff]" /> rahul@salok.edu</span>
                <span className="flex items-center gap-1"><Phone className="w-4 h-4 text-[#007bff]" /> +91 98765 43210</span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-4 pb-2">
            <div className="bg-[#fffdf5] border border-[#ffb800] p-4 rounded-2xl text-center min-w-[120px]">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">CGPA</p>
              <p className="text-3xl font-extrabold text-[#1a2b4c]">8.9</p>
            </div>
            <div className="bg-[#fffdf5] border border-[#ffb800] p-4 rounded-2xl text-center min-w-[120px] flex flex-col justify-center items-center">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Status</p>
              <span className="bg-emerald-100 text-emerald-700 text-sm font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <Award className="w-4 h-4" /> Top 5%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
