import "./CollegeGallery.css";
import galleryData from "./galleryData";

const CollegeGallery = () => {
  return (
    <section className="college-gallery-section">
      <h2 className="gallery-heading">College Gallery</h2>

      <div className="gallery-grid">
        {galleryData.map((item, index) => (
          <div className="gallery-card" key={index}>
            <img src={item.image} alt={item.title} />

            <div className="gallery-overlay">
              <span>{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollegeGallery;
