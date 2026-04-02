import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
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
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "doctor" | "doctorDocument" | "specialization" | "doctorSpecialization" | "qualification" | "hospitalAffiliation" | "doctorUnavailability" | "clientAccount" | "office" | "officeDoctorAvailability" | "inNetworkInsurance" | "timeSlot" | "appointmentStatus" | "appointment" | "appointmentHistory" | "notification";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        Doctor: {
            payload: Prisma.$DoctorPayload<ExtArgs>;
            fields: Prisma.DoctorFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DoctorFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DoctorFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorPayload>;
                };
                findFirst: {
                    args: Prisma.DoctorFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DoctorFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorPayload>;
                };
                findMany: {
                    args: Prisma.DoctorFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorPayload>[];
                };
                create: {
                    args: Prisma.DoctorCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorPayload>;
                };
                createMany: {
                    args: Prisma.DoctorCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.DoctorDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorPayload>;
                };
                update: {
                    args: Prisma.DoctorUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorPayload>;
                };
                deleteMany: {
                    args: Prisma.DoctorDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DoctorUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.DoctorUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorPayload>;
                };
                aggregate: {
                    args: Prisma.DoctorAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDoctor>;
                };
                groupBy: {
                    args: Prisma.DoctorGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DoctorGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DoctorCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DoctorCountAggregateOutputType> | number;
                };
            };
        };
        DoctorDocument: {
            payload: Prisma.$DoctorDocumentPayload<ExtArgs>;
            fields: Prisma.DoctorDocumentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DoctorDocumentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorDocumentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DoctorDocumentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorDocumentPayload>;
                };
                findFirst: {
                    args: Prisma.DoctorDocumentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorDocumentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DoctorDocumentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorDocumentPayload>;
                };
                findMany: {
                    args: Prisma.DoctorDocumentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorDocumentPayload>[];
                };
                create: {
                    args: Prisma.DoctorDocumentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorDocumentPayload>;
                };
                createMany: {
                    args: Prisma.DoctorDocumentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.DoctorDocumentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorDocumentPayload>;
                };
                update: {
                    args: Prisma.DoctorDocumentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorDocumentPayload>;
                };
                deleteMany: {
                    args: Prisma.DoctorDocumentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DoctorDocumentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.DoctorDocumentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorDocumentPayload>;
                };
                aggregate: {
                    args: Prisma.DoctorDocumentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDoctorDocument>;
                };
                groupBy: {
                    args: Prisma.DoctorDocumentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DoctorDocumentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DoctorDocumentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DoctorDocumentCountAggregateOutputType> | number;
                };
            };
        };
        Specialization: {
            payload: Prisma.$SpecializationPayload<ExtArgs>;
            fields: Prisma.SpecializationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SpecializationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SpecializationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SpecializationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SpecializationPayload>;
                };
                findFirst: {
                    args: Prisma.SpecializationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SpecializationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SpecializationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SpecializationPayload>;
                };
                findMany: {
                    args: Prisma.SpecializationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SpecializationPayload>[];
                };
                create: {
                    args: Prisma.SpecializationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SpecializationPayload>;
                };
                createMany: {
                    args: Prisma.SpecializationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.SpecializationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SpecializationPayload>;
                };
                update: {
                    args: Prisma.SpecializationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SpecializationPayload>;
                };
                deleteMany: {
                    args: Prisma.SpecializationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SpecializationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.SpecializationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SpecializationPayload>;
                };
                aggregate: {
                    args: Prisma.SpecializationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSpecialization>;
                };
                groupBy: {
                    args: Prisma.SpecializationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SpecializationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SpecializationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SpecializationCountAggregateOutputType> | number;
                };
            };
        };
        DoctorSpecialization: {
            payload: Prisma.$DoctorSpecializationPayload<ExtArgs>;
            fields: Prisma.DoctorSpecializationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DoctorSpecializationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DoctorSpecializationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload>;
                };
                findFirst: {
                    args: Prisma.DoctorSpecializationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DoctorSpecializationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload>;
                };
                findMany: {
                    args: Prisma.DoctorSpecializationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload>[];
                };
                create: {
                    args: Prisma.DoctorSpecializationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload>;
                };
                createMany: {
                    args: Prisma.DoctorSpecializationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.DoctorSpecializationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload>;
                };
                update: {
                    args: Prisma.DoctorSpecializationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload>;
                };
                deleteMany: {
                    args: Prisma.DoctorSpecializationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DoctorSpecializationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.DoctorSpecializationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload>;
                };
                aggregate: {
                    args: Prisma.DoctorSpecializationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDoctorSpecialization>;
                };
                groupBy: {
                    args: Prisma.DoctorSpecializationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DoctorSpecializationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DoctorSpecializationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DoctorSpecializationCountAggregateOutputType> | number;
                };
            };
        };
        Qualification: {
            payload: Prisma.$QualificationPayload<ExtArgs>;
            fields: Prisma.QualificationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.QualificationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QualificationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.QualificationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QualificationPayload>;
                };
                findFirst: {
                    args: Prisma.QualificationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QualificationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.QualificationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QualificationPayload>;
                };
                findMany: {
                    args: Prisma.QualificationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QualificationPayload>[];
                };
                create: {
                    args: Prisma.QualificationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QualificationPayload>;
                };
                createMany: {
                    args: Prisma.QualificationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.QualificationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QualificationPayload>;
                };
                update: {
                    args: Prisma.QualificationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QualificationPayload>;
                };
                deleteMany: {
                    args: Prisma.QualificationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.QualificationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.QualificationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QualificationPayload>;
                };
                aggregate: {
                    args: Prisma.QualificationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateQualification>;
                };
                groupBy: {
                    args: Prisma.QualificationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.QualificationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.QualificationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.QualificationCountAggregateOutputType> | number;
                };
            };
        };
        HospitalAffiliation: {
            payload: Prisma.$HospitalAffiliationPayload<ExtArgs>;
            fields: Prisma.HospitalAffiliationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.HospitalAffiliationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HospitalAffiliationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.HospitalAffiliationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HospitalAffiliationPayload>;
                };
                findFirst: {
                    args: Prisma.HospitalAffiliationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HospitalAffiliationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.HospitalAffiliationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HospitalAffiliationPayload>;
                };
                findMany: {
                    args: Prisma.HospitalAffiliationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HospitalAffiliationPayload>[];
                };
                create: {
                    args: Prisma.HospitalAffiliationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HospitalAffiliationPayload>;
                };
                createMany: {
                    args: Prisma.HospitalAffiliationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.HospitalAffiliationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HospitalAffiliationPayload>;
                };
                update: {
                    args: Prisma.HospitalAffiliationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HospitalAffiliationPayload>;
                };
                deleteMany: {
                    args: Prisma.HospitalAffiliationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.HospitalAffiliationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.HospitalAffiliationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HospitalAffiliationPayload>;
                };
                aggregate: {
                    args: Prisma.HospitalAffiliationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateHospitalAffiliation>;
                };
                groupBy: {
                    args: Prisma.HospitalAffiliationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.HospitalAffiliationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.HospitalAffiliationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.HospitalAffiliationCountAggregateOutputType> | number;
                };
            };
        };
        DoctorUnavailability: {
            payload: Prisma.$DoctorUnavailabilityPayload<ExtArgs>;
            fields: Prisma.DoctorUnavailabilityFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DoctorUnavailabilityFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorUnavailabilityPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DoctorUnavailabilityFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorUnavailabilityPayload>;
                };
                findFirst: {
                    args: Prisma.DoctorUnavailabilityFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorUnavailabilityPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DoctorUnavailabilityFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorUnavailabilityPayload>;
                };
                findMany: {
                    args: Prisma.DoctorUnavailabilityFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorUnavailabilityPayload>[];
                };
                create: {
                    args: Prisma.DoctorUnavailabilityCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorUnavailabilityPayload>;
                };
                createMany: {
                    args: Prisma.DoctorUnavailabilityCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.DoctorUnavailabilityDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorUnavailabilityPayload>;
                };
                update: {
                    args: Prisma.DoctorUnavailabilityUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorUnavailabilityPayload>;
                };
                deleteMany: {
                    args: Prisma.DoctorUnavailabilityDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DoctorUnavailabilityUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.DoctorUnavailabilityUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorUnavailabilityPayload>;
                };
                aggregate: {
                    args: Prisma.DoctorUnavailabilityAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDoctorUnavailability>;
                };
                groupBy: {
                    args: Prisma.DoctorUnavailabilityGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DoctorUnavailabilityGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DoctorUnavailabilityCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DoctorUnavailabilityCountAggregateOutputType> | number;
                };
            };
        };
        ClientAccount: {
            payload: Prisma.$ClientAccountPayload<ExtArgs>;
            fields: Prisma.ClientAccountFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ClientAccountFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientAccountPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ClientAccountFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientAccountPayload>;
                };
                findFirst: {
                    args: Prisma.ClientAccountFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientAccountPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ClientAccountFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientAccountPayload>;
                };
                findMany: {
                    args: Prisma.ClientAccountFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientAccountPayload>[];
                };
                create: {
                    args: Prisma.ClientAccountCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientAccountPayload>;
                };
                createMany: {
                    args: Prisma.ClientAccountCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ClientAccountDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientAccountPayload>;
                };
                update: {
                    args: Prisma.ClientAccountUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientAccountPayload>;
                };
                deleteMany: {
                    args: Prisma.ClientAccountDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ClientAccountUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ClientAccountUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientAccountPayload>;
                };
                aggregate: {
                    args: Prisma.ClientAccountAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateClientAccount>;
                };
                groupBy: {
                    args: Prisma.ClientAccountGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClientAccountGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ClientAccountCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClientAccountCountAggregateOutputType> | number;
                };
            };
        };
        Office: {
            payload: Prisma.$OfficePayload<ExtArgs>;
            fields: Prisma.OfficeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OfficeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OfficePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OfficeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OfficePayload>;
                };
                findFirst: {
                    args: Prisma.OfficeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OfficePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OfficeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OfficePayload>;
                };
                findMany: {
                    args: Prisma.OfficeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OfficePayload>[];
                };
                create: {
                    args: Prisma.OfficeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OfficePayload>;
                };
                createMany: {
                    args: Prisma.OfficeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.OfficeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OfficePayload>;
                };
                update: {
                    args: Prisma.OfficeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OfficePayload>;
                };
                deleteMany: {
                    args: Prisma.OfficeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OfficeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.OfficeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OfficePayload>;
                };
                aggregate: {
                    args: Prisma.OfficeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOffice>;
                };
                groupBy: {
                    args: Prisma.OfficeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OfficeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OfficeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OfficeCountAggregateOutputType> | number;
                };
            };
        };
        OfficeDoctorAvailability: {
            payload: Prisma.$OfficeDoctorAvailabilityPayload<ExtArgs>;
            fields: Prisma.OfficeDoctorAvailabilityFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OfficeDoctorAvailabilityFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OfficeDoctorAvailabilityPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OfficeDoctorAvailabilityFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OfficeDoctorAvailabilityPayload>;
                };
                findFirst: {
                    args: Prisma.OfficeDoctorAvailabilityFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OfficeDoctorAvailabilityPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OfficeDoctorAvailabilityFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OfficeDoctorAvailabilityPayload>;
                };
                findMany: {
                    args: Prisma.OfficeDoctorAvailabilityFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OfficeDoctorAvailabilityPayload>[];
                };
                create: {
                    args: Prisma.OfficeDoctorAvailabilityCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OfficeDoctorAvailabilityPayload>;
                };
                createMany: {
                    args: Prisma.OfficeDoctorAvailabilityCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.OfficeDoctorAvailabilityDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OfficeDoctorAvailabilityPayload>;
                };
                update: {
                    args: Prisma.OfficeDoctorAvailabilityUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OfficeDoctorAvailabilityPayload>;
                };
                deleteMany: {
                    args: Prisma.OfficeDoctorAvailabilityDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OfficeDoctorAvailabilityUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.OfficeDoctorAvailabilityUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OfficeDoctorAvailabilityPayload>;
                };
                aggregate: {
                    args: Prisma.OfficeDoctorAvailabilityAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOfficeDoctorAvailability>;
                };
                groupBy: {
                    args: Prisma.OfficeDoctorAvailabilityGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OfficeDoctorAvailabilityGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OfficeDoctorAvailabilityCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OfficeDoctorAvailabilityCountAggregateOutputType> | number;
                };
            };
        };
        InNetworkInsurance: {
            payload: Prisma.$InNetworkInsurancePayload<ExtArgs>;
            fields: Prisma.InNetworkInsuranceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.InNetworkInsuranceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InNetworkInsurancePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.InNetworkInsuranceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InNetworkInsurancePayload>;
                };
                findFirst: {
                    args: Prisma.InNetworkInsuranceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InNetworkInsurancePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.InNetworkInsuranceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InNetworkInsurancePayload>;
                };
                findMany: {
                    args: Prisma.InNetworkInsuranceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InNetworkInsurancePayload>[];
                };
                create: {
                    args: Prisma.InNetworkInsuranceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InNetworkInsurancePayload>;
                };
                createMany: {
                    args: Prisma.InNetworkInsuranceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.InNetworkInsuranceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InNetworkInsurancePayload>;
                };
                update: {
                    args: Prisma.InNetworkInsuranceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InNetworkInsurancePayload>;
                };
                deleteMany: {
                    args: Prisma.InNetworkInsuranceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.InNetworkInsuranceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.InNetworkInsuranceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InNetworkInsurancePayload>;
                };
                aggregate: {
                    args: Prisma.InNetworkInsuranceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateInNetworkInsurance>;
                };
                groupBy: {
                    args: Prisma.InNetworkInsuranceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InNetworkInsuranceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.InNetworkInsuranceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InNetworkInsuranceCountAggregateOutputType> | number;
                };
            };
        };
        TimeSlot: {
            payload: Prisma.$TimeSlotPayload<ExtArgs>;
            fields: Prisma.TimeSlotFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TimeSlotFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TimeSlotPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TimeSlotFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TimeSlotPayload>;
                };
                findFirst: {
                    args: Prisma.TimeSlotFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TimeSlotPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TimeSlotFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TimeSlotPayload>;
                };
                findMany: {
                    args: Prisma.TimeSlotFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TimeSlotPayload>[];
                };
                create: {
                    args: Prisma.TimeSlotCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TimeSlotPayload>;
                };
                createMany: {
                    args: Prisma.TimeSlotCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.TimeSlotDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TimeSlotPayload>;
                };
                update: {
                    args: Prisma.TimeSlotUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TimeSlotPayload>;
                };
                deleteMany: {
                    args: Prisma.TimeSlotDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TimeSlotUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.TimeSlotUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TimeSlotPayload>;
                };
                aggregate: {
                    args: Prisma.TimeSlotAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTimeSlot>;
                };
                groupBy: {
                    args: Prisma.TimeSlotGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TimeSlotGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TimeSlotCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TimeSlotCountAggregateOutputType> | number;
                };
            };
        };
        AppointmentStatus: {
            payload: Prisma.$AppointmentStatusPayload<ExtArgs>;
            fields: Prisma.AppointmentStatusFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AppointmentStatusFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AppointmentStatusPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AppointmentStatusFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AppointmentStatusPayload>;
                };
                findFirst: {
                    args: Prisma.AppointmentStatusFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AppointmentStatusPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AppointmentStatusFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AppointmentStatusPayload>;
                };
                findMany: {
                    args: Prisma.AppointmentStatusFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AppointmentStatusPayload>[];
                };
                create: {
                    args: Prisma.AppointmentStatusCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AppointmentStatusPayload>;
                };
                createMany: {
                    args: Prisma.AppointmentStatusCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.AppointmentStatusDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AppointmentStatusPayload>;
                };
                update: {
                    args: Prisma.AppointmentStatusUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AppointmentStatusPayload>;
                };
                deleteMany: {
                    args: Prisma.AppointmentStatusDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AppointmentStatusUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.AppointmentStatusUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AppointmentStatusPayload>;
                };
                aggregate: {
                    args: Prisma.AppointmentStatusAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAppointmentStatus>;
                };
                groupBy: {
                    args: Prisma.AppointmentStatusGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AppointmentStatusGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AppointmentStatusCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AppointmentStatusCountAggregateOutputType> | number;
                };
            };
        };
        Appointment: {
            payload: Prisma.$AppointmentPayload<ExtArgs>;
            fields: Prisma.AppointmentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AppointmentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AppointmentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AppointmentPayload>;
                };
                findFirst: {
                    args: Prisma.AppointmentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AppointmentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AppointmentPayload>;
                };
                findMany: {
                    args: Prisma.AppointmentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AppointmentPayload>[];
                };
                create: {
                    args: Prisma.AppointmentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AppointmentPayload>;
                };
                createMany: {
                    args: Prisma.AppointmentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.AppointmentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AppointmentPayload>;
                };
                update: {
                    args: Prisma.AppointmentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AppointmentPayload>;
                };
                deleteMany: {
                    args: Prisma.AppointmentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AppointmentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.AppointmentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AppointmentPayload>;
                };
                aggregate: {
                    args: Prisma.AppointmentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAppointment>;
                };
                groupBy: {
                    args: Prisma.AppointmentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AppointmentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AppointmentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AppointmentCountAggregateOutputType> | number;
                };
            };
        };
        AppointmentHistory: {
            payload: Prisma.$AppointmentHistoryPayload<ExtArgs>;
            fields: Prisma.AppointmentHistoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AppointmentHistoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AppointmentHistoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AppointmentHistoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AppointmentHistoryPayload>;
                };
                findFirst: {
                    args: Prisma.AppointmentHistoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AppointmentHistoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AppointmentHistoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AppointmentHistoryPayload>;
                };
                findMany: {
                    args: Prisma.AppointmentHistoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AppointmentHistoryPayload>[];
                };
                create: {
                    args: Prisma.AppointmentHistoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AppointmentHistoryPayload>;
                };
                createMany: {
                    args: Prisma.AppointmentHistoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.AppointmentHistoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AppointmentHistoryPayload>;
                };
                update: {
                    args: Prisma.AppointmentHistoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AppointmentHistoryPayload>;
                };
                deleteMany: {
                    args: Prisma.AppointmentHistoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AppointmentHistoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.AppointmentHistoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AppointmentHistoryPayload>;
                };
                aggregate: {
                    args: Prisma.AppointmentHistoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAppointmentHistory>;
                };
                groupBy: {
                    args: Prisma.AppointmentHistoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AppointmentHistoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AppointmentHistoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AppointmentHistoryCountAggregateOutputType> | number;
                };
            };
        };
        Notification: {
            payload: Prisma.$NotificationPayload<ExtArgs>;
            fields: Prisma.NotificationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.NotificationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                findFirst: {
                    args: Prisma.NotificationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                findMany: {
                    args: Prisma.NotificationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                create: {
                    args: Prisma.NotificationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                createMany: {
                    args: Prisma.NotificationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.NotificationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                update: {
                    args: Prisma.NotificationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                deleteMany: {
                    args: Prisma.NotificationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.NotificationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.NotificationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                aggregate: {
                    args: Prisma.NotificationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNotification>;
                };
                groupBy: {
                    args: Prisma.NotificationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.NotificationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
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
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
};
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    doctor?: Prisma.DoctorOmit;
    doctorDocument?: Prisma.DoctorDocumentOmit;
    specialization?: Prisma.SpecializationOmit;
    doctorSpecialization?: Prisma.DoctorSpecializationOmit;
    qualification?: Prisma.QualificationOmit;
    hospitalAffiliation?: Prisma.HospitalAffiliationOmit;
    doctorUnavailability?: Prisma.DoctorUnavailabilityOmit;
    clientAccount?: Prisma.ClientAccountOmit;
    office?: Prisma.OfficeOmit;
    officeDoctorAvailability?: Prisma.OfficeDoctorAvailabilityOmit;
    inNetworkInsurance?: Prisma.InNetworkInsuranceOmit;
    timeSlot?: Prisma.TimeSlotOmit;
    appointmentStatus?: Prisma.AppointmentStatusOmit;
    appointment?: Prisma.AppointmentOmit;
    appointmentHistory?: Prisma.AppointmentHistoryOmit;
    notification?: Prisma.NotificationOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
