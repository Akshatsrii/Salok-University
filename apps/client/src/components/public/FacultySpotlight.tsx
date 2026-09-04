import { FacultyCard } from './FacultyCard';

export const FacultySpotlight = () => {
  const faculty = [
    {
      name: 'Dr. Sarah Jenkins',
      designation: 'Professor & HOD',
      department: 'Computer Science',
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      bio: 'Expert in AI and Machine Learning with over 50+ publications in international journals.',
    },
    {
      name: 'Dr. Michael Chen',
      designation: 'Associate Professor',
      department: 'Data Analytics',
      imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      bio: 'Former Data Scientist at Google. Passionate about predictive modeling and big data.',
    },
    {
      name: 'Dr. Emily Roberts',
      designation: 'Assistant Professor',
      department: 'Biotechnology',
      imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      bio: 'Leading research on synthetic biology and gene editing techniques.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Experts</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn from industry veterans and renowned academicians.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty.map((f, idx) => (
            <FacultyCard key={idx} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};
