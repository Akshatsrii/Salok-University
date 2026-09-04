import { FlaskConical, Cpu, Globe2, Brain, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ResearchPage() {
  const centers = [
    { title: "Center for AI & Robotics", icon: Brain, desc: "Advancing machine learning, neural networks, and autonomous robotics." },
    { title: "Quantum Computing Lab", icon: Cpu, desc: "Exploring quantum algorithms and next-generation cryptography." },
    { title: "Bio-Genetics Institute", icon: FlaskConical, desc: "Pioneering research in genetic engineering and bioinformatics." },
    { title: "Climate Action Center", icon: Globe2, desc: "Developing sustainable tech for a greener future." },
  ];

  return (
    <div className="min-h-screen bg-[#fffdf5]">
      {/* Hero */}
      <section className="relative py-24 bg-[#1a2b4c] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-reveal">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">Research & <span className="text-[#ffb800]">Innovation</span></h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Pushing the boundaries of human knowledge. Explore our state-of-the-art labs and ground-breaking publications.
          </p>
        </div>
      </section>

      {/* Centers of Excellence */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-reveal">
          <h2 className="text-4xl font-bold text-[#1a2b4c]">Centers of Excellence</h2>
          <p className="text-gray-500 mt-4 text-lg">Where curiosity meets cutting-edge technology.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {centers.map((center, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all group flex gap-6 animate-reveal" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="w-16 h-16 bg-blue-50 text-[#007bff] rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#007bff] group-hover:text-white transition-colors">
                <center.icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1a2b4c] mb-3">{center.title}</h3>
                <p className="text-gray-500 mb-4">{center.desc}</p>
                <Link href="#" className="inline-flex items-center gap-2 font-bold text-[#007bff] hover:text-blue-800 transition-colors">
                  View Publications <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
