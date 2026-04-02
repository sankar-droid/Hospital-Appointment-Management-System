import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type QualificationModel = runtime.Types.Result.DefaultSelection<Prisma.$QualificationPayload>;
export type AggregateQualification = {
    _count: QualificationCountAggregateOutputType | null;
    _avg: QualificationAvgAggregateOutputType | null;
    _sum: QualificationSumAggregateOutputType | null;
    _min: QualificationMinAggregateOutputType | null;
    _max: QualificationMaxAggregateOutputType | null;
};
export type QualificationAvgAggregateOutputType = {
    id: number | null;
    doctorId: number | null;
};
export type QualificationSumAggregateOutputType = {
    id: number | null;
    doctorId: number | null;
};
export type QualificationMinAggregateOutputType = {
    id: number | null;
    doctorId: number | null;
    qualificationName: string | null;
    instituteName: string | null;
    procurementYear: Date | null;
};
export type QualificationMaxAggregateOutputType = {
    id: number | null;
    doctorId: number | null;
    qualificationName: string | null;
    instituteName: string | null;
    procurementYear: Date | null;
};
export type QualificationCountAggregateOutputType = {
    id: number;
    doctorId: number;
    qualificationName: number;
    instituteName: number;
    procurementYear: number;
    _all: number;
};
export type QualificationAvgAggregateInputType = {
    id?: true;
    doctorId?: true;
};
export type QualificationSumAggregateInputType = {
    id?: true;
    doctorId?: true;
};
export type QualificationMinAggregateInputType = {
    id?: true;
    doctorId?: true;
    qualificationName?: true;
    instituteName?: true;
    procurementYear?: true;
};
export type QualificationMaxAggregateInputType = {
    id?: true;
    doctorId?: true;
    qualificationName?: true;
    instituteName?: true;
    procurementYear?: true;
};
export type QualificationCountAggregateInputType = {
    id?: true;
    doctorId?: true;
    qualificationName?: true;
    instituteName?: true;
    procurementYear?: true;
    _all?: true;
};
export type QualificationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QualificationWhereInput;
    orderBy?: Prisma.QualificationOrderByWithRelationInput | Prisma.QualificationOrderByWithRelationInput[];
    cursor?: Prisma.QualificationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | QualificationCountAggregateInputType;
    _avg?: QualificationAvgAggregateInputType;
    _sum?: QualificationSumAggregateInputType;
    _min?: QualificationMinAggregateInputType;
    _max?: QualificationMaxAggregateInputType;
};
export type GetQualificationAggregateType<T extends QualificationAggregateArgs> = {
    [P in keyof T & keyof AggregateQualification]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateQualification[P]> : Prisma.GetScalarType<T[P], AggregateQualification[P]>;
};
export type QualificationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QualificationWhereInput;
    orderBy?: Prisma.QualificationOrderByWithAggregationInput | Prisma.QualificationOrderByWithAggregationInput[];
    by: Prisma.QualificationScalarFieldEnum[] | Prisma.QualificationScalarFieldEnum;
    having?: Prisma.QualificationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: QualificationCountAggregateInputType | true;
    _avg?: QualificationAvgAggregateInputType;
    _sum?: QualificationSumAggregateInputType;
    _min?: QualificationMinAggregateInputType;
    _max?: QualificationMaxAggregateInputType;
};
export type QualificationGroupByOutputType = {
    id: number;
    doctorId: number;
    qualificationName: string;
    instituteName: string;
    procurementYear: Date | null;
    _count: QualificationCountAggregateOutputType | null;
    _avg: QualificationAvgAggregateOutputType | null;
    _sum: QualificationSumAggregateOutputType | null;
    _min: QualificationMinAggregateOutputType | null;
    _max: QualificationMaxAggregateOutputType | null;
};
type GetQualificationGroupByPayload<T extends QualificationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<QualificationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof QualificationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], QualificationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], QualificationGroupByOutputType[P]>;
}>>;
export type QualificationWhereInput = {
    AND?: Prisma.QualificationWhereInput | Prisma.QualificationWhereInput[];
    OR?: Prisma.QualificationWhereInput[];
    NOT?: Prisma.QualificationWhereInput | Prisma.QualificationWhereInput[];
    id?: Prisma.IntFilter<"Qualification"> | number;
    doctorId?: Prisma.IntFilter<"Qualification"> | number;
    qualificationName?: Prisma.StringFilter<"Qualification"> | string;
    instituteName?: Prisma.StringFilter<"Qualification"> | string;
    procurementYear?: Prisma.DateTimeNullableFilter<"Qualification"> | Date | string | null;
    doctor?: Prisma.XOR<Prisma.DoctorScalarRelationFilter, Prisma.DoctorWhereInput>;
};
export type QualificationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    qualificationName?: Prisma.SortOrder;
    instituteName?: Prisma.SortOrder;
    procurementYear?: Prisma.SortOrderInput | Prisma.SortOrder;
    doctor?: Prisma.DoctorOrderByWithRelationInput;
    _relevance?: Prisma.QualificationOrderByRelevanceInput;
};
export type QualificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.QualificationWhereInput | Prisma.QualificationWhereInput[];
    OR?: Prisma.QualificationWhereInput[];
    NOT?: Prisma.QualificationWhereInput | Prisma.QualificationWhereInput[];
    doctorId?: Prisma.IntFilter<"Qualification"> | number;
    qualificationName?: Prisma.StringFilter<"Qualification"> | string;
    instituteName?: Prisma.StringFilter<"Qualification"> | string;
    procurementYear?: Prisma.DateTimeNullableFilter<"Qualification"> | Date | string | null;
    doctor?: Prisma.XOR<Prisma.DoctorScalarRelationFilter, Prisma.DoctorWhereInput>;
}, "id">;
export type QualificationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    qualificationName?: Prisma.SortOrder;
    instituteName?: Prisma.SortOrder;
    procurementYear?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.QualificationCountOrderByAggregateInput;
    _avg?: Prisma.QualificationAvgOrderByAggregateInput;
    _max?: Prisma.QualificationMaxOrderByAggregateInput;
    _min?: Prisma.QualificationMinOrderByAggregateInput;
    _sum?: Prisma.QualificationSumOrderByAggregateInput;
};
export type QualificationScalarWhereWithAggregatesInput = {
    AND?: Prisma.QualificationScalarWhereWithAggregatesInput | Prisma.QualificationScalarWhereWithAggregatesInput[];
    OR?: Prisma.QualificationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.QualificationScalarWhereWithAggregatesInput | Prisma.QualificationScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Qualification"> | number;
    doctorId?: Prisma.IntWithAggregatesFilter<"Qualification"> | number;
    qualificationName?: Prisma.StringWithAggregatesFilter<"Qualification"> | string;
    instituteName?: Prisma.StringWithAggregatesFilter<"Qualification"> | string;
    procurementYear?: Prisma.DateTimeNullableWithAggregatesFilter<"Qualification"> | Date | string | null;
};
export type QualificationCreateInput = {
    qualificationName: string;
    instituteName: string;
    procurementYear?: Date | string | null;
    doctor: Prisma.DoctorCreateNestedOneWithoutQualificationsInput;
};
export type QualificationUncheckedCreateInput = {
    id?: number;
    doctorId: number;
    qualificationName: string;
    instituteName: string;
    procurementYear?: Date | string | null;
};
export type QualificationUpdateInput = {
    qualificationName?: Prisma.StringFieldUpdateOperationsInput | string;
    instituteName?: Prisma.StringFieldUpdateOperationsInput | string;
    procurementYear?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    doctor?: Prisma.DoctorUpdateOneRequiredWithoutQualificationsNestedInput;
};
export type QualificationUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    doctorId?: Prisma.IntFieldUpdateOperationsInput | number;
    qualificationName?: Prisma.StringFieldUpdateOperationsInput | string;
    instituteName?: Prisma.StringFieldUpdateOperationsInput | string;
    procurementYear?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type QualificationCreateManyInput = {
    id?: number;
    doctorId: number;
    qualificationName: string;
    instituteName: string;
    procurementYear?: Date | string | null;
};
export type QualificationUpdateManyMutationInput = {
    qualificationName?: Prisma.StringFieldUpdateOperationsInput | string;
    instituteName?: Prisma.StringFieldUpdateOperationsInput | string;
    procurementYear?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type QualificationUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    doctorId?: Prisma.IntFieldUpdateOperationsInput | number;
    qualificationName?: Prisma.StringFieldUpdateOperationsInput | string;
    instituteName?: Prisma.StringFieldUpdateOperationsInput | string;
    procurementYear?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type QualificationListRelationFilter = {
    every?: Prisma.QualificationWhereInput;
    some?: Prisma.QualificationWhereInput;
    none?: Prisma.QualificationWhereInput;
};
export type QualificationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type QualificationOrderByRelevanceInput = {
    fields: Prisma.QualificationOrderByRelevanceFieldEnum | Prisma.QualificationOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type QualificationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    qualificationName?: Prisma.SortOrder;
    instituteName?: Prisma.SortOrder;
    procurementYear?: Prisma.SortOrder;
};
export type QualificationAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
};
export type QualificationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    qualificationName?: Prisma.SortOrder;
    instituteName?: Prisma.SortOrder;
    procurementYear?: Prisma.SortOrder;
};
export type QualificationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    qualificationName?: Prisma.SortOrder;
    instituteName?: Prisma.SortOrder;
    procurementYear?: Prisma.SortOrder;
};
export type QualificationSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
};
export type QualificationCreateNestedManyWithoutDoctorInput = {
    create?: Prisma.XOR<Prisma.QualificationCreateWithoutDoctorInput, Prisma.QualificationUncheckedCreateWithoutDoctorInput> | Prisma.QualificationCreateWithoutDoctorInput[] | Prisma.QualificationUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: Prisma.QualificationCreateOrConnectWithoutDoctorInput | Prisma.QualificationCreateOrConnectWithoutDoctorInput[];
    createMany?: Prisma.QualificationCreateManyDoctorInputEnvelope;
    connect?: Prisma.QualificationWhereUniqueInput | Prisma.QualificationWhereUniqueInput[];
};
export type QualificationUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: Prisma.XOR<Prisma.QualificationCreateWithoutDoctorInput, Prisma.QualificationUncheckedCreateWithoutDoctorInput> | Prisma.QualificationCreateWithoutDoctorInput[] | Prisma.QualificationUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: Prisma.QualificationCreateOrConnectWithoutDoctorInput | Prisma.QualificationCreateOrConnectWithoutDoctorInput[];
    createMany?: Prisma.QualificationCreateManyDoctorInputEnvelope;
    connect?: Prisma.QualificationWhereUniqueInput | Prisma.QualificationWhereUniqueInput[];
};
export type QualificationUpdateManyWithoutDoctorNestedInput = {
    create?: Prisma.XOR<Prisma.QualificationCreateWithoutDoctorInput, Prisma.QualificationUncheckedCreateWithoutDoctorInput> | Prisma.QualificationCreateWithoutDoctorInput[] | Prisma.QualificationUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: Prisma.QualificationCreateOrConnectWithoutDoctorInput | Prisma.QualificationCreateOrConnectWithoutDoctorInput[];
    upsert?: Prisma.QualificationUpsertWithWhereUniqueWithoutDoctorInput | Prisma.QualificationUpsertWithWhereUniqueWithoutDoctorInput[];
    createMany?: Prisma.QualificationCreateManyDoctorInputEnvelope;
    set?: Prisma.QualificationWhereUniqueInput | Prisma.QualificationWhereUniqueInput[];
    disconnect?: Prisma.QualificationWhereUniqueInput | Prisma.QualificationWhereUniqueInput[];
    delete?: Prisma.QualificationWhereUniqueInput | Prisma.QualificationWhereUniqueInput[];
    connect?: Prisma.QualificationWhereUniqueInput | Prisma.QualificationWhereUniqueInput[];
    update?: Prisma.QualificationUpdateWithWhereUniqueWithoutDoctorInput | Prisma.QualificationUpdateWithWhereUniqueWithoutDoctorInput[];
    updateMany?: Prisma.QualificationUpdateManyWithWhereWithoutDoctorInput | Prisma.QualificationUpdateManyWithWhereWithoutDoctorInput[];
    deleteMany?: Prisma.QualificationScalarWhereInput | Prisma.QualificationScalarWhereInput[];
};
export type QualificationUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: Prisma.XOR<Prisma.QualificationCreateWithoutDoctorInput, Prisma.QualificationUncheckedCreateWithoutDoctorInput> | Prisma.QualificationCreateWithoutDoctorInput[] | Prisma.QualificationUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: Prisma.QualificationCreateOrConnectWithoutDoctorInput | Prisma.QualificationCreateOrConnectWithoutDoctorInput[];
    upsert?: Prisma.QualificationUpsertWithWhereUniqueWithoutDoctorInput | Prisma.QualificationUpsertWithWhereUniqueWithoutDoctorInput[];
    createMany?: Prisma.QualificationCreateManyDoctorInputEnvelope;
    set?: Prisma.QualificationWhereUniqueInput | Prisma.QualificationWhereUniqueInput[];
    disconnect?: Prisma.QualificationWhereUniqueInput | Prisma.QualificationWhereUniqueInput[];
    delete?: Prisma.QualificationWhereUniqueInput | Prisma.QualificationWhereUniqueInput[];
    connect?: Prisma.QualificationWhereUniqueInput | Prisma.QualificationWhereUniqueInput[];
    update?: Prisma.QualificationUpdateWithWhereUniqueWithoutDoctorInput | Prisma.QualificationUpdateWithWhereUniqueWithoutDoctorInput[];
    updateMany?: Prisma.QualificationUpdateManyWithWhereWithoutDoctorInput | Prisma.QualificationUpdateManyWithWhereWithoutDoctorInput[];
    deleteMany?: Prisma.QualificationScalarWhereInput | Prisma.QualificationScalarWhereInput[];
};
export type QualificationCreateWithoutDoctorInput = {
    qualificationName: string;
    instituteName: string;
    procurementYear?: Date | string | null;
};
export type QualificationUncheckedCreateWithoutDoctorInput = {
    id?: number;
    qualificationName: string;
    instituteName: string;
    procurementYear?: Date | string | null;
};
export type QualificationCreateOrConnectWithoutDoctorInput = {
    where: Prisma.QualificationWhereUniqueInput;
    create: Prisma.XOR<Prisma.QualificationCreateWithoutDoctorInput, Prisma.QualificationUncheckedCreateWithoutDoctorInput>;
};
export type QualificationCreateManyDoctorInputEnvelope = {
    data: Prisma.QualificationCreateManyDoctorInput | Prisma.QualificationCreateManyDoctorInput[];
    skipDuplicates?: boolean;
};
export type QualificationUpsertWithWhereUniqueWithoutDoctorInput = {
    where: Prisma.QualificationWhereUniqueInput;
    update: Prisma.XOR<Prisma.QualificationUpdateWithoutDoctorInput, Prisma.QualificationUncheckedUpdateWithoutDoctorInput>;
    create: Prisma.XOR<Prisma.QualificationCreateWithoutDoctorInput, Prisma.QualificationUncheckedCreateWithoutDoctorInput>;
};
export type QualificationUpdateWithWhereUniqueWithoutDoctorInput = {
    where: Prisma.QualificationWhereUniqueInput;
    data: Prisma.XOR<Prisma.QualificationUpdateWithoutDoctorInput, Prisma.QualificationUncheckedUpdateWithoutDoctorInput>;
};
export type QualificationUpdateManyWithWhereWithoutDoctorInput = {
    where: Prisma.QualificationScalarWhereInput;
    data: Prisma.XOR<Prisma.QualificationUpdateManyMutationInput, Prisma.QualificationUncheckedUpdateManyWithoutDoctorInput>;
};
export type QualificationScalarWhereInput = {
    AND?: Prisma.QualificationScalarWhereInput | Prisma.QualificationScalarWhereInput[];
    OR?: Prisma.QualificationScalarWhereInput[];
    NOT?: Prisma.QualificationScalarWhereInput | Prisma.QualificationScalarWhereInput[];
    id?: Prisma.IntFilter<"Qualification"> | number;
    doctorId?: Prisma.IntFilter<"Qualification"> | number;
    qualificationName?: Prisma.StringFilter<"Qualification"> | string;
    instituteName?: Prisma.StringFilter<"Qualification"> | string;
    procurementYear?: Prisma.DateTimeNullableFilter<"Qualification"> | Date | string | null;
};
export type QualificationCreateManyDoctorInput = {
    id?: number;
    qualificationName: string;
    instituteName: string;
    procurementYear?: Date | string | null;
};
export type QualificationUpdateWithoutDoctorInput = {
    qualificationName?: Prisma.StringFieldUpdateOperationsInput | string;
    instituteName?: Prisma.StringFieldUpdateOperationsInput | string;
    procurementYear?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type QualificationUncheckedUpdateWithoutDoctorInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    qualificationName?: Prisma.StringFieldUpdateOperationsInput | string;
    instituteName?: Prisma.StringFieldUpdateOperationsInput | string;
    procurementYear?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type QualificationUncheckedUpdateManyWithoutDoctorInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    qualificationName?: Prisma.StringFieldUpdateOperationsInput | string;
    instituteName?: Prisma.StringFieldUpdateOperationsInput | string;
    procurementYear?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type QualificationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    doctorId?: boolean;
    qualificationName?: boolean;
    instituteName?: boolean;
    procurementYear?: boolean;
    doctor?: boolean | Prisma.DoctorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["qualification"]>;
export type QualificationSelectScalar = {
    id?: boolean;
    doctorId?: boolean;
    qualificationName?: boolean;
    instituteName?: boolean;
    procurementYear?: boolean;
};
export type QualificationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "doctorId" | "qualificationName" | "instituteName" | "procurementYear", ExtArgs["result"]["qualification"]>;
export type QualificationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    doctor?: boolean | Prisma.DoctorDefaultArgs<ExtArgs>;
};
export type $QualificationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Qualification";
    objects: {
        doctor: Prisma.$DoctorPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        doctorId: number;
        qualificationName: string;
        instituteName: string;
        procurementYear: Date | null;
    }, ExtArgs["result"]["qualification"]>;
    composites: {};
};
export type QualificationGetPayload<S extends boolean | null | undefined | QualificationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$QualificationPayload, S>;
export type QualificationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<QualificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: QualificationCountAggregateInputType | true;
};
export interface QualificationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Qualification'];
        meta: {
            name: 'Qualification';
        };
    };
    findUnique<T extends QualificationFindUniqueArgs>(args: Prisma.SelectSubset<T, QualificationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__QualificationClient<runtime.Types.Result.GetResult<Prisma.$QualificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends QualificationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, QualificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__QualificationClient<runtime.Types.Result.GetResult<Prisma.$QualificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends QualificationFindFirstArgs>(args?: Prisma.SelectSubset<T, QualificationFindFirstArgs<ExtArgs>>): Prisma.Prisma__QualificationClient<runtime.Types.Result.GetResult<Prisma.$QualificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends QualificationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, QualificationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__QualificationClient<runtime.Types.Result.GetResult<Prisma.$QualificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends QualificationFindManyArgs>(args?: Prisma.SelectSubset<T, QualificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QualificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends QualificationCreateArgs>(args: Prisma.SelectSubset<T, QualificationCreateArgs<ExtArgs>>): Prisma.Prisma__QualificationClient<runtime.Types.Result.GetResult<Prisma.$QualificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends QualificationCreateManyArgs>(args?: Prisma.SelectSubset<T, QualificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends QualificationDeleteArgs>(args: Prisma.SelectSubset<T, QualificationDeleteArgs<ExtArgs>>): Prisma.Prisma__QualificationClient<runtime.Types.Result.GetResult<Prisma.$QualificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends QualificationUpdateArgs>(args: Prisma.SelectSubset<T, QualificationUpdateArgs<ExtArgs>>): Prisma.Prisma__QualificationClient<runtime.Types.Result.GetResult<Prisma.$QualificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends QualificationDeleteManyArgs>(args?: Prisma.SelectSubset<T, QualificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends QualificationUpdateManyArgs>(args: Prisma.SelectSubset<T, QualificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends QualificationUpsertArgs>(args: Prisma.SelectSubset<T, QualificationUpsertArgs<ExtArgs>>): Prisma.Prisma__QualificationClient<runtime.Types.Result.GetResult<Prisma.$QualificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends QualificationCountArgs>(args?: Prisma.Subset<T, QualificationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], QualificationCountAggregateOutputType> : number>;
    aggregate<T extends QualificationAggregateArgs>(args: Prisma.Subset<T, QualificationAggregateArgs>): Prisma.PrismaPromise<GetQualificationAggregateType<T>>;
    groupBy<T extends QualificationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: QualificationGroupByArgs['orderBy'];
    } : {
        orderBy?: QualificationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, QualificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQualificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: QualificationFieldRefs;
}
export interface Prisma__QualificationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    doctor<T extends Prisma.DoctorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DoctorDefaultArgs<ExtArgs>>): Prisma.Prisma__DoctorClient<runtime.Types.Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface QualificationFieldRefs {
    readonly id: Prisma.FieldRef<"Qualification", 'Int'>;
    readonly doctorId: Prisma.FieldRef<"Qualification", 'Int'>;
    readonly qualificationName: Prisma.FieldRef<"Qualification", 'String'>;
    readonly instituteName: Prisma.FieldRef<"Qualification", 'String'>;
    readonly procurementYear: Prisma.FieldRef<"Qualification", 'DateTime'>;
}
export type QualificationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QualificationSelect<ExtArgs> | null;
    omit?: Prisma.QualificationOmit<ExtArgs> | null;
    include?: Prisma.QualificationInclude<ExtArgs> | null;
    where: Prisma.QualificationWhereUniqueInput;
};
export type QualificationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QualificationSelect<ExtArgs> | null;
    omit?: Prisma.QualificationOmit<ExtArgs> | null;
    include?: Prisma.QualificationInclude<ExtArgs> | null;
    where: Prisma.QualificationWhereUniqueInput;
};
export type QualificationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type QualificationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type QualificationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type QualificationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QualificationSelect<ExtArgs> | null;
    omit?: Prisma.QualificationOmit<ExtArgs> | null;
    include?: Prisma.QualificationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QualificationCreateInput, Prisma.QualificationUncheckedCreateInput>;
};
export type QualificationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.QualificationCreateManyInput | Prisma.QualificationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type QualificationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QualificationSelect<ExtArgs> | null;
    omit?: Prisma.QualificationOmit<ExtArgs> | null;
    include?: Prisma.QualificationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QualificationUpdateInput, Prisma.QualificationUncheckedUpdateInput>;
    where: Prisma.QualificationWhereUniqueInput;
};
export type QualificationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.QualificationUpdateManyMutationInput, Prisma.QualificationUncheckedUpdateManyInput>;
    where?: Prisma.QualificationWhereInput;
    limit?: number;
};
export type QualificationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QualificationSelect<ExtArgs> | null;
    omit?: Prisma.QualificationOmit<ExtArgs> | null;
    include?: Prisma.QualificationInclude<ExtArgs> | null;
    where: Prisma.QualificationWhereUniqueInput;
    create: Prisma.XOR<Prisma.QualificationCreateInput, Prisma.QualificationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.QualificationUpdateInput, Prisma.QualificationUncheckedUpdateInput>;
};
export type QualificationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QualificationSelect<ExtArgs> | null;
    omit?: Prisma.QualificationOmit<ExtArgs> | null;
    include?: Prisma.QualificationInclude<ExtArgs> | null;
    where: Prisma.QualificationWhereUniqueInput;
};
export type QualificationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QualificationWhereInput;
    limit?: number;
};
export type QualificationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QualificationSelect<ExtArgs> | null;
    omit?: Prisma.QualificationOmit<ExtArgs> | null;
    include?: Prisma.QualificationInclude<ExtArgs> | null;
};
export {};
