import api from '@/lib/axios';

export const getAllUsersApi = () => api.get('/admin/users');
export const activateUserApi = (id: number) => api.patch(`/admin/users/${id}/activate`);
export const deactivateUserApi = (id: number) => api.patch(`/admin/users/${id}/deactivate`);

export const getAllDoctorsApi = () => api.get('/admin/doctors');
export const getPendingDoctorsApi = () => api.get('/admin/doctors/pending');
export const verifyDoctorApi = (id: number) => api.patch(`/admin/doctors/${id}/verify`);

export const getAllAppointmentsApi = () => api.get('/admin/appointments');
export const getAllPatientsApi = () => api.get('/admin/patients');

export const getSpecializationRequestsApi = () => api.get('/admin/specialization-requests');
export const approveSpecializationApi = (doctorId: number, specializationId: number) =>
  api.post(`/admin/specialization-requests/${doctorId}/${specializationId}/approve`);
