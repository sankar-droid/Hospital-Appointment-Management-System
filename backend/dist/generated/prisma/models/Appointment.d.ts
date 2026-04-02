import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AppointmentModel = runtime.Types.Result.DefaultSelection<Prisma.$AppointmentPayload>;
export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null;
    _avg: AppointmentAvgAggregateOutputType | null;
    _sum: AppointmentSumAggregateOutputType | null;
    _min: AppointmentMinAggregateOutputType | null;
    _max: AppointmentMaxAggregateOutputType | null;
};
export type AppointmentAvgAggregateOutputType = {
    id: number | null;
    userAccountId: number | null;
    officeId: number | null;
    timeSlotId: number | null;
    durationInMinutes: number | null;
    appointmentStatusId: number | null;
};
export type AppointmentSumAggregateOutputType = {
    id: number | null;
    userAccountId: number | null;
    officeId: number | null;
    timeSlotId: number | null;
    durationInMinutes: number | null;
    appointmentStatusId: number | null;
};
export type AppointmentMinAggregateOutputType = {
    id: number | null;
    userAccountId: number | null;
    officeId: number | null;
    timeSlotId: number | null;
    probableStartTime: Date | null;
    actualEndTime: Date | null;
    durationInMinutes: number | null;
    appointmentStatusId: number | null;
    appointmentTakenDate: Date | null;
    cancellationReason: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AppointmentMaxAggregateOutputType = {
    id: number | null;
    userAccountId: number | null;
    officeId: number | null;
    timeSlotId: number | null;
    probableStartTime: Date | null;
    actualEndTime: Date | null;
    durationInMinutes: number | null;
    appointmentStatusId: number | null;
    appointmentTakenDate: Date | null;
    cancellationReason: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AppointmentCountAggregateOutputType = {
    id: number;
    userAccountId: number;
    officeId: number;
    timeSlotId: number;
    probableStartTime: number;
    actualEndTime: number;
    durationInMinutes: number;
    appointmentStatusId: number;
    appointmentTakenDate: number;
    cancellationReason: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AppointmentAvgAggregateInputType = {
    id?: true;
    userAccountId?: true;
    officeId?: true;
    timeSlotId?: true;
    durationInMinutes?: true;
    appointmentStatusId?: true;
};
export type AppointmentSumAggregateInputType = {
    id?: true;
    userAccountId?: true;
    officeId?: true;
    timeSlotId?: true;
    durationInMinutes?: true;
    appointmentStatusId?: true;
};
export type AppointmentMinAggregateInputType = {
    id?: true;
    userAccountId?: true;
    officeId?: true;
    timeSlotId?: true;
    probableStartTime?: true;
    actualEndTime?: true;
    durationInMinutes?: true;
    appointmentStatusId?: true;
    appointmentTakenDate?: true;
    cancellationReason?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AppointmentMaxAggregateInputType = {
    id?: true;
    userAccountId?: true;
    officeId?: true;
    timeSlotId?: true;
    probableStartTime?: true;
    actualEndTime?: true;
    durationInMinutes?: true;
    appointmentStatusId?: true;
    appointmentTakenDate?: true;
    cancellationReason?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AppointmentCountAggregateInputType = {
    id?: true;
    userAccountId?: true;
    officeId?: true;
    timeSlotId?: true;
    probableStartTime?: true;
    actualEndTime?: true;
    durationInMinutes?: true;
    appointmentStatusId?: true;
    appointmentTakenDate?: true;
    cancellationReason?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AppointmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AppointmentWhereInput;
    orderBy?: Prisma.AppointmentOrderByWithRelationInput | Prisma.AppointmentOrderByWithRelationInput[];
    cursor?: Prisma.AppointmentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AppointmentCountAggregateInputType;
    _avg?: AppointmentAvgAggregateInputType;
    _sum?: AppointmentSumAggregateInputType;
    _min?: AppointmentMinAggregateInputType;
    _max?: AppointmentMaxAggregateInputType;
};
export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
    [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAppointment[P]> : Prisma.GetScalarType<T[P], AggregateAppointment[P]>;
};
export type AppointmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AppointmentWhereInput;
    orderBy?: Prisma.AppointmentOrderByWithAggregationInput | Prisma.AppointmentOrderByWithAggregationInput[];
    by: Prisma.AppointmentScalarFieldEnum[] | Prisma.AppointmentScalarFieldEnum;
    having?: Prisma.AppointmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AppointmentCountAggregateInputType | true;
    _avg?: AppointmentAvgAggregateInputType;
    _sum?: AppointmentSumAggregateInputType;
    _min?: AppointmentMinAggregateInputType;
    _max?: AppointmentMaxAggregateInputType;
};
export type AppointmentGroupByOutputType = {
    id: number;
    userAccountId: number;
    officeId: number;
    timeSlotId: number;
    probableStartTime: Date;
    actualEndTime: Date | null;
    durationInMinutes: number;
    appointmentStatusId: number;
    appointmentTakenDate: Date;
    cancellationReason: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: AppointmentCountAggregateOutputType | null;
    _avg: AppointmentAvgAggregateOutputType | null;
    _sum: AppointmentSumAggregateOutputType | null;
    _min: AppointmentMinAggregateOutputType | null;
    _max: AppointmentMaxAggregateOutputType | null;
};
type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AppointmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AppointmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AppointmentGroupByOutputType[P]>;
}>>;
export type AppointmentWhereInput = {
    AND?: Prisma.AppointmentWhereInput | Prisma.AppointmentWhereInput[];
    OR?: Prisma.AppointmentWhereInput[];
    NOT?: Prisma.AppointmentWhereInput | Prisma.AppointmentWhereInput[];
    id?: Prisma.IntFilter<"Appointment"> | number;
    userAccountId?: Prisma.IntFilter<"Appointment"> | number;
    officeId?: Prisma.IntFilter<"Appointment"> | number;
    timeSlotId?: Prisma.IntFilter<"Appointment"> | number;
    probableStartTime?: Prisma.DateTimeFilter<"Appointment"> | Date | string;
    actualEndTime?: Prisma.DateTimeNullableFilter<"Appointment"> | Date | string | null;
    durationInMinutes?: Prisma.IntFilter<"Appointment"> | number;
    appointmentStatusId?: Prisma.IntFilter<"Appointment"> | number;
    appointmentTakenDate?: Prisma.DateTimeFilter<"Appointment"> | Date | string;
    cancellationReason?: Prisma.StringNullableFilter<"Appointment"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Appointment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Appointment"> | Date | string;
    client?: Prisma.XOR<Prisma.ClientAccountScalarRelationFilter, Prisma.ClientAccountWhereInput>;
    office?: Prisma.XOR<Prisma.OfficeScalarRelationFilter, Prisma.OfficeWhereInput>;
    timeSlot?: Prisma.XOR<Prisma.TimeSlotScalarRelationFilter, Prisma.TimeSlotWhereInput>;
    status?: Prisma.XOR<Prisma.AppointmentStatusScalarRelationFilter, Prisma.AppointmentStatusWhereInput>;
    history?: Prisma.AppointmentHistoryListRelationFilter;
};
export type AppointmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userAccountId?: Prisma.SortOrder;
    officeId?: Prisma.SortOrder;
    timeSlotId?: Prisma.SortOrder;
    probableStartTime?: Prisma.SortOrder;
    actualEndTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    durationInMinutes?: Prisma.SortOrder;
    appointmentStatusId?: Prisma.SortOrder;
    appointmentTakenDate?: Prisma.SortOrder;
    cancellationReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    client?: Prisma.ClientAccountOrderByWithRelationInput;
    office?: Prisma.OfficeOrderByWithRelationInput;
    timeSlot?: Prisma.TimeSlotOrderByWithRelationInput;
    status?: Prisma.AppointmentStatusOrderByWithRelationInput;
    history?: Prisma.AppointmentHistoryOrderByRelationAggregateInput;
    _relevance?: Prisma.AppointmentOrderByRelevanceInput;
};
export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.AppointmentWhereInput | Prisma.AppointmentWhereInput[];
    OR?: Prisma.AppointmentWhereInput[];
    NOT?: Prisma.AppointmentWhereInput | Prisma.AppointmentWhereInput[];
    userAccountId?: Prisma.IntFilter<"Appointment"> | number;
    officeId?: Prisma.IntFilter<"Appointment"> | number;
    timeSlotId?: Prisma.IntFilter<"Appointment"> | number;
    probableStartTime?: Prisma.DateTimeFilter<"Appointment"> | Date | string;
    actualEndTime?: Prisma.DateTimeNullableFilter<"Appointment"> | Date | string | null;
    durationInMinutes?: Prisma.IntFilter<"Appointment"> | number;
    appointmentStatusId?: Prisma.IntFilter<"Appointment"> | number;
    appointmentTakenDate?: Prisma.DateTimeFilter<"Appointment"> | Date | string;
    cancellationReason?: Prisma.StringNullableFilter<"Appointment"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Appointment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Appointment"> | Date | string;
    client?: Prisma.XOR<Prisma.ClientAccountScalarRelationFilter, Prisma.ClientAccountWhereInput>;
    office?: Prisma.XOR<Prisma.OfficeScalarRelationFilter, Prisma.OfficeWhereInput>;
    timeSlot?: Prisma.XOR<Prisma.TimeSlotScalarRelationFilter, Prisma.TimeSlotWhereInput>;
    status?: Prisma.XOR<Prisma.AppointmentStatusScalarRelationFilter, Prisma.AppointmentStatusWhereInput>;
    history?: Prisma.AppointmentHistoryListRelationFilter;
}, "id">;
export type AppointmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userAccountId?: Prisma.SortOrder;
    officeId?: Prisma.SortOrder;
    timeSlotId?: Prisma.SortOrder;
    probableStartTime?: Prisma.SortOrder;
    actualEndTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    durationInMinutes?: Prisma.SortOrder;
    appointmentStatusId?: Prisma.SortOrder;
    appointmentTakenDate?: Prisma.SortOrder;
    cancellationReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.AppointmentCountOrderByAggregateInput;
    _avg?: Prisma.AppointmentAvgOrderByAggregateInput;
    _max?: Prisma.AppointmentMaxOrderByAggregateInput;
    _min?: Prisma.AppointmentMinOrderByAggregateInput;
    _sum?: Prisma.AppointmentSumOrderByAggregateInput;
};
export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.AppointmentScalarWhereWithAggregatesInput | Prisma.AppointmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.AppointmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AppointmentScalarWhereWithAggregatesInput | Prisma.AppointmentScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Appointment"> | number;
    userAccountId?: Prisma.IntWithAggregatesFilter<"Appointment"> | number;
    officeId?: Prisma.IntWithAggregatesFilter<"Appointment"> | number;
    timeSlotId?: Prisma.IntWithAggregatesFilter<"Appointment"> | number;
    probableStartTime?: Prisma.DateTimeWithAggregatesFilter<"Appointment"> | Date | string;
    actualEndTime?: Prisma.DateTimeNullableWithAggregatesFilter<"Appointment"> | Date | string | null;
    durationInMinutes?: Prisma.IntWithAggregatesFilter<"Appointment"> | number;
    appointmentStatusId?: Prisma.IntWithAggregatesFilter<"Appointment"> | number;
    appointmentTakenDate?: Prisma.DateTimeWithAggregatesFilter<"Appointment"> | Date | string;
    cancellationReason?: Prisma.StringNullableWithAggregatesFilter<"Appointment"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Appointment"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Appointment"> | Date | string;
};
export type AppointmentCreateInput = {
    probableStartTime: Date | string;
    actualEndTime?: Date | string | null;
    durationInMinutes: number;
    appointmentTakenDate: Date | string;
    cancellationReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    client: Prisma.ClientAccountCreateNestedOneWithoutAppointmentsInput;
    office: Prisma.OfficeCreateNestedOneWithoutAppointmentsInput;
    timeSlot: Prisma.TimeSlotCreateNestedOneWithoutAppointmentsInput;
    status: Prisma.AppointmentStatusCreateNestedOneWithoutAppointmentsInput;
    history?: Prisma.AppointmentHistoryCreateNestedManyWithoutAppointmentInput;
};
export type AppointmentUncheckedCreateInput = {
    id?: number;
    userAccountId: number;
    officeId: number;
    timeSlotId: number;
    probableStartTime: Date | string;
    actualEndTime?: Date | string | null;
    durationInMinutes: number;
    appointmentStatusId: number;
    appointmentTakenDate: Date | string;
    cancellationReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    history?: Prisma.AppointmentHistoryUncheckedCreateNestedManyWithoutAppointmentInput;
};
export type AppointmentUpdateInput = {
    probableStartTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualEndTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    durationInMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    appointmentTakenDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancellationReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    client?: Prisma.ClientAccountUpdateOneRequiredWithoutAppointmentsNestedInput;
    office?: Prisma.OfficeUpdateOneRequiredWithoutAppointmentsNestedInput;
    timeSlot?: Prisma.TimeSlotUpdateOneRequiredWithoutAppointmentsNestedInput;
    status?: Prisma.AppointmentStatusUpdateOneRequiredWithoutAppointmentsNestedInput;
    history?: Prisma.AppointmentHistoryUpdateManyWithoutAppointmentNestedInput;
};
export type AppointmentUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userAccountId?: Prisma.IntFieldUpdateOperationsInput | number;
    officeId?: Prisma.IntFieldUpdateOperationsInput | number;
    timeSlotId?: Prisma.IntFieldUpdateOperationsInput | number;
    probableStartTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualEndTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    durationInMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    appointmentStatusId?: Prisma.IntFieldUpdateOperationsInput | number;
    appointmentTakenDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancellationReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    history?: Prisma.AppointmentHistoryUncheckedUpdateManyWithoutAppointmentNestedInput;
};
export type AppointmentCreateManyInput = {
    id?: number;
    userAccountId: number;
    officeId: number;
    timeSlotId: number;
    probableStartTime: Date | string;
    actualEndTime?: Date | string | null;
    durationInMinutes: number;
    appointmentStatusId: number;
    appointmentTakenDate: Date | string;
    cancellationReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AppointmentUpdateManyMutationInput = {
    probableStartTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualEndTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    durationInMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    appointmentTakenDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancellationReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AppointmentUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userAccountId?: Prisma.IntFieldUpdateOperationsInput | number;
    officeId?: Prisma.IntFieldUpdateOperationsInput | number;
    timeSlotId?: Prisma.IntFieldUpdateOperationsInput | number;
    probableStartTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualEndTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    durationInMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    appointmentStatusId?: Prisma.IntFieldUpdateOperationsInput | number;
    appointmentTakenDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancellationReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AppointmentListRelationFilter = {
    every?: Prisma.AppointmentWhereInput;
    some?: Prisma.AppointmentWhereInput;
    none?: Prisma.AppointmentWhereInput;
};
export type AppointmentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AppointmentOrderByRelevanceInput = {
    fields: Prisma.AppointmentOrderByRelevanceFieldEnum | Prisma.AppointmentOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type AppointmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userAccountId?: Prisma.SortOrder;
    officeId?: Prisma.SortOrder;
    timeSlotId?: Prisma.SortOrder;
    probableStartTime?: Prisma.SortOrder;
    actualEndTime?: Prisma.SortOrder;
    durationInMinutes?: Prisma.SortOrder;
    appointmentStatusId?: Prisma.SortOrder;
    appointmentTakenDate?: Prisma.SortOrder;
    cancellationReason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AppointmentAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userAccountId?: Prisma.SortOrder;
    officeId?: Prisma.SortOrder;
    timeSlotId?: Prisma.SortOrder;
    durationInMinutes?: Prisma.SortOrder;
    appointmentStatusId?: Prisma.SortOrder;
};
export type AppointmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userAccountId?: Prisma.SortOrder;
    officeId?: Prisma.SortOrder;
    timeSlotId?: Prisma.SortOrder;
    probableStartTime?: Prisma.SortOrder;
    actualEndTime?: Prisma.SortOrder;
    durationInMinutes?: Prisma.SortOrder;
    appointmentStatusId?: Prisma.SortOrder;
    appointmentTakenDate?: Prisma.SortOrder;
    cancellationReason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AppointmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userAccountId?: Prisma.SortOrder;
    officeId?: Prisma.SortOrder;
    timeSlotId?: Prisma.SortOrder;
    probableStartTime?: Prisma.SortOrder;
    actualEndTime?: Prisma.SortOrder;
    durationInMinutes?: Prisma.SortOrder;
    appointmentStatusId?: Prisma.SortOrder;
    appointmentTakenDate?: Prisma.SortOrder;
    cancellationReason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AppointmentSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userAccountId?: Prisma.SortOrder;
    officeId?: Prisma.SortOrder;
    timeSlotId?: Prisma.SortOrder;
    durationInMinutes?: Prisma.SortOrder;
    appointmentStatusId?: Prisma.SortOrder;
};
export type AppointmentScalarRelationFilter = {
    is?: Prisma.AppointmentWhereInput;
    isNot?: Prisma.AppointmentWhereInput;
};
export type AppointmentCreateNestedManyWithoutClientInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutClientInput, Prisma.AppointmentUncheckedCreateWithoutClientInput> | Prisma.AppointmentCreateWithoutClientInput[] | Prisma.AppointmentUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutClientInput | Prisma.AppointmentCreateOrConnectWithoutClientInput[];
    createMany?: Prisma.AppointmentCreateManyClientInputEnvelope;
    connect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
};
export type AppointmentUncheckedCreateNestedManyWithoutClientInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutClientInput, Prisma.AppointmentUncheckedCreateWithoutClientInput> | Prisma.AppointmentCreateWithoutClientInput[] | Prisma.AppointmentUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutClientInput | Prisma.AppointmentCreateOrConnectWithoutClientInput[];
    createMany?: Prisma.AppointmentCreateManyClientInputEnvelope;
    connect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
};
export type AppointmentUpdateManyWithoutClientNestedInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutClientInput, Prisma.AppointmentUncheckedCreateWithoutClientInput> | Prisma.AppointmentCreateWithoutClientInput[] | Prisma.AppointmentUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutClientInput | Prisma.AppointmentCreateOrConnectWithoutClientInput[];
    upsert?: Prisma.AppointmentUpsertWithWhereUniqueWithoutClientInput | Prisma.AppointmentUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: Prisma.AppointmentCreateManyClientInputEnvelope;
    set?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    disconnect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    delete?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    connect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    update?: Prisma.AppointmentUpdateWithWhereUniqueWithoutClientInput | Prisma.AppointmentUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?: Prisma.AppointmentUpdateManyWithWhereWithoutClientInput | Prisma.AppointmentUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: Prisma.AppointmentScalarWhereInput | Prisma.AppointmentScalarWhereInput[];
};
export type AppointmentUncheckedUpdateManyWithoutClientNestedInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutClientInput, Prisma.AppointmentUncheckedCreateWithoutClientInput> | Prisma.AppointmentCreateWithoutClientInput[] | Prisma.AppointmentUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutClientInput | Prisma.AppointmentCreateOrConnectWithoutClientInput[];
    upsert?: Prisma.AppointmentUpsertWithWhereUniqueWithoutClientInput | Prisma.AppointmentUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: Prisma.AppointmentCreateManyClientInputEnvelope;
    set?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    disconnect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    delete?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    connect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    update?: Prisma.AppointmentUpdateWithWhereUniqueWithoutClientInput | Prisma.AppointmentUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?: Prisma.AppointmentUpdateManyWithWhereWithoutClientInput | Prisma.AppointmentUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: Prisma.AppointmentScalarWhereInput | Prisma.AppointmentScalarWhereInput[];
};
export type AppointmentCreateNestedManyWithoutOfficeInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutOfficeInput, Prisma.AppointmentUncheckedCreateWithoutOfficeInput> | Prisma.AppointmentCreateWithoutOfficeInput[] | Prisma.AppointmentUncheckedCreateWithoutOfficeInput[];
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutOfficeInput | Prisma.AppointmentCreateOrConnectWithoutOfficeInput[];
    createMany?: Prisma.AppointmentCreateManyOfficeInputEnvelope;
    connect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
};
export type AppointmentUncheckedCreateNestedManyWithoutOfficeInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutOfficeInput, Prisma.AppointmentUncheckedCreateWithoutOfficeInput> | Prisma.AppointmentCreateWithoutOfficeInput[] | Prisma.AppointmentUncheckedCreateWithoutOfficeInput[];
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutOfficeInput | Prisma.AppointmentCreateOrConnectWithoutOfficeInput[];
    createMany?: Prisma.AppointmentCreateManyOfficeInputEnvelope;
    connect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
};
export type AppointmentUpdateManyWithoutOfficeNestedInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutOfficeInput, Prisma.AppointmentUncheckedCreateWithoutOfficeInput> | Prisma.AppointmentCreateWithoutOfficeInput[] | Prisma.AppointmentUncheckedCreateWithoutOfficeInput[];
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutOfficeInput | Prisma.AppointmentCreateOrConnectWithoutOfficeInput[];
    upsert?: Prisma.AppointmentUpsertWithWhereUniqueWithoutOfficeInput | Prisma.AppointmentUpsertWithWhereUniqueWithoutOfficeInput[];
    createMany?: Prisma.AppointmentCreateManyOfficeInputEnvelope;
    set?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    disconnect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    delete?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    connect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    update?: Prisma.AppointmentUpdateWithWhereUniqueWithoutOfficeInput | Prisma.AppointmentUpdateWithWhereUniqueWithoutOfficeInput[];
    updateMany?: Prisma.AppointmentUpdateManyWithWhereWithoutOfficeInput | Prisma.AppointmentUpdateManyWithWhereWithoutOfficeInput[];
    deleteMany?: Prisma.AppointmentScalarWhereInput | Prisma.AppointmentScalarWhereInput[];
};
export type AppointmentUncheckedUpdateManyWithoutOfficeNestedInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutOfficeInput, Prisma.AppointmentUncheckedCreateWithoutOfficeInput> | Prisma.AppointmentCreateWithoutOfficeInput[] | Prisma.AppointmentUncheckedCreateWithoutOfficeInput[];
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutOfficeInput | Prisma.AppointmentCreateOrConnectWithoutOfficeInput[];
    upsert?: Prisma.AppointmentUpsertWithWhereUniqueWithoutOfficeInput | Prisma.AppointmentUpsertWithWhereUniqueWithoutOfficeInput[];
    createMany?: Prisma.AppointmentCreateManyOfficeInputEnvelope;
    set?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    disconnect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    delete?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    connect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    update?: Prisma.AppointmentUpdateWithWhereUniqueWithoutOfficeInput | Prisma.AppointmentUpdateWithWhereUniqueWithoutOfficeInput[];
    updateMany?: Prisma.AppointmentUpdateManyWithWhereWithoutOfficeInput | Prisma.AppointmentUpdateManyWithWhereWithoutOfficeInput[];
    deleteMany?: Prisma.AppointmentScalarWhereInput | Prisma.AppointmentScalarWhereInput[];
};
export type AppointmentCreateNestedManyWithoutTimeSlotInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutTimeSlotInput, Prisma.AppointmentUncheckedCreateWithoutTimeSlotInput> | Prisma.AppointmentCreateWithoutTimeSlotInput[] | Prisma.AppointmentUncheckedCreateWithoutTimeSlotInput[];
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutTimeSlotInput | Prisma.AppointmentCreateOrConnectWithoutTimeSlotInput[];
    createMany?: Prisma.AppointmentCreateManyTimeSlotInputEnvelope;
    connect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
};
export type AppointmentUncheckedCreateNestedManyWithoutTimeSlotInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutTimeSlotInput, Prisma.AppointmentUncheckedCreateWithoutTimeSlotInput> | Prisma.AppointmentCreateWithoutTimeSlotInput[] | Prisma.AppointmentUncheckedCreateWithoutTimeSlotInput[];
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutTimeSlotInput | Prisma.AppointmentCreateOrConnectWithoutTimeSlotInput[];
    createMany?: Prisma.AppointmentCreateManyTimeSlotInputEnvelope;
    connect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
};
export type AppointmentUpdateManyWithoutTimeSlotNestedInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutTimeSlotInput, Prisma.AppointmentUncheckedCreateWithoutTimeSlotInput> | Prisma.AppointmentCreateWithoutTimeSlotInput[] | Prisma.AppointmentUncheckedCreateWithoutTimeSlotInput[];
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutTimeSlotInput | Prisma.AppointmentCreateOrConnectWithoutTimeSlotInput[];
    upsert?: Prisma.AppointmentUpsertWithWhereUniqueWithoutTimeSlotInput | Prisma.AppointmentUpsertWithWhereUniqueWithoutTimeSlotInput[];
    createMany?: Prisma.AppointmentCreateManyTimeSlotInputEnvelope;
    set?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    disconnect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    delete?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    connect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    update?: Prisma.AppointmentUpdateWithWhereUniqueWithoutTimeSlotInput | Prisma.AppointmentUpdateWithWhereUniqueWithoutTimeSlotInput[];
    updateMany?: Prisma.AppointmentUpdateManyWithWhereWithoutTimeSlotInput | Prisma.AppointmentUpdateManyWithWhereWithoutTimeSlotInput[];
    deleteMany?: Prisma.AppointmentScalarWhereInput | Prisma.AppointmentScalarWhereInput[];
};
export type AppointmentUncheckedUpdateManyWithoutTimeSlotNestedInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutTimeSlotInput, Prisma.AppointmentUncheckedCreateWithoutTimeSlotInput> | Prisma.AppointmentCreateWithoutTimeSlotInput[] | Prisma.AppointmentUncheckedCreateWithoutTimeSlotInput[];
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutTimeSlotInput | Prisma.AppointmentCreateOrConnectWithoutTimeSlotInput[];
    upsert?: Prisma.AppointmentUpsertWithWhereUniqueWithoutTimeSlotInput | Prisma.AppointmentUpsertWithWhereUniqueWithoutTimeSlotInput[];
    createMany?: Prisma.AppointmentCreateManyTimeSlotInputEnvelope;
    set?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    disconnect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    delete?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    connect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    update?: Prisma.AppointmentUpdateWithWhereUniqueWithoutTimeSlotInput | Prisma.AppointmentUpdateWithWhereUniqueWithoutTimeSlotInput[];
    updateMany?: Prisma.AppointmentUpdateManyWithWhereWithoutTimeSlotInput | Prisma.AppointmentUpdateManyWithWhereWithoutTimeSlotInput[];
    deleteMany?: Prisma.AppointmentScalarWhereInput | Prisma.AppointmentScalarWhereInput[];
};
export type AppointmentCreateNestedManyWithoutStatusInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutStatusInput, Prisma.AppointmentUncheckedCreateWithoutStatusInput> | Prisma.AppointmentCreateWithoutStatusInput[] | Prisma.AppointmentUncheckedCreateWithoutStatusInput[];
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutStatusInput | Prisma.AppointmentCreateOrConnectWithoutStatusInput[];
    createMany?: Prisma.AppointmentCreateManyStatusInputEnvelope;
    connect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
};
export type AppointmentUncheckedCreateNestedManyWithoutStatusInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutStatusInput, Prisma.AppointmentUncheckedCreateWithoutStatusInput> | Prisma.AppointmentCreateWithoutStatusInput[] | Prisma.AppointmentUncheckedCreateWithoutStatusInput[];
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutStatusInput | Prisma.AppointmentCreateOrConnectWithoutStatusInput[];
    createMany?: Prisma.AppointmentCreateManyStatusInputEnvelope;
    connect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
};
export type AppointmentUpdateManyWithoutStatusNestedInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutStatusInput, Prisma.AppointmentUncheckedCreateWithoutStatusInput> | Prisma.AppointmentCreateWithoutStatusInput[] | Prisma.AppointmentUncheckedCreateWithoutStatusInput[];
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutStatusInput | Prisma.AppointmentCreateOrConnectWithoutStatusInput[];
    upsert?: Prisma.AppointmentUpsertWithWhereUniqueWithoutStatusInput | Prisma.AppointmentUpsertWithWhereUniqueWithoutStatusInput[];
    createMany?: Prisma.AppointmentCreateManyStatusInputEnvelope;
    set?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    disconnect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    delete?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    connect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    update?: Prisma.AppointmentUpdateWithWhereUniqueWithoutStatusInput | Prisma.AppointmentUpdateWithWhereUniqueWithoutStatusInput[];
    updateMany?: Prisma.AppointmentUpdateManyWithWhereWithoutStatusInput | Prisma.AppointmentUpdateManyWithWhereWithoutStatusInput[];
    deleteMany?: Prisma.AppointmentScalarWhereInput | Prisma.AppointmentScalarWhereInput[];
};
export type AppointmentUncheckedUpdateManyWithoutStatusNestedInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutStatusInput, Prisma.AppointmentUncheckedCreateWithoutStatusInput> | Prisma.AppointmentCreateWithoutStatusInput[] | Prisma.AppointmentUncheckedCreateWithoutStatusInput[];
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutStatusInput | Prisma.AppointmentCreateOrConnectWithoutStatusInput[];
    upsert?: Prisma.AppointmentUpsertWithWhereUniqueWithoutStatusInput | Prisma.AppointmentUpsertWithWhereUniqueWithoutStatusInput[];
    createMany?: Prisma.AppointmentCreateManyStatusInputEnvelope;
    set?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    disconnect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    delete?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    connect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    update?: Prisma.AppointmentUpdateWithWhereUniqueWithoutStatusInput | Prisma.AppointmentUpdateWithWhereUniqueWithoutStatusInput[];
    updateMany?: Prisma.AppointmentUpdateManyWithWhereWithoutStatusInput | Prisma.AppointmentUpdateManyWithWhereWithoutStatusInput[];
    deleteMany?: Prisma.AppointmentScalarWhereInput | Prisma.AppointmentScalarWhereInput[];
};
export type AppointmentCreateNestedOneWithoutHistoryInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutHistoryInput, Prisma.AppointmentUncheckedCreateWithoutHistoryInput>;
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutHistoryInput;
    connect?: Prisma.AppointmentWhereUniqueInput;
};
export type AppointmentUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutHistoryInput, Prisma.AppointmentUncheckedCreateWithoutHistoryInput>;
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutHistoryInput;
    upsert?: Prisma.AppointmentUpsertWithoutHistoryInput;
    connect?: Prisma.AppointmentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AppointmentUpdateToOneWithWhereWithoutHistoryInput, Prisma.AppointmentUpdateWithoutHistoryInput>, Prisma.AppointmentUncheckedUpdateWithoutHistoryInput>;
};
export type AppointmentCreateWithoutClientInput = {
    probableStartTime: Date | string;
    actualEndTime?: Date | string | null;
    durationInMinutes: number;
    appointmentTakenDate: Date | string;
    cancellationReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    office: Prisma.OfficeCreateNestedOneWithoutAppointmentsInput;
    timeSlot: Prisma.TimeSlotCreateNestedOneWithoutAppointmentsInput;
    status: Prisma.AppointmentStatusCreateNestedOneWithoutAppointmentsInput;
    history?: Prisma.AppointmentHistoryCreateNestedManyWithoutAppointmentInput;
};
export type AppointmentUncheckedCreateWithoutClientInput = {
    id?: number;
    officeId: number;
    timeSlotId: number;
    probableStartTime: Date | string;
    actualEndTime?: Date | string | null;
    durationInMinutes: number;
    appointmentStatusId: number;
    appointmentTakenDate: Date | string;
    cancellationReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    history?: Prisma.AppointmentHistoryUncheckedCreateNestedManyWithoutAppointmentInput;
};
export type AppointmentCreateOrConnectWithoutClientInput = {
    where: Prisma.AppointmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AppointmentCreateWithoutClientInput, Prisma.AppointmentUncheckedCreateWithoutClientInput>;
};
export type AppointmentCreateManyClientInputEnvelope = {
    data: Prisma.AppointmentCreateManyClientInput | Prisma.AppointmentCreateManyClientInput[];
    skipDuplicates?: boolean;
};
export type AppointmentUpsertWithWhereUniqueWithoutClientInput = {
    where: Prisma.AppointmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.AppointmentUpdateWithoutClientInput, Prisma.AppointmentUncheckedUpdateWithoutClientInput>;
    create: Prisma.XOR<Prisma.AppointmentCreateWithoutClientInput, Prisma.AppointmentUncheckedCreateWithoutClientInput>;
};
export type AppointmentUpdateWithWhereUniqueWithoutClientInput = {
    where: Prisma.AppointmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.AppointmentUpdateWithoutClientInput, Prisma.AppointmentUncheckedUpdateWithoutClientInput>;
};
export type AppointmentUpdateManyWithWhereWithoutClientInput = {
    where: Prisma.AppointmentScalarWhereInput;
    data: Prisma.XOR<Prisma.AppointmentUpdateManyMutationInput, Prisma.AppointmentUncheckedUpdateManyWithoutClientInput>;
};
export type AppointmentScalarWhereInput = {
    AND?: Prisma.AppointmentScalarWhereInput | Prisma.AppointmentScalarWhereInput[];
    OR?: Prisma.AppointmentScalarWhereInput[];
    NOT?: Prisma.AppointmentScalarWhereInput | Prisma.AppointmentScalarWhereInput[];
    id?: Prisma.IntFilter<"Appointment"> | number;
    userAccountId?: Prisma.IntFilter<"Appointment"> | number;
    officeId?: Prisma.IntFilter<"Appointment"> | number;
    timeSlotId?: Prisma.IntFilter<"Appointment"> | number;
    probableStartTime?: Prisma.DateTimeFilter<"Appointment"> | Date | string;
    actualEndTime?: Prisma.DateTimeNullableFilter<"Appointment"> | Date | string | null;
    durationInMinutes?: Prisma.IntFilter<"Appointment"> | number;
    appointmentStatusId?: Prisma.IntFilter<"Appointment"> | number;
    appointmentTakenDate?: Prisma.DateTimeFilter<"Appointment"> | Date | string;
    cancellationReason?: Prisma.StringNullableFilter<"Appointment"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Appointment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Appointment"> | Date | string;
};
export type AppointmentCreateWithoutOfficeInput = {
    probableStartTime: Date | string;
    actualEndTime?: Date | string | null;
    durationInMinutes: number;
    appointmentTakenDate: Date | string;
    cancellationReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    client: Prisma.ClientAccountCreateNestedOneWithoutAppointmentsInput;
    timeSlot: Prisma.TimeSlotCreateNestedOneWithoutAppointmentsInput;
    status: Prisma.AppointmentStatusCreateNestedOneWithoutAppointmentsInput;
    history?: Prisma.AppointmentHistoryCreateNestedManyWithoutAppointmentInput;
};
export type AppointmentUncheckedCreateWithoutOfficeInput = {
    id?: number;
    userAccountId: number;
    timeSlotId: number;
    probableStartTime: Date | string;
    actualEndTime?: Date | string | null;
    durationInMinutes: number;
    appointmentStatusId: number;
    appointmentTakenDate: Date | string;
    cancellationReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    history?: Prisma.AppointmentHistoryUncheckedCreateNestedManyWithoutAppointmentInput;
};
export type AppointmentCreateOrConnectWithoutOfficeInput = {
    where: Prisma.AppointmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AppointmentCreateWithoutOfficeInput, Prisma.AppointmentUncheckedCreateWithoutOfficeInput>;
};
export type AppointmentCreateManyOfficeInputEnvelope = {
    data: Prisma.AppointmentCreateManyOfficeInput | Prisma.AppointmentCreateManyOfficeInput[];
    skipDuplicates?: boolean;
};
export type AppointmentUpsertWithWhereUniqueWithoutOfficeInput = {
    where: Prisma.AppointmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.AppointmentUpdateWithoutOfficeInput, Prisma.AppointmentUncheckedUpdateWithoutOfficeInput>;
    create: Prisma.XOR<Prisma.AppointmentCreateWithoutOfficeInput, Prisma.AppointmentUncheckedCreateWithoutOfficeInput>;
};
export type AppointmentUpdateWithWhereUniqueWithoutOfficeInput = {
    where: Prisma.AppointmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.AppointmentUpdateWithoutOfficeInput, Prisma.AppointmentUncheckedUpdateWithoutOfficeInput>;
};
export type AppointmentUpdateManyWithWhereWithoutOfficeInput = {
    where: Prisma.AppointmentScalarWhereInput;
    data: Prisma.XOR<Prisma.AppointmentUpdateManyMutationInput, Prisma.AppointmentUncheckedUpdateManyWithoutOfficeInput>;
};
export type AppointmentCreateWithoutTimeSlotInput = {
    probableStartTime: Date | string;
    actualEndTime?: Date | string | null;
    durationInMinutes: number;
    appointmentTakenDate: Date | string;
    cancellationReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    client: Prisma.ClientAccountCreateNestedOneWithoutAppointmentsInput;
    office: Prisma.OfficeCreateNestedOneWithoutAppointmentsInput;
    status: Prisma.AppointmentStatusCreateNestedOneWithoutAppointmentsInput;
    history?: Prisma.AppointmentHistoryCreateNestedManyWithoutAppointmentInput;
};
export type AppointmentUncheckedCreateWithoutTimeSlotInput = {
    id?: number;
    userAccountId: number;
    officeId: number;
    probableStartTime: Date | string;
    actualEndTime?: Date | string | null;
    durationInMinutes: number;
    appointmentStatusId: number;
    appointmentTakenDate: Date | string;
    cancellationReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    history?: Prisma.AppointmentHistoryUncheckedCreateNestedManyWithoutAppointmentInput;
};
export type AppointmentCreateOrConnectWithoutTimeSlotInput = {
    where: Prisma.AppointmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AppointmentCreateWithoutTimeSlotInput, Prisma.AppointmentUncheckedCreateWithoutTimeSlotInput>;
};
export type AppointmentCreateManyTimeSlotInputEnvelope = {
    data: Prisma.AppointmentCreateManyTimeSlotInput | Prisma.AppointmentCreateManyTimeSlotInput[];
    skipDuplicates?: boolean;
};
export type AppointmentUpsertWithWhereUniqueWithoutTimeSlotInput = {
    where: Prisma.AppointmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.AppointmentUpdateWithoutTimeSlotInput, Prisma.AppointmentUncheckedUpdateWithoutTimeSlotInput>;
    create: Prisma.XOR<Prisma.AppointmentCreateWithoutTimeSlotInput, Prisma.AppointmentUncheckedCreateWithoutTimeSlotInput>;
};
export type AppointmentUpdateWithWhereUniqueWithoutTimeSlotInput = {
    where: Prisma.AppointmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.AppointmentUpdateWithoutTimeSlotInput, Prisma.AppointmentUncheckedUpdateWithoutTimeSlotInput>;
};
export type AppointmentUpdateManyWithWhereWithoutTimeSlotInput = {
    where: Prisma.AppointmentScalarWhereInput;
    data: Prisma.XOR<Prisma.AppointmentUpdateManyMutationInput, Prisma.AppointmentUncheckedUpdateManyWithoutTimeSlotInput>;
};
export type AppointmentCreateWithoutStatusInput = {
    probableStartTime: Date | string;
    actualEndTime?: Date | string | null;
    durationInMinutes: number;
    appointmentTakenDate: Date | string;
    cancellationReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    client: Prisma.ClientAccountCreateNestedOneWithoutAppointmentsInput;
    office: Prisma.OfficeCreateNestedOneWithoutAppointmentsInput;
    timeSlot: Prisma.TimeSlotCreateNestedOneWithoutAppointmentsInput;
    history?: Prisma.AppointmentHistoryCreateNestedManyWithoutAppointmentInput;
};
export type AppointmentUncheckedCreateWithoutStatusInput = {
    id?: number;
    userAccountId: number;
    officeId: number;
    timeSlotId: number;
    probableStartTime: Date | string;
    actualEndTime?: Date | string | null;
    durationInMinutes: number;
    appointmentTakenDate: Date | string;
    cancellationReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    history?: Prisma.AppointmentHistoryUncheckedCreateNestedManyWithoutAppointmentInput;
};
export type AppointmentCreateOrConnectWithoutStatusInput = {
    where: Prisma.AppointmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AppointmentCreateWithoutStatusInput, Prisma.AppointmentUncheckedCreateWithoutStatusInput>;
};
export type AppointmentCreateManyStatusInputEnvelope = {
    data: Prisma.AppointmentCreateManyStatusInput | Prisma.AppointmentCreateManyStatusInput[];
    skipDuplicates?: boolean;
};
export type AppointmentUpsertWithWhereUniqueWithoutStatusInput = {
    where: Prisma.AppointmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.AppointmentUpdateWithoutStatusInput, Prisma.AppointmentUncheckedUpdateWithoutStatusInput>;
    create: Prisma.XOR<Prisma.AppointmentCreateWithoutStatusInput, Prisma.AppointmentUncheckedCreateWithoutStatusInput>;
};
export type AppointmentUpdateWithWhereUniqueWithoutStatusInput = {
    where: Prisma.AppointmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.AppointmentUpdateWithoutStatusInput, Prisma.AppointmentUncheckedUpdateWithoutStatusInput>;
};
export type AppointmentUpdateManyWithWhereWithoutStatusInput = {
    where: Prisma.AppointmentScalarWhereInput;
    data: Prisma.XOR<Prisma.AppointmentUpdateManyMutationInput, Prisma.AppointmentUncheckedUpdateManyWithoutStatusInput>;
};
export type AppointmentCreateWithoutHistoryInput = {
    probableStartTime: Date | string;
    actualEndTime?: Date | string | null;
    durationInMinutes: number;
    appointmentTakenDate: Date | string;
    cancellationReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    client: Prisma.ClientAccountCreateNestedOneWithoutAppointmentsInput;
    office: Prisma.OfficeCreateNestedOneWithoutAppointmentsInput;
    timeSlot: Prisma.TimeSlotCreateNestedOneWithoutAppointmentsInput;
    status: Prisma.AppointmentStatusCreateNestedOneWithoutAppointmentsInput;
};
export type AppointmentUncheckedCreateWithoutHistoryInput = {
    id?: number;
    userAccountId: number;
    officeId: number;
    timeSlotId: number;
    probableStartTime: Date | string;
    actualEndTime?: Date | string | null;
    durationInMinutes: number;
    appointmentStatusId: number;
    appointmentTakenDate: Date | string;
    cancellationReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AppointmentCreateOrConnectWithoutHistoryInput = {
    where: Prisma.AppointmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AppointmentCreateWithoutHistoryInput, Prisma.AppointmentUncheckedCreateWithoutHistoryInput>;
};
export type AppointmentUpsertWithoutHistoryInput = {
    update: Prisma.XOR<Prisma.AppointmentUpdateWithoutHistoryInput, Prisma.AppointmentUncheckedUpdateWithoutHistoryInput>;
    create: Prisma.XOR<Prisma.AppointmentCreateWithoutHistoryInput, Prisma.AppointmentUncheckedCreateWithoutHistoryInput>;
    where?: Prisma.AppointmentWhereInput;
};
export type AppointmentUpdateToOneWithWhereWithoutHistoryInput = {
    where?: Prisma.AppointmentWhereInput;
    data: Prisma.XOR<Prisma.AppointmentUpdateWithoutHistoryInput, Prisma.AppointmentUncheckedUpdateWithoutHistoryInput>;
};
export type AppointmentUpdateWithoutHistoryInput = {
    probableStartTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualEndTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    durationInMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    appointmentTakenDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancellationReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    client?: Prisma.ClientAccountUpdateOneRequiredWithoutAppointmentsNestedInput;
    office?: Prisma.OfficeUpdateOneRequiredWithoutAppointmentsNestedInput;
    timeSlot?: Prisma.TimeSlotUpdateOneRequiredWithoutAppointmentsNestedInput;
    status?: Prisma.AppointmentStatusUpdateOneRequiredWithoutAppointmentsNestedInput;
};
export type AppointmentUncheckedUpdateWithoutHistoryInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userAccountId?: Prisma.IntFieldUpdateOperationsInput | number;
    officeId?: Prisma.IntFieldUpdateOperationsInput | number;
    timeSlotId?: Prisma.IntFieldUpdateOperationsInput | number;
    probableStartTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualEndTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    durationInMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    appointmentStatusId?: Prisma.IntFieldUpdateOperationsInput | number;
    appointmentTakenDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancellationReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AppointmentCreateManyClientInput = {
    id?: number;
    officeId: number;
    timeSlotId: number;
    probableStartTime: Date | string;
    actualEndTime?: Date | string | null;
    durationInMinutes: number;
    appointmentStatusId: number;
    appointmentTakenDate: Date | string;
    cancellationReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AppointmentUpdateWithoutClientInput = {
    probableStartTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualEndTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    durationInMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    appointmentTakenDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancellationReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    office?: Prisma.OfficeUpdateOneRequiredWithoutAppointmentsNestedInput;
    timeSlot?: Prisma.TimeSlotUpdateOneRequiredWithoutAppointmentsNestedInput;
    status?: Prisma.AppointmentStatusUpdateOneRequiredWithoutAppointmentsNestedInput;
    history?: Prisma.AppointmentHistoryUpdateManyWithoutAppointmentNestedInput;
};
export type AppointmentUncheckedUpdateWithoutClientInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    officeId?: Prisma.IntFieldUpdateOperationsInput | number;
    timeSlotId?: Prisma.IntFieldUpdateOperationsInput | number;
    probableStartTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualEndTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    durationInMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    appointmentStatusId?: Prisma.IntFieldUpdateOperationsInput | number;
    appointmentTakenDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancellationReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    history?: Prisma.AppointmentHistoryUncheckedUpdateManyWithoutAppointmentNestedInput;
};
export type AppointmentUncheckedUpdateManyWithoutClientInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    officeId?: Prisma.IntFieldUpdateOperationsInput | number;
    timeSlotId?: Prisma.IntFieldUpdateOperationsInput | number;
    probableStartTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualEndTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    durationInMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    appointmentStatusId?: Prisma.IntFieldUpdateOperationsInput | number;
    appointmentTakenDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancellationReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AppointmentCreateManyOfficeInput = {
    id?: number;
    userAccountId: number;
    timeSlotId: number;
    probableStartTime: Date | string;
    actualEndTime?: Date | string | null;
    durationInMinutes: number;
    appointmentStatusId: number;
    appointmentTakenDate: Date | string;
    cancellationReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AppointmentUpdateWithoutOfficeInput = {
    probableStartTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualEndTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    durationInMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    appointmentTakenDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancellationReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    client?: Prisma.ClientAccountUpdateOneRequiredWithoutAppointmentsNestedInput;
    timeSlot?: Prisma.TimeSlotUpdateOneRequiredWithoutAppointmentsNestedInput;
    status?: Prisma.AppointmentStatusUpdateOneRequiredWithoutAppointmentsNestedInput;
    history?: Prisma.AppointmentHistoryUpdateManyWithoutAppointmentNestedInput;
};
export type AppointmentUncheckedUpdateWithoutOfficeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userAccountId?: Prisma.IntFieldUpdateOperationsInput | number;
    timeSlotId?: Prisma.IntFieldUpdateOperationsInput | number;
    probableStartTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualEndTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    durationInMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    appointmentStatusId?: Prisma.IntFieldUpdateOperationsInput | number;
    appointmentTakenDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancellationReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    history?: Prisma.AppointmentHistoryUncheckedUpdateManyWithoutAppointmentNestedInput;
};
export type AppointmentUncheckedUpdateManyWithoutOfficeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userAccountId?: Prisma.IntFieldUpdateOperationsInput | number;
    timeSlotId?: Prisma.IntFieldUpdateOperationsInput | number;
    probableStartTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualEndTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    durationInMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    appointmentStatusId?: Prisma.IntFieldUpdateOperationsInput | number;
    appointmentTakenDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancellationReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AppointmentCreateManyTimeSlotInput = {
    id?: number;
    userAccountId: number;
    officeId: number;
    probableStartTime: Date | string;
    actualEndTime?: Date | string | null;
    durationInMinutes: number;
    appointmentStatusId: number;
    appointmentTakenDate: Date | string;
    cancellationReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AppointmentUpdateWithoutTimeSlotInput = {
    probableStartTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualEndTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    durationInMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    appointmentTakenDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancellationReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    client?: Prisma.ClientAccountUpdateOneRequiredWithoutAppointmentsNestedInput;
    office?: Prisma.OfficeUpdateOneRequiredWithoutAppointmentsNestedInput;
    status?: Prisma.AppointmentStatusUpdateOneRequiredWithoutAppointmentsNestedInput;
    history?: Prisma.AppointmentHistoryUpdateManyWithoutAppointmentNestedInput;
};
export type AppointmentUncheckedUpdateWithoutTimeSlotInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userAccountId?: Prisma.IntFieldUpdateOperationsInput | number;
    officeId?: Prisma.IntFieldUpdateOperationsInput | number;
    probableStartTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualEndTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    durationInMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    appointmentStatusId?: Prisma.IntFieldUpdateOperationsInput | number;
    appointmentTakenDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancellationReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    history?: Prisma.AppointmentHistoryUncheckedUpdateManyWithoutAppointmentNestedInput;
};
export type AppointmentUncheckedUpdateManyWithoutTimeSlotInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userAccountId?: Prisma.IntFieldUpdateOperationsInput | number;
    officeId?: Prisma.IntFieldUpdateOperationsInput | number;
    probableStartTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualEndTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    durationInMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    appointmentStatusId?: Prisma.IntFieldUpdateOperationsInput | number;
    appointmentTakenDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancellationReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AppointmentCreateManyStatusInput = {
    id?: number;
    userAccountId: number;
    officeId: number;
    timeSlotId: number;
    probableStartTime: Date | string;
    actualEndTime?: Date | string | null;
    durationInMinutes: number;
    appointmentTakenDate: Date | string;
    cancellationReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AppointmentUpdateWithoutStatusInput = {
    probableStartTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualEndTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    durationInMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    appointmentTakenDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancellationReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    client?: Prisma.ClientAccountUpdateOneRequiredWithoutAppointmentsNestedInput;
    office?: Prisma.OfficeUpdateOneRequiredWithoutAppointmentsNestedInput;
    timeSlot?: Prisma.TimeSlotUpdateOneRequiredWithoutAppointmentsNestedInput;
    history?: Prisma.AppointmentHistoryUpdateManyWithoutAppointmentNestedInput;
};
export type AppointmentUncheckedUpdateWithoutStatusInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userAccountId?: Prisma.IntFieldUpdateOperationsInput | number;
    officeId?: Prisma.IntFieldUpdateOperationsInput | number;
    timeSlotId?: Prisma.IntFieldUpdateOperationsInput | number;
    probableStartTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualEndTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    durationInMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    appointmentTakenDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancellationReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    history?: Prisma.AppointmentHistoryUncheckedUpdateManyWithoutAppointmentNestedInput;
};
export type AppointmentUncheckedUpdateManyWithoutStatusInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userAccountId?: Prisma.IntFieldUpdateOperationsInput | number;
    officeId?: Prisma.IntFieldUpdateOperationsInput | number;
    timeSlotId?: Prisma.IntFieldUpdateOperationsInput | number;
    probableStartTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualEndTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    durationInMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    appointmentTakenDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancellationReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AppointmentCountOutputType = {
    history: number;
};
export type AppointmentCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    history?: boolean | AppointmentCountOutputTypeCountHistoryArgs;
};
export type AppointmentCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentCountOutputTypeSelect<ExtArgs> | null;
};
export type AppointmentCountOutputTypeCountHistoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AppointmentHistoryWhereInput;
};
export type AppointmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userAccountId?: boolean;
    officeId?: boolean;
    timeSlotId?: boolean;
    probableStartTime?: boolean;
    actualEndTime?: boolean;
    durationInMinutes?: boolean;
    appointmentStatusId?: boolean;
    appointmentTakenDate?: boolean;
    cancellationReason?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    client?: boolean | Prisma.ClientAccountDefaultArgs<ExtArgs>;
    office?: boolean | Prisma.OfficeDefaultArgs<ExtArgs>;
    timeSlot?: boolean | Prisma.TimeSlotDefaultArgs<ExtArgs>;
    status?: boolean | Prisma.AppointmentStatusDefaultArgs<ExtArgs>;
    history?: boolean | Prisma.Appointment$historyArgs<ExtArgs>;
    _count?: boolean | Prisma.AppointmentCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["appointment"]>;
export type AppointmentSelectScalar = {
    id?: boolean;
    userAccountId?: boolean;
    officeId?: boolean;
    timeSlotId?: boolean;
    probableStartTime?: boolean;
    actualEndTime?: boolean;
    durationInMinutes?: boolean;
    appointmentStatusId?: boolean;
    appointmentTakenDate?: boolean;
    cancellationReason?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type AppointmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userAccountId" | "officeId" | "timeSlotId" | "probableStartTime" | "actualEndTime" | "durationInMinutes" | "appointmentStatusId" | "appointmentTakenDate" | "cancellationReason" | "createdAt" | "updatedAt", ExtArgs["result"]["appointment"]>;
export type AppointmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    client?: boolean | Prisma.ClientAccountDefaultArgs<ExtArgs>;
    office?: boolean | Prisma.OfficeDefaultArgs<ExtArgs>;
    timeSlot?: boolean | Prisma.TimeSlotDefaultArgs<ExtArgs>;
    status?: boolean | Prisma.AppointmentStatusDefaultArgs<ExtArgs>;
    history?: boolean | Prisma.Appointment$historyArgs<ExtArgs>;
    _count?: boolean | Prisma.AppointmentCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $AppointmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Appointment";
    objects: {
        client: Prisma.$ClientAccountPayload<ExtArgs>;
        office: Prisma.$OfficePayload<ExtArgs>;
        timeSlot: Prisma.$TimeSlotPayload<ExtArgs>;
        status: Prisma.$AppointmentStatusPayload<ExtArgs>;
        history: Prisma.$AppointmentHistoryPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        userAccountId: number;
        officeId: number;
        timeSlotId: number;
        probableStartTime: Date;
        actualEndTime: Date | null;
        durationInMinutes: number;
        appointmentStatusId: number;
        appointmentTakenDate: Date;
        cancellationReason: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["appointment"]>;
    composites: {};
};
export type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AppointmentPayload, S>;
export type AppointmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AppointmentCountAggregateInputType | true;
};
export interface AppointmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Appointment'];
        meta: {
            name: 'Appointment';
        };
    };
    findUnique<T extends AppointmentFindUniqueArgs>(args: Prisma.SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AppointmentClient<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AppointmentClient<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AppointmentFindFirstArgs>(args?: Prisma.SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__AppointmentClient<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AppointmentClient<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AppointmentFindManyArgs>(args?: Prisma.SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AppointmentCreateArgs>(args: Prisma.SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma.Prisma__AppointmentClient<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AppointmentCreateManyArgs>(args?: Prisma.SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends AppointmentDeleteArgs>(args: Prisma.SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma.Prisma__AppointmentClient<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AppointmentUpdateArgs>(args: Prisma.SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma.Prisma__AppointmentClient<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AppointmentUpdateManyArgs>(args: Prisma.SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends AppointmentUpsertArgs>(args: Prisma.SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma.Prisma__AppointmentClient<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AppointmentCountArgs>(args?: Prisma.Subset<T, AppointmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AppointmentCountAggregateOutputType> : number>;
    aggregate<T extends AppointmentAggregateArgs>(args: Prisma.Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>;
    groupBy<T extends AppointmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AppointmentGroupByArgs['orderBy'];
    } : {
        orderBy?: AppointmentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AppointmentFieldRefs;
}
export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    client<T extends Prisma.ClientAccountDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClientAccountDefaultArgs<ExtArgs>>): Prisma.Prisma__ClientAccountClient<runtime.Types.Result.GetResult<Prisma.$ClientAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    office<T extends Prisma.OfficeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OfficeDefaultArgs<ExtArgs>>): Prisma.Prisma__OfficeClient<runtime.Types.Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    timeSlot<T extends Prisma.TimeSlotDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TimeSlotDefaultArgs<ExtArgs>>): Prisma.Prisma__TimeSlotClient<runtime.Types.Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    status<T extends Prisma.AppointmentStatusDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppointmentStatusDefaultArgs<ExtArgs>>): Prisma.Prisma__AppointmentStatusClient<runtime.Types.Result.GetResult<Prisma.$AppointmentStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    history<T extends Prisma.Appointment$historyArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Appointment$historyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AppointmentHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AppointmentFieldRefs {
    readonly id: Prisma.FieldRef<"Appointment", 'Int'>;
    readonly userAccountId: Prisma.FieldRef<"Appointment", 'Int'>;
    readonly officeId: Prisma.FieldRef<"Appointment", 'Int'>;
    readonly timeSlotId: Prisma.FieldRef<"Appointment", 'Int'>;
    readonly probableStartTime: Prisma.FieldRef<"Appointment", 'DateTime'>;
    readonly actualEndTime: Prisma.FieldRef<"Appointment", 'DateTime'>;
    readonly durationInMinutes: Prisma.FieldRef<"Appointment", 'Int'>;
    readonly appointmentStatusId: Prisma.FieldRef<"Appointment", 'Int'>;
    readonly appointmentTakenDate: Prisma.FieldRef<"Appointment", 'DateTime'>;
    readonly cancellationReason: Prisma.FieldRef<"Appointment", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Appointment", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Appointment", 'DateTime'>;
}
export type AppointmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentSelect<ExtArgs> | null;
    omit?: Prisma.AppointmentOmit<ExtArgs> | null;
    include?: Prisma.AppointmentInclude<ExtArgs> | null;
    where: Prisma.AppointmentWhereUniqueInput;
};
export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentSelect<ExtArgs> | null;
    omit?: Prisma.AppointmentOmit<ExtArgs> | null;
    include?: Prisma.AppointmentInclude<ExtArgs> | null;
    where: Prisma.AppointmentWhereUniqueInput;
};
export type AppointmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AppointmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AppointmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AppointmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentSelect<ExtArgs> | null;
    omit?: Prisma.AppointmentOmit<ExtArgs> | null;
    include?: Prisma.AppointmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AppointmentCreateInput, Prisma.AppointmentUncheckedCreateInput>;
};
export type AppointmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AppointmentCreateManyInput | Prisma.AppointmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AppointmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentSelect<ExtArgs> | null;
    omit?: Prisma.AppointmentOmit<ExtArgs> | null;
    include?: Prisma.AppointmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AppointmentUpdateInput, Prisma.AppointmentUncheckedUpdateInput>;
    where: Prisma.AppointmentWhereUniqueInput;
};
export type AppointmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AppointmentUpdateManyMutationInput, Prisma.AppointmentUncheckedUpdateManyInput>;
    where?: Prisma.AppointmentWhereInput;
    limit?: number;
};
export type AppointmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentSelect<ExtArgs> | null;
    omit?: Prisma.AppointmentOmit<ExtArgs> | null;
    include?: Prisma.AppointmentInclude<ExtArgs> | null;
    where: Prisma.AppointmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AppointmentCreateInput, Prisma.AppointmentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AppointmentUpdateInput, Prisma.AppointmentUncheckedUpdateInput>;
};
export type AppointmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentSelect<ExtArgs> | null;
    omit?: Prisma.AppointmentOmit<ExtArgs> | null;
    include?: Prisma.AppointmentInclude<ExtArgs> | null;
    where: Prisma.AppointmentWhereUniqueInput;
};
export type AppointmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AppointmentWhereInput;
    limit?: number;
};
export type Appointment$historyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AppointmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentSelect<ExtArgs> | null;
    omit?: Prisma.AppointmentOmit<ExtArgs> | null;
    include?: Prisma.AppointmentInclude<ExtArgs> | null;
};
export {};
