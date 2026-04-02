import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DoctorModel = runtime.Types.Result.DefaultSelection<Prisma.$DoctorPayload>;
export type AggregateDoctor = {
    _count: DoctorCountAggregateOutputType | null;
    _avg: DoctorAvgAggregateOutputType | null;
    _sum: DoctorSumAggregateOutputType | null;
    _min: DoctorMinAggregateOutputType | null;
    _max: DoctorMaxAggregateOutputType | null;
};
export type DoctorAvgAggregateOutputType = {
    id: number | null;
    userId: number | null;
};
export type DoctorSumAggregateOutputType = {
    id: number | null;
    userId: number | null;
};
export type DoctorMinAggregateOutputType = {
    id: number | null;
    userId: number | null;
    firstName: string | null;
    lastName: string | null;
    professionalStatement: string | null;
    practicingFrom: Date | null;
    isVerified: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DoctorMaxAggregateOutputType = {
    id: number | null;
    userId: number | null;
    firstName: string | null;
    lastName: string | null;
    professionalStatement: string | null;
    practicingFrom: Date | null;
    isVerified: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DoctorCountAggregateOutputType = {
    id: number;
    userId: number;
    firstName: number;
    lastName: number;
    professionalStatement: number;
    practicingFrom: number;
    isVerified: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type DoctorAvgAggregateInputType = {
    id?: true;
    userId?: true;
};
export type DoctorSumAggregateInputType = {
    id?: true;
    userId?: true;
};
export type DoctorMinAggregateInputType = {
    id?: true;
    userId?: true;
    firstName?: true;
    lastName?: true;
    professionalStatement?: true;
    practicingFrom?: true;
    isVerified?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DoctorMaxAggregateInputType = {
    id?: true;
    userId?: true;
    firstName?: true;
    lastName?: true;
    professionalStatement?: true;
    practicingFrom?: true;
    isVerified?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DoctorCountAggregateInputType = {
    id?: true;
    userId?: true;
    firstName?: true;
    lastName?: true;
    professionalStatement?: true;
    practicingFrom?: true;
    isVerified?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type DoctorAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DoctorWhereInput;
    orderBy?: Prisma.DoctorOrderByWithRelationInput | Prisma.DoctorOrderByWithRelationInput[];
    cursor?: Prisma.DoctorWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DoctorCountAggregateInputType;
    _avg?: DoctorAvgAggregateInputType;
    _sum?: DoctorSumAggregateInputType;
    _min?: DoctorMinAggregateInputType;
    _max?: DoctorMaxAggregateInputType;
};
export type GetDoctorAggregateType<T extends DoctorAggregateArgs> = {
    [P in keyof T & keyof AggregateDoctor]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDoctor[P]> : Prisma.GetScalarType<T[P], AggregateDoctor[P]>;
};
export type DoctorGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DoctorWhereInput;
    orderBy?: Prisma.DoctorOrderByWithAggregationInput | Prisma.DoctorOrderByWithAggregationInput[];
    by: Prisma.DoctorScalarFieldEnum[] | Prisma.DoctorScalarFieldEnum;
    having?: Prisma.DoctorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DoctorCountAggregateInputType | true;
    _avg?: DoctorAvgAggregateInputType;
    _sum?: DoctorSumAggregateInputType;
    _min?: DoctorMinAggregateInputType;
    _max?: DoctorMaxAggregateInputType;
};
export type DoctorGroupByOutputType = {
    id: number;
    userId: number;
    firstName: string;
    lastName: string;
    professionalStatement: string | null;
    practicingFrom: Date | null;
    isVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: DoctorCountAggregateOutputType | null;
    _avg: DoctorAvgAggregateOutputType | null;
    _sum: DoctorSumAggregateOutputType | null;
    _min: DoctorMinAggregateOutputType | null;
    _max: DoctorMaxAggregateOutputType | null;
};
type GetDoctorGroupByPayload<T extends DoctorGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DoctorGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DoctorGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DoctorGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DoctorGroupByOutputType[P]>;
}>>;
export type DoctorWhereInput = {
    AND?: Prisma.DoctorWhereInput | Prisma.DoctorWhereInput[];
    OR?: Prisma.DoctorWhereInput[];
    NOT?: Prisma.DoctorWhereInput | Prisma.DoctorWhereInput[];
    id?: Prisma.IntFilter<"Doctor"> | number;
    userId?: Prisma.IntFilter<"Doctor"> | number;
    firstName?: Prisma.StringFilter<"Doctor"> | string;
    lastName?: Prisma.StringFilter<"Doctor"> | string;
    professionalStatement?: Prisma.StringNullableFilter<"Doctor"> | string | null;
    practicingFrom?: Prisma.DateTimeNullableFilter<"Doctor"> | Date | string | null;
    isVerified?: Prisma.BoolFilter<"Doctor"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Doctor"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Doctor"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    documents?: Prisma.DoctorDocumentListRelationFilter;
    specializations?: Prisma.DoctorSpecializationListRelationFilter;
    qualifications?: Prisma.QualificationListRelationFilter;
    hospitalAffiliations?: Prisma.HospitalAffiliationListRelationFilter;
    unavailability?: Prisma.DoctorUnavailabilityListRelationFilter;
    offices?: Prisma.OfficeListRelationFilter;
};
export type DoctorOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    professionalStatement?: Prisma.SortOrderInput | Prisma.SortOrder;
    practicingFrom?: Prisma.SortOrderInput | Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    documents?: Prisma.DoctorDocumentOrderByRelationAggregateInput;
    specializations?: Prisma.DoctorSpecializationOrderByRelationAggregateInput;
    qualifications?: Prisma.QualificationOrderByRelationAggregateInput;
    hospitalAffiliations?: Prisma.HospitalAffiliationOrderByRelationAggregateInput;
    unavailability?: Prisma.DoctorUnavailabilityOrderByRelationAggregateInput;
    offices?: Prisma.OfficeOrderByRelationAggregateInput;
    _relevance?: Prisma.DoctorOrderByRelevanceInput;
};
export type DoctorWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    userId?: number;
    AND?: Prisma.DoctorWhereInput | Prisma.DoctorWhereInput[];
    OR?: Prisma.DoctorWhereInput[];
    NOT?: Prisma.DoctorWhereInput | Prisma.DoctorWhereInput[];
    firstName?: Prisma.StringFilter<"Doctor"> | string;
    lastName?: Prisma.StringFilter<"Doctor"> | string;
    professionalStatement?: Prisma.StringNullableFilter<"Doctor"> | string | null;
    practicingFrom?: Prisma.DateTimeNullableFilter<"Doctor"> | Date | string | null;
    isVerified?: Prisma.BoolFilter<"Doctor"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Doctor"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Doctor"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    documents?: Prisma.DoctorDocumentListRelationFilter;
    specializations?: Prisma.DoctorSpecializationListRelationFilter;
    qualifications?: Prisma.QualificationListRelationFilter;
    hospitalAffiliations?: Prisma.HospitalAffiliationListRelationFilter;
    unavailability?: Prisma.DoctorUnavailabilityListRelationFilter;
    offices?: Prisma.OfficeListRelationFilter;
}, "id" | "userId">;
export type DoctorOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    professionalStatement?: Prisma.SortOrderInput | Prisma.SortOrder;
    practicingFrom?: Prisma.SortOrderInput | Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.DoctorCountOrderByAggregateInput;
    _avg?: Prisma.DoctorAvgOrderByAggregateInput;
    _max?: Prisma.DoctorMaxOrderByAggregateInput;
    _min?: Prisma.DoctorMinOrderByAggregateInput;
    _sum?: Prisma.DoctorSumOrderByAggregateInput;
};
export type DoctorScalarWhereWithAggregatesInput = {
    AND?: Prisma.DoctorScalarWhereWithAggregatesInput | Prisma.DoctorScalarWhereWithAggregatesInput[];
    OR?: Prisma.DoctorScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DoctorScalarWhereWithAggregatesInput | Prisma.DoctorScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Doctor"> | number;
    userId?: Prisma.IntWithAggregatesFilter<"Doctor"> | number;
    firstName?: Prisma.StringWithAggregatesFilter<"Doctor"> | string;
    lastName?: Prisma.StringWithAggregatesFilter<"Doctor"> | string;
    professionalStatement?: Prisma.StringNullableWithAggregatesFilter<"Doctor"> | string | null;
    practicingFrom?: Prisma.DateTimeNullableWithAggregatesFilter<"Doctor"> | Date | string | null;
    isVerified?: Prisma.BoolWithAggregatesFilter<"Doctor"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Doctor"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Doctor"> | Date | string;
};
export type DoctorCreateInput = {
    firstName: string;
    lastName: string;
    professionalStatement?: string | null;
    practicingFrom?: Date | string | null;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutDoctorInput;
    documents?: Prisma.DoctorDocumentCreateNestedManyWithoutDoctorInput;
    specializations?: Prisma.DoctorSpecializationCreateNestedManyWithoutDoctorInput;
    qualifications?: Prisma.QualificationCreateNestedManyWithoutDoctorInput;
    hospitalAffiliations?: Prisma.HospitalAffiliationCreateNestedManyWithoutDoctorInput;
    unavailability?: Prisma.DoctorUnavailabilityCreateNestedManyWithoutDoctorInput;
    offices?: Prisma.OfficeCreateNestedManyWithoutDoctorInput;
};
export type DoctorUncheckedCreateInput = {
    id?: number;
    userId: number;
    firstName: string;
    lastName: string;
    professionalStatement?: string | null;
    practicingFrom?: Date | string | null;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    documents?: Prisma.DoctorDocumentUncheckedCreateNestedManyWithoutDoctorInput;
    specializations?: Prisma.DoctorSpecializationUncheckedCreateNestedManyWithoutDoctorInput;
    qualifications?: Prisma.QualificationUncheckedCreateNestedManyWithoutDoctorInput;
    hospitalAffiliations?: Prisma.HospitalAffiliationUncheckedCreateNestedManyWithoutDoctorInput;
    unavailability?: Prisma.DoctorUnavailabilityUncheckedCreateNestedManyWithoutDoctorInput;
    offices?: Prisma.OfficeUncheckedCreateNestedManyWithoutDoctorInput;
};
export type DoctorUpdateInput = {
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    professionalStatement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    practicingFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutDoctorNestedInput;
    documents?: Prisma.DoctorDocumentUpdateManyWithoutDoctorNestedInput;
    specializations?: Prisma.DoctorSpecializationUpdateManyWithoutDoctorNestedInput;
    qualifications?: Prisma.QualificationUpdateManyWithoutDoctorNestedInput;
    hospitalAffiliations?: Prisma.HospitalAffiliationUpdateManyWithoutDoctorNestedInput;
    unavailability?: Prisma.DoctorUnavailabilityUpdateManyWithoutDoctorNestedInput;
    offices?: Prisma.OfficeUpdateManyWithoutDoctorNestedInput;
};
export type DoctorUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    professionalStatement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    practicingFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    documents?: Prisma.DoctorDocumentUncheckedUpdateManyWithoutDoctorNestedInput;
    specializations?: Prisma.DoctorSpecializationUncheckedUpdateManyWithoutDoctorNestedInput;
    qualifications?: Prisma.QualificationUncheckedUpdateManyWithoutDoctorNestedInput;
    hospitalAffiliations?: Prisma.HospitalAffiliationUncheckedUpdateManyWithoutDoctorNestedInput;
    unavailability?: Prisma.DoctorUnavailabilityUncheckedUpdateManyWithoutDoctorNestedInput;
    offices?: Prisma.OfficeUncheckedUpdateManyWithoutDoctorNestedInput;
};
export type DoctorCreateManyInput = {
    id?: number;
    userId: number;
    firstName: string;
    lastName: string;
    professionalStatement?: string | null;
    practicingFrom?: Date | string | null;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DoctorUpdateManyMutationInput = {
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    professionalStatement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    practicingFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DoctorUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    professionalStatement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    practicingFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DoctorNullableScalarRelationFilter = {
    is?: Prisma.DoctorWhereInput | null;
    isNot?: Prisma.DoctorWhereInput | null;
};
export type DoctorOrderByRelevanceInput = {
    fields: Prisma.DoctorOrderByRelevanceFieldEnum | Prisma.DoctorOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type DoctorCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    professionalStatement?: Prisma.SortOrder;
    practicingFrom?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DoctorAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type DoctorMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    professionalStatement?: Prisma.SortOrder;
    practicingFrom?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DoctorMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    professionalStatement?: Prisma.SortOrder;
    practicingFrom?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DoctorSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type DoctorScalarRelationFilter = {
    is?: Prisma.DoctorWhereInput;
    isNot?: Prisma.DoctorWhereInput;
};
export type DoctorCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.DoctorCreateWithoutUserInput, Prisma.DoctorUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.DoctorCreateOrConnectWithoutUserInput;
    connect?: Prisma.DoctorWhereUniqueInput;
};
export type DoctorUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.DoctorCreateWithoutUserInput, Prisma.DoctorUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.DoctorCreateOrConnectWithoutUserInput;
    connect?: Prisma.DoctorWhereUniqueInput;
};
export type DoctorUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.DoctorCreateWithoutUserInput, Prisma.DoctorUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.DoctorCreateOrConnectWithoutUserInput;
    upsert?: Prisma.DoctorUpsertWithoutUserInput;
    disconnect?: Prisma.DoctorWhereInput | boolean;
    delete?: Prisma.DoctorWhereInput | boolean;
    connect?: Prisma.DoctorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DoctorUpdateToOneWithWhereWithoutUserInput, Prisma.DoctorUpdateWithoutUserInput>, Prisma.DoctorUncheckedUpdateWithoutUserInput>;
};
export type DoctorUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.DoctorCreateWithoutUserInput, Prisma.DoctorUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.DoctorCreateOrConnectWithoutUserInput;
    upsert?: Prisma.DoctorUpsertWithoutUserInput;
    disconnect?: Prisma.DoctorWhereInput | boolean;
    delete?: Prisma.DoctorWhereInput | boolean;
    connect?: Prisma.DoctorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DoctorUpdateToOneWithWhereWithoutUserInput, Prisma.DoctorUpdateWithoutUserInput>, Prisma.DoctorUncheckedUpdateWithoutUserInput>;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type DoctorCreateNestedOneWithoutDocumentsInput = {
    create?: Prisma.XOR<Prisma.DoctorCreateWithoutDocumentsInput, Prisma.DoctorUncheckedCreateWithoutDocumentsInput>;
    connectOrCreate?: Prisma.DoctorCreateOrConnectWithoutDocumentsInput;
    connect?: Prisma.DoctorWhereUniqueInput;
};
export type DoctorUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: Prisma.XOR<Prisma.DoctorCreateWithoutDocumentsInput, Prisma.DoctorUncheckedCreateWithoutDocumentsInput>;
    connectOrCreate?: Prisma.DoctorCreateOrConnectWithoutDocumentsInput;
    upsert?: Prisma.DoctorUpsertWithoutDocumentsInput;
    connect?: Prisma.DoctorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DoctorUpdateToOneWithWhereWithoutDocumentsInput, Prisma.DoctorUpdateWithoutDocumentsInput>, Prisma.DoctorUncheckedUpdateWithoutDocumentsInput>;
};
export type DoctorCreateNestedOneWithoutSpecializationsInput = {
    create?: Prisma.XOR<Prisma.DoctorCreateWithoutSpecializationsInput, Prisma.DoctorUncheckedCreateWithoutSpecializationsInput>;
    connectOrCreate?: Prisma.DoctorCreateOrConnectWithoutSpecializationsInput;
    connect?: Prisma.DoctorWhereUniqueInput;
};
export type DoctorUpdateOneRequiredWithoutSpecializationsNestedInput = {
    create?: Prisma.XOR<Prisma.DoctorCreateWithoutSpecializationsInput, Prisma.DoctorUncheckedCreateWithoutSpecializationsInput>;
    connectOrCreate?: Prisma.DoctorCreateOrConnectWithoutSpecializationsInput;
    upsert?: Prisma.DoctorUpsertWithoutSpecializationsInput;
    connect?: Prisma.DoctorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DoctorUpdateToOneWithWhereWithoutSpecializationsInput, Prisma.DoctorUpdateWithoutSpecializationsInput>, Prisma.DoctorUncheckedUpdateWithoutSpecializationsInput>;
};
export type DoctorCreateNestedOneWithoutQualificationsInput = {
    create?: Prisma.XOR<Prisma.DoctorCreateWithoutQualificationsInput, Prisma.DoctorUncheckedCreateWithoutQualificationsInput>;
    connectOrCreate?: Prisma.DoctorCreateOrConnectWithoutQualificationsInput;
    connect?: Prisma.DoctorWhereUniqueInput;
};
export type DoctorUpdateOneRequiredWithoutQualificationsNestedInput = {
    create?: Prisma.XOR<Prisma.DoctorCreateWithoutQualificationsInput, Prisma.DoctorUncheckedCreateWithoutQualificationsInput>;
    connectOrCreate?: Prisma.DoctorCreateOrConnectWithoutQualificationsInput;
    upsert?: Prisma.DoctorUpsertWithoutQualificationsInput;
    connect?: Prisma.DoctorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DoctorUpdateToOneWithWhereWithoutQualificationsInput, Prisma.DoctorUpdateWithoutQualificationsInput>, Prisma.DoctorUncheckedUpdateWithoutQualificationsInput>;
};
export type DoctorCreateNestedOneWithoutHospitalAffiliationsInput = {
    create?: Prisma.XOR<Prisma.DoctorCreateWithoutHospitalAffiliationsInput, Prisma.DoctorUncheckedCreateWithoutHospitalAffiliationsInput>;
    connectOrCreate?: Prisma.DoctorCreateOrConnectWithoutHospitalAffiliationsInput;
    connect?: Prisma.DoctorWhereUniqueInput;
};
export type DoctorUpdateOneRequiredWithoutHospitalAffiliationsNestedInput = {
    create?: Prisma.XOR<Prisma.DoctorCreateWithoutHospitalAffiliationsInput, Prisma.DoctorUncheckedCreateWithoutHospitalAffiliationsInput>;
    connectOrCreate?: Prisma.DoctorCreateOrConnectWithoutHospitalAffiliationsInput;
    upsert?: Prisma.DoctorUpsertWithoutHospitalAffiliationsInput;
    connect?: Prisma.DoctorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DoctorUpdateToOneWithWhereWithoutHospitalAffiliationsInput, Prisma.DoctorUpdateWithoutHospitalAffiliationsInput>, Prisma.DoctorUncheckedUpdateWithoutHospitalAffiliationsInput>;
};
export type DoctorCreateNestedOneWithoutUnavailabilityInput = {
    create?: Prisma.XOR<Prisma.DoctorCreateWithoutUnavailabilityInput, Prisma.DoctorUncheckedCreateWithoutUnavailabilityInput>;
    connectOrCreate?: Prisma.DoctorCreateOrConnectWithoutUnavailabilityInput;
    connect?: Prisma.DoctorWhereUniqueInput;
};
export type DoctorUpdateOneRequiredWithoutUnavailabilityNestedInput = {
    create?: Prisma.XOR<Prisma.DoctorCreateWithoutUnavailabilityInput, Prisma.DoctorUncheckedCreateWithoutUnavailabilityInput>;
    connectOrCreate?: Prisma.DoctorCreateOrConnectWithoutUnavailabilityInput;
    upsert?: Prisma.DoctorUpsertWithoutUnavailabilityInput;
    connect?: Prisma.DoctorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DoctorUpdateToOneWithWhereWithoutUnavailabilityInput, Prisma.DoctorUpdateWithoutUnavailabilityInput>, Prisma.DoctorUncheckedUpdateWithoutUnavailabilityInput>;
};
export type DoctorCreateNestedOneWithoutOfficesInput = {
    create?: Prisma.XOR<Prisma.DoctorCreateWithoutOfficesInput, Prisma.DoctorUncheckedCreateWithoutOfficesInput>;
    connectOrCreate?: Prisma.DoctorCreateOrConnectWithoutOfficesInput;
    connect?: Prisma.DoctorWhereUniqueInput;
};
export type DoctorUpdateOneRequiredWithoutOfficesNestedInput = {
    create?: Prisma.XOR<Prisma.DoctorCreateWithoutOfficesInput, Prisma.DoctorUncheckedCreateWithoutOfficesInput>;
    connectOrCreate?: Prisma.DoctorCreateOrConnectWithoutOfficesInput;
    upsert?: Prisma.DoctorUpsertWithoutOfficesInput;
    connect?: Prisma.DoctorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DoctorUpdateToOneWithWhereWithoutOfficesInput, Prisma.DoctorUpdateWithoutOfficesInput>, Prisma.DoctorUncheckedUpdateWithoutOfficesInput>;
};
export type DoctorCreateWithoutUserInput = {
    firstName: string;
    lastName: string;
    professionalStatement?: string | null;
    practicingFrom?: Date | string | null;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    documents?: Prisma.DoctorDocumentCreateNestedManyWithoutDoctorInput;
    specializations?: Prisma.DoctorSpecializationCreateNestedManyWithoutDoctorInput;
    qualifications?: Prisma.QualificationCreateNestedManyWithoutDoctorInput;
    hospitalAffiliations?: Prisma.HospitalAffiliationCreateNestedManyWithoutDoctorInput;
    unavailability?: Prisma.DoctorUnavailabilityCreateNestedManyWithoutDoctorInput;
    offices?: Prisma.OfficeCreateNestedManyWithoutDoctorInput;
};
export type DoctorUncheckedCreateWithoutUserInput = {
    id?: number;
    firstName: string;
    lastName: string;
    professionalStatement?: string | null;
    practicingFrom?: Date | string | null;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    documents?: Prisma.DoctorDocumentUncheckedCreateNestedManyWithoutDoctorInput;
    specializations?: Prisma.DoctorSpecializationUncheckedCreateNestedManyWithoutDoctorInput;
    qualifications?: Prisma.QualificationUncheckedCreateNestedManyWithoutDoctorInput;
    hospitalAffiliations?: Prisma.HospitalAffiliationUncheckedCreateNestedManyWithoutDoctorInput;
    unavailability?: Prisma.DoctorUnavailabilityUncheckedCreateNestedManyWithoutDoctorInput;
    offices?: Prisma.OfficeUncheckedCreateNestedManyWithoutDoctorInput;
};
export type DoctorCreateOrConnectWithoutUserInput = {
    where: Prisma.DoctorWhereUniqueInput;
    create: Prisma.XOR<Prisma.DoctorCreateWithoutUserInput, Prisma.DoctorUncheckedCreateWithoutUserInput>;
};
export type DoctorUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.DoctorUpdateWithoutUserInput, Prisma.DoctorUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.DoctorCreateWithoutUserInput, Prisma.DoctorUncheckedCreateWithoutUserInput>;
    where?: Prisma.DoctorWhereInput;
};
export type DoctorUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.DoctorWhereInput;
    data: Prisma.XOR<Prisma.DoctorUpdateWithoutUserInput, Prisma.DoctorUncheckedUpdateWithoutUserInput>;
};
export type DoctorUpdateWithoutUserInput = {
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    professionalStatement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    practicingFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    documents?: Prisma.DoctorDocumentUpdateManyWithoutDoctorNestedInput;
    specializations?: Prisma.DoctorSpecializationUpdateManyWithoutDoctorNestedInput;
    qualifications?: Prisma.QualificationUpdateManyWithoutDoctorNestedInput;
    hospitalAffiliations?: Prisma.HospitalAffiliationUpdateManyWithoutDoctorNestedInput;
    unavailability?: Prisma.DoctorUnavailabilityUpdateManyWithoutDoctorNestedInput;
    offices?: Prisma.OfficeUpdateManyWithoutDoctorNestedInput;
};
export type DoctorUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    professionalStatement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    practicingFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    documents?: Prisma.DoctorDocumentUncheckedUpdateManyWithoutDoctorNestedInput;
    specializations?: Prisma.DoctorSpecializationUncheckedUpdateManyWithoutDoctorNestedInput;
    qualifications?: Prisma.QualificationUncheckedUpdateManyWithoutDoctorNestedInput;
    hospitalAffiliations?: Prisma.HospitalAffiliationUncheckedUpdateManyWithoutDoctorNestedInput;
    unavailability?: Prisma.DoctorUnavailabilityUncheckedUpdateManyWithoutDoctorNestedInput;
    offices?: Prisma.OfficeUncheckedUpdateManyWithoutDoctorNestedInput;
};
export type DoctorCreateWithoutDocumentsInput = {
    firstName: string;
    lastName: string;
    professionalStatement?: string | null;
    practicingFrom?: Date | string | null;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutDoctorInput;
    specializations?: Prisma.DoctorSpecializationCreateNestedManyWithoutDoctorInput;
    qualifications?: Prisma.QualificationCreateNestedManyWithoutDoctorInput;
    hospitalAffiliations?: Prisma.HospitalAffiliationCreateNestedManyWithoutDoctorInput;
    unavailability?: Prisma.DoctorUnavailabilityCreateNestedManyWithoutDoctorInput;
    offices?: Prisma.OfficeCreateNestedManyWithoutDoctorInput;
};
export type DoctorUncheckedCreateWithoutDocumentsInput = {
    id?: number;
    userId: number;
    firstName: string;
    lastName: string;
    professionalStatement?: string | null;
    practicingFrom?: Date | string | null;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    specializations?: Prisma.DoctorSpecializationUncheckedCreateNestedManyWithoutDoctorInput;
    qualifications?: Prisma.QualificationUncheckedCreateNestedManyWithoutDoctorInput;
    hospitalAffiliations?: Prisma.HospitalAffiliationUncheckedCreateNestedManyWithoutDoctorInput;
    unavailability?: Prisma.DoctorUnavailabilityUncheckedCreateNestedManyWithoutDoctorInput;
    offices?: Prisma.OfficeUncheckedCreateNestedManyWithoutDoctorInput;
};
export type DoctorCreateOrConnectWithoutDocumentsInput = {
    where: Prisma.DoctorWhereUniqueInput;
    create: Prisma.XOR<Prisma.DoctorCreateWithoutDocumentsInput, Prisma.DoctorUncheckedCreateWithoutDocumentsInput>;
};
export type DoctorUpsertWithoutDocumentsInput = {
    update: Prisma.XOR<Prisma.DoctorUpdateWithoutDocumentsInput, Prisma.DoctorUncheckedUpdateWithoutDocumentsInput>;
    create: Prisma.XOR<Prisma.DoctorCreateWithoutDocumentsInput, Prisma.DoctorUncheckedCreateWithoutDocumentsInput>;
    where?: Prisma.DoctorWhereInput;
};
export type DoctorUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: Prisma.DoctorWhereInput;
    data: Prisma.XOR<Prisma.DoctorUpdateWithoutDocumentsInput, Prisma.DoctorUncheckedUpdateWithoutDocumentsInput>;
};
export type DoctorUpdateWithoutDocumentsInput = {
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    professionalStatement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    practicingFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutDoctorNestedInput;
    specializations?: Prisma.DoctorSpecializationUpdateManyWithoutDoctorNestedInput;
    qualifications?: Prisma.QualificationUpdateManyWithoutDoctorNestedInput;
    hospitalAffiliations?: Prisma.HospitalAffiliationUpdateManyWithoutDoctorNestedInput;
    unavailability?: Prisma.DoctorUnavailabilityUpdateManyWithoutDoctorNestedInput;
    offices?: Prisma.OfficeUpdateManyWithoutDoctorNestedInput;
};
export type DoctorUncheckedUpdateWithoutDocumentsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    professionalStatement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    practicingFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    specializations?: Prisma.DoctorSpecializationUncheckedUpdateManyWithoutDoctorNestedInput;
    qualifications?: Prisma.QualificationUncheckedUpdateManyWithoutDoctorNestedInput;
    hospitalAffiliations?: Prisma.HospitalAffiliationUncheckedUpdateManyWithoutDoctorNestedInput;
    unavailability?: Prisma.DoctorUnavailabilityUncheckedUpdateManyWithoutDoctorNestedInput;
    offices?: Prisma.OfficeUncheckedUpdateManyWithoutDoctorNestedInput;
};
export type DoctorCreateWithoutSpecializationsInput = {
    firstName: string;
    lastName: string;
    professionalStatement?: string | null;
    practicingFrom?: Date | string | null;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutDoctorInput;
    documents?: Prisma.DoctorDocumentCreateNestedManyWithoutDoctorInput;
    qualifications?: Prisma.QualificationCreateNestedManyWithoutDoctorInput;
    hospitalAffiliations?: Prisma.HospitalAffiliationCreateNestedManyWithoutDoctorInput;
    unavailability?: Prisma.DoctorUnavailabilityCreateNestedManyWithoutDoctorInput;
    offices?: Prisma.OfficeCreateNestedManyWithoutDoctorInput;
};
export type DoctorUncheckedCreateWithoutSpecializationsInput = {
    id?: number;
    userId: number;
    firstName: string;
    lastName: string;
    professionalStatement?: string | null;
    practicingFrom?: Date | string | null;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    documents?: Prisma.DoctorDocumentUncheckedCreateNestedManyWithoutDoctorInput;
    qualifications?: Prisma.QualificationUncheckedCreateNestedManyWithoutDoctorInput;
    hospitalAffiliations?: Prisma.HospitalAffiliationUncheckedCreateNestedManyWithoutDoctorInput;
    unavailability?: Prisma.DoctorUnavailabilityUncheckedCreateNestedManyWithoutDoctorInput;
    offices?: Prisma.OfficeUncheckedCreateNestedManyWithoutDoctorInput;
};
export type DoctorCreateOrConnectWithoutSpecializationsInput = {
    where: Prisma.DoctorWhereUniqueInput;
    create: Prisma.XOR<Prisma.DoctorCreateWithoutSpecializationsInput, Prisma.DoctorUncheckedCreateWithoutSpecializationsInput>;
};
export type DoctorUpsertWithoutSpecializationsInput = {
    update: Prisma.XOR<Prisma.DoctorUpdateWithoutSpecializationsInput, Prisma.DoctorUncheckedUpdateWithoutSpecializationsInput>;
    create: Prisma.XOR<Prisma.DoctorCreateWithoutSpecializationsInput, Prisma.DoctorUncheckedCreateWithoutSpecializationsInput>;
    where?: Prisma.DoctorWhereInput;
};
export type DoctorUpdateToOneWithWhereWithoutSpecializationsInput = {
    where?: Prisma.DoctorWhereInput;
    data: Prisma.XOR<Prisma.DoctorUpdateWithoutSpecializationsInput, Prisma.DoctorUncheckedUpdateWithoutSpecializationsInput>;
};
export type DoctorUpdateWithoutSpecializationsInput = {
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    professionalStatement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    practicingFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutDoctorNestedInput;
    documents?: Prisma.DoctorDocumentUpdateManyWithoutDoctorNestedInput;
    qualifications?: Prisma.QualificationUpdateManyWithoutDoctorNestedInput;
    hospitalAffiliations?: Prisma.HospitalAffiliationUpdateManyWithoutDoctorNestedInput;
    unavailability?: Prisma.DoctorUnavailabilityUpdateManyWithoutDoctorNestedInput;
    offices?: Prisma.OfficeUpdateManyWithoutDoctorNestedInput;
};
export type DoctorUncheckedUpdateWithoutSpecializationsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    professionalStatement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    practicingFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    documents?: Prisma.DoctorDocumentUncheckedUpdateManyWithoutDoctorNestedInput;
    qualifications?: Prisma.QualificationUncheckedUpdateManyWithoutDoctorNestedInput;
    hospitalAffiliations?: Prisma.HospitalAffiliationUncheckedUpdateManyWithoutDoctorNestedInput;
    unavailability?: Prisma.DoctorUnavailabilityUncheckedUpdateManyWithoutDoctorNestedInput;
    offices?: Prisma.OfficeUncheckedUpdateManyWithoutDoctorNestedInput;
};
export type DoctorCreateWithoutQualificationsInput = {
    firstName: string;
    lastName: string;
    professionalStatement?: string | null;
    practicingFrom?: Date | string | null;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutDoctorInput;
    documents?: Prisma.DoctorDocumentCreateNestedManyWithoutDoctorInput;
    specializations?: Prisma.DoctorSpecializationCreateNestedManyWithoutDoctorInput;
    hospitalAffiliations?: Prisma.HospitalAffiliationCreateNestedManyWithoutDoctorInput;
    unavailability?: Prisma.DoctorUnavailabilityCreateNestedManyWithoutDoctorInput;
    offices?: Prisma.OfficeCreateNestedManyWithoutDoctorInput;
};
export type DoctorUncheckedCreateWithoutQualificationsInput = {
    id?: number;
    userId: number;
    firstName: string;
    lastName: string;
    professionalStatement?: string | null;
    practicingFrom?: Date | string | null;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    documents?: Prisma.DoctorDocumentUncheckedCreateNestedManyWithoutDoctorInput;
    specializations?: Prisma.DoctorSpecializationUncheckedCreateNestedManyWithoutDoctorInput;
    hospitalAffiliations?: Prisma.HospitalAffiliationUncheckedCreateNestedManyWithoutDoctorInput;
    unavailability?: Prisma.DoctorUnavailabilityUncheckedCreateNestedManyWithoutDoctorInput;
    offices?: Prisma.OfficeUncheckedCreateNestedManyWithoutDoctorInput;
};
export type DoctorCreateOrConnectWithoutQualificationsInput = {
    where: Prisma.DoctorWhereUniqueInput;
    create: Prisma.XOR<Prisma.DoctorCreateWithoutQualificationsInput, Prisma.DoctorUncheckedCreateWithoutQualificationsInput>;
};
export type DoctorUpsertWithoutQualificationsInput = {
    update: Prisma.XOR<Prisma.DoctorUpdateWithoutQualificationsInput, Prisma.DoctorUncheckedUpdateWithoutQualificationsInput>;
    create: Prisma.XOR<Prisma.DoctorCreateWithoutQualificationsInput, Prisma.DoctorUncheckedCreateWithoutQualificationsInput>;
    where?: Prisma.DoctorWhereInput;
};
export type DoctorUpdateToOneWithWhereWithoutQualificationsInput = {
    where?: Prisma.DoctorWhereInput;
    data: Prisma.XOR<Prisma.DoctorUpdateWithoutQualificationsInput, Prisma.DoctorUncheckedUpdateWithoutQualificationsInput>;
};
export type DoctorUpdateWithoutQualificationsInput = {
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    professionalStatement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    practicingFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutDoctorNestedInput;
    documents?: Prisma.DoctorDocumentUpdateManyWithoutDoctorNestedInput;
    specializations?: Prisma.DoctorSpecializationUpdateManyWithoutDoctorNestedInput;
    hospitalAffiliations?: Prisma.HospitalAffiliationUpdateManyWithoutDoctorNestedInput;
    unavailability?: Prisma.DoctorUnavailabilityUpdateManyWithoutDoctorNestedInput;
    offices?: Prisma.OfficeUpdateManyWithoutDoctorNestedInput;
};
export type DoctorUncheckedUpdateWithoutQualificationsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    professionalStatement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    practicingFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    documents?: Prisma.DoctorDocumentUncheckedUpdateManyWithoutDoctorNestedInput;
    specializations?: Prisma.DoctorSpecializationUncheckedUpdateManyWithoutDoctorNestedInput;
    hospitalAffiliations?: Prisma.HospitalAffiliationUncheckedUpdateManyWithoutDoctorNestedInput;
    unavailability?: Prisma.DoctorUnavailabilityUncheckedUpdateManyWithoutDoctorNestedInput;
    offices?: Prisma.OfficeUncheckedUpdateManyWithoutDoctorNestedInput;
};
export type DoctorCreateWithoutHospitalAffiliationsInput = {
    firstName: string;
    lastName: string;
    professionalStatement?: string | null;
    practicingFrom?: Date | string | null;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutDoctorInput;
    documents?: Prisma.DoctorDocumentCreateNestedManyWithoutDoctorInput;
    specializations?: Prisma.DoctorSpecializationCreateNestedManyWithoutDoctorInput;
    qualifications?: Prisma.QualificationCreateNestedManyWithoutDoctorInput;
    unavailability?: Prisma.DoctorUnavailabilityCreateNestedManyWithoutDoctorInput;
    offices?: Prisma.OfficeCreateNestedManyWithoutDoctorInput;
};
export type DoctorUncheckedCreateWithoutHospitalAffiliationsInput = {
    id?: number;
    userId: number;
    firstName: string;
    lastName: string;
    professionalStatement?: string | null;
    practicingFrom?: Date | string | null;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    documents?: Prisma.DoctorDocumentUncheckedCreateNestedManyWithoutDoctorInput;
    specializations?: Prisma.DoctorSpecializationUncheckedCreateNestedManyWithoutDoctorInput;
    qualifications?: Prisma.QualificationUncheckedCreateNestedManyWithoutDoctorInput;
    unavailability?: Prisma.DoctorUnavailabilityUncheckedCreateNestedManyWithoutDoctorInput;
    offices?: Prisma.OfficeUncheckedCreateNestedManyWithoutDoctorInput;
};
export type DoctorCreateOrConnectWithoutHospitalAffiliationsInput = {
    where: Prisma.DoctorWhereUniqueInput;
    create: Prisma.XOR<Prisma.DoctorCreateWithoutHospitalAffiliationsInput, Prisma.DoctorUncheckedCreateWithoutHospitalAffiliationsInput>;
};
export type DoctorUpsertWithoutHospitalAffiliationsInput = {
    update: Prisma.XOR<Prisma.DoctorUpdateWithoutHospitalAffiliationsInput, Prisma.DoctorUncheckedUpdateWithoutHospitalAffiliationsInput>;
    create: Prisma.XOR<Prisma.DoctorCreateWithoutHospitalAffiliationsInput, Prisma.DoctorUncheckedCreateWithoutHospitalAffiliationsInput>;
    where?: Prisma.DoctorWhereInput;
};
export type DoctorUpdateToOneWithWhereWithoutHospitalAffiliationsInput = {
    where?: Prisma.DoctorWhereInput;
    data: Prisma.XOR<Prisma.DoctorUpdateWithoutHospitalAffiliationsInput, Prisma.DoctorUncheckedUpdateWithoutHospitalAffiliationsInput>;
};
export type DoctorUpdateWithoutHospitalAffiliationsInput = {
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    professionalStatement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    practicingFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutDoctorNestedInput;
    documents?: Prisma.DoctorDocumentUpdateManyWithoutDoctorNestedInput;
    specializations?: Prisma.DoctorSpecializationUpdateManyWithoutDoctorNestedInput;
    qualifications?: Prisma.QualificationUpdateManyWithoutDoctorNestedInput;
    unavailability?: Prisma.DoctorUnavailabilityUpdateManyWithoutDoctorNestedInput;
    offices?: Prisma.OfficeUpdateManyWithoutDoctorNestedInput;
};
export type DoctorUncheckedUpdateWithoutHospitalAffiliationsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    professionalStatement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    practicingFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    documents?: Prisma.DoctorDocumentUncheckedUpdateManyWithoutDoctorNestedInput;
    specializations?: Prisma.DoctorSpecializationUncheckedUpdateManyWithoutDoctorNestedInput;
    qualifications?: Prisma.QualificationUncheckedUpdateManyWithoutDoctorNestedInput;
    unavailability?: Prisma.DoctorUnavailabilityUncheckedUpdateManyWithoutDoctorNestedInput;
    offices?: Prisma.OfficeUncheckedUpdateManyWithoutDoctorNestedInput;
};
export type DoctorCreateWithoutUnavailabilityInput = {
    firstName: string;
    lastName: string;
    professionalStatement?: string | null;
    practicingFrom?: Date | string | null;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutDoctorInput;
    documents?: Prisma.DoctorDocumentCreateNestedManyWithoutDoctorInput;
    specializations?: Prisma.DoctorSpecializationCreateNestedManyWithoutDoctorInput;
    qualifications?: Prisma.QualificationCreateNestedManyWithoutDoctorInput;
    hospitalAffiliations?: Prisma.HospitalAffiliationCreateNestedManyWithoutDoctorInput;
    offices?: Prisma.OfficeCreateNestedManyWithoutDoctorInput;
};
export type DoctorUncheckedCreateWithoutUnavailabilityInput = {
    id?: number;
    userId: number;
    firstName: string;
    lastName: string;
    professionalStatement?: string | null;
    practicingFrom?: Date | string | null;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    documents?: Prisma.DoctorDocumentUncheckedCreateNestedManyWithoutDoctorInput;
    specializations?: Prisma.DoctorSpecializationUncheckedCreateNestedManyWithoutDoctorInput;
    qualifications?: Prisma.QualificationUncheckedCreateNestedManyWithoutDoctorInput;
    hospitalAffiliations?: Prisma.HospitalAffiliationUncheckedCreateNestedManyWithoutDoctorInput;
    offices?: Prisma.OfficeUncheckedCreateNestedManyWithoutDoctorInput;
};
export type DoctorCreateOrConnectWithoutUnavailabilityInput = {
    where: Prisma.DoctorWhereUniqueInput;
    create: Prisma.XOR<Prisma.DoctorCreateWithoutUnavailabilityInput, Prisma.DoctorUncheckedCreateWithoutUnavailabilityInput>;
};
export type DoctorUpsertWithoutUnavailabilityInput = {
    update: Prisma.XOR<Prisma.DoctorUpdateWithoutUnavailabilityInput, Prisma.DoctorUncheckedUpdateWithoutUnavailabilityInput>;
    create: Prisma.XOR<Prisma.DoctorCreateWithoutUnavailabilityInput, Prisma.DoctorUncheckedCreateWithoutUnavailabilityInput>;
    where?: Prisma.DoctorWhereInput;
};
export type DoctorUpdateToOneWithWhereWithoutUnavailabilityInput = {
    where?: Prisma.DoctorWhereInput;
    data: Prisma.XOR<Prisma.DoctorUpdateWithoutUnavailabilityInput, Prisma.DoctorUncheckedUpdateWithoutUnavailabilityInput>;
};
export type DoctorUpdateWithoutUnavailabilityInput = {
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    professionalStatement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    practicingFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutDoctorNestedInput;
    documents?: Prisma.DoctorDocumentUpdateManyWithoutDoctorNestedInput;
    specializations?: Prisma.DoctorSpecializationUpdateManyWithoutDoctorNestedInput;
    qualifications?: Prisma.QualificationUpdateManyWithoutDoctorNestedInput;
    hospitalAffiliations?: Prisma.HospitalAffiliationUpdateManyWithoutDoctorNestedInput;
    offices?: Prisma.OfficeUpdateManyWithoutDoctorNestedInput;
};
export type DoctorUncheckedUpdateWithoutUnavailabilityInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    professionalStatement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    practicingFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    documents?: Prisma.DoctorDocumentUncheckedUpdateManyWithoutDoctorNestedInput;
    specializations?: Prisma.DoctorSpecializationUncheckedUpdateManyWithoutDoctorNestedInput;
    qualifications?: Prisma.QualificationUncheckedUpdateManyWithoutDoctorNestedInput;
    hospitalAffiliations?: Prisma.HospitalAffiliationUncheckedUpdateManyWithoutDoctorNestedInput;
    offices?: Prisma.OfficeUncheckedUpdateManyWithoutDoctorNestedInput;
};
export type DoctorCreateWithoutOfficesInput = {
    firstName: string;
    lastName: string;
    professionalStatement?: string | null;
    practicingFrom?: Date | string | null;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutDoctorInput;
    documents?: Prisma.DoctorDocumentCreateNestedManyWithoutDoctorInput;
    specializations?: Prisma.DoctorSpecializationCreateNestedManyWithoutDoctorInput;
    qualifications?: Prisma.QualificationCreateNestedManyWithoutDoctorInput;
    hospitalAffiliations?: Prisma.HospitalAffiliationCreateNestedManyWithoutDoctorInput;
    unavailability?: Prisma.DoctorUnavailabilityCreateNestedManyWithoutDoctorInput;
};
export type DoctorUncheckedCreateWithoutOfficesInput = {
    id?: number;
    userId: number;
    firstName: string;
    lastName: string;
    professionalStatement?: string | null;
    practicingFrom?: Date | string | null;
    isVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    documents?: Prisma.DoctorDocumentUncheckedCreateNestedManyWithoutDoctorInput;
    specializations?: Prisma.DoctorSpecializationUncheckedCreateNestedManyWithoutDoctorInput;
    qualifications?: Prisma.QualificationUncheckedCreateNestedManyWithoutDoctorInput;
    hospitalAffiliations?: Prisma.HospitalAffiliationUncheckedCreateNestedManyWithoutDoctorInput;
    unavailability?: Prisma.DoctorUnavailabilityUncheckedCreateNestedManyWithoutDoctorInput;
};
export type DoctorCreateOrConnectWithoutOfficesInput = {
    where: Prisma.DoctorWhereUniqueInput;
    create: Prisma.XOR<Prisma.DoctorCreateWithoutOfficesInput, Prisma.DoctorUncheckedCreateWithoutOfficesInput>;
};
export type DoctorUpsertWithoutOfficesInput = {
    update: Prisma.XOR<Prisma.DoctorUpdateWithoutOfficesInput, Prisma.DoctorUncheckedUpdateWithoutOfficesInput>;
    create: Prisma.XOR<Prisma.DoctorCreateWithoutOfficesInput, Prisma.DoctorUncheckedCreateWithoutOfficesInput>;
    where?: Prisma.DoctorWhereInput;
};
export type DoctorUpdateToOneWithWhereWithoutOfficesInput = {
    where?: Prisma.DoctorWhereInput;
    data: Prisma.XOR<Prisma.DoctorUpdateWithoutOfficesInput, Prisma.DoctorUncheckedUpdateWithoutOfficesInput>;
};
export type DoctorUpdateWithoutOfficesInput = {
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    professionalStatement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    practicingFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutDoctorNestedInput;
    documents?: Prisma.DoctorDocumentUpdateManyWithoutDoctorNestedInput;
    specializations?: Prisma.DoctorSpecializationUpdateManyWithoutDoctorNestedInput;
    qualifications?: Prisma.QualificationUpdateManyWithoutDoctorNestedInput;
    hospitalAffiliations?: Prisma.HospitalAffiliationUpdateManyWithoutDoctorNestedInput;
    unavailability?: Prisma.DoctorUnavailabilityUpdateManyWithoutDoctorNestedInput;
};
export type DoctorUncheckedUpdateWithoutOfficesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    professionalStatement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    practicingFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    documents?: Prisma.DoctorDocumentUncheckedUpdateManyWithoutDoctorNestedInput;
    specializations?: Prisma.DoctorSpecializationUncheckedUpdateManyWithoutDoctorNestedInput;
    qualifications?: Prisma.QualificationUncheckedUpdateManyWithoutDoctorNestedInput;
    hospitalAffiliations?: Prisma.HospitalAffiliationUncheckedUpdateManyWithoutDoctorNestedInput;
    unavailability?: Prisma.DoctorUnavailabilityUncheckedUpdateManyWithoutDoctorNestedInput;
};
export type DoctorCountOutputType = {
    documents: number;
    specializations: number;
    qualifications: number;
    hospitalAffiliations: number;
    unavailability: number;
    offices: number;
};
export type DoctorCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    documents?: boolean | DoctorCountOutputTypeCountDocumentsArgs;
    specializations?: boolean | DoctorCountOutputTypeCountSpecializationsArgs;
    qualifications?: boolean | DoctorCountOutputTypeCountQualificationsArgs;
    hospitalAffiliations?: boolean | DoctorCountOutputTypeCountHospitalAffiliationsArgs;
    unavailability?: boolean | DoctorCountOutputTypeCountUnavailabilityArgs;
    offices?: boolean | DoctorCountOutputTypeCountOfficesArgs;
};
export type DoctorCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DoctorCountOutputTypeSelect<ExtArgs> | null;
};
export type DoctorCountOutputTypeCountDocumentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DoctorDocumentWhereInput;
};
export type DoctorCountOutputTypeCountSpecializationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DoctorSpecializationWhereInput;
};
export type DoctorCountOutputTypeCountQualificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QualificationWhereInput;
};
export type DoctorCountOutputTypeCountHospitalAffiliationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HospitalAffiliationWhereInput;
};
export type DoctorCountOutputTypeCountUnavailabilityArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DoctorUnavailabilityWhereInput;
};
export type DoctorCountOutputTypeCountOfficesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OfficeWhereInput;
};
export type DoctorSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    professionalStatement?: boolean;
    practicingFrom?: boolean;
    isVerified?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    documents?: boolean | Prisma.Doctor$documentsArgs<ExtArgs>;
    specializations?: boolean | Prisma.Doctor$specializationsArgs<ExtArgs>;
    qualifications?: boolean | Prisma.Doctor$qualificationsArgs<ExtArgs>;
    hospitalAffiliations?: boolean | Prisma.Doctor$hospitalAffiliationsArgs<ExtArgs>;
    unavailability?: boolean | Prisma.Doctor$unavailabilityArgs<ExtArgs>;
    offices?: boolean | Prisma.Doctor$officesArgs<ExtArgs>;
    _count?: boolean | Prisma.DoctorCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["doctor"]>;
export type DoctorSelectScalar = {
    id?: boolean;
    userId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    professionalStatement?: boolean;
    practicingFrom?: boolean;
    isVerified?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type DoctorOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "firstName" | "lastName" | "professionalStatement" | "practicingFrom" | "isVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["doctor"]>;
export type DoctorInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    documents?: boolean | Prisma.Doctor$documentsArgs<ExtArgs>;
    specializations?: boolean | Prisma.Doctor$specializationsArgs<ExtArgs>;
    qualifications?: boolean | Prisma.Doctor$qualificationsArgs<ExtArgs>;
    hospitalAffiliations?: boolean | Prisma.Doctor$hospitalAffiliationsArgs<ExtArgs>;
    unavailability?: boolean | Prisma.Doctor$unavailabilityArgs<ExtArgs>;
    offices?: boolean | Prisma.Doctor$officesArgs<ExtArgs>;
    _count?: boolean | Prisma.DoctorCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $DoctorPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Doctor";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        documents: Prisma.$DoctorDocumentPayload<ExtArgs>[];
        specializations: Prisma.$DoctorSpecializationPayload<ExtArgs>[];
        qualifications: Prisma.$QualificationPayload<ExtArgs>[];
        hospitalAffiliations: Prisma.$HospitalAffiliationPayload<ExtArgs>[];
        unavailability: Prisma.$DoctorUnavailabilityPayload<ExtArgs>[];
        offices: Prisma.$OfficePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        userId: number;
        firstName: string;
        lastName: string;
        professionalStatement: string | null;
        practicingFrom: Date | null;
        isVerified: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["doctor"]>;
    composites: {};
};
export type DoctorGetPayload<S extends boolean | null | undefined | DoctorDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DoctorPayload, S>;
export type DoctorCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DoctorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DoctorCountAggregateInputType | true;
};
export interface DoctorDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Doctor'];
        meta: {
            name: 'Doctor';
        };
    };
    findUnique<T extends DoctorFindUniqueArgs>(args: Prisma.SelectSubset<T, DoctorFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DoctorClient<runtime.Types.Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DoctorFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DoctorFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DoctorClient<runtime.Types.Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DoctorFindFirstArgs>(args?: Prisma.SelectSubset<T, DoctorFindFirstArgs<ExtArgs>>): Prisma.Prisma__DoctorClient<runtime.Types.Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DoctorFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DoctorFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DoctorClient<runtime.Types.Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DoctorFindManyArgs>(args?: Prisma.SelectSubset<T, DoctorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DoctorCreateArgs>(args: Prisma.SelectSubset<T, DoctorCreateArgs<ExtArgs>>): Prisma.Prisma__DoctorClient<runtime.Types.Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DoctorCreateManyArgs>(args?: Prisma.SelectSubset<T, DoctorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends DoctorDeleteArgs>(args: Prisma.SelectSubset<T, DoctorDeleteArgs<ExtArgs>>): Prisma.Prisma__DoctorClient<runtime.Types.Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DoctorUpdateArgs>(args: Prisma.SelectSubset<T, DoctorUpdateArgs<ExtArgs>>): Prisma.Prisma__DoctorClient<runtime.Types.Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DoctorDeleteManyArgs>(args?: Prisma.SelectSubset<T, DoctorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DoctorUpdateManyArgs>(args: Prisma.SelectSubset<T, DoctorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends DoctorUpsertArgs>(args: Prisma.SelectSubset<T, DoctorUpsertArgs<ExtArgs>>): Prisma.Prisma__DoctorClient<runtime.Types.Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DoctorCountArgs>(args?: Prisma.Subset<T, DoctorCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DoctorCountAggregateOutputType> : number>;
    aggregate<T extends DoctorAggregateArgs>(args: Prisma.Subset<T, DoctorAggregateArgs>): Prisma.PrismaPromise<GetDoctorAggregateType<T>>;
    groupBy<T extends DoctorGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DoctorGroupByArgs['orderBy'];
    } : {
        orderBy?: DoctorGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DoctorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DoctorFieldRefs;
}
export interface Prisma__DoctorClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    documents<T extends Prisma.Doctor$documentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Doctor$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DoctorDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    specializations<T extends Prisma.Doctor$specializationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Doctor$specializationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    qualifications<T extends Prisma.Doctor$qualificationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Doctor$qualificationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QualificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    hospitalAffiliations<T extends Prisma.Doctor$hospitalAffiliationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Doctor$hospitalAffiliationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HospitalAffiliationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    unavailability<T extends Prisma.Doctor$unavailabilityArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Doctor$unavailabilityArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DoctorUnavailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    offices<T extends Prisma.Doctor$officesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Doctor$officesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DoctorFieldRefs {
    readonly id: Prisma.FieldRef<"Doctor", 'Int'>;
    readonly userId: Prisma.FieldRef<"Doctor", 'Int'>;
    readonly firstName: Prisma.FieldRef<"Doctor", 'String'>;
    readonly lastName: Prisma.FieldRef<"Doctor", 'String'>;
    readonly professionalStatement: Prisma.FieldRef<"Doctor", 'String'>;
    readonly practicingFrom: Prisma.FieldRef<"Doctor", 'DateTime'>;
    readonly isVerified: Prisma.FieldRef<"Doctor", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Doctor", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Doctor", 'DateTime'>;
}
export type DoctorFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DoctorSelect<ExtArgs> | null;
    omit?: Prisma.DoctorOmit<ExtArgs> | null;
    include?: Prisma.DoctorInclude<ExtArgs> | null;
    where: Prisma.DoctorWhereUniqueInput;
};
export type DoctorFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DoctorSelect<ExtArgs> | null;
    omit?: Prisma.DoctorOmit<ExtArgs> | null;
    include?: Prisma.DoctorInclude<ExtArgs> | null;
    where: Prisma.DoctorWhereUniqueInput;
};
export type DoctorFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DoctorSelect<ExtArgs> | null;
    omit?: Prisma.DoctorOmit<ExtArgs> | null;
    include?: Prisma.DoctorInclude<ExtArgs> | null;
    where?: Prisma.DoctorWhereInput;
    orderBy?: Prisma.DoctorOrderByWithRelationInput | Prisma.DoctorOrderByWithRelationInput[];
    cursor?: Prisma.DoctorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DoctorScalarFieldEnum | Prisma.DoctorScalarFieldEnum[];
};
export type DoctorFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DoctorSelect<ExtArgs> | null;
    omit?: Prisma.DoctorOmit<ExtArgs> | null;
    include?: Prisma.DoctorInclude<ExtArgs> | null;
    where?: Prisma.DoctorWhereInput;
    orderBy?: Prisma.DoctorOrderByWithRelationInput | Prisma.DoctorOrderByWithRelationInput[];
    cursor?: Prisma.DoctorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DoctorScalarFieldEnum | Prisma.DoctorScalarFieldEnum[];
};
export type DoctorFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DoctorSelect<ExtArgs> | null;
    omit?: Prisma.DoctorOmit<ExtArgs> | null;
    include?: Prisma.DoctorInclude<ExtArgs> | null;
    where?: Prisma.DoctorWhereInput;
    orderBy?: Prisma.DoctorOrderByWithRelationInput | Prisma.DoctorOrderByWithRelationInput[];
    cursor?: Prisma.DoctorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DoctorScalarFieldEnum | Prisma.DoctorScalarFieldEnum[];
};
export type DoctorCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DoctorSelect<ExtArgs> | null;
    omit?: Prisma.DoctorOmit<ExtArgs> | null;
    include?: Prisma.DoctorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DoctorCreateInput, Prisma.DoctorUncheckedCreateInput>;
};
export type DoctorCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DoctorCreateManyInput | Prisma.DoctorCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DoctorUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DoctorSelect<ExtArgs> | null;
    omit?: Prisma.DoctorOmit<ExtArgs> | null;
    include?: Prisma.DoctorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DoctorUpdateInput, Prisma.DoctorUncheckedUpdateInput>;
    where: Prisma.DoctorWhereUniqueInput;
};
export type DoctorUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DoctorUpdateManyMutationInput, Prisma.DoctorUncheckedUpdateManyInput>;
    where?: Prisma.DoctorWhereInput;
    limit?: number;
};
export type DoctorUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DoctorSelect<ExtArgs> | null;
    omit?: Prisma.DoctorOmit<ExtArgs> | null;
    include?: Prisma.DoctorInclude<ExtArgs> | null;
    where: Prisma.DoctorWhereUniqueInput;
    create: Prisma.XOR<Prisma.DoctorCreateInput, Prisma.DoctorUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DoctorUpdateInput, Prisma.DoctorUncheckedUpdateInput>;
};
export type DoctorDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DoctorSelect<ExtArgs> | null;
    omit?: Prisma.DoctorOmit<ExtArgs> | null;
    include?: Prisma.DoctorInclude<ExtArgs> | null;
    where: Prisma.DoctorWhereUniqueInput;
};
export type DoctorDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DoctorWhereInput;
    limit?: number;
};
export type Doctor$documentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DoctorDocumentSelect<ExtArgs> | null;
    omit?: Prisma.DoctorDocumentOmit<ExtArgs> | null;
    include?: Prisma.DoctorDocumentInclude<ExtArgs> | null;
    where?: Prisma.DoctorDocumentWhereInput;
    orderBy?: Prisma.DoctorDocumentOrderByWithRelationInput | Prisma.DoctorDocumentOrderByWithRelationInput[];
    cursor?: Prisma.DoctorDocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DoctorDocumentScalarFieldEnum | Prisma.DoctorDocumentScalarFieldEnum[];
};
export type Doctor$specializationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DoctorSpecializationSelect<ExtArgs> | null;
    omit?: Prisma.DoctorSpecializationOmit<ExtArgs> | null;
    include?: Prisma.DoctorSpecializationInclude<ExtArgs> | null;
    where?: Prisma.DoctorSpecializationWhereInput;
    orderBy?: Prisma.DoctorSpecializationOrderByWithRelationInput | Prisma.DoctorSpecializationOrderByWithRelationInput[];
    cursor?: Prisma.DoctorSpecializationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DoctorSpecializationScalarFieldEnum | Prisma.DoctorSpecializationScalarFieldEnum[];
};
export type Doctor$qualificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QualificationSelect<ExtArgs> | null;
    omit?: Prisma.QualificationOmit<ExtArgs> | null;
    include?: Prisma.QualificationInclude<ExtArgs> | null;
    where?: Prisma.QualificationWhereInput;
    orderBy?: Prisma.QualificationOrderByWithRelationInput | Prisma.QualificationOrderByWithRelationInput[];
    cursor?: Prisma.QualificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QualificationScalarFieldEnum | Prisma.QualificationScalarFieldEnum[];
};
export type Doctor$hospitalAffiliationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HospitalAffiliationSelect<ExtArgs> | null;
    omit?: Prisma.HospitalAffiliationOmit<ExtArgs> | null;
    include?: Prisma.HospitalAffiliationInclude<ExtArgs> | null;
    where?: Prisma.HospitalAffiliationWhereInput;
    orderBy?: Prisma.HospitalAffiliationOrderByWithRelationInput | Prisma.HospitalAffiliationOrderByWithRelationInput[];
    cursor?: Prisma.HospitalAffiliationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HospitalAffiliationScalarFieldEnum | Prisma.HospitalAffiliationScalarFieldEnum[];
};
export type Doctor$unavailabilityArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DoctorUnavailabilitySelect<ExtArgs> | null;
    omit?: Prisma.DoctorUnavailabilityOmit<ExtArgs> | null;
    include?: Prisma.DoctorUnavailabilityInclude<ExtArgs> | null;
    where?: Prisma.DoctorUnavailabilityWhereInput;
    orderBy?: Prisma.DoctorUnavailabilityOrderByWithRelationInput | Prisma.DoctorUnavailabilityOrderByWithRelationInput[];
    cursor?: Prisma.DoctorUnavailabilityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DoctorUnavailabilityScalarFieldEnum | Prisma.DoctorUnavailabilityScalarFieldEnum[];
};
export type Doctor$officesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfficeSelect<ExtArgs> | null;
    omit?: Prisma.OfficeOmit<ExtArgs> | null;
    include?: Prisma.OfficeInclude<ExtArgs> | null;
    where?: Prisma.OfficeWhereInput;
    orderBy?: Prisma.OfficeOrderByWithRelationInput | Prisma.OfficeOrderByWithRelationInput[];
    cursor?: Prisma.OfficeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OfficeScalarFieldEnum | Prisma.OfficeScalarFieldEnum[];
};
export type DoctorDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DoctorSelect<ExtArgs> | null;
    omit?: Prisma.DoctorOmit<ExtArgs> | null;
    include?: Prisma.DoctorInclude<ExtArgs> | null;
};
export {};
