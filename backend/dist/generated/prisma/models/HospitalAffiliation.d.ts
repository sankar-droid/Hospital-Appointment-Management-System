import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type HospitalAffiliationModel = runtime.Types.Result.DefaultSelection<Prisma.$HospitalAffiliationPayload>;
export type AggregateHospitalAffiliation = {
    _count: HospitalAffiliationCountAggregateOutputType | null;
    _avg: HospitalAffiliationAvgAggregateOutputType | null;
    _sum: HospitalAffiliationSumAggregateOutputType | null;
    _min: HospitalAffiliationMinAggregateOutputType | null;
    _max: HospitalAffiliationMaxAggregateOutputType | null;
};
export type HospitalAffiliationAvgAggregateOutputType = {
    id: number | null;
    doctorId: number | null;
};
export type HospitalAffiliationSumAggregateOutputType = {
    id: number | null;
    doctorId: number | null;
};
export type HospitalAffiliationMinAggregateOutputType = {
    id: number | null;
    doctorId: number | null;
    hospitalName: string | null;
    city: string | null;
    country: string | null;
    startDate: Date | null;
    endDate: Date | null;
};
export type HospitalAffiliationMaxAggregateOutputType = {
    id: number | null;
    doctorId: number | null;
    hospitalName: string | null;
    city: string | null;
    country: string | null;
    startDate: Date | null;
    endDate: Date | null;
};
export type HospitalAffiliationCountAggregateOutputType = {
    id: number;
    doctorId: number;
    hospitalName: number;
    city: number;
    country: number;
    startDate: number;
    endDate: number;
    _all: number;
};
export type HospitalAffiliationAvgAggregateInputType = {
    id?: true;
    doctorId?: true;
};
export type HospitalAffiliationSumAggregateInputType = {
    id?: true;
    doctorId?: true;
};
export type HospitalAffiliationMinAggregateInputType = {
    id?: true;
    doctorId?: true;
    hospitalName?: true;
    city?: true;
    country?: true;
    startDate?: true;
    endDate?: true;
};
export type HospitalAffiliationMaxAggregateInputType = {
    id?: true;
    doctorId?: true;
    hospitalName?: true;
    city?: true;
    country?: true;
    startDate?: true;
    endDate?: true;
};
export type HospitalAffiliationCountAggregateInputType = {
    id?: true;
    doctorId?: true;
    hospitalName?: true;
    city?: true;
    country?: true;
    startDate?: true;
    endDate?: true;
    _all?: true;
};
export type HospitalAffiliationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HospitalAffiliationWhereInput;
    orderBy?: Prisma.HospitalAffiliationOrderByWithRelationInput | Prisma.HospitalAffiliationOrderByWithRelationInput[];
    cursor?: Prisma.HospitalAffiliationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | HospitalAffiliationCountAggregateInputType;
    _avg?: HospitalAffiliationAvgAggregateInputType;
    _sum?: HospitalAffiliationSumAggregateInputType;
    _min?: HospitalAffiliationMinAggregateInputType;
    _max?: HospitalAffiliationMaxAggregateInputType;
};
export type GetHospitalAffiliationAggregateType<T extends HospitalAffiliationAggregateArgs> = {
    [P in keyof T & keyof AggregateHospitalAffiliation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateHospitalAffiliation[P]> : Prisma.GetScalarType<T[P], AggregateHospitalAffiliation[P]>;
};
export type HospitalAffiliationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HospitalAffiliationWhereInput;
    orderBy?: Prisma.HospitalAffiliationOrderByWithAggregationInput | Prisma.HospitalAffiliationOrderByWithAggregationInput[];
    by: Prisma.HospitalAffiliationScalarFieldEnum[] | Prisma.HospitalAffiliationScalarFieldEnum;
    having?: Prisma.HospitalAffiliationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: HospitalAffiliationCountAggregateInputType | true;
    _avg?: HospitalAffiliationAvgAggregateInputType;
    _sum?: HospitalAffiliationSumAggregateInputType;
    _min?: HospitalAffiliationMinAggregateInputType;
    _max?: HospitalAffiliationMaxAggregateInputType;
};
export type HospitalAffiliationGroupByOutputType = {
    id: number;
    doctorId: number;
    hospitalName: string;
    city: string;
    country: string;
    startDate: Date | null;
    endDate: Date | null;
    _count: HospitalAffiliationCountAggregateOutputType | null;
    _avg: HospitalAffiliationAvgAggregateOutputType | null;
    _sum: HospitalAffiliationSumAggregateOutputType | null;
    _min: HospitalAffiliationMinAggregateOutputType | null;
    _max: HospitalAffiliationMaxAggregateOutputType | null;
};
type GetHospitalAffiliationGroupByPayload<T extends HospitalAffiliationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<HospitalAffiliationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof HospitalAffiliationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], HospitalAffiliationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], HospitalAffiliationGroupByOutputType[P]>;
}>>;
export type HospitalAffiliationWhereInput = {
    AND?: Prisma.HospitalAffiliationWhereInput | Prisma.HospitalAffiliationWhereInput[];
    OR?: Prisma.HospitalAffiliationWhereInput[];
    NOT?: Prisma.HospitalAffiliationWhereInput | Prisma.HospitalAffiliationWhereInput[];
    id?: Prisma.IntFilter<"HospitalAffiliation"> | number;
    doctorId?: Prisma.IntFilter<"HospitalAffiliation"> | number;
    hospitalName?: Prisma.StringFilter<"HospitalAffiliation"> | string;
    city?: Prisma.StringFilter<"HospitalAffiliation"> | string;
    country?: Prisma.StringFilter<"HospitalAffiliation"> | string;
    startDate?: Prisma.DateTimeNullableFilter<"HospitalAffiliation"> | Date | string | null;
    endDate?: Prisma.DateTimeNullableFilter<"HospitalAffiliation"> | Date | string | null;
    doctor?: Prisma.XOR<Prisma.DoctorScalarRelationFilter, Prisma.DoctorWhereInput>;
    offices?: Prisma.OfficeListRelationFilter;
};
export type HospitalAffiliationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    hospitalName?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    startDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    endDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    doctor?: Prisma.DoctorOrderByWithRelationInput;
    offices?: Prisma.OfficeOrderByRelationAggregateInput;
    _relevance?: Prisma.HospitalAffiliationOrderByRelevanceInput;
};
export type HospitalAffiliationWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.HospitalAffiliationWhereInput | Prisma.HospitalAffiliationWhereInput[];
    OR?: Prisma.HospitalAffiliationWhereInput[];
    NOT?: Prisma.HospitalAffiliationWhereInput | Prisma.HospitalAffiliationWhereInput[];
    doctorId?: Prisma.IntFilter<"HospitalAffiliation"> | number;
    hospitalName?: Prisma.StringFilter<"HospitalAffiliation"> | string;
    city?: Prisma.StringFilter<"HospitalAffiliation"> | string;
    country?: Prisma.StringFilter<"HospitalAffiliation"> | string;
    startDate?: Prisma.DateTimeNullableFilter<"HospitalAffiliation"> | Date | string | null;
    endDate?: Prisma.DateTimeNullableFilter<"HospitalAffiliation"> | Date | string | null;
    doctor?: Prisma.XOR<Prisma.DoctorScalarRelationFilter, Prisma.DoctorWhereInput>;
    offices?: Prisma.OfficeListRelationFilter;
}, "id">;
export type HospitalAffiliationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    hospitalName?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    startDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    endDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.HospitalAffiliationCountOrderByAggregateInput;
    _avg?: Prisma.HospitalAffiliationAvgOrderByAggregateInput;
    _max?: Prisma.HospitalAffiliationMaxOrderByAggregateInput;
    _min?: Prisma.HospitalAffiliationMinOrderByAggregateInput;
    _sum?: Prisma.HospitalAffiliationSumOrderByAggregateInput;
};
export type HospitalAffiliationScalarWhereWithAggregatesInput = {
    AND?: Prisma.HospitalAffiliationScalarWhereWithAggregatesInput | Prisma.HospitalAffiliationScalarWhereWithAggregatesInput[];
    OR?: Prisma.HospitalAffiliationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.HospitalAffiliationScalarWhereWithAggregatesInput | Prisma.HospitalAffiliationScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"HospitalAffiliation"> | number;
    doctorId?: Prisma.IntWithAggregatesFilter<"HospitalAffiliation"> | number;
    hospitalName?: Prisma.StringWithAggregatesFilter<"HospitalAffiliation"> | string;
    city?: Prisma.StringWithAggregatesFilter<"HospitalAffiliation"> | string;
    country?: Prisma.StringWithAggregatesFilter<"HospitalAffiliation"> | string;
    startDate?: Prisma.DateTimeNullableWithAggregatesFilter<"HospitalAffiliation"> | Date | string | null;
    endDate?: Prisma.DateTimeNullableWithAggregatesFilter<"HospitalAffiliation"> | Date | string | null;
};
export type HospitalAffiliationCreateInput = {
    hospitalName: string;
    city: string;
    country: string;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    doctor: Prisma.DoctorCreateNestedOneWithoutHospitalAffiliationsInput;
    offices?: Prisma.OfficeCreateNestedManyWithoutHospitalAffiliationInput;
};
export type HospitalAffiliationUncheckedCreateInput = {
    id?: number;
    doctorId: number;
    hospitalName: string;
    city: string;
    country: string;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    offices?: Prisma.OfficeUncheckedCreateNestedManyWithoutHospitalAffiliationInput;
};
export type HospitalAffiliationUpdateInput = {
    hospitalName?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    doctor?: Prisma.DoctorUpdateOneRequiredWithoutHospitalAffiliationsNestedInput;
    offices?: Prisma.OfficeUpdateManyWithoutHospitalAffiliationNestedInput;
};
export type HospitalAffiliationUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    doctorId?: Prisma.IntFieldUpdateOperationsInput | number;
    hospitalName?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    offices?: Prisma.OfficeUncheckedUpdateManyWithoutHospitalAffiliationNestedInput;
};
export type HospitalAffiliationCreateManyInput = {
    id?: number;
    doctorId: number;
    hospitalName: string;
    city: string;
    country: string;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
};
export type HospitalAffiliationUpdateManyMutationInput = {
    hospitalName?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type HospitalAffiliationUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    doctorId?: Prisma.IntFieldUpdateOperationsInput | number;
    hospitalName?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type HospitalAffiliationListRelationFilter = {
    every?: Prisma.HospitalAffiliationWhereInput;
    some?: Prisma.HospitalAffiliationWhereInput;
    none?: Prisma.HospitalAffiliationWhereInput;
};
export type HospitalAffiliationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type HospitalAffiliationOrderByRelevanceInput = {
    fields: Prisma.HospitalAffiliationOrderByRelevanceFieldEnum | Prisma.HospitalAffiliationOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type HospitalAffiliationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    hospitalName?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
};
export type HospitalAffiliationAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
};
export type HospitalAffiliationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    hospitalName?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
};
export type HospitalAffiliationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    hospitalName?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
};
export type HospitalAffiliationSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
};
export type HospitalAffiliationNullableScalarRelationFilter = {
    is?: Prisma.HospitalAffiliationWhereInput | null;
    isNot?: Prisma.HospitalAffiliationWhereInput | null;
};
export type HospitalAffiliationCreateNestedManyWithoutDoctorInput = {
    create?: Prisma.XOR<Prisma.HospitalAffiliationCreateWithoutDoctorInput, Prisma.HospitalAffiliationUncheckedCreateWithoutDoctorInput> | Prisma.HospitalAffiliationCreateWithoutDoctorInput[] | Prisma.HospitalAffiliationUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: Prisma.HospitalAffiliationCreateOrConnectWithoutDoctorInput | Prisma.HospitalAffiliationCreateOrConnectWithoutDoctorInput[];
    createMany?: Prisma.HospitalAffiliationCreateManyDoctorInputEnvelope;
    connect?: Prisma.HospitalAffiliationWhereUniqueInput | Prisma.HospitalAffiliationWhereUniqueInput[];
};
export type HospitalAffiliationUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: Prisma.XOR<Prisma.HospitalAffiliationCreateWithoutDoctorInput, Prisma.HospitalAffiliationUncheckedCreateWithoutDoctorInput> | Prisma.HospitalAffiliationCreateWithoutDoctorInput[] | Prisma.HospitalAffiliationUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: Prisma.HospitalAffiliationCreateOrConnectWithoutDoctorInput | Prisma.HospitalAffiliationCreateOrConnectWithoutDoctorInput[];
    createMany?: Prisma.HospitalAffiliationCreateManyDoctorInputEnvelope;
    connect?: Prisma.HospitalAffiliationWhereUniqueInput | Prisma.HospitalAffiliationWhereUniqueInput[];
};
export type HospitalAffiliationUpdateManyWithoutDoctorNestedInput = {
    create?: Prisma.XOR<Prisma.HospitalAffiliationCreateWithoutDoctorInput, Prisma.HospitalAffiliationUncheckedCreateWithoutDoctorInput> | Prisma.HospitalAffiliationCreateWithoutDoctorInput[] | Prisma.HospitalAffiliationUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: Prisma.HospitalAffiliationCreateOrConnectWithoutDoctorInput | Prisma.HospitalAffiliationCreateOrConnectWithoutDoctorInput[];
    upsert?: Prisma.HospitalAffiliationUpsertWithWhereUniqueWithoutDoctorInput | Prisma.HospitalAffiliationUpsertWithWhereUniqueWithoutDoctorInput[];
    createMany?: Prisma.HospitalAffiliationCreateManyDoctorInputEnvelope;
    set?: Prisma.HospitalAffiliationWhereUniqueInput | Prisma.HospitalAffiliationWhereUniqueInput[];
    disconnect?: Prisma.HospitalAffiliationWhereUniqueInput | Prisma.HospitalAffiliationWhereUniqueInput[];
    delete?: Prisma.HospitalAffiliationWhereUniqueInput | Prisma.HospitalAffiliationWhereUniqueInput[];
    connect?: Prisma.HospitalAffiliationWhereUniqueInput | Prisma.HospitalAffiliationWhereUniqueInput[];
    update?: Prisma.HospitalAffiliationUpdateWithWhereUniqueWithoutDoctorInput | Prisma.HospitalAffiliationUpdateWithWhereUniqueWithoutDoctorInput[];
    updateMany?: Prisma.HospitalAffiliationUpdateManyWithWhereWithoutDoctorInput | Prisma.HospitalAffiliationUpdateManyWithWhereWithoutDoctorInput[];
    deleteMany?: Prisma.HospitalAffiliationScalarWhereInput | Prisma.HospitalAffiliationScalarWhereInput[];
};
export type HospitalAffiliationUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: Prisma.XOR<Prisma.HospitalAffiliationCreateWithoutDoctorInput, Prisma.HospitalAffiliationUncheckedCreateWithoutDoctorInput> | Prisma.HospitalAffiliationCreateWithoutDoctorInput[] | Prisma.HospitalAffiliationUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: Prisma.HospitalAffiliationCreateOrConnectWithoutDoctorInput | Prisma.HospitalAffiliationCreateOrConnectWithoutDoctorInput[];
    upsert?: Prisma.HospitalAffiliationUpsertWithWhereUniqueWithoutDoctorInput | Prisma.HospitalAffiliationUpsertWithWhereUniqueWithoutDoctorInput[];
    createMany?: Prisma.HospitalAffiliationCreateManyDoctorInputEnvelope;
    set?: Prisma.HospitalAffiliationWhereUniqueInput | Prisma.HospitalAffiliationWhereUniqueInput[];
    disconnect?: Prisma.HospitalAffiliationWhereUniqueInput | Prisma.HospitalAffiliationWhereUniqueInput[];
    delete?: Prisma.HospitalAffiliationWhereUniqueInput | Prisma.HospitalAffiliationWhereUniqueInput[];
    connect?: Prisma.HospitalAffiliationWhereUniqueInput | Prisma.HospitalAffiliationWhereUniqueInput[];
    update?: Prisma.HospitalAffiliationUpdateWithWhereUniqueWithoutDoctorInput | Prisma.HospitalAffiliationUpdateWithWhereUniqueWithoutDoctorInput[];
    updateMany?: Prisma.HospitalAffiliationUpdateManyWithWhereWithoutDoctorInput | Prisma.HospitalAffiliationUpdateManyWithWhereWithoutDoctorInput[];
    deleteMany?: Prisma.HospitalAffiliationScalarWhereInput | Prisma.HospitalAffiliationScalarWhereInput[];
};
export type HospitalAffiliationCreateNestedOneWithoutOfficesInput = {
    create?: Prisma.XOR<Prisma.HospitalAffiliationCreateWithoutOfficesInput, Prisma.HospitalAffiliationUncheckedCreateWithoutOfficesInput>;
    connectOrCreate?: Prisma.HospitalAffiliationCreateOrConnectWithoutOfficesInput;
    connect?: Prisma.HospitalAffiliationWhereUniqueInput;
};
export type HospitalAffiliationUpdateOneWithoutOfficesNestedInput = {
    create?: Prisma.XOR<Prisma.HospitalAffiliationCreateWithoutOfficesInput, Prisma.HospitalAffiliationUncheckedCreateWithoutOfficesInput>;
    connectOrCreate?: Prisma.HospitalAffiliationCreateOrConnectWithoutOfficesInput;
    upsert?: Prisma.HospitalAffiliationUpsertWithoutOfficesInput;
    disconnect?: Prisma.HospitalAffiliationWhereInput | boolean;
    delete?: Prisma.HospitalAffiliationWhereInput | boolean;
    connect?: Prisma.HospitalAffiliationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.HospitalAffiliationUpdateToOneWithWhereWithoutOfficesInput, Prisma.HospitalAffiliationUpdateWithoutOfficesInput>, Prisma.HospitalAffiliationUncheckedUpdateWithoutOfficesInput>;
};
export type HospitalAffiliationCreateWithoutDoctorInput = {
    hospitalName: string;
    city: string;
    country: string;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    offices?: Prisma.OfficeCreateNestedManyWithoutHospitalAffiliationInput;
};
export type HospitalAffiliationUncheckedCreateWithoutDoctorInput = {
    id?: number;
    hospitalName: string;
    city: string;
    country: string;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    offices?: Prisma.OfficeUncheckedCreateNestedManyWithoutHospitalAffiliationInput;
};
export type HospitalAffiliationCreateOrConnectWithoutDoctorInput = {
    where: Prisma.HospitalAffiliationWhereUniqueInput;
    create: Prisma.XOR<Prisma.HospitalAffiliationCreateWithoutDoctorInput, Prisma.HospitalAffiliationUncheckedCreateWithoutDoctorInput>;
};
export type HospitalAffiliationCreateManyDoctorInputEnvelope = {
    data: Prisma.HospitalAffiliationCreateManyDoctorInput | Prisma.HospitalAffiliationCreateManyDoctorInput[];
    skipDuplicates?: boolean;
};
export type HospitalAffiliationUpsertWithWhereUniqueWithoutDoctorInput = {
    where: Prisma.HospitalAffiliationWhereUniqueInput;
    update: Prisma.XOR<Prisma.HospitalAffiliationUpdateWithoutDoctorInput, Prisma.HospitalAffiliationUncheckedUpdateWithoutDoctorInput>;
    create: Prisma.XOR<Prisma.HospitalAffiliationCreateWithoutDoctorInput, Prisma.HospitalAffiliationUncheckedCreateWithoutDoctorInput>;
};
export type HospitalAffiliationUpdateWithWhereUniqueWithoutDoctorInput = {
    where: Prisma.HospitalAffiliationWhereUniqueInput;
    data: Prisma.XOR<Prisma.HospitalAffiliationUpdateWithoutDoctorInput, Prisma.HospitalAffiliationUncheckedUpdateWithoutDoctorInput>;
};
export type HospitalAffiliationUpdateManyWithWhereWithoutDoctorInput = {
    where: Prisma.HospitalAffiliationScalarWhereInput;
    data: Prisma.XOR<Prisma.HospitalAffiliationUpdateManyMutationInput, Prisma.HospitalAffiliationUncheckedUpdateManyWithoutDoctorInput>;
};
export type HospitalAffiliationScalarWhereInput = {
    AND?: Prisma.HospitalAffiliationScalarWhereInput | Prisma.HospitalAffiliationScalarWhereInput[];
    OR?: Prisma.HospitalAffiliationScalarWhereInput[];
    NOT?: Prisma.HospitalAffiliationScalarWhereInput | Prisma.HospitalAffiliationScalarWhereInput[];
    id?: Prisma.IntFilter<"HospitalAffiliation"> | number;
    doctorId?: Prisma.IntFilter<"HospitalAffiliation"> | number;
    hospitalName?: Prisma.StringFilter<"HospitalAffiliation"> | string;
    city?: Prisma.StringFilter<"HospitalAffiliation"> | string;
    country?: Prisma.StringFilter<"HospitalAffiliation"> | string;
    startDate?: Prisma.DateTimeNullableFilter<"HospitalAffiliation"> | Date | string | null;
    endDate?: Prisma.DateTimeNullableFilter<"HospitalAffiliation"> | Date | string | null;
};
export type HospitalAffiliationCreateWithoutOfficesInput = {
    hospitalName: string;
    city: string;
    country: string;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    doctor: Prisma.DoctorCreateNestedOneWithoutHospitalAffiliationsInput;
};
export type HospitalAffiliationUncheckedCreateWithoutOfficesInput = {
    id?: number;
    doctorId: number;
    hospitalName: string;
    city: string;
    country: string;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
};
export type HospitalAffiliationCreateOrConnectWithoutOfficesInput = {
    where: Prisma.HospitalAffiliationWhereUniqueInput;
    create: Prisma.XOR<Prisma.HospitalAffiliationCreateWithoutOfficesInput, Prisma.HospitalAffiliationUncheckedCreateWithoutOfficesInput>;
};
export type HospitalAffiliationUpsertWithoutOfficesInput = {
    update: Prisma.XOR<Prisma.HospitalAffiliationUpdateWithoutOfficesInput, Prisma.HospitalAffiliationUncheckedUpdateWithoutOfficesInput>;
    create: Prisma.XOR<Prisma.HospitalAffiliationCreateWithoutOfficesInput, Prisma.HospitalAffiliationUncheckedCreateWithoutOfficesInput>;
    where?: Prisma.HospitalAffiliationWhereInput;
};
export type HospitalAffiliationUpdateToOneWithWhereWithoutOfficesInput = {
    where?: Prisma.HospitalAffiliationWhereInput;
    data: Prisma.XOR<Prisma.HospitalAffiliationUpdateWithoutOfficesInput, Prisma.HospitalAffiliationUncheckedUpdateWithoutOfficesInput>;
};
export type HospitalAffiliationUpdateWithoutOfficesInput = {
    hospitalName?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    doctor?: Prisma.DoctorUpdateOneRequiredWithoutHospitalAffiliationsNestedInput;
};
export type HospitalAffiliationUncheckedUpdateWithoutOfficesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    doctorId?: Prisma.IntFieldUpdateOperationsInput | number;
    hospitalName?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type HospitalAffiliationCreateManyDoctorInput = {
    id?: number;
    hospitalName: string;
    city: string;
    country: string;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
};
export type HospitalAffiliationUpdateWithoutDoctorInput = {
    hospitalName?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    offices?: Prisma.OfficeUpdateManyWithoutHospitalAffiliationNestedInput;
};
export type HospitalAffiliationUncheckedUpdateWithoutDoctorInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    hospitalName?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    offices?: Prisma.OfficeUncheckedUpdateManyWithoutHospitalAffiliationNestedInput;
};
export type HospitalAffiliationUncheckedUpdateManyWithoutDoctorInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    hospitalName?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type HospitalAffiliationCountOutputType = {
    offices: number;
};
export type HospitalAffiliationCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    offices?: boolean | HospitalAffiliationCountOutputTypeCountOfficesArgs;
};
export type HospitalAffiliationCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HospitalAffiliationCountOutputTypeSelect<ExtArgs> | null;
};
export type HospitalAffiliationCountOutputTypeCountOfficesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OfficeWhereInput;
};
export type HospitalAffiliationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    doctorId?: boolean;
    hospitalName?: boolean;
    city?: boolean;
    country?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    doctor?: boolean | Prisma.DoctorDefaultArgs<ExtArgs>;
    offices?: boolean | Prisma.HospitalAffiliation$officesArgs<ExtArgs>;
    _count?: boolean | Prisma.HospitalAffiliationCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["hospitalAffiliation"]>;
export type HospitalAffiliationSelectScalar = {
    id?: boolean;
    doctorId?: boolean;
    hospitalName?: boolean;
    city?: boolean;
    country?: boolean;
    startDate?: boolean;
    endDate?: boolean;
};
export type HospitalAffiliationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "doctorId" | "hospitalName" | "city" | "country" | "startDate" | "endDate", ExtArgs["result"]["hospitalAffiliation"]>;
export type HospitalAffiliationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    doctor?: boolean | Prisma.DoctorDefaultArgs<ExtArgs>;
    offices?: boolean | Prisma.HospitalAffiliation$officesArgs<ExtArgs>;
    _count?: boolean | Prisma.HospitalAffiliationCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $HospitalAffiliationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "HospitalAffiliation";
    objects: {
        doctor: Prisma.$DoctorPayload<ExtArgs>;
        offices: Prisma.$OfficePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        doctorId: number;
        hospitalName: string;
        city: string;
        country: string;
        startDate: Date | null;
        endDate: Date | null;
    }, ExtArgs["result"]["hospitalAffiliation"]>;
    composites: {};
};
export type HospitalAffiliationGetPayload<S extends boolean | null | undefined | HospitalAffiliationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$HospitalAffiliationPayload, S>;
export type HospitalAffiliationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<HospitalAffiliationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: HospitalAffiliationCountAggregateInputType | true;
};
export interface HospitalAffiliationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['HospitalAffiliation'];
        meta: {
            name: 'HospitalAffiliation';
        };
    };
    findUnique<T extends HospitalAffiliationFindUniqueArgs>(args: Prisma.SelectSubset<T, HospitalAffiliationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__HospitalAffiliationClient<runtime.Types.Result.GetResult<Prisma.$HospitalAffiliationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends HospitalAffiliationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, HospitalAffiliationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__HospitalAffiliationClient<runtime.Types.Result.GetResult<Prisma.$HospitalAffiliationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends HospitalAffiliationFindFirstArgs>(args?: Prisma.SelectSubset<T, HospitalAffiliationFindFirstArgs<ExtArgs>>): Prisma.Prisma__HospitalAffiliationClient<runtime.Types.Result.GetResult<Prisma.$HospitalAffiliationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends HospitalAffiliationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, HospitalAffiliationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__HospitalAffiliationClient<runtime.Types.Result.GetResult<Prisma.$HospitalAffiliationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends HospitalAffiliationFindManyArgs>(args?: Prisma.SelectSubset<T, HospitalAffiliationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HospitalAffiliationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends HospitalAffiliationCreateArgs>(args: Prisma.SelectSubset<T, HospitalAffiliationCreateArgs<ExtArgs>>): Prisma.Prisma__HospitalAffiliationClient<runtime.Types.Result.GetResult<Prisma.$HospitalAffiliationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends HospitalAffiliationCreateManyArgs>(args?: Prisma.SelectSubset<T, HospitalAffiliationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends HospitalAffiliationDeleteArgs>(args: Prisma.SelectSubset<T, HospitalAffiliationDeleteArgs<ExtArgs>>): Prisma.Prisma__HospitalAffiliationClient<runtime.Types.Result.GetResult<Prisma.$HospitalAffiliationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends HospitalAffiliationUpdateArgs>(args: Prisma.SelectSubset<T, HospitalAffiliationUpdateArgs<ExtArgs>>): Prisma.Prisma__HospitalAffiliationClient<runtime.Types.Result.GetResult<Prisma.$HospitalAffiliationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends HospitalAffiliationDeleteManyArgs>(args?: Prisma.SelectSubset<T, HospitalAffiliationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends HospitalAffiliationUpdateManyArgs>(args: Prisma.SelectSubset<T, HospitalAffiliationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends HospitalAffiliationUpsertArgs>(args: Prisma.SelectSubset<T, HospitalAffiliationUpsertArgs<ExtArgs>>): Prisma.Prisma__HospitalAffiliationClient<runtime.Types.Result.GetResult<Prisma.$HospitalAffiliationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends HospitalAffiliationCountArgs>(args?: Prisma.Subset<T, HospitalAffiliationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], HospitalAffiliationCountAggregateOutputType> : number>;
    aggregate<T extends HospitalAffiliationAggregateArgs>(args: Prisma.Subset<T, HospitalAffiliationAggregateArgs>): Prisma.PrismaPromise<GetHospitalAffiliationAggregateType<T>>;
    groupBy<T extends HospitalAffiliationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: HospitalAffiliationGroupByArgs['orderBy'];
    } : {
        orderBy?: HospitalAffiliationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, HospitalAffiliationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHospitalAffiliationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: HospitalAffiliationFieldRefs;
}
export interface Prisma__HospitalAffiliationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    doctor<T extends Prisma.DoctorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DoctorDefaultArgs<ExtArgs>>): Prisma.Prisma__DoctorClient<runtime.Types.Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    offices<T extends Prisma.HospitalAffiliation$officesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.HospitalAffiliation$officesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface HospitalAffiliationFieldRefs {
    readonly id: Prisma.FieldRef<"HospitalAffiliation", 'Int'>;
    readonly doctorId: Prisma.FieldRef<"HospitalAffiliation", 'Int'>;
    readonly hospitalName: Prisma.FieldRef<"HospitalAffiliation", 'String'>;
    readonly city: Prisma.FieldRef<"HospitalAffiliation", 'String'>;
    readonly country: Prisma.FieldRef<"HospitalAffiliation", 'String'>;
    readonly startDate: Prisma.FieldRef<"HospitalAffiliation", 'DateTime'>;
    readonly endDate: Prisma.FieldRef<"HospitalAffiliation", 'DateTime'>;
}
export type HospitalAffiliationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HospitalAffiliationSelect<ExtArgs> | null;
    omit?: Prisma.HospitalAffiliationOmit<ExtArgs> | null;
    include?: Prisma.HospitalAffiliationInclude<ExtArgs> | null;
    where: Prisma.HospitalAffiliationWhereUniqueInput;
};
export type HospitalAffiliationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HospitalAffiliationSelect<ExtArgs> | null;
    omit?: Prisma.HospitalAffiliationOmit<ExtArgs> | null;
    include?: Prisma.HospitalAffiliationInclude<ExtArgs> | null;
    where: Prisma.HospitalAffiliationWhereUniqueInput;
};
export type HospitalAffiliationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type HospitalAffiliationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type HospitalAffiliationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type HospitalAffiliationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HospitalAffiliationSelect<ExtArgs> | null;
    omit?: Prisma.HospitalAffiliationOmit<ExtArgs> | null;
    include?: Prisma.HospitalAffiliationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HospitalAffiliationCreateInput, Prisma.HospitalAffiliationUncheckedCreateInput>;
};
export type HospitalAffiliationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.HospitalAffiliationCreateManyInput | Prisma.HospitalAffiliationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type HospitalAffiliationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HospitalAffiliationSelect<ExtArgs> | null;
    omit?: Prisma.HospitalAffiliationOmit<ExtArgs> | null;
    include?: Prisma.HospitalAffiliationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HospitalAffiliationUpdateInput, Prisma.HospitalAffiliationUncheckedUpdateInput>;
    where: Prisma.HospitalAffiliationWhereUniqueInput;
};
export type HospitalAffiliationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.HospitalAffiliationUpdateManyMutationInput, Prisma.HospitalAffiliationUncheckedUpdateManyInput>;
    where?: Prisma.HospitalAffiliationWhereInput;
    limit?: number;
};
export type HospitalAffiliationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HospitalAffiliationSelect<ExtArgs> | null;
    omit?: Prisma.HospitalAffiliationOmit<ExtArgs> | null;
    include?: Prisma.HospitalAffiliationInclude<ExtArgs> | null;
    where: Prisma.HospitalAffiliationWhereUniqueInput;
    create: Prisma.XOR<Prisma.HospitalAffiliationCreateInput, Prisma.HospitalAffiliationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.HospitalAffiliationUpdateInput, Prisma.HospitalAffiliationUncheckedUpdateInput>;
};
export type HospitalAffiliationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HospitalAffiliationSelect<ExtArgs> | null;
    omit?: Prisma.HospitalAffiliationOmit<ExtArgs> | null;
    include?: Prisma.HospitalAffiliationInclude<ExtArgs> | null;
    where: Prisma.HospitalAffiliationWhereUniqueInput;
};
export type HospitalAffiliationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HospitalAffiliationWhereInput;
    limit?: number;
};
export type HospitalAffiliation$officesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type HospitalAffiliationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HospitalAffiliationSelect<ExtArgs> | null;
    omit?: Prisma.HospitalAffiliationOmit<ExtArgs> | null;
    include?: Prisma.HospitalAffiliationInclude<ExtArgs> | null;
};
export {};
