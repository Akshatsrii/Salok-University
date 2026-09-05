import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Building2, Trophy, Users, BookOpen, Clock } from "lucide-react";
import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { GsapReveal } from "@/components/shared/GsapReveal";

export default function PageHome() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <PublicNavbar />

      {/* Hero Section matching Image 1 & 2 vibe */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center">
        {/* Background Image with Dark Crimson/Black Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070" 
            alt="University Campus" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/70 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <div className="lg:w-1/2">
            <GsapReveal>
              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                The Best Place to <br/>
                <span className="border-b-4 border-accent pb-2 inline-block">Chase Your Dreams</span>
              </h1>
              <p className="text-white/90 text-lg mb-8 max-w-xl leading-relaxed">
                Salok University is one of the premier institutions globally. We are dedicated to providing a world-class education with a focus on conservation, innovation, and industry relations.
              </p>
              <div className="flex gap-4">
                <Link to="/admissions" className="bg-accent text-primary-dark px-8 py-3.5 rounded-full font-bold hover:bg-white hover:text-primary transition-all shadow-lg inline-flex items-center gap-2">
                  Explore <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </GsapReveal>
          </div>

          {/* Right Floating Stats (Glassmorphism like Image 1) */}
          <div className="lg:w-1/2 relative h-[500px] hidden lg:block">
            {/* Stat 1 */}
            <GsapReveal className="absolute top-10 right-20">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl w-64 shadow-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-primary-dark" />
                  </div>
                  <span className="text-white font-medium text-sm">Graduation</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">405,240</div>
                <p className="text-white/60 text-xs">This university produces graduates with a total of 405,240 best graduates</p>
              </div>
            </GsapReveal>

            {/* Stat 2 */}
            <GsapReveal className="absolute top-48 right-0">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl w-64 shadow-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                    <Building2 className="w-4 h-4 text-primary-dark" />
                  </div>
                  <span className="text-white font-medium text-sm">Company Relation</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">7,400</div>
                <p className="text-white/60 text-xs">We have relationships with many industrial companies which are counted 7,400 companies</p>
              </div>
            </GsapReveal>

            {/* Stat 3 */}
            <GsapReveal className="absolute bottom-10 right-32">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl w-64 shadow-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                    <Trophy className="w-4 h-4 text-primary-dark" />
                  </div>
                  <span className="text-white font-medium text-sm">Achievement</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">29,085</div>
                <p className="text-white/60 text-xs">The number of achievements obtained during this university was around 29,085 achievements</p>
              </div>
            </GsapReveal>
          </div>
        </div>
      </section>

      {/* Red Stats Bar matching Image 2 */}
      <section className="bg-primary-light text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-4 md:py-0">
              <Users className="w-10 h-10 text-white" />
              <div className="text-left">
                <div className="text-2xl font-bold">5 million</div>
                <div className="text-white/80 text-sm font-medium">Students Enrolled</div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-4 md:py-0">
              <BookOpen className="w-10 h-10 text-white" />
              <div className="text-left">
                <div className="text-2xl font-bold">134k+</div>
                <div className="text-white/80 text-sm font-medium">Online & Offline Courses</div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-4 md:py-0">
              <Trophy className="w-10 h-10 text-white" />
              <div className="text-left">
                <div className="text-2xl font-bold">Top #1</div>
                <div className="text-white/80 text-sm font-medium">Great Place to Study</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses Section matching Image 2 */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">Our Popular Courses</h2>
            <p className="text-gray-500">Explore our most sought-after programs and elevate your career.</p>
          </div>
          <Link to="/academics" className="hidden md:inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded hover:bg-primary-dark transition-colors font-medium">
            All Courses <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Course Filters */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 pb-4">
          {["All", "Courses", "Events", "Students", "Teachers"].map((filter, idx) => (
            <button key={idx} className={\ px-4 py-1.5 rounded-sm text-sm font-medium transition-colors}>
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Course Card 1 */}
          <div className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
            <div className="relative h-48 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=2000" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Course" />
              <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded">Business</div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100" className="w-8 h-8 rounded-full" />
                <span className="text-sm text-gray-600 font-medium">Prof. Egon Parks</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">Aeronautical & Manufacturing Engineering</h3>
              <div className="flex items-center gap-1 text-accent mb-4">
                {'?????'.split('').map((s,i)=><span key={i}>{s}</span>)}
                <span className="text-gray-400 text-xs ml-2">(4.9)</span>
              </div>
            </div>
          </div>

          {/* Course Card 2 */}
          <div className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
            <div className="relative h-48 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Course" />
              <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded">Politics</div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100" className="w-8 h-8 rounded-full" />
                <span className="text-sm text-gray-600 font-medium">Dr. Sarah Jenkins</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">Business & Management Studies</h3>
              <div className="flex items-center gap-1 text-accent mb-4">
                {'?????'.split('').map((s,i)=><span key={i}>{s}</span>)}
                <span className="text-gray-400 text-xs ml-2">(4.2)</span>
              </div>
            </div>
          </div>

          {/* Course Card 3 */}
          <div className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
            <div className="relative h-48 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=2000" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Course" />
              <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded">Psychology</div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100" className="w-8 h-8 rounded-full" />
                <span className="text-sm text-gray-600 font-medium">Prof. David Chen</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">History of Art, Architecture & Design</h3>
              <div className="flex items-center gap-1 text-accent mb-4">
                {'?????'.split('').map((s,i)=><span key={i}>{s}</span>)}
                <span className="text-gray-400 text-xs ml-2">(5.0)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Section (Library Quote matching Image 1 bottom) */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-right">
          <GsapReveal>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight ml-auto max-w-3xl">
              <span className="border-b-2 border-accent pb-1">The Library</span> is The Only Destination for Students During The Pandemic
            </h2>
          </GsapReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
