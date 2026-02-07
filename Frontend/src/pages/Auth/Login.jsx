import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top,#1a1a1a_0%,#0d0d0d_50%,#000_100%)] overflow-hidden">

      {/* FLOATING ORBS */}
      <div className="pointer-events-none absolute -top-48 -left-48 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(255,165,0,0.15),transparent_70%)] blur-[100px] animate-[orb1_20s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,rgba(255,140,0,0.12),transparent_70%)] blur-[100px] animate-[orb2_25s_ease-in-out_infinite]" />

      {/* LOGIN CARD */}
      <div className="relative z-10 w-full max-w-[440px] bg-black/80 backdrop-blur-xl p-12 rounded-[24px] shadow-[0_30px_80px_rgba(0,0,0,0.9)] border border-orange-400/20 hover:-translate-y-1 transition-all">

        {/* LOGO */}
        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center text-4xl shadow-lg animate-[pulse_3s_ease-in-out_infinite]">
          🔐
        </div>

        {/* TITLE */}
        <h2 className="text-center text-3xl font-extrabold bg-gradient-to-br from-orange-400 to-orange-500 bg-clip-text text-transparent mb-2">
          Login
        </h2>
        <p className="text-center text-white/70 text-sm mb-8">
          Welcome back! Please login to your account
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* USERNAME */}
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400">👤</span>
            <input
              type="text"
              required
              placeholder="Enter Username"
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50 focus:border-orange-400 focus:ring-4 focus:ring-orange-400/20 outline-none transition"
            />
          </div>

          {/* PASSWORD */}
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400">🔒</span>
            <input
              type={showPassword ? "text" : "password"}
              required
              placeholder="Enter Password"
              className="w-full pl-12 pr-12 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50 focus:border-orange-400 focus:ring-4 focus:ring-orange-400/20 outline-none transition"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-orange-400"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {/* OPTIONS */}
          <div className="flex justify-between items-center text-sm text-white/70">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-orange-400" />
              Remember me
            </label>
            <a href="#" className="text-orange-400 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className={`relative w-full py-4 rounded-xl font-bold uppercase tracking-wide transition
              bg-gradient-to-br from-orange-400 to-orange-500 text-black
              hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(255,165,0,0.5)]
              ${loading && "opacity-70 pointer-events-none"}
            `}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* EXTRA */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center text-white/70 text-sm">
          Forgot Password? <a href="#" className="text-orange-400 font-semibold hover:underline">Reset</a>
        </div>
      </div>

      {/* KEYFRAMES */}
      <style>
        {`
          @keyframes orb1 {
            0%,100% { transform: translate(0,0) scale(1); }
            50% { transform: translate(50px,-50px) scale(1.1); }
          }
          @keyframes orb2 {
            0%,100% { transform: translate(0,0) scale(1); }
            50% { transform: translate(-50px,50px) scale(1.1); }
          }
          @keyframes pulse {
            0%,100% { box-shadow: 0 10px 30px rgba(255,165,0,0.3); }
            50% { box-shadow: 0 10px 40px rgba(255,165,0,0.6); }
          }
        `}
      </style>
    </div>
  );
};

export default Login;
