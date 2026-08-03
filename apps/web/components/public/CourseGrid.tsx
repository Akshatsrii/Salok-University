import { CourseCard } from './CourseCard';

export const CourseGrid = () => {
  const courses = [
    {
      title: 'B.Tech Computer Science',
      department: 'School of Engineering',
      duration: '4 Years',
      credits: 160,
      slug: 'btech-cse',
      imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'BBA Data Analytics',
      department: 'School of Management',
      duration: '3 Years',
      credits: 120,
      slug: 'bba-data',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'B.Sc Biotechnology',
      department: 'School of Sciences',
      duration: '3 Years',
      credits: 120,
      slug: 'bsc-biotech',
      imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Programs</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our most popular undergraduate programs designed to equip you with industry-ready skills.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.slug} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};
