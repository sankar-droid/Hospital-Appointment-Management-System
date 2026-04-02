import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OfficeModel = runtime.Types.Result.DefaultSelection<Prisma.$OfficePayload>;
export type AggregateOffice = {
    _count: OfficeCountAggregateOutputType | null;
    _avg: OfficeAvgAggregateOutputType | null;
    _sum: OfficeSumAggregateOutputType | null;
    _min: OfficeMinAggregateOutputType | null;
    _max: OfficeMaxAggregateOutputType | null;
};
export type OfficeAvgAggregateOutputType = {
    id: number | null;
    doctorId: number | null;
    hospitalAffiliationId: number | null;
    timeSlotPerClientInMin: number | null;
    firstConsultationFee: number | null;
    followupConsultationFee: number | null;
};
export type OfficeSumAggregateOutputType = {
    id: number | null;
    doctorId: number | null;
    hospitalAffiliationId: number | null;
    timeSlotPerClientInMin: number | null;
    firstConsultationFee: number | null;
    followupConsultationFee: number | null;
};
export type OfficeMinAggregateOutputType = {
    id: number | null;
    doctorId: number | null;
    hospitalAffiliationId: number | null;
    timeSlotPerClientInMin: number | null;
    firstConsultationFee: number | null;
    followupConsultationFee: number | null;
    streetAddress: string | null;
    city: string | null;
    state: string | null;
    country: string | null;
    zip: string | null;
};
export type OfficeMaxAggregateOutputType = {
    id: number | null;
    doctorId: number | null;
    hospitalAffiliationId: number | null;
    timeSlotPerClientInMin: number | null;
    firstConsultationFee: number | null;
    followupConsultationFee: number | null;
    streetAddress: string | null;
    city: string | null;
    state: string | null;
    country: string | null;
    zip: string | null;
};
export type OfficeCountAggregateOutputType = {
    id: number;
    doctorId: number;
    hospitalAffiliationId: number;
    timeSlotPerClientInMin: number;
    firstConsultationFee: number;
    followupConsultationFee: number;
    streetAddress: number;
    city: number;
    state: number;
    country: number;
    zip: number;
    _all: number;
};
export type OfficeAvgAggregateInputType = {
    id?: true;
    doctorId?: true;
    hospitalAffiliationId?: true;
    timeSlotPerClientInMin?: true;
    firstConsultationFee?: true;
    followupConsultationFee?: true;
};
export type OfficeSumAggregateInputType = {
    id?: true;
    doctorId?: true;
    hospitalAffiliationId?: true;
    timeSlotPerClientInMin?: true;
    firstConsultationFee?: true;
    followupConsultationFee?: true;
};
export type OfficeMinAggregateInputType = {
    id?: true;
    doctorId?: true;
    hospitalAffiliationId?: true;
    timeSlotPerClientInMin?: true;
    firstConsultationFee?: true;
    followupConsultationFee?: true;
    streetAddress?: true;
    city?: true;
    state?: true;
    country?: true;
    zip?: true;
};
export type OfficeMaxAggregateInputType = {
    id?: true;
    doctorId?: true;
    hospitalAffiliationId?: true;
    timeSlotPerClientInMin?: true;
    firstConsultationFee?: true;
    followupConsultationFee?: true;
    streetAddress?: true;
    city?: true;
    state?: true;
    country?: true;
    zip?: true;
};
export type OfficeCountAggregateInputType = {
    id?: true;
    doctorId?: true;
    hospitalAffiliationId?: true;
    timeSlotPerClientInMin?: true;
    firstConsultationFee?: true;
    followupConsultationFee?: true;
    streetAddress?: true;
    city?: true;
    state?: true;
    country?: true;
    zip?: true;
    _all?: true;
};
export type OfficeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OfficeWhereInput;
    orderBy?: Prisma.OfficeOrderByWithRelationInput | Prisma.OfficeOrderByWithRelationInput[];
    cursor?: Prisma.OfficeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OfficeCountAggregateInputType;
    _avg?: OfficeAvgAggregateInputType;
    _sum?: OfficeSumAggregateInputType;
    _min?: OfficeMinAggregateInputType;
    _max?: OfficeMaxAggregateInputType;
};
export type GetOfficeAggregateType<T extends OfficeAggregateArgs> = {
    [P in keyof T & keyof AggregateOffice]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOffice[P]> : Prisma.GetScalarType<T[P], AggregateOffice[P]>;
};
export type OfficeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OfficeWhereInput;
    orderBy?: Prisma.OfficeOrderByWithAggregationInput | Prisma.OfficeOrderByWithAggregationInput[];
    by: Prisma.OfficeScalarFieldEnum[] | Prisma.OfficeScalarFieldEnum;
    having?: Prisma.OfficeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OfficeCountAggregateInputType | true;
    _avg?: OfficeAvgAggregateInputType;
    _sum?: OfficeSumAggregateInputType;
    _min?: OfficeMinAggregateInputType;
    _max?: OfficeMaxAggregateInputType;
};
export type OfficeGroupByOutputType = {
    id: number;
    doctorId: number;
    hospitalAffiliationId: number | null;
    timeSlotPerClientInMin: number;
    firstConsultationFee: number;
    followupConsultationFee: number;
    streetAddress: string;
    city: string;
    state: string;
    country: string;
    zip: string;
    _count: OfficeCountAggregateOutputType | null;
    _avg: OfficeAvgAggregateOutputType | null;
    _sum: OfficeSumAggregateOutputType | null;
    _min: OfficeMinAggregateOutputType | null;
    _max: OfficeMaxAggregateOutputType | null;
};
type GetOfficeGroupByPayload<T extends OfficeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OfficeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OfficeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OfficeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OfficeGroupByOutputType[P]>;
}>>;
export type OfficeWhereInput = {
    AND?: Prisma.OfficeWhereInput | Prisma.OfficeWhereInput[];
    OR?: Prisma.OfficeWhereInput[];
    NOT?: Prisma.OfficeWhereInput | Prisma.OfficeWhereInput[];
    id?: Prisma.IntFilter<"Office"> | number;
    doctorId?: Prisma.IntFilter<"Office"> | number;
    hospitalAffiliationId?: Prisma.IntNullableFilter<"Office"> | number | null;
    timeSlotPerClientInMin?: Prisma.IntFilter<"Office"> | number;
    firstConsultationFee?: Prisma.FloatFilter<"Office"> | number;
    followupConsultationFee?: Prisma.FloatFilter<"Office"> | number;
    streetAddress?: Prisma.StringFilter<"Office"> | string;
    city?: Prisma.StringFilter<"Office"> | string;
    state?: Prisma.StringFilter<"Office"> | string;
    country?: Prisma.StringFilter<"Office"> | string;
    zip?: Prisma.StringFilter<"Office"> | string;
    doctor?: Prisma.XOR<Prisma.DoctorScalarRelationFilter, Prisma.DoctorWhereInput>;
    hospitalAffiliation?: Prisma.XOR<Prisma.HospitalAffiliationNullableScalarRelationFilter, Prisma.HospitalAffiliationWhereInput> | null;
    availability?: Prisma.OfficeDoctorAvailabilityListRelationFilter;
    timeSlots?: Prisma.TimeSlotListRelationFilter;
    insurances?: Prisma.InNetworkInsuranceListRelationFilter;
    appointments?: Prisma.AppointmentListRelationFilter;
};
export type OfficeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    hospitalAffiliationId?: Prisma.SortOrderInput | Prisma.SortOrder;
    timeSlotPerClientInMin?: Prisma.SortOrder;
    firstConsultationFee?: Prisma.SortOrder;
    followupConsultationFee?: Prisma.SortOrder;
    streetAddress?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    zip?: Prisma.SortOrder;
    doctor?: Prisma.DoctorOrderByWithRelationInput;
    hospitalAffiliation?: Prisma.HospitalAffiliationOrderByWithRelationInput;
    availability?: Prisma.OfficeDoctorAvailabilityOrderByRelationAggregateInput;
    timeSlots?: Prisma.TimeSlotOrderByRelationAggregateInput;
    insurances?: Prisma.InNetworkInsuranceOrderByRelationAggregateInput;
    appointments?: Prisma.AppointmentOrderByRelationAggregateInput;
    _relevance?: Prisma.OfficeOrderByRelevanceInput;
};
export type OfficeWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.OfficeWhereInput | Prisma.OfficeWhereInput[];
    OR?: Prisma.OfficeWhereInput[];
    NOT?: Prisma.OfficeWhereInput | Prisma.OfficeWhereInput[];
    doctorId?: Prisma.IntFilter<"Office"> | number;
    hospitalAffiliationId?: Prisma.IntNullableFilter<"Office"> | number | null;
    timeSlotPerClientInMin?: Prisma.IntFilter<"Office"> | number;
    firstConsultationFee?: Prisma.FloatFilter<"Office"> | number;
    followupConsultationFee?: Prisma.FloatFilter<"Office"> | number;
    streetAddress?: Prisma.StringFilter<"Office"> | string;
    city?: Prisma.StringFilter<"Office"> | string;
    state?: Prisma.StringFilter<"Office"> | string;
    country?: Prisma.StringFilter<"Office"> | string;
    zip?: Prisma.StringFilter<"Office"> | string;
    doctor?: Prisma.XOR<Prisma.DoctorScalarRelationFilter, Prisma.DoctorWhereInput>;
    hospitalAffiliation?: Prisma.XOR<Prisma.HospitalAffiliationNullableScalarRelationFilter, Prisma.HospitalAffiliationWhereInput> | null;
    availability?: Prisma.OfficeDoctorAvailabilityListRelationFilter;
    timeSlots?: Prisma.TimeSlotListRelationFilter;
    insurances?: Prisma.InNetworkInsuranceListRelationFilter;
    appointments?: Prisma.AppointmentListRelationFilter;
}, "id">;
export type OfficeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    hospitalAffiliationId?: Prisma.SortOrderInput | Prisma.SortOrder;
    timeSlotPerClientInMin?: Prisma.SortOrder;
    firstConsultationFee?: Prisma.SortOrder;
    followupConsultationFee?: Prisma.SortOrder;
    streetAddress?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    zip?: Prisma.SortOrder;
    _count?: Prisma.OfficeCountOrderByAggregateInput;
    _avg?: Prisma.OfficeAvgOrderByAggregateInput;
    _max?: Prisma.OfficeMaxOrderByAggregateInput;
    _min?: Prisma.OfficeMinOrderByAggregateInput;
    _sum?: Prisma.OfficeSumOrderByAggregateInput;
};
export type OfficeScalarWhereWithAggregatesInput = {
    AND?: Prisma.OfficeScalarWhereWithAggregatesInput | Prisma.OfficeScalarWhereWithAggregatesInput[];
    OR?: Prisma.OfficeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OfficeScalarWhereWithAggregatesInput | Prisma.OfficeScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Office"> | number;
    doctorId?: Prisma.IntWithAggregatesFilter<"Office"> | number;
    hospitalAffiliationId?: Prisma.IntNullableWithAggregatesFilter<"Office"> | number | null;
    timeSlotPerClientInMin?: Prisma.IntWithAggregatesFilter<"Office"> | number;
    firstConsultationFee?: Prisma.FloatWithAggregatesFilter<"Office"> | number;
    followupConsultationFee?: Prisma.FloatWithAggregatesFilter<"Office"> | number;
    streetAddress?: Prisma.StringWithAggregatesFilter<"Office"> | string;
    city?: Prisma.StringWithAggregatesFilter<"Office"> | string;
    state?: Prisma.StringWithAggregatesFilter<"Office"> | string;
    country?: Prisma.StringWithAggregatesFilter<"Office"> | string;
    zip?: Prisma.StringWithAggregatesFilter<"Office"> | string;
};
export type OfficeCreateInput = {
    timeSlotPerClientInMin: number;
    firstConsultationFee: number;
    followupConsultationFee: number;
    streetAddress: string;
    city: string;
    state: string;
    country: string;
    zip: string;
    doctor: Prisma.DoctorCreateNestedOneWithoutOfficesInput;
    hospitalAffiliation?: Prisma.HospitalAffiliationCreateNestedOneWithoutOfficesInput;
    availability?: Prisma.OfficeDoctorAvailabilityCreateNestedManyWithoutOfficeInput;
    timeSlots?: Prisma.TimeSlotCreateNestedManyWithoutOfficeInput;
    insurances?: Prisma.InNetworkInsuranceCreateNestedManyWithoutOfficeInput;
    appointments?: Prisma.AppointmentCreateNestedManyWithoutOfficeInput;
};
export type OfficeUncheckedCreateInput = {
    id?: number;
    doctorId: number;
    hospitalAffiliationId?: number | null;
    timeSlotPerClientInMin: number;
    firstConsultationFee: number;
    followupConsultationFee: number;
    streetAddress: string;
    city: string;
    state: string;
    country: string;
    zip: string;
    availability?: Prisma.OfficeDoctorAvailabilityUncheckedCreateNestedManyWithoutOfficeInput;
    timeSlots?: Prisma.TimeSlotUncheckedCreateNestedManyWithoutOfficeInput;
    insurances?: Prisma.InNetworkInsuranceUncheckedCreateNestedManyWithoutOfficeInput;
    appointments?: Prisma.AppointmentUncheckedCreateNestedManyWithoutOfficeInput;
};
export type OfficeUpdateInput = {
    timeSlotPerClientInMin?: Prisma.IntFieldUpdateOperationsInput | number;
    firstConsultationFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    followupConsultationFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    streetAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    zip?: Prisma.StringFieldUpdateOperationsInput | string;
    doctor?: Prisma.DoctorUpdateOneRequiredWithoutOfficesNestedInput;
    hospitalAffiliation?: Prisma.HospitalAffiliationUpdateOneWithoutOfficesNestedInput;
    availability?: Prisma.OfficeDoctorAvailabilityUpdateManyWithoutOfficeNestedInput;
    timeSlots?: Prisma.TimeSlotUpdateManyWithoutOfficeNestedInput;
    insurances?: Prisma.InNetworkInsuranceUpdateManyWithoutOfficeNestedInput;
    appointments?: Prisma.AppointmentUpdateManyWithoutOfficeNestedInput;
};
export type OfficeUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    doctorId?: Prisma.IntFieldUpdateOperationsInput | number;
    hospitalAffiliationId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    timeSlotPerClientInMin?: Prisma.IntFieldUpdateOperationsInput | number;
    firstConsultationFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    followupConsultationFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    streetAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    zip?: Prisma.StringFieldUpdateOperationsInput | string;
    availability?: Prisma.OfficeDoctorAvailabilityUncheckedUpdateManyWithoutOfficeNestedInput;
    timeSlots?: Prisma.TimeSlotUncheckedUpdateManyWithoutOfficeNestedInput;
    insurances?: Prisma.InNetworkInsuranceUncheckedUpdateManyWithoutOfficeNestedInput;
    appointments?: Prisma.AppointmentUncheckedUpdateManyWithoutOfficeNestedInput;
};
export type OfficeCreateManyInput = {
    id?: number;
    doctorId: number;
    hospitalAffiliationId?: number | null;
    timeSlotPerClientInMin: number;
    firstConsultationFee: number;
    followupConsultationFee: number;
    streetAddress: string;
    city: string;
    state: string;
    country: string;
    zip: string;
};
export type OfficeUpdateManyMutationInput = {
    timeSlotPerClientInMin?: Prisma.IntFieldUpdateOperationsInput | number;
    firstConsultationFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    followupConsultationFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    streetAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    zip?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type OfficeUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    doctorId?: Prisma.IntFieldUpdateOperationsInput | number;
    hospitalAffiliationId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    timeSlotPerClientInMin?: Prisma.IntFieldUpdateOperationsInput | number;
    firstConsultationFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    followupConsultationFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    streetAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    zip?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type OfficeListRelationFilter = {
    every?: Prisma.OfficeWhereInput;
    some?: Prisma.OfficeWhereInput;
    none?: Prisma.OfficeWhereInput;
};
export type OfficeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OfficeOrderByRelevanceInput = {
    fields: Prisma.OfficeOrderByRelevanceFieldEnum | Prisma.OfficeOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type OfficeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    hospitalAffiliationId?: Prisma.SortOrder;
    timeSlotPerClientInMin?: Prisma.SortOrder;
    firstConsultationFee?: Prisma.SortOrder;
    followupConsultationFee?: Prisma.SortOrder;
    streetAddress?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    zip?: Prisma.SortOrder;
};
export type OfficeAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    hospitalAffiliationId?: Prisma.SortOrder;
    timeSlotPerClientInMin?: Prisma.SortOrder;
    firstConsultationFee?: Prisma.SortOrder;
    followupConsultationFee?: Prisma.SortOrder;
};
export type OfficeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    hospitalAffiliationId?: Prisma.SortOrder;
    timeSlotPerClientInMin?: Prisma.SortOrder;
    firstConsultationFee?: Prisma.SortOrder;
    followupConsultationFee?: Prisma.SortOrder;
    streetAddress?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    zip?: Prisma.SortOrder;
};
export type OfficeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    hospitalAffiliationId?: Prisma.SortOrder;
    timeSlotPerClientInMin?: Prisma.SortOrder;
    firstConsultationFee?: Prisma.SortOrder;
    followupConsultationFee?: Prisma.SortOrder;
    streetAddress?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    zip?: Prisma.SortOrder;
};
export type OfficeSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    hospitalAffiliationId?: Prisma.SortOrder;
    timeSlotPerClientInMin?: Prisma.SortOrder;
    firstConsultationFee?: Prisma.SortOrder;
    followupConsultationFee?: Prisma.SortOrder;
};
export type OfficeScalarRelationFilter = {
    is?: Prisma.OfficeWhereInput;
    isNot?: Prisma.OfficeWhereInput;
};
export type OfficeCreateNestedManyWithoutDoctorInput = {
    create?: Prisma.XOR<Prisma.OfficeCreateWithoutDoctorInput, Prisma.OfficeUncheckedCreateWithoutDoctorInput> | Prisma.OfficeCreateWithoutDoctorInput[] | Prisma.OfficeUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: Prisma.OfficeCreateOrConnectWithoutDoctorInput | Prisma.OfficeCreateOrConnectWithoutDoctorInput[];
    createMany?: Prisma.OfficeCreateManyDoctorInputEnvelope;
    connect?: Prisma.OfficeWhereUniqueInput | Prisma.OfficeWhereUniqueInput[];
};
export type OfficeUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: Prisma.XOR<Prisma.OfficeCreateWithoutDoctorInput, Prisma.OfficeUncheckedCreateWithoutDoctorInput> | Prisma.OfficeCreateWithoutDoctorInput[] | Prisma.OfficeUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: Prisma.OfficeCreateOrConnectWithoutDoctorInput | Prisma.OfficeCreateOrConnectWithoutDoctorInput[];
    createMany?: Prisma.OfficeCreateManyDoctorInputEnvelope;
    connect?: Prisma.OfficeWhereUniqueInput | Prisma.OfficeWhereUniqueInput[];
};
export type OfficeUpdateManyWithoutDoctorNestedInput = {
    create?: Prisma.XOR<Prisma.OfficeCreateWithoutDoctorInput, Prisma.OfficeUncheckedCreateWithoutDoctorInput> | Prisma.OfficeCreateWithoutDoctorInput[] | Prisma.OfficeUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: Prisma.OfficeCreateOrConnectWithoutDoctorInput | Prisma.OfficeCreateOrConnectWithoutDoctorInput[];
    upsert?: Prisma.OfficeUpsertWithWhereUniqueWithoutDoctorInput | Prisma.OfficeUpsertWithWhereUniqueWithoutDoctorInput[];
    createMany?: Prisma.OfficeCreateManyDoctorInputEnvelope;
    set?: Prisma.OfficeWhereUniqueInput | Prisma.OfficeWhereUniqueInput[];
    disconnect?: Prisma.OfficeWhereUniqueInput | Prisma.OfficeWhereUniqueInput[];
    delete?: Prisma.OfficeWhereUniqueInput | Prisma.OfficeWhereUniqueInput[];
    connect?: Prisma.OfficeWhereUniqueInput | Prisma.OfficeWhereUniqueInput[];
    update?: Prisma.OfficeUpdateWithWhereUniqueWithoutDoctorInput | Prisma.OfficeUpdateWithWhereUniqueWithoutDoctorInput[];
    updateMany?: Prisma.OfficeUpdateManyWithWhereWithoutDoctorInput | Prisma.OfficeUpdateManyWithWhereWithoutDoctorInput[];
    deleteMany?: Prisma.OfficeScalarWhereInput | Prisma.OfficeScalarWhereInput[];
};
export type OfficeUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: Prisma.XOR<Prisma.OfficeCreateWithoutDoctorInput, Prisma.OfficeUncheckedCreateWithoutDoctorInput> | Prisma.OfficeCreateWithoutDoctorInput[] | Prisma.OfficeUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: Prisma.OfficeCreateOrConnectWithoutDoctorInput | Prisma.OfficeCreateOrConnectWithoutDoctorInput[];
    upsert?: Prisma.OfficeUpsertWithWhereUniqueWithoutDoctorInput | Prisma.OfficeUpsertWithWhereUniqueWithoutDoctorInput[];
    createMany?: Prisma.OfficeCreateManyDoctorInputEnvelope;
    set?: Prisma.OfficeWhereUniqueInput | Prisma.OfficeWhereUniqueInput[];
    disconnect?: Prisma.OfficeWhereUniqueInput | Prisma.OfficeWhereUniqueInput[];
    delete?: Prisma.OfficeWhereUniqueInput | Prisma.OfficeWhereUniqueInput[];
    connect?: Prisma.OfficeWhereUniqueInput | Prisma.OfficeWhereUniqueInput[];
    update?: Prisma.OfficeUpdateWithWhereUniqueWithoutDoctorInput | Prisma.OfficeUpdateWithWhereUniqueWithoutDoctorInput[];
    updateMany?: Prisma.OfficeUpdateManyWithWhereWithoutDoctorInput | Prisma.OfficeUpdateManyWithWhereWithoutDoctorInput[];
    deleteMany?: Prisma.OfficeScalarWhereInput | Prisma.OfficeScalarWhereInput[];
};
export type OfficeCreateNestedManyWithoutHospitalAffiliationInput = {
    create?: Prisma.XOR<Prisma.OfficeCreateWithoutHospitalAffiliationInput, Prisma.OfficeUncheckedCreateWithoutHospitalAffiliationInput> | Prisma.OfficeCreateWithoutHospitalAffiliationInput[] | Prisma.OfficeUncheckedCreateWithoutHospitalAffiliationInput[];
    connectOrCreate?: Prisma.OfficeCreateOrConnectWithoutHospitalAffiliationInput | Prisma.OfficeCreateOrConnectWithoutHospitalAffiliationInput[];
    createMany?: Prisma.OfficeCreateManyHospitalAffiliationInputEnvelope;
    connect?: Prisma.OfficeWhereUniqueInput | Prisma.OfficeWhereUniqueInput[];
};
export type OfficeUncheckedCreateNestedManyWithoutHospitalAffiliationInput = {
    create?: Prisma.XOR<Prisma.OfficeCreateWithoutHospitalAffiliationInput, Prisma.OfficeUncheckedCreateWithoutHospitalAffiliationInput> | Prisma.OfficeCreateWithoutHospitalAffiliationInput[] | Prisma.OfficeUncheckedCreateWithoutHospitalAffiliationInput[];
    connectOrCreate?: Prisma.OfficeCreateOrConnectWithoutHospitalAffiliationInput | Prisma.OfficeCreateOrConnectWithoutHospitalAffiliationInput[];
    createMany?: Prisma.OfficeCreateManyHospitalAffiliationInputEnvelope;
    connect?: Prisma.OfficeWhereUniqueInput | Prisma.OfficeWhereUniqueInput[];
};
export type OfficeUpdateManyWithoutHospitalAffiliationNestedInput = {
    create?: Prisma.XOR<Prisma.OfficeCreateWithoutHospitalAffiliationInput, Prisma.OfficeUncheckedCreateWithoutHospitalAffiliationInput> | Prisma.OfficeCreateWithoutHospitalAffiliationInput[] | Prisma.OfficeUncheckedCreateWithoutHospitalAffiliationInput[];
    connectOrCreate?: Prisma.OfficeCreateOrConnectWithoutHospitalAffiliationInput | Prisma.OfficeCreateOrConnectWithoutHospitalAffiliationInput[];
    upsert?: Prisma.OfficeUpsertWithWhereUniqueWithoutHospitalAffiliationInput | Prisma.OfficeUpsertWithWhereUniqueWithoutHospitalAffiliationInput[];
    createMany?: Prisma.OfficeCreateManyHospitalAffiliationInputEnvelope;
    set?: Prisma.OfficeWhereUniqueInput | Prisma.OfficeWhereUniqueInput[];
    disconnect?: Prisma.OfficeWhereUniqueInput | Prisma.OfficeWhereUniqueInput[];
    delete?: Prisma.OfficeWhereUniqueInput | Prisma.OfficeWhereUniqueInput[];
    connect?: Prisma.OfficeWhereUniqueInput | Prisma.OfficeWhereUniqueInput[];
    update?: Prisma.OfficeUpdateWithWhereUniqueWithoutHospitalAffiliationInput | Prisma.OfficeUpdateWithWhereUniqueWithoutHospitalAffiliationInput[];
    updateMany?: Prisma.OfficeUpdateManyWithWhereWithoutHospitalAffiliationInput | Prisma.OfficeUpdateManyWithWhereWithoutHospitalAffiliationInput[];
    deleteMany?: Prisma.OfficeScalarWhereInput | Prisma.OfficeScalarWhereInput[];
};
export type OfficeUncheckedUpdateManyWithoutHospitalAffiliationNestedInput = {
    create?: Prisma.XOR<Prisma.OfficeCreateWithoutHospitalAffiliationInput, Prisma.OfficeUncheckedCreateWithoutHospitalAffiliationInput> | Prisma.OfficeCreateWithoutHospitalAffiliationInput[] | Prisma.OfficeUncheckedCreateWithoutHospitalAffiliationInput[];
    connectOrCreate?: Prisma.OfficeCreateOrConnectWithoutHospitalAffiliationInput | Prisma.OfficeCreateOrConnectWithoutHospitalAffiliationInput[];
    upsert?: Prisma.OfficeUpsertWithWhereUniqueWithoutHospitalAffiliationInput | Prisma.OfficeUpsertWithWhereUniqueWithoutHospitalAffiliationInput[];
    createMany?: Prisma.OfficeCreateManyHospitalAffiliationInputEnvelope;
    set?: Prisma.OfficeWhereUniqueInput | Prisma.OfficeWhereUniqueInput[];
    disconnect?: Prisma.OfficeWhereUniqueInput | Prisma.OfficeWhereUniqueInput[];
    delete?: Prisma.OfficeWhereUniqueInput | Prisma.OfficeWhereUniqueInput[];
    connect?: Prisma.OfficeWhereUniqueInput | Prisma.OfficeWhereUniqueInput[];
    update?: Prisma.OfficeUpdateWithWhereUniqueWithoutHospitalAffiliationInput | Prisma.OfficeUpdateWithWhereUniqueWithoutHospitalAffiliationInput[];
    updateMany?: Prisma.OfficeUpdateManyWithWhereWithoutHospitalAffiliationInput | Prisma.OfficeUpdateManyWithWhereWithoutHospitalAffiliationInput[];
    deleteMany?: Prisma.OfficeScalarWhereInput | Prisma.OfficeScalarWhereInput[];
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type OfficeCreateNestedOneWithoutAvailabilityInput = {
    create?: Prisma.XOR<Prisma.OfficeCreateWithoutAvailabilityInput, Prisma.OfficeUncheckedCreateWithoutAvailabilityInput>;
    connectOrCreate?: Prisma.OfficeCreateOrConnectWithoutAvailabilityInput;
    connect?: Prisma.OfficeWhereUniqueInput;
};
export type OfficeUpdateOneRequiredWithoutAvailabilityNestedInput = {
    create?: Prisma.XOR<Prisma.OfficeCreateWithoutAvailabilityInput, Prisma.OfficeUncheckedCreateWithoutAvailabilityInput>;
    connectOrCreate?: Prisma.OfficeCreateOrConnectWithoutAvailabilityInput;
    upsert?: Prisma.OfficeUpsertWithoutAvailabilityInput;
    connect?: Prisma.OfficeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OfficeUpdateToOneWithWhereWithoutAvailabilityInput, Prisma.OfficeUpdateWithoutAvailabilityInput>, Prisma.OfficeUncheckedUpdateWithoutAvailabilityInput>;
};
export type OfficeCreateNestedOneWithoutInsurancesInput = {
    create?: Prisma.XOR<Prisma.OfficeCreateWithoutInsurancesInput, Prisma.OfficeUncheckedCreateWithoutInsurancesInput>;
    connectOrCreate?: Prisma.OfficeCreateOrConnectWithoutInsurancesInput;
    connect?: Prisma.OfficeWhereUniqueInput;
};
export type OfficeUpdateOneRequiredWithoutInsurancesNestedInput = {
    create?: Prisma.XOR<Prisma.OfficeCreateWithoutInsurancesInput, Prisma.OfficeUncheckedCreateWithoutInsurancesInput>;
    connectOrCreate?: Prisma.OfficeCreateOrConnectWithoutInsurancesInput;
    upsert?: Prisma.OfficeUpsertWithoutInsurancesInput;
    connect?: Prisma.OfficeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OfficeUpdateToOneWithWhereWithoutInsurancesInput, Prisma.OfficeUpdateWithoutInsurancesInput>, Prisma.OfficeUncheckedUpdateWithoutInsurancesInput>;
};
export type OfficeCreateNestedOneWithoutTimeSlotsInput = {
    create?: Prisma.XOR<Prisma.OfficeCreateWithoutTimeSlotsInput, Prisma.OfficeUncheckedCreateWithoutTimeSlotsInput>;
    connectOrCreate?: Prisma.OfficeCreateOrConnectWithoutTimeSlotsInput;
    connect?: Prisma.OfficeWhereUniqueInput;
};
export type OfficeUpdateOneRequiredWithoutTimeSlotsNestedInput = {
    create?: Prisma.XOR<Prisma.OfficeCreateWithoutTimeSlotsInput, Prisma.OfficeUncheckedCreateWithoutTimeSlotsInput>;
    connectOrCreate?: Prisma.OfficeCreateOrConnectWithoutTimeSlotsInput;
    upsert?: Prisma.OfficeUpsertWithoutTimeSlotsInput;
    connect?: Prisma.OfficeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OfficeUpdateToOneWithWhereWithoutTimeSlotsInput, Prisma.OfficeUpdateWithoutTimeSlotsInput>, Prisma.OfficeUncheckedUpdateWithoutTimeSlotsInput>;
};
export type OfficeCreateNestedOneWithoutAppointmentsInput = {
    create?: Prisma.XOR<Prisma.OfficeCreateWithoutAppointmentsInput, Prisma.OfficeUncheckedCreateWithoutAppointmentsInput>;
    connectOrCreate?: Prisma.OfficeCreateOrConnectWithoutAppointmentsInput;
    connect?: Prisma.OfficeWhereUniqueInput;
};
export type OfficeUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: Prisma.XOR<Prisma.OfficeCreateWithoutAppointmentsInput, Prisma.OfficeUncheckedCreateWithoutAppointmentsInput>;
    connectOrCreate?: Prisma.OfficeCreateOrConnectWithoutAppointmentsInput;
    upsert?: Prisma.OfficeUpsertWithoutAppointmentsInput;
    connect?: Prisma.OfficeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OfficeUpdateToOneWithWhereWithoutAppointmentsInput, Prisma.OfficeUpdateWithoutAppointmentsInput>, Prisma.OfficeUncheckedUpdateWithoutAppointmentsInput>;
};
export type OfficeCreateWithoutDoctorInput = {
    timeSlotPerClientInMin: number;
    firstConsultationFee: number;
    followupConsultationFee: number;
    streetAddress: string;
    city: string;
    state: string;
    country: string;
    zip: string;
    hospitalAffiliation?: Prisma.HospitalAffiliationCreateNestedOneWithoutOfficesInput;
    availability?: Prisma.OfficeDoctorAvailabilityCreateNestedManyWithoutOfficeInput;
    timeSlots?: Prisma.TimeSlotCreateNestedManyWithoutOfficeInput;
    insurances?: Prisma.InNetworkInsuranceCreateNestedManyWithoutOfficeInput;
    appointments?: Prisma.AppointmentCreateNestedManyWithoutOfficeInput;
};
export type OfficeUncheckedCreateWithoutDoctorInput = {
    id?: number;
    hospitalAffiliationId?: number | null;
    timeSlotPerClientInMin: number;
    firstConsultationFee: number;
    followupConsultationFee: number;
    streetAddress: string;
    city: string;
    state: string;
    country: string;
    zip: string;
    availability?: Prisma.OfficeDoctorAvailabilityUncheckedCreateNestedManyWithoutOfficeInput;
    timeSlots?: Prisma.TimeSlotUncheckedCreateNestedManyWithoutOfficeInput;
    insurances?: Prisma.InNetworkInsuranceUncheckedCreateNestedManyWithoutOfficeInput;
    appointments?: Prisma.AppointmentUncheckedCreateNestedManyWithoutOfficeInput;
};
export type OfficeCreateOrConnectWithoutDoctorInput = {
    where: Prisma.OfficeWhereUniqueInput;
    create: Prisma.XOR<Prisma.OfficeCreateWithoutDoctorInput, Prisma.OfficeUncheckedCreateWithoutDoctorInput>;
};
export type OfficeCreateManyDoctorInputEnvelope = {
    data: Prisma.OfficeCreateManyDoctorInput | Prisma.OfficeCreateManyDoctorInput[];
    skipDuplicates?: boolean;
};
export type OfficeUpsertWithWhereUniqueWithoutDoctorInput = {
    where: Prisma.OfficeWhereUniqueInput;
    update: Prisma.XOR<Prisma.OfficeUpdateWithoutDoctorInput, Prisma.OfficeUncheckedUpdateWithoutDoctorInput>;
    create: Prisma.XOR<Prisma.OfficeCreateWithoutDoctorInput, Prisma.OfficeUncheckedCreateWithoutDoctorInput>;
};
export type OfficeUpdateWithWhereUniqueWithoutDoctorInput = {
    where: Prisma.OfficeWhereUniqueInput;
    data: Prisma.XOR<Prisma.OfficeUpdateWithoutDoctorInput, Prisma.OfficeUncheckedUpdateWithoutDoctorInput>;
};
export type OfficeUpdateManyWithWhereWithoutDoctorInput = {
    where: Prisma.OfficeScalarWhereInput;
    data: Prisma.XOR<Prisma.OfficeUpdateManyMutationInput, Prisma.OfficeUncheckedUpdateManyWithoutDoctorInput>;
};
export type OfficeScalarWhereInput = {
    AND?: Prisma.OfficeScalarWhereInput | Prisma.OfficeScalarWhereInput[];
    OR?: Prisma.OfficeScalarWhereInput[];
    NOT?: Prisma.OfficeScalarWhereInput | Prisma.OfficeScalarWhereInput[];
    id?: Prisma.IntFilter<"Office"> | number;
    doctorId?: Prisma.IntFilter<"Office"> | number;
    hospitalAffiliationId?: Prisma.IntNullableFilter<"Office"> | number | null;
    timeSlotPerClientInMin?: Prisma.IntFilter<"Office"> | number;
    firstConsultationFee?: Prisma.FloatFilter<"Office"> | number;
    followupConsultationFee?: Prisma.FloatFilter<"Office"> | number;
    streetAddress?: Prisma.StringFilter<"Office"> | string;
    city?: Prisma.StringFilter<"Office"> | string;
    state?: Prisma.StringFilter<"Office"> | string;
    country?: Prisma.StringFilter<"Office"> | string;
    zip?: Prisma.StringFilter<"Office"> | string;
};
export type OfficeCreateWithoutHospitalAffiliationInput = {
    timeSlotPerClientInMin: number;
    firstConsultationFee: number;
    followupConsultationFee: number;
    streetAddress: string;
    city: string;
    state: string;
    country: string;
    zip: string;
    doctor: Prisma.DoctorCreateNestedOneWithoutOfficesInput;
    availability?: Prisma.OfficeDoctorAvailabilityCreateNestedManyWithoutOfficeInput;
    timeSlots?: Prisma.TimeSlotCreateNestedManyWithoutOfficeInput;
    insurances?: Prisma.InNetworkInsuranceCreateNestedManyWithoutOfficeInput;
    appointments?: Prisma.AppointmentCreateNestedManyWithoutOfficeInput;
};
export type OfficeUncheckedCreateWithoutHospitalAffiliationInput = {
    id?: number;
    doctorId: number;
    timeSlotPerClientInMin: number;
    firstConsultationFee: number;
    followupConsultationFee: number;
    streetAddress: string;
    city: string;
    state: string;
    country: string;
    zip: string;
    availability?: Prisma.OfficeDoctorAvailabilityUncheckedCreateNestedManyWithoutOfficeInput;
    timeSlots?: Prisma.TimeSlotUncheckedCreateNestedManyWithoutOfficeInput;
    insurances?: Prisma.InNetworkInsuranceUncheckedCreateNestedManyWithoutOfficeInput;
    appointments?: Prisma.AppointmentUncheckedCreateNestedManyWithoutOfficeInput;
};
export type OfficeCreateOrConnectWithoutHospitalAffiliationInput = {
    where: Prisma.OfficeWhereUniqueInput;
    create: Prisma.XOR<Prisma.OfficeCreateWithoutHospitalAffiliationInput, Prisma.OfficeUncheckedCreateWithoutHospitalAffiliationInput>;
};
export type OfficeCreateManyHospitalAffiliationInputEnvelope = {
    data: Prisma.OfficeCreateManyHospitalAffiliationInput | Prisma.OfficeCreateManyHospitalAffiliationInput[];
    skipDuplicates?: boolean;
};
export type OfficeUpsertWithWhereUniqueWithoutHospitalAffiliationInput = {
    where: Prisma.OfficeWhereUniqueInput;
    update: Prisma.XOR<Prisma.OfficeUpdateWithoutHospitalAffiliationInput, Prisma.OfficeUncheckedUpdateWithoutHospitalAffiliationInput>;
    create: Prisma.XOR<Prisma.OfficeCreateWithoutHospitalAffiliationInput, Prisma.OfficeUncheckedCreateWithoutHospitalAffiliationInput>;
};
export type OfficeUpdateWithWhereUniqueWithoutHospitalAffiliationInput = {
    where: Prisma.OfficeWhereUniqueInput;
    data: Prisma.XOR<Prisma.OfficeUpdateWithoutHospitalAffiliationInput, Prisma.OfficeUncheckedUpdateWithoutHospitalAffiliationInput>;
};
export type OfficeUpdateManyWithWhereWithoutHospitalAffiliationInput = {
    where: Prisma.OfficeScalarWhereInput;
    data: Prisma.XOR<Prisma.OfficeUpdateManyMutationInput, Prisma.OfficeUncheckedUpdateManyWithoutHospitalAffiliationInput>;
};
export type OfficeCreateWithoutAvailabilityInput = {
    timeSlotPerClientInMin: number;
    firstConsultationFee: number;
    followupConsultationFee: number;
    streetAddress: string;
    city: string;
    state: string;
    country: string;
    zip: string;
    doctor: Prisma.DoctorCreateNestedOneWithoutOfficesInput;
    hospitalAffiliation?: Prisma.HospitalAffiliationCreateNestedOneWithoutOfficesInput;
    timeSlots?: Prisma.TimeSlotCreateNestedManyWithoutOfficeInput;
    insurances?: Prisma.InNetworkInsuranceCreateNestedManyWithoutOfficeInput;
    appointments?: Prisma.AppointmentCreateNestedManyWithoutOfficeInput;
};
export type OfficeUncheckedCreateWithoutAvailabilityInput = {
    id?: number;
    doctorId: number;
    hospitalAffiliationId?: number | null;
    timeSlotPerClientInMin: number;
    firstConsultationFee: number;
    followupConsultationFee: number;
    streetAddress: string;
    city: string;
    state: string;
    country: string;
    zip: string;
    timeSlots?: Prisma.TimeSlotUncheckedCreateNestedManyWithoutOfficeInput;
    insurances?: Prisma.InNetworkInsuranceUncheckedCreateNestedManyWithoutOfficeInput;
    appointments?: Prisma.AppointmentUncheckedCreateNestedManyWithoutOfficeInput;
};
export type OfficeCreateOrConnectWithoutAvailabilityInput = {
    where: Prisma.OfficeWhereUniqueInput;
    create: Prisma.XOR<Prisma.OfficeCreateWithoutAvailabilityInput, Prisma.OfficeUncheckedCreateWithoutAvailabilityInput>;
};
export type OfficeUpsertWithoutAvailabilityInput = {
    update: Prisma.XOR<Prisma.OfficeUpdateWithoutAvailabilityInput, Prisma.OfficeUncheckedUpdateWithoutAvailabilityInput>;
    create: Prisma.XOR<Prisma.OfficeCreateWithoutAvailabilityInput, Prisma.OfficeUncheckedCreateWithoutAvailabilityInput>;
    where?: Prisma.OfficeWhereInput;
};
export type OfficeUpdateToOneWithWhereWithoutAvailabilityInput = {
    where?: Prisma.OfficeWhereInput;
    data: Prisma.XOR<Prisma.OfficeUpdateWithoutAvailabilityInput, Prisma.OfficeUncheckedUpdateWithoutAvailabilityInput>;
};
export type OfficeUpdateWithoutAvailabilityInput = {
    timeSlotPerClientInMin?: Prisma.IntFieldUpdateOperationsInput | number;
    firstConsultationFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    followupConsultationFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    streetAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    zip?: Prisma.StringFieldUpdateOperationsInput | string;
    doctor?: Prisma.DoctorUpdateOneRequiredWithoutOfficesNestedInput;
    hospitalAffiliation?: Prisma.HospitalAffiliationUpdateOneWithoutOfficesNestedInput;
    timeSlots?: Prisma.TimeSlotUpdateManyWithoutOfficeNestedInput;
    insurances?: Prisma.InNetworkInsuranceUpdateManyWithoutOfficeNestedInput;
    appointments?: Prisma.AppointmentUpdateManyWithoutOfficeNestedInput;
};
export type OfficeUncheckedUpdateWithoutAvailabilityInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    doctorId?: Prisma.IntFieldUpdateOperationsInput | number;
    hospitalAffiliationId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    timeSlotPerClientInMin?: Prisma.IntFieldUpdateOperationsInput | number;
    firstConsultationFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    followupConsultationFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    streetAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    zip?: Prisma.StringFieldUpdateOperationsInput | string;
    timeSlots?: Prisma.TimeSlotUncheckedUpdateManyWithoutOfficeNestedInput;
    insurances?: Prisma.InNetworkInsuranceUncheckedUpdateManyWithoutOfficeNestedInput;
    appointments?: Prisma.AppointmentUncheckedUpdateManyWithoutOfficeNestedInput;
};
export type OfficeCreateWithoutInsurancesInput = {
    timeSlotPerClientInMin: number;
    firstConsultationFee: number;
    followupConsultationFee: number;
    streetAddress: string;
    city: string;
    state: string;
    country: string;
    zip: string;
    doctor: Prisma.DoctorCreateNestedOneWithoutOfficesInput;
    hospitalAffiliation?: Prisma.HospitalAffiliationCreateNestedOneWithoutOfficesInput;
    availability?: Prisma.OfficeDoctorAvailabilityCreateNestedManyWithoutOfficeInput;
    timeSlots?: Prisma.TimeSlotCreateNestedManyWithoutOfficeInput;
    appointments?: Prisma.AppointmentCreateNestedManyWithoutOfficeInput;
};
export type OfficeUncheckedCreateWithoutInsurancesInput = {
    id?: number;
    doctorId: number;
    hospitalAffiliationId?: number | null;
    timeSlotPerClientInMin: number;
    firstConsultationFee: number;
    followupConsultationFee: number;
    streetAddress: string;
    city: string;
    state: string;
    country: string;
    zip: string;
    availability?: Prisma.OfficeDoctorAvailabilityUncheckedCreateNestedManyWithoutOfficeInput;
    timeSlots?: Prisma.TimeSlotUncheckedCreateNestedManyWithoutOfficeInput;
    appointments?: Prisma.AppointmentUncheckedCreateNestedManyWithoutOfficeInput;
};
export type OfficeCreateOrConnectWithoutInsurancesInput = {
    where: Prisma.OfficeWhereUniqueInput;
    create: Prisma.XOR<Prisma.OfficeCreateWithoutInsurancesInput, Prisma.OfficeUncheckedCreateWithoutInsurancesInput>;
};
export type OfficeUpsertWithoutInsurancesInput = {
    update: Prisma.XOR<Prisma.OfficeUpdateWithoutInsurancesInput, Prisma.OfficeUncheckedUpdateWithoutInsurancesInput>;
    create: Prisma.XOR<Prisma.OfficeCreateWithoutInsurancesInput, Prisma.OfficeUncheckedCreateWithoutInsurancesInput>;
    where?: Prisma.OfficeWhereInput;
};
export type OfficeUpdateToOneWithWhereWithoutInsurancesInput = {
    where?: Prisma.OfficeWhereInput;
    data: Prisma.XOR<Prisma.OfficeUpdateWithoutInsurancesInput, Prisma.OfficeUncheckedUpdateWithoutInsurancesInput>;
};
export type OfficeUpdateWithoutInsurancesInput = {
    timeSlotPerClientInMin?: Prisma.IntFieldUpdateOperationsInput | number;
    firstConsultationFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    followupConsultationFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    streetAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    zip?: Prisma.StringFieldUpdateOperationsInput | string;
    doctor?: Prisma.DoctorUpdateOneRequiredWithoutOfficesNestedInput;
    hospitalAffiliation?: Prisma.HospitalAffiliationUpdateOneWithoutOfficesNestedInput;
    availability?: Prisma.OfficeDoctorAvailabilityUpdateManyWithoutOfficeNestedInput;
    timeSlots?: Prisma.TimeSlotUpdateManyWithoutOfficeNestedInput;
    appointments?: Prisma.AppointmentUpdateManyWithoutOfficeNestedInput;
};
export type OfficeUncheckedUpdateWithoutInsurancesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    doctorId?: Prisma.IntFieldUpdateOperationsInput | number;
    hospitalAffiliationId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    timeSlotPerClientInMin?: Prisma.IntFieldUpdateOperationsInput | number;
    firstConsultationFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    followupConsultationFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    streetAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    zip?: Prisma.StringFieldUpdateOperationsInput | string;
    availability?: Prisma.OfficeDoctorAvailabilityUncheckedUpdateManyWithoutOfficeNestedInput;
    timeSlots?: Prisma.TimeSlotUncheckedUpdateManyWithoutOfficeNestedInput;
    appointments?: Prisma.AppointmentUncheckedUpdateManyWithoutOfficeNestedInput;
};
export type OfficeCreateWithoutTimeSlotsInput = {
    timeSlotPerClientInMin: number;
    firstConsultationFee: number;
    followupConsultationFee: number;
    streetAddress: string;
    city: string;
    state: string;
    country: string;
    zip: string;
    doctor: Prisma.DoctorCreateNestedOneWithoutOfficesInput;
    hospitalAffiliation?: Prisma.HospitalAffiliationCreateNestedOneWithoutOfficesInput;
    availability?: Prisma.OfficeDoctorAvailabilityCreateNestedManyWithoutOfficeInput;
    insurances?: Prisma.InNetworkInsuranceCreateNestedManyWithoutOfficeInput;
    appointments?: Prisma.AppointmentCreateNestedManyWithoutOfficeInput;
};
export type OfficeUncheckedCreateWithoutTimeSlotsInput = {
    id?: number;
    doctorId: number;
    hospitalAffiliationId?: number | null;
    timeSlotPerClientInMin: number;
    firstConsultationFee: number;
    followupConsultationFee: number;
    streetAddress: string;
    city: string;
    state: string;
    country: string;
    zip: string;
    availability?: Prisma.OfficeDoctorAvailabilityUncheckedCreateNestedManyWithoutOfficeInput;
    insurances?: Prisma.InNetworkInsuranceUncheckedCreateNestedManyWithoutOfficeInput;
    appointments?: Prisma.AppointmentUncheckedCreateNestedManyWithoutOfficeInput;
};
export type OfficeCreateOrConnectWithoutTimeSlotsInput = {
    where: Prisma.OfficeWhereUniqueInput;
    create: Prisma.XOR<Prisma.OfficeCreateWithoutTimeSlotsInput, Prisma.OfficeUncheckedCreateWithoutTimeSlotsInput>;
};
export type OfficeUpsertWithoutTimeSlotsInput = {
    update: Prisma.XOR<Prisma.OfficeUpdateWithoutTimeSlotsInput, Prisma.OfficeUncheckedUpdateWithoutTimeSlotsInput>;
    create: Prisma.XOR<Prisma.OfficeCreateWithoutTimeSlotsInput, Prisma.OfficeUncheckedCreateWithoutTimeSlotsInput>;
    where?: Prisma.OfficeWhereInput;
};
export type OfficeUpdateToOneWithWhereWithoutTimeSlotsInput = {
    where?: Prisma.OfficeWhereInput;
    data: Prisma.XOR<Prisma.OfficeUpdateWithoutTimeSlotsInput, Prisma.OfficeUncheckedUpdateWithoutTimeSlotsInput>;
};
export type OfficeUpdateWithoutTimeSlotsInput = {
    timeSlotPerClientInMin?: Prisma.IntFieldUpdateOperationsInput | number;
    firstConsultationFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    followupConsultationFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    streetAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    zip?: Prisma.StringFieldUpdateOperationsInput | string;
    doctor?: Prisma.DoctorUpdateOneRequiredWithoutOfficesNestedInput;
    hospitalAffiliation?: Prisma.HospitalAffiliationUpdateOneWithoutOfficesNestedInput;
    availability?: Prisma.OfficeDoctorAvailabilityUpdateManyWithoutOfficeNestedInput;
    insurances?: Prisma.InNetworkInsuranceUpdateManyWithoutOfficeNestedInput;
    appointments?: Prisma.AppointmentUpdateManyWithoutOfficeNestedInput;
};
export type OfficeUncheckedUpdateWithoutTimeSlotsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    doctorId?: Prisma.IntFieldUpdateOperationsInput | number;
    hospitalAffiliationId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    timeSlotPerClientInMin?: Prisma.IntFieldUpdateOperationsInput | number;
    firstConsultationFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    followupConsultationFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    streetAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    zip?: Prisma.StringFieldUpdateOperationsInput | string;
    availability?: Prisma.OfficeDoctorAvailabilityUncheckedUpdateManyWithoutOfficeNestedInput;
    insurances?: Prisma.InNetworkInsuranceUncheckedUpdateManyWithoutOfficeNestedInput;
    appointments?: Prisma.AppointmentUncheckedUpdateManyWithoutOfficeNestedInput;
};
export type OfficeCreateWithoutAppointmentsInput = {
    timeSlotPerClientInMin: number;
    firstConsultationFee: number;
    followupConsultationFee: number;
    streetAddress: string;
    city: string;
    state: string;
    country: string;
    zip: string;
    doctor: Prisma.DoctorCreateNestedOneWithoutOfficesInput;
    hospitalAffiliation?: Prisma.HospitalAffiliationCreateNestedOneWithoutOfficesInput;
    availability?: Prisma.OfficeDoctorAvailabilityCreateNestedManyWithoutOfficeInput;
    timeSlots?: Prisma.TimeSlotCreateNestedManyWithoutOfficeInput;
    insurances?: Prisma.InNetworkInsuranceCreateNestedManyWithoutOfficeInput;
};
export type OfficeUncheckedCreateWithoutAppointmentsInput = {
    id?: number;
    doctorId: number;
    hospitalAffiliationId?: number | null;
    timeSlotPerClientInMin: number;
    firstConsultationFee: number;
    followupConsultationFee: number;
    streetAddress: string;
    city: string;
    state: string;
    country: string;
    zip: string;
    availability?: Prisma.OfficeDoctorAvailabilityUncheckedCreateNestedManyWithoutOfficeInput;
    timeSlots?: Prisma.TimeSlotUncheckedCreateNestedManyWithoutOfficeInput;
    insurances?: Prisma.InNetworkInsuranceUncheckedCreateNestedManyWithoutOfficeInput;
};
export type OfficeCreateOrConnectWithoutAppointmentsInput = {
    where: Prisma.OfficeWhereUniqueInput;
    create: Prisma.XOR<Prisma.OfficeCreateWithoutAppointmentsInput, Prisma.OfficeUncheckedCreateWithoutAppointmentsInput>;
};
export type OfficeUpsertWithoutAppointmentsInput = {
    update: Prisma.XOR<Prisma.OfficeUpdateWithoutAppointmentsInput, Prisma.OfficeUncheckedUpdateWithoutAppointmentsInput>;
    create: Prisma.XOR<Prisma.OfficeCreateWithoutAppointmentsInput, Prisma.OfficeUncheckedCreateWithoutAppointmentsInput>;
    where?: Prisma.OfficeWhereInput;
};
export type OfficeUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: Prisma.OfficeWhereInput;
    data: Prisma.XOR<Prisma.OfficeUpdateWithoutAppointmentsInput, Prisma.OfficeUncheckedUpdateWithoutAppointmentsInput>;
};
export type OfficeUpdateWithoutAppointmentsInput = {
    timeSlotPerClientInMin?: Prisma.IntFieldUpdateOperationsInput | number;
    firstConsultationFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    followupConsultationFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    streetAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    zip?: Prisma.StringFieldUpdateOperationsInput | string;
    doctor?: Prisma.DoctorUpdateOneRequiredWithoutOfficesNestedInput;
    hospitalAffiliation?: Prisma.HospitalAffiliationUpdateOneWithoutOfficesNestedInput;
    availability?: Prisma.OfficeDoctorAvailabilityUpdateManyWithoutOfficeNestedInput;
    timeSlots?: Prisma.TimeSlotUpdateManyWithoutOfficeNestedInput;
    insurances?: Prisma.InNetworkInsuranceUpdateManyWithoutOfficeNestedInput;
};
export type OfficeUncheckedUpdateWithoutAppointmentsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    doctorId?: Prisma.IntFieldUpdateOperationsInput | number;
    hospitalAffiliationId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    timeSlotPerClientInMin?: Prisma.IntFieldUpdateOperationsInput | number;
    firstConsultationFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    followupConsultationFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    streetAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    zip?: Prisma.StringFieldUpdateOperationsInput | string;
    availability?: Prisma.OfficeDoctorAvailabilityUncheckedUpdateManyWithoutOfficeNestedInput;
    timeSlots?: Prisma.TimeSlotUncheckedUpdateManyWithoutOfficeNestedInput;
    insurances?: Prisma.InNetworkInsuranceUncheckedUpdateManyWithoutOfficeNestedInput;
};
export type OfficeCreateManyDoctorInput = {
    id?: number;
    hospitalAffiliationId?: number | null;
    timeSlotPerClientInMin: number;
    firstConsultationFee: number;
    followupConsultationFee: number;
    streetAddress: string;
    city: string;
    state: string;
    country: string;
    zip: string;
};
export type OfficeUpdateWithoutDoctorInput = {
    timeSlotPerClientInMin?: Prisma.IntFieldUpdateOperationsInput | number;
    firstConsultationFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    followupConsultationFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    streetAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    zip?: Prisma.StringFieldUpdateOperationsInput | string;
    hospitalAffiliation?: Prisma.HospitalAffiliationUpdateOneWithoutOfficesNestedInput;
    availability?: Prisma.OfficeDoctorAvailabilityUpdateManyWithoutOfficeNestedInput;
    timeSlots?: Prisma.TimeSlotUpdateManyWithoutOfficeNestedInput;
    insurances?: Prisma.InNetworkInsuranceUpdateManyWithoutOfficeNestedInput;
    appointments?: Prisma.AppointmentUpdateManyWithoutOfficeNestedInput;
};
export type OfficeUncheckedUpdateWithoutDoctorInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    hospitalAffiliationId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    timeSlotPerClientInMin?: Prisma.IntFieldUpdateOperationsInput | number;
    firstConsultationFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    followupConsultationFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    streetAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    zip?: Prisma.StringFieldUpdateOperationsInput | string;
    availability?: Prisma.OfficeDoctorAvailabilityUncheckedUpdateManyWithoutOfficeNestedInput;
    timeSlots?: Prisma.TimeSlotUncheckedUpdateManyWithoutOfficeNestedInput;
    insurances?: Prisma.InNetworkInsuranceUncheckedUpdateManyWithoutOfficeNestedInput;
    appointments?: Prisma.AppointmentUncheckedUpdateManyWithoutOfficeNestedInput;
};
export type OfficeUncheckedUpdateManyWithoutDoctorInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    hospitalAffiliationId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    timeSlotPerClientInMin?: Prisma.IntFieldUpdateOperationsInput | number;
    firstConsultationFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    followupConsultationFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    streetAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    zip?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type OfficeCreateManyHospitalAffiliationInput = {
    id?: number;
    doctorId: number;
    timeSlotPerClientInMin: number;
    firstConsultationFee: number;
    followupConsultationFee: number;
    streetAddress: string;
    city: string;
    state: string;
    country: string;
    zip: string;
};
export type OfficeUpdateWithoutHospitalAffiliationInput = {
    timeSlotPerClientInMin?: Prisma.IntFieldUpdateOperationsInput | number;
    firstConsultationFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    followupConsultationFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    streetAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    zip?: Prisma.StringFieldUpdateOperationsInput | string;
    doctor?: Prisma.DoctorUpdateOneRequiredWithoutOfficesNestedInput;
    availability?: Prisma.OfficeDoctorAvailabilityUpdateManyWithoutOfficeNestedInput;
    timeSlots?: Prisma.TimeSlotUpdateManyWithoutOfficeNestedInput;
    insurances?: Prisma.InNetworkInsuranceUpdateManyWithoutOfficeNestedInput;
    appointments?: Prisma.AppointmentUpdateManyWithoutOfficeNestedInput;
};
export type OfficeUncheckedUpdateWithoutHospitalAffiliationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    doctorId?: Prisma.IntFieldUpdateOperationsInput | number;
    timeSlotPerClientInMin?: Prisma.IntFieldUpdateOperationsInput | number;
    firstConsultationFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    followupConsultationFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    streetAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    zip?: Prisma.StringFieldUpdateOperationsInput | string;
    availability?: Prisma.OfficeDoctorAvailabilityUncheckedUpdateManyWithoutOfficeNestedInput;
    timeSlots?: Prisma.TimeSlotUncheckedUpdateManyWithoutOfficeNestedInput;
    insurances?: Prisma.InNetworkInsuranceUncheckedUpdateManyWithoutOfficeNestedInput;
    appointments?: Prisma.AppointmentUncheckedUpdateManyWithoutOfficeNestedInput;
};
export type OfficeUncheckedUpdateManyWithoutHospitalAffiliationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    doctorId?: Prisma.IntFieldUpdateOperationsInput | number;
    timeSlotPerClientInMin?: Prisma.IntFieldUpdateOperationsInput | number;
    firstConsultationFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    followupConsultationFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    streetAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    zip?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type OfficeCountOutputType = {
    availability: number;
    timeSlots: number;
    insurances: number;
    appointments: number;
};
export type OfficeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    availability?: boolean | OfficeCountOutputTypeCountAvailabilityArgs;
    timeSlots?: boolean | OfficeCountOutputTypeCountTimeSlotsArgs;
    insurances?: boolean | OfficeCountOutputTypeCountInsurancesArgs;
    appointments?: boolean | OfficeCountOutputTypeCountAppointmentsArgs;
};
export type OfficeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfficeCountOutputTypeSelect<ExtArgs> | null;
};
export type OfficeCountOutputTypeCountAvailabilityArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OfficeDoctorAvailabilityWhereInput;
};
export type OfficeCountOutputTypeCountTimeSlotsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TimeSlotWhereInput;
};
export type OfficeCountOutputTypeCountInsurancesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InNetworkInsuranceWhereInput;
};
export type OfficeCountOutputTypeCountAppointmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AppointmentWhereInput;
};
export type OfficeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    doctorId?: boolean;
    hospitalAffiliationId?: boolean;
    timeSlotPerClientInMin?: boolean;
    firstConsultationFee?: boolean;
    followupConsultationFee?: boolean;
    streetAddress?: boolean;
    city?: boolean;
    state?: boolean;
    country?: boolean;
    zip?: boolean;
    doctor?: boolean | Prisma.DoctorDefaultArgs<ExtArgs>;
    hospitalAffiliation?: boolean | Prisma.Office$hospitalAffiliationArgs<ExtArgs>;
    availability?: boolean | Prisma.Office$availabilityArgs<ExtArgs>;
    timeSlots?: boolean | Prisma.Office$timeSlotsArgs<ExtArgs>;
    insurances?: boolean | Prisma.Office$insurancesArgs<ExtArgs>;
    appointments?: boolean | Prisma.Office$appointmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.OfficeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["office"]>;
export type OfficeSelectScalar = {
    id?: boolean;
    doctorId?: boolean;
    hospitalAffiliationId?: boolean;
    timeSlotPerClientInMin?: boolean;
    firstConsultationFee?: boolean;
    followupConsultationFee?: boolean;
    streetAddress?: boolean;
    city?: boolean;
    state?: boolean;
    country?: boolean;
    zip?: boolean;
};
export type OfficeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "doctorId" | "hospitalAffiliationId" | "timeSlotPerClientInMin" | "firstConsultationFee" | "followupConsultationFee" | "streetAddress" | "city" | "state" | "country" | "zip", ExtArgs["result"]["office"]>;
export type OfficeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    doctor?: boolean | Prisma.DoctorDefaultArgs<ExtArgs>;
    hospitalAffiliation?: boolean | Prisma.Office$hospitalAffiliationArgs<ExtArgs>;
    availability?: boolean | Prisma.Office$availabilityArgs<ExtArgs>;
    timeSlots?: boolean | Prisma.Office$timeSlotsArgs<ExtArgs>;
    insurances?: boolean | Prisma.Office$insurancesArgs<ExtArgs>;
    appointments?: boolean | Prisma.Office$appointmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.OfficeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $OfficePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Office";
    objects: {
        doctor: Prisma.$DoctorPayload<ExtArgs>;
        hospitalAffiliation: Prisma.$HospitalAffiliationPayload<ExtArgs> | null;
        availability: Prisma.$OfficeDoctorAvailabilityPayload<ExtArgs>[];
        timeSlots: Prisma.$TimeSlotPayload<ExtArgs>[];
        insurances: Prisma.$InNetworkInsurancePayload<ExtArgs>[];
        appointments: Prisma.$AppointmentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        doctorId: number;
        hospitalAffiliationId: number | null;
        timeSlotPerClientInMin: number;
        firstConsultationFee: number;
        followupConsultationFee: number;
        streetAddress: string;
        city: string;
        state: string;
        country: string;
        zip: string;
    }, ExtArgs["result"]["office"]>;
    composites: {};
};
export type OfficeGetPayload<S extends boolean | null | undefined | OfficeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OfficePayload, S>;
export type OfficeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OfficeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OfficeCountAggregateInputType | true;
};
export interface OfficeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Office'];
        meta: {
            name: 'Office';
        };
    };
    findUnique<T extends OfficeFindUniqueArgs>(args: Prisma.SelectSubset<T, OfficeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OfficeClient<runtime.Types.Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OfficeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OfficeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OfficeClient<runtime.Types.Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OfficeFindFirstArgs>(args?: Prisma.SelectSubset<T, OfficeFindFirstArgs<ExtArgs>>): Prisma.Prisma__OfficeClient<runtime.Types.Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OfficeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OfficeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OfficeClient<runtime.Types.Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OfficeFindManyArgs>(args?: Prisma.SelectSubset<T, OfficeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OfficeCreateArgs>(args: Prisma.SelectSubset<T, OfficeCreateArgs<ExtArgs>>): Prisma.Prisma__OfficeClient<runtime.Types.Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OfficeCreateManyArgs>(args?: Prisma.SelectSubset<T, OfficeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends OfficeDeleteArgs>(args: Prisma.SelectSubset<T, OfficeDeleteArgs<ExtArgs>>): Prisma.Prisma__OfficeClient<runtime.Types.Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OfficeUpdateArgs>(args: Prisma.SelectSubset<T, OfficeUpdateArgs<ExtArgs>>): Prisma.Prisma__OfficeClient<runtime.Types.Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OfficeDeleteManyArgs>(args?: Prisma.SelectSubset<T, OfficeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OfficeUpdateManyArgs>(args: Prisma.SelectSubset<T, OfficeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends OfficeUpsertArgs>(args: Prisma.SelectSubset<T, OfficeUpsertArgs<ExtArgs>>): Prisma.Prisma__OfficeClient<runtime.Types.Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OfficeCountArgs>(args?: Prisma.Subset<T, OfficeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OfficeCountAggregateOutputType> : number>;
    aggregate<T extends OfficeAggregateArgs>(args: Prisma.Subset<T, OfficeAggregateArgs>): Prisma.PrismaPromise<GetOfficeAggregateType<T>>;
    groupBy<T extends OfficeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OfficeGroupByArgs['orderBy'];
    } : {
        orderBy?: OfficeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OfficeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfficeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OfficeFieldRefs;
}
export interface Prisma__OfficeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    doctor<T extends Prisma.DoctorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DoctorDefaultArgs<ExtArgs>>): Prisma.Prisma__DoctorClient<runtime.Types.Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    hospitalAffiliation<T extends Prisma.Office$hospitalAffiliationArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Office$hospitalAffiliationArgs<ExtArgs>>): Prisma.Prisma__HospitalAffiliationClient<runtime.Types.Result.GetResult<Prisma.$HospitalAffiliationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    availability<T extends Prisma.Office$availabilityArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Office$availabilityArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OfficeDoctorAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    timeSlots<T extends Prisma.Office$timeSlotsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Office$timeSlotsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    insurances<T extends Prisma.Office$insurancesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Office$insurancesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InNetworkInsurancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    appointments<T extends Prisma.Office$appointmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Office$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OfficeFieldRefs {
    readonly id: Prisma.FieldRef<"Office", 'Int'>;
    readonly doctorId: Prisma.FieldRef<"Office", 'Int'>;
    readonly hospitalAffiliationId: Prisma.FieldRef<"Office", 'Int'>;
    readonly timeSlotPerClientInMin: Prisma.FieldRef<"Office", 'Int'>;
    readonly firstConsultationFee: Prisma.FieldRef<"Office", 'Float'>;
    readonly followupConsultationFee: Prisma.FieldRef<"Office", 'Float'>;
    readonly streetAddress: Prisma.FieldRef<"Office", 'String'>;
    readonly city: Prisma.FieldRef<"Office", 'String'>;
    readonly state: Prisma.FieldRef<"Office", 'String'>;
    readonly country: Prisma.FieldRef<"Office", 'String'>;
    readonly zip: Prisma.FieldRef<"Office", 'String'>;
}
export type OfficeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfficeSelect<ExtArgs> | null;
    omit?: Prisma.OfficeOmit<ExtArgs> | null;
    include?: Prisma.OfficeInclude<ExtArgs> | null;
    where: Prisma.OfficeWhereUniqueInput;
};
export type OfficeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfficeSelect<ExtArgs> | null;
    omit?: Prisma.OfficeOmit<ExtArgs> | null;
    include?: Prisma.OfficeInclude<ExtArgs> | null;
    where: Prisma.OfficeWhereUniqueInput;
};
export type OfficeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OfficeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OfficeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OfficeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfficeSelect<ExtArgs> | null;
    omit?: Prisma.OfficeOmit<ExtArgs> | null;
    include?: Prisma.OfficeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OfficeCreateInput, Prisma.OfficeUncheckedCreateInput>;
};
export type OfficeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OfficeCreateManyInput | Prisma.OfficeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OfficeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfficeSelect<ExtArgs> | null;
    omit?: Prisma.OfficeOmit<ExtArgs> | null;
    include?: Prisma.OfficeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OfficeUpdateInput, Prisma.OfficeUncheckedUpdateInput>;
    where: Prisma.OfficeWhereUniqueInput;
};
export type OfficeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OfficeUpdateManyMutationInput, Prisma.OfficeUncheckedUpdateManyInput>;
    where?: Prisma.OfficeWhereInput;
    limit?: number;
};
export type OfficeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfficeSelect<ExtArgs> | null;
    omit?: Prisma.OfficeOmit<ExtArgs> | null;
    include?: Prisma.OfficeInclude<ExtArgs> | null;
    where: Prisma.OfficeWhereUniqueInput;
    create: Prisma.XOR<Prisma.OfficeCreateInput, Prisma.OfficeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OfficeUpdateInput, Prisma.OfficeUncheckedUpdateInput>;
};
export type OfficeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfficeSelect<ExtArgs> | null;
    omit?: Prisma.OfficeOmit<ExtArgs> | null;
    include?: Prisma.OfficeInclude<ExtArgs> | null;
    where: Prisma.OfficeWhereUniqueInput;
};
export type OfficeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OfficeWhereInput;
    limit?: number;
};
export type Office$hospitalAffiliationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HospitalAffiliationSelect<ExtArgs> | null;
    omit?: Prisma.HospitalAffiliationOmit<ExtArgs> | null;
    include?: Prisma.HospitalAffiliationInclude<ExtArgs> | null;
    where?: Prisma.HospitalAffiliationWhereInput;
};
export type Office$availabilityArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfficeDoctorAvailabilitySelect<ExtArgs> | null;
    omit?: Prisma.OfficeDoctorAvailabilityOmit<ExtArgs> | null;
    include?: Prisma.OfficeDoctorAvailabilityInclude<ExtArgs> | null;
    where?: Prisma.OfficeDoctorAvailabilityWhereInput;
    orderBy?: Prisma.OfficeDoctorAvailabilityOrderByWithRelationInput | Prisma.OfficeDoctorAvailabilityOrderByWithRelationInput[];
    cursor?: Prisma.OfficeDoctorAvailabilityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OfficeDoctorAvailabilityScalarFieldEnum | Prisma.OfficeDoctorAvailabilityScalarFieldEnum[];
};
export type Office$timeSlotsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TimeSlotSelect<ExtArgs> | null;
    omit?: Prisma.TimeSlotOmit<ExtArgs> | null;
    include?: Prisma.TimeSlotInclude<ExtArgs> | null;
    where?: Prisma.TimeSlotWhereInput;
    orderBy?: Prisma.TimeSlotOrderByWithRelationInput | Prisma.TimeSlotOrderByWithRelationInput[];
    cursor?: Prisma.TimeSlotWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TimeSlotScalarFieldEnum | Prisma.TimeSlotScalarFieldEnum[];
};
export type Office$insurancesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InNetworkInsuranceSelect<ExtArgs> | null;
    omit?: Prisma.InNetworkInsuranceOmit<ExtArgs> | null;
    include?: Prisma.InNetworkInsuranceInclude<ExtArgs> | null;
    where?: Prisma.InNetworkInsuranceWhereInput;
    orderBy?: Prisma.InNetworkInsuranceOrderByWithRelationInput | Prisma.InNetworkInsuranceOrderByWithRelationInput[];
    cursor?: Prisma.InNetworkInsuranceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InNetworkInsuranceScalarFieldEnum | Prisma.InNetworkInsuranceScalarFieldEnum[];
};
export type Office$appointmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentSelect<ExtArgs> | null;
    omit?: Prisma.AppointmentOmit<ExtArgs> | null;
    include?: Prisma.AppointmentInclude<ExtArgs> | null;
    where?: Prisma.AppointmentWhereInput;
    orderBy?: Prisma.AppointmentOrderByWithRelationInput | Prisma.AppointmentOrderByWithRelationInput[];
    cursor?: Prisma.AppointmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AppointmentScalarFieldEnum | Prisma.AppointmentScalarFieldEnum[];
};
export type OfficeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfficeSelect<ExtArgs> | null;
    omit?: Prisma.OfficeOmit<ExtArgs> | null;
    include?: Prisma.OfficeInclude<ExtArgs> | null;
};
export {};
