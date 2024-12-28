import { Field, ObjectType, InputType } from "type-graphql"

export enum UserRoles {
    SALES = "SALES",
    MANAGER = "MANAGER",
    WAREHOUSEMANAGER = "WAREHOUSEMANAGER",
    ADMIN = "ADMIN"
}

@ObjectType()
export class User {
    @Field()
    id!: String
    @Field()
    name!: String
    @Field()
    role!:UserRoles
}

@InputType()
export class UserInput implements Pick<User,"name"|"role">{
    @Field()
    name!: String
    @Field()
    role!: UserRoles
}