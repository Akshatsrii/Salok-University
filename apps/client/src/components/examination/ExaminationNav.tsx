
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const ExaminationNav = () => {
  const pathname = useLocation().pathname;
  
  const links = [
    { label: 'Dashboard', href: '/admin/examination' },
    { label: 'Exam Schedule', href: '/admin/examination/schedule' },
    { label: 'Hall Tickets', href: '/admin/examination/hall-tickets' },
    { label: 'Marks Entry', href: '/admin/examination/marks-entry' },
    { label: 'Results', href: '/admin/examination/results' },
    { label: 'Revaluation', href: '/admin/examination/revaluation' },
    { label: 'Certificates', href: '/admin/examination/certificates' },
  ];

  return (
    <nav className="flex space-x-1 border-b border-gray-200 overflow-x-auto">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.label}
            to={link.href}
            className={`whitespace-nowrap py-4 px-4 text-sm font-medium border-b-2 transition-colors ${
              isActive
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};

