import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OfficeDoctorAvailabilityModel = runtime.Types.Result.DefaultSelection<Prisma.$OfficeDoctorAvailabilityPayload>;
export type AggregateOfficeDoctorAvailability = {
    _count: OfficeDoctorAvailabilityCountAggregateOutputType | null;
    _avg: OfficeDoctorAvailabilityAvgAggregateOutputType | null;
    _sum: OfficeDoctorAvailabilitySumAggregateOutputType | null;
    _min: OfficeDoctorAvailabilityMinAggregateOutputType | null;
    _max: OfficeDoctorAvailabilityMaxAggregateOutputType | null;
};
export type OfficeDoctorAvailabilityAvgAggregateOutputType = {
    id: number | null;
    officeId: number | null;
};
export type OfficeDoctorAvailabilitySumAggregateOutputType = {
    id: number | null;
    officeId: number | null;
};
export type OfficeDoctorAvailabilityMinAggregateOutputType = {
    id: number | null;
    officeId: number | null;
    dayOfWeek: string | null;
    startTime: Date | null;
    endTime: Date | null;
    isAvailable: boolean | null;
    reason: string | null;
};
export type OfficeDoctorAvailabilityMaxAggregateOutputType = {
    id: number | null;
    officeId: number | null;
    dayOfWeek: string | null;
    startTime: Date | null;
    endTime: Date | null;
    isAvailable: boolean | null;
    reason: string | null;
};
export type OfficeDoctorAvailabilityCountAggregateOutputType = {
    id: number;
    officeId: number;
    dayOfWeek: number;
    startTime: number;
    endTime: number;
    isAvailable: number;
    reason: number;
    _all: number;
};
export type OfficeDoctorAvailabilityAvgAggregateInputType = {
    id?: true;
    officeId?: true;
};
export type OfficeDoctorAvailabilitySumAggregateInputType = {
    id?: true;
    officeId?: true;
};
export type OfficeDoctorAvailabilityMinAggregateInputType = {
    id?: true;
    officeId?: true;
    dayOfWeek?: true;
    startTime?: true;
    endTime?: true;
    isAvailable?: true;
    reason?: true;
};
export type OfficeDoctorAvailabilityMaxAggregateInputType = {
    id?: true;
    officeId?: true;
    dayOfWeek?: true;
    startTime?: true;
    endTime?: true;
    isAvailable?: true;
    reason?: true;
};
export type OfficeDoctorAvailabilityCountAggregateInputType = {
    id?: true;
    officeId?: true;
    dayOfWeek?: true;
    startTime?: true;
    endTime?: true;
    isAvailable?: true;
    reason?: true;
    _all?: true;
};
export type OfficeDoctorAvailabilityAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OfficeDoctorAvailabilityWhereInput;
    orderBy?: Prisma.OfficeDoctorAvailabilityOrderByWithRelationInput | Prisma.OfficeDoctorAvailabilityOrderByWithRelationInput[];
    cursor?: Prisma.OfficeDoctorAvailabilityWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OfficeDoctorAvailabilityCountAggregateInputType;
    _avg?: OfficeDoctorAvailabilityAvgAggregateInputType;
    _sum?: OfficeDoctorAvailabilitySumAggregateInputType;
    _min?: OfficeDoctorAvailabilityMinAggregateInputType;
    _max?: OfficeDoctorAvailabilityMaxAggregateInputType;
};
export type GetOfficeDoctorAvailabilityAggregateType<T extends OfficeDoctorAvailabilityAggregateArgs> = {
    [P in keyof T & keyof AggregateOfficeDoctorAvailability]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOfficeDoctorAvailability[P]> : Prisma.GetScalarType<T[P], AggregateOfficeDoctorAvailability[P]>;
};
export type OfficeDoctorAvailabilityGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OfficeDoctorAvailabilityWhereInput;
    orderBy?: Prisma.OfficeDoctorAvailabilityOrderByWithAggregationInput | Prisma.OfficeDoctorAvailabilityOrderByWithAggregationInput[];
    by: Prisma.OfficeDoctorAvailabilityScalarFieldEnum[] | Prisma.OfficeDoctorAvailabilityScalarFieldEnum;
    having?: Prisma.OfficeDoctorAvailabilityScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OfficeDoctorAvailabilityCountAggregateInputType | true;
    _avg?: OfficeDoctorAvailabilityAvgAggregateInputType;
    _sum?: OfficeDoctorAvailabilitySumAggregateInputType;
    _min?: OfficeDoctorAvailabilityMinAggregateInputType;
    _max?: OfficeDoctorAvailabilityMaxAggregateInputType;
};
export type OfficeDoctorAvailabilityGroupByOutputType = {
    id: number;
    officeId: number;
    dayOfWeek: string;
    startTime: Date;
    endTime: Date;
    isAvailable: boolean;
    reason: string | null;
    _count: OfficeDoctorAvailabilityCountAggregateOutputType | null;
    _avg: OfficeDoctorAvailabilityAvgAggregateOutputType | null;
    _sum: OfficeDoctorAvailabilitySumAggregateOutputType | null;
    _min: OfficeDoctorAvailabilityMinAggregateOutputType | null;
    _max: OfficeDoctorAvailabilityMaxAggregateOutputType | null;
};
type GetOfficeDoctorAvailabilityGroupByPayload<T extends OfficeDoctorAvailabilityGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OfficeDoctorAvailabilityGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OfficeDoctorAvailabilityGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OfficeDoctorAvailabilityGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OfficeDoctorAvailabilityGroupByOutputType[P]>;
}>>;
export type OfficeDoctorAvailabilityWhereInput = {
    AND?: Prisma.OfficeDoctorAvailabilityWhereInput | Prisma.OfficeDoctorAvailabilityWhereInput[];
    OR?: Prisma.OfficeDoctorAvailabilityWhereInput[];
    NOT?: Prisma.OfficeDoctorAvailabilityWhereInput | Prisma.OfficeDoctorAvailabilityWhereInput[];
    id?: Prisma.IntFilter<"OfficeDoctorAvailability"> | number;
    officeId?: Prisma.IntFilter<"OfficeDoctorAvailability"> | number;
    dayOfWeek?: Prisma.StringFilter<"OfficeDoctorAvailability"> | string;
    startTime?: Prisma.DateTimeFilter<"OfficeDoctorAvailability"> | Date | string;
    endTime?: Prisma.DateTimeFilter<"OfficeDoctorAvailability"> | Date | string;
    isAvailable?: Prisma.BoolFilter<"OfficeDoctorAvailability"> | boolean;
    reason?: Prisma.StringNullableFilter<"OfficeDoctorAvailability"> | string | null;
    office?: Prisma.XOR<Prisma.OfficeScalarRelationFilter, Prisma.OfficeWhereInput>;
};
export type OfficeDoctorAvailabilityOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    officeId?: Prisma.SortOrder;
    dayOfWeek?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    isAvailable?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    office?: Prisma.OfficeOrderByWithRelationInput;
    _relevance?: Prisma.OfficeDoctorAvailabilityOrderByRelevanceInput;
};
export type OfficeDoctorAvailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.OfficeDoctorAvailabilityWhereInput | Prisma.OfficeDoctorAvailabilityWhereInput[];
    OR?: Prisma.OfficeDoctorAvailabilityWhereInput[];
    NOT?: Prisma.OfficeDoctorAvailabilityWhereInput | Prisma.OfficeDoctorAvailabilityWhereInput[];
    officeId?: Prisma.IntFilter<"OfficeDoctorAvailability"> | number;
    dayOfWeek?: Prisma.StringFilter<"OfficeDoctorAvailability"> | string;
    startTime?: Prisma.DateTimeFilter<"OfficeDoctorAvailability"> | Date | string;
    endTime?: Prisma.DateTimeFilter<"OfficeDoctorAvailability"> | Date | string;
    isAvailable?: Prisma.BoolFilter<"OfficeDoctorAvailability"> | boolean;
    reason?: Prisma.StringNullableFilter<"OfficeDoctorAvailability"> | string | null;
    office?: Prisma.XOR<Prisma.OfficeScalarRelationFilter, Prisma.OfficeWhereInput>;
}, "id">;
export type OfficeDoctorAvailabilityOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    officeId?: Prisma.SortOrder;
    dayOfWeek?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    isAvailable?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.OfficeDoctorAvailabilityCountOrderByAggregateInput;
    _avg?: Prisma.OfficeDoctorAvailabilityAvgOrderByAggregateInput;
    _max?: Prisma.OfficeDoctorAvailabilityMaxOrderByAggregateInput;
    _min?: Prisma.OfficeDoctorAvailabilityMinOrderByAggregateInput;
    _sum?: Prisma.OfficeDoctorAvailabilitySumOrderByAggregateInput;
};
export type OfficeDoctorAvailabilityScalarWhereWithAggregatesInput = {
    AND?: Prisma.OfficeDoctorAvailabilityScalarWhereWithAggregatesInput | Prisma.OfficeDoctorAvailabilityScalarWhereWithAggregatesInput[];
    OR?: Prisma.OfficeDoctorAvailabilityScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OfficeDoctorAvailabilityScalarWhereWithAggregatesInput | Prisma.OfficeDoctorAvailabilityScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"OfficeDoctorAvailability"> | number;
    officeId?: Prisma.IntWithAggregatesFilter<"OfficeDoctorAvailability"> | number;
    dayOfWeek?: Prisma.StringWithAggregatesFilter<"OfficeDoctorAvailability"> | string;
    startTime?: Prisma.DateTimeWithAggregatesFilter<"OfficeDoctorAvailability"> | Date | string;
    endTime?: Prisma.DateTimeWithAggregatesFilter<"OfficeDoctorAvailability"> | Date | string;
    isAvailable?: Prisma.BoolWithAggregatesFilter<"OfficeDoctorAvailability"> | boolean;
    reason?: Prisma.StringNullableWithAggregatesFilter<"OfficeDoctorAvailability"> | string | null;
};
export type OfficeDoctorAvailabilityCreateInput = {
    dayOfWeek: string;
    startTime: Date | string;
    endTime: Date | string;
    isAvailable?: boolean;
    reason?: string | null;
    office: Prisma.OfficeCreateNestedOneWithoutAvailabilityInput;
};
export type OfficeDoctorAvailabilityUncheckedCreateInput = {
    id?: number;
    officeId: number;
    dayOfWeek: string;
    startTime: Date | string;
    endTime: Date | string;
    isAvailable?: boolean;
    reason?: string | null;
};
export type OfficeDoctorAvailabilityUpdateInput = {
    dayOfWeek?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    office?: Prisma.OfficeUpdateOneRequiredWithoutAvailabilityNestedInput;
};
export type OfficeDoctorAvailabilityUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    officeId?: Prisma.IntFieldUpdateOperationsInput | number;
    dayOfWeek?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OfficeDoctorAvailabilityCreateManyInput = {
    id?: number;
    officeId: number;
    dayOfWeek: string;
    startTime: Date | string;
    endTime: Date | string;
    isAvailable?: boolean;
    reason?: string | null;
};
export type OfficeDoctorAvailabilityUpdateManyMutationInput = {
    dayOfWeek?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OfficeDoctorAvailabilityUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    officeId?: Prisma.IntFieldUpdateOperationsInput | number;
    dayOfWeek?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OfficeDoctorAvailabilityListRelationFilter = {
    every?: Prisma.OfficeDoctorAvailabilityWhereInput;
    some?: Prisma.OfficeDoctorAvailabilityWhereInput;
    none?: Prisma.OfficeDoctorAvailabilityWhereInput;
};
export type OfficeDoctorAvailabilityOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OfficeDoctorAvailabilityOrderByRelevanceInput = {
    fields: Prisma.OfficeDoctorAvailabilityOrderByRelevanceFieldEnum | Prisma.OfficeDoctorAvailabilityOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type OfficeDoctorAvailabilityCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    officeId?: Prisma.SortOrder;
    dayOfWeek?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    isAvailable?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
};
export type OfficeDoctorAvailabilityAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    officeId?: Prisma.SortOrder;
};
export type OfficeDoctorAvailabilityMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    officeId?: Prisma.SortOrder;
    dayOfWeek?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    isAvailable?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
};
export type OfficeDoctorAvailabilityMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    officeId?: Prisma.SortOrder;
    dayOfWeek?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    isAvailable?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
};
export type OfficeDoctorAvailabilitySumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    officeId?: Prisma.SortOrder;
};
export type OfficeDoctorAvailabilityCreateNestedManyWithoutOfficeInput = {
    create?: Prisma.XOR<Prisma.OfficeDoctorAvailabilityCreateWithoutOfficeInput, Prisma.OfficeDoctorAvailabilityUncheckedCreateWithoutOfficeInput> | Prisma.OfficeDoctorAvailabilityCreateWithoutOfficeInput[] | Prisma.OfficeDoctorAvailabilityUncheckedCreateWithoutOfficeInput[];
    connectOrCreate?: Prisma.OfficeDoctorAvailabilityCreateOrConnectWithoutOfficeInput | Prisma.OfficeDoctorAvailabilityCreateOrConnectWithoutOfficeInput[];
    createMany?: Prisma.OfficeDoctorAvailabilityCreateManyOfficeInputEnvelope;
    connect?: Prisma.OfficeDoctorAvailabilityWhereUniqueInput | Prisma.OfficeDoctorAvailabilityWhereUniqueInput[];
};
export type OfficeDoctorAvailabilityUncheckedCreateNestedManyWithoutOfficeInput = {
    create?: Prisma.XOR<Prisma.OfficeDoctorAvailabilityCreateWithoutOfficeInput, Prisma.OfficeDoctorAvailabilityUncheckedCreateWithoutOfficeInput> | Prisma.OfficeDoctorAvailabilityCreateWithoutOfficeInput[] | Prisma.OfficeDoctorAvailabilityUncheckedCreateWithoutOfficeInput[];
    connectOrCreate?: Prisma.OfficeDoctorAvailabilityCreateOrConnectWithoutOfficeInput | Prisma.OfficeDoctorAvailabilityCreateOrConnectWithoutOfficeInput[];
    createMany?: Prisma.OfficeDoctorAvailabilityCreateManyOfficeInputEnvelope;
    connect?: Prisma.OfficeDoctorAvailabilityWhereUniqueInput | Prisma.OfficeDoctorAvailabilityWhereUniqueInput[];
};
export type OfficeDoctorAvailabilityUpdateManyWithoutOfficeNestedInput = {
    create?: Prisma.XOR<Prisma.OfficeDoctorAvailabilityCreateWithoutOfficeInput, Prisma.OfficeDoctorAvailabilityUncheckedCreateWithoutOfficeInput> | Prisma.OfficeDoctorAvailabilityCreateWithoutOfficeInput[] | Prisma.OfficeDoctorAvailabilityUncheckedCreateWithoutOfficeInput[];
    connectOrCreate?: Prisma.OfficeDoctorAvailabilityCreateOrConnectWithoutOfficeInput | Prisma.OfficeDoctorAvailabilityCreateOrConnectWithoutOfficeInput[];
    upsert?: Prisma.OfficeDoctorAvailabilityUpsertWithWhereUniqueWithoutOfficeInput | Prisma.OfficeDoctorAvailabilityUpsertWithWhereUniqueWithoutOfficeInput[];
    createMany?: Prisma.OfficeDoctorAvailabilityCreateManyOfficeInputEnvelope;
    set?: Prisma.OfficeDoctorAvailabilityWhereUniqueInput | Prisma.OfficeDoctorAvailabilityWhereUniqueInput[];
    disconnect?: Prisma.OfficeDoctorAvailabilityWhereUniqueInput | Prisma.OfficeDoctorAvailabilityWhereUniqueInput[];
    delete?: Prisma.OfficeDoctorAvailabilityWhereUniqueInput | Prisma.OfficeDoctorAvailabilityWhereUniqueInput[];
    connect?: Prisma.OfficeDoctorAvailabilityWhereUniqueInput | Prisma.OfficeDoctorAvailabilityWhereUniqueInput[];
    update?: Prisma.OfficeDoctorAvailabilityUpdateWithWhereUniqueWithoutOfficeInput | Prisma.OfficeDoctorAvailabilityUpdateWithWhereUniqueWithoutOfficeInput[];
    updateMany?: Prisma.OfficeDoctorAvailabilityUpdateManyWithWhereWithoutOfficeInput | Prisma.OfficeDoctorAvailabilityUpdateManyWithWhereWithoutOfficeInput[];
    deleteMany?: Prisma.OfficeDoctorAvailabilityScalarWhereInput | Prisma.OfficeDoctorAvailabilityScalarWhereInput[];
};
export type OfficeDoctorAvailabilityUncheckedUpdateManyWithoutOfficeNestedInput = {
    create?: Prisma.XOR<Prisma.OfficeDoctorAvailabilityCreateWithoutOfficeInput, Prisma.OfficeDoctorAvailabilityUncheckedCreateWithoutOfficeInput> | Prisma.OfficeDoctorAvailabilityCreateWithoutOfficeInput[] | Prisma.OfficeDoctorAvailabilityUncheckedCreateWithoutOfficeInput[];
    connectOrCreate?: Prisma.OfficeDoctorAvailabilityCreateOrConnectWithoutOfficeInput | Prisma.OfficeDoctorAvailabilityCreateOrConnectWithoutOfficeInput[];
    upsert?: Prisma.OfficeDoctorAvailabilityUpsertWithWhereUniqueWithoutOfficeInput | Prisma.OfficeDoctorAvailabilityUpsertWithWhereUniqueWithoutOfficeInput[];
    createMany?: Prisma.OfficeDoctorAvailabilityCreateManyOfficeInputEnvelope;
    set?: Prisma.OfficeDoctorAvailabilityWhereUniqueInput | Prisma.OfficeDoctorAvailabilityWhereUniqueInput[];
    disconnect?: Prisma.OfficeDoctorAvailabilityWhereUniqueInput | Prisma.OfficeDoctorAvailabilityWhereUniqueInput[];
    delete?: Prisma.OfficeDoctorAvailabilityWhereUniqueInput | Prisma.OfficeDoctorAvailabilityWhereUniqueInput[];
    connect?: Prisma.OfficeDoctorAvailabilityWhereUniqueInput | Prisma.OfficeDoctorAvailabilityWhereUniqueInput[];
    update?: Prisma.OfficeDoctorAvailabilityUpdateWithWhereUniqueWithoutOfficeInput | Prisma.OfficeDoctorAvailabilityUpdateWithWhereUniqueWithoutOfficeInput[];
    updateMany?: Prisma.OfficeDoctorAvailabilityUpdateManyWithWhereWithoutOfficeInput | Prisma.OfficeDoctorAvailabilityUpdateManyWithWhereWithoutOfficeInput[];
    deleteMany?: Prisma.OfficeDoctorAvailabilityScalarWhereInput | Prisma.OfficeDoctorAvailabilityScalarWhereInput[];
};
export type OfficeDoctorAvailabilityCreateWithoutOfficeInput = {
    dayOfWeek: string;
    startTime: Date | string;
    endTime: Date | string;
    isAvailable?: boolean;
    reason?: string | null;
};
export type OfficeDoctorAvailabilityUncheckedCreateWithoutOfficeInput = {
    id?: number;
    dayOfWeek: string;
    startTime: Date | string;
    endTime: Date | string;
    isAvailable?: boolean;
    reason?: string | null;
};
export type OfficeDoctorAvailabilityCreateOrConnectWithoutOfficeInput = {
    where: Prisma.OfficeDoctorAvailabilityWhereUniqueInput;
    create: Prisma.XOR<Prisma.OfficeDoctorAvailabilityCreateWithoutOfficeInput, Prisma.OfficeDoctorAvailabilityUncheckedCreateWithoutOfficeInput>;
};
export type OfficeDoctorAvailabilityCreateManyOfficeInputEnvelope = {
    data: Prisma.OfficeDoctorAvailabilityCreateManyOfficeInput | Prisma.OfficeDoctorAvailabilityCreateManyOfficeInput[];
    skipDuplicates?: boolean;
};
export type OfficeDoctorAvailabilityUpsertWithWhereUniqueWithoutOfficeInput = {
    where: Prisma.OfficeDoctorAvailabilityWhereUniqueInput;
    update: Prisma.XOR<Prisma.OfficeDoctorAvailabilityUpdateWithoutOfficeInput, Prisma.OfficeDoctorAvailabilityUncheckedUpdateWithoutOfficeInput>;
    create: Prisma.XOR<Prisma.OfficeDoctorAvailabilityCreateWithoutOfficeInput, Prisma.OfficeDoctorAvailabilityUncheckedCreateWithoutOfficeInput>;
};
export type OfficeDoctorAvailabilityUpdateWithWhereUniqueWithoutOfficeInput = {
    where: Prisma.OfficeDoctorAvailabilityWhereUniqueInput;
    data: Prisma.XOR<Prisma.OfficeDoctorAvailabilityUpdateWithoutOfficeInput, Prisma.OfficeDoctorAvailabilityUncheckedUpdateWithoutOfficeInput>;
};
export type OfficeDoctorAvailabilityUpdateManyWithWhereWithoutOfficeInput = {
    where: Prisma.OfficeDoctorAvailabilityScalarWhereInput;
    data: Prisma.XOR<Prisma.OfficeDoctorAvailabilityUpdateManyMutationInput, Prisma.OfficeDoctorAvailabilityUncheckedUpdateManyWithoutOfficeInput>;
};
export type OfficeDoctorAvailabilityScalarWhereInput = {
    AND?: Prisma.OfficeDoctorAvailabilityScalarWhereInput | Prisma.OfficeDoctorAvailabilityScalarWhereInput[];
    OR?: Prisma.OfficeDoctorAvailabilityScalarWhereInput[];
    NOT?: Prisma.OfficeDoctorAvailabilityScalarWhereInput | Prisma.OfficeDoctorAvailabilityScalarWhereInput[];
    id?: Prisma.IntFilter<"OfficeDoctorAvailability"> | number;
    officeId?: Prisma.IntFilter<"OfficeDoctorAvailability"> | number;
    dayOfWeek?: Prisma.StringFilter<"OfficeDoctorAvailability"> | string;
    startTime?: Prisma.DateTimeFilter<"OfficeDoctorAvailability"> | Date | string;
    endTime?: Prisma.DateTimeFilter<"OfficeDoctorAvailability"> | Date | string;
    isAvailable?: Prisma.BoolFilter<"OfficeDoctorAvailability"> | boolean;
    reason?: Prisma.StringNullableFilter<"OfficeDoctorAvailability"> | string | null;
};
export type OfficeDoctorAvailabilityCreateManyOfficeInput = {
    id?: number;
    dayOfWeek: string;
    startTime: Date | string;
    endTime: Date | string;
    isAvailable?: boolean;
    reason?: string | null;
};
export type OfficeDoctorAvailabilityUpdateWithoutOfficeInput = {
    dayOfWeek?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OfficeDoctorAvailabilityUncheckedUpdateWithoutOfficeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    dayOfWeek?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OfficeDoctorAvailabilityUncheckedUpdateManyWithoutOfficeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    dayOfWeek?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OfficeDoctorAvailabilitySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    officeId?: boolean;
    dayOfWeek?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    isAvailable?: boolean;
    reason?: boolean;
    office?: boolean | Prisma.OfficeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["officeDoctorAvailability"]>;
export type OfficeDoctorAvailabilitySelectScalar = {
    id?: boolean;
    officeId?: boolean;
    dayOfWeek?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    isAvailable?: boolean;
    reason?: boolean;
};
export type OfficeDoctorAvailabilityOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "officeId" | "dayOfWeek" | "startTime" | "endTime" | "isAvailable" | "reason", ExtArgs["result"]["officeDoctorAvailability"]>;
export type OfficeDoctorAvailabilityInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    office?: boolean | Prisma.OfficeDefaultArgs<ExtArgs>;
};
export type $OfficeDoctorAvailabilityPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "OfficeDoctorAvailability";
    objects: {
        office: Prisma.$OfficePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        officeId: number;
        dayOfWeek: string;
        startTime: Date;
        endTime: Date;
        isAvailable: boolean;
        reason: string | null;
    }, ExtArgs["result"]["officeDoctorAvailability"]>;
    composites: {};
};
export type OfficeDoctorAvailabilityGetPayload<S extends boolean | null | undefined | OfficeDoctorAvailabilityDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OfficeDoctorAvailabilityPayload, S>;
export type OfficeDoctorAvailabilityCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OfficeDoctorAvailabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OfficeDoctorAvailabilityCountAggregateInputType | true;
};
export interface OfficeDoctorAvailabilityDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['OfficeDoctorAvailability'];
        meta: {
            name: 'OfficeDoctorAvailability';
        };
    };
    findUnique<T extends OfficeDoctorAvailabilityFindUniqueArgs>(args: Prisma.SelectSubset<T, OfficeDoctorAvailabilityFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OfficeDoctorAvailabilityClient<runtime.Types.Result.GetResult<Prisma.$OfficeDoctorAvailabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OfficeDoctorAvailabilityFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OfficeDoctorAvailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OfficeDoctorAvailabilityClient<runtime.Types.Result.GetResult<Prisma.$OfficeDoctorAvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OfficeDoctorAvailabilityFindFirstArgs>(args?: Prisma.SelectSubset<T, OfficeDoctorAvailabilityFindFirstArgs<ExtArgs>>): Prisma.Prisma__OfficeDoctorAvailabilityClient<runtime.Types.Result.GetResult<Prisma.$OfficeDoctorAvailabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OfficeDoctorAvailabilityFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OfficeDoctorAvailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OfficeDoctorAvailabilityClient<runtime.Types.Result.GetResult<Prisma.$OfficeDoctorAvailabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OfficeDoctorAvailabilityFindManyArgs>(args?: Prisma.SelectSubset<T, OfficeDoctorAvailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OfficeDoctorAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OfficeDoctorAvailabilityCreateArgs>(args: Prisma.SelectSubset<T, OfficeDoctorAvailabilityCreateArgs<ExtArgs>>): Prisma.Prisma__OfficeDoctorAvailabilityClient<runtime.Types.Result.GetResult<Prisma.$OfficeDoctorAvailabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OfficeDoctorAvailabilityCreateManyArgs>(args?: Prisma.SelectSubset<T, OfficeDoctorAvailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends OfficeDoctorAvailabilityDeleteArgs>(args: Prisma.SelectSubset<T, OfficeDoctorAvailabilityDeleteArgs<ExtArgs>>): Prisma.Prisma__OfficeDoctorAvailabilityClient<runtime.Types.Result.GetResult<Prisma.$OfficeDoctorAvailabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OfficeDoctorAvailabilityUpdateArgs>(args: Prisma.SelectSubset<T, OfficeDoctorAvailabilityUpdateArgs<ExtArgs>>): Prisma.Prisma__OfficeDoctorAvailabilityClient<runtime.Types.Result.GetResult<Prisma.$OfficeDoctorAvailabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OfficeDoctorAvailabilityDeleteManyArgs>(args?: Prisma.SelectSubset<T, OfficeDoctorAvailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OfficeDoctorAvailabilityUpdateManyArgs>(args: Prisma.SelectSubset<T, OfficeDoctorAvailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends OfficeDoctorAvailabilityUpsertArgs>(args: Prisma.SelectSubset<T, OfficeDoctorAvailabilityUpsertArgs<ExtArgs>>): Prisma.Prisma__OfficeDoctorAvailabilityClient<runtime.Types.Result.GetResult<Prisma.$OfficeDoctorAvailabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OfficeDoctorAvailabilityCountArgs>(args?: Prisma.Subset<T, OfficeDoctorAvailabilityCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OfficeDoctorAvailabilityCountAggregateOutputType> : number>;
    aggregate<T extends OfficeDoctorAvailabilityAggregateArgs>(args: Prisma.Subset<T, OfficeDoctorAvailabilityAggregateArgs>): Prisma.PrismaPromise<GetOfficeDoctorAvailabilityAggregateType<T>>;
    groupBy<T extends OfficeDoctorAvailabilityGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OfficeDoctorAvailabilityGroupByArgs['orderBy'];
    } : {
        orderBy?: OfficeDoctorAvailabilityGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OfficeDoctorAvailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfficeDoctorAvailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OfficeDoctorAvailabilityFieldRefs;
}
export interface Prisma__OfficeDoctorAvailabilityClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    office<T extends Prisma.OfficeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OfficeDefaultArgs<ExtArgs>>): Prisma.Prisma__OfficeClient<runtime.Types.Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OfficeDoctorAvailabilityFieldRefs {
    readonly id: Prisma.FieldRef<"OfficeDoctorAvailability", 'Int'>;
    readonly officeId: Prisma.FieldRef<"OfficeDoctorAvailability", 'Int'>;
    readonly dayOfWeek: Prisma.FieldRef<"OfficeDoctorAvailability", 'String'>;
    readonly startTime: Prisma.FieldRef<"OfficeDoctorAvailability", 'DateTime'>;
    readonly endTime: Prisma.FieldRef<"OfficeDoctorAvailability", 'DateTime'>;
    readonly isAvailable: Prisma.FieldRef<"OfficeDoctorAvailability", 'Boolean'>;
    readonly reason: Prisma.FieldRef<"OfficeDoctorAvailability", 'String'>;
}
export type OfficeDoctorAvailabilityFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfficeDoctorAvailabilitySelect<ExtArgs> | null;
    omit?: Prisma.OfficeDoctorAvailabilityOmit<ExtArgs> | null;
    include?: Prisma.OfficeDoctorAvailabilityInclude<ExtArgs> | null;
    where: Prisma.OfficeDoctorAvailabilityWhereUniqueInput;
};
export type OfficeDoctorAvailabilityFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfficeDoctorAvailabilitySelect<ExtArgs> | null;
    omit?: Prisma.OfficeDoctorAvailabilityOmit<ExtArgs> | null;
    include?: Prisma.OfficeDoctorAvailabilityInclude<ExtArgs> | null;
    where: Prisma.OfficeDoctorAvailabilityWhereUniqueInput;
};
export type OfficeDoctorAvailabilityFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfficeDoctorAvailabilitySelect<ExtArgs> | null;
    omit?: Prisma.OfficeDoctorAvailabilityOmit<ExtArgs> | null;
    include?: Prisma.OfficeDoctorAvailabilityInclude<ExtArgs> | null;
    where?: Prisma.OfficeDoctorAvailabilityWhereInput;
    orderBy?: Prisma.OfficeDoctorAvailabilityOrderByWithRelationInput | Prisma.OfficeDoctorAvailabilityOrderByWithRelationInput[];
    cursor?: Prisma.OfficeDoctorAvailabilityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OfficeDoctorAvailabilityScalarFieldEnum | Prisma.OfficeDoctorAvailabilityScalarFieldEnum[];
};
export type OfficeDoctorAvailabilityFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfficeDoctorAvailabilitySelect<ExtArgs> | null;
    omit?: Prisma.OfficeDoctorAvailabilityOmit<ExtArgs> | null;
    include?: Prisma.OfficeDoctorAvailabilityInclude<ExtArgs> | null;
    where?: Prisma.OfficeDoctorAvailabilityWhereInput;
    orderBy?: Prisma.OfficeDoctorAvailabilityOrderByWithRelationInput | Prisma.OfficeDoctorAvailabilityOrderByWithRelationInput[];
    cursor?: Prisma.OfficeDoctorAvailabilityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OfficeDoctorAvailabilityScalarFieldEnum | Prisma.OfficeDoctorAvailabilityScalarFieldEnum[];
};
export type OfficeDoctorAvailabilityFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfficeDoctorAvailabilitySelect<ExtArgs> | null;
    omit?: Prisma.OfficeDoctorAvailabilityOmit<ExtArgs> | null;
    include?: Prisma.OfficeDoctorAvailabilityInclude<ExtArgs> | null;
    where?: Prisma.OfficeDoctorAvailabilityWhereInput;
    orderBy?: Prisma.OfficeDoctorAvailabilityOrderByWithRelationInput | Prisma.OfficeDoctorAvailabilityOrderByWithRelationInput[];
    cursor?: Prisma.OfficeDoctorAvailabilityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OfficeDoctorAvailabilityScalarFieldEnum | Prisma.OfficeDoctorAvailabilityScalarFieldEnum[];
};
export type OfficeDoctorAvailabilityCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfficeDoctorAvailabilitySelect<ExtArgs> | null;
    omit?: Prisma.OfficeDoctorAvailabilityOmit<ExtArgs> | null;
    include?: Prisma.OfficeDoctorAvailabilityInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OfficeDoctorAvailabilityCreateInput, Prisma.OfficeDoctorAvailabilityUncheckedCreateInput>;
};
export type OfficeDoctorAvailabilityCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OfficeDoctorAvailabilityCreateManyInput | Prisma.OfficeDoctorAvailabilityCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OfficeDoctorAvailabilityUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfficeDoctorAvailabilitySelect<ExtArgs> | null;
    omit?: Prisma.OfficeDoctorAvailabilityOmit<ExtArgs> | null;
    include?: Prisma.OfficeDoctorAvailabilityInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OfficeDoctorAvailabilityUpdateInput, Prisma.OfficeDoctorAvailabilityUncheckedUpdateInput>;
    where: Prisma.OfficeDoctorAvailabilityWhereUniqueInput;
};
export type OfficeDoctorAvailabilityUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OfficeDoctorAvailabilityUpdateManyMutationInput, Prisma.OfficeDoctorAvailabilityUncheckedUpdateManyInput>;
    where?: Prisma.OfficeDoctorAvailabilityWhereInput;
    limit?: number;
};
export type OfficeDoctorAvailabilityUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfficeDoctorAvailabilitySelect<ExtArgs> | null;
    omit?: Prisma.OfficeDoctorAvailabilityOmit<ExtArgs> | null;
    include?: Prisma.OfficeDoctorAvailabilityInclude<ExtArgs> | null;
    where: Prisma.OfficeDoctorAvailabilityWhereUniqueInput;
    create: Prisma.XOR<Prisma.OfficeDoctorAvailabilityCreateInput, Prisma.OfficeDoctorAvailabilityUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OfficeDoctorAvailabilityUpdateInput, Prisma.OfficeDoctorAvailabilityUncheckedUpdateInput>;
};
export type OfficeDoctorAvailabilityDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfficeDoctorAvailabilitySelect<ExtArgs> | null;
    omit?: Prisma.OfficeDoctorAvailabilityOmit<ExtArgs> | null;
    include?: Prisma.OfficeDoctorAvailabilityInclude<ExtArgs> | null;
    where: Prisma.OfficeDoctorAvailabilityWhereUniqueInput;
};
export type OfficeDoctorAvailabilityDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OfficeDoctorAvailabilityWhereInput;
    limit?: number;
};
export type OfficeDoctorAvailabilityDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfficeDoctorAvailabilitySelect<ExtArgs> | null;
    omit?: Prisma.OfficeDoctorAvailabilityOmit<ExtArgs> | null;
    include?: Prisma.OfficeDoctorAvailabilityInclude<ExtArgs> | null;
};
export {};
