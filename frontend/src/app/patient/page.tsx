'use client';
import { useQuery } from '@tanstack/react-query';
import DashboardLayout from '@/components/DashboardLayout';
import { getPatientAppointmentsApi } from '@/lib/api/patient.api';
import Link from 'next/link';
import { useAuthStore } from '@/store/auth.store';

export default function PatientDashboard() {
  const { user } = useAuthStore();
  const { data: appointments } = useQuery({
    queryKey: ['patient-appointments'],
    queryFn: getPatientAppointmentsApi,
  });

  const upcoming = appointments?.data?.filter((a: any) => a.status?.status !== 'Completed') ?? [];
  const completed = appointments?.data?.filter((a: any) => a.status?.status === 'Completed') ?? [];

  return (
    <DashboardLayout allowedRole="patient">
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome back! 👋</h1>
          <p className="text-gray-500 text-sm mt-1">{user?.email}</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <Link href="/patient/doctors"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-2xl p-6 flex items-center gap-4 transition">
            <span className="text-4xl">🔍</span>
            <div>
              <p className="font-semibold text-lg">Find a Doctor</p>
              <p className="text-blue-100 text-sm">Search by specialization</p>
            </div>
          </Link>

          <Link href="/patient/appointments"
            className="bg-white hover:bg-gray-50 border border-gray-100 rounded-2xl p-6 flex items-center gap-4 transition shadow-sm">
            <span className="text-4xl">📅</span>
            <div>
              <p className="font-semibold text-lg text-gray-800">My Appointments</p>
              <p className="text-gray-400 text-sm">{appointments?.data?.length ?? 0} total</p>
            </div>
          </Link>

          <Link href="/patient/profile"
            className="bg-white hover:bg-gray-50 border border-gray-100 rounded-2xl p-6 flex items-center gap-4 transition shadow-sm">
            <span className="text-4xl">👤</span>
            <div>
              <p className="font-semibold text-lg text-gray-800">My Profile</p>
              <p className="text-gray-400 text-sm">View & edit profile</p>
            </div>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <p className="text-sm text-gray-500">Upcoming</p>
            <p className="text-3xl font-bold text-blue-600 mt-1">{upcoming.length}</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <p className="text-sm text-gray-500">Completed</p>
            <p className="text-3xl font-bold text-green-600 mt-1">{completed.length}</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <p className="text-sm text-gray-500">Total</p>
            <p className="text-3xl font-bold text-gray-800 mt-1">{appointments?.data?.length ?? 0}</p>
          </div>
        </div>

        {/* Recent Appointments */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Recent Appointments</h2>
            <Link href="/patient/appointments" className="text-sm text-blue-600 hover:underline">View all</Link>
          </div>

          {!appointments?.data?.length ? (
            <div className="text-center py-8">
              <p className="text-gray-400 text-sm">No appointments yet</p>
              <Link href="/patient/doctors" className="mt-3 inline-block text-sm text-blue-600 font-medium hover:underline">
                Book your first appointment →
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {appointments.data.slice(0, 5).map((apt: any) => (
                <div key={apt.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-800">Appointment #{apt.id}</p>
                    <p className="text-xs text-gray-500">{new Date(apt.probableStartTime).toLocaleString()}</p>
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full font-medium
                    ${apt.status?.status === 'Completed' ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-600'}`}>
                    {apt.status?.status ?? 'Scheduled'}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
