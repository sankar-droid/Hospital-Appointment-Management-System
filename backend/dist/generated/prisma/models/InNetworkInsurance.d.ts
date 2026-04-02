import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type InNetworkInsuranceModel = runtime.Types.Result.DefaultSelection<Prisma.$InNetworkInsurancePayload>;
export type AggregateInNetworkInsurance = {
    _count: InNetworkInsuranceCountAggregateOutputType | null;
    _avg: InNetworkInsuranceAvgAggregateOutputType | null;
    _sum: InNetworkInsuranceSumAggregateOutputType | null;
    _min: InNetworkInsuranceMinAggregateOutputType | null;
    _max: InNetworkInsuranceMaxAggregateOutputType | null;
};
export type InNetworkInsuranceAvgAggregateOutputType = {
    id: number | null;
    officeId: number | null;
};
export type InNetworkInsuranceSumAggregateOutputType = {
    id: number | null;
    officeId: number | null;
};
export type InNetworkInsuranceMinAggregateOutputType = {
    id: number | null;
    officeId: number | null;
    insuranceName: string | null;
};
export type InNetworkInsuranceMaxAggregateOutputType = {
    id: number | null;
    officeId: number | null;
    insuranceName: string | null;
};
export type InNetworkInsuranceCountAggregateOutputType = {
    id: number;
    officeId: number;
    insuranceName: number;
    _all: number;
};
export type InNetworkInsuranceAvgAggregateInputType = {
    id?: true;
    officeId?: true;
};
export type InNetworkInsuranceSumAggregateInputType = {
    id?: true;
    officeId?: true;
};
export type InNetworkInsuranceMinAggregateInputType = {
    id?: true;
    officeId?: true;
    insuranceName?: true;
};
export type InNetworkInsuranceMaxAggregateInputType = {
    id?: true;
    officeId?: true;
    insuranceName?: true;
};
export type InNetworkInsuranceCountAggregateInputType = {
    id?: true;
    officeId?: true;
    insuranceName?: true;
    _all?: true;
};
export type InNetworkInsuranceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InNetworkInsuranceWhereInput;
    orderBy?: Prisma.InNetworkInsuranceOrderByWithRelationInput | Prisma.InNetworkInsuranceOrderByWithRelationInput[];
    cursor?: Prisma.InNetworkInsuranceWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InNetworkInsuranceCountAggregateInputType;
    _avg?: InNetworkInsuranceAvgAggregateInputType;
    _sum?: InNetworkInsuranceSumAggregateInputType;
    _min?: InNetworkInsuranceMinAggregateInputType;
    _max?: InNetworkInsuranceMaxAggregateInputType;
};
export type GetInNetworkInsuranceAggregateType<T extends InNetworkInsuranceAggregateArgs> = {
    [P in keyof T & keyof AggregateInNetworkInsurance]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInNetworkInsurance[P]> : Prisma.GetScalarType<T[P], AggregateInNetworkInsurance[P]>;
};
export type InNetworkInsuranceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InNetworkInsuranceWhereInput;
    orderBy?: Prisma.InNetworkInsuranceOrderByWithAggregationInput | Prisma.InNetworkInsuranceOrderByWithAggregationInput[];
    by: Prisma.InNetworkInsuranceScalarFieldEnum[] | Prisma.InNetworkInsuranceScalarFieldEnum;
    having?: Prisma.InNetworkInsuranceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InNetworkInsuranceCountAggregateInputType | true;
    _avg?: InNetworkInsuranceAvgAggregateInputType;
    _sum?: InNetworkInsuranceSumAggregateInputType;
    _min?: InNetworkInsuranceMinAggregateInputType;
    _max?: InNetworkInsuranceMaxAggregateInputType;
};
export type InNetworkInsuranceGroupByOutputType = {
    id: number;
    officeId: number;
    insuranceName: string;
    _count: InNetworkInsuranceCountAggregateOutputType | null;
    _avg: InNetworkInsuranceAvgAggregateOutputType | null;
    _sum: InNetworkInsuranceSumAggregateOutputType | null;
    _min: InNetworkInsuranceMinAggregateOutputType | null;
    _max: InNetworkInsuranceMaxAggregateOutputType | null;
};
type GetInNetworkInsuranceGroupByPayload<T extends InNetworkInsuranceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InNetworkInsuranceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InNetworkInsuranceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InNetworkInsuranceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InNetworkInsuranceGroupByOutputType[P]>;
}>>;
export type InNetworkInsuranceWhereInput = {
    AND?: Prisma.InNetworkInsuranceWhereInput | Prisma.InNetworkInsuranceWhereInput[];
    OR?: Prisma.InNetworkInsuranceWhereInput[];
    NOT?: Prisma.InNetworkInsuranceWhereInput | Prisma.InNetworkInsuranceWhereInput[];
    id?: Prisma.IntFilter<"InNetworkInsurance"> | number;
    officeId?: Prisma.IntFilter<"InNetworkInsurance"> | number;
    insuranceName?: Prisma.StringFilter<"InNetworkInsurance"> | string;
    office?: Prisma.XOR<Prisma.OfficeScalarRelationFilter, Prisma.OfficeWhereInput>;
};
export type InNetworkInsuranceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    officeId?: Prisma.SortOrder;
    insuranceName?: Prisma.SortOrder;
    office?: Prisma.OfficeOrderByWithRelationInput;
    _relevance?: Prisma.InNetworkInsuranceOrderByRelevanceInput;
};
export type InNetworkInsuranceWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.InNetworkInsuranceWhereInput | Prisma.InNetworkInsuranceWhereInput[];
    OR?: Prisma.InNetworkInsuranceWhereInput[];
    NOT?: Prisma.InNetworkInsuranceWhereInput | Prisma.InNetworkInsuranceWhereInput[];
    officeId?: Prisma.IntFilter<"InNetworkInsurance"> | number;
    insuranceName?: Prisma.StringFilter<"InNetworkInsurance"> | string;
    office?: Prisma.XOR<Prisma.OfficeScalarRelationFilter, Prisma.OfficeWhereInput>;
}, "id">;
export type InNetworkInsuranceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    officeId?: Prisma.SortOrder;
    insuranceName?: Prisma.SortOrder;
    _count?: Prisma.InNetworkInsuranceCountOrderByAggregateInput;
    _avg?: Prisma.InNetworkInsuranceAvgOrderByAggregateInput;
    _max?: Prisma.InNetworkInsuranceMaxOrderByAggregateInput;
    _min?: Prisma.InNetworkInsuranceMinOrderByAggregateInput;
    _sum?: Prisma.InNetworkInsuranceSumOrderByAggregateInput;
};
export type InNetworkInsuranceScalarWhereWithAggregatesInput = {
    AND?: Prisma.InNetworkInsuranceScalarWhereWithAggregatesInput | Prisma.InNetworkInsuranceScalarWhereWithAggregatesInput[];
    OR?: Prisma.InNetworkInsuranceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InNetworkInsuranceScalarWhereWithAggregatesInput | Prisma.InNetworkInsuranceScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"InNetworkInsurance"> | number;
    officeId?: Prisma.IntWithAggregatesFilter<"InNetworkInsurance"> | number;
    insuranceName?: Prisma.StringWithAggregatesFilter<"InNetworkInsurance"> | string;
};
export type InNetworkInsuranceCreateInput = {
    insuranceName: string;
    office: Prisma.OfficeCreateNestedOneWithoutInsurancesInput;
};
export type InNetworkInsuranceUncheckedCreateInput = {
    id?: number;
    officeId: number;
    insuranceName: string;
};
export type InNetworkInsuranceUpdateInput = {
    insuranceName?: Prisma.StringFieldUpdateOperationsInput | string;
    office?: Prisma.OfficeUpdateOneRequiredWithoutInsurancesNestedInput;
};
export type InNetworkInsuranceUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    officeId?: Prisma.IntFieldUpdateOperationsInput | number;
    insuranceName?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type InNetworkInsuranceCreateManyInput = {
    id?: number;
    officeId: number;
    insuranceName: string;
};
export type InNetworkInsuranceUpdateManyMutationInput = {
    insuranceName?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type InNetworkInsuranceUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    officeId?: Prisma.IntFieldUpdateOperationsInput | number;
    insuranceName?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type InNetworkInsuranceListRelationFilter = {
    every?: Prisma.InNetworkInsuranceWhereInput;
    some?: Prisma.InNetworkInsuranceWhereInput;
    none?: Prisma.InNetworkInsuranceWhereInput;
};
export type InNetworkInsuranceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InNetworkInsuranceOrderByRelevanceInput = {
    fields: Prisma.InNetworkInsuranceOrderByRelevanceFieldEnum | Prisma.InNetworkInsuranceOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type InNetworkInsuranceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    officeId?: Prisma.SortOrder;
    insuranceName?: Prisma.SortOrder;
};
export type InNetworkInsuranceAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    officeId?: Prisma.SortOrder;
};
export type InNetworkInsuranceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    officeId?: Prisma.SortOrder;
    insuranceName?: Prisma.SortOrder;
};
export type InNetworkInsuranceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    officeId?: Prisma.SortOrder;
    insuranceName?: Prisma.SortOrder;
};
export type InNetworkInsuranceSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    officeId?: Prisma.SortOrder;
};
export type InNetworkInsuranceCreateNestedManyWithoutOfficeInput = {
    create?: Prisma.XOR<Prisma.InNetworkInsuranceCreateWithoutOfficeInput, Prisma.InNetworkInsuranceUncheckedCreateWithoutOfficeInput> | Prisma.InNetworkInsuranceCreateWithoutOfficeInput[] | Prisma.InNetworkInsuranceUncheckedCreateWithoutOfficeInput[];
    connectOrCreate?: Prisma.InNetworkInsuranceCreateOrConnectWithoutOfficeInput | Prisma.InNetworkInsuranceCreateOrConnectWithoutOfficeInput[];
    createMany?: Prisma.InNetworkInsuranceCreateManyOfficeInputEnvelope;
    connect?: Prisma.InNetworkInsuranceWhereUniqueInput | Prisma.InNetworkInsuranceWhereUniqueInput[];
};
export type InNetworkInsuranceUncheckedCreateNestedManyWithoutOfficeInput = {
    create?: Prisma.XOR<Prisma.InNetworkInsuranceCreateWithoutOfficeInput, Prisma.InNetworkInsuranceUncheckedCreateWithoutOfficeInput> | Prisma.InNetworkInsuranceCreateWithoutOfficeInput[] | Prisma.InNetworkInsuranceUncheckedCreateWithoutOfficeInput[];
    connectOrCreate?: Prisma.InNetworkInsuranceCreateOrConnectWithoutOfficeInput | Prisma.InNetworkInsuranceCreateOrConnectWithoutOfficeInput[];
    createMany?: Prisma.InNetworkInsuranceCreateManyOfficeInputEnvelope;
    connect?: Prisma.InNetworkInsuranceWhereUniqueInput | Prisma.InNetworkInsuranceWhereUniqueInput[];
};
export type InNetworkInsuranceUpdateManyWithoutOfficeNestedInput = {
    create?: Prisma.XOR<Prisma.InNetworkInsuranceCreateWithoutOfficeInput, Prisma.InNetworkInsuranceUncheckedCreateWithoutOfficeInput> | Prisma.InNetworkInsuranceCreateWithoutOfficeInput[] | Prisma.InNetworkInsuranceUncheckedCreateWithoutOfficeInput[];
    connectOrCreate?: Prisma.InNetworkInsuranceCreateOrConnectWithoutOfficeInput | Prisma.InNetworkInsuranceCreateOrConnectWithoutOfficeInput[];
    upsert?: Prisma.InNetworkInsuranceUpsertWithWhereUniqueWithoutOfficeInput | Prisma.InNetworkInsuranceUpsertWithWhereUniqueWithoutOfficeInput[];
    createMany?: Prisma.InNetworkInsuranceCreateManyOfficeInputEnvelope;
    set?: Prisma.InNetworkInsuranceWhereUniqueInput | Prisma.InNetworkInsuranceWhereUniqueInput[];
    disconnect?: Prisma.InNetworkInsuranceWhereUniqueInput | Prisma.InNetworkInsuranceWhereUniqueInput[];
    delete?: Prisma.InNetworkInsuranceWhereUniqueInput | Prisma.InNetworkInsuranceWhereUniqueInput[];
    connect?: Prisma.InNetworkInsuranceWhereUniqueInput | Prisma.InNetworkInsuranceWhereUniqueInput[];
    update?: Prisma.InNetworkInsuranceUpdateWithWhereUniqueWithoutOfficeInput | Prisma.InNetworkInsuranceUpdateWithWhereUniqueWithoutOfficeInput[];
    updateMany?: Prisma.InNetworkInsuranceUpdateManyWithWhereWithoutOfficeInput | Prisma.InNetworkInsuranceUpdateManyWithWhereWithoutOfficeInput[];
    deleteMany?: Prisma.InNetworkInsuranceScalarWhereInput | Prisma.InNetworkInsuranceScalarWhereInput[];
};
export type InNetworkInsuranceUncheckedUpdateManyWithoutOfficeNestedInput = {
    create?: Prisma.XOR<Prisma.InNetworkInsuranceCreateWithoutOfficeInput, Prisma.InNetworkInsuranceUncheckedCreateWithoutOfficeInput> | Prisma.InNetworkInsuranceCreateWithoutOfficeInput[] | Prisma.InNetworkInsuranceUncheckedCreateWithoutOfficeInput[];
    connectOrCreate?: Prisma.InNetworkInsuranceCreateOrConnectWithoutOfficeInput | Prisma.InNetworkInsuranceCreateOrConnectWithoutOfficeInput[];
    upsert?: Prisma.InNetworkInsuranceUpsertWithWhereUniqueWithoutOfficeInput | Prisma.InNetworkInsuranceUpsertWithWhereUniqueWithoutOfficeInput[];
    createMany?: Prisma.InNetworkInsuranceCreateManyOfficeInputEnvelope;
    set?: Prisma.InNetworkInsuranceWhereUniqueInput | Prisma.InNetworkInsuranceWhereUniqueInput[];
    disconnect?: Prisma.InNetworkInsuranceWhereUniqueInput | Prisma.InNetworkInsuranceWhereUniqueInput[];
    delete?: Prisma.InNetworkInsuranceWhereUniqueInput | Prisma.InNetworkInsuranceWhereUniqueInput[];
    connect?: Prisma.InNetworkInsuranceWhereUniqueInput | Prisma.InNetworkInsuranceWhereUniqueInput[];
    update?: Prisma.InNetworkInsuranceUpdateWithWhereUniqueWithoutOfficeInput | Prisma.InNetworkInsuranceUpdateWithWhereUniqueWithoutOfficeInput[];
    updateMany?: Prisma.InNetworkInsuranceUpdateManyWithWhereWithoutOfficeInput | Prisma.InNetworkInsuranceUpdateManyWithWhereWithoutOfficeInput[];
    deleteMany?: Prisma.InNetworkInsuranceScalarWhereInput | Prisma.InNetworkInsuranceScalarWhereInput[];
};
export type InNetworkInsuranceCreateWithoutOfficeInput = {
    insuranceName: string;
};
export type InNetworkInsuranceUncheckedCreateWithoutOfficeInput = {
    id?: number;
    insuranceName: string;
};
export type InNetworkInsuranceCreateOrConnectWithoutOfficeInput = {
    where: Prisma.InNetworkInsuranceWhereUniqueInput;
    create: Prisma.XOR<Prisma.InNetworkInsuranceCreateWithoutOfficeInput, Prisma.InNetworkInsuranceUncheckedCreateWithoutOfficeInput>;
};
export type InNetworkInsuranceCreateManyOfficeInputEnvelope = {
    data: Prisma.InNetworkInsuranceCreateManyOfficeInput | Prisma.InNetworkInsuranceCreateManyOfficeInput[];
    skipDuplicates?: boolean;
};
export type InNetworkInsuranceUpsertWithWhereUniqueWithoutOfficeInput = {
    where: Prisma.InNetworkInsuranceWhereUniqueInput;
    update: Prisma.XOR<Prisma.InNetworkInsuranceUpdateWithoutOfficeInput, Prisma.InNetworkInsuranceUncheckedUpdateWithoutOfficeInput>;
    create: Prisma.XOR<Prisma.InNetworkInsuranceCreateWithoutOfficeInput, Prisma.InNetworkInsuranceUncheckedCreateWithoutOfficeInput>;
};
export type InNetworkInsuranceUpdateWithWhereUniqueWithoutOfficeInput = {
    where: Prisma.InNetworkInsuranceWhereUniqueInput;
    data: Prisma.XOR<Prisma.InNetworkInsuranceUpdateWithoutOfficeInput, Prisma.InNetworkInsuranceUncheckedUpdateWithoutOfficeInput>;
};
export type InNetworkInsuranceUpdateManyWithWhereWithoutOfficeInput = {
    where: Prisma.InNetworkInsuranceScalarWhereInput;
    data: Prisma.XOR<Prisma.InNetworkInsuranceUpdateManyMutationInput, Prisma.InNetworkInsuranceUncheckedUpdateManyWithoutOfficeInput>;
};
export type InNetworkInsuranceScalarWhereInput = {
    AND?: Prisma.InNetworkInsuranceScalarWhereInput | Prisma.InNetworkInsuranceScalarWhereInput[];
    OR?: Prisma.InNetworkInsuranceScalarWhereInput[];
    NOT?: Prisma.InNetworkInsuranceScalarWhereInput | Prisma.InNetworkInsuranceScalarWhereInput[];
    id?: Prisma.IntFilter<"InNetworkInsurance"> | number;
    officeId?: Prisma.IntFilter<"InNetworkInsurance"> | number;
    insuranceName?: Prisma.StringFilter<"InNetworkInsurance"> | string;
};
export type InNetworkInsuranceCreateManyOfficeInput = {
    id?: number;
    insuranceName: string;
};
export type InNetworkInsuranceUpdateWithoutOfficeInput = {
    insuranceName?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type InNetworkInsuranceUncheckedUpdateWithoutOfficeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    insuranceName?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type InNetworkInsuranceUncheckedUpdateManyWithoutOfficeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    insuranceName?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type InNetworkInsuranceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    officeId?: boolean;
    insuranceName?: boolean;
    office?: boolean | Prisma.OfficeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["inNetworkInsurance"]>;
export type InNetworkInsuranceSelectScalar = {
    id?: boolean;
    officeId?: boolean;
    insuranceName?: boolean;
};
export type InNetworkInsuranceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "officeId" | "insuranceName", ExtArgs["result"]["inNetworkInsurance"]>;
export type InNetworkInsuranceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    office?: boolean | Prisma.OfficeDefaultArgs<ExtArgs>;
};
export type $InNetworkInsurancePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "InNetworkInsurance";
    objects: {
        office: Prisma.$OfficePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        officeId: number;
        insuranceName: string;
    }, ExtArgs["result"]["inNetworkInsurance"]>;
    composites: {};
};
export type InNetworkInsuranceGetPayload<S extends boolean | null | undefined | InNetworkInsuranceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InNetworkInsurancePayload, S>;
export type InNetworkInsuranceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InNetworkInsuranceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InNetworkInsuranceCountAggregateInputType | true;
};
export interface InNetworkInsuranceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['InNetworkInsurance'];
        meta: {
            name: 'InNetworkInsurance';
        };
    };
    findUnique<T extends InNetworkInsuranceFindUniqueArgs>(args: Prisma.SelectSubset<T, InNetworkInsuranceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InNetworkInsuranceClient<runtime.Types.Result.GetResult<Prisma.$InNetworkInsurancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InNetworkInsuranceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InNetworkInsuranceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InNetworkInsuranceClient<runtime.Types.Result.GetResult<Prisma.$InNetworkInsurancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InNetworkInsuranceFindFirstArgs>(args?: Prisma.SelectSubset<T, InNetworkInsuranceFindFirstArgs<ExtArgs>>): Prisma.Prisma__InNetworkInsuranceClient<runtime.Types.Result.GetResult<Prisma.$InNetworkInsurancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InNetworkInsuranceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InNetworkInsuranceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InNetworkInsuranceClient<runtime.Types.Result.GetResult<Prisma.$InNetworkInsurancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InNetworkInsuranceFindManyArgs>(args?: Prisma.SelectSubset<T, InNetworkInsuranceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InNetworkInsurancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InNetworkInsuranceCreateArgs>(args: Prisma.SelectSubset<T, InNetworkInsuranceCreateArgs<ExtArgs>>): Prisma.Prisma__InNetworkInsuranceClient<runtime.Types.Result.GetResult<Prisma.$InNetworkInsurancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InNetworkInsuranceCreateManyArgs>(args?: Prisma.SelectSubset<T, InNetworkInsuranceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends InNetworkInsuranceDeleteArgs>(args: Prisma.SelectSubset<T, InNetworkInsuranceDeleteArgs<ExtArgs>>): Prisma.Prisma__InNetworkInsuranceClient<runtime.Types.Result.GetResult<Prisma.$InNetworkInsurancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InNetworkInsuranceUpdateArgs>(args: Prisma.SelectSubset<T, InNetworkInsuranceUpdateArgs<ExtArgs>>): Prisma.Prisma__InNetworkInsuranceClient<runtime.Types.Result.GetResult<Prisma.$InNetworkInsurancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InNetworkInsuranceDeleteManyArgs>(args?: Prisma.SelectSubset<T, InNetworkInsuranceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InNetworkInsuranceUpdateManyArgs>(args: Prisma.SelectSubset<T, InNetworkInsuranceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends InNetworkInsuranceUpsertArgs>(args: Prisma.SelectSubset<T, InNetworkInsuranceUpsertArgs<ExtArgs>>): Prisma.Prisma__InNetworkInsuranceClient<runtime.Types.Result.GetResult<Prisma.$InNetworkInsurancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InNetworkInsuranceCountArgs>(args?: Prisma.Subset<T, InNetworkInsuranceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InNetworkInsuranceCountAggregateOutputType> : number>;
    aggregate<T extends InNetworkInsuranceAggregateArgs>(args: Prisma.Subset<T, InNetworkInsuranceAggregateArgs>): Prisma.PrismaPromise<GetInNetworkInsuranceAggregateType<T>>;
    groupBy<T extends InNetworkInsuranceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InNetworkInsuranceGroupByArgs['orderBy'];
    } : {
        orderBy?: InNetworkInsuranceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InNetworkInsuranceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInNetworkInsuranceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InNetworkInsuranceFieldRefs;
}
export interface Prisma__InNetworkInsuranceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    office<T extends Prisma.OfficeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OfficeDefaultArgs<ExtArgs>>): Prisma.Prisma__OfficeClient<runtime.Types.Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InNetworkInsuranceFieldRefs {
    readonly id: Prisma.FieldRef<"InNetworkInsurance", 'Int'>;
    readonly officeId: Prisma.FieldRef<"InNetworkInsurance", 'Int'>;
    readonly insuranceName: Prisma.FieldRef<"InNetworkInsurance", 'String'>;
}
export type InNetworkInsuranceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InNetworkInsuranceSelect<ExtArgs> | null;
    omit?: Prisma.InNetworkInsuranceOmit<ExtArgs> | null;
    include?: Prisma.InNetworkInsuranceInclude<ExtArgs> | null;
    where: Prisma.InNetworkInsuranceWhereUniqueInput;
};
export type InNetworkInsuranceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InNetworkInsuranceSelect<ExtArgs> | null;
    omit?: Prisma.InNetworkInsuranceOmit<ExtArgs> | null;
    include?: Prisma.InNetworkInsuranceInclude<ExtArgs> | null;
    where: Prisma.InNetworkInsuranceWhereUniqueInput;
};
export type InNetworkInsuranceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InNetworkInsuranceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InNetworkInsuranceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InNetworkInsuranceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InNetworkInsuranceSelect<ExtArgs> | null;
    omit?: Prisma.InNetworkInsuranceOmit<ExtArgs> | null;
    include?: Prisma.InNetworkInsuranceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InNetworkInsuranceCreateInput, Prisma.InNetworkInsuranceUncheckedCreateInput>;
};
export type InNetworkInsuranceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InNetworkInsuranceCreateManyInput | Prisma.InNetworkInsuranceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InNetworkInsuranceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InNetworkInsuranceSelect<ExtArgs> | null;
    omit?: Prisma.InNetworkInsuranceOmit<ExtArgs> | null;
    include?: Prisma.InNetworkInsuranceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InNetworkInsuranceUpdateInput, Prisma.InNetworkInsuranceUncheckedUpdateInput>;
    where: Prisma.InNetworkInsuranceWhereUniqueInput;
};
export type InNetworkInsuranceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InNetworkInsuranceUpdateManyMutationInput, Prisma.InNetworkInsuranceUncheckedUpdateManyInput>;
    where?: Prisma.InNetworkInsuranceWhereInput;
    limit?: number;
};
export type InNetworkInsuranceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InNetworkInsuranceSelect<ExtArgs> | null;
    omit?: Prisma.InNetworkInsuranceOmit<ExtArgs> | null;
    include?: Prisma.InNetworkInsuranceInclude<ExtArgs> | null;
    where: Prisma.InNetworkInsuranceWhereUniqueInput;
    create: Prisma.XOR<Prisma.InNetworkInsuranceCreateInput, Prisma.InNetworkInsuranceUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InNetworkInsuranceUpdateInput, Prisma.InNetworkInsuranceUncheckedUpdateInput>;
};
export type InNetworkInsuranceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InNetworkInsuranceSelect<ExtArgs> | null;
    omit?: Prisma.InNetworkInsuranceOmit<ExtArgs> | null;
    include?: Prisma.InNetworkInsuranceInclude<ExtArgs> | null;
    where: Prisma.InNetworkInsuranceWhereUniqueInput;
};
export type InNetworkInsuranceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InNetworkInsuranceWhereInput;
    limit?: number;
};
export type InNetworkInsuranceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InNetworkInsuranceSelect<ExtArgs> | null;
    omit?: Prisma.InNetworkInsuranceOmit<ExtArgs> | null;
    include?: Prisma.InNetworkInsuranceInclude<ExtArgs> | null;
};
export {};
