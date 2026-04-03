import api from '@/lib/axios';

export const createClientAccountApi = (dto: any) => api.post('/patient/account', dto);

export const searchDoctorsApi = (params: Record<string, string>) =>
  api.get('/patient/doctors', { params });

export const getDoctorProfileApi = (id: number) => api.get(`/patient/doctors/${id}`);

export const getAvailableTimeSlotsApi = (id: number, doctorHospitalId: number) =>
  api.get(`/patient/doctors/${id}/timeslots`, { params: { doctorHospitalId } });

export const bookAppointmentApi = (dto: any) => api.post('/patient/appointments/book', dto);

export const cancelAppointmentApi = (id: number, dto: any) =>
  api.patch(`/patient/appointments/${id}/cancel`, dto);

export const rescheduleAppointmentApi = (id: number, dto: any) =>
  api.patch(`/patient/appointments/${id}/reschedule`, dto);

export const getPatientAppointmentsApi = () => api.get('/patient/appointments');

export const getAppointmentHistoryApi = (id: number) =>
  api.get(`/patient/appointments/${id}/history`);
