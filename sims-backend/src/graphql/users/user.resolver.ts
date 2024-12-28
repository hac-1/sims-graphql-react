import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User, UserInput, UserRoles } from "./user.schema.js";

const users: User[] = [
    {
        id: '1',
        name: 'Elizabeth Bennet',
        role: UserRoles.ADMIN
    },
    {
        id: '2',
        name: 'Fitzwilliam Darcy',
        role: UserRoles.ADMIN
    },
];

@Resolver()
export class UserResolver {

    //@Query/Mutation (() => OutputType)
    @Query(() => [User!]!)
    async getUsers(): Promise<User[]> {
        return users;
    }

    @Query(() => User!)
    async getUser(@Arg("id") id: String): Promise<User | undefined> {
        return users.find(user => user.id === id);
    }

    @Mutation(()=> User!)
    async createUser(@Arg ("userInput") userInput : UserInput){
        const user  = {
            id: (users.length + 1).toString(),
            ...userInput,
        }
        
        users.push(user)
        return user
    }

}
