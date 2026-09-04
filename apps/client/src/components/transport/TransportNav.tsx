import { Link } from "react-router-dom";

export const TransportNav = () => {
  const navItems = [
    { label: 'Live Tracking', href: '/facility/transport/live-tracking' },
    { label: 'Routes & Stops', href: '/facility/transport/routes' },
    { label: 'Maintenance & Fuel', href: '/facility/transport/maintenance' },
    { label: 'Driver Attendance', href: '/facility/transport/attendance' },
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
