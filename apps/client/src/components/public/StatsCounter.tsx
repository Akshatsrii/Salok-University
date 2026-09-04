export const StatsCounter = () => {
  const stats = [
    { label: 'Students Enrolled', value: '15,000+' },
    { label: 'Expert Faculty', value: '500+' },
    { label: 'Global Alumni', value: '50,000+' },
    { label: 'Research Grants', value: '$10M+' },
  ];

  return (
    <section className="py-12 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-blue-700/50 backdrop-blur-sm">
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm uppercase tracking-wider text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
