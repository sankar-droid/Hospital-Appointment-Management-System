import api from '@/lib/axios';
import { AuthResponse, LoginPayload, RegisterPayload } from '@/types';

export const loginApi = (dto: LoginPayload) =>
  api.post<AuthResponse>('/auth/login', dto);

export const registerPatientApi = (dto: RegisterPayload) =>
  api.post('/auth/create-patient', dto);

export const registerDoctorApi = (dto: RegisterPayload) =>
  api.post('/auth/create-doctor', dto);

export const getProfileApi = () =>
  api.get('/auth/profile');
