// Auth
export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  email: string;
  password: string;
}

export interface AuthResponse {
  access_token: string;
}

export interface DecodedToken {
  sub: number;
  email: string;
  roles: string[];
  iat: number;
  exp: number;
}

export type Role = 'admin' | 'doctor' | 'patient';

// User
export interface User {
  id: number;
  email: string;
  role: Role;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Doctor
export interface Doctor {
  id: number;
  userId: number;
  firstName: string;
  lastName: string;
  professionalStatement?: string;
  practicingFrom?: string;
  isVerified: boolean;
  verificationRequested: boolean;
}

// Patient
export interface ClientAccount {
  id: number;
  userId: number;
  firstName: string;
  lastName: string;
  contactNumber: string;
  email: string;
}

// Appointment
export interface Appointment {
  id: number;
  userAccountId: number;
  doctorHospitalId: number;
  timeSlotId: number;
  probableStartTime: string;
  actualEndTime?: string;
  durationInMinutes: number;
  appointmentStatusId: number;
  appointmentTakenDate: string;
  cancellationReason?: string;
}

// TimeSlot
export interface TimeSlot {
  id: number;
  doctorHospitalId: number;
  startTime: string;
  endTime: string;
  isBooked: boolean;
}

// Hospital
export interface Hospital {
  id: number;
  officeId: number;
  name: string;
  streetAddress: string;
  city: string;
  state: string;
  country: string;
  zip: string;
}

// Notification
export interface Notification {
  id: number;
  userId: number;
  message: string;
  isRead: boolean;
  createdAt: string;
}
