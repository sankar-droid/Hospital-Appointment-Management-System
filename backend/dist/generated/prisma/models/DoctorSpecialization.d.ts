import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DoctorSpecializationModel = runtime.Types.Result.DefaultSelection<Prisma.$DoctorSpecializationPayload>;
export type AggregateDoctorSpecialization = {
    _count: DoctorSpecializationCountAggregateOutputType | null;
    _avg: DoctorSpecializationAvgAggregateOutputType | null;
    _sum: DoctorSpecializationSumAggregateOutputType | null;
    _min: DoctorSpecializationMinAggregateOutputType | null;
    _max: DoctorSpecializationMaxAggregateOutputType | null;
};
export type DoctorSpecializationAvgAggregateOutputType = {
    id: number | null;
    doctorId: number | null;
    specializationId: number | null;
};
export type DoctorSpecializationSumAggregateOutputType = {
    id: number | null;
    doctorId: number | null;
    specializationId: number | null;
};
export type DoctorSpecializationMinAggregateOutputType = {
    id: number | null;
    doctorId: number | null;
    specializationId: number | null;
};
export type DoctorSpecializationMaxAggregateOutputType = {
    id: number | null;
    doctorId: number | null;
    specializationId: number | null;
};
export type DoctorSpecializationCountAggregateOutputType = {
    id: number;
    doctorId: number;
    specializationId: number;
    _all: number;
};
export type DoctorSpecializationAvgAggregateInputType = {
    id?: true;
    doctorId?: true;
    specializationId?: true;
};
export type DoctorSpecializationSumAggregateInputType = {
    id?: true;
    doctorId?: true;
    specializationId?: true;
};
export type DoctorSpecializationMinAggregateInputType = {
    id?: true;
    doctorId?: true;
    specializationId?: true;
};
export type DoctorSpecializationMaxAggregateInputType = {
    id?: true;
    doctorId?: true;
    specializationId?: true;
};
export type DoctorSpecializationCountAggregateInputType = {
    id?: true;
    doctorId?: true;
    specializationId?: true;
    _all?: true;
};
export type DoctorSpecializationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DoctorSpecializationWhereInput;
    orderBy?: Prisma.DoctorSpecializationOrderByWithRelationInput | Prisma.DoctorSpecializationOrderByWithRelationInput[];
    cursor?: Prisma.DoctorSpecializationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DoctorSpecializationCountAggregateInputType;
    _avg?: DoctorSpecializationAvgAggregateInputType;
    _sum?: DoctorSpecializationSumAggregateInputType;
    _min?: DoctorSpecializationMinAggregateInputType;
    _max?: DoctorSpecializationMaxAggregateInputType;
};
export type GetDoctorSpecializationAggregateType<T extends DoctorSpecializationAggregateArgs> = {
    [P in keyof T & keyof AggregateDoctorSpecialization]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDoctorSpecialization[P]> : Prisma.GetScalarType<T[P], AggregateDoctorSpecialization[P]>;
};
export type DoctorSpecializationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DoctorSpecializationWhereInput;
    orderBy?: Prisma.DoctorSpecializationOrderByWithAggregationInput | Prisma.DoctorSpecializationOrderByWithAggregationInput[];
    by: Prisma.DoctorSpecializationScalarFieldEnum[] | Prisma.DoctorSpecializationScalarFieldEnum;
    having?: Prisma.DoctorSpecializationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DoctorSpecializationCountAggregateInputType | true;
    _avg?: DoctorSpecializationAvgAggregateInputType;
    _sum?: DoctorSpecializationSumAggregateInputType;
    _min?: DoctorSpecializationMinAggregateInputType;
    _max?: DoctorSpecializationMaxAggregateInputType;
};
export type DoctorSpecializationGroupByOutputType = {
    id: number;
    doctorId: number;
    specializationId: number;
    _count: DoctorSpecializationCountAggregateOutputType | null;
    _avg: DoctorSpecializationAvgAggregateOutputType | null;
    _sum: DoctorSpecializationSumAggregateOutputType | null;
    _min: DoctorSpecializationMinAggregateOutputType | null;
    _max: DoctorSpecializationMaxAggregateOutputType | null;
};
type GetDoctorSpecializationGroupByPayload<T extends DoctorSpecializationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DoctorSpecializationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DoctorSpecializationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DoctorSpecializationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DoctorSpecializationGroupByOutputType[P]>;
}>>;
export type DoctorSpecializationWhereInput = {
    AND?: Prisma.DoctorSpecializationWhereInput | Prisma.DoctorSpecializationWhereInput[];
    OR?: Prisma.DoctorSpecializationWhereInput[];
    NOT?: Prisma.DoctorSpecializationWhereInput | Prisma.DoctorSpecializationWhereInput[];
    id?: Prisma.IntFilter<"DoctorSpecialization"> | number;
    doctorId?: Prisma.IntFilter<"DoctorSpecialization"> | number;
    specializationId?: Prisma.IntFilter<"DoctorSpecialization"> | number;
    doctor?: Prisma.XOR<Prisma.DoctorScalarRelationFilter, Prisma.DoctorWhereInput>;
    specialization?: Prisma.XOR<Prisma.SpecializationScalarRelationFilter, Prisma.SpecializationWhereInput>;
};
export type DoctorSpecializationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    specializationId?: Prisma.SortOrder;
    doctor?: Prisma.DoctorOrderByWithRelationInput;
    specialization?: Prisma.SpecializationOrderByWithRelationInput;
};
export type DoctorSpecializationWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.DoctorSpecializationWhereInput | Prisma.DoctorSpecializationWhereInput[];
    OR?: Prisma.DoctorSpecializationWhereInput[];
    NOT?: Prisma.DoctorSpecializationWhereInput | Prisma.DoctorSpecializationWhereInput[];
    doctorId?: Prisma.IntFilter<"DoctorSpecialization"> | number;
    specializationId?: Prisma.IntFilter<"DoctorSpecialization"> | number;
    doctor?: Prisma.XOR<Prisma.DoctorScalarRelationFilter, Prisma.DoctorWhereInput>;
    specialization?: Prisma.XOR<Prisma.SpecializationScalarRelationFilter, Prisma.SpecializationWhereInput>;
}, "id">;
export type DoctorSpecializationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    specializationId?: Prisma.SortOrder;
    _count?: Prisma.DoctorSpecializationCountOrderByAggregateInput;
    _avg?: Prisma.DoctorSpecializationAvgOrderByAggregateInput;
    _max?: Prisma.DoctorSpecializationMaxOrderByAggregateInput;
    _min?: Prisma.DoctorSpecializationMinOrderByAggregateInput;
    _sum?: Prisma.DoctorSpecializationSumOrderByAggregateInput;
};
export type DoctorSpecializationScalarWhereWithAggregatesInput = {
    AND?: Prisma.DoctorSpecializationScalarWhereWithAggregatesInput | Prisma.DoctorSpecializationScalarWhereWithAggregatesInput[];
    OR?: Prisma.DoctorSpecializationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DoctorSpecializationScalarWhereWithAggregatesInput | Prisma.DoctorSpecializationScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"DoctorSpecialization"> | number;
    doctorId?: Prisma.IntWithAggregatesFilter<"DoctorSpecialization"> | number;
    specializationId?: Prisma.IntWithAggregatesFilter<"DoctorSpecialization"> | number;
};
export type DoctorSpecializationCreateInput = {
    doctor: Prisma.DoctorCreateNestedOneWithoutSpecializationsInput;
    specialization: Prisma.SpecializationCreateNestedOneWithoutDoctorsInput;
};
export type DoctorSpecializationUncheckedCreateInput = {
    id?: number;
    doctorId: number;
    specializationId: number;
};
export type DoctorSpecializationUpdateInput = {
    doctor?: Prisma.DoctorUpdateOneRequiredWithoutSpecializationsNestedInput;
    specialization?: Prisma.SpecializationUpdateOneRequiredWithoutDoctorsNestedInput;
};
export type DoctorSpecializationUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    doctorId?: Prisma.IntFieldUpdateOperationsInput | number;
    specializationId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type DoctorSpecializationCreateManyInput = {
    id?: number;
    doctorId: number;
    specializationId: number;
};
export type DoctorSpecializationUpdateManyMutationInput = {};
export type DoctorSpecializationUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    doctorId?: Prisma.IntFieldUpdateOperationsInput | number;
    specializationId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type DoctorSpecializationListRelationFilter = {
    every?: Prisma.DoctorSpecializationWhereInput;
    some?: Prisma.DoctorSpecializationWhereInput;
    none?: Prisma.DoctorSpecializationWhereInput;
};
export type DoctorSpecializationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DoctorSpecializationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    specializationId?: Prisma.SortOrder;
};
export type DoctorSpecializationAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    specializationId?: Prisma.SortOrder;
};
export type DoctorSpecializationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    specializationId?: Prisma.SortOrder;
};
export type DoctorSpecializationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    specializationId?: Prisma.SortOrder;
};
export type DoctorSpecializationSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    specializationId?: Prisma.SortOrder;
};
export type DoctorSpecializationCreateNestedManyWithoutDoctorInput = {
    create?: Prisma.XOR<Prisma.DoctorSpecializationCreateWithoutDoctorInput, Prisma.DoctorSpecializationUncheckedCreateWithoutDoctorInput> | Prisma.DoctorSpecializationCreateWithoutDoctorInput[] | Prisma.DoctorSpecializationUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: Prisma.DoctorSpecializationCreateOrConnectWithoutDoctorInput | Prisma.DoctorSpecializationCreateOrConnectWithoutDoctorInput[];
    createMany?: Prisma.DoctorSpecializationCreateManyDoctorInputEnvelope;
    connect?: Prisma.DoctorSpecializationWhereUniqueInput | Prisma.DoctorSpecializationWhereUniqueInput[];
};
export type DoctorSpecializationUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: Prisma.XOR<Prisma.DoctorSpecializationCreateWithoutDoctorInput, Prisma.DoctorSpecializationUncheckedCreateWithoutDoctorInput> | Prisma.DoctorSpecializationCreateWithoutDoctorInput[] | Prisma.DoctorSpecializationUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: Prisma.DoctorSpecializationCreateOrConnectWithoutDoctorInput | Prisma.DoctorSpecializationCreateOrConnectWithoutDoctorInput[];
    createMany?: Prisma.DoctorSpecializationCreateManyDoctorInputEnvelope;
    connect?: Prisma.DoctorSpecializationWhereUniqueInput | Prisma.DoctorSpecializationWhereUniqueInput[];
};
export type DoctorSpecializationUpdateManyWithoutDoctorNestedInput = {
    create?: Prisma.XOR<Prisma.DoctorSpecializationCreateWithoutDoctorInput, Prisma.DoctorSpecializationUncheckedCreateWithoutDoctorInput> | Prisma.DoctorSpecializationCreateWithoutDoctorInput[] | Prisma.DoctorSpecializationUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: Prisma.DoctorSpecializationCreateOrConnectWithoutDoctorInput | Prisma.DoctorSpecializationCreateOrConnectWithoutDoctorInput[];
    upsert?: Prisma.DoctorSpecializationUpsertWithWhereUniqueWithoutDoctorInput | Prisma.DoctorSpecializationUpsertWithWhereUniqueWithoutDoctorInput[];
    createMany?: Prisma.DoctorSpecializationCreateManyDoctorInputEnvelope;
    set?: Prisma.DoctorSpecializationWhereUniqueInput | Prisma.DoctorSpecializationWhereUniqueInput[];
    disconnect?: Prisma.DoctorSpecializationWhereUniqueInput | Prisma.DoctorSpecializationWhereUniqueInput[];
    delete?: Prisma.DoctorSpecializationWhereUniqueInput | Prisma.DoctorSpecializationWhereUniqueInput[];
    connect?: Prisma.DoctorSpecializationWhereUniqueInput | Prisma.DoctorSpecializationWhereUniqueInput[];
    update?: Prisma.DoctorSpecializationUpdateWithWhereUniqueWithoutDoctorInput | Prisma.DoctorSpecializationUpdateWithWhereUniqueWithoutDoctorInput[];
    updateMany?: Prisma.DoctorSpecializationUpdateManyWithWhereWithoutDoctorInput | Prisma.DoctorSpecializationUpdateManyWithWhereWithoutDoctorInput[];
    deleteMany?: Prisma.DoctorSpecializationScalarWhereInput | Prisma.DoctorSpecializationScalarWhereInput[];
};
export type DoctorSpecializationUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: Prisma.XOR<Prisma.DoctorSpecializationCreateWithoutDoctorInput, Prisma.DoctorSpecializationUncheckedCreateWithoutDoctorInput> | Prisma.DoctorSpecializationCreateWithoutDoctorInput[] | Prisma.DoctorSpecializationUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: Prisma.DoctorSpecializationCreateOrConnectWithoutDoctorInput | Prisma.DoctorSpecializationCreateOrConnectWithoutDoctorInput[];
    upsert?: Prisma.DoctorSpecializationUpsertWithWhereUniqueWithoutDoctorInput | Prisma.DoctorSpecializationUpsertWithWhereUniqueWithoutDoctorInput[];
    createMany?: Prisma.DoctorSpecializationCreateManyDoctorInputEnvelope;
    set?: Prisma.DoctorSpecializationWhereUniqueInput | Prisma.DoctorSpecializationWhereUniqueInput[];
    disconnect?: Prisma.DoctorSpecializationWhereUniqueInput | Prisma.DoctorSpecializationWhereUniqueInput[];
    delete?: Prisma.DoctorSpecializationWhereUniqueInput | Prisma.DoctorSpecializationWhereUniqueInput[];
    connect?: Prisma.DoctorSpecializationWhereUniqueInput | Prisma.DoctorSpecializationWhereUniqueInput[];
    update?: Prisma.DoctorSpecializationUpdateWithWhereUniqueWithoutDoctorInput | Prisma.DoctorSpecializationUpdateWithWhereUniqueWithoutDoctorInput[];
    updateMany?: Prisma.DoctorSpecializationUpdateManyWithWhereWithoutDoctorInput | Prisma.DoctorSpecializationUpdateManyWithWhereWithoutDoctorInput[];
    deleteMany?: Prisma.DoctorSpecializationScalarWhereInput | Prisma.DoctorSpecializationScalarWhereInput[];
};
export type DoctorSpecializationCreateNestedManyWithoutSpecializationInput = {
    create?: Prisma.XOR<Prisma.DoctorSpecializationCreateWithoutSpecializationInput, Prisma.DoctorSpecializationUncheckedCreateWithoutSpecializationInput> | Prisma.DoctorSpecializationCreateWithoutSpecializationInput[] | Prisma.DoctorSpecializationUncheckedCreateWithoutSpecializationInput[];
    connectOrCreate?: Prisma.DoctorSpecializationCreateOrConnectWithoutSpecializationInput | Prisma.DoctorSpecializationCreateOrConnectWithoutSpecializationInput[];
    createMany?: Prisma.DoctorSpecializationCreateManySpecializationInputEnvelope;
    connect?: Prisma.DoctorSpecializationWhereUniqueInput | Prisma.DoctorSpecializationWhereUniqueInput[];
};
export type DoctorSpecializationUncheckedCreateNestedManyWithoutSpecializationInput = {
    create?: Prisma.XOR<Prisma.DoctorSpecializationCreateWithoutSpecializationInput, Prisma.DoctorSpecializationUncheckedCreateWithoutSpecializationInput> | Prisma.DoctorSpecializationCreateWithoutSpecializationInput[] | Prisma.DoctorSpecializationUncheckedCreateWithoutSpecializationInput[];
    connectOrCreate?: Prisma.DoctorSpecializationCreateOrConnectWithoutSpecializationInput | Prisma.DoctorSpecializationCreateOrConnectWithoutSpecializationInput[];
    createMany?: Prisma.DoctorSpecializationCreateManySpecializationInputEnvelope;
    connect?: Prisma.DoctorSpecializationWhereUniqueInput | Prisma.DoctorSpecializationWhereUniqueInput[];
};
export type DoctorSpecializationUpdateManyWithoutSpecializationNestedInput = {
    create?: Prisma.XOR<Prisma.DoctorSpecializationCreateWithoutSpecializationInput, Prisma.DoctorSpecializationUncheckedCreateWithoutSpecializationInput> | Prisma.DoctorSpecializationCreateWithoutSpecializationInput[] | Prisma.DoctorSpecializationUncheckedCreateWithoutSpecializationInput[];
    connectOrCreate?: Prisma.DoctorSpecializationCreateOrConnectWithoutSpecializationInput | Prisma.DoctorSpecializationCreateOrConnectWithoutSpecializationInput[];
    upsert?: Prisma.DoctorSpecializationUpsertWithWhereUniqueWithoutSpecializationInput | Prisma.DoctorSpecializationUpsertWithWhereUniqueWithoutSpecializationInput[];
    createMany?: Prisma.DoctorSpecializationCreateManySpecializationInputEnvelope;
    set?: Prisma.DoctorSpecializationWhereUniqueInput | Prisma.DoctorSpecializationWhereUniqueInput[];
    disconnect?: Prisma.DoctorSpecializationWhereUniqueInput | Prisma.DoctorSpecializationWhereUniqueInput[];
    delete?: Prisma.DoctorSpecializationWhereUniqueInput | Prisma.DoctorSpecializationWhereUniqueInput[];
    connect?: Prisma.DoctorSpecializationWhereUniqueInput | Prisma.DoctorSpecializationWhereUniqueInput[];
    update?: Prisma.DoctorSpecializationUpdateWithWhereUniqueWithoutSpecializationInput | Prisma.DoctorSpecializationUpdateWithWhereUniqueWithoutSpecializationInput[];
    updateMany?: Prisma.DoctorSpecializationUpdateManyWithWhereWithoutSpecializationInput | Prisma.DoctorSpecializationUpdateManyWithWhereWithoutSpecializationInput[];
    deleteMany?: Prisma.DoctorSpecializationScalarWhereInput | Prisma.DoctorSpecializationScalarWhereInput[];
};
export type DoctorSpecializationUncheckedUpdateManyWithoutSpecializationNestedInput = {
    create?: Prisma.XOR<Prisma.DoctorSpecializationCreateWithoutSpecializationInput, Prisma.DoctorSpecializationUncheckedCreateWithoutSpecializationInput> | Prisma.DoctorSpecializationCreateWithoutSpecializationInput[] | Prisma.DoctorSpecializationUncheckedCreateWithoutSpecializationInput[];
    connectOrCreate?: Prisma.DoctorSpecializationCreateOrConnectWithoutSpecializationInput | Prisma.DoctorSpecializationCreateOrConnectWithoutSpecializationInput[];
    upsert?: Prisma.DoctorSpecializationUpsertWithWhereUniqueWithoutSpecializationInput | Prisma.DoctorSpecializationUpsertWithWhereUniqueWithoutSpecializationInput[];
    createMany?: Prisma.DoctorSpecializationCreateManySpecializationInputEnvelope;
    set?: Prisma.DoctorSpecializationWhereUniqueInput | Prisma.DoctorSpecializationWhereUniqueInput[];
    disconnect?: Prisma.DoctorSpecializationWhereUniqueInput | Prisma.DoctorSpecializationWhereUniqueInput[];
    delete?: Prisma.DoctorSpecializationWhereUniqueInput | Prisma.DoctorSpecializationWhereUniqueInput[];
    connect?: Prisma.DoctorSpecializationWhereUniqueInput | Prisma.DoctorSpecializationWhereUniqueInput[];
    update?: Prisma.DoctorSpecializationUpdateWithWhereUniqueWithoutSpecializationInput | Prisma.DoctorSpecializationUpdateWithWhereUniqueWithoutSpecializationInput[];
    updateMany?: Prisma.DoctorSpecializationUpdateManyWithWhereWithoutSpecializationInput | Prisma.DoctorSpecializationUpdateManyWithWhereWithoutSpecializationInput[];
    deleteMany?: Prisma.DoctorSpecializationScalarWhereInput | Prisma.DoctorSpecializationScalarWhereInput[];
};
export type DoctorSpecializationCreateWithoutDoctorInput = {
    specialization: Prisma.SpecializationCreateNestedOneWithoutDoctorsInput;
};
export type DoctorSpecializationUncheckedCreateWithoutDoctorInput = {
    id?: number;
    specializationId: number;
};
export type DoctorSpecializationCreateOrConnectWithoutDoctorInput = {
    where: Prisma.DoctorSpecializationWhereUniqueInput;
    create: Prisma.XOR<Prisma.DoctorSpecializationCreateWithoutDoctorInput, Prisma.DoctorSpecializationUncheckedCreateWithoutDoctorInput>;
};
export type DoctorSpecializationCreateManyDoctorInputEnvelope = {
    data: Prisma.DoctorSpecializationCreateManyDoctorInput | Prisma.DoctorSpecializationCreateManyDoctorInput[];
    skipDuplicates?: boolean;
};
export type DoctorSpecializationUpsertWithWhereUniqueWithoutDoctorInput = {
    where: Prisma.DoctorSpecializationWhereUniqueInput;
    update: Prisma.XOR<Prisma.DoctorSpecializationUpdateWithoutDoctorInput, Prisma.DoctorSpecializationUncheckedUpdateWithoutDoctorInput>;
    create: Prisma.XOR<Prisma.DoctorSpecializationCreateWithoutDoctorInput, Prisma.DoctorSpecializationUncheckedCreateWithoutDoctorInput>;
};
export type DoctorSpecializationUpdateWithWhereUniqueWithoutDoctorInput = {
    where: Prisma.DoctorSpecializationWhereUniqueInput;
    data: Prisma.XOR<Prisma.DoctorSpecializationUpdateWithoutDoctorInput, Prisma.DoctorSpecializationUncheckedUpdateWithoutDoctorInput>;
};
export type DoctorSpecializationUpdateManyWithWhereWithoutDoctorInput = {
    where: Prisma.DoctorSpecializationScalarWhereInput;
    data: Prisma.XOR<Prisma.DoctorSpecializationUpdateManyMutationInput, Prisma.DoctorSpecializationUncheckedUpdateManyWithoutDoctorInput>;
};
export type DoctorSpecializationScalarWhereInput = {
    AND?: Prisma.DoctorSpecializationScalarWhereInput | Prisma.DoctorSpecializationScalarWhereInput[];
    OR?: Prisma.DoctorSpecializationScalarWhereInput[];
    NOT?: Prisma.DoctorSpecializationScalarWhereInput | Prisma.DoctorSpecializationScalarWhereInput[];
    id?: Prisma.IntFilter<"DoctorSpecialization"> | number;
    doctorId?: Prisma.IntFilter<"DoctorSpecialization"> | number;
    specializationId?: Prisma.IntFilter<"DoctorSpecialization"> | number;
};
export type DoctorSpecializationCreateWithoutSpecializationInput = {
    doctor: Prisma.DoctorCreateNestedOneWithoutSpecializationsInput;
};
export type DoctorSpecializationUncheckedCreateWithoutSpecializationInput = {
    id?: number;
    doctorId: number;
};
export type DoctorSpecializationCreateOrConnectWithoutSpecializationInput = {
    where: Prisma.DoctorSpecializationWhereUniqueInput;
    create: Prisma.XOR<Prisma.DoctorSpecializationCreateWithoutSpecializationInput, Prisma.DoctorSpecializationUncheckedCreateWithoutSpecializationInput>;
};
export type DoctorSpecializationCreateManySpecializationInputEnvelope = {
    data: Prisma.DoctorSpecializationCreateManySpecializationInput | Prisma.DoctorSpecializationCreateManySpecializationInput[];
    skipDuplicates?: boolean;
};
export type DoctorSpecializationUpsertWithWhereUniqueWithoutSpecializationInput = {
    where: Prisma.DoctorSpecializationWhereUniqueInput;
    update: Prisma.XOR<Prisma.DoctorSpecializationUpdateWithoutSpecializationInput, Prisma.DoctorSpecializationUncheckedUpdateWithoutSpecializationInput>;
    create: Prisma.XOR<Prisma.DoctorSpecializationCreateWithoutSpecializationInput, Prisma.DoctorSpecializationUncheckedCreateWithoutSpecializationInput>;
};
export type DoctorSpecializationUpdateWithWhereUniqueWithoutSpecializationInput = {
    where: Prisma.DoctorSpecializationWhereUniqueInput;
    data: Prisma.XOR<Prisma.DoctorSpecializationUpdateWithoutSpecializationInput, Prisma.DoctorSpecializationUncheckedUpdateWithoutSpecializationInput>;
};
export type DoctorSpecializationUpdateManyWithWhereWithoutSpecializationInput = {
    where: Prisma.DoctorSpecializationScalarWhereInput;
    data: Prisma.XOR<Prisma.DoctorSpecializationUpdateManyMutationInput, Prisma.DoctorSpecializationUncheckedUpdateManyWithoutSpecializationInput>;
};
export type DoctorSpecializationCreateManyDoctorInput = {
    id?: number;
    specializationId: number;
};
export type DoctorSpecializationUpdateWithoutDoctorInput = {
    specialization?: Prisma.SpecializationUpdateOneRequiredWithoutDoctorsNestedInput;
};
export type DoctorSpecializationUncheckedUpdateWithoutDoctorInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    specializationId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type DoctorSpecializationUncheckedUpdateManyWithoutDoctorInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    specializationId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type DoctorSpecializationCreateManySpecializationInput = {
    id?: number;
    doctorId: number;
};
export type DoctorSpecializationUpdateWithoutSpecializationInput = {
    doctor?: Prisma.DoctorUpdateOneRequiredWithoutSpecializationsNestedInput;
};
export type DoctorSpecializationUncheckedUpdateWithoutSpecializationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    doctorId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type DoctorSpecializationUncheckedUpdateManyWithoutSpecializationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    doctorId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type DoctorSpecializationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    doctorId?: boolean;
    specializationId?: boolean;
    doctor?: boolean | Prisma.DoctorDefaultArgs<ExtArgs>;
    specialization?: boolean | Prisma.SpecializationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["doctorSpecialization"]>;
export type DoctorSpecializationSelectScalar = {
    id?: boolean;
    doctorId?: boolean;
    specializationId?: boolean;
};
export type DoctorSpecializationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "doctorId" | "specializationId", ExtArgs["result"]["doctorSpecialization"]>;
export type DoctorSpecializationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    doctor?: boolean | Prisma.DoctorDefaultArgs<ExtArgs>;
    specialization?: boolean | Prisma.SpecializationDefaultArgs<ExtArgs>;
};
export type $DoctorSpecializationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DoctorSpecialization";
    objects: {
        doctor: Prisma.$DoctorPayload<ExtArgs>;
        specialization: Prisma.$SpecializationPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        doctorId: number;
        specializationId: number;
    }, ExtArgs["result"]["doctorSpecialization"]>;
    composites: {};
};
export type DoctorSpecializationGetPayload<S extends boolean | null | undefined | DoctorSpecializationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DoctorSpecializationPayload, S>;
export type DoctorSpecializationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DoctorSpecializationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DoctorSpecializationCountAggregateInputType | true;
};
export interface DoctorSpecializationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DoctorSpecialization'];
        meta: {
            name: 'DoctorSpecialization';
        };
    };
    findUnique<T extends DoctorSpecializationFindUniqueArgs>(args: Prisma.SelectSubset<T, DoctorSpecializationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DoctorSpecializationClient<runtime.Types.Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DoctorSpecializationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DoctorSpecializationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DoctorSpecializationClient<runtime.Types.Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DoctorSpecializationFindFirstArgs>(args?: Prisma.SelectSubset<T, DoctorSpecializationFindFirstArgs<ExtArgs>>): Prisma.Prisma__DoctorSpecializationClient<runtime.Types.Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DoctorSpecializationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DoctorSpecializationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DoctorSpecializationClient<runtime.Types.Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DoctorSpecializationFindManyArgs>(args?: Prisma.SelectSubset<T, DoctorSpecializationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DoctorSpecializationCreateArgs>(args: Prisma.SelectSubset<T, DoctorSpecializationCreateArgs<ExtArgs>>): Prisma.Prisma__DoctorSpecializationClient<runtime.Types.Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DoctorSpecializationCreateManyArgs>(args?: Prisma.SelectSubset<T, DoctorSpecializationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends DoctorSpecializationDeleteArgs>(args: Prisma.SelectSubset<T, DoctorSpecializationDeleteArgs<ExtArgs>>): Prisma.Prisma__DoctorSpecializationClient<runtime.Types.Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DoctorSpecializationUpdateArgs>(args: Prisma.SelectSubset<T, DoctorSpecializationUpdateArgs<ExtArgs>>): Prisma.Prisma__DoctorSpecializationClient<runtime.Types.Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DoctorSpecializationDeleteManyArgs>(args?: Prisma.SelectSubset<T, DoctorSpecializationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DoctorSpecializationUpdateManyArgs>(args: Prisma.SelectSubset<T, DoctorSpecializationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends DoctorSpecializationUpsertArgs>(args: Prisma.SelectSubset<T, DoctorSpecializationUpsertArgs<ExtArgs>>): Prisma.Prisma__DoctorSpecializationClient<runtime.Types.Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DoctorSpecializationCountArgs>(args?: Prisma.Subset<T, DoctorSpecializationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DoctorSpecializationCountAggregateOutputType> : number>;
    aggregate<T extends DoctorSpecializationAggregateArgs>(args: Prisma.Subset<T, DoctorSpecializationAggregateArgs>): Prisma.PrismaPromise<GetDoctorSpecializationAggregateType<T>>;
    groupBy<T extends DoctorSpecializationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DoctorSpecializationGroupByArgs['orderBy'];
    } : {
        orderBy?: DoctorSpecializationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DoctorSpecializationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorSpecializationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DoctorSpecializationFieldRefs;
}
export interface Prisma__DoctorSpecializationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    doctor<T extends Prisma.DoctorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DoctorDefaultArgs<ExtArgs>>): Prisma.Prisma__DoctorClient<runtime.Types.Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    specialization<T extends Prisma.SpecializationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SpecializationDefaultArgs<ExtArgs>>): Prisma.Prisma__SpecializationClient<runtime.Types.Result.GetResult<Prisma.$SpecializationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DoctorSpecializationFieldRefs {
    readonly id: Prisma.FieldRef<"DoctorSpecialization", 'Int'>;
    readonly doctorId: Prisma.FieldRef<"DoctorSpecialization", 'Int'>;
    readonly specializationId: Prisma.FieldRef<"DoctorSpecialization", 'Int'>;
}
export type DoctorSpecializationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DoctorSpecializationSelect<ExtArgs> | null;
    omit?: Prisma.DoctorSpecializationOmit<ExtArgs> | null;
    include?: Prisma.DoctorSpecializationInclude<ExtArgs> | null;
    where: Prisma.DoctorSpecializationWhereUniqueInput;
};
export type DoctorSpecializationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DoctorSpecializationSelect<ExtArgs> | null;
    omit?: Prisma.DoctorSpecializationOmit<ExtArgs> | null;
    include?: Prisma.DoctorSpecializationInclude<ExtArgs> | null;
    where: Prisma.DoctorSpecializationWhereUniqueInput;
};
export type DoctorSpecializationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DoctorSpecializationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DoctorSpecializationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DoctorSpecializationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DoctorSpecializationSelect<ExtArgs> | null;
    omit?: Prisma.DoctorSpecializationOmit<ExtArgs> | null;
    include?: Prisma.DoctorSpecializationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DoctorSpecializationCreateInput, Prisma.DoctorSpecializationUncheckedCreateInput>;
};
export type DoctorSpecializationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DoctorSpecializationCreateManyInput | Prisma.DoctorSpecializationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DoctorSpecializationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DoctorSpecializationSelect<ExtArgs> | null;
    omit?: Prisma.DoctorSpecializationOmit<ExtArgs> | null;
    include?: Prisma.DoctorSpecializationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DoctorSpecializationUpdateInput, Prisma.DoctorSpecializationUncheckedUpdateInput>;
    where: Prisma.DoctorSpecializationWhereUniqueInput;
};
export type DoctorSpecializationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DoctorSpecializationUpdateManyMutationInput, Prisma.DoctorSpecializationUncheckedUpdateManyInput>;
    where?: Prisma.DoctorSpecializationWhereInput;
    limit?: number;
};
export type DoctorSpecializationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DoctorSpecializationSelect<ExtArgs> | null;
    omit?: Prisma.DoctorSpecializationOmit<ExtArgs> | null;
    include?: Prisma.DoctorSpecializationInclude<ExtArgs> | null;
    where: Prisma.DoctorSpecializationWhereUniqueInput;
    create: Prisma.XOR<Prisma.DoctorSpecializationCreateInput, Prisma.DoctorSpecializationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DoctorSpecializationUpdateInput, Prisma.DoctorSpecializationUncheckedUpdateInput>;
};
export type DoctorSpecializationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DoctorSpecializationSelect<ExtArgs> | null;
    omit?: Prisma.DoctorSpecializationOmit<ExtArgs> | null;
    include?: Prisma.DoctorSpecializationInclude<ExtArgs> | null;
    where: Prisma.DoctorSpecializationWhereUniqueInput;
};
export type DoctorSpecializationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DoctorSpecializationWhereInput;
    limit?: number;
};
export type DoctorSpecializationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DoctorSpecializationSelect<ExtArgs> | null;
    omit?: Prisma.DoctorSpecializationOmit<ExtArgs> | null;
    include?: Prisma.DoctorSpecializationInclude<ExtArgs> | null;
};
export {};
