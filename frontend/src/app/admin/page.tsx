'use client';
import { useQuery } from '@tanstack/react-query';
import DashboardLayout from '@/components/DashboardLayout';
import { getAllUsersApi, getAllDoctorsApi, getAllAppointmentsApi, getAllPatientsApi } from '@/lib/api/admin.api';

function StatCard({ label, value, icon, color }: { label: string; value: number; icon: string; color: string }) {
  return (
    <div className={`bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center gap-4`}>
      <div className={`text-4xl p-3 rounded-xl ${color}`}>{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-2xl font-bold text-gray-900">{value ?? '—'}</p>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const { data: users } = useQuery({ queryKey: ['admin-users'], queryFn: getAllUsersApi });
  const { data: doctors } = useQuery({ queryKey: ['admin-doctors'], queryFn: getAllDoctorsApi });
  const { data: patients } = useQuery({ queryKey: ['admin-patients'], queryFn: getAllPatientsApi });
  const { data: appointments } = useQuery({ queryKey: ['admin-appointments'], queryFn: getAllAppointmentsApi });

  const pendingDoctors = doctors?.data?.filter((d: any) => d.verificationRequested && !d.isVerified) ?? [];

  return (
    <DashboardLayout allowedRole="admin">
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-500 text-sm mt-1">Overview of the hospital system</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <StatCard label="Total Users" value={users?.data?.length} icon="👥" color="bg-blue-50" />
          <StatCard label="Total Doctors" value={doctors?.data?.length} icon="🩺" color="bg-green-50" />
          <StatCard label="Total Patients" value={patients?.data?.length} icon="🧑‍⚕️" color="bg-purple-50" />
          <StatCard label="Appointments" value={appointments?.data?.length} icon="📅" color="bg-orange-50" />
        </div>

        {/* Pending Verifications */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">⏳ Pending Doctor Verifications</h2>
          {pendingDoctors.length === 0 ? (
            <p className="text-gray-400 text-sm">No pending verifications</p>
          ) : (
            <div className="space-y-3">
              {pendingDoctors.map((doc: any) => (
                <div key={doc.id} className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-100">
                  <div>
                    <p className="font-medium text-gray-800">{doc.firstName} {doc.lastName}</p>
                    <p className="text-xs text-gray-500">Doctor ID: {doc.id}</p>
                  </div>
                  <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium">Pending</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recent Appointments */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">📅 Recent Appointments</h2>
          {!appointments?.data?.length ? (
            <p className="text-gray-400 text-sm">No appointments yet</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500 border-b border-gray-100">
                    <th className="pb-3 font-medium">ID</th>
                    <th className="pb-3 font-medium">Patient</th>
                    <th className="pb-3 font-medium">Date</th>
                    <th className="pb-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {appointments.data.slice(0, 5).map((apt: any) => (
                    <tr key={apt.id}>
                      <td className="py-3 text-gray-600">#{apt.id}</td>
                      <td className="py-3 text-gray-800">{apt.userAccountId}</td>
                      <td className="py-3 text-gray-600">{new Date(apt.appointmentTakenDate).toLocaleDateString()}</td>
                      <td className="py-3">
                        <span className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full">
                          {apt.status?.status ?? 'N/A'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
