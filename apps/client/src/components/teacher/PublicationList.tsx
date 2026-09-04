
import { FileText, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export const PublicationList = () => {
  const publications = [
    { title: "Deep Learning for Healthcare Diagnostics", journal: "IEEE Transactions", year: 2025, link: "#" },
    { title: "Quantum Computing Algorithms Review", journal: "ACM Computing Surveys", year: 2024, link: "#" },
    { title: "Scalable Microservices Architecture", journal: "Software Engineering Journal", year: 2024, link: "#" },
  ];

  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm col-span-1 md:col-span-2">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-[#1a2b4c] text-lg">My Publications</h3>
        <button className="text-xs font-bold bg-[#ffb800] text-[#1a2b4c] px-4 py-2 rounded-xl hover:bg-[#e6a600] transition-colors">
          + Add Paper
        </button>
      </div>

      <div className="space-y-4">
        {publications.map((pub, idx) => (
          <div key={idx} className="flex justify-between items-start p-4 hover:bg-gray-50 rounded-2xl transition-all border border-gray-100">
            <div className="flex gap-4">
              <div className="p-3 bg-blue-50 text-[#007bff] rounded-xl h-fit">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">{pub.title}</h4>
                <p className="text-xs text-gray-500 mt-1">{pub.journal} • {pub.year}</p>
              </div>
            </div>
            <Link href={pub.link} className="p-2 text-gray-400 hover:text-[#007bff] transition-colors">
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
