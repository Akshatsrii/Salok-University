import { Link } from "react-router-dom";

export const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="About Salok University"
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              A Legacy of Excellence
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in 2026, Salok University is a premier institution dedicated to transforming education through innovation and technology. Our comprehensive programs in Engineering, Sciences, Arts, and Management are designed to foster critical thinking and practical skills.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With our state-of-the-art facilities, world-class faculty, and strong industry connections, we ensure our students are ready to meet the challenges of the modern world.
            </p>
            <Link
              href="/about"
              className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2"
            >
              Discover Our History <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
