'use client';
import { useQuery } from '@tanstack/react-query';
import DashboardLayout from '@/components/DashboardLayout';
import { getDoctorProfileApi, getDoctorAppointmentsApi, getDoctorOfficesApi } from '@/lib/api/doctor.api';
import Link from 'next/link';

export default function DoctorDashboard() {
  const { data: profile } = useQuery({ queryKey: ['doctor-profile'], queryFn: getDoctorProfileApi });
  const { data: appointments } = useQuery({ queryKey: ['doctor-appointments'], queryFn: getDoctorAppointmentsApi });
  const { data: offices } = useQuery({ queryKey: ['doctor-offices'], queryFn: getDoctorOfficesApi });

  const doctor = profile?.data;
  const isProfileSetup = !!doctor?.firstName;
  const isVerified = doctor?.isVerified;
  const verificationRequested = doctor?.verificationRequested;

  return (
    <DashboardLayout allowedRole="doctor">
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome{isProfileSetup ? `, Dr. ${doctor.firstName}` : ''}! 👋
          </h1>
          <p className="text-gray-500 text-sm mt-1">Manage your practice and appointments</p>
        </div>

        {/* Profile Setup Banner */}
        {!isProfileSetup && (
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 flex items-center justify-between">
            <div>
              <p className="font-semibold text-blue-800">Complete your profile</p>
              <p className="text-sm text-blue-600 mt-0.5">Set up your profile to start accepting appointments</p>
            </div>
            <Link href="/doctor/profile/setup" className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Setup Now
            </Link>
          </div>
        )}

        {/* Verification Status */}
        {isProfileSetup && (
          <div className={`rounded-2xl p-5 border flex items-center justify-between
            ${isVerified ? 'bg-green-50 border-green-200' : 'bg-yellow-50 border-yellow-200'}`}>
            <div>
              <p className={`font-semibold ${isVerified ? 'text-green-800' : 'text-yellow-800'}`}>
                {isVerified ? '✅ Verified Doctor' : verificationRequested ? '⏳ Verification Pending' : '⚠️ Not Verified'}
              </p>
              <p className={`text-sm mt-0.5 ${isVerified ? 'text-green-600' : 'text-yellow-600'}`}>
                {isVerified ? 'You can accept appointments' : verificationRequested ? 'Admin will review your request' : 'Request verification to accept appointments'}
              </p>
            </div>
            {!isVerified && !verificationRequested && (
              <Link href="/doctor/profile" className="bg-yellow-500 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
                Request Verification
              </Link>
            )}
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center gap-4">
            <div className="text-4xl p-3 rounded-xl bg-blue-50">📅</div>
            <div>
              <p className="text-sm text-gray-500">Total Appointments</p>
              <p className="text-2xl font-bold text-gray-900">{appointments?.data?.length ?? '—'}</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center gap-4">
            <div className="text-4xl p-3 rounded-xl bg-green-50">🏥</div>
            <div>
              <p className="text-sm text-gray-500">Offices / Hospitals</p>
              <p className="text-2xl font-bold text-gray-900">{offices?.data?.length ?? '—'}</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center gap-4">
            <div className="text-4xl p-3 rounded-xl bg-purple-50">🩺</div>
            <div>
              <p className="text-sm text-gray-500">Specializations</p>
              <p className="text-2xl font-bold text-gray-900">{doctor?.specializations?.length ?? '—'}</p>
            </div>
          </div>
        </div>

        {/* Upcoming Appointments */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">📅 Upcoming Appointments</h2>
          {!appointments?.data?.length ? (
            <p className="text-gray-400 text-sm">No appointments yet</p>
          ) : (
            <div className="space-y-3">
              {appointments.data.slice(0, 5).map((apt: any) => (
                <div key={apt.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-800">Appointment #{apt.id}</p>
                    <p className="text-xs text-gray-500">{new Date(apt.probableStartTime).toLocaleString()}</p>
                  </div>
                  <span className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-medium">
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
