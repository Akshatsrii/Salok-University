import { Link } from "react-router-dom";
import { BookOpen, Clock, Award } from 'lucide-react';

interface CourseCardProps {
  title: string;
  department: string;
  duration: string;
  credits: number;
  imageUrl: string;
  slug: string;
}

export const CourseCard = ({ title, department, duration, credits, imageUrl, slug }: CourseCardProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="h-48 overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-6">
        <div className="text-sm text-blue-600 font-semibold mb-2">{department}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" /> {duration}
          </div>
          <div className="flex items-center gap-1">
            <Award className="w-4 h-4" /> {credits} Credits
          </div>
        </div>
        <Link
          to={`/academics/courses/${slug}`}
          className="block w-full text-center py-2 px-4 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

