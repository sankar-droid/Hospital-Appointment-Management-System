'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/auth.store';
import toast from 'react-hot-toast';

interface NavItem {
  label: string;
  href: string;
  icon: string;
}

const adminNav: NavItem[] = [
  { label: 'Dashboard', href: '/admin', icon: '🏠' },
  { label: 'Users', href: '/admin/users', icon: '👥' },
  { label: 'Doctors', href: '/admin/doctors', icon: '🩺' },
  { label: 'Patients', href: '/admin/patients', icon: '🧑‍⚕️' },
  { label: 'Appointments', href: '/admin/appointments', icon: '📅' },
  { label: 'Specializations', href: '/admin/specializations', icon: '🎓' },
];

const doctorNav: NavItem[] = [
  { label: 'Dashboard', href: '/doctor', icon: '🏠' },
  { label: 'My Profile', href: '/doctor/profile', icon: '👤' },
  { label: 'Offices', href: '/doctor/offices', icon: '🏥' },
  { label: 'Availability', href: '/doctor/availability', icon: '🗓️' },
  { label: 'Time Slots', href: '/doctor/timeslots', icon: '⏰' },
  { label: 'Appointments', href: '/doctor/appointments', icon: '📅' },
];

const patientNav: NavItem[] = [
  { label: 'Dashboard', href: '/patient', icon: '🏠' },
  { label: 'Find Doctors', href: '/patient/doctors', icon: '🔍' },
  { label: 'My Appointments', href: '/patient/appointments', icon: '📅' },
  { label: 'My Profile', href: '/patient/profile', icon: '👤' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuthStore();

  const navItems =
    user?.role === 'admin' ? adminNav :
    user?.role === 'doctor' ? doctorNav :
    patientNav;

  const handleLogout = () => {
    logout();
    toast.success('Logged out');
    router.replace('/auth/login');
  };

  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-gray-100">
        <h1 className="text-lg font-bold text-blue-600">🏥 MediCare</h1>
        <p className="text-xs text-gray-400 mt-0.5 capitalize">{user?.role} Portal</p>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition
              ${pathname === item.href
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
          >
            <span>{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>

      {/* User + Logout */}
      <div className="px-4 py-4 border-t border-gray-100">
        <p className="text-xs text-gray-500 truncate mb-3">{user?.email}</p>
        <button
          onClick={handleLogout}
          className="w-full text-sm text-red-500 hover:text-red-700 font-medium text-left px-3 py-2 rounded-lg hover:bg-red-50 transition"
        >
          🚪 Logout
        </button>
      </div>
    </aside>
  );
}
