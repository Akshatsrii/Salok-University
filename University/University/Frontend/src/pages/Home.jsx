import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchCourse from "../components/SearchCourse";
import About from "../components/About";
import Stats from "../components/Stats";
import Announcements from "../components/Announcements";
import Testimonials from "../components/Testimonials";
import Services from "../components/Services";
import Events from "../components/Events";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchCourse />
      <About />
      <Stats />
      <Announcements />
      <Testimonials />
      <Services />
      <Events />
      <Gallery />
      <Footer />
    </>
  );
}
