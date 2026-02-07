import Navbar from "../../components/common/Navbar";
import ImageSlider from "../../components/common/ImageSlider";
import AboutSection from "../../components/homeSections/AboutSection";
import StatsSection from "../../components/homeSections/StatsSection";
import UniversityPortals from "../../components/homeSections/UniversityPortals";
import ImportantAnnouncements from "../../components/common/ImportantAnnouncements/ImportantAnnouncements";
import TestimonialSection from "../../components/homeSections/TestimonialSection";
import QuickLinksCards from "../../components/homeSections/QuickLinksCards/QuickLinksCards";
import LatestNews from "../../components/homeSections/LatestNews/LatestNews";
import CollegeGallery from "../../components/homeSections/CollegeGallery/CollegeGallery";

const Home = () => {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* HERO / SLIDER */}
      <ImageSlider />

      {/* SEARCH SECTION */}
      <section
        className="
          relative
          max-w-[1100px]
          mx-auto
          -mt-20
          bg-gradient-to-br from-orange-400 to-orange-500
          px-12 py-10
          rounded-2xl
          text-center
          shadow-[0_20px_40px_rgba(0,0,0,0.35)]
          z-[5]
        "
      >
        <h2 className="text-[28px] font-bold text-black mb-6">
          Find Your Course. Apply Hurry Up!
        </h2>

        <div className="flex justify-center gap-4 flex-col sm:flex-row">
          <input
            type="text"
            placeholder="Enter keyword"
            className="
              w-[320px]
              px-4 py-[14px]
              rounded-lg
              outline-none
              border-none
              text-gray-700
            "
          />

          <button
            className="
              px-6 py-[14px]
              bg-black
              text-orange-400
              rounded-lg
              font-semibold
              hover:bg-[#111]
              transition
            "
          >
            Search Course
          </button>
        </div>
      </section>

      {/* HOME SECTIONS */}
      <AboutSection />
      <StatsSection />
      <UniversityPortals />
      <ImportantAnnouncements />
      <TestimonialSection />
      <QuickLinksCards />
      <LatestNews />
      <CollegeGallery />
    </>
  );
};

export default Home;
