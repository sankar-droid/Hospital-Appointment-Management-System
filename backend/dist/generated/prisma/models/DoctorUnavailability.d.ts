import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DoctorUnavailabilityModel = runtime.Types.Result.DefaultSelection<Prisma.$DoctorUnavailabilityPayload>;
export type AggregateDoctorUnavailability = {
    _count: DoctorUnavailabilityCountAggregateOutputType | null;
    _avg: DoctorUnavailabilityAvgAggregateOutputType | null;
    _sum: DoctorUnavailabilitySumAggregateOutputType | null;
    _min: DoctorUnavailabilityMinAggregateOutputType | null;
    _max: DoctorUnavailabilityMaxAggregateOutputType | null;
};
export type DoctorUnavailabilityAvgAggregateOutputType = {
    id: number | null;
    doctorId: number | null;
};
export type DoctorUnavailabilitySumAggregateOutputType = {
    id: number | null;
    doctorId: number | null;
};
export type DoctorUnavailabilityMinAggregateOutputType = {
    id: number | null;
    doctorId: number | null;
    date: Date | null;
    reason: string | null;
};
export type DoctorUnavailabilityMaxAggregateOutputType = {
    id: number | null;
    doctorId: number | null;
    date: Date | null;
    reason: string | null;
};
export type DoctorUnavailabilityCountAggregateOutputType = {
    id: number;
    doctorId: number;
    date: number;
    reason: number;
    _all: number;
};
export type DoctorUnavailabilityAvgAggregateInputType = {
    id?: true;
    doctorId?: true;
};
export type DoctorUnavailabilitySumAggregateInputType = {
    id?: true;
    doctorId?: true;
};
export type DoctorUnavailabilityMinAggregateInputType = {
    id?: true;
    doctorId?: true;
    date?: true;
    reason?: true;
};
export type DoctorUnavailabilityMaxAggregateInputType = {
    id?: true;
    doctorId?: true;
    date?: true;
    reason?: true;
};
export type DoctorUnavailabilityCountAggregateInputType = {
    id?: true;
    doctorId?: true;
    date?: true;
    reason?: true;
    _all?: true;
};
export type DoctorUnavailabilityAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DoctorUnavailabilityWhereInput;
    orderBy?: Prisma.DoctorUnavailabilityOrderByWithRelationInput | Prisma.DoctorUnavailabilityOrderByWithRelationInput[];
    cursor?: Prisma.DoctorUnavailabilityWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DoctorUnavailabilityCountAggregateInputType;
    _avg?: DoctorUnavailabilityAvgAggregateInputType;
    _sum?: DoctorUnavailabilitySumAggregateInputType;
    _min?: DoctorUnavailabilityMinAggregateInputType;
    _max?: DoctorUnavailabilityMaxAggregateInputType;
};
export type GetDoctorUnavailabilityAggregateType<T extends DoctorUnavailabilityAggregateArgs> = {
    [P in keyof T & keyof AggregateDoctorUnavailability]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDoctorUnavailability[P]> : Prisma.GetScalarType<T[P], AggregateDoctorUnavailability[P]>;
};
export type DoctorUnavailabilityGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DoctorUnavailabilityWhereInput;
    orderBy?: Prisma.DoctorUnavailabilityOrderByWithAggregationInput | Prisma.DoctorUnavailabilityOrderByWithAggregationInput[];
    by: Prisma.DoctorUnavailabilityScalarFieldEnum[] | Prisma.DoctorUnavailabilityScalarFieldEnum;
    having?: Prisma.DoctorUnavailabilityScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DoctorUnavailabilityCountAggregateInputType | true;
    _avg?: DoctorUnavailabilityAvgAggregateInputType;
    _sum?: DoctorUnavailabilitySumAggregateInputType;
    _min?: DoctorUnavailabilityMinAggregateInputType;
    _max?: DoctorUnavailabilityMaxAggregateInputType;
};
export type DoctorUnavailabilityGroupByOutputType = {
    id: number;
    doctorId: number;
    date: Date;
    reason: string | null;
    _count: DoctorUnavailabilityCountAggregateOutputType | null;
    _avg: DoctorUnavailabilityAvgAggregateOutputType | null;
    _sum: DoctorUnavailabilitySumAggregateOutputType | null;
    _min: DoctorUnavailabilityMinAggregateOutputType | null;
    _max: DoctorUnavailabilityMaxAggregateOutputType | null;
};
type GetDoctorUnavailabilityGroupByPayload<T extends DoctorUnavailabilityGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DoctorUnavailabilityGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DoctorUnavailabilityGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DoctorUnavailabilityGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DoctorUnavailabilityGroupByOutputType[P]>;
}>>;
export type DoctorUnavailabilityWhereInput = {
    AND?: Prisma.DoctorUnavailabilityWhereInput | Prisma.DoctorUnavailabilityWhereInput[];
    OR?: Prisma.DoctorUnavailabilityWhereInput[];
    NOT?: Prisma.DoctorUnavailabilityWhereInput | Prisma.DoctorUnavailabilityWhereInput[];
    id?: Prisma.IntFilter<"DoctorUnavailability"> | number;
    doctorId?: Prisma.IntFilter<"DoctorUnavailability"> | number;
    date?: Prisma.DateTimeFilter<"DoctorUnavailability"> | Date | string;
    reason?: Prisma.StringNullableFilter<"DoctorUnavailability"> | string | null;
    doctor?: Prisma.XOR<Prisma.DoctorScalarRelationFilter, Prisma.DoctorWhereInput>;
};
export type DoctorUnavailabilityOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    doctor?: Prisma.DoctorOrderByWithRelationInput;
    _relevance?: Prisma.DoctorUnavailabilityOrderByRelevanceInput;
};
export type DoctorUnavailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.DoctorUnavailabilityWhereInput | Prisma.DoctorUnavailabilityWhereInput[];
    OR?: Prisma.DoctorUnavailabilityWhereInput[];
    NOT?: Prisma.DoctorUnavailabilityWhereInput | Prisma.DoctorUnavailabilityWhereInput[];
    doctorId?: Prisma.IntFilter<"DoctorUnavailability"> | number;
    date?: Prisma.DateTimeFilter<"DoctorUnavailability"> | Date | string;
    reason?: Prisma.StringNullableFilter<"DoctorUnavailability"> | string | null;
    doctor?: Prisma.XOR<Prisma.DoctorScalarRelationFilter, Prisma.DoctorWhereInput>;
}, "id">;
export type DoctorUnavailabilityOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.DoctorUnavailabilityCountOrderByAggregateInput;
    _avg?: Prisma.DoctorUnavailabilityAvgOrderByAggregateInput;
    _max?: Prisma.DoctorUnavailabilityMaxOrderByAggregateInput;
    _min?: Prisma.DoctorUnavailabilityMinOrderByAggregateInput;
    _sum?: Prisma.DoctorUnavailabilitySumOrderByAggregateInput;
};
export type DoctorUnavailabilityScalarWhereWithAggregatesInput = {
    AND?: Prisma.DoctorUnavailabilityScalarWhereWithAggregatesInput | Prisma.DoctorUnavailabilityScalarWhereWithAggregatesInput[];
    OR?: Prisma.DoctorUnavailabilityScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DoctorUnavailabilityScalarWhereWithAggregatesInput | Prisma.DoctorUnavailabilityScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"DoctorUnavailability"> | number;
    doctorId?: Prisma.IntWithAggregatesFilter<"DoctorUnavailability"> | number;
    date?: Prisma.DateTimeWithAggregatesFilter<"DoctorUnavailability"> | Date | string;
    reason?: Prisma.StringNullableWithAggregatesFilter<"DoctorUnavailability"> | string | null;
};
export type DoctorUnavailabilityCreateInput = {
    date: Date | string;
    reason?: string | null;
    doctor: Prisma.DoctorCreateNestedOneWithoutUnavailabilityInput;
};
export type DoctorUnavailabilityUncheckedCreateInput = {
    id?: number;
    doctorId: number;
    date: Date | string;
    reason?: string | null;
};
export type DoctorUnavailabilityUpdateInput = {
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    doctor?: Prisma.DoctorUpdateOneRequiredWithoutUnavailabilityNestedInput;
};
export type DoctorUnavailabilityUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    doctorId?: Prisma.IntFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DoctorUnavailabilityCreateManyInput = {
    id?: number;
    doctorId: number;
    date: Date | string;
    reason?: string | null;
};
export type DoctorUnavailabilityUpdateManyMutationInput = {
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DoctorUnavailabilityUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    doctorId?: Prisma.IntFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DoctorUnavailabilityListRelationFilter = {
    every?: Prisma.DoctorUnavailabilityWhereInput;
    some?: Prisma.DoctorUnavailabilityWhereInput;
    none?: Prisma.DoctorUnavailabilityWhereInput;
};
export type DoctorUnavailabilityOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DoctorUnavailabilityOrderByRelevanceInput = {
    fields: Prisma.DoctorUnavailabilityOrderByRelevanceFieldEnum | Prisma.DoctorUnavailabilityOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type DoctorUnavailabilityCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
};
export type DoctorUnavailabilityAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
};
export type DoctorUnavailabilityMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
};
export type DoctorUnavailabilityMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
};
export type DoctorUnavailabilitySumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
};
export type DoctorUnavailabilityCreateNestedManyWithoutDoctorInput = {
    create?: Prisma.XOR<Prisma.DoctorUnavailabilityCreateWithoutDoctorInput, Prisma.DoctorUnavailabilityUncheckedCreateWithoutDoctorInput> | Prisma.DoctorUnavailabilityCreateWithoutDoctorInput[] | Prisma.DoctorUnavailabilityUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: Prisma.DoctorUnavailabilityCreateOrConnectWithoutDoctorInput | Prisma.DoctorUnavailabilityCreateOrConnectWithoutDoctorInput[];
    createMany?: Prisma.DoctorUnavailabilityCreateManyDoctorInputEnvelope;
    connect?: Prisma.DoctorUnavailabilityWhereUniqueInput | Prisma.DoctorUnavailabilityWhereUniqueInput[];
};
export type DoctorUnavailabilityUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: Prisma.XOR<Prisma.DoctorUnavailabilityCreateWithoutDoctorInput, Prisma.DoctorUnavailabilityUncheckedCreateWithoutDoctorInput> | Prisma.DoctorUnavailabilityCreateWithoutDoctorInput[] | Prisma.DoctorUnavailabilityUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: Prisma.DoctorUnavailabilityCreateOrConnectWithoutDoctorInput | Prisma.DoctorUnavailabilityCreateOrConnectWithoutDoctorInput[];
    createMany?: Prisma.DoctorUnavailabilityCreateManyDoctorInputEnvelope;
    connect?: Prisma.DoctorUnavailabilityWhereUniqueInput | Prisma.DoctorUnavailabilityWhereUniqueInput[];
};
export type DoctorUnavailabilityUpdateManyWithoutDoctorNestedInput = {
    create?: Prisma.XOR<Prisma.DoctorUnavailabilityCreateWithoutDoctorInput, Prisma.DoctorUnavailabilityUncheckedCreateWithoutDoctorInput> | Prisma.DoctorUnavailabilityCreateWithoutDoctorInput[] | Prisma.DoctorUnavailabilityUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: Prisma.DoctorUnavailabilityCreateOrConnectWithoutDoctorInput | Prisma.DoctorUnavailabilityCreateOrConnectWithoutDoctorInput[];
    upsert?: Prisma.DoctorUnavailabilityUpsertWithWhereUniqueWithoutDoctorInput | Prisma.DoctorUnavailabilityUpsertWithWhereUniqueWithoutDoctorInput[];
    createMany?: Prisma.DoctorUnavailabilityCreateManyDoctorInputEnvelope;
    set?: Prisma.DoctorUnavailabilityWhereUniqueInput | Prisma.DoctorUnavailabilityWhereUniqueInput[];
    disconnect?: Prisma.DoctorUnavailabilityWhereUniqueInput | Prisma.DoctorUnavailabilityWhereUniqueInput[];
    delete?: Prisma.DoctorUnavailabilityWhereUniqueInput | Prisma.DoctorUnavailabilityWhereUniqueInput[];
    connect?: Prisma.DoctorUnavailabilityWhereUniqueInput | Prisma.DoctorUnavailabilityWhereUniqueInput[];
    update?: Prisma.DoctorUnavailabilityUpdateWithWhereUniqueWithoutDoctorInput | Prisma.DoctorUnavailabilityUpdateWithWhereUniqueWithoutDoctorInput[];
    updateMany?: Prisma.DoctorUnavailabilityUpdateManyWithWhereWithoutDoctorInput | Prisma.DoctorUnavailabilityUpdateManyWithWhereWithoutDoctorInput[];
    deleteMany?: Prisma.DoctorUnavailabilityScalarWhereInput | Prisma.DoctorUnavailabilityScalarWhereInput[];
};
export type DoctorUnavailabilityUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: Prisma.XOR<Prisma.DoctorUnavailabilityCreateWithoutDoctorInput, Prisma.DoctorUnavailabilityUncheckedCreateWithoutDoctorInput> | Prisma.DoctorUnavailabilityCreateWithoutDoctorInput[] | Prisma.DoctorUnavailabilityUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: Prisma.DoctorUnavailabilityCreateOrConnectWithoutDoctorInput | Prisma.DoctorUnavailabilityCreateOrConnectWithoutDoctorInput[];
    upsert?: Prisma.DoctorUnavailabilityUpsertWithWhereUniqueWithoutDoctorInput | Prisma.DoctorUnavailabilityUpsertWithWhereUniqueWithoutDoctorInput[];
    createMany?: Prisma.DoctorUnavailabilityCreateManyDoctorInputEnvelope;
    set?: Prisma.DoctorUnavailabilityWhereUniqueInput | Prisma.DoctorUnavailabilityWhereUniqueInput[];
    disconnect?: Prisma.DoctorUnavailabilityWhereUniqueInput | Prisma.DoctorUnavailabilityWhereUniqueInput[];
    delete?: Prisma.DoctorUnavailabilityWhereUniqueInput | Prisma.DoctorUnavailabilityWhereUniqueInput[];
    connect?: Prisma.DoctorUnavailabilityWhereUniqueInput | Prisma.DoctorUnavailabilityWhereUniqueInput[];
    update?: Prisma.DoctorUnavailabilityUpdateWithWhereUniqueWithoutDoctorInput | Prisma.DoctorUnavailabilityUpdateWithWhereUniqueWithoutDoctorInput[];
    updateMany?: Prisma.DoctorUnavailabilityUpdateManyWithWhereWithoutDoctorInput | Prisma.DoctorUnavailabilityUpdateManyWithWhereWithoutDoctorInput[];
    deleteMany?: Prisma.DoctorUnavailabilityScalarWhereInput | Prisma.DoctorUnavailabilityScalarWhereInput[];
};
export type DoctorUnavailabilityCreateWithoutDoctorInput = {
    date: Date | string;
    reason?: string | null;
};
export type DoctorUnavailabilityUncheckedCreateWithoutDoctorInput = {
    id?: number;
    date: Date | string;
    reason?: string | null;
};
export type DoctorUnavailabilityCreateOrConnectWithoutDoctorInput = {
    where: Prisma.DoctorUnavailabilityWhereUniqueInput;
    create: Prisma.XOR<Prisma.DoctorUnavailabilityCreateWithoutDoctorInput, Prisma.DoctorUnavailabilityUncheckedCreateWithoutDoctorInput>;
};
export type DoctorUnavailabilityCreateManyDoctorInputEnvelope = {
    data: Prisma.DoctorUnavailabilityCreateManyDoctorInput | Prisma.DoctorUnavailabilityCreateManyDoctorInput[];
    skipDuplicates?: boolean;
};
export type DoctorUnavailabilityUpsertWithWhereUniqueWithoutDoctorInput = {
    where: Prisma.DoctorUnavailabilityWhereUniqueInput;
    update: Prisma.XOR<Prisma.DoctorUnavailabilityUpdateWithoutDoctorInput, Prisma.DoctorUnavailabilityUncheckedUpdateWithoutDoctorInput>;
    create: Prisma.XOR<Prisma.DoctorUnavailabilityCreateWithoutDoctorInput, Prisma.DoctorUnavailabilityUncheckedCreateWithoutDoctorInput>;
};
export type DoctorUnavailabilityUpdateWithWhereUniqueWithoutDoctorInput = {
    where: Prisma.DoctorUnavailabilityWhereUniqueInput;
    data: Prisma.XOR<Prisma.DoctorUnavailabilityUpdateWithoutDoctorInput, Prisma.DoctorUnavailabilityUncheckedUpdateWithoutDoctorInput>;
};
export type DoctorUnavailabilityUpdateManyWithWhereWithoutDoctorInput = {
    where: Prisma.DoctorUnavailabilityScalarWhereInput;
    data: Prisma.XOR<Prisma.DoctorUnavailabilityUpdateManyMutationInput, Prisma.DoctorUnavailabilityUncheckedUpdateManyWithoutDoctorInput>;
};
export type DoctorUnavailabilityScalarWhereInput = {
    AND?: Prisma.DoctorUnavailabilityScalarWhereInput | Prisma.DoctorUnavailabilityScalarWhereInput[];
    OR?: Prisma.DoctorUnavailabilityScalarWhereInput[];
    NOT?: Prisma.DoctorUnavailabilityScalarWhereInput | Prisma.DoctorUnavailabilityScalarWhereInput[];
    id?: Prisma.IntFilter<"DoctorUnavailability"> | number;
    doctorId?: Prisma.IntFilter<"DoctorUnavailability"> | number;
    date?: Prisma.DateTimeFilter<"DoctorUnavailability"> | Date | string;
    reason?: Prisma.StringNullableFilter<"DoctorUnavailability"> | string | null;
};
export type DoctorUnavailabilityCreateManyDoctorInput = {
    id?: number;
    date: Date | string;
    reason?: string | null;
};
export type DoctorUnavailabilityUpdateWithoutDoctorInput = {
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DoctorUnavailabilityUncheckedUpdateWithoutDoctorInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DoctorUnavailabilityUncheckedUpdateManyWithoutDoctorInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DoctorUnavailabilitySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    doctorId?: boolean;
    date?: boolean;
    reason?: boolean;
    doctor?: boolean | Prisma.DoctorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["doctorUnavailability"]>;
export type DoctorUnavailabilitySelectScalar = {
    id?: boolean;
    doctorId?: boolean;
    date?: boolean;
    reason?: boolean;
};
export type DoctorUnavailabilityOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "doctorId" | "date" | "reason", ExtArgs["result"]["doctorUnavailability"]>;
export type DoctorUnavailabilityInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    doctor?: boolean | Prisma.DoctorDefaultArgs<ExtArgs>;
};
export type $DoctorUnavailabilityPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DoctorUnavailability";
    objects: {
        doctor: Prisma.$DoctorPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        doctorId: number;
        date: Date;
        reason: string | null;
    }, ExtArgs["result"]["doctorUnavailability"]>;
    composites: {};
};
export type DoctorUnavailabilityGetPayload<S extends boolean | null | undefined | DoctorUnavailabilityDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DoctorUnavailabilityPayload, S>;
export type DoctorUnavailabilityCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DoctorUnavailabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DoctorUnavailabilityCountAggregateInputType | true;
};
export interface DoctorUnavailabilityDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DoctorUnavailability'];
        meta: {
            name: 'DoctorUnavailability';
        };
    };
    findUnique<T extends DoctorUnavailabilityFindUniqueArgs>(args: Prisma.SelectSubset<T, DoctorUnavailabilityFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DoctorUnavailabilityClient<runtime.Types.Result.GetResult<Prisma.$DoctorUnavailabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DoctorUnavailabilityFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DoctorUnavailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DoctorUnavailabilityClient<runtime.Types.Result.GetResult<Prisma.$DoctorUnavailabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DoctorUnavailabilityFindFirstArgs>(args?: Prisma.SelectSubset<T, DoctorUnavailabilityFindFirstArgs<ExtArgs>>): Prisma.Prisma__DoctorUnavailabilityClient<runtime.Types.Result.GetResult<Prisma.$DoctorUnavailabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DoctorUnavailabilityFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DoctorUnavailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DoctorUnavailabilityClient<runtime.Types.Result.GetResult<Prisma.$DoctorUnavailabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DoctorUnavailabilityFindManyArgs>(args?: Prisma.SelectSubset<T, DoctorUnavailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DoctorUnavailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DoctorUnavailabilityCreateArgs>(args: Prisma.SelectSubset<T, DoctorUnavailabilityCreateArgs<ExtArgs>>): Prisma.Prisma__DoctorUnavailabilityClient<runtime.Types.Result.GetResult<Prisma.$DoctorUnavailabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DoctorUnavailabilityCreateManyArgs>(args?: Prisma.SelectSubset<T, DoctorUnavailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends DoctorUnavailabilityDeleteArgs>(args: Prisma.SelectSubset<T, DoctorUnavailabilityDeleteArgs<ExtArgs>>): Prisma.Prisma__DoctorUnavailabilityClient<runtime.Types.Result.GetResult<Prisma.$DoctorUnavailabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DoctorUnavailabilityUpdateArgs>(args: Prisma.SelectSubset<T, DoctorUnavailabilityUpdateArgs<ExtArgs>>): Prisma.Prisma__DoctorUnavailabilityClient<runtime.Types.Result.GetResult<Prisma.$DoctorUnavailabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DoctorUnavailabilityDeleteManyArgs>(args?: Prisma.SelectSubset<T, DoctorUnavailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DoctorUnavailabilityUpdateManyArgs>(args: Prisma.SelectSubset<T, DoctorUnavailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends DoctorUnavailabilityUpsertArgs>(args: Prisma.SelectSubset<T, DoctorUnavailabilityUpsertArgs<ExtArgs>>): Prisma.Prisma__DoctorUnavailabilityClient<runtime.Types.Result.GetResult<Prisma.$DoctorUnavailabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DoctorUnavailabilityCountArgs>(args?: Prisma.Subset<T, DoctorUnavailabilityCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DoctorUnavailabilityCountAggregateOutputType> : number>;
    aggregate<T extends DoctorUnavailabilityAggregateArgs>(args: Prisma.Subset<T, DoctorUnavailabilityAggregateArgs>): Prisma.PrismaPromise<GetDoctorUnavailabilityAggregateType<T>>;
    groupBy<T extends DoctorUnavailabilityGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DoctorUnavailabilityGroupByArgs['orderBy'];
    } : {
        orderBy?: DoctorUnavailabilityGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DoctorUnavailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorUnavailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DoctorUnavailabilityFieldRefs;
}
export interface Prisma__DoctorUnavailabilityClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    doctor<T extends Prisma.DoctorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DoctorDefaultArgs<ExtArgs>>): Prisma.Prisma__DoctorClient<runtime.Types.Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DoctorUnavailabilityFieldRefs {
    readonly id: Prisma.FieldRef<"DoctorUnavailability", 'Int'>;
    readonly doctorId: Prisma.FieldRef<"DoctorUnavailability", 'Int'>;
    readonly date: Prisma.FieldRef<"DoctorUnavailability", 'DateTime'>;
    readonly reason: Prisma.FieldRef<"DoctorUnavailability", 'String'>;
}
export type DoctorUnavailabilityFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DoctorUnavailabilitySelect<ExtArgs> | null;
    omit?: Prisma.DoctorUnavailabilityOmit<ExtArgs> | null;
    include?: Prisma.DoctorUnavailabilityInclude<ExtArgs> | null;
    where: Prisma.DoctorUnavailabilityWhereUniqueInput;
};
export type DoctorUnavailabilityFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DoctorUnavailabilitySelect<ExtArgs> | null;
    omit?: Prisma.DoctorUnavailabilityOmit<ExtArgs> | null;
    include?: Prisma.DoctorUnavailabilityInclude<ExtArgs> | null;
    where: Prisma.DoctorUnavailabilityWhereUniqueInput;
};
export type DoctorUnavailabilityFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DoctorUnavailabilityFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DoctorUnavailabilityFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DoctorUnavailabilityCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DoctorUnavailabilitySelect<ExtArgs> | null;
    omit?: Prisma.DoctorUnavailabilityOmit<ExtArgs> | null;
    include?: Prisma.DoctorUnavailabilityInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DoctorUnavailabilityCreateInput, Prisma.DoctorUnavailabilityUncheckedCreateInput>;
};
export type DoctorUnavailabilityCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DoctorUnavailabilityCreateManyInput | Prisma.DoctorUnavailabilityCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DoctorUnavailabilityUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DoctorUnavailabilitySelect<ExtArgs> | null;
    omit?: Prisma.DoctorUnavailabilityOmit<ExtArgs> | null;
    include?: Prisma.DoctorUnavailabilityInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DoctorUnavailabilityUpdateInput, Prisma.DoctorUnavailabilityUncheckedUpdateInput>;
    where: Prisma.DoctorUnavailabilityWhereUniqueInput;
};
export type DoctorUnavailabilityUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DoctorUnavailabilityUpdateManyMutationInput, Prisma.DoctorUnavailabilityUncheckedUpdateManyInput>;
    where?: Prisma.DoctorUnavailabilityWhereInput;
    limit?: number;
};
export type DoctorUnavailabilityUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DoctorUnavailabilitySelect<ExtArgs> | null;
    omit?: Prisma.DoctorUnavailabilityOmit<ExtArgs> | null;
    include?: Prisma.DoctorUnavailabilityInclude<ExtArgs> | null;
    where: Prisma.DoctorUnavailabilityWhereUniqueInput;
    create: Prisma.XOR<Prisma.DoctorUnavailabilityCreateInput, Prisma.DoctorUnavailabilityUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DoctorUnavailabilityUpdateInput, Prisma.DoctorUnavailabilityUncheckedUpdateInput>;
};
export type DoctorUnavailabilityDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DoctorUnavailabilitySelect<ExtArgs> | null;
    omit?: Prisma.DoctorUnavailabilityOmit<ExtArgs> | null;
    include?: Prisma.DoctorUnavailabilityInclude<ExtArgs> | null;
    where: Prisma.DoctorUnavailabilityWhereUniqueInput;
};
export type DoctorUnavailabilityDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DoctorUnavailabilityWhereInput;
    limit?: number;
};
export type DoctorUnavailabilityDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DoctorUnavailabilitySelect<ExtArgs> | null;
    omit?: Prisma.DoctorUnavailabilityOmit<ExtArgs> | null;
    include?: Prisma.DoctorUnavailabilityInclude<ExtArgs> | null;
};
export {};
