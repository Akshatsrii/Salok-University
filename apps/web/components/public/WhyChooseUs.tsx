import { Globe, Users, Lightbulb, TrendingUp } from 'lucide-react';

export const WhyChooseUs = () => {
  const features = [
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: 'Global Curriculum',
      description: 'Our curriculum is designed with input from global industry leaders to ensure relevance.',
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Expert Faculty',
      description: 'Learn from professors and practitioners who bring real-world experience to the classroom.',
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
      title: 'Innovation Hub',
      description: 'Access state-of-the-art labs and incubators to bring your ideas to life.',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: 'Career Success',
      description: 'Our dedicated placement cell ensures high ROI and top-tier job opportunities.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Salok University?</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
