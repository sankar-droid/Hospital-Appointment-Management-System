import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SpecializationModel = runtime.Types.Result.DefaultSelection<Prisma.$SpecializationPayload>;
export type AggregateSpecialization = {
    _count: SpecializationCountAggregateOutputType | null;
    _avg: SpecializationAvgAggregateOutputType | null;
    _sum: SpecializationSumAggregateOutputType | null;
    _min: SpecializationMinAggregateOutputType | null;
    _max: SpecializationMaxAggregateOutputType | null;
};
export type SpecializationAvgAggregateOutputType = {
    id: number | null;
};
export type SpecializationSumAggregateOutputType = {
    id: number | null;
};
export type SpecializationMinAggregateOutputType = {
    id: number | null;
    specializationName: string | null;
};
export type SpecializationMaxAggregateOutputType = {
    id: number | null;
    specializationName: string | null;
};
export type SpecializationCountAggregateOutputType = {
    id: number;
    specializationName: number;
    _all: number;
};
export type SpecializationAvgAggregateInputType = {
    id?: true;
};
export type SpecializationSumAggregateInputType = {
    id?: true;
};
export type SpecializationMinAggregateInputType = {
    id?: true;
    specializationName?: true;
};
export type SpecializationMaxAggregateInputType = {
    id?: true;
    specializationName?: true;
};
export type SpecializationCountAggregateInputType = {
    id?: true;
    specializationName?: true;
    _all?: true;
};
export type SpecializationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SpecializationWhereInput;
    orderBy?: Prisma.SpecializationOrderByWithRelationInput | Prisma.SpecializationOrderByWithRelationInput[];
    cursor?: Prisma.SpecializationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SpecializationCountAggregateInputType;
    _avg?: SpecializationAvgAggregateInputType;
    _sum?: SpecializationSumAggregateInputType;
    _min?: SpecializationMinAggregateInputType;
    _max?: SpecializationMaxAggregateInputType;
};
export type GetSpecializationAggregateType<T extends SpecializationAggregateArgs> = {
    [P in keyof T & keyof AggregateSpecialization]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSpecialization[P]> : Prisma.GetScalarType<T[P], AggregateSpecialization[P]>;
};
export type SpecializationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SpecializationWhereInput;
    orderBy?: Prisma.SpecializationOrderByWithAggregationInput | Prisma.SpecializationOrderByWithAggregationInput[];
    by: Prisma.SpecializationScalarFieldEnum[] | Prisma.SpecializationScalarFieldEnum;
    having?: Prisma.SpecializationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SpecializationCountAggregateInputType | true;
    _avg?: SpecializationAvgAggregateInputType;
    _sum?: SpecializationSumAggregateInputType;
    _min?: SpecializationMinAggregateInputType;
    _max?: SpecializationMaxAggregateInputType;
};
export type SpecializationGroupByOutputType = {
    id: number;
    specializationName: string;
    _count: SpecializationCountAggregateOutputType | null;
    _avg: SpecializationAvgAggregateOutputType | null;
    _sum: SpecializationSumAggregateOutputType | null;
    _min: SpecializationMinAggregateOutputType | null;
    _max: SpecializationMaxAggregateOutputType | null;
};
type GetSpecializationGroupByPayload<T extends SpecializationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SpecializationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SpecializationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SpecializationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SpecializationGroupByOutputType[P]>;
}>>;
export type SpecializationWhereInput = {
    AND?: Prisma.SpecializationWhereInput | Prisma.SpecializationWhereInput[];
    OR?: Prisma.SpecializationWhereInput[];
    NOT?: Prisma.SpecializationWhereInput | Prisma.SpecializationWhereInput[];
    id?: Prisma.IntFilter<"Specialization"> | number;
    specializationName?: Prisma.StringFilter<"Specialization"> | string;
    doctors?: Prisma.DoctorSpecializationListRelationFilter;
};
export type SpecializationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    specializationName?: Prisma.SortOrder;
    doctors?: Prisma.DoctorSpecializationOrderByRelationAggregateInput;
    _relevance?: Prisma.SpecializationOrderByRelevanceInput;
};
export type SpecializationWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.SpecializationWhereInput | Prisma.SpecializationWhereInput[];
    OR?: Prisma.SpecializationWhereInput[];
    NOT?: Prisma.SpecializationWhereInput | Prisma.SpecializationWhereInput[];
    specializationName?: Prisma.StringFilter<"Specialization"> | string;
    doctors?: Prisma.DoctorSpecializationListRelationFilter;
}, "id">;
export type SpecializationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    specializationName?: Prisma.SortOrder;
    _count?: Prisma.SpecializationCountOrderByAggregateInput;
    _avg?: Prisma.SpecializationAvgOrderByAggregateInput;
    _max?: Prisma.SpecializationMaxOrderByAggregateInput;
    _min?: Prisma.SpecializationMinOrderByAggregateInput;
    _sum?: Prisma.SpecializationSumOrderByAggregateInput;
};
export type SpecializationScalarWhereWithAggregatesInput = {
    AND?: Prisma.SpecializationScalarWhereWithAggregatesInput | Prisma.SpecializationScalarWhereWithAggregatesInput[];
    OR?: Prisma.SpecializationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SpecializationScalarWhereWithAggregatesInput | Prisma.SpecializationScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Specialization"> | number;
    specializationName?: Prisma.StringWithAggregatesFilter<"Specialization"> | string;
};
export type SpecializationCreateInput = {
    specializationName: string;
    doctors?: Prisma.DoctorSpecializationCreateNestedManyWithoutSpecializationInput;
};
export type SpecializationUncheckedCreateInput = {
    id?: number;
    specializationName: string;
    doctors?: Prisma.DoctorSpecializationUncheckedCreateNestedManyWithoutSpecializationInput;
};
export type SpecializationUpdateInput = {
    specializationName?: Prisma.StringFieldUpdateOperationsInput | string;
    doctors?: Prisma.DoctorSpecializationUpdateManyWithoutSpecializationNestedInput;
};
export type SpecializationUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    specializationName?: Prisma.StringFieldUpdateOperationsInput | string;
    doctors?: Prisma.DoctorSpecializationUncheckedUpdateManyWithoutSpecializationNestedInput;
};
export type SpecializationCreateManyInput = {
    id?: number;
    specializationName: string;
};
export type SpecializationUpdateManyMutationInput = {
    specializationName?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SpecializationUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    specializationName?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SpecializationOrderByRelevanceInput = {
    fields: Prisma.SpecializationOrderByRelevanceFieldEnum | Prisma.SpecializationOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type SpecializationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    specializationName?: Prisma.SortOrder;
};
export type SpecializationAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type SpecializationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    specializationName?: Prisma.SortOrder;
};
export type SpecializationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    specializationName?: Prisma.SortOrder;
};
export type SpecializationSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type SpecializationScalarRelationFilter = {
    is?: Prisma.SpecializationWhereInput;
    isNot?: Prisma.SpecializationWhereInput;
};
export type SpecializationCreateNestedOneWithoutDoctorsInput = {
    create?: Prisma.XOR<Prisma.SpecializationCreateWithoutDoctorsInput, Prisma.SpecializationUncheckedCreateWithoutDoctorsInput>;
    connectOrCreate?: Prisma.SpecializationCreateOrConnectWithoutDoctorsInput;
    connect?: Prisma.SpecializationWhereUniqueInput;
};
export type SpecializationUpdateOneRequiredWithoutDoctorsNestedInput = {
    create?: Prisma.XOR<Prisma.SpecializationCreateWithoutDoctorsInput, Prisma.SpecializationUncheckedCreateWithoutDoctorsInput>;
    connectOrCreate?: Prisma.SpecializationCreateOrConnectWithoutDoctorsInput;
    upsert?: Prisma.SpecializationUpsertWithoutDoctorsInput;
    connect?: Prisma.SpecializationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SpecializationUpdateToOneWithWhereWithoutDoctorsInput, Prisma.SpecializationUpdateWithoutDoctorsInput>, Prisma.SpecializationUncheckedUpdateWithoutDoctorsInput>;
};
export type SpecializationCreateWithoutDoctorsInput = {
    specializationName: string;
};
export type SpecializationUncheckedCreateWithoutDoctorsInput = {
    id?: number;
    specializationName: string;
};
export type SpecializationCreateOrConnectWithoutDoctorsInput = {
    where: Prisma.SpecializationWhereUniqueInput;
    create: Prisma.XOR<Prisma.SpecializationCreateWithoutDoctorsInput, Prisma.SpecializationUncheckedCreateWithoutDoctorsInput>;
};
export type SpecializationUpsertWithoutDoctorsInput = {
    update: Prisma.XOR<Prisma.SpecializationUpdateWithoutDoctorsInput, Prisma.SpecializationUncheckedUpdateWithoutDoctorsInput>;
    create: Prisma.XOR<Prisma.SpecializationCreateWithoutDoctorsInput, Prisma.SpecializationUncheckedCreateWithoutDoctorsInput>;
    where?: Prisma.SpecializationWhereInput;
};
export type SpecializationUpdateToOneWithWhereWithoutDoctorsInput = {
    where?: Prisma.SpecializationWhereInput;
    data: Prisma.XOR<Prisma.SpecializationUpdateWithoutDoctorsInput, Prisma.SpecializationUncheckedUpdateWithoutDoctorsInput>;
};
export type SpecializationUpdateWithoutDoctorsInput = {
    specializationName?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SpecializationUncheckedUpdateWithoutDoctorsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    specializationName?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SpecializationCountOutputType = {
    doctors: number;
};
export type SpecializationCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    doctors?: boolean | SpecializationCountOutputTypeCountDoctorsArgs;
};
export type SpecializationCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SpecializationCountOutputTypeSelect<ExtArgs> | null;
};
export type SpecializationCountOutputTypeCountDoctorsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DoctorSpecializationWhereInput;
};
export type SpecializationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    specializationName?: boolean;
    doctors?: boolean | Prisma.Specialization$doctorsArgs<ExtArgs>;
    _count?: boolean | Prisma.SpecializationCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["specialization"]>;
export type SpecializationSelectScalar = {
    id?: boolean;
    specializationName?: boolean;
};
export type SpecializationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "specializationName", ExtArgs["result"]["specialization"]>;
export type SpecializationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    doctors?: boolean | Prisma.Specialization$doctorsArgs<ExtArgs>;
    _count?: boolean | Prisma.SpecializationCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $SpecializationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Specialization";
    objects: {
        doctors: Prisma.$DoctorSpecializationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        specializationName: string;
    }, ExtArgs["result"]["specialization"]>;
    composites: {};
};
export type SpecializationGetPayload<S extends boolean | null | undefined | SpecializationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SpecializationPayload, S>;
export type SpecializationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SpecializationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SpecializationCountAggregateInputType | true;
};
export interface SpecializationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Specialization'];
        meta: {
            name: 'Specialization';
        };
    };
    findUnique<T extends SpecializationFindUniqueArgs>(args: Prisma.SelectSubset<T, SpecializationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SpecializationClient<runtime.Types.Result.GetResult<Prisma.$SpecializationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SpecializationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SpecializationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SpecializationClient<runtime.Types.Result.GetResult<Prisma.$SpecializationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SpecializationFindFirstArgs>(args?: Prisma.SelectSubset<T, SpecializationFindFirstArgs<ExtArgs>>): Prisma.Prisma__SpecializationClient<runtime.Types.Result.GetResult<Prisma.$SpecializationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SpecializationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SpecializationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SpecializationClient<runtime.Types.Result.GetResult<Prisma.$SpecializationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SpecializationFindManyArgs>(args?: Prisma.SelectSubset<T, SpecializationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SpecializationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SpecializationCreateArgs>(args: Prisma.SelectSubset<T, SpecializationCreateArgs<ExtArgs>>): Prisma.Prisma__SpecializationClient<runtime.Types.Result.GetResult<Prisma.$SpecializationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SpecializationCreateManyArgs>(args?: Prisma.SelectSubset<T, SpecializationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends SpecializationDeleteArgs>(args: Prisma.SelectSubset<T, SpecializationDeleteArgs<ExtArgs>>): Prisma.Prisma__SpecializationClient<runtime.Types.Result.GetResult<Prisma.$SpecializationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SpecializationUpdateArgs>(args: Prisma.SelectSubset<T, SpecializationUpdateArgs<ExtArgs>>): Prisma.Prisma__SpecializationClient<runtime.Types.Result.GetResult<Prisma.$SpecializationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SpecializationDeleteManyArgs>(args?: Prisma.SelectSubset<T, SpecializationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SpecializationUpdateManyArgs>(args: Prisma.SelectSubset<T, SpecializationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends SpecializationUpsertArgs>(args: Prisma.SelectSubset<T, SpecializationUpsertArgs<ExtArgs>>): Prisma.Prisma__SpecializationClient<runtime.Types.Result.GetResult<Prisma.$SpecializationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SpecializationCountArgs>(args?: Prisma.Subset<T, SpecializationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SpecializationCountAggregateOutputType> : number>;
    aggregate<T extends SpecializationAggregateArgs>(args: Prisma.Subset<T, SpecializationAggregateArgs>): Prisma.PrismaPromise<GetSpecializationAggregateType<T>>;
    groupBy<T extends SpecializationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SpecializationGroupByArgs['orderBy'];
    } : {
        orderBy?: SpecializationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SpecializationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpecializationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SpecializationFieldRefs;
}
export interface Prisma__SpecializationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    doctors<T extends Prisma.Specialization$doctorsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Specialization$doctorsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SpecializationFieldRefs {
    readonly id: Prisma.FieldRef<"Specialization", 'Int'>;
    readonly specializationName: Prisma.FieldRef<"Specialization", 'String'>;
}
export type SpecializationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SpecializationSelect<ExtArgs> | null;
    omit?: Prisma.SpecializationOmit<ExtArgs> | null;
    include?: Prisma.SpecializationInclude<ExtArgs> | null;
    where: Prisma.SpecializationWhereUniqueInput;
};
export type SpecializationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SpecializationSelect<ExtArgs> | null;
    omit?: Prisma.SpecializationOmit<ExtArgs> | null;
    include?: Prisma.SpecializationInclude<ExtArgs> | null;
    where: Prisma.SpecializationWhereUniqueInput;
};
export type SpecializationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SpecializationSelect<ExtArgs> | null;
    omit?: Prisma.SpecializationOmit<ExtArgs> | null;
    include?: Prisma.SpecializationInclude<ExtArgs> | null;
    where?: Prisma.SpecializationWhereInput;
    orderBy?: Prisma.SpecializationOrderByWithRelationInput | Prisma.SpecializationOrderByWithRelationInput[];
    cursor?: Prisma.SpecializationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SpecializationScalarFieldEnum | Prisma.SpecializationScalarFieldEnum[];
};
export type SpecializationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SpecializationSelect<ExtArgs> | null;
    omit?: Prisma.SpecializationOmit<ExtArgs> | null;
    include?: Prisma.SpecializationInclude<ExtArgs> | null;
    where?: Prisma.SpecializationWhereInput;
    orderBy?: Prisma.SpecializationOrderByWithRelationInput | Prisma.SpecializationOrderByWithRelationInput[];
    cursor?: Prisma.SpecializationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SpecializationScalarFieldEnum | Prisma.SpecializationScalarFieldEnum[];
};
export type SpecializationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SpecializationSelect<ExtArgs> | null;
    omit?: Prisma.SpecializationOmit<ExtArgs> | null;
    include?: Prisma.SpecializationInclude<ExtArgs> | null;
    where?: Prisma.SpecializationWhereInput;
    orderBy?: Prisma.SpecializationOrderByWithRelationInput | Prisma.SpecializationOrderByWithRelationInput[];
    cursor?: Prisma.SpecializationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SpecializationScalarFieldEnum | Prisma.SpecializationScalarFieldEnum[];
};
export type SpecializationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SpecializationSelect<ExtArgs> | null;
    omit?: Prisma.SpecializationOmit<ExtArgs> | null;
    include?: Prisma.SpecializationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SpecializationCreateInput, Prisma.SpecializationUncheckedCreateInput>;
};
export type SpecializationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SpecializationCreateManyInput | Prisma.SpecializationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SpecializationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SpecializationSelect<ExtArgs> | null;
    omit?: Prisma.SpecializationOmit<ExtArgs> | null;
    include?: Prisma.SpecializationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SpecializationUpdateInput, Prisma.SpecializationUncheckedUpdateInput>;
    where: Prisma.SpecializationWhereUniqueInput;
};
export type SpecializationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SpecializationUpdateManyMutationInput, Prisma.SpecializationUncheckedUpdateManyInput>;
    where?: Prisma.SpecializationWhereInput;
    limit?: number;
};
export type SpecializationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SpecializationSelect<ExtArgs> | null;
    omit?: Prisma.SpecializationOmit<ExtArgs> | null;
    include?: Prisma.SpecializationInclude<ExtArgs> | null;
    where: Prisma.SpecializationWhereUniqueInput;
    create: Prisma.XOR<Prisma.SpecializationCreateInput, Prisma.SpecializationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SpecializationUpdateInput, Prisma.SpecializationUncheckedUpdateInput>;
};
export type SpecializationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SpecializationSelect<ExtArgs> | null;
    omit?: Prisma.SpecializationOmit<ExtArgs> | null;
    include?: Prisma.SpecializationInclude<ExtArgs> | null;
    where: Prisma.SpecializationWhereUniqueInput;
};
export type SpecializationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SpecializationWhereInput;
    limit?: number;
};
export type Specialization$doctorsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SpecializationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SpecializationSelect<ExtArgs> | null;
    omit?: Prisma.SpecializationOmit<ExtArgs> | null;
    include?: Prisma.SpecializationInclude<ExtArgs> | null;
};
export {};
