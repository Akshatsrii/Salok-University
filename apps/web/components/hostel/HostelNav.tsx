import Link from 'next/link';

export const HostelNav = () => {
  const navItems = [
    { label: 'Dashboard', href: '/facility/hostel' },
    { label: 'Room Allocation', href: '/facility/hostel/rooms' },
    { label: 'Mess Menu', href: '/facility/hostel/mess' },
    { label: 'Complaints', href: '/facility/hostel/complaints' },
    { label: 'Gate Pass / Visitors', href: '/facility/hostel/visitors' },
  ];

  return (
    <nav className="flex space-x-4 border-b border-gray-200 mb-6">
      {navItems.map((item) => (
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
