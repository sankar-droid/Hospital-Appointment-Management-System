import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TimeSlotModel = runtime.Types.Result.DefaultSelection<Prisma.$TimeSlotPayload>;
export type AggregateTimeSlot = {
    _count: TimeSlotCountAggregateOutputType | null;
    _avg: TimeSlotAvgAggregateOutputType | null;
    _sum: TimeSlotSumAggregateOutputType | null;
    _min: TimeSlotMinAggregateOutputType | null;
    _max: TimeSlotMaxAggregateOutputType | null;
};
export type TimeSlotAvgAggregateOutputType = {
    id: number | null;
    officeId: number | null;
};
export type TimeSlotSumAggregateOutputType = {
    id: number | null;
    officeId: number | null;
};
export type TimeSlotMinAggregateOutputType = {
    id: number | null;
    officeId: number | null;
    startTime: Date | null;
    endTime: Date | null;
    isBooked: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TimeSlotMaxAggregateOutputType = {
    id: number | null;
    officeId: number | null;
    startTime: Date | null;
    endTime: Date | null;
    isBooked: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TimeSlotCountAggregateOutputType = {
    id: number;
    officeId: number;
    startTime: number;
    endTime: number;
    isBooked: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TimeSlotAvgAggregateInputType = {
    id?: true;
    officeId?: true;
};
export type TimeSlotSumAggregateInputType = {
    id?: true;
    officeId?: true;
};
export type TimeSlotMinAggregateInputType = {
    id?: true;
    officeId?: true;
    startTime?: true;
    endTime?: true;
    isBooked?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TimeSlotMaxAggregateInputType = {
    id?: true;
    officeId?: true;
    startTime?: true;
    endTime?: true;
    isBooked?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TimeSlotCountAggregateInputType = {
    id?: true;
    officeId?: true;
    startTime?: true;
    endTime?: true;
    isBooked?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TimeSlotAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TimeSlotWhereInput;
    orderBy?: Prisma.TimeSlotOrderByWithRelationInput | Prisma.TimeSlotOrderByWithRelationInput[];
    cursor?: Prisma.TimeSlotWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TimeSlotCountAggregateInputType;
    _avg?: TimeSlotAvgAggregateInputType;
    _sum?: TimeSlotSumAggregateInputType;
    _min?: TimeSlotMinAggregateInputType;
    _max?: TimeSlotMaxAggregateInputType;
};
export type GetTimeSlotAggregateType<T extends TimeSlotAggregateArgs> = {
    [P in keyof T & keyof AggregateTimeSlot]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTimeSlot[P]> : Prisma.GetScalarType<T[P], AggregateTimeSlot[P]>;
};
export type TimeSlotGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TimeSlotWhereInput;
    orderBy?: Prisma.TimeSlotOrderByWithAggregationInput | Prisma.TimeSlotOrderByWithAggregationInput[];
    by: Prisma.TimeSlotScalarFieldEnum[] | Prisma.TimeSlotScalarFieldEnum;
    having?: Prisma.TimeSlotScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TimeSlotCountAggregateInputType | true;
    _avg?: TimeSlotAvgAggregateInputType;
    _sum?: TimeSlotSumAggregateInputType;
    _min?: TimeSlotMinAggregateInputType;
    _max?: TimeSlotMaxAggregateInputType;
};
export type TimeSlotGroupByOutputType = {
    id: number;
    officeId: number;
    startTime: Date;
    endTime: Date;
    isBooked: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: TimeSlotCountAggregateOutputType | null;
    _avg: TimeSlotAvgAggregateOutputType | null;
    _sum: TimeSlotSumAggregateOutputType | null;
    _min: TimeSlotMinAggregateOutputType | null;
    _max: TimeSlotMaxAggregateOutputType | null;
};
type GetTimeSlotGroupByPayload<T extends TimeSlotGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TimeSlotGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TimeSlotGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TimeSlotGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TimeSlotGroupByOutputType[P]>;
}>>;
export type TimeSlotWhereInput = {
    AND?: Prisma.TimeSlotWhereInput | Prisma.TimeSlotWhereInput[];
    OR?: Prisma.TimeSlotWhereInput[];
    NOT?: Prisma.TimeSlotWhereInput | Prisma.TimeSlotWhereInput[];
    id?: Prisma.IntFilter<"TimeSlot"> | number;
    officeId?: Prisma.IntFilter<"TimeSlot"> | number;
    startTime?: Prisma.DateTimeFilter<"TimeSlot"> | Date | string;
    endTime?: Prisma.DateTimeFilter<"TimeSlot"> | Date | string;
    isBooked?: Prisma.BoolFilter<"TimeSlot"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"TimeSlot"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TimeSlot"> | Date | string;
    office?: Prisma.XOR<Prisma.OfficeScalarRelationFilter, Prisma.OfficeWhereInput>;
    appointments?: Prisma.AppointmentListRelationFilter;
};
export type TimeSlotOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    officeId?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    isBooked?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    office?: Prisma.OfficeOrderByWithRelationInput;
    appointments?: Prisma.AppointmentOrderByRelationAggregateInput;
};
export type TimeSlotWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.TimeSlotWhereInput | Prisma.TimeSlotWhereInput[];
    OR?: Prisma.TimeSlotWhereInput[];
    NOT?: Prisma.TimeSlotWhereInput | Prisma.TimeSlotWhereInput[];
    officeId?: Prisma.IntFilter<"TimeSlot"> | number;
    startTime?: Prisma.DateTimeFilter<"TimeSlot"> | Date | string;
    endTime?: Prisma.DateTimeFilter<"TimeSlot"> | Date | string;
    isBooked?: Prisma.BoolFilter<"TimeSlot"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"TimeSlot"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TimeSlot"> | Date | string;
    office?: Prisma.XOR<Prisma.OfficeScalarRelationFilter, Prisma.OfficeWhereInput>;
    appointments?: Prisma.AppointmentListRelationFilter;
}, "id">;
export type TimeSlotOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    officeId?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    isBooked?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TimeSlotCountOrderByAggregateInput;
    _avg?: Prisma.TimeSlotAvgOrderByAggregateInput;
    _max?: Prisma.TimeSlotMaxOrderByAggregateInput;
    _min?: Prisma.TimeSlotMinOrderByAggregateInput;
    _sum?: Prisma.TimeSlotSumOrderByAggregateInput;
};
export type TimeSlotScalarWhereWithAggregatesInput = {
    AND?: Prisma.TimeSlotScalarWhereWithAggregatesInput | Prisma.TimeSlotScalarWhereWithAggregatesInput[];
    OR?: Prisma.TimeSlotScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TimeSlotScalarWhereWithAggregatesInput | Prisma.TimeSlotScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"TimeSlot"> | number;
    officeId?: Prisma.IntWithAggregatesFilter<"TimeSlot"> | number;
    startTime?: Prisma.DateTimeWithAggregatesFilter<"TimeSlot"> | Date | string;
    endTime?: Prisma.DateTimeWithAggregatesFilter<"TimeSlot"> | Date | string;
    isBooked?: Prisma.BoolWithAggregatesFilter<"TimeSlot"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"TimeSlot"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"TimeSlot"> | Date | string;
};
export type TimeSlotCreateInput = {
    startTime: Date | string;
    endTime: Date | string;
    isBooked?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    office: Prisma.OfficeCreateNestedOneWithoutTimeSlotsInput;
    appointments?: Prisma.AppointmentCreateNestedManyWithoutTimeSlotInput;
};
export type TimeSlotUncheckedCreateInput = {
    id?: number;
    officeId: number;
    startTime: Date | string;
    endTime: Date | string;
    isBooked?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    appointments?: Prisma.AppointmentUncheckedCreateNestedManyWithoutTimeSlotInput;
};
export type TimeSlotUpdateInput = {
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isBooked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    office?: Prisma.OfficeUpdateOneRequiredWithoutTimeSlotsNestedInput;
    appointments?: Prisma.AppointmentUpdateManyWithoutTimeSlotNestedInput;
};
export type TimeSlotUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    officeId?: Prisma.IntFieldUpdateOperationsInput | number;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isBooked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appointments?: Prisma.AppointmentUncheckedUpdateManyWithoutTimeSlotNestedInput;
};
export type TimeSlotCreateManyInput = {
    id?: number;
    officeId: number;
    startTime: Date | string;
    endTime: Date | string;
    isBooked?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TimeSlotUpdateManyMutationInput = {
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isBooked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TimeSlotUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    officeId?: Prisma.IntFieldUpdateOperationsInput | number;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isBooked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TimeSlotListRelationFilter = {
    every?: Prisma.TimeSlotWhereInput;
    some?: Prisma.TimeSlotWhereInput;
    none?: Prisma.TimeSlotWhereInput;
};
export type TimeSlotOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TimeSlotCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    officeId?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    isBooked?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TimeSlotAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    officeId?: Prisma.SortOrder;
};
export type TimeSlotMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    officeId?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    isBooked?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TimeSlotMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    officeId?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    isBooked?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TimeSlotSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    officeId?: Prisma.SortOrder;
};
export type TimeSlotScalarRelationFilter = {
    is?: Prisma.TimeSlotWhereInput;
    isNot?: Prisma.TimeSlotWhereInput;
};
export type TimeSlotCreateNestedManyWithoutOfficeInput = {
    create?: Prisma.XOR<Prisma.TimeSlotCreateWithoutOfficeInput, Prisma.TimeSlotUncheckedCreateWithoutOfficeInput> | Prisma.TimeSlotCreateWithoutOfficeInput[] | Prisma.TimeSlotUncheckedCreateWithoutOfficeInput[];
    connectOrCreate?: Prisma.TimeSlotCreateOrConnectWithoutOfficeInput | Prisma.TimeSlotCreateOrConnectWithoutOfficeInput[];
    createMany?: Prisma.TimeSlotCreateManyOfficeInputEnvelope;
    connect?: Prisma.TimeSlotWhereUniqueInput | Prisma.TimeSlotWhereUniqueInput[];
};
export type TimeSlotUncheckedCreateNestedManyWithoutOfficeInput = {
    create?: Prisma.XOR<Prisma.TimeSlotCreateWithoutOfficeInput, Prisma.TimeSlotUncheckedCreateWithoutOfficeInput> | Prisma.TimeSlotCreateWithoutOfficeInput[] | Prisma.TimeSlotUncheckedCreateWithoutOfficeInput[];
    connectOrCreate?: Prisma.TimeSlotCreateOrConnectWithoutOfficeInput | Prisma.TimeSlotCreateOrConnectWithoutOfficeInput[];
    createMany?: Prisma.TimeSlotCreateManyOfficeInputEnvelope;
    connect?: Prisma.TimeSlotWhereUniqueInput | Prisma.TimeSlotWhereUniqueInput[];
};
export type TimeSlotUpdateManyWithoutOfficeNestedInput = {
    create?: Prisma.XOR<Prisma.TimeSlotCreateWithoutOfficeInput, Prisma.TimeSlotUncheckedCreateWithoutOfficeInput> | Prisma.TimeSlotCreateWithoutOfficeInput[] | Prisma.TimeSlotUncheckedCreateWithoutOfficeInput[];
    connectOrCreate?: Prisma.TimeSlotCreateOrConnectWithoutOfficeInput | Prisma.TimeSlotCreateOrConnectWithoutOfficeInput[];
    upsert?: Prisma.TimeSlotUpsertWithWhereUniqueWithoutOfficeInput | Prisma.TimeSlotUpsertWithWhereUniqueWithoutOfficeInput[];
    createMany?: Prisma.TimeSlotCreateManyOfficeInputEnvelope;
    set?: Prisma.TimeSlotWhereUniqueInput | Prisma.TimeSlotWhereUniqueInput[];
    disconnect?: Prisma.TimeSlotWhereUniqueInput | Prisma.TimeSlotWhereUniqueInput[];
    delete?: Prisma.TimeSlotWhereUniqueInput | Prisma.TimeSlotWhereUniqueInput[];
    connect?: Prisma.TimeSlotWhereUniqueInput | Prisma.TimeSlotWhereUniqueInput[];
    update?: Prisma.TimeSlotUpdateWithWhereUniqueWithoutOfficeInput | Prisma.TimeSlotUpdateWithWhereUniqueWithoutOfficeInput[];
    updateMany?: Prisma.TimeSlotUpdateManyWithWhereWithoutOfficeInput | Prisma.TimeSlotUpdateManyWithWhereWithoutOfficeInput[];
    deleteMany?: Prisma.TimeSlotScalarWhereInput | Prisma.TimeSlotScalarWhereInput[];
};
export type TimeSlotUncheckedUpdateManyWithoutOfficeNestedInput = {
    create?: Prisma.XOR<Prisma.TimeSlotCreateWithoutOfficeInput, Prisma.TimeSlotUncheckedCreateWithoutOfficeInput> | Prisma.TimeSlotCreateWithoutOfficeInput[] | Prisma.TimeSlotUncheckedCreateWithoutOfficeInput[];
    connectOrCreate?: Prisma.TimeSlotCreateOrConnectWithoutOfficeInput | Prisma.TimeSlotCreateOrConnectWithoutOfficeInput[];
    upsert?: Prisma.TimeSlotUpsertWithWhereUniqueWithoutOfficeInput | Prisma.TimeSlotUpsertWithWhereUniqueWithoutOfficeInput[];
    createMany?: Prisma.TimeSlotCreateManyOfficeInputEnvelope;
    set?: Prisma.TimeSlotWhereUniqueInput | Prisma.TimeSlotWhereUniqueInput[];
    disconnect?: Prisma.TimeSlotWhereUniqueInput | Prisma.TimeSlotWhereUniqueInput[];
    delete?: Prisma.TimeSlotWhereUniqueInput | Prisma.TimeSlotWhereUniqueInput[];
    connect?: Prisma.TimeSlotWhereUniqueInput | Prisma.TimeSlotWhereUniqueInput[];
    update?: Prisma.TimeSlotUpdateWithWhereUniqueWithoutOfficeInput | Prisma.TimeSlotUpdateWithWhereUniqueWithoutOfficeInput[];
    updateMany?: Prisma.TimeSlotUpdateManyWithWhereWithoutOfficeInput | Prisma.TimeSlotUpdateManyWithWhereWithoutOfficeInput[];
    deleteMany?: Prisma.TimeSlotScalarWhereInput | Prisma.TimeSlotScalarWhereInput[];
};
export type TimeSlotCreateNestedOneWithoutAppointmentsInput = {
    create?: Prisma.XOR<Prisma.TimeSlotCreateWithoutAppointmentsInput, Prisma.TimeSlotUncheckedCreateWithoutAppointmentsInput>;
    connectOrCreate?: Prisma.TimeSlotCreateOrConnectWithoutAppointmentsInput;
    connect?: Prisma.TimeSlotWhereUniqueInput;
};
export type TimeSlotUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: Prisma.XOR<Prisma.TimeSlotCreateWithoutAppointmentsInput, Prisma.TimeSlotUncheckedCreateWithoutAppointmentsInput>;
    connectOrCreate?: Prisma.TimeSlotCreateOrConnectWithoutAppointmentsInput;
    upsert?: Prisma.TimeSlotUpsertWithoutAppointmentsInput;
    connect?: Prisma.TimeSlotWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TimeSlotUpdateToOneWithWhereWithoutAppointmentsInput, Prisma.TimeSlotUpdateWithoutAppointmentsInput>, Prisma.TimeSlotUncheckedUpdateWithoutAppointmentsInput>;
};
export type TimeSlotCreateWithoutOfficeInput = {
    startTime: Date | string;
    endTime: Date | string;
    isBooked?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    appointments?: Prisma.AppointmentCreateNestedManyWithoutTimeSlotInput;
};
export type TimeSlotUncheckedCreateWithoutOfficeInput = {
    id?: number;
    startTime: Date | string;
    endTime: Date | string;
    isBooked?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    appointments?: Prisma.AppointmentUncheckedCreateNestedManyWithoutTimeSlotInput;
};
export type TimeSlotCreateOrConnectWithoutOfficeInput = {
    where: Prisma.TimeSlotWhereUniqueInput;
    create: Prisma.XOR<Prisma.TimeSlotCreateWithoutOfficeInput, Prisma.TimeSlotUncheckedCreateWithoutOfficeInput>;
};
export type TimeSlotCreateManyOfficeInputEnvelope = {
    data: Prisma.TimeSlotCreateManyOfficeInput | Prisma.TimeSlotCreateManyOfficeInput[];
    skipDuplicates?: boolean;
};
export type TimeSlotUpsertWithWhereUniqueWithoutOfficeInput = {
    where: Prisma.TimeSlotWhereUniqueInput;
    update: Prisma.XOR<Prisma.TimeSlotUpdateWithoutOfficeInput, Prisma.TimeSlotUncheckedUpdateWithoutOfficeInput>;
    create: Prisma.XOR<Prisma.TimeSlotCreateWithoutOfficeInput, Prisma.TimeSlotUncheckedCreateWithoutOfficeInput>;
};
export type TimeSlotUpdateWithWhereUniqueWithoutOfficeInput = {
    where: Prisma.TimeSlotWhereUniqueInput;
    data: Prisma.XOR<Prisma.TimeSlotUpdateWithoutOfficeInput, Prisma.TimeSlotUncheckedUpdateWithoutOfficeInput>;
};
export type TimeSlotUpdateManyWithWhereWithoutOfficeInput = {
    where: Prisma.TimeSlotScalarWhereInput;
    data: Prisma.XOR<Prisma.TimeSlotUpdateManyMutationInput, Prisma.TimeSlotUncheckedUpdateManyWithoutOfficeInput>;
};
export type TimeSlotScalarWhereInput = {
    AND?: Prisma.TimeSlotScalarWhereInput | Prisma.TimeSlotScalarWhereInput[];
    OR?: Prisma.TimeSlotScalarWhereInput[];
    NOT?: Prisma.TimeSlotScalarWhereInput | Prisma.TimeSlotScalarWhereInput[];
    id?: Prisma.IntFilter<"TimeSlot"> | number;
    officeId?: Prisma.IntFilter<"TimeSlot"> | number;
    startTime?: Prisma.DateTimeFilter<"TimeSlot"> | Date | string;
    endTime?: Prisma.DateTimeFilter<"TimeSlot"> | Date | string;
    isBooked?: Prisma.BoolFilter<"TimeSlot"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"TimeSlot"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TimeSlot"> | Date | string;
};
export type TimeSlotCreateWithoutAppointmentsInput = {
    startTime: Date | string;
    endTime: Date | string;
    isBooked?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    office: Prisma.OfficeCreateNestedOneWithoutTimeSlotsInput;
};
export type TimeSlotUncheckedCreateWithoutAppointmentsInput = {
    id?: number;
    officeId: number;
    startTime: Date | string;
    endTime: Date | string;
    isBooked?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TimeSlotCreateOrConnectWithoutAppointmentsInput = {
    where: Prisma.TimeSlotWhereUniqueInput;
    create: Prisma.XOR<Prisma.TimeSlotCreateWithoutAppointmentsInput, Prisma.TimeSlotUncheckedCreateWithoutAppointmentsInput>;
};
export type TimeSlotUpsertWithoutAppointmentsInput = {
    update: Prisma.XOR<Prisma.TimeSlotUpdateWithoutAppointmentsInput, Prisma.TimeSlotUncheckedUpdateWithoutAppointmentsInput>;
    create: Prisma.XOR<Prisma.TimeSlotCreateWithoutAppointmentsInput, Prisma.TimeSlotUncheckedCreateWithoutAppointmentsInput>;
    where?: Prisma.TimeSlotWhereInput;
};
export type TimeSlotUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: Prisma.TimeSlotWhereInput;
    data: Prisma.XOR<Prisma.TimeSlotUpdateWithoutAppointmentsInput, Prisma.TimeSlotUncheckedUpdateWithoutAppointmentsInput>;
};
export type TimeSlotUpdateWithoutAppointmentsInput = {
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isBooked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    office?: Prisma.OfficeUpdateOneRequiredWithoutTimeSlotsNestedInput;
};
export type TimeSlotUncheckedUpdateWithoutAppointmentsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    officeId?: Prisma.IntFieldUpdateOperationsInput | number;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isBooked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TimeSlotCreateManyOfficeInput = {
    id?: number;
    startTime: Date | string;
    endTime: Date | string;
    isBooked?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TimeSlotUpdateWithoutOfficeInput = {
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isBooked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appointments?: Prisma.AppointmentUpdateManyWithoutTimeSlotNestedInput;
};
export type TimeSlotUncheckedUpdateWithoutOfficeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isBooked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appointments?: Prisma.AppointmentUncheckedUpdateManyWithoutTimeSlotNestedInput;
};
export type TimeSlotUncheckedUpdateManyWithoutOfficeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isBooked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TimeSlotCountOutputType = {
    appointments: number;
};
export type TimeSlotCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    appointments?: boolean | TimeSlotCountOutputTypeCountAppointmentsArgs;
};
export type TimeSlotCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TimeSlotCountOutputTypeSelect<ExtArgs> | null;
};
export type TimeSlotCountOutputTypeCountAppointmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AppointmentWhereInput;
};
export type TimeSlotSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    officeId?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    isBooked?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    office?: boolean | Prisma.OfficeDefaultArgs<ExtArgs>;
    appointments?: boolean | Prisma.TimeSlot$appointmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.TimeSlotCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["timeSlot"]>;
export type TimeSlotSelectScalar = {
    id?: boolean;
    officeId?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    isBooked?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TimeSlotOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "officeId" | "startTime" | "endTime" | "isBooked" | "createdAt" | "updatedAt", ExtArgs["result"]["timeSlot"]>;
export type TimeSlotInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    office?: boolean | Prisma.OfficeDefaultArgs<ExtArgs>;
    appointments?: boolean | Prisma.TimeSlot$appointmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.TimeSlotCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $TimeSlotPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TimeSlot";
    objects: {
        office: Prisma.$OfficePayload<ExtArgs>;
        appointments: Prisma.$AppointmentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        officeId: number;
        startTime: Date;
        endTime: Date;
        isBooked: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["timeSlot"]>;
    composites: {};
};
export type TimeSlotGetPayload<S extends boolean | null | undefined | TimeSlotDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TimeSlotPayload, S>;
export type TimeSlotCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TimeSlotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TimeSlotCountAggregateInputType | true;
};
export interface TimeSlotDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TimeSlot'];
        meta: {
            name: 'TimeSlot';
        };
    };
    findUnique<T extends TimeSlotFindUniqueArgs>(args: Prisma.SelectSubset<T, TimeSlotFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TimeSlotClient<runtime.Types.Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TimeSlotFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TimeSlotFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TimeSlotClient<runtime.Types.Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TimeSlotFindFirstArgs>(args?: Prisma.SelectSubset<T, TimeSlotFindFirstArgs<ExtArgs>>): Prisma.Prisma__TimeSlotClient<runtime.Types.Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TimeSlotFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TimeSlotFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TimeSlotClient<runtime.Types.Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TimeSlotFindManyArgs>(args?: Prisma.SelectSubset<T, TimeSlotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TimeSlotCreateArgs>(args: Prisma.SelectSubset<T, TimeSlotCreateArgs<ExtArgs>>): Prisma.Prisma__TimeSlotClient<runtime.Types.Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TimeSlotCreateManyArgs>(args?: Prisma.SelectSubset<T, TimeSlotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends TimeSlotDeleteArgs>(args: Prisma.SelectSubset<T, TimeSlotDeleteArgs<ExtArgs>>): Prisma.Prisma__TimeSlotClient<runtime.Types.Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TimeSlotUpdateArgs>(args: Prisma.SelectSubset<T, TimeSlotUpdateArgs<ExtArgs>>): Prisma.Prisma__TimeSlotClient<runtime.Types.Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TimeSlotDeleteManyArgs>(args?: Prisma.SelectSubset<T, TimeSlotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TimeSlotUpdateManyArgs>(args: Prisma.SelectSubset<T, TimeSlotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends TimeSlotUpsertArgs>(args: Prisma.SelectSubset<T, TimeSlotUpsertArgs<ExtArgs>>): Prisma.Prisma__TimeSlotClient<runtime.Types.Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TimeSlotCountArgs>(args?: Prisma.Subset<T, TimeSlotCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TimeSlotCountAggregateOutputType> : number>;
    aggregate<T extends TimeSlotAggregateArgs>(args: Prisma.Subset<T, TimeSlotAggregateArgs>): Prisma.PrismaPromise<GetTimeSlotAggregateType<T>>;
    groupBy<T extends TimeSlotGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TimeSlotGroupByArgs['orderBy'];
    } : {
        orderBy?: TimeSlotGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TimeSlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimeSlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TimeSlotFieldRefs;
}
export interface Prisma__TimeSlotClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    office<T extends Prisma.OfficeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OfficeDefaultArgs<ExtArgs>>): Prisma.Prisma__OfficeClient<runtime.Types.Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    appointments<T extends Prisma.TimeSlot$appointmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TimeSlot$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TimeSlotFieldRefs {
    readonly id: Prisma.FieldRef<"TimeSlot", 'Int'>;
    readonly officeId: Prisma.FieldRef<"TimeSlot", 'Int'>;
    readonly startTime: Prisma.FieldRef<"TimeSlot", 'DateTime'>;
    readonly endTime: Prisma.FieldRef<"TimeSlot", 'DateTime'>;
    readonly isBooked: Prisma.FieldRef<"TimeSlot", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"TimeSlot", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"TimeSlot", 'DateTime'>;
}
export type TimeSlotFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TimeSlotSelect<ExtArgs> | null;
    omit?: Prisma.TimeSlotOmit<ExtArgs> | null;
    include?: Prisma.TimeSlotInclude<ExtArgs> | null;
    where: Prisma.TimeSlotWhereUniqueInput;
};
export type TimeSlotFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TimeSlotSelect<ExtArgs> | null;
    omit?: Prisma.TimeSlotOmit<ExtArgs> | null;
    include?: Prisma.TimeSlotInclude<ExtArgs> | null;
    where: Prisma.TimeSlotWhereUniqueInput;
};
export type TimeSlotFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TimeSlotFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TimeSlotFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TimeSlotCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TimeSlotSelect<ExtArgs> | null;
    omit?: Prisma.TimeSlotOmit<ExtArgs> | null;
    include?: Prisma.TimeSlotInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TimeSlotCreateInput, Prisma.TimeSlotUncheckedCreateInput>;
};
export type TimeSlotCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TimeSlotCreateManyInput | Prisma.TimeSlotCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TimeSlotUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TimeSlotSelect<ExtArgs> | null;
    omit?: Prisma.TimeSlotOmit<ExtArgs> | null;
    include?: Prisma.TimeSlotInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TimeSlotUpdateInput, Prisma.TimeSlotUncheckedUpdateInput>;
    where: Prisma.TimeSlotWhereUniqueInput;
};
export type TimeSlotUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TimeSlotUpdateManyMutationInput, Prisma.TimeSlotUncheckedUpdateManyInput>;
    where?: Prisma.TimeSlotWhereInput;
    limit?: number;
};
export type TimeSlotUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TimeSlotSelect<ExtArgs> | null;
    omit?: Prisma.TimeSlotOmit<ExtArgs> | null;
    include?: Prisma.TimeSlotInclude<ExtArgs> | null;
    where: Prisma.TimeSlotWhereUniqueInput;
    create: Prisma.XOR<Prisma.TimeSlotCreateInput, Prisma.TimeSlotUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TimeSlotUpdateInput, Prisma.TimeSlotUncheckedUpdateInput>;
};
export type TimeSlotDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TimeSlotSelect<ExtArgs> | null;
    omit?: Prisma.TimeSlotOmit<ExtArgs> | null;
    include?: Prisma.TimeSlotInclude<ExtArgs> | null;
    where: Prisma.TimeSlotWhereUniqueInput;
};
export type TimeSlotDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TimeSlotWhereInput;
    limit?: number;
};
export type TimeSlot$appointmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TimeSlotDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TimeSlotSelect<ExtArgs> | null;
    omit?: Prisma.TimeSlotOmit<ExtArgs> | null;
    include?: Prisma.TimeSlotInclude<ExtArgs> | null;
};
export {};
