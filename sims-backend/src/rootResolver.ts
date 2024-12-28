import { NonEmptyArray } from "type-graphql";
import { UserResolver } from "./graphql/users/user.resolver.js";
import itemResolvers from "./graphql/item/item.resolver.js";

const allTypedGraphQLResolvers: NonEmptyArray<Function> = [
    UserResolver,
]

const allCodeGenResolvers = [
    itemResolvers
]

export {allTypedGraphQLResolvers,allCodeGenResolvers}