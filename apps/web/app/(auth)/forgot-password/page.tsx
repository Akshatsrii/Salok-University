"use client";

import Link from "next/link";
import { Mail, ArrowLeft, Send } from "lucide-react";

export default function ForgotPasswordPage() {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 animate-reveal">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-[#1a2b4c]">Reset Password</h2>
        <p className="text-gray-500 mt-2 text-sm">We'll send you instructions to reset your password.</p>
      </div>

      <form className="space-y-5">
        <div className="space-y-1">
          <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="email" 
              className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-10 pr-4 outline-none focus:bg-white focus:border-[#007bff] focus:ring-2 focus:ring-[#007bff]/20 transition-all text-gray-900"
              placeholder="you@salok.edu"
            />
          </div>
        </div>

        <button type="button" className="w-full bg-[#007bff] hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 group shadow-md shadow-[#007bff]/20 mt-6">
          <Send className="w-4 h-4" />
          Send Reset Link
        </button>
      </form>

      <div className="mt-8 pt-6 border-t border-gray-100 text-center">
        <Link href="/login" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#1a2b4c] transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Sign In
        </Link>
      </div>
    </div>
  );
}
