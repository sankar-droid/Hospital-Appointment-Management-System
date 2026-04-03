'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/auth.store';
import Sidebar from '@/components/Sidebar';
import { Role } from '@/types';

interface Props {
  children: React.ReactNode;
  allowedRole: Role;
}

export default function DashboardLayout({ children, allowedRole }: Props) {
  const { user, isAuthenticated } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.replace('/auth/login');
      return;
    }
    if (user?.role !== allowedRole) {
      router.replace(`/${user?.role}`);
    }
  }, [user, isAuthenticated, allowedRole, router]);

  if (!user || user.role !== allowedRole) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8 overflow-auto">{children}</main>
    </div>
  );
}
