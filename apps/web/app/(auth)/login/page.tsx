"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, ArrowRight, Loader2 } from "lucide-react";
import { api } from "../../../services/api";
import { useAuthStore } from "../../../store/authStore";

export default function LoginPage() {
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Uses centralized api instance which automatically includes withCredentials: true
      const { data } = await api.post("/auth/login", { email, password });
      
      if (data.mfaRequired) {
        router.push(`/mfa?email=${encodeURIComponent(email)}`);
        return;
      }

      // Backend now sets HttpOnly cookies. We just update the client store
      setUser(data.user);
      
      // Route based on role
      const role = data.user?.role?.toLowerCase() || "student";
      router.push(`/${role}`);
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || "Failed to login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 animate-reveal">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-[#1a2b4c]">Welcome Back</h2>
        <p className="text-gray-500 mt-2 text-sm">Please sign in to your account</p>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100 text-center font-medium">
          {error}
        </div>
      )}

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="space-y-1">
          <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-10 pr-4 outline-none focus:bg-white focus:border-[#007bff] focus:ring-2 focus:ring-[#007bff]/20 transition-all text-gray-900"
              placeholder="you@salok.edu"
            />
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between items-center ml-1">
            <label className="text-sm font-semibold text-gray-700">Password</label>
            <Link href="/forgot-password" className="text-xs font-semibold text-[#007bff] hover:underline">Forgot password?</Link>
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-10 pr-4 outline-none focus:bg-white focus:border-[#007bff] focus:ring-2 focus:ring-[#007bff]/20 transition-all text-gray-900"
              placeholder="••••••••"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 ml-1">
          <input type="checkbox" id="remember" className="rounded border-gray-300 text-[#007bff] focus:ring-[#007bff]" />
          <label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer">Remember me for 30 days</label>
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-[#ffb800] hover:bg-[#e6a600] disabled:bg-gray-200 text-[#1a2b4c] font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 group shadow-md shadow-[#ffb800]/20 mt-6"
        >
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              Sign In
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </form>

      <p className="text-center mt-8 text-sm text-gray-600">
        Don't have an account? <Link href="/register" className="font-bold text-[#007bff] hover:underline">Apply Now</Link>
      </p>
    </div>
  );
}
