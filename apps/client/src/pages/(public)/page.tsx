import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Building2, Trophy, Users, BookOpen } from "lucide-react";
import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { GsapReveal } from "@/components/shared/GsapReveal";

export default function PageHome() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <PublicNavbar />

      {/* Hero Section matching Image 1 */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center">
        {/* Background Image: Crisp, clear university building without heavy red gradient */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2000" 
            alt="University Campus" 
            className="w-full h-full object-cover"
          />
          {/* Only a subtle dark gradient to make text readable, NO red tint */}
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent w-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <div className="lg:w-[55%]">
            <GsapReveal>
              <h1 className="text-5xl lg:text-6xl font-serif font-bold text-white mb-4 leading-[1.1]">
                The Best Place to <br/>
                <span className="border-b-4 border-[#ffcc00] inline-block pb-2">Chase Your Dreams</span>
              </h1>
              <p className="text-white/90 text-sm md:text-base mb-8 max-w-lg leading-relaxed drop-shadow-md">
                Andorra la Vella University is one of three state universities in the city of Andorra. The campus, which is located in the Andorra la Vella sub-district, is a conservation university. So there are many green trees that adorn the lecture buildings. Not only that, it is also very difficult to find fuel-fueled vehicles passing around the campus area during lecture hours.
              </p>
              <div>
                <Link to="/admissions" className="bg-[#ffcc00] text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-white transition-all shadow-lg text-sm inline-block">
                  Explore
                </Link>
              </div>
            </GsapReveal>
          </div>

          {/* Right Floating Stats (Glassmorphism exactly like Image 1) */}
          <div className="lg:w-[45%] relative h-[500px] hidden lg:block">
            {/* Stat 1 */}
            <GsapReveal className="absolute top-10 right-16 z-20">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl w-64 shadow-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded bg-[#ffcc00] flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-gray-900" />
                  </div>
                  <span className="text-white font-medium text-sm">Graduation</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">405.240</div>
                <p className="text-white/70 text-[10px] leading-tight">This university produces graduates with a total of 405,240 best graduates</p>
              </div>
            </GsapReveal>

            {/* Stat 2 */}
            <GsapReveal className="absolute top-44 -right-4 z-10">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl w-64 shadow-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded bg-[#ffcc00] flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-gray-900" />
                  </div>
                  <span className="text-white font-medium text-sm">Company Relation</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">7.400</div>
                <p className="text-white/70 text-[10px] leading-tight">We have relationships with many industrial companies which are counted 7,400 companies</p>
              </div>
            </GsapReveal>

            {/* Stat 3 */}
            <GsapReveal className="absolute bottom-16 right-24 z-30">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl w-64 shadow-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded bg-[#ffcc00] flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-gray-900" />
                  </div>
                  <span className="text-white font-medium text-sm">Achievement</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">29.085</div>
                <p className="text-white/70 text-[10px] leading-tight">The number of achievements obtained during this university was around 29,085 achievements</p>
              </div>
            </GsapReveal>
          </div>
        </div>
      </section>

      {/* Maroon Stats Bar matching Image 2 */}
      <section className="bg-[#8a1538] text-white py-6 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
            <div className="flex items-center justify-center gap-4">
              <Users className="w-8 h-8 text-white opacity-80" />
              <div className="text-left">
                <div className="text-lg font-bold">5 million students</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <BookOpen className="w-8 h-8 text-white opacity-80" />
              <div className="text-left">
                <div className="text-lg font-bold">134k online courses</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <Trophy className="w-8 h-8 text-white opacity-80" />
              <div className="text-left">
                <div className="text-lg font-bold">great place to study</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses Section matching Image 2 */}
      <section className="py-20 bg-gray-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-sans font-bold text-gray-900 mb-2">Our Popular Courses</h2>
          </div>
          <Link to="/academics" className="bg-[#8a1538] text-white px-5 py-2 text-sm font-bold hover:bg-[#6b0f2a] transition-colors">
            All Courses
          </Link>
        </div>

        {/* Course Filters */}
        <div className="flex flex-wrap gap-6 mb-8 border-b border-gray-200 pb-2">
          {["All", "Courses", "Events", "Students", "Teachers"].map((filter, idx) => (
            <button key={idx} className={`${idx === 0 ? "bg-[#8a1538] text-white px-4 py-1" : "text-gray-500 hover:text-[#8a1538] px-2 py-1"} text-sm font-medium transition-colors`}>
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Course Card 1 */}
          <div className="bg-white rounded overflow-hidden shadow-md hover:shadow-xl transition-shadow group flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Course" />
              <div className="absolute top-4 left-4 bg-[#8a1538] text-white text-xs font-bold px-3 py-1">Business</div>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100" className="w-8 h-8 rounded-full" />
                <span className="text-xs text-gray-500 font-medium">Egon Parks</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 leading-snug">Aeronautical & Manufacturing Engineering</h3>
              <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
                <div className="flex items-center text-[#ffcc00] text-sm">
                  {'★★★★★'.split('').map((s,i)=><span key={i}>{s}</span>)}
                </div>
                <div className="text-gray-400 text-xs font-bold">(4.9)</div>
              </div>
            </div>
          </div>

          {/* Course Card 2 */}
          <div className="bg-white rounded overflow-hidden shadow-md hover:shadow-xl transition-shadow group flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Course" />
              <div className="absolute top-4 left-4 bg-[#8a1538] text-white text-xs font-bold px-3 py-1">Politics</div>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100" className="w-8 h-8 rounded-full" />
                <span className="text-xs text-gray-500 font-medium">Sarah Jenkins</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 leading-snug">Business & Management Studies</h3>
              <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
                <div className="flex items-center text-[#ffcc00] text-sm">
                  {'★★★★★'.split('').map((s,i)=><span key={i}>{s}</span>)}
                </div>
                <div className="text-gray-400 text-xs font-bold">(5.0)</div>
              </div>
            </div>
          </div>

          {/* Course Card 3 */}
          <div className="bg-white rounded overflow-hidden shadow-md hover:shadow-xl transition-shadow group flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Course" />
              <div className="absolute top-4 left-4 bg-[#8a1538] text-white text-xs font-bold px-3 py-1">Psychology</div>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100" className="w-8 h-8 rounded-full" />
                <span className="text-xs text-gray-500 font-medium">Lorem Cuys</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 leading-snug">History of Art, Architecture & Design</h3>
              <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
                <div className="flex items-center text-[#ffcc00] text-sm">
                  {'★★★★★'.split('').map((s,i)=><span key={i}>{s}</span>)}
                </div>
                <div className="text-gray-400 text-xs font-bold">(4.8)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Section (Library Quote matching Image 1 bottom) */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-right">
          <GsapReveal>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white leading-[1.3] ml-auto max-w-3xl drop-shadow-lg tracking-wide">
              <span className="border-b-4 border-[#ffcc00] pb-1 inline-block">The Library</span> is The Only Destination for Students During The Pandemic
            </h2>
          </GsapReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
