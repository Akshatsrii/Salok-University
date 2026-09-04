import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  course: string;
  batch: string;
  quote: string;
  imageUrl: string;
}

export const TestimonialCard = ({ name, course, batch, quote, imageUrl }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative mt-10 hover:shadow-md transition-shadow">
      <div className="absolute -top-10 left-8">
        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        </div>
      </div>
      <Quote className="absolute top-8 right-8 w-8 h-8 text-blue-100" />
      <div className="mt-8">
        <p className="text-gray-600 italic mb-6">"{quote}"</p>
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-sm text-blue-600">{course}, Class of {batch}</p>
        </div>
      </div>
    </div>
  );
};
