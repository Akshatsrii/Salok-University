import { Link } from "react-router-dom";
import { GraduationCap, MapPin, Phone, Mail, ArrowRight, ChevronRight } from "lucide-react";
import { AlumniMarquee } from '../components/shared/AlumniMarquee';

export default function Home() {
  const portals = [
    {
      title: "Student Portal",
      description: "Access courses, assignments, grades, and attendance and other activities.",
      buttonText: "Login",
      href: "/student",
    },
    {
      title: "Faculty Portal",
      description: "Manage courses, student attendance, and grading system of each student.",
      buttonText: "Login",
      href: "/teacher",
    },
    {
      title: "Library Portal",
      description: "Search books, access research papers, and borrow resources and explore the books.",
      buttonText: "Login",
      href: "/student/library",
    },
    {
      title: "Placement & Career Portal",
      description: "Explore internships and career opportunities.",
      buttonText: "Click",
      href: "/admin/placement/dashboard",
    },
    {
      title: "Administration Portal",
      description: "Manage student records, admissions and financial details.",
      buttonText: "Click",
      href: "/admin",
    },
    {
      title: "Alumni Portal",
      description: "Connect with past graduates, mentorship programs and events/workshops.",
      buttonText: "Click",
      href: "/alumni",
    },
    {
      title: "Health & Wellness Portal",
      description: "Book medical appointments and access mental health resources.",
      buttonText: "Click",
      href: "/health",
      highlight: true
    },
    {
      title: "Hostel & Accommodation Portal",
      description: "Manage hostel rooms, maintenance and meal plans.",
      buttonText: "Click",
      href: "/facility/hostel/rooms",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fffdf5] font-sans selection:bg-[#ffb800] selection:text-white overflow-x-hidden">
      
      {/* Navbar */}
      <nav className="w-full bg-white h-20 px-4 md:px-12 flex items-center justify-between sticky top-0 z-50 shadow-sm border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#1a2b4c] text-white flex items-center justify-center">
            <GraduationCap className="w-6 h-6" />
          </div>
          <span className="font-bold text-xl tracking-tight text-gray-900">SALOK UNIVERSITY</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-gray-600">
          <Link to="#" className="text-[#007bff] hover:text-[#0056b3] transition-colors">Home</Link>
          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
          <Link to="#" className="hover:text-[#007bff] transition-colors">About</Link>
          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
          <Link to="#" className="hover:text-[#007bff] transition-colors">Courses</Link>
          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
          <Link to="#" className="hover:text-[#007bff] transition-colors">Faculty</Link>
          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
          <Link to="#" className="hover:text-[#007bff] transition-colors">Contact</Link>
        </div>

        <div>
          <Link to="/admin" className="bg-[#007bff] hover:bg-[#0056b3] text-white px-6 py-2.5 rounded-md font-semibold text-sm transition-colors">
            Login
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full flex flex-col items-center justify-center text-center px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        <div className="relative z-20 flex flex-col items-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#ffb800] leading-tight drop-shadow-lg">
            Welcome to Our <br /> University
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-medium max-w-2xl drop-shadow-md">
            Empowering students with knowledge and Innovation.
          </p>
          <div className="pt-6">
            <Link to="#programs" className="bg-[#ffb800] hover:bg-[#e6a600] text-gray-900 px-8 py-3.5 rounded-full font-bold text-lg shadow-lg transition-transform hover:scale-105 active:scale-95 inline-block">
              Explore Programs
            </Link>
          </div>
        </div>
      </section>

      {/* News & Events Banners */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 -mt-24 relative z-30">
          {/* Banner 1 */}
          <div className="bg-[#fffdf5] rounded-3xl p-8 flex items-center justify-between shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100">
            <div className="flex-1 pr-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">Mid-Semester <br/> Exam Schedule <br/> Released</h3>
              <p className="text-sm text-gray-500">The exam schedule for the mid-semester exams is now available. Click below to view the details.</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="bg-[#fff3cc] text-gray-800 text-center font-bold text-sm px-4 py-3 rounded-2xl w-20">
                March <br/> 27, <br/> 2026
              </div>
              <button className="bg-[#ffb800] text-gray-900 px-5 py-3 rounded-2xl font-bold text-sm shadow-md hover:bg-[#e6a600] transition-colors">Read<br/>More</button>
            </div>
          </div>
          {/* Banner 2 */}
          <div className="bg-[#fffdf5] rounded-3xl p-8 flex items-center justify-between shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100">
            <div className="flex-1 pr-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">Guest Lecture on <br/> AI & Machine <br/> Learning</h3>
              <p className="text-sm text-gray-500">Join us for a guest lecture by industry expert Dr. John Doe on March 30, 2026.</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="bg-[#fff3cc] text-gray-800 text-center font-bold text-sm px-4 py-3 rounded-2xl w-20">
                March <br/> 25, <br/> 2026
              </div>
              <button className="bg-[#ffb800] text-gray-900 px-5 py-3 rounded-2xl font-bold text-sm shadow-md hover:bg-[#e6a600] transition-colors">Register<br/>Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* University Portals Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 py-16 relative">
        <div className="text-center mb-16 relative">
          <h2 className="text-2xl font-extrabold text-gray-900 inline-block bg-[#fffdf5] px-4 relative z-10">University Portals</h2>
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 w-64 h-1 bg-gray-200 -z-0"></div>
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 w-24 h-1.5 bg-[#ffb800] -z-0"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {portals.map((portal, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-3xl p-8 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border transition-all duration-300 hover:shadow-[0_15px_40px_rgb(255,184,0,0.15)] group ${portal.highlight ? 'border-[#ffb800] ring-4 ring-[#ffb800]/20' : 'border-gray-100 hover:border-[#ffb800]'}`}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{portal.title}</h3>
              <p className="text-sm text-gray-500 mb-8 flex-1 leading-relaxed">
                {portal.description}
              </p>
              <Link 
                to={portal.href}
                className="bg-[#ffb800] text-gray-900 px-8 py-2.5 rounded-full font-bold text-sm shadow-sm hover:bg-[#e6a600] transition-colors"
              >
                {portal.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Key Statistics Banner */}
      <section className="bg-[#1a2b4c] border-y-4 border-[#ffb800] py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
          <div>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-2">50k<span className="text-[#ffb800]">+</span></h3>
            <p className="text-sm font-semibold text-gray-300 uppercase tracking-widest">Students</p>
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-2">98<span className="text-[#ffb800]">%</span></h3>
            <p className="text-sm font-semibold text-gray-300 uppercase tracking-widest">Placement Rate</p>
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-2">200<span className="text-[#ffb800]">+</span></h3>
            <p className="text-sm font-semibold text-gray-300 uppercase tracking-widest">Global Partners</p>
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-2">150<span className="text-[#ffb800]">+</span></h3>
            <p className="text-sm font-semibold text-gray-300 uppercase tracking-widest">Acres Campus</p>
          </div>
        </div>
      </section>

      {/* Campus Gallery */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 py-16">
        <div className="text-center mb-12 relative">
          <h2 className="text-xl font-bold text-gray-900 inline-block bg-[#fffdf5] px-4 relative z-10">Campus Life</h2>
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 w-24 h-1 bg-[#ffb800] -z-0"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden relative group shadow-sm">
            <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Graduation" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a2b4c]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white font-bold text-lg">Graduation Day 2025</span>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden relative group shadow-sm">
            <img src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1786&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Library" />
          </div>
          <div className="rounded-3xl overflow-hidden relative group shadow-sm">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Tech Lab" />
          </div>
          <div className="col-span-2 rounded-3xl overflow-hidden relative group shadow-sm">
            <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Campus Grounds" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a2b4c]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white font-bold text-lg">Main Campus Grounds</span>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 py-16 pb-32">
        <div className="text-center mb-12 relative">
          <h2 className="text-xl font-bold text-gray-900 inline-block bg-[#fffdf5] px-4 relative z-10">Latest News</h2>
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 w-24 h-1 bg-[#ffb800] -z-0"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "AI Lab Inauguration", desc: "A new state-of-the-art Artificial Intelligence Lab has been inaugurated to foster innovation.", img: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1932&auto=format&fit=crop" },
            { title: "Scholarship Program for Students", desc: "The university announces a $50,000 scholarship fund for outstanding academic achievers.", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" },
            { title: "New Sports Complex Opening", desc: "A brand-new sports complex with modern facilities is now open for all students.", img: "https://images.unsplash.com/photo-1518605368461-1e12a4505315?q=80&w=2070&auto=format&fit=crop" }
          ].map((news, idx) => (
            <div key={idx} className="bg-[#fff3cc] rounded-3xl overflow-hidden border border-[#ffdb70]/50 shadow-sm">
              <img src={news.img} alt={news.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{news.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{news.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a2b4c] text-white pt-16 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-[#ffb800]"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 pb-12">
          <div>
            <h4 className="text-xl font-bold mb-4">About University</h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              Our university is committed to excellence in education, research, and innovation. Providing students with the best academic environment.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="#" className="hover:text-white transition-colors">Admissions</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Academics</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Research</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Library</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Career Services</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">University Portals</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/student" className="hover:text-white transition-colors">Student Portal</Link></li>
              <li><Link to="/teacher" className="hover:text-white transition-colors">Faculty Portal</Link></li>
              <li><Link to="/alumni" className="hover:text-white transition-colors">Alumni Portal</Link></li>
              <li><Link to="/health" className="hover:text-white transition-colors">Health & Wellness</Link></li>
              <li><Link to="/facility/hostel/rooms" className="hover:text-white transition-colors">Hostel & Accommodation</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                <span>123 University Road, City, Country</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-pink-500 flex-shrink-0" />
                <span>+123-456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>contact@salokuniversity.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-xs text-gray-400">
          <p>© 2026 Salok University Management System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

