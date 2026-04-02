import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DoctorDocumentModel = runtime.Types.Result.DefaultSelection<Prisma.$DoctorDocumentPayload>;
export type AggregateDoctorDocument = {
    _count: DoctorDocumentCountAggregateOutputType | null;
    _avg: DoctorDocumentAvgAggregateOutputType | null;
    _sum: DoctorDocumentSumAggregateOutputType | null;
    _min: DoctorDocumentMinAggregateOutputType | null;
    _max: DoctorDocumentMaxAggregateOutputType | null;
};
export type DoctorDocumentAvgAggregateOutputType = {
    id: number | null;
    doctorId: number | null;
};
export type DoctorDocumentSumAggregateOutputType = {
    id: number | null;
    doctorId: number | null;
};
export type DoctorDocumentMinAggregateOutputType = {
    id: number | null;
    doctorId: number | null;
    documentType: string | null;
    fileUrl: runtime.Bytes | null;
    uploadedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DoctorDocumentMaxAggregateOutputType = {
    id: number | null;
    doctorId: number | null;
    documentType: string | null;
    fileUrl: runtime.Bytes | null;
    uploadedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DoctorDocumentCountAggregateOutputType = {
    id: number;
    doctorId: number;
    documentType: number;
    fileUrl: number;
    uploadedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type DoctorDocumentAvgAggregateInputType = {
    id?: true;
    doctorId?: true;
};
export type DoctorDocumentSumAggregateInputType = {
    id?: true;
    doctorId?: true;
};
export type DoctorDocumentMinAggregateInputType = {
    id?: true;
    doctorId?: true;
    documentType?: true;
    fileUrl?: true;
    uploadedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DoctorDocumentMaxAggregateInputType = {
    id?: true;
    doctorId?: true;
    documentType?: true;
    fileUrl?: true;
    uploadedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DoctorDocumentCountAggregateInputType = {
    id?: true;
    doctorId?: true;
    documentType?: true;
    fileUrl?: true;
    uploadedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type DoctorDocumentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DoctorDocumentWhereInput;
    orderBy?: Prisma.DoctorDocumentOrderByWithRelationInput | Prisma.DoctorDocumentOrderByWithRelationInput[];
    cursor?: Prisma.DoctorDocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DoctorDocumentCountAggregateInputType;
    _avg?: DoctorDocumentAvgAggregateInputType;
    _sum?: DoctorDocumentSumAggregateInputType;
    _min?: DoctorDocumentMinAggregateInputType;
    _max?: DoctorDocumentMaxAggregateInputType;
};
export type GetDoctorDocumentAggregateType<T extends DoctorDocumentAggregateArgs> = {
    [P in keyof T & keyof AggregateDoctorDocument]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDoctorDocument[P]> : Prisma.GetScalarType<T[P], AggregateDoctorDocument[P]>;
};
export type DoctorDocumentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DoctorDocumentWhereInput;
    orderBy?: Prisma.DoctorDocumentOrderByWithAggregationInput | Prisma.DoctorDocumentOrderByWithAggregationInput[];
    by: Prisma.DoctorDocumentScalarFieldEnum[] | Prisma.DoctorDocumentScalarFieldEnum;
    having?: Prisma.DoctorDocumentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DoctorDocumentCountAggregateInputType | true;
    _avg?: DoctorDocumentAvgAggregateInputType;
    _sum?: DoctorDocumentSumAggregateInputType;
    _min?: DoctorDocumentMinAggregateInputType;
    _max?: DoctorDocumentMaxAggregateInputType;
};
export type DoctorDocumentGroupByOutputType = {
    id: number;
    doctorId: number;
    documentType: string;
    fileUrl: runtime.Bytes;
    uploadedAt: Date;
    createdAt: Date;
    updatedAt: Date;
    _count: DoctorDocumentCountAggregateOutputType | null;
    _avg: DoctorDocumentAvgAggregateOutputType | null;
    _sum: DoctorDocumentSumAggregateOutputType | null;
    _min: DoctorDocumentMinAggregateOutputType | null;
    _max: DoctorDocumentMaxAggregateOutputType | null;
};
type GetDoctorDocumentGroupByPayload<T extends DoctorDocumentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DoctorDocumentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DoctorDocumentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DoctorDocumentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DoctorDocumentGroupByOutputType[P]>;
}>>;
export type DoctorDocumentWhereInput = {
    AND?: Prisma.DoctorDocumentWhereInput | Prisma.DoctorDocumentWhereInput[];
    OR?: Prisma.DoctorDocumentWhereInput[];
    NOT?: Prisma.DoctorDocumentWhereInput | Prisma.DoctorDocumentWhereInput[];
    id?: Prisma.IntFilter<"DoctorDocument"> | number;
    doctorId?: Prisma.IntFilter<"DoctorDocument"> | number;
    documentType?: Prisma.StringFilter<"DoctorDocument"> | string;
    fileUrl?: Prisma.BytesFilter<"DoctorDocument"> | runtime.Bytes;
    uploadedAt?: Prisma.DateTimeFilter<"DoctorDocument"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"DoctorDocument"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"DoctorDocument"> | Date | string;
    doctor?: Prisma.XOR<Prisma.DoctorScalarRelationFilter, Prisma.DoctorWhereInput>;
};
export type DoctorDocumentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    documentType?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    uploadedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    doctor?: Prisma.DoctorOrderByWithRelationInput;
    _relevance?: Prisma.DoctorDocumentOrderByRelevanceInput;
};
export type DoctorDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.DoctorDocumentWhereInput | Prisma.DoctorDocumentWhereInput[];
    OR?: Prisma.DoctorDocumentWhereInput[];
    NOT?: Prisma.DoctorDocumentWhereInput | Prisma.DoctorDocumentWhereInput[];
    doctorId?: Prisma.IntFilter<"DoctorDocument"> | number;
    documentType?: Prisma.StringFilter<"DoctorDocument"> | string;
    fileUrl?: Prisma.BytesFilter<"DoctorDocument"> | runtime.Bytes;
    uploadedAt?: Prisma.DateTimeFilter<"DoctorDocument"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"DoctorDocument"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"DoctorDocument"> | Date | string;
    doctor?: Prisma.XOR<Prisma.DoctorScalarRelationFilter, Prisma.DoctorWhereInput>;
}, "id">;
export type DoctorDocumentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    documentType?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    uploadedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.DoctorDocumentCountOrderByAggregateInput;
    _avg?: Prisma.DoctorDocumentAvgOrderByAggregateInput;
    _max?: Prisma.DoctorDocumentMaxOrderByAggregateInput;
    _min?: Prisma.DoctorDocumentMinOrderByAggregateInput;
    _sum?: Prisma.DoctorDocumentSumOrderByAggregateInput;
};
export type DoctorDocumentScalarWhereWithAggregatesInput = {
    AND?: Prisma.DoctorDocumentScalarWhereWithAggregatesInput | Prisma.DoctorDocumentScalarWhereWithAggregatesInput[];
    OR?: Prisma.DoctorDocumentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DoctorDocumentScalarWhereWithAggregatesInput | Prisma.DoctorDocumentScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"DoctorDocument"> | number;
    doctorId?: Prisma.IntWithAggregatesFilter<"DoctorDocument"> | number;
    documentType?: Prisma.StringWithAggregatesFilter<"DoctorDocument"> | string;
    fileUrl?: Prisma.BytesWithAggregatesFilter<"DoctorDocument"> | runtime.Bytes;
    uploadedAt?: Prisma.DateTimeWithAggregatesFilter<"DoctorDocument"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"DoctorDocument"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"DoctorDocument"> | Date | string;
};
export type DoctorDocumentCreateInput = {
    documentType: string;
    fileUrl: runtime.Bytes;
    uploadedAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    doctor: Prisma.DoctorCreateNestedOneWithoutDocumentsInput;
};
export type DoctorDocumentUncheckedCreateInput = {
    id?: number;
    doctorId: number;
    documentType: string;
    fileUrl: runtime.Bytes;
    uploadedAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DoctorDocumentUpdateInput = {
    documentType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    uploadedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    doctor?: Prisma.DoctorUpdateOneRequiredWithoutDocumentsNestedInput;
};
export type DoctorDocumentUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    doctorId?: Prisma.IntFieldUpdateOperationsInput | number;
    documentType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    uploadedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DoctorDocumentCreateManyInput = {
    id?: number;
    doctorId: number;
    documentType: string;
    fileUrl: runtime.Bytes;
    uploadedAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DoctorDocumentUpdateManyMutationInput = {
    documentType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    uploadedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DoctorDocumentUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    doctorId?: Prisma.IntFieldUpdateOperationsInput | number;
    documentType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    uploadedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DoctorDocumentListRelationFilter = {
    every?: Prisma.DoctorDocumentWhereInput;
    some?: Prisma.DoctorDocumentWhereInput;
    none?: Prisma.DoctorDocumentWhereInput;
};
export type DoctorDocumentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DoctorDocumentOrderByRelevanceInput = {
    fields: Prisma.DoctorDocumentOrderByRelevanceFieldEnum | Prisma.DoctorDocumentOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type DoctorDocumentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    documentType?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    uploadedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DoctorDocumentAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
};
export type DoctorDocumentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    documentType?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    uploadedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DoctorDocumentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    documentType?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    uploadedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DoctorDocumentSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
};
export type DoctorDocumentCreateNestedManyWithoutDoctorInput = {
    create?: Prisma.XOR<Prisma.DoctorDocumentCreateWithoutDoctorInput, Prisma.DoctorDocumentUncheckedCreateWithoutDoctorInput> | Prisma.DoctorDocumentCreateWithoutDoctorInput[] | Prisma.DoctorDocumentUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: Prisma.DoctorDocumentCreateOrConnectWithoutDoctorInput | Prisma.DoctorDocumentCreateOrConnectWithoutDoctorInput[];
    createMany?: Prisma.DoctorDocumentCreateManyDoctorInputEnvelope;
    connect?: Prisma.DoctorDocumentWhereUniqueInput | Prisma.DoctorDocumentWhereUniqueInput[];
};
export type DoctorDocumentUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: Prisma.XOR<Prisma.DoctorDocumentCreateWithoutDoctorInput, Prisma.DoctorDocumentUncheckedCreateWithoutDoctorInput> | Prisma.DoctorDocumentCreateWithoutDoctorInput[] | Prisma.DoctorDocumentUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: Prisma.DoctorDocumentCreateOrConnectWithoutDoctorInput | Prisma.DoctorDocumentCreateOrConnectWithoutDoctorInput[];
    createMany?: Prisma.DoctorDocumentCreateManyDoctorInputEnvelope;
    connect?: Prisma.DoctorDocumentWhereUniqueInput | Prisma.DoctorDocumentWhereUniqueInput[];
};
export type DoctorDocumentUpdateManyWithoutDoctorNestedInput = {
    create?: Prisma.XOR<Prisma.DoctorDocumentCreateWithoutDoctorInput, Prisma.DoctorDocumentUncheckedCreateWithoutDoctorInput> | Prisma.DoctorDocumentCreateWithoutDoctorInput[] | Prisma.DoctorDocumentUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: Prisma.DoctorDocumentCreateOrConnectWithoutDoctorInput | Prisma.DoctorDocumentCreateOrConnectWithoutDoctorInput[];
    upsert?: Prisma.DoctorDocumentUpsertWithWhereUniqueWithoutDoctorInput | Prisma.DoctorDocumentUpsertWithWhereUniqueWithoutDoctorInput[];
    createMany?: Prisma.DoctorDocumentCreateManyDoctorInputEnvelope;
    set?: Prisma.DoctorDocumentWhereUniqueInput | Prisma.DoctorDocumentWhereUniqueInput[];
    disconnect?: Prisma.DoctorDocumentWhereUniqueInput | Prisma.DoctorDocumentWhereUniqueInput[];
    delete?: Prisma.DoctorDocumentWhereUniqueInput | Prisma.DoctorDocumentWhereUniqueInput[];
    connect?: Prisma.DoctorDocumentWhereUniqueInput | Prisma.DoctorDocumentWhereUniqueInput[];
    update?: Prisma.DoctorDocumentUpdateWithWhereUniqueWithoutDoctorInput | Prisma.DoctorDocumentUpdateWithWhereUniqueWithoutDoctorInput[];
    updateMany?: Prisma.DoctorDocumentUpdateManyWithWhereWithoutDoctorInput | Prisma.DoctorDocumentUpdateManyWithWhereWithoutDoctorInput[];
    deleteMany?: Prisma.DoctorDocumentScalarWhereInput | Prisma.DoctorDocumentScalarWhereInput[];
};
export type DoctorDocumentUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: Prisma.XOR<Prisma.DoctorDocumentCreateWithoutDoctorInput, Prisma.DoctorDocumentUncheckedCreateWithoutDoctorInput> | Prisma.DoctorDocumentCreateWithoutDoctorInput[] | Prisma.DoctorDocumentUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: Prisma.DoctorDocumentCreateOrConnectWithoutDoctorInput | Prisma.DoctorDocumentCreateOrConnectWithoutDoctorInput[];
    upsert?: Prisma.DoctorDocumentUpsertWithWhereUniqueWithoutDoctorInput | Prisma.DoctorDocumentUpsertWithWhereUniqueWithoutDoctorInput[];
    createMany?: Prisma.DoctorDocumentCreateManyDoctorInputEnvelope;
    set?: Prisma.DoctorDocumentWhereUniqueInput | Prisma.DoctorDocumentWhereUniqueInput[];
    disconnect?: Prisma.DoctorDocumentWhereUniqueInput | Prisma.DoctorDocumentWhereUniqueInput[];
    delete?: Prisma.DoctorDocumentWhereUniqueInput | Prisma.DoctorDocumentWhereUniqueInput[];
    connect?: Prisma.DoctorDocumentWhereUniqueInput | Prisma.DoctorDocumentWhereUniqueInput[];
    update?: Prisma.DoctorDocumentUpdateWithWhereUniqueWithoutDoctorInput | Prisma.DoctorDocumentUpdateWithWhereUniqueWithoutDoctorInput[];
    updateMany?: Prisma.DoctorDocumentUpdateManyWithWhereWithoutDoctorInput | Prisma.DoctorDocumentUpdateManyWithWhereWithoutDoctorInput[];
    deleteMany?: Prisma.DoctorDocumentScalarWhereInput | Prisma.DoctorDocumentScalarWhereInput[];
};
export type BytesFieldUpdateOperationsInput = {
    set?: runtime.Bytes;
};
export type DoctorDocumentCreateWithoutDoctorInput = {
    documentType: string;
    fileUrl: runtime.Bytes;
    uploadedAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DoctorDocumentUncheckedCreateWithoutDoctorInput = {
    id?: number;
    documentType: string;
    fileUrl: runtime.Bytes;
    uploadedAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DoctorDocumentCreateOrConnectWithoutDoctorInput = {
    where: Prisma.DoctorDocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DoctorDocumentCreateWithoutDoctorInput, Prisma.DoctorDocumentUncheckedCreateWithoutDoctorInput>;
};
export type DoctorDocumentCreateManyDoctorInputEnvelope = {
    data: Prisma.DoctorDocumentCreateManyDoctorInput | Prisma.DoctorDocumentCreateManyDoctorInput[];
    skipDuplicates?: boolean;
};
export type DoctorDocumentUpsertWithWhereUniqueWithoutDoctorInput = {
    where: Prisma.DoctorDocumentWhereUniqueInput;
    update: Prisma.XOR<Prisma.DoctorDocumentUpdateWithoutDoctorInput, Prisma.DoctorDocumentUncheckedUpdateWithoutDoctorInput>;
    create: Prisma.XOR<Prisma.DoctorDocumentCreateWithoutDoctorInput, Prisma.DoctorDocumentUncheckedCreateWithoutDoctorInput>;
};
export type DoctorDocumentUpdateWithWhereUniqueWithoutDoctorInput = {
    where: Prisma.DoctorDocumentWhereUniqueInput;
    data: Prisma.XOR<Prisma.DoctorDocumentUpdateWithoutDoctorInput, Prisma.DoctorDocumentUncheckedUpdateWithoutDoctorInput>;
};
export type DoctorDocumentUpdateManyWithWhereWithoutDoctorInput = {
    where: Prisma.DoctorDocumentScalarWhereInput;
    data: Prisma.XOR<Prisma.DoctorDocumentUpdateManyMutationInput, Prisma.DoctorDocumentUncheckedUpdateManyWithoutDoctorInput>;
};
export type DoctorDocumentScalarWhereInput = {
    AND?: Prisma.DoctorDocumentScalarWhereInput | Prisma.DoctorDocumentScalarWhereInput[];
    OR?: Prisma.DoctorDocumentScalarWhereInput[];
    NOT?: Prisma.DoctorDocumentScalarWhereInput | Prisma.DoctorDocumentScalarWhereInput[];
    id?: Prisma.IntFilter<"DoctorDocument"> | number;
    doctorId?: Prisma.IntFilter<"DoctorDocument"> | number;
    documentType?: Prisma.StringFilter<"DoctorDocument"> | string;
    fileUrl?: Prisma.BytesFilter<"DoctorDocument"> | runtime.Bytes;
    uploadedAt?: Prisma.DateTimeFilter<"DoctorDocument"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"DoctorDocument"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"DoctorDocument"> | Date | string;
};
export type DoctorDocumentCreateManyDoctorInput = {
    id?: number;
    documentType: string;
    fileUrl: runtime.Bytes;
    uploadedAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DoctorDocumentUpdateWithoutDoctorInput = {
    documentType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    uploadedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DoctorDocumentUncheckedUpdateWithoutDoctorInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    documentType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    uploadedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DoctorDocumentUncheckedUpdateManyWithoutDoctorInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    documentType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    uploadedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DoctorDocumentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    doctorId?: boolean;
    documentType?: boolean;
    fileUrl?: boolean;
    uploadedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    doctor?: boolean | Prisma.DoctorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["doctorDocument"]>;
export type DoctorDocumentSelectScalar = {
    id?: boolean;
    doctorId?: boolean;
    documentType?: boolean;
    fileUrl?: boolean;
    uploadedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type DoctorDocumentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "doctorId" | "documentType" | "fileUrl" | "uploadedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["doctorDocument"]>;
export type DoctorDocumentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    doctor?: boolean | Prisma.DoctorDefaultArgs<ExtArgs>;
};
export type $DoctorDocumentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DoctorDocument";
    objects: {
        doctor: Prisma.$DoctorPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        doctorId: number;
        documentType: string;
        fileUrl: runtime.Bytes;
        uploadedAt: Date;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["doctorDocument"]>;
    composites: {};
};
export type DoctorDocumentGetPayload<S extends boolean | null | undefined | DoctorDocumentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DoctorDocumentPayload, S>;
export type DoctorDocumentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DoctorDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DoctorDocumentCountAggregateInputType | true;
};
export interface DoctorDocumentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DoctorDocument'];
        meta: {
            name: 'DoctorDocument';
        };
    };
    findUnique<T extends DoctorDocumentFindUniqueArgs>(args: Prisma.SelectSubset<T, DoctorDocumentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DoctorDocumentClient<runtime.Types.Result.GetResult<Prisma.$DoctorDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DoctorDocumentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DoctorDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DoctorDocumentClient<runtime.Types.Result.GetResult<Prisma.$DoctorDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DoctorDocumentFindFirstArgs>(args?: Prisma.SelectSubset<T, DoctorDocumentFindFirstArgs<ExtArgs>>): Prisma.Prisma__DoctorDocumentClient<runtime.Types.Result.GetResult<Prisma.$DoctorDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DoctorDocumentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DoctorDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DoctorDocumentClient<runtime.Types.Result.GetResult<Prisma.$DoctorDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DoctorDocumentFindManyArgs>(args?: Prisma.SelectSubset<T, DoctorDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DoctorDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DoctorDocumentCreateArgs>(args: Prisma.SelectSubset<T, DoctorDocumentCreateArgs<ExtArgs>>): Prisma.Prisma__DoctorDocumentClient<runtime.Types.Result.GetResult<Prisma.$DoctorDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DoctorDocumentCreateManyArgs>(args?: Prisma.SelectSubset<T, DoctorDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends DoctorDocumentDeleteArgs>(args: Prisma.SelectSubset<T, DoctorDocumentDeleteArgs<ExtArgs>>): Prisma.Prisma__DoctorDocumentClient<runtime.Types.Result.GetResult<Prisma.$DoctorDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DoctorDocumentUpdateArgs>(args: Prisma.SelectSubset<T, DoctorDocumentUpdateArgs<ExtArgs>>): Prisma.Prisma__DoctorDocumentClient<runtime.Types.Result.GetResult<Prisma.$DoctorDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DoctorDocumentDeleteManyArgs>(args?: Prisma.SelectSubset<T, DoctorDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DoctorDocumentUpdateManyArgs>(args: Prisma.SelectSubset<T, DoctorDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends DoctorDocumentUpsertArgs>(args: Prisma.SelectSubset<T, DoctorDocumentUpsertArgs<ExtArgs>>): Prisma.Prisma__DoctorDocumentClient<runtime.Types.Result.GetResult<Prisma.$DoctorDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DoctorDocumentCountArgs>(args?: Prisma.Subset<T, DoctorDocumentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DoctorDocumentCountAggregateOutputType> : number>;
    aggregate<T extends DoctorDocumentAggregateArgs>(args: Prisma.Subset<T, DoctorDocumentAggregateArgs>): Prisma.PrismaPromise<GetDoctorDocumentAggregateType<T>>;
    groupBy<T extends DoctorDocumentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DoctorDocumentGroupByArgs['orderBy'];
    } : {
        orderBy?: DoctorDocumentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DoctorDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DoctorDocumentFieldRefs;
}
export interface Prisma__DoctorDocumentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    doctor<T extends Prisma.DoctorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DoctorDefaultArgs<ExtArgs>>): Prisma.Prisma__DoctorClient<runtime.Types.Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DoctorDocumentFieldRefs {
    readonly id: Prisma.FieldRef<"DoctorDocument", 'Int'>;
    readonly doctorId: Prisma.FieldRef<"DoctorDocument", 'Int'>;
    readonly documentType: Prisma.FieldRef<"DoctorDocument", 'String'>;
    readonly fileUrl: Prisma.FieldRef<"DoctorDocument", 'Bytes'>;
    readonly uploadedAt: Prisma.FieldRef<"DoctorDocument", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"DoctorDocument", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"DoctorDocument", 'DateTime'>;
}
export type DoctorDocumentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DoctorDocumentSelect<ExtArgs> | null;
    omit?: Prisma.DoctorDocumentOmit<ExtArgs> | null;
    include?: Prisma.DoctorDocumentInclude<ExtArgs> | null;
    where: Prisma.DoctorDocumentWhereUniqueInput;
};
export type DoctorDocumentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DoctorDocumentSelect<ExtArgs> | null;
    omit?: Prisma.DoctorDocumentOmit<ExtArgs> | null;
    include?: Prisma.DoctorDocumentInclude<ExtArgs> | null;
    where: Prisma.DoctorDocumentWhereUniqueInput;
};
export type DoctorDocumentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DoctorDocumentSelect<ExtArgs> | null;
    omit?: Prisma.DoctorDocumentOmit<ExtArgs> | null;
    include?: Prisma.DoctorDocumentInclude<ExtArgs> | null;
    where?: Prisma.DoctorDocumentWhereInput;
    orderBy?: Prisma.DoctorDocumentOrderByWithRelationInput | Prisma.DoctorDocumentOrderByWithRelationInput[];
    cursor?: Prisma.DoctorDocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DoctorDocumentScalarFieldEnum | Prisma.DoctorDocumentScalarFieldEnum[];
};
export type DoctorDocumentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DoctorDocumentSelect<ExtArgs> | null;
    omit?: Prisma.DoctorDocumentOmit<ExtArgs> | null;
    include?: Prisma.DoctorDocumentInclude<ExtArgs> | null;
    where?: Prisma.DoctorDocumentWhereInput;
    orderBy?: Prisma.DoctorDocumentOrderByWithRelationInput | Prisma.DoctorDocumentOrderByWithRelationInput[];
    cursor?: Prisma.DoctorDocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DoctorDocumentScalarFieldEnum | Prisma.DoctorDocumentScalarFieldEnum[];
};
export type DoctorDocumentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DoctorDocumentSelect<ExtArgs> | null;
    omit?: Prisma.DoctorDocumentOmit<ExtArgs> | null;
    include?: Prisma.DoctorDocumentInclude<ExtArgs> | null;
    where?: Prisma.DoctorDocumentWhereInput;
    orderBy?: Prisma.DoctorDocumentOrderByWithRelationInput | Prisma.DoctorDocumentOrderByWithRelationInput[];
    cursor?: Prisma.DoctorDocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DoctorDocumentScalarFieldEnum | Prisma.DoctorDocumentScalarFieldEnum[];
};
export type DoctorDocumentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DoctorDocumentSelect<ExtArgs> | null;
    omit?: Prisma.DoctorDocumentOmit<ExtArgs> | null;
    include?: Prisma.DoctorDocumentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DoctorDocumentCreateInput, Prisma.DoctorDocumentUncheckedCreateInput>;
};
export type DoctorDocumentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DoctorDocumentCreateManyInput | Prisma.DoctorDocumentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DoctorDocumentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DoctorDocumentSelect<ExtArgs> | null;
    omit?: Prisma.DoctorDocumentOmit<ExtArgs> | null;
    include?: Prisma.DoctorDocumentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DoctorDocumentUpdateInput, Prisma.DoctorDocumentUncheckedUpdateInput>;
    where: Prisma.DoctorDocumentWhereUniqueInput;
};
export type DoctorDocumentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DoctorDocumentUpdateManyMutationInput, Prisma.DoctorDocumentUncheckedUpdateManyInput>;
    where?: Prisma.DoctorDocumentWhereInput;
    limit?: number;
};
export type DoctorDocumentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DoctorDocumentSelect<ExtArgs> | null;
    omit?: Prisma.DoctorDocumentOmit<ExtArgs> | null;
    include?: Prisma.DoctorDocumentInclude<ExtArgs> | null;
    where: Prisma.DoctorDocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DoctorDocumentCreateInput, Prisma.DoctorDocumentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DoctorDocumentUpdateInput, Prisma.DoctorDocumentUncheckedUpdateInput>;
};
export type DoctorDocumentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DoctorDocumentSelect<ExtArgs> | null;
    omit?: Prisma.DoctorDocumentOmit<ExtArgs> | null;
    include?: Prisma.DoctorDocumentInclude<ExtArgs> | null;
    where: Prisma.DoctorDocumentWhereUniqueInput;
};
export type DoctorDocumentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DoctorDocumentWhereInput;
    limit?: number;
};
export type DoctorDocumentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DoctorDocumentSelect<ExtArgs> | null;
    omit?: Prisma.DoctorDocumentOmit<ExtArgs> | null;
    include?: Prisma.DoctorDocumentInclude<ExtArgs> | null;
};
export {};
