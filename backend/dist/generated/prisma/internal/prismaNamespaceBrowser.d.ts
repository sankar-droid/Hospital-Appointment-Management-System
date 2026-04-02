import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Doctor: "Doctor";
    readonly DoctorDocument: "DoctorDocument";
    readonly Specialization: "Specialization";
    readonly DoctorSpecialization: "DoctorSpecialization";
    readonly Qualification: "Qualification";
    readonly HospitalAffiliation: "HospitalAffiliation";
    readonly DoctorUnavailability: "DoctorUnavailability";
    readonly ClientAccount: "ClientAccount";
    readonly Office: "Office";
    readonly OfficeDoctorAvailability: "OfficeDoctorAvailability";
    readonly InNetworkInsurance: "InNetworkInsurance";
    readonly TimeSlot: "TimeSlot";
    readonly AppointmentStatus: "AppointmentStatus";
    readonly Appointment: "Appointment";
    readonly AppointmentHistory: "AppointmentHistory";
    readonly Notification: "Notification";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly password: "password";
    readonly role: "role";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const DoctorScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly professionalStatement: "professionalStatement";
    readonly practicingFrom: "practicingFrom";
    readonly isVerified: "isVerified";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type DoctorScalarFieldEnum = (typeof DoctorScalarFieldEnum)[keyof typeof DoctorScalarFieldEnum];
export declare const DoctorDocumentScalarFieldEnum: {
    readonly id: "id";
    readonly doctorId: "doctorId";
    readonly documentType: "documentType";
    readonly fileUrl: "fileUrl";
    readonly uploadedAt: "uploadedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type DoctorDocumentScalarFieldEnum = (typeof DoctorDocumentScalarFieldEnum)[keyof typeof DoctorDocumentScalarFieldEnum];
export declare const SpecializationScalarFieldEnum: {
    readonly id: "id";
    readonly specializationName: "specializationName";
};
export type SpecializationScalarFieldEnum = (typeof SpecializationScalarFieldEnum)[keyof typeof SpecializationScalarFieldEnum];
export declare const DoctorSpecializationScalarFieldEnum: {
    readonly id: "id";
    readonly doctorId: "doctorId";
    readonly specializationId: "specializationId";
};
export type DoctorSpecializationScalarFieldEnum = (typeof DoctorSpecializationScalarFieldEnum)[keyof typeof DoctorSpecializationScalarFieldEnum];
export declare const QualificationScalarFieldEnum: {
    readonly id: "id";
    readonly doctorId: "doctorId";
    readonly qualificationName: "qualificationName";
    readonly instituteName: "instituteName";
    readonly procurementYear: "procurementYear";
};
export type QualificationScalarFieldEnum = (typeof QualificationScalarFieldEnum)[keyof typeof QualificationScalarFieldEnum];
export declare const HospitalAffiliationScalarFieldEnum: {
    readonly id: "id";
    readonly doctorId: "doctorId";
    readonly hospitalName: "hospitalName";
    readonly city: "city";
    readonly country: "country";
    readonly startDate: "startDate";
    readonly endDate: "endDate";
};
export type HospitalAffiliationScalarFieldEnum = (typeof HospitalAffiliationScalarFieldEnum)[keyof typeof HospitalAffiliationScalarFieldEnum];
export declare const DoctorUnavailabilityScalarFieldEnum: {
    readonly id: "id";
    readonly doctorId: "doctorId";
    readonly date: "date";
    readonly reason: "reason";
};
export type DoctorUnavailabilityScalarFieldEnum = (typeof DoctorUnavailabilityScalarFieldEnum)[keyof typeof DoctorUnavailabilityScalarFieldEnum];
export declare const ClientAccountScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly contactNumber: "contactNumber";
    readonly email: "email";
};
export type ClientAccountScalarFieldEnum = (typeof ClientAccountScalarFieldEnum)[keyof typeof ClientAccountScalarFieldEnum];
export declare const OfficeScalarFieldEnum: {
    readonly id: "id";
    readonly doctorId: "doctorId";
    readonly hospitalAffiliationId: "hospitalAffiliationId";
    readonly timeSlotPerClientInMin: "timeSlotPerClientInMin";
    readonly firstConsultationFee: "firstConsultationFee";
    readonly followupConsultationFee: "followupConsultationFee";
    readonly streetAddress: "streetAddress";
    readonly city: "city";
    readonly state: "state";
    readonly country: "country";
    readonly zip: "zip";
};
export type OfficeScalarFieldEnum = (typeof OfficeScalarFieldEnum)[keyof typeof OfficeScalarFieldEnum];
export declare const OfficeDoctorAvailabilityScalarFieldEnum: {
    readonly id: "id";
    readonly officeId: "officeId";
    readonly dayOfWeek: "dayOfWeek";
    readonly startTime: "startTime";
    readonly endTime: "endTime";
    readonly isAvailable: "isAvailable";
    readonly reason: "reason";
};
export type OfficeDoctorAvailabilityScalarFieldEnum = (typeof OfficeDoctorAvailabilityScalarFieldEnum)[keyof typeof OfficeDoctorAvailabilityScalarFieldEnum];
export declare const InNetworkInsuranceScalarFieldEnum: {
    readonly id: "id";
    readonly officeId: "officeId";
    readonly insuranceName: "insuranceName";
};
export type InNetworkInsuranceScalarFieldEnum = (typeof InNetworkInsuranceScalarFieldEnum)[keyof typeof InNetworkInsuranceScalarFieldEnum];
export declare const TimeSlotScalarFieldEnum: {
    readonly id: "id";
    readonly officeId: "officeId";
    readonly startTime: "startTime";
    readonly endTime: "endTime";
    readonly isBooked: "isBooked";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TimeSlotScalarFieldEnum = (typeof TimeSlotScalarFieldEnum)[keyof typeof TimeSlotScalarFieldEnum];
export declare const AppointmentStatusScalarFieldEnum: {
    readonly id: "id";
    readonly status: "status";
};
export type AppointmentStatusScalarFieldEnum = (typeof AppointmentStatusScalarFieldEnum)[keyof typeof AppointmentStatusScalarFieldEnum];
export declare const AppointmentScalarFieldEnum: {
    readonly id: "id";
    readonly userAccountId: "userAccountId";
    readonly officeId: "officeId";
    readonly timeSlotId: "timeSlotId";
    readonly probableStartTime: "probableStartTime";
    readonly actualEndTime: "actualEndTime";
    readonly durationInMinutes: "durationInMinutes";
    readonly appointmentStatusId: "appointmentStatusId";
    readonly appointmentTakenDate: "appointmentTakenDate";
    readonly cancellationReason: "cancellationReason";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum];
export declare const AppointmentHistoryScalarFieldEnum: {
    readonly id: "id";
    readonly appointmentId: "appointmentId";
    readonly oldTimeSlotId: "oldTimeSlotId";
    readonly newTimeSlotId: "newTimeSlotId";
    readonly changedAt: "changedAt";
};
export type AppointmentHistoryScalarFieldEnum = (typeof AppointmentHistoryScalarFieldEnum)[keyof typeof AppointmentHistoryScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly message: "message";
    readonly isRead: "isRead";
    readonly createdAt: "createdAt";
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const UserOrderByRelevanceFieldEnum: {
    readonly email: "email";
    readonly password: "password";
    readonly role: "role";
};
export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const DoctorOrderByRelevanceFieldEnum: {
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly professionalStatement: "professionalStatement";
};
export type DoctorOrderByRelevanceFieldEnum = (typeof DoctorOrderByRelevanceFieldEnum)[keyof typeof DoctorOrderByRelevanceFieldEnum];
export declare const DoctorDocumentOrderByRelevanceFieldEnum: {
    readonly documentType: "documentType";
};
export type DoctorDocumentOrderByRelevanceFieldEnum = (typeof DoctorDocumentOrderByRelevanceFieldEnum)[keyof typeof DoctorDocumentOrderByRelevanceFieldEnum];
export declare const SpecializationOrderByRelevanceFieldEnum: {
    readonly specializationName: "specializationName";
};
export type SpecializationOrderByRelevanceFieldEnum = (typeof SpecializationOrderByRelevanceFieldEnum)[keyof typeof SpecializationOrderByRelevanceFieldEnum];
export declare const QualificationOrderByRelevanceFieldEnum: {
    readonly qualificationName: "qualificationName";
    readonly instituteName: "instituteName";
};
export type QualificationOrderByRelevanceFieldEnum = (typeof QualificationOrderByRelevanceFieldEnum)[keyof typeof QualificationOrderByRelevanceFieldEnum];
export declare const HospitalAffiliationOrderByRelevanceFieldEnum: {
    readonly hospitalName: "hospitalName";
    readonly city: "city";
    readonly country: "country";
};
export type HospitalAffiliationOrderByRelevanceFieldEnum = (typeof HospitalAffiliationOrderByRelevanceFieldEnum)[keyof typeof HospitalAffiliationOrderByRelevanceFieldEnum];
export declare const DoctorUnavailabilityOrderByRelevanceFieldEnum: {
    readonly reason: "reason";
};
export type DoctorUnavailabilityOrderByRelevanceFieldEnum = (typeof DoctorUnavailabilityOrderByRelevanceFieldEnum)[keyof typeof DoctorUnavailabilityOrderByRelevanceFieldEnum];
export declare const ClientAccountOrderByRelevanceFieldEnum: {
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly contactNumber: "contactNumber";
    readonly email: "email";
};
export type ClientAccountOrderByRelevanceFieldEnum = (typeof ClientAccountOrderByRelevanceFieldEnum)[keyof typeof ClientAccountOrderByRelevanceFieldEnum];
export declare const OfficeOrderByRelevanceFieldEnum: {
    readonly streetAddress: "streetAddress";
    readonly city: "city";
    readonly state: "state";
    readonly country: "country";
    readonly zip: "zip";
};
export type OfficeOrderByRelevanceFieldEnum = (typeof OfficeOrderByRelevanceFieldEnum)[keyof typeof OfficeOrderByRelevanceFieldEnum];
export declare const OfficeDoctorAvailabilityOrderByRelevanceFieldEnum: {
    readonly dayOfWeek: "dayOfWeek";
    readonly reason: "reason";
};
export type OfficeDoctorAvailabilityOrderByRelevanceFieldEnum = (typeof OfficeDoctorAvailabilityOrderByRelevanceFieldEnum)[keyof typeof OfficeDoctorAvailabilityOrderByRelevanceFieldEnum];
export declare const InNetworkInsuranceOrderByRelevanceFieldEnum: {
    readonly insuranceName: "insuranceName";
};
export type InNetworkInsuranceOrderByRelevanceFieldEnum = (typeof InNetworkInsuranceOrderByRelevanceFieldEnum)[keyof typeof InNetworkInsuranceOrderByRelevanceFieldEnum];
export declare const AppointmentStatusOrderByRelevanceFieldEnum: {
    readonly status: "status";
};
export type AppointmentStatusOrderByRelevanceFieldEnum = (typeof AppointmentStatusOrderByRelevanceFieldEnum)[keyof typeof AppointmentStatusOrderByRelevanceFieldEnum];
export declare const AppointmentOrderByRelevanceFieldEnum: {
    readonly cancellationReason: "cancellationReason";
};
export type AppointmentOrderByRelevanceFieldEnum = (typeof AppointmentOrderByRelevanceFieldEnum)[keyof typeof AppointmentOrderByRelevanceFieldEnum];
export declare const NotificationOrderByRelevanceFieldEnum: {
    readonly message: "message";
};
export type NotificationOrderByRelevanceFieldEnum = (typeof NotificationOrderByRelevanceFieldEnum)[keyof typeof NotificationOrderByRelevanceFieldEnum];
