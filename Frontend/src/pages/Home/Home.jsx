import Navbar from "../../components/common/Navbar";
import ImageSlider from "../../components/common/ImageSlider";
import AboutSection from "../../components/homeSections/AboutSection";
import StatsSection from "../../components/homeSections/StatsSection";
import ImportantAnnouncements from "../../components/common/ImportantAnnouncements/ImportantAnnouncements";
import TestimonialSection from "../../components/homeSections/TestimonialSection";
import QuickLinksCards from "../../components/homeSections/QuickLinksCards/QuickLinksCards";
import LatestNews from "../../components/homeSections/LatestNews/LatestNews";
import CollegeGallery from "../../components/homeSections/CollegeGallery/CollegeGallery";



import "./Home.css";

const Home = () => {
  return (
    <>
      {/* EXISTING TOP CONTENT */}
      <Navbar />
      <ImageSlider />

      <section className="search-section">
        <h2>Find Your Course. Apply Hurry Up!</h2>
        <div className="search-box">
          <input type="text" placeholder="Enter keyword" />
          <button>Search Course</button>
        </div>
      </section>

      {/* 🔽 NEW SECTIONS (IMAGE JAISE PAGE) */}
      <AboutSection />
      <StatsSection />
      <ImportantAnnouncements />
      <TestimonialSection />
      <QuickLinksCards />
      <LatestNews />
      <CollegeGallery />
    </>
  );
};

export default Home;
