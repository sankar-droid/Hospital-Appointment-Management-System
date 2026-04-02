"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentStatusOrderByRelevanceFieldEnum = exports.InNetworkInsuranceOrderByRelevanceFieldEnum = exports.OfficeDoctorAvailabilityOrderByRelevanceFieldEnum = exports.OfficeOrderByRelevanceFieldEnum = exports.ClientAccountOrderByRelevanceFieldEnum = exports.DoctorUnavailabilityOrderByRelevanceFieldEnum = exports.HospitalAffiliationOrderByRelevanceFieldEnum = exports.QualificationOrderByRelevanceFieldEnum = exports.SpecializationOrderByRelevanceFieldEnum = exports.DoctorDocumentOrderByRelevanceFieldEnum = exports.DoctorOrderByRelevanceFieldEnum = exports.NullsOrder = exports.UserOrderByRelevanceFieldEnum = exports.SortOrder = exports.NotificationScalarFieldEnum = exports.AppointmentHistoryScalarFieldEnum = exports.AppointmentScalarFieldEnum = exports.AppointmentStatusScalarFieldEnum = exports.TimeSlotScalarFieldEnum = exports.InNetworkInsuranceScalarFieldEnum = exports.OfficeDoctorAvailabilityScalarFieldEnum = exports.OfficeScalarFieldEnum = exports.ClientAccountScalarFieldEnum = exports.DoctorUnavailabilityScalarFieldEnum = exports.HospitalAffiliationScalarFieldEnum = exports.QualificationScalarFieldEnum = exports.DoctorSpecializationScalarFieldEnum = exports.SpecializationScalarFieldEnum = exports.DoctorDocumentScalarFieldEnum = exports.DoctorScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
exports.defineExtension = exports.NotificationOrderByRelevanceFieldEnum = exports.AppointmentOrderByRelevanceFieldEnum = void 0;
const runtime = __importStar(require("@prisma/client/runtime/client"));
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.5.0",
    engine: "280c870be64f457428992c43c1f6d557fab6e29e"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    User: 'User',
    Doctor: 'Doctor',
    DoctorDocument: 'DoctorDocument',
    Specialization: 'Specialization',
    DoctorSpecialization: 'DoctorSpecialization',
    Qualification: 'Qualification',
    HospitalAffiliation: 'HospitalAffiliation',
    DoctorUnavailability: 'DoctorUnavailability',
    ClientAccount: 'ClientAccount',
    Office: 'Office',
    OfficeDoctorAvailability: 'OfficeDoctorAvailability',
    InNetworkInsurance: 'InNetworkInsurance',
    TimeSlot: 'TimeSlot',
    AppointmentStatus: 'AppointmentStatus',
    Appointment: 'Appointment',
    AppointmentHistory: 'AppointmentHistory',
    Notification: 'Notification'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.DoctorScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    firstName: 'firstName',
    lastName: 'lastName',
    professionalStatement: 'professionalStatement',
    practicingFrom: 'practicingFrom',
    isVerified: 'isVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.DoctorDocumentScalarFieldEnum = {
    id: 'id',
    doctorId: 'doctorId',
    documentType: 'documentType',
    fileUrl: 'fileUrl',
    uploadedAt: 'uploadedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SpecializationScalarFieldEnum = {
    id: 'id',
    specializationName: 'specializationName'
};
exports.DoctorSpecializationScalarFieldEnum = {
    id: 'id',
    doctorId: 'doctorId',
    specializationId: 'specializationId'
};
exports.QualificationScalarFieldEnum = {
    id: 'id',
    doctorId: 'doctorId',
    qualificationName: 'qualificationName',
    instituteName: 'instituteName',
    procurementYear: 'procurementYear'
};
exports.HospitalAffiliationScalarFieldEnum = {
    id: 'id',
    doctorId: 'doctorId',
    hospitalName: 'hospitalName',
    city: 'city',
    country: 'country',
    startDate: 'startDate',
    endDate: 'endDate'
};
exports.DoctorUnavailabilityScalarFieldEnum = {
    id: 'id',
    doctorId: 'doctorId',
    date: 'date',
    reason: 'reason'
};
exports.ClientAccountScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    firstName: 'firstName',
    lastName: 'lastName',
    contactNumber: 'contactNumber',
    email: 'email'
};
exports.OfficeScalarFieldEnum = {
    id: 'id',
    doctorId: 'doctorId',
    hospitalAffiliationId: 'hospitalAffiliationId',
    timeSlotPerClientInMin: 'timeSlotPerClientInMin',
    firstConsultationFee: 'firstConsultationFee',
    followupConsultationFee: 'followupConsultationFee',
    streetAddress: 'streetAddress',
    city: 'city',
    state: 'state',
    country: 'country',
    zip: 'zip'
};
exports.OfficeDoctorAvailabilityScalarFieldEnum = {
    id: 'id',
    officeId: 'officeId',
    dayOfWeek: 'dayOfWeek',
    startTime: 'startTime',
    endTime: 'endTime',
    isAvailable: 'isAvailable',
    reason: 'reason'
};
exports.InNetworkInsuranceScalarFieldEnum = {
    id: 'id',
    officeId: 'officeId',
    insuranceName: 'insuranceName'
};
exports.TimeSlotScalarFieldEnum = {
    id: 'id',
    officeId: 'officeId',
    startTime: 'startTime',
    endTime: 'endTime',
    isBooked: 'isBooked',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.AppointmentStatusScalarFieldEnum = {
    id: 'id',
    status: 'status'
};
exports.AppointmentScalarFieldEnum = {
    id: 'id',
    userAccountId: 'userAccountId',
    officeId: 'officeId',
    timeSlotId: 'timeSlotId',
    probableStartTime: 'probableStartTime',
    actualEndTime: 'actualEndTime',
    durationInMinutes: 'durationInMinutes',
    appointmentStatusId: 'appointmentStatusId',
    appointmentTakenDate: 'appointmentTakenDate',
    cancellationReason: 'cancellationReason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.AppointmentHistoryScalarFieldEnum = {
    id: 'id',
    appointmentId: 'appointmentId',
    oldTimeSlotId: 'oldTimeSlotId',
    newTimeSlotId: 'newTimeSlotId',
    changedAt: 'changedAt'
};
exports.NotificationScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    message: 'message',
    isRead: 'isRead',
    createdAt: 'createdAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.UserOrderByRelevanceFieldEnum = {
    email: 'email',
    password: 'password',
    role: 'role'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.DoctorOrderByRelevanceFieldEnum = {
    firstName: 'firstName',
    lastName: 'lastName',
    professionalStatement: 'professionalStatement'
};
exports.DoctorDocumentOrderByRelevanceFieldEnum = {
    documentType: 'documentType'
};
exports.SpecializationOrderByRelevanceFieldEnum = {
    specializationName: 'specializationName'
};
exports.QualificationOrderByRelevanceFieldEnum = {
    qualificationName: 'qualificationName',
    instituteName: 'instituteName'
};
exports.HospitalAffiliationOrderByRelevanceFieldEnum = {
    hospitalName: 'hospitalName',
    city: 'city',
    country: 'country'
};
exports.DoctorUnavailabilityOrderByRelevanceFieldEnum = {
    reason: 'reason'
};
exports.ClientAccountOrderByRelevanceFieldEnum = {
    firstName: 'firstName',
    lastName: 'lastName',
    contactNumber: 'contactNumber',
    email: 'email'
};
exports.OfficeOrderByRelevanceFieldEnum = {
    streetAddress: 'streetAddress',
    city: 'city',
    state: 'state',
    country: 'country',
    zip: 'zip'
};
exports.OfficeDoctorAvailabilityOrderByRelevanceFieldEnum = {
    dayOfWeek: 'dayOfWeek',
    reason: 'reason'
};
exports.InNetworkInsuranceOrderByRelevanceFieldEnum = {
    insuranceName: 'insuranceName'
};
exports.AppointmentStatusOrderByRelevanceFieldEnum = {
    status: 'status'
};
exports.AppointmentOrderByRelevanceFieldEnum = {
    cancellationReason: 'cancellationReason'
};
exports.NotificationOrderByRelevanceFieldEnum = {
    message: 'message'
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map