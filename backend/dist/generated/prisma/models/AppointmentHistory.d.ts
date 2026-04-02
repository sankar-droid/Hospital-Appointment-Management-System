import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AppointmentHistoryModel = runtime.Types.Result.DefaultSelection<Prisma.$AppointmentHistoryPayload>;
export type AggregateAppointmentHistory = {
    _count: AppointmentHistoryCountAggregateOutputType | null;
    _avg: AppointmentHistoryAvgAggregateOutputType | null;
    _sum: AppointmentHistorySumAggregateOutputType | null;
    _min: AppointmentHistoryMinAggregateOutputType | null;
    _max: AppointmentHistoryMaxAggregateOutputType | null;
};
export type AppointmentHistoryAvgAggregateOutputType = {
    id: number | null;
    appointmentId: number | null;
    oldTimeSlotId: number | null;
    newTimeSlotId: number | null;
};
export type AppointmentHistorySumAggregateOutputType = {
    id: number | null;
    appointmentId: number | null;
    oldTimeSlotId: number | null;
    newTimeSlotId: number | null;
};
export type AppointmentHistoryMinAggregateOutputType = {
    id: number | null;
    appointmentId: number | null;
    oldTimeSlotId: number | null;
    newTimeSlotId: number | null;
    changedAt: Date | null;
};
export type AppointmentHistoryMaxAggregateOutputType = {
    id: number | null;
    appointmentId: number | null;
    oldTimeSlotId: number | null;
    newTimeSlotId: number | null;
    changedAt: Date | null;
};
export type AppointmentHistoryCountAggregateOutputType = {
    id: number;
    appointmentId: number;
    oldTimeSlotId: number;
    newTimeSlotId: number;
    changedAt: number;
    _all: number;
};
export type AppointmentHistoryAvgAggregateInputType = {
    id?: true;
    appointmentId?: true;
    oldTimeSlotId?: true;
    newTimeSlotId?: true;
};
export type AppointmentHistorySumAggregateInputType = {
    id?: true;
    appointmentId?: true;
    oldTimeSlotId?: true;
    newTimeSlotId?: true;
};
export type AppointmentHistoryMinAggregateInputType = {
    id?: true;
    appointmentId?: true;
    oldTimeSlotId?: true;
    newTimeSlotId?: true;
    changedAt?: true;
};
export type AppointmentHistoryMaxAggregateInputType = {
    id?: true;
    appointmentId?: true;
    oldTimeSlotId?: true;
    newTimeSlotId?: true;
    changedAt?: true;
};
export type AppointmentHistoryCountAggregateInputType = {
    id?: true;
    appointmentId?: true;
    oldTimeSlotId?: true;
    newTimeSlotId?: true;
    changedAt?: true;
    _all?: true;
};
export type AppointmentHistoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AppointmentHistoryWhereInput;
    orderBy?: Prisma.AppointmentHistoryOrderByWithRelationInput | Prisma.AppointmentHistoryOrderByWithRelationInput[];
    cursor?: Prisma.AppointmentHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AppointmentHistoryCountAggregateInputType;
    _avg?: AppointmentHistoryAvgAggregateInputType;
    _sum?: AppointmentHistorySumAggregateInputType;
    _min?: AppointmentHistoryMinAggregateInputType;
    _max?: AppointmentHistoryMaxAggregateInputType;
};
export type GetAppointmentHistoryAggregateType<T extends AppointmentHistoryAggregateArgs> = {
    [P in keyof T & keyof AggregateAppointmentHistory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAppointmentHistory[P]> : Prisma.GetScalarType<T[P], AggregateAppointmentHistory[P]>;
};
export type AppointmentHistoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AppointmentHistoryWhereInput;
    orderBy?: Prisma.AppointmentHistoryOrderByWithAggregationInput | Prisma.AppointmentHistoryOrderByWithAggregationInput[];
    by: Prisma.AppointmentHistoryScalarFieldEnum[] | Prisma.AppointmentHistoryScalarFieldEnum;
    having?: Prisma.AppointmentHistoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AppointmentHistoryCountAggregateInputType | true;
    _avg?: AppointmentHistoryAvgAggregateInputType;
    _sum?: AppointmentHistorySumAggregateInputType;
    _min?: AppointmentHistoryMinAggregateInputType;
    _max?: AppointmentHistoryMaxAggregateInputType;
};
export type AppointmentHistoryGroupByOutputType = {
    id: number;
    appointmentId: number;
    oldTimeSlotId: number;
    newTimeSlotId: number;
    changedAt: Date;
    _count: AppointmentHistoryCountAggregateOutputType | null;
    _avg: AppointmentHistoryAvgAggregateOutputType | null;
    _sum: AppointmentHistorySumAggregateOutputType | null;
    _min: AppointmentHistoryMinAggregateOutputType | null;
    _max: AppointmentHistoryMaxAggregateOutputType | null;
};
type GetAppointmentHistoryGroupByPayload<T extends AppointmentHistoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AppointmentHistoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AppointmentHistoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AppointmentHistoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AppointmentHistoryGroupByOutputType[P]>;
}>>;
export type AppointmentHistoryWhereInput = {
    AND?: Prisma.AppointmentHistoryWhereInput | Prisma.AppointmentHistoryWhereInput[];
    OR?: Prisma.AppointmentHistoryWhereInput[];
    NOT?: Prisma.AppointmentHistoryWhereInput | Prisma.AppointmentHistoryWhereInput[];
    id?: Prisma.IntFilter<"AppointmentHistory"> | number;
    appointmentId?: Prisma.IntFilter<"AppointmentHistory"> | number;
    oldTimeSlotId?: Prisma.IntFilter<"AppointmentHistory"> | number;
    newTimeSlotId?: Prisma.IntFilter<"AppointmentHistory"> | number;
    changedAt?: Prisma.DateTimeFilter<"AppointmentHistory"> | Date | string;
    appointment?: Prisma.XOR<Prisma.AppointmentScalarRelationFilter, Prisma.AppointmentWhereInput>;
};
export type AppointmentHistoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    appointmentId?: Prisma.SortOrder;
    oldTimeSlotId?: Prisma.SortOrder;
    newTimeSlotId?: Prisma.SortOrder;
    changedAt?: Prisma.SortOrder;
    appointment?: Prisma.AppointmentOrderByWithRelationInput;
};
export type AppointmentHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.AppointmentHistoryWhereInput | Prisma.AppointmentHistoryWhereInput[];
    OR?: Prisma.AppointmentHistoryWhereInput[];
    NOT?: Prisma.AppointmentHistoryWhereInput | Prisma.AppointmentHistoryWhereInput[];
    appointmentId?: Prisma.IntFilter<"AppointmentHistory"> | number;
    oldTimeSlotId?: Prisma.IntFilter<"AppointmentHistory"> | number;
    newTimeSlotId?: Prisma.IntFilter<"AppointmentHistory"> | number;
    changedAt?: Prisma.DateTimeFilter<"AppointmentHistory"> | Date | string;
    appointment?: Prisma.XOR<Prisma.AppointmentScalarRelationFilter, Prisma.AppointmentWhereInput>;
}, "id">;
export type AppointmentHistoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    appointmentId?: Prisma.SortOrder;
    oldTimeSlotId?: Prisma.SortOrder;
    newTimeSlotId?: Prisma.SortOrder;
    changedAt?: Prisma.SortOrder;
    _count?: Prisma.AppointmentHistoryCountOrderByAggregateInput;
    _avg?: Prisma.AppointmentHistoryAvgOrderByAggregateInput;
    _max?: Prisma.AppointmentHistoryMaxOrderByAggregateInput;
    _min?: Prisma.AppointmentHistoryMinOrderByAggregateInput;
    _sum?: Prisma.AppointmentHistorySumOrderByAggregateInput;
};
export type AppointmentHistoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.AppointmentHistoryScalarWhereWithAggregatesInput | Prisma.AppointmentHistoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.AppointmentHistoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AppointmentHistoryScalarWhereWithAggregatesInput | Prisma.AppointmentHistoryScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"AppointmentHistory"> | number;
    appointmentId?: Prisma.IntWithAggregatesFilter<"AppointmentHistory"> | number;
    oldTimeSlotId?: Prisma.IntWithAggregatesFilter<"AppointmentHistory"> | number;
    newTimeSlotId?: Prisma.IntWithAggregatesFilter<"AppointmentHistory"> | number;
    changedAt?: Prisma.DateTimeWithAggregatesFilter<"AppointmentHistory"> | Date | string;
};
export type AppointmentHistoryCreateInput = {
    oldTimeSlotId: number;
    newTimeSlotId: number;
    changedAt?: Date | string;
    appointment: Prisma.AppointmentCreateNestedOneWithoutHistoryInput;
};
export type AppointmentHistoryUncheckedCreateInput = {
    id?: number;
    appointmentId: number;
    oldTimeSlotId: number;
    newTimeSlotId: number;
    changedAt?: Date | string;
};
export type AppointmentHistoryUpdateInput = {
    oldTimeSlotId?: Prisma.IntFieldUpdateOperationsInput | number;
    newTimeSlotId?: Prisma.IntFieldUpdateOperationsInput | number;
    changedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: Prisma.AppointmentUpdateOneRequiredWithoutHistoryNestedInput;
};
export type AppointmentHistoryUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    appointmentId?: Prisma.IntFieldUpdateOperationsInput | number;
    oldTimeSlotId?: Prisma.IntFieldUpdateOperationsInput | number;
    newTimeSlotId?: Prisma.IntFieldUpdateOperationsInput | number;
    changedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AppointmentHistoryCreateManyInput = {
    id?: number;
    appointmentId: number;
    oldTimeSlotId: number;
    newTimeSlotId: number;
    changedAt?: Date | string;
};
export type AppointmentHistoryUpdateManyMutationInput = {
    oldTimeSlotId?: Prisma.IntFieldUpdateOperationsInput | number;
    newTimeSlotId?: Prisma.IntFieldUpdateOperationsInput | number;
    changedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AppointmentHistoryUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    appointmentId?: Prisma.IntFieldUpdateOperationsInput | number;
    oldTimeSlotId?: Prisma.IntFieldUpdateOperationsInput | number;
    newTimeSlotId?: Prisma.IntFieldUpdateOperationsInput | number;
    changedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AppointmentHistoryListRelationFilter = {
    every?: Prisma.AppointmentHistoryWhereInput;
    some?: Prisma.AppointmentHistoryWhereInput;
    none?: Prisma.AppointmentHistoryWhereInput;
};
export type AppointmentHistoryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AppointmentHistoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    appointmentId?: Prisma.SortOrder;
    oldTimeSlotId?: Prisma.SortOrder;
    newTimeSlotId?: Prisma.SortOrder;
    changedAt?: Prisma.SortOrder;
};
export type AppointmentHistoryAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    appointmentId?: Prisma.SortOrder;
    oldTimeSlotId?: Prisma.SortOrder;
    newTimeSlotId?: Prisma.SortOrder;
};
export type AppointmentHistoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    appointmentId?: Prisma.SortOrder;
    oldTimeSlotId?: Prisma.SortOrder;
    newTimeSlotId?: Prisma.SortOrder;
    changedAt?: Prisma.SortOrder;
};
export type AppointmentHistoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    appointmentId?: Prisma.SortOrder;
    oldTimeSlotId?: Prisma.SortOrder;
    newTimeSlotId?: Prisma.SortOrder;
    changedAt?: Prisma.SortOrder;
};
export type AppointmentHistorySumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    appointmentId?: Prisma.SortOrder;
    oldTimeSlotId?: Prisma.SortOrder;
    newTimeSlotId?: Prisma.SortOrder;
};
export type AppointmentHistoryCreateNestedManyWithoutAppointmentInput = {
    create?: Prisma.XOR<Prisma.AppointmentHistoryCreateWithoutAppointmentInput, Prisma.AppointmentHistoryUncheckedCreateWithoutAppointmentInput> | Prisma.AppointmentHistoryCreateWithoutAppointmentInput[] | Prisma.AppointmentHistoryUncheckedCreateWithoutAppointmentInput[];
    connectOrCreate?: Prisma.AppointmentHistoryCreateOrConnectWithoutAppointmentInput | Prisma.AppointmentHistoryCreateOrConnectWithoutAppointmentInput[];
    createMany?: Prisma.AppointmentHistoryCreateManyAppointmentInputEnvelope;
    connect?: Prisma.AppointmentHistoryWhereUniqueInput | Prisma.AppointmentHistoryWhereUniqueInput[];
};
export type AppointmentHistoryUncheckedCreateNestedManyWithoutAppointmentInput = {
    create?: Prisma.XOR<Prisma.AppointmentHistoryCreateWithoutAppointmentInput, Prisma.AppointmentHistoryUncheckedCreateWithoutAppointmentInput> | Prisma.AppointmentHistoryCreateWithoutAppointmentInput[] | Prisma.AppointmentHistoryUncheckedCreateWithoutAppointmentInput[];
    connectOrCreate?: Prisma.AppointmentHistoryCreateOrConnectWithoutAppointmentInput | Prisma.AppointmentHistoryCreateOrConnectWithoutAppointmentInput[];
    createMany?: Prisma.AppointmentHistoryCreateManyAppointmentInputEnvelope;
    connect?: Prisma.AppointmentHistoryWhereUniqueInput | Prisma.AppointmentHistoryWhereUniqueInput[];
};
export type AppointmentHistoryUpdateManyWithoutAppointmentNestedInput = {
    create?: Prisma.XOR<Prisma.AppointmentHistoryCreateWithoutAppointmentInput, Prisma.AppointmentHistoryUncheckedCreateWithoutAppointmentInput> | Prisma.AppointmentHistoryCreateWithoutAppointmentInput[] | Prisma.AppointmentHistoryUncheckedCreateWithoutAppointmentInput[];
    connectOrCreate?: Prisma.AppointmentHistoryCreateOrConnectWithoutAppointmentInput | Prisma.AppointmentHistoryCreateOrConnectWithoutAppointmentInput[];
    upsert?: Prisma.AppointmentHistoryUpsertWithWhereUniqueWithoutAppointmentInput | Prisma.AppointmentHistoryUpsertWithWhereUniqueWithoutAppointmentInput[];
    createMany?: Prisma.AppointmentHistoryCreateManyAppointmentInputEnvelope;
    set?: Prisma.AppointmentHistoryWhereUniqueInput | Prisma.AppointmentHistoryWhereUniqueInput[];
    disconnect?: Prisma.AppointmentHistoryWhereUniqueInput | Prisma.AppointmentHistoryWhereUniqueInput[];
    delete?: Prisma.AppointmentHistoryWhereUniqueInput | Prisma.AppointmentHistoryWhereUniqueInput[];
    connect?: Prisma.AppointmentHistoryWhereUniqueInput | Prisma.AppointmentHistoryWhereUniqueInput[];
    update?: Prisma.AppointmentHistoryUpdateWithWhereUniqueWithoutAppointmentInput | Prisma.AppointmentHistoryUpdateWithWhereUniqueWithoutAppointmentInput[];
    updateMany?: Prisma.AppointmentHistoryUpdateManyWithWhereWithoutAppointmentInput | Prisma.AppointmentHistoryUpdateManyWithWhereWithoutAppointmentInput[];
    deleteMany?: Prisma.AppointmentHistoryScalarWhereInput | Prisma.AppointmentHistoryScalarWhereInput[];
};
export type AppointmentHistoryUncheckedUpdateManyWithoutAppointmentNestedInput = {
    create?: Prisma.XOR<Prisma.AppointmentHistoryCreateWithoutAppointmentInput, Prisma.AppointmentHistoryUncheckedCreateWithoutAppointmentInput> | Prisma.AppointmentHistoryCreateWithoutAppointmentInput[] | Prisma.AppointmentHistoryUncheckedCreateWithoutAppointmentInput[];
    connectOrCreate?: Prisma.AppointmentHistoryCreateOrConnectWithoutAppointmentInput | Prisma.AppointmentHistoryCreateOrConnectWithoutAppointmentInput[];
    upsert?: Prisma.AppointmentHistoryUpsertWithWhereUniqueWithoutAppointmentInput | Prisma.AppointmentHistoryUpsertWithWhereUniqueWithoutAppointmentInput[];
    createMany?: Prisma.AppointmentHistoryCreateManyAppointmentInputEnvelope;
    set?: Prisma.AppointmentHistoryWhereUniqueInput | Prisma.AppointmentHistoryWhereUniqueInput[];
    disconnect?: Prisma.AppointmentHistoryWhereUniqueInput | Prisma.AppointmentHistoryWhereUniqueInput[];
    delete?: Prisma.AppointmentHistoryWhereUniqueInput | Prisma.AppointmentHistoryWhereUniqueInput[];
    connect?: Prisma.AppointmentHistoryWhereUniqueInput | Prisma.AppointmentHistoryWhereUniqueInput[];
    update?: Prisma.AppointmentHistoryUpdateWithWhereUniqueWithoutAppointmentInput | Prisma.AppointmentHistoryUpdateWithWhereUniqueWithoutAppointmentInput[];
    updateMany?: Prisma.AppointmentHistoryUpdateManyWithWhereWithoutAppointmentInput | Prisma.AppointmentHistoryUpdateManyWithWhereWithoutAppointmentInput[];
    deleteMany?: Prisma.AppointmentHistoryScalarWhereInput | Prisma.AppointmentHistoryScalarWhereInput[];
};
export type AppointmentHistoryCreateWithoutAppointmentInput = {
    oldTimeSlotId: number;
    newTimeSlotId: number;
    changedAt?: Date | string;
};
export type AppointmentHistoryUncheckedCreateWithoutAppointmentInput = {
    id?: number;
    oldTimeSlotId: number;
    newTimeSlotId: number;
    changedAt?: Date | string;
};
export type AppointmentHistoryCreateOrConnectWithoutAppointmentInput = {
    where: Prisma.AppointmentHistoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.AppointmentHistoryCreateWithoutAppointmentInput, Prisma.AppointmentHistoryUncheckedCreateWithoutAppointmentInput>;
};
export type AppointmentHistoryCreateManyAppointmentInputEnvelope = {
    data: Prisma.AppointmentHistoryCreateManyAppointmentInput | Prisma.AppointmentHistoryCreateManyAppointmentInput[];
    skipDuplicates?: boolean;
};
export type AppointmentHistoryUpsertWithWhereUniqueWithoutAppointmentInput = {
    where: Prisma.AppointmentHistoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.AppointmentHistoryUpdateWithoutAppointmentInput, Prisma.AppointmentHistoryUncheckedUpdateWithoutAppointmentInput>;
    create: Prisma.XOR<Prisma.AppointmentHistoryCreateWithoutAppointmentInput, Prisma.AppointmentHistoryUncheckedCreateWithoutAppointmentInput>;
};
export type AppointmentHistoryUpdateWithWhereUniqueWithoutAppointmentInput = {
    where: Prisma.AppointmentHistoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.AppointmentHistoryUpdateWithoutAppointmentInput, Prisma.AppointmentHistoryUncheckedUpdateWithoutAppointmentInput>;
};
export type AppointmentHistoryUpdateManyWithWhereWithoutAppointmentInput = {
    where: Prisma.AppointmentHistoryScalarWhereInput;
    data: Prisma.XOR<Prisma.AppointmentHistoryUpdateManyMutationInput, Prisma.AppointmentHistoryUncheckedUpdateManyWithoutAppointmentInput>;
};
export type AppointmentHistoryScalarWhereInput = {
    AND?: Prisma.AppointmentHistoryScalarWhereInput | Prisma.AppointmentHistoryScalarWhereInput[];
    OR?: Prisma.AppointmentHistoryScalarWhereInput[];
    NOT?: Prisma.AppointmentHistoryScalarWhereInput | Prisma.AppointmentHistoryScalarWhereInput[];
    id?: Prisma.IntFilter<"AppointmentHistory"> | number;
    appointmentId?: Prisma.IntFilter<"AppointmentHistory"> | number;
    oldTimeSlotId?: Prisma.IntFilter<"AppointmentHistory"> | number;
    newTimeSlotId?: Prisma.IntFilter<"AppointmentHistory"> | number;
    changedAt?: Prisma.DateTimeFilter<"AppointmentHistory"> | Date | string;
};
export type AppointmentHistoryCreateManyAppointmentInput = {
    id?: number;
    oldTimeSlotId: number;
    newTimeSlotId: number;
    changedAt?: Date | string;
};
export type AppointmentHistoryUpdateWithoutAppointmentInput = {
    oldTimeSlotId?: Prisma.IntFieldUpdateOperationsInput | number;
    newTimeSlotId?: Prisma.IntFieldUpdateOperationsInput | number;
    changedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AppointmentHistoryUncheckedUpdateWithoutAppointmentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    oldTimeSlotId?: Prisma.IntFieldUpdateOperationsInput | number;
    newTimeSlotId?: Prisma.IntFieldUpdateOperationsInput | number;
    changedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AppointmentHistoryUncheckedUpdateManyWithoutAppointmentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    oldTimeSlotId?: Prisma.IntFieldUpdateOperationsInput | number;
    newTimeSlotId?: Prisma.IntFieldUpdateOperationsInput | number;
    changedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AppointmentHistorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    appointmentId?: boolean;
    oldTimeSlotId?: boolean;
    newTimeSlotId?: boolean;
    changedAt?: boolean;
    appointment?: boolean | Prisma.AppointmentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["appointmentHistory"]>;
export type AppointmentHistorySelectScalar = {
    id?: boolean;
    appointmentId?: boolean;
    oldTimeSlotId?: boolean;
    newTimeSlotId?: boolean;
    changedAt?: boolean;
};
export type AppointmentHistoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "appointmentId" | "oldTimeSlotId" | "newTimeSlotId" | "changedAt", ExtArgs["result"]["appointmentHistory"]>;
export type AppointmentHistoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    appointment?: boolean | Prisma.AppointmentDefaultArgs<ExtArgs>;
};
export type $AppointmentHistoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AppointmentHistory";
    objects: {
        appointment: Prisma.$AppointmentPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        appointmentId: number;
        oldTimeSlotId: number;
        newTimeSlotId: number;
        changedAt: Date;
    }, ExtArgs["result"]["appointmentHistory"]>;
    composites: {};
};
export type AppointmentHistoryGetPayload<S extends boolean | null | undefined | AppointmentHistoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AppointmentHistoryPayload, S>;
export type AppointmentHistoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AppointmentHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AppointmentHistoryCountAggregateInputType | true;
};
export interface AppointmentHistoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AppointmentHistory'];
        meta: {
            name: 'AppointmentHistory';
        };
    };
    findUnique<T extends AppointmentHistoryFindUniqueArgs>(args: Prisma.SelectSubset<T, AppointmentHistoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AppointmentHistoryClient<runtime.Types.Result.GetResult<Prisma.$AppointmentHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AppointmentHistoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AppointmentHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AppointmentHistoryClient<runtime.Types.Result.GetResult<Prisma.$AppointmentHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AppointmentHistoryFindFirstArgs>(args?: Prisma.SelectSubset<T, AppointmentHistoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__AppointmentHistoryClient<runtime.Types.Result.GetResult<Prisma.$AppointmentHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AppointmentHistoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AppointmentHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AppointmentHistoryClient<runtime.Types.Result.GetResult<Prisma.$AppointmentHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AppointmentHistoryFindManyArgs>(args?: Prisma.SelectSubset<T, AppointmentHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AppointmentHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AppointmentHistoryCreateArgs>(args: Prisma.SelectSubset<T, AppointmentHistoryCreateArgs<ExtArgs>>): Prisma.Prisma__AppointmentHistoryClient<runtime.Types.Result.GetResult<Prisma.$AppointmentHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AppointmentHistoryCreateManyArgs>(args?: Prisma.SelectSubset<T, AppointmentHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends AppointmentHistoryDeleteArgs>(args: Prisma.SelectSubset<T, AppointmentHistoryDeleteArgs<ExtArgs>>): Prisma.Prisma__AppointmentHistoryClient<runtime.Types.Result.GetResult<Prisma.$AppointmentHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AppointmentHistoryUpdateArgs>(args: Prisma.SelectSubset<T, AppointmentHistoryUpdateArgs<ExtArgs>>): Prisma.Prisma__AppointmentHistoryClient<runtime.Types.Result.GetResult<Prisma.$AppointmentHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AppointmentHistoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, AppointmentHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AppointmentHistoryUpdateManyArgs>(args: Prisma.SelectSubset<T, AppointmentHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends AppointmentHistoryUpsertArgs>(args: Prisma.SelectSubset<T, AppointmentHistoryUpsertArgs<ExtArgs>>): Prisma.Prisma__AppointmentHistoryClient<runtime.Types.Result.GetResult<Prisma.$AppointmentHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AppointmentHistoryCountArgs>(args?: Prisma.Subset<T, AppointmentHistoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AppointmentHistoryCountAggregateOutputType> : number>;
    aggregate<T extends AppointmentHistoryAggregateArgs>(args: Prisma.Subset<T, AppointmentHistoryAggregateArgs>): Prisma.PrismaPromise<GetAppointmentHistoryAggregateType<T>>;
    groupBy<T extends AppointmentHistoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AppointmentHistoryGroupByArgs['orderBy'];
    } : {
        orderBy?: AppointmentHistoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AppointmentHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AppointmentHistoryFieldRefs;
}
export interface Prisma__AppointmentHistoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    appointment<T extends Prisma.AppointmentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppointmentDefaultArgs<ExtArgs>>): Prisma.Prisma__AppointmentClient<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AppointmentHistoryFieldRefs {
    readonly id: Prisma.FieldRef<"AppointmentHistory", 'Int'>;
    readonly appointmentId: Prisma.FieldRef<"AppointmentHistory", 'Int'>;
    readonly oldTimeSlotId: Prisma.FieldRef<"AppointmentHistory", 'Int'>;
    readonly newTimeSlotId: Prisma.FieldRef<"AppointmentHistory", 'Int'>;
    readonly changedAt: Prisma.FieldRef<"AppointmentHistory", 'DateTime'>;
}
export type AppointmentHistoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentHistorySelect<ExtArgs> | null;
    omit?: Prisma.AppointmentHistoryOmit<ExtArgs> | null;
    include?: Prisma.AppointmentHistoryInclude<ExtArgs> | null;
    where: Prisma.AppointmentHistoryWhereUniqueInput;
};
export type AppointmentHistoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentHistorySelect<ExtArgs> | null;
    omit?: Prisma.AppointmentHistoryOmit<ExtArgs> | null;
    include?: Prisma.AppointmentHistoryInclude<ExtArgs> | null;
    where: Prisma.AppointmentHistoryWhereUniqueInput;
};
export type AppointmentHistoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentHistorySelect<ExtArgs> | null;
    omit?: Prisma.AppointmentHistoryOmit<ExtArgs> | null;
    include?: Prisma.AppointmentHistoryInclude<ExtArgs> | null;
    where?: Prisma.AppointmentHistoryWhereInput;
    orderBy?: Prisma.AppointmentHistoryOrderByWithRelationInput | Prisma.AppointmentHistoryOrderByWithRelationInput[];
    cursor?: Prisma.AppointmentHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AppointmentHistoryScalarFieldEnum | Prisma.AppointmentHistoryScalarFieldEnum[];
};
export type AppointmentHistoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentHistorySelect<ExtArgs> | null;
    omit?: Prisma.AppointmentHistoryOmit<ExtArgs> | null;
    include?: Prisma.AppointmentHistoryInclude<ExtArgs> | null;
    where?: Prisma.AppointmentHistoryWhereInput;
    orderBy?: Prisma.AppointmentHistoryOrderByWithRelationInput | Prisma.AppointmentHistoryOrderByWithRelationInput[];
    cursor?: Prisma.AppointmentHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AppointmentHistoryScalarFieldEnum | Prisma.AppointmentHistoryScalarFieldEnum[];
};
export type AppointmentHistoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentHistorySelect<ExtArgs> | null;
    omit?: Prisma.AppointmentHistoryOmit<ExtArgs> | null;
    include?: Prisma.AppointmentHistoryInclude<ExtArgs> | null;
    where?: Prisma.AppointmentHistoryWhereInput;
    orderBy?: Prisma.AppointmentHistoryOrderByWithRelationInput | Prisma.AppointmentHistoryOrderByWithRelationInput[];
    cursor?: Prisma.AppointmentHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AppointmentHistoryScalarFieldEnum | Prisma.AppointmentHistoryScalarFieldEnum[];
};
export type AppointmentHistoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentHistorySelect<ExtArgs> | null;
    omit?: Prisma.AppointmentHistoryOmit<ExtArgs> | null;
    include?: Prisma.AppointmentHistoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AppointmentHistoryCreateInput, Prisma.AppointmentHistoryUncheckedCreateInput>;
};
export type AppointmentHistoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AppointmentHistoryCreateManyInput | Prisma.AppointmentHistoryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AppointmentHistoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentHistorySelect<ExtArgs> | null;
    omit?: Prisma.AppointmentHistoryOmit<ExtArgs> | null;
    include?: Prisma.AppointmentHistoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AppointmentHistoryUpdateInput, Prisma.AppointmentHistoryUncheckedUpdateInput>;
    where: Prisma.AppointmentHistoryWhereUniqueInput;
};
export type AppointmentHistoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AppointmentHistoryUpdateManyMutationInput, Prisma.AppointmentHistoryUncheckedUpdateManyInput>;
    where?: Prisma.AppointmentHistoryWhereInput;
    limit?: number;
};
export type AppointmentHistoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentHistorySelect<ExtArgs> | null;
    omit?: Prisma.AppointmentHistoryOmit<ExtArgs> | null;
    include?: Prisma.AppointmentHistoryInclude<ExtArgs> | null;
    where: Prisma.AppointmentHistoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.AppointmentHistoryCreateInput, Prisma.AppointmentHistoryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AppointmentHistoryUpdateInput, Prisma.AppointmentHistoryUncheckedUpdateInput>;
};
export type AppointmentHistoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentHistorySelect<ExtArgs> | null;
    omit?: Prisma.AppointmentHistoryOmit<ExtArgs> | null;
    include?: Prisma.AppointmentHistoryInclude<ExtArgs> | null;
    where: Prisma.AppointmentHistoryWhereUniqueInput;
};
export type AppointmentHistoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AppointmentHistoryWhereInput;
    limit?: number;
};
export type AppointmentHistoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentHistorySelect<ExtArgs> | null;
    omit?: Prisma.AppointmentHistoryOmit<ExtArgs> | null;
    include?: Prisma.AppointmentHistoryInclude<ExtArgs> | null;
};
export {};
