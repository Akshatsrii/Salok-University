import { TestimonialCard } from './TestimonialCard';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rohan Sharma',
      course: 'B.Tech CSE',
      batch: '2025',
      quote: 'The practical exposure and industry-aligned curriculum at Salok University gave me the edge I needed to secure a top-tier placement.',
      imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'Priya Patel',
      course: 'BBA Data Analytics',
      batch: '2024',
      quote: 'The faculty support is phenomenal. They don\'t just teach; they mentor you to become a true professional.',
      imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'Amit Kumar',
      course: 'B.Sc Biotechnology',
      batch: '2023',
      quote: 'State-of-the-art labs and a focus on research allowed me to publish my first paper while still an undergrad.',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear what our students have to say about their journey at Salok University.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {testimonials.map((t, idx) => (
            <TestimonialCard key={idx} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};
