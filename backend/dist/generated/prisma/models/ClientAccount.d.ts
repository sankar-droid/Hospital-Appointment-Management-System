import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ClientAccountModel = runtime.Types.Result.DefaultSelection<Prisma.$ClientAccountPayload>;
export type AggregateClientAccount = {
    _count: ClientAccountCountAggregateOutputType | null;
    _avg: ClientAccountAvgAggregateOutputType | null;
    _sum: ClientAccountSumAggregateOutputType | null;
    _min: ClientAccountMinAggregateOutputType | null;
    _max: ClientAccountMaxAggregateOutputType | null;
};
export type ClientAccountAvgAggregateOutputType = {
    id: number | null;
    userId: number | null;
};
export type ClientAccountSumAggregateOutputType = {
    id: number | null;
    userId: number | null;
};
export type ClientAccountMinAggregateOutputType = {
    id: number | null;
    userId: number | null;
    firstName: string | null;
    lastName: string | null;
    contactNumber: string | null;
    email: string | null;
};
export type ClientAccountMaxAggregateOutputType = {
    id: number | null;
    userId: number | null;
    firstName: string | null;
    lastName: string | null;
    contactNumber: string | null;
    email: string | null;
};
export type ClientAccountCountAggregateOutputType = {
    id: number;
    userId: number;
    firstName: number;
    lastName: number;
    contactNumber: number;
    email: number;
    _all: number;
};
export type ClientAccountAvgAggregateInputType = {
    id?: true;
    userId?: true;
};
export type ClientAccountSumAggregateInputType = {
    id?: true;
    userId?: true;
};
export type ClientAccountMinAggregateInputType = {
    id?: true;
    userId?: true;
    firstName?: true;
    lastName?: true;
    contactNumber?: true;
    email?: true;
};
export type ClientAccountMaxAggregateInputType = {
    id?: true;
    userId?: true;
    firstName?: true;
    lastName?: true;
    contactNumber?: true;
    email?: true;
};
export type ClientAccountCountAggregateInputType = {
    id?: true;
    userId?: true;
    firstName?: true;
    lastName?: true;
    contactNumber?: true;
    email?: true;
    _all?: true;
};
export type ClientAccountAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClientAccountWhereInput;
    orderBy?: Prisma.ClientAccountOrderByWithRelationInput | Prisma.ClientAccountOrderByWithRelationInput[];
    cursor?: Prisma.ClientAccountWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ClientAccountCountAggregateInputType;
    _avg?: ClientAccountAvgAggregateInputType;
    _sum?: ClientAccountSumAggregateInputType;
    _min?: ClientAccountMinAggregateInputType;
    _max?: ClientAccountMaxAggregateInputType;
};
export type GetClientAccountAggregateType<T extends ClientAccountAggregateArgs> = {
    [P in keyof T & keyof AggregateClientAccount]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateClientAccount[P]> : Prisma.GetScalarType<T[P], AggregateClientAccount[P]>;
};
export type ClientAccountGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClientAccountWhereInput;
    orderBy?: Prisma.ClientAccountOrderByWithAggregationInput | Prisma.ClientAccountOrderByWithAggregationInput[];
    by: Prisma.ClientAccountScalarFieldEnum[] | Prisma.ClientAccountScalarFieldEnum;
    having?: Prisma.ClientAccountScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClientAccountCountAggregateInputType | true;
    _avg?: ClientAccountAvgAggregateInputType;
    _sum?: ClientAccountSumAggregateInputType;
    _min?: ClientAccountMinAggregateInputType;
    _max?: ClientAccountMaxAggregateInputType;
};
export type ClientAccountGroupByOutputType = {
    id: number;
    userId: number;
    firstName: string;
    lastName: string;
    contactNumber: string;
    email: string;
    _count: ClientAccountCountAggregateOutputType | null;
    _avg: ClientAccountAvgAggregateOutputType | null;
    _sum: ClientAccountSumAggregateOutputType | null;
    _min: ClientAccountMinAggregateOutputType | null;
    _max: ClientAccountMaxAggregateOutputType | null;
};
type GetClientAccountGroupByPayload<T extends ClientAccountGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ClientAccountGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ClientAccountGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ClientAccountGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ClientAccountGroupByOutputType[P]>;
}>>;
export type ClientAccountWhereInput = {
    AND?: Prisma.ClientAccountWhereInput | Prisma.ClientAccountWhereInput[];
    OR?: Prisma.ClientAccountWhereInput[];
    NOT?: Prisma.ClientAccountWhereInput | Prisma.ClientAccountWhereInput[];
    id?: Prisma.IntFilter<"ClientAccount"> | number;
    userId?: Prisma.IntFilter<"ClientAccount"> | number;
    firstName?: Prisma.StringFilter<"ClientAccount"> | string;
    lastName?: Prisma.StringFilter<"ClientAccount"> | string;
    contactNumber?: Prisma.StringFilter<"ClientAccount"> | string;
    email?: Prisma.StringFilter<"ClientAccount"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    appointments?: Prisma.AppointmentListRelationFilter;
};
export type ClientAccountOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    contactNumber?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    appointments?: Prisma.AppointmentOrderByRelationAggregateInput;
    _relevance?: Prisma.ClientAccountOrderByRelevanceInput;
};
export type ClientAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    userId?: number;
    AND?: Prisma.ClientAccountWhereInput | Prisma.ClientAccountWhereInput[];
    OR?: Prisma.ClientAccountWhereInput[];
    NOT?: Prisma.ClientAccountWhereInput | Prisma.ClientAccountWhereInput[];
    firstName?: Prisma.StringFilter<"ClientAccount"> | string;
    lastName?: Prisma.StringFilter<"ClientAccount"> | string;
    contactNumber?: Prisma.StringFilter<"ClientAccount"> | string;
    email?: Prisma.StringFilter<"ClientAccount"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    appointments?: Prisma.AppointmentListRelationFilter;
}, "id" | "userId">;
export type ClientAccountOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    contactNumber?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    _count?: Prisma.ClientAccountCountOrderByAggregateInput;
    _avg?: Prisma.ClientAccountAvgOrderByAggregateInput;
    _max?: Prisma.ClientAccountMaxOrderByAggregateInput;
    _min?: Prisma.ClientAccountMinOrderByAggregateInput;
    _sum?: Prisma.ClientAccountSumOrderByAggregateInput;
};
export type ClientAccountScalarWhereWithAggregatesInput = {
    AND?: Prisma.ClientAccountScalarWhereWithAggregatesInput | Prisma.ClientAccountScalarWhereWithAggregatesInput[];
    OR?: Prisma.ClientAccountScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ClientAccountScalarWhereWithAggregatesInput | Prisma.ClientAccountScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ClientAccount"> | number;
    userId?: Prisma.IntWithAggregatesFilter<"ClientAccount"> | number;
    firstName?: Prisma.StringWithAggregatesFilter<"ClientAccount"> | string;
    lastName?: Prisma.StringWithAggregatesFilter<"ClientAccount"> | string;
    contactNumber?: Prisma.StringWithAggregatesFilter<"ClientAccount"> | string;
    email?: Prisma.StringWithAggregatesFilter<"ClientAccount"> | string;
};
export type ClientAccountCreateInput = {
    firstName: string;
    lastName: string;
    contactNumber: string;
    email: string;
    user: Prisma.UserCreateNestedOneWithoutClientInput;
    appointments?: Prisma.AppointmentCreateNestedManyWithoutClientInput;
};
export type ClientAccountUncheckedCreateInput = {
    id?: number;
    userId: number;
    firstName: string;
    lastName: string;
    contactNumber: string;
    email: string;
    appointments?: Prisma.AppointmentUncheckedCreateNestedManyWithoutClientInput;
};
export type ClientAccountUpdateInput = {
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    contactNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    user?: Prisma.UserUpdateOneRequiredWithoutClientNestedInput;
    appointments?: Prisma.AppointmentUpdateManyWithoutClientNestedInput;
};
export type ClientAccountUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    contactNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    appointments?: Prisma.AppointmentUncheckedUpdateManyWithoutClientNestedInput;
};
export type ClientAccountCreateManyInput = {
    id?: number;
    userId: number;
    firstName: string;
    lastName: string;
    contactNumber: string;
    email: string;
};
export type ClientAccountUpdateManyMutationInput = {
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    contactNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ClientAccountUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    contactNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ClientAccountNullableScalarRelationFilter = {
    is?: Prisma.ClientAccountWhereInput | null;
    isNot?: Prisma.ClientAccountWhereInput | null;
};
export type ClientAccountOrderByRelevanceInput = {
    fields: Prisma.ClientAccountOrderByRelevanceFieldEnum | Prisma.ClientAccountOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type ClientAccountCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    contactNumber?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
};
export type ClientAccountAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type ClientAccountMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    contactNumber?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
};
export type ClientAccountMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    contactNumber?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
};
export type ClientAccountSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type ClientAccountScalarRelationFilter = {
    is?: Prisma.ClientAccountWhereInput;
    isNot?: Prisma.ClientAccountWhereInput;
};
export type ClientAccountCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ClientAccountCreateWithoutUserInput, Prisma.ClientAccountUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ClientAccountCreateOrConnectWithoutUserInput;
    connect?: Prisma.ClientAccountWhereUniqueInput;
};
export type ClientAccountUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ClientAccountCreateWithoutUserInput, Prisma.ClientAccountUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ClientAccountCreateOrConnectWithoutUserInput;
    connect?: Prisma.ClientAccountWhereUniqueInput;
};
export type ClientAccountUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ClientAccountCreateWithoutUserInput, Prisma.ClientAccountUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ClientAccountCreateOrConnectWithoutUserInput;
    upsert?: Prisma.ClientAccountUpsertWithoutUserInput;
    disconnect?: Prisma.ClientAccountWhereInput | boolean;
    delete?: Prisma.ClientAccountWhereInput | boolean;
    connect?: Prisma.ClientAccountWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClientAccountUpdateToOneWithWhereWithoutUserInput, Prisma.ClientAccountUpdateWithoutUserInput>, Prisma.ClientAccountUncheckedUpdateWithoutUserInput>;
};
export type ClientAccountUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ClientAccountCreateWithoutUserInput, Prisma.ClientAccountUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ClientAccountCreateOrConnectWithoutUserInput;
    upsert?: Prisma.ClientAccountUpsertWithoutUserInput;
    disconnect?: Prisma.ClientAccountWhereInput | boolean;
    delete?: Prisma.ClientAccountWhereInput | boolean;
    connect?: Prisma.ClientAccountWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClientAccountUpdateToOneWithWhereWithoutUserInput, Prisma.ClientAccountUpdateWithoutUserInput>, Prisma.ClientAccountUncheckedUpdateWithoutUserInput>;
};
export type ClientAccountCreateNestedOneWithoutAppointmentsInput = {
    create?: Prisma.XOR<Prisma.ClientAccountCreateWithoutAppointmentsInput, Prisma.ClientAccountUncheckedCreateWithoutAppointmentsInput>;
    connectOrCreate?: Prisma.ClientAccountCreateOrConnectWithoutAppointmentsInput;
    connect?: Prisma.ClientAccountWhereUniqueInput;
};
export type ClientAccountUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: Prisma.XOR<Prisma.ClientAccountCreateWithoutAppointmentsInput, Prisma.ClientAccountUncheckedCreateWithoutAppointmentsInput>;
    connectOrCreate?: Prisma.ClientAccountCreateOrConnectWithoutAppointmentsInput;
    upsert?: Prisma.ClientAccountUpsertWithoutAppointmentsInput;
    connect?: Prisma.ClientAccountWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClientAccountUpdateToOneWithWhereWithoutAppointmentsInput, Prisma.ClientAccountUpdateWithoutAppointmentsInput>, Prisma.ClientAccountUncheckedUpdateWithoutAppointmentsInput>;
};
export type ClientAccountCreateWithoutUserInput = {
    firstName: string;
    lastName: string;
    contactNumber: string;
    email: string;
    appointments?: Prisma.AppointmentCreateNestedManyWithoutClientInput;
};
export type ClientAccountUncheckedCreateWithoutUserInput = {
    id?: number;
    firstName: string;
    lastName: string;
    contactNumber: string;
    email: string;
    appointments?: Prisma.AppointmentUncheckedCreateNestedManyWithoutClientInput;
};
export type ClientAccountCreateOrConnectWithoutUserInput = {
    where: Prisma.ClientAccountWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClientAccountCreateWithoutUserInput, Prisma.ClientAccountUncheckedCreateWithoutUserInput>;
};
export type ClientAccountUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.ClientAccountUpdateWithoutUserInput, Prisma.ClientAccountUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ClientAccountCreateWithoutUserInput, Prisma.ClientAccountUncheckedCreateWithoutUserInput>;
    where?: Prisma.ClientAccountWhereInput;
};
export type ClientAccountUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.ClientAccountWhereInput;
    data: Prisma.XOR<Prisma.ClientAccountUpdateWithoutUserInput, Prisma.ClientAccountUncheckedUpdateWithoutUserInput>;
};
export type ClientAccountUpdateWithoutUserInput = {
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    contactNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    appointments?: Prisma.AppointmentUpdateManyWithoutClientNestedInput;
};
export type ClientAccountUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    contactNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    appointments?: Prisma.AppointmentUncheckedUpdateManyWithoutClientNestedInput;
};
export type ClientAccountCreateWithoutAppointmentsInput = {
    firstName: string;
    lastName: string;
    contactNumber: string;
    email: string;
    user: Prisma.UserCreateNestedOneWithoutClientInput;
};
export type ClientAccountUncheckedCreateWithoutAppointmentsInput = {
    id?: number;
    userId: number;
    firstName: string;
    lastName: string;
    contactNumber: string;
    email: string;
};
export type ClientAccountCreateOrConnectWithoutAppointmentsInput = {
    where: Prisma.ClientAccountWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClientAccountCreateWithoutAppointmentsInput, Prisma.ClientAccountUncheckedCreateWithoutAppointmentsInput>;
};
export type ClientAccountUpsertWithoutAppointmentsInput = {
    update: Prisma.XOR<Prisma.ClientAccountUpdateWithoutAppointmentsInput, Prisma.ClientAccountUncheckedUpdateWithoutAppointmentsInput>;
    create: Prisma.XOR<Prisma.ClientAccountCreateWithoutAppointmentsInput, Prisma.ClientAccountUncheckedCreateWithoutAppointmentsInput>;
    where?: Prisma.ClientAccountWhereInput;
};
export type ClientAccountUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: Prisma.ClientAccountWhereInput;
    data: Prisma.XOR<Prisma.ClientAccountUpdateWithoutAppointmentsInput, Prisma.ClientAccountUncheckedUpdateWithoutAppointmentsInput>;
};
export type ClientAccountUpdateWithoutAppointmentsInput = {
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    contactNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    user?: Prisma.UserUpdateOneRequiredWithoutClientNestedInput;
};
export type ClientAccountUncheckedUpdateWithoutAppointmentsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    contactNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ClientAccountCountOutputType = {
    appointments: number;
};
export type ClientAccountCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    appointments?: boolean | ClientAccountCountOutputTypeCountAppointmentsArgs;
};
export type ClientAccountCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientAccountCountOutputTypeSelect<ExtArgs> | null;
};
export type ClientAccountCountOutputTypeCountAppointmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AppointmentWhereInput;
};
export type ClientAccountSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    contactNumber?: boolean;
    email?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    appointments?: boolean | Prisma.ClientAccount$appointmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.ClientAccountCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["clientAccount"]>;
export type ClientAccountSelectScalar = {
    id?: boolean;
    userId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    contactNumber?: boolean;
    email?: boolean;
};
export type ClientAccountOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "firstName" | "lastName" | "contactNumber" | "email", ExtArgs["result"]["clientAccount"]>;
export type ClientAccountInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    appointments?: boolean | Prisma.ClientAccount$appointmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.ClientAccountCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $ClientAccountPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ClientAccount";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        appointments: Prisma.$AppointmentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        userId: number;
        firstName: string;
        lastName: string;
        contactNumber: string;
        email: string;
    }, ExtArgs["result"]["clientAccount"]>;
    composites: {};
};
export type ClientAccountGetPayload<S extends boolean | null | undefined | ClientAccountDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ClientAccountPayload, S>;
export type ClientAccountCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ClientAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ClientAccountCountAggregateInputType | true;
};
export interface ClientAccountDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ClientAccount'];
        meta: {
            name: 'ClientAccount';
        };
    };
    findUnique<T extends ClientAccountFindUniqueArgs>(args: Prisma.SelectSubset<T, ClientAccountFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ClientAccountClient<runtime.Types.Result.GetResult<Prisma.$ClientAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ClientAccountFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ClientAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClientAccountClient<runtime.Types.Result.GetResult<Prisma.$ClientAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ClientAccountFindFirstArgs>(args?: Prisma.SelectSubset<T, ClientAccountFindFirstArgs<ExtArgs>>): Prisma.Prisma__ClientAccountClient<runtime.Types.Result.GetResult<Prisma.$ClientAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ClientAccountFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ClientAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClientAccountClient<runtime.Types.Result.GetResult<Prisma.$ClientAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ClientAccountFindManyArgs>(args?: Prisma.SelectSubset<T, ClientAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ClientAccountCreateArgs>(args: Prisma.SelectSubset<T, ClientAccountCreateArgs<ExtArgs>>): Prisma.Prisma__ClientAccountClient<runtime.Types.Result.GetResult<Prisma.$ClientAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ClientAccountCreateManyArgs>(args?: Prisma.SelectSubset<T, ClientAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends ClientAccountDeleteArgs>(args: Prisma.SelectSubset<T, ClientAccountDeleteArgs<ExtArgs>>): Prisma.Prisma__ClientAccountClient<runtime.Types.Result.GetResult<Prisma.$ClientAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ClientAccountUpdateArgs>(args: Prisma.SelectSubset<T, ClientAccountUpdateArgs<ExtArgs>>): Prisma.Prisma__ClientAccountClient<runtime.Types.Result.GetResult<Prisma.$ClientAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ClientAccountDeleteManyArgs>(args?: Prisma.SelectSubset<T, ClientAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ClientAccountUpdateManyArgs>(args: Prisma.SelectSubset<T, ClientAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends ClientAccountUpsertArgs>(args: Prisma.SelectSubset<T, ClientAccountUpsertArgs<ExtArgs>>): Prisma.Prisma__ClientAccountClient<runtime.Types.Result.GetResult<Prisma.$ClientAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ClientAccountCountArgs>(args?: Prisma.Subset<T, ClientAccountCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ClientAccountCountAggregateOutputType> : number>;
    aggregate<T extends ClientAccountAggregateArgs>(args: Prisma.Subset<T, ClientAccountAggregateArgs>): Prisma.PrismaPromise<GetClientAccountAggregateType<T>>;
    groupBy<T extends ClientAccountGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ClientAccountGroupByArgs['orderBy'];
    } : {
        orderBy?: ClientAccountGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ClientAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ClientAccountFieldRefs;
}
export interface Prisma__ClientAccountClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    appointments<T extends Prisma.ClientAccount$appointmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClientAccount$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ClientAccountFieldRefs {
    readonly id: Prisma.FieldRef<"ClientAccount", 'Int'>;
    readonly userId: Prisma.FieldRef<"ClientAccount", 'Int'>;
    readonly firstName: Prisma.FieldRef<"ClientAccount", 'String'>;
    readonly lastName: Prisma.FieldRef<"ClientAccount", 'String'>;
    readonly contactNumber: Prisma.FieldRef<"ClientAccount", 'String'>;
    readonly email: Prisma.FieldRef<"ClientAccount", 'String'>;
}
export type ClientAccountFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientAccountSelect<ExtArgs> | null;
    omit?: Prisma.ClientAccountOmit<ExtArgs> | null;
    include?: Prisma.ClientAccountInclude<ExtArgs> | null;
    where: Prisma.ClientAccountWhereUniqueInput;
};
export type ClientAccountFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientAccountSelect<ExtArgs> | null;
    omit?: Prisma.ClientAccountOmit<ExtArgs> | null;
    include?: Prisma.ClientAccountInclude<ExtArgs> | null;
    where: Prisma.ClientAccountWhereUniqueInput;
};
export type ClientAccountFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientAccountSelect<ExtArgs> | null;
    omit?: Prisma.ClientAccountOmit<ExtArgs> | null;
    include?: Prisma.ClientAccountInclude<ExtArgs> | null;
    where?: Prisma.ClientAccountWhereInput;
    orderBy?: Prisma.ClientAccountOrderByWithRelationInput | Prisma.ClientAccountOrderByWithRelationInput[];
    cursor?: Prisma.ClientAccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClientAccountScalarFieldEnum | Prisma.ClientAccountScalarFieldEnum[];
};
export type ClientAccountFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientAccountSelect<ExtArgs> | null;
    omit?: Prisma.ClientAccountOmit<ExtArgs> | null;
    include?: Prisma.ClientAccountInclude<ExtArgs> | null;
    where?: Prisma.ClientAccountWhereInput;
    orderBy?: Prisma.ClientAccountOrderByWithRelationInput | Prisma.ClientAccountOrderByWithRelationInput[];
    cursor?: Prisma.ClientAccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClientAccountScalarFieldEnum | Prisma.ClientAccountScalarFieldEnum[];
};
export type ClientAccountFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientAccountSelect<ExtArgs> | null;
    omit?: Prisma.ClientAccountOmit<ExtArgs> | null;
    include?: Prisma.ClientAccountInclude<ExtArgs> | null;
    where?: Prisma.ClientAccountWhereInput;
    orderBy?: Prisma.ClientAccountOrderByWithRelationInput | Prisma.ClientAccountOrderByWithRelationInput[];
    cursor?: Prisma.ClientAccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClientAccountScalarFieldEnum | Prisma.ClientAccountScalarFieldEnum[];
};
export type ClientAccountCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientAccountSelect<ExtArgs> | null;
    omit?: Prisma.ClientAccountOmit<ExtArgs> | null;
    include?: Prisma.ClientAccountInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClientAccountCreateInput, Prisma.ClientAccountUncheckedCreateInput>;
};
export type ClientAccountCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ClientAccountCreateManyInput | Prisma.ClientAccountCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ClientAccountUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientAccountSelect<ExtArgs> | null;
    omit?: Prisma.ClientAccountOmit<ExtArgs> | null;
    include?: Prisma.ClientAccountInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClientAccountUpdateInput, Prisma.ClientAccountUncheckedUpdateInput>;
    where: Prisma.ClientAccountWhereUniqueInput;
};
export type ClientAccountUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ClientAccountUpdateManyMutationInput, Prisma.ClientAccountUncheckedUpdateManyInput>;
    where?: Prisma.ClientAccountWhereInput;
    limit?: number;
};
export type ClientAccountUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientAccountSelect<ExtArgs> | null;
    omit?: Prisma.ClientAccountOmit<ExtArgs> | null;
    include?: Prisma.ClientAccountInclude<ExtArgs> | null;
    where: Prisma.ClientAccountWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClientAccountCreateInput, Prisma.ClientAccountUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ClientAccountUpdateInput, Prisma.ClientAccountUncheckedUpdateInput>;
};
export type ClientAccountDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientAccountSelect<ExtArgs> | null;
    omit?: Prisma.ClientAccountOmit<ExtArgs> | null;
    include?: Prisma.ClientAccountInclude<ExtArgs> | null;
    where: Prisma.ClientAccountWhereUniqueInput;
};
export type ClientAccountDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClientAccountWhereInput;
    limit?: number;
};
export type ClientAccount$appointmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ClientAccountDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientAccountSelect<ExtArgs> | null;
    omit?: Prisma.ClientAccountOmit<ExtArgs> | null;
    include?: Prisma.ClientAccountInclude<ExtArgs> | null;
};
export {};
