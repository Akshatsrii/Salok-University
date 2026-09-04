export const CampusGallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1519452314546-f9ba32b6c9bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Life at Salok</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience our vibrant campus, state-of-the-art facilities, and diverse community.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((src, idx) => (
            <div key={idx} className="h-64 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src={src} alt={`Campus View ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
