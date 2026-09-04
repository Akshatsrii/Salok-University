
import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowLeft, Send, Loader2, CheckCircle2 } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Simulate API call for forgot password
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      if (!email.includes("@")) {
        throw new Error("Please enter a valid email address.");
      }
      
      setSuccess(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 animate-reveal">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-[#1a2b4c]">Reset Password</h2>
        <p className="text-gray-500 mt-2 text-sm">We'll send you instructions to reset your password.</p>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100 text-center font-medium">
          {error}
        </div>
      )}

      {success ? (
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Check your email</h3>
          <p className="text-sm text-gray-500 pb-4">
            We sent a password reset link to <br/><span className="font-semibold text-gray-900">{email}</span>
          </p>
          <button 
            onClick={() => setSuccess(false)}
            className="text-sm font-semibold text-[#007bff] hover:underline"
          >
            Try another email
          </button>
        </div>
      ) : (
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

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-[#007bff] hover:bg-blue-600 disabled:bg-gray-300 text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 group shadow-md shadow-[#007bff]/20 mt-6"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Reset Link
              </>
            )}
          </button>
        </form>
      )}

      <div className="mt-8 pt-6 border-t border-gray-100 text-center">
        <Link to="/login" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#1a2b4c] transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Sign In
        </Link>
      </div>
    </div>
  );
}

