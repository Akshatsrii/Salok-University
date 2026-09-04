export const RecruiterLogoStrip = () => {
  const logos = [
    'Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'Tesla', 'Netflix', 'Adobe'
  ];

  return (
    <div className="w-full overflow-hidden py-12 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Our Top Recruiters</h3>
      </div>
      <div className="flex justify-center items-center gap-12 md:gap-24 flex-wrap opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        {logos.map((logo, idx) => (
          <div key={idx} className="text-2xl font-bold text-gray-400 hover:text-blue-600 transition-colors">
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
};
