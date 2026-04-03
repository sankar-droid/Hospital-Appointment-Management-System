import api from '@/lib/axios';

export const getDoctorProfileApi = () => api.get('/doctor-role/profile');
export const updateDoctorProfileApi = (dto: any) => api.patch('/doctor-role/profile', dto);
export const requestVerificationApi = () => api.patch('/doctor-role/request-verification');

export const setupProfileApi = (formData: FormData) =>
  api.post('/doctor-role/setup-profile', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

export const requestSpecializationApi = (specializationId: number, formData: FormData) =>
  api.post(`/doctor-role/request-specialization/${specializationId}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

export const setAvailabilityApi = (dto: any) => api.post('/doctor-role/availability', dto);
export const getAvailabilityApi = (doctorHospitalId: number) =>
  api.get(`/doctor-role/availability/${doctorHospitalId}`);

export const generateTimeSlotsApi = (dto: any) => api.post('/doctor-role/timeslots/generate', dto);
export const markUnavailabilityApi = (dto: any) => api.post('/doctor-role/unavailability', dto);

export const getDoctorAppointmentsApi = () => api.get('/doctor-role/appointments');
export const completeAppointmentApi = (id: number) =>
  api.patch(`/doctor-role/appointments/${id}/complete`);

export const affiliateHospitalApi = (dto: any) => api.post('/doctor-role/affiliate', dto);
export const createOfficeApi = (dto: any) => api.post('/doctor-role/office', dto);
export const getDoctorOfficesApi = () => api.get('/doctor-role/offices');
