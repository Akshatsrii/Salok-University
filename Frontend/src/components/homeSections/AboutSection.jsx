import imgMain from "../../assets/images/about/about-main.jpg";
import imgSmall1 from "../../assets/images/about/about-small-1.jpg";
import imgSmall2 from "../../assets/images/about/about-small-2.jpg";

const AboutSection = () => {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE COLLAGE */}
        <div className="relative">

          {/* Main Image */}
          <img
            src={imgMain}
            alt="about"
            className="w-full rounded-2xl shadow-lg"
          />

          {/* Small Circle Image */}
          <img
            src={imgSmall1}
            alt="students"
            className="w-32 h-32 rounded-full object-cover absolute -top-8 -left-8 border-4 border-white shadow-md"
          />

          {/* Small Rounded Image */}
          <img
            src={imgSmall2}
            alt="learning"
            className="w-40 rounded-xl object-cover absolute bottom-10 -right-8 border-4 border-white shadow-md"
          />

          {/* Experience Badge */}
          <div className="absolute bottom-6 left-6 bg-orange-500 text-white px-6 py-4 rounded-xl shadow-lg text-center">
            <span className="text-3xl font-bold block">30 Years</span>
            <p className="text-sm font-medium">Of Experience</p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>

          {/* Tag */}
          <span className="inline-block text-orange-500 font-semibold mb-3 tracking-widest">
            ABOUT US
          </span>

          {/* Heading */}
          <h2 className="text-4xl font-bold text-gray-900 leading-snug mb-6">
            Our Education System <span className="text-orange-500">Inspires</span> You More.
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-8 max-w-xl">
            There are many variations of passages available but the majority
            have suffered alteration in some form by injected humour.
          </p>

          {/* SERVICES */}
          <div className="space-y-6 mb-10">

            {/* Service 1 */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 flex items-center justify-center bg-orange-100 text-orange-500 rounded-lg text-2xl">
                🎓
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-900">
                  Edukation Services
                </h4>
                <p className="text-gray-600 text-sm">
                  It is a long established fact that reader will be distracted.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 flex items-center justify-center bg-orange-100 text-orange-500 rounded-lg text-2xl">
                🌍
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-900">
                  International Hubs
                </h4>
                <p className="text-gray-600 text-sm">
                  It is a long established fact that reader will be distracted.
                </p>
              </div>
            </div>

          </div>

          {/* ACTIONS */}
          <div className="flex flex-col sm:flex-row items-center gap-6">

            <button className="px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition">
              DISCOVER MORE
            </button>

            <div className="flex items-center gap-3">
              <span className="text-2xl text-orange-500">📞</span>
              <p className="font-medium text-gray-900">
                +91 123 456 7890
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
