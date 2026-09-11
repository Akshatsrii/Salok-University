import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { Link } from "react-router-dom";
import { RefreshCw } from "lucide-react";

export default function ESamadhanPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans">
      <PublicNavbar />
      
      {/* Mini-navbar specific to e-Samadhan (like the screenshot) */}
      <div className="bg-[#0a0a0a] text-white text-sm font-bold uppercase tracking-wider py-3 px-8 flex gap-8 border-b-4 border-primary">
        <a href="#" className="hover:text-primary transition-colors">Home</a>
        <a href="#" className="hover:text-primary transition-colors">About Us</a>
        <a href="#" className="hover:text-primary transition-colors">Feedback</a>
        <a href="#" className="hover:text-primary transition-colors">Nodal Officer Login</a>
      </div>

      {/* Main Hero Section */}
      <section className="flex-1 relative overflow-hidden bg-[#111111] flex flex-col lg:flex-row items-center">
        
        {/* Background Image overlay with Maroon Swoosh effect */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2000" 
            alt="University Background" 
            className="w-full h-full object-cover opacity-10 grayscale mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          {/* Abstract swoosh shape in primary color */}
          <div className="absolute top-0 right-0 w-[50%] h-full bg-primary/90 transform skew-x-[-15deg] translate-x-20 rounded-l-[100px] shadow-2xl z-0"></div>
        </div>

        {/* Left Side - Welcome Text */}
        <div className="relative z-10 w-full lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
          <h2 className="text-primary text-3xl font-bold mb-4 tracking-wide">WELCOME TO</h2>
          <h1 className="text-white text-5xl font-extrabold mb-4 leading-tight">UGC e-Samadhaan</h1>
          <h3 className="text-[#eab308] text-4xl font-black drop-shadow-md">Online Grievance Registering System</h3>
        </div>

        {/* Right Side - Forms */}
        <div className="relative z-10 w-full lg:w-1/2 p-8 lg:p-12 flex flex-col sm:flex-row gap-6 justify-center items-stretch">
          
          {/* Login Card */}
          <div className="bg-primary p-2 rounded-xl shadow-2xl flex-1 max-w-sm flex">
            <div className="bg-white w-full rounded-lg p-6 flex flex-col items-center">
              <h3 className="text-center text-lg font-black text-black mb-6 leading-tight">
                LOGIN TO REGISTER<br/>A GRIEVANCE
              </h3>

              <form className="w-full space-y-4">
                <select className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm text-gray-700 outline-none focus:border-primary">
                  <option>-Select User-</option>
                  <option>Student</option>
                  <option>Faculty</option>
                  <option>Staff</option>
                </select>

                <input 
                  type="text" 
                  placeholder="Username/Email" 
                  className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm outline-none focus:border-primary"
                />

                <input 
                  type="password" 
                  placeholder="Password" 
                  className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm outline-none focus:border-primary"
                />

                <div className="flex gap-2 items-center">
                  <div className="bg-gray-100 border border-gray-300 rounded-md py-2 px-4 flex-1 text-center font-mono font-bold text-gray-500 tracking-widest relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjY2NjIi8+PC9zdmc+')] opacity-50"></div>
                    2714
                  </div>
                  <button type="button" className="bg-[#eab308] hover:bg-[#ca8a04] text-white p-2 rounded-md transition-colors">
                    <RefreshCw className="w-5 h-5" />
                  </button>
                </div>

                <input 
                  type="text" 
                  placeholder="Enter Captcha" 
                  className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm outline-none focus:border-primary"
                />

                <div className="pt-2">
                  <button type="button" className="w-1/2 mx-auto block bg-[#111111] hover:bg-[#222222] text-white font-bold py-2 rounded-full text-sm transition-colors shadow-md">
                    LOGIN
                  </button>
                </div>
              </form>

              <div className="mt-6 text-center text-sm text-gray-600">
                <p>Don't have an account? <Link to="/register" className="text-blue-600 hover:underline">Register</Link></p>
                <Link to="/forgot-password" className="text-blue-600 hover:underline mt-1 inline-block">Forgot Password?</Link>
              </div>
            </div>
          </div>

          {/* Antiragging Note Card */}
          <div className="bg-primary p-2 rounded-xl shadow-2xl flex-1 max-w-sm flex">
            <div className="bg-white w-full rounded-lg p-6 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ef4444] text-white text-xs px-3 py-1 font-bold rounded shadow-sm">
                Note
              </div>
              
              <div className="mt-4 text-center space-y-4">
                <p className="text-primary font-bold text-sm leading-snug">
                  To register Antiragging Grievances please, go to the AntiRagging website:
                </p>
                <a href="https://www.antiragging.in" target="_blank" rel="noreferrer" className="text-[#0ea5e9] text-sm hover:underline block break-all">
                  https://www.antiragging.in
                </a>
                
                <p className="text-primary font-bold text-sm mt-4">
                  Register Complaint on:
                </p>
                <a href="https://www.antiragging.in/complaint_register_form.html" target="_blank" rel="noreferrer" className="text-[#0ea5e9] text-sm hover:underline block break-all leading-tight">
                  https://www.antiragging.in/complaint_register_form.html
                </a>
                
                <div className="text-primary font-bold text-sm my-2">or</div>
                
                <p className="text-primary text-sm font-bold">call on:</p>
                <p className="text-black font-bold">1800-180-5522</p>
                
                <p className="text-primary text-sm font-bold mt-2">Email -:</p>
                <a href="mailto:helpline@antiragging.in" className="text-black font-bold hover:underline">
                  helpline@antiragging.in
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
