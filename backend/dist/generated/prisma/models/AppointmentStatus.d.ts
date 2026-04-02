import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AppointmentStatusModel = runtime.Types.Result.DefaultSelection<Prisma.$AppointmentStatusPayload>;
export type AggregateAppointmentStatus = {
    _count: AppointmentStatusCountAggregateOutputType | null;
    _avg: AppointmentStatusAvgAggregateOutputType | null;
    _sum: AppointmentStatusSumAggregateOutputType | null;
    _min: AppointmentStatusMinAggregateOutputType | null;
    _max: AppointmentStatusMaxAggregateOutputType | null;
};
export type AppointmentStatusAvgAggregateOutputType = {
    id: number | null;
};
export type AppointmentStatusSumAggregateOutputType = {
    id: number | null;
};
export type AppointmentStatusMinAggregateOutputType = {
    id: number | null;
    status: string | null;
};
export type AppointmentStatusMaxAggregateOutputType = {
    id: number | null;
    status: string | null;
};
export type AppointmentStatusCountAggregateOutputType = {
    id: number;
    status: number;
    _all: number;
};
export type AppointmentStatusAvgAggregateInputType = {
    id?: true;
};
export type AppointmentStatusSumAggregateInputType = {
    id?: true;
};
export type AppointmentStatusMinAggregateInputType = {
    id?: true;
    status?: true;
};
export type AppointmentStatusMaxAggregateInputType = {
    id?: true;
    status?: true;
};
export type AppointmentStatusCountAggregateInputType = {
    id?: true;
    status?: true;
    _all?: true;
};
export type AppointmentStatusAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AppointmentStatusWhereInput;
    orderBy?: Prisma.AppointmentStatusOrderByWithRelationInput | Prisma.AppointmentStatusOrderByWithRelationInput[];
    cursor?: Prisma.AppointmentStatusWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AppointmentStatusCountAggregateInputType;
    _avg?: AppointmentStatusAvgAggregateInputType;
    _sum?: AppointmentStatusSumAggregateInputType;
    _min?: AppointmentStatusMinAggregateInputType;
    _max?: AppointmentStatusMaxAggregateInputType;
};
export type GetAppointmentStatusAggregateType<T extends AppointmentStatusAggregateArgs> = {
    [P in keyof T & keyof AggregateAppointmentStatus]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAppointmentStatus[P]> : Prisma.GetScalarType<T[P], AggregateAppointmentStatus[P]>;
};
export type AppointmentStatusGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AppointmentStatusWhereInput;
    orderBy?: Prisma.AppointmentStatusOrderByWithAggregationInput | Prisma.AppointmentStatusOrderByWithAggregationInput[];
    by: Prisma.AppointmentStatusScalarFieldEnum[] | Prisma.AppointmentStatusScalarFieldEnum;
    having?: Prisma.AppointmentStatusScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AppointmentStatusCountAggregateInputType | true;
    _avg?: AppointmentStatusAvgAggregateInputType;
    _sum?: AppointmentStatusSumAggregateInputType;
    _min?: AppointmentStatusMinAggregateInputType;
    _max?: AppointmentStatusMaxAggregateInputType;
};
export type AppointmentStatusGroupByOutputType = {
    id: number;
    status: string;
    _count: AppointmentStatusCountAggregateOutputType | null;
    _avg: AppointmentStatusAvgAggregateOutputType | null;
    _sum: AppointmentStatusSumAggregateOutputType | null;
    _min: AppointmentStatusMinAggregateOutputType | null;
    _max: AppointmentStatusMaxAggregateOutputType | null;
};
type GetAppointmentStatusGroupByPayload<T extends AppointmentStatusGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AppointmentStatusGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AppointmentStatusGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AppointmentStatusGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AppointmentStatusGroupByOutputType[P]>;
}>>;
export type AppointmentStatusWhereInput = {
    AND?: Prisma.AppointmentStatusWhereInput | Prisma.AppointmentStatusWhereInput[];
    OR?: Prisma.AppointmentStatusWhereInput[];
    NOT?: Prisma.AppointmentStatusWhereInput | Prisma.AppointmentStatusWhereInput[];
    id?: Prisma.IntFilter<"AppointmentStatus"> | number;
    status?: Prisma.StringFilter<"AppointmentStatus"> | string;
    appointments?: Prisma.AppointmentListRelationFilter;
};
export type AppointmentStatusOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    appointments?: Prisma.AppointmentOrderByRelationAggregateInput;
    _relevance?: Prisma.AppointmentStatusOrderByRelevanceInput;
};
export type AppointmentStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.AppointmentStatusWhereInput | Prisma.AppointmentStatusWhereInput[];
    OR?: Prisma.AppointmentStatusWhereInput[];
    NOT?: Prisma.AppointmentStatusWhereInput | Prisma.AppointmentStatusWhereInput[];
    status?: Prisma.StringFilter<"AppointmentStatus"> | string;
    appointments?: Prisma.AppointmentListRelationFilter;
}, "id">;
export type AppointmentStatusOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    _count?: Prisma.AppointmentStatusCountOrderByAggregateInput;
    _avg?: Prisma.AppointmentStatusAvgOrderByAggregateInput;
    _max?: Prisma.AppointmentStatusMaxOrderByAggregateInput;
    _min?: Prisma.AppointmentStatusMinOrderByAggregateInput;
    _sum?: Prisma.AppointmentStatusSumOrderByAggregateInput;
};
export type AppointmentStatusScalarWhereWithAggregatesInput = {
    AND?: Prisma.AppointmentStatusScalarWhereWithAggregatesInput | Prisma.AppointmentStatusScalarWhereWithAggregatesInput[];
    OR?: Prisma.AppointmentStatusScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AppointmentStatusScalarWhereWithAggregatesInput | Prisma.AppointmentStatusScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"AppointmentStatus"> | number;
    status?: Prisma.StringWithAggregatesFilter<"AppointmentStatus"> | string;
};
export type AppointmentStatusCreateInput = {
    status: string;
    appointments?: Prisma.AppointmentCreateNestedManyWithoutStatusInput;
};
export type AppointmentStatusUncheckedCreateInput = {
    id?: number;
    status: string;
    appointments?: Prisma.AppointmentUncheckedCreateNestedManyWithoutStatusInput;
};
export type AppointmentStatusUpdateInput = {
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    appointments?: Prisma.AppointmentUpdateManyWithoutStatusNestedInput;
};
export type AppointmentStatusUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    appointments?: Prisma.AppointmentUncheckedUpdateManyWithoutStatusNestedInput;
};
export type AppointmentStatusCreateManyInput = {
    id?: number;
    status: string;
};
export type AppointmentStatusUpdateManyMutationInput = {
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AppointmentStatusUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AppointmentStatusOrderByRelevanceInput = {
    fields: Prisma.AppointmentStatusOrderByRelevanceFieldEnum | Prisma.AppointmentStatusOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type AppointmentStatusCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type AppointmentStatusAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type AppointmentStatusMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type AppointmentStatusMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type AppointmentStatusSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type AppointmentStatusScalarRelationFilter = {
    is?: Prisma.AppointmentStatusWhereInput;
    isNot?: Prisma.AppointmentStatusWhereInput;
};
export type AppointmentStatusCreateNestedOneWithoutAppointmentsInput = {
    create?: Prisma.XOR<Prisma.AppointmentStatusCreateWithoutAppointmentsInput, Prisma.AppointmentStatusUncheckedCreateWithoutAppointmentsInput>;
    connectOrCreate?: Prisma.AppointmentStatusCreateOrConnectWithoutAppointmentsInput;
    connect?: Prisma.AppointmentStatusWhereUniqueInput;
};
export type AppointmentStatusUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: Prisma.XOR<Prisma.AppointmentStatusCreateWithoutAppointmentsInput, Prisma.AppointmentStatusUncheckedCreateWithoutAppointmentsInput>;
    connectOrCreate?: Prisma.AppointmentStatusCreateOrConnectWithoutAppointmentsInput;
    upsert?: Prisma.AppointmentStatusUpsertWithoutAppointmentsInput;
    connect?: Prisma.AppointmentStatusWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AppointmentStatusUpdateToOneWithWhereWithoutAppointmentsInput, Prisma.AppointmentStatusUpdateWithoutAppointmentsInput>, Prisma.AppointmentStatusUncheckedUpdateWithoutAppointmentsInput>;
};
export type AppointmentStatusCreateWithoutAppointmentsInput = {
    status: string;
};
export type AppointmentStatusUncheckedCreateWithoutAppointmentsInput = {
    id?: number;
    status: string;
};
export type AppointmentStatusCreateOrConnectWithoutAppointmentsInput = {
    where: Prisma.AppointmentStatusWhereUniqueInput;
    create: Prisma.XOR<Prisma.AppointmentStatusCreateWithoutAppointmentsInput, Prisma.AppointmentStatusUncheckedCreateWithoutAppointmentsInput>;
};
export type AppointmentStatusUpsertWithoutAppointmentsInput = {
    update: Prisma.XOR<Prisma.AppointmentStatusUpdateWithoutAppointmentsInput, Prisma.AppointmentStatusUncheckedUpdateWithoutAppointmentsInput>;
    create: Prisma.XOR<Prisma.AppointmentStatusCreateWithoutAppointmentsInput, Prisma.AppointmentStatusUncheckedCreateWithoutAppointmentsInput>;
    where?: Prisma.AppointmentStatusWhereInput;
};
export type AppointmentStatusUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: Prisma.AppointmentStatusWhereInput;
    data: Prisma.XOR<Prisma.AppointmentStatusUpdateWithoutAppointmentsInput, Prisma.AppointmentStatusUncheckedUpdateWithoutAppointmentsInput>;
};
export type AppointmentStatusUpdateWithoutAppointmentsInput = {
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AppointmentStatusUncheckedUpdateWithoutAppointmentsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AppointmentStatusCountOutputType = {
    appointments: number;
};
export type AppointmentStatusCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    appointments?: boolean | AppointmentStatusCountOutputTypeCountAppointmentsArgs;
};
export type AppointmentStatusCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentStatusCountOutputTypeSelect<ExtArgs> | null;
};
export type AppointmentStatusCountOutputTypeCountAppointmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AppointmentWhereInput;
};
export type AppointmentStatusSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    status?: boolean;
    appointments?: boolean | Prisma.AppointmentStatus$appointmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.AppointmentStatusCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["appointmentStatus"]>;
export type AppointmentStatusSelectScalar = {
    id?: boolean;
    status?: boolean;
};
export type AppointmentStatusOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "status", ExtArgs["result"]["appointmentStatus"]>;
export type AppointmentStatusInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    appointments?: boolean | Prisma.AppointmentStatus$appointmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.AppointmentStatusCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $AppointmentStatusPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AppointmentStatus";
    objects: {
        appointments: Prisma.$AppointmentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        status: string;
    }, ExtArgs["result"]["appointmentStatus"]>;
    composites: {};
};
export type AppointmentStatusGetPayload<S extends boolean | null | undefined | AppointmentStatusDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AppointmentStatusPayload, S>;
export type AppointmentStatusCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AppointmentStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AppointmentStatusCountAggregateInputType | true;
};
export interface AppointmentStatusDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AppointmentStatus'];
        meta: {
            name: 'AppointmentStatus';
        };
    };
    findUnique<T extends AppointmentStatusFindUniqueArgs>(args: Prisma.SelectSubset<T, AppointmentStatusFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AppointmentStatusClient<runtime.Types.Result.GetResult<Prisma.$AppointmentStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AppointmentStatusFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AppointmentStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AppointmentStatusClient<runtime.Types.Result.GetResult<Prisma.$AppointmentStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AppointmentStatusFindFirstArgs>(args?: Prisma.SelectSubset<T, AppointmentStatusFindFirstArgs<ExtArgs>>): Prisma.Prisma__AppointmentStatusClient<runtime.Types.Result.GetResult<Prisma.$AppointmentStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AppointmentStatusFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AppointmentStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AppointmentStatusClient<runtime.Types.Result.GetResult<Prisma.$AppointmentStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AppointmentStatusFindManyArgs>(args?: Prisma.SelectSubset<T, AppointmentStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AppointmentStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AppointmentStatusCreateArgs>(args: Prisma.SelectSubset<T, AppointmentStatusCreateArgs<ExtArgs>>): Prisma.Prisma__AppointmentStatusClient<runtime.Types.Result.GetResult<Prisma.$AppointmentStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AppointmentStatusCreateManyArgs>(args?: Prisma.SelectSubset<T, AppointmentStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends AppointmentStatusDeleteArgs>(args: Prisma.SelectSubset<T, AppointmentStatusDeleteArgs<ExtArgs>>): Prisma.Prisma__AppointmentStatusClient<runtime.Types.Result.GetResult<Prisma.$AppointmentStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AppointmentStatusUpdateArgs>(args: Prisma.SelectSubset<T, AppointmentStatusUpdateArgs<ExtArgs>>): Prisma.Prisma__AppointmentStatusClient<runtime.Types.Result.GetResult<Prisma.$AppointmentStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AppointmentStatusDeleteManyArgs>(args?: Prisma.SelectSubset<T, AppointmentStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AppointmentStatusUpdateManyArgs>(args: Prisma.SelectSubset<T, AppointmentStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends AppointmentStatusUpsertArgs>(args: Prisma.SelectSubset<T, AppointmentStatusUpsertArgs<ExtArgs>>): Prisma.Prisma__AppointmentStatusClient<runtime.Types.Result.GetResult<Prisma.$AppointmentStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AppointmentStatusCountArgs>(args?: Prisma.Subset<T, AppointmentStatusCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AppointmentStatusCountAggregateOutputType> : number>;
    aggregate<T extends AppointmentStatusAggregateArgs>(args: Prisma.Subset<T, AppointmentStatusAggregateArgs>): Prisma.PrismaPromise<GetAppointmentStatusAggregateType<T>>;
    groupBy<T extends AppointmentStatusGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AppointmentStatusGroupByArgs['orderBy'];
    } : {
        orderBy?: AppointmentStatusGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AppointmentStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AppointmentStatusFieldRefs;
}
export interface Prisma__AppointmentStatusClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    appointments<T extends Prisma.AppointmentStatus$appointmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppointmentStatus$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AppointmentStatusFieldRefs {
    readonly id: Prisma.FieldRef<"AppointmentStatus", 'Int'>;
    readonly status: Prisma.FieldRef<"AppointmentStatus", 'String'>;
}
export type AppointmentStatusFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentStatusSelect<ExtArgs> | null;
    omit?: Prisma.AppointmentStatusOmit<ExtArgs> | null;
    include?: Prisma.AppointmentStatusInclude<ExtArgs> | null;
    where: Prisma.AppointmentStatusWhereUniqueInput;
};
export type AppointmentStatusFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentStatusSelect<ExtArgs> | null;
    omit?: Prisma.AppointmentStatusOmit<ExtArgs> | null;
    include?: Prisma.AppointmentStatusInclude<ExtArgs> | null;
    where: Prisma.AppointmentStatusWhereUniqueInput;
};
export type AppointmentStatusFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentStatusSelect<ExtArgs> | null;
    omit?: Prisma.AppointmentStatusOmit<ExtArgs> | null;
    include?: Prisma.AppointmentStatusInclude<ExtArgs> | null;
    where?: Prisma.AppointmentStatusWhereInput;
    orderBy?: Prisma.AppointmentStatusOrderByWithRelationInput | Prisma.AppointmentStatusOrderByWithRelationInput[];
    cursor?: Prisma.AppointmentStatusWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AppointmentStatusScalarFieldEnum | Prisma.AppointmentStatusScalarFieldEnum[];
};
export type AppointmentStatusFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentStatusSelect<ExtArgs> | null;
    omit?: Prisma.AppointmentStatusOmit<ExtArgs> | null;
    include?: Prisma.AppointmentStatusInclude<ExtArgs> | null;
    where?: Prisma.AppointmentStatusWhereInput;
    orderBy?: Prisma.AppointmentStatusOrderByWithRelationInput | Prisma.AppointmentStatusOrderByWithRelationInput[];
    cursor?: Prisma.AppointmentStatusWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AppointmentStatusScalarFieldEnum | Prisma.AppointmentStatusScalarFieldEnum[];
};
export type AppointmentStatusFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentStatusSelect<ExtArgs> | null;
    omit?: Prisma.AppointmentStatusOmit<ExtArgs> | null;
    include?: Prisma.AppointmentStatusInclude<ExtArgs> | null;
    where?: Prisma.AppointmentStatusWhereInput;
    orderBy?: Prisma.AppointmentStatusOrderByWithRelationInput | Prisma.AppointmentStatusOrderByWithRelationInput[];
    cursor?: Prisma.AppointmentStatusWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AppointmentStatusScalarFieldEnum | Prisma.AppointmentStatusScalarFieldEnum[];
};
export type AppointmentStatusCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentStatusSelect<ExtArgs> | null;
    omit?: Prisma.AppointmentStatusOmit<ExtArgs> | null;
    include?: Prisma.AppointmentStatusInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AppointmentStatusCreateInput, Prisma.AppointmentStatusUncheckedCreateInput>;
};
export type AppointmentStatusCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AppointmentStatusCreateManyInput | Prisma.AppointmentStatusCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AppointmentStatusUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentStatusSelect<ExtArgs> | null;
    omit?: Prisma.AppointmentStatusOmit<ExtArgs> | null;
    include?: Prisma.AppointmentStatusInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AppointmentStatusUpdateInput, Prisma.AppointmentStatusUncheckedUpdateInput>;
    where: Prisma.AppointmentStatusWhereUniqueInput;
};
export type AppointmentStatusUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AppointmentStatusUpdateManyMutationInput, Prisma.AppointmentStatusUncheckedUpdateManyInput>;
    where?: Prisma.AppointmentStatusWhereInput;
    limit?: number;
};
export type AppointmentStatusUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentStatusSelect<ExtArgs> | null;
    omit?: Prisma.AppointmentStatusOmit<ExtArgs> | null;
    include?: Prisma.AppointmentStatusInclude<ExtArgs> | null;
    where: Prisma.AppointmentStatusWhereUniqueInput;
    create: Prisma.XOR<Prisma.AppointmentStatusCreateInput, Prisma.AppointmentStatusUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AppointmentStatusUpdateInput, Prisma.AppointmentStatusUncheckedUpdateInput>;
};
export type AppointmentStatusDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentStatusSelect<ExtArgs> | null;
    omit?: Prisma.AppointmentStatusOmit<ExtArgs> | null;
    include?: Prisma.AppointmentStatusInclude<ExtArgs> | null;
    where: Prisma.AppointmentStatusWhereUniqueInput;
};
export type AppointmentStatusDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AppointmentStatusWhereInput;
    limit?: number;
};
export type AppointmentStatus$appointmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AppointmentStatusDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentStatusSelect<ExtArgs> | null;
    omit?: Prisma.AppointmentStatusOmit<ExtArgs> | null;
    include?: Prisma.AppointmentStatusInclude<ExtArgs> | null;
};
export {};
