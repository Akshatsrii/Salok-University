import { HeroSection } from '../../components/public/HeroSection';
import { StatsCounter } from '../../components/public/StatsCounter';
import { AboutSection } from '../../components/public/AboutSection';
import { CourseGrid } from '../../components/public/CourseGrid';
import { WhyChooseUs } from '../../components/public/WhyChooseUs';
import { CampusGallery } from '../../components/public/CampusGallery';
import { PlacementHighlights } from '../../components/public/PlacementHighlights';
import { RecruiterLogoStrip } from '../../components/public/RecruiterLogoStrip';
import { NewsTicker } from '../../components/public/NewsTicker';
import { FacultySpotlight } from '../../components/public/FacultySpotlight';
import { Testimonials } from '../../components/public/Testimonials';

export default function HomePage() {
  return (
    <>
      <NewsTicker />
      <HeroSection />
      <StatsCounter />
      <AboutSection />
      <CourseGrid />
      <WhyChooseUs />
      <CampusGallery />
      <PlacementHighlights />
      <RecruiterLogoStrip />
      <FacultySpotlight />
      <Testimonials />
    </>
  );
}
