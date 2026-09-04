
import { useState } from "react";
import { Link } from "react-router-dom";
import { useRouter } from "next/navigation";
import { User, Mail, Lock, ArrowRight, BookOpen, Loader2 } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "student"
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      const res = await fetch("http://localhost:5000/api/v1/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
          role: formData.role
        }),
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.message || "Failed to register");
      }
      
      setSuccess(true);
      setTimeout(() => {
        router.push("/login");
      }, 2000);
      
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 animate-reveal">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-[#1a2b4c]">Apply Now</h2>
        <p className="text-gray-500 mt-2 text-sm">Start your journey with Salok University</p>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100 text-center font-medium">
          {error}
        </div>
      )}
      
      {success && (
        <div className="mb-4 p-3 bg-emerald-50 text-emerald-600 text-sm rounded-xl border border-emerald-100 text-center font-medium">
          Registration successful! Redirecting to login...
        </div>
      )}

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-700 ml-1">First Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                required
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 pl-9 pr-3 outline-none focus:bg-white focus:border-[#007bff] focus:ring-2 focus:ring-[#007bff]/20 transition-all text-sm"
                placeholder="John"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-700 ml-1">Last Name</label>
            <div className="relative">
              <input 
                type="text" 
                required
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-3 outline-none focus:bg-white focus:border-[#007bff] focus:ring-2 focus:ring-[#007bff]/20 transition-all text-sm"
                placeholder="Doe"
              />
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-700 ml-1">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="email" 
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 pl-9 pr-3 outline-none focus:bg-white focus:border-[#007bff] focus:ring-2 focus:ring-[#007bff]/20 transition-all text-sm"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-700 ml-1">Role</label>
          <div className="relative">
            <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <select 
              value={formData.role}
              onChange={(e) => setFormData({...formData, role: e.target.value})}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 pl-9 pr-3 outline-none focus:bg-white focus:border-[#007bff] focus:ring-2 focus:ring-[#007bff]/20 transition-all text-sm appearance-none text-gray-700"
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="parent">Parent</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-700 ml-1">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="password" 
              required
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 pl-9 pr-3 outline-none focus:bg-white focus:border-[#007bff] focus:ring-2 focus:ring-[#007bff]/20 transition-all text-sm"
              placeholder="••••••••"
            />
          </div>
        </div>

        <button 
          type="submit" 
          disabled={loading || success}
          className="w-full bg-[#ffb800] hover:bg-[#e6a600] disabled:bg-gray-200 text-[#1a2b4c] font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 group shadow-md shadow-[#ffb800]/20 mt-4"
        >
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              Create Account
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </form>

      <p className="text-center mt-6 text-sm text-gray-600">
        Already have an account? <Link to="/login" className="font-bold text-[#007bff] hover:underline">Sign In</Link>
      </p>
    </div>
  );
}

