import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="University Campus"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Empowering the Leaders of Tomorrow
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Join Salok University and experience world-class education, cutting-edge research, and a vibrant campus life.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/admissions"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition-colors"
          >
            Apply Now
          </Link>
          <Link
            to="/about"
            className="px-8 py-3 bg-white/20 hover:bg-white/30 rounded-lg text-lg font-semibold backdrop-blur-sm transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

