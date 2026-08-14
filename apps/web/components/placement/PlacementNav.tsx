import Link from 'next/link';

export const PlacementNav = ({ role }: { role: 'admin' | 'student' }) => {
  const adminItems = [
    { label: 'Dashboard', href: '/admin/placement/dashboard' },
    { label: 'Companies', href: '/admin/placement/companies' },
    { label: 'Drives', href: '/admin/placement/drives' },
    { label: 'Reports', href: '/admin/placement/reports' },
  ];

  const studentItems = [
    { label: 'Dashboard', href: '/student/placement' },
    { label: 'Resume Builder', href: '/student/placement/resume' },
    { label: 'Mock Interview', href: '/student/placement/mock-interview' },
  ];

  const items = role === 'admin' ? adminItems : studentItems;

  return (
    <nav className="flex space-x-4 border-b border-gray-200 mb-6">
      {items.map((item) => (
        <Link 
          key={item.href} 
          href={item.href}
          className="pb-2 text-sm font-medium text-gray-500 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
