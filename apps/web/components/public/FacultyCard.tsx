interface FacultyCardProps {
  name: string;
  designation: string;
  department: string;
  imageUrl: string;
  bio: string;
}

export const FacultyCard = ({ name, designation, department, imageUrl, bio }: FacultyCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex gap-6 hover:shadow-md transition-shadow">
      <div className="w-24 h-24 rounded-full overflow-hidden shrink-0">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <p className="text-sm font-semibold text-blue-600 mb-1">{designation}</p>
        <p className="text-sm text-gray-500 mb-3">{department}</p>
        <p className="text-sm text-gray-600 line-clamp-2">{bio}</p>
      </div>
    </div>
  );
};
