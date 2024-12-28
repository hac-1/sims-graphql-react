import "reflect-metadata";
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSchema } from 'type-graphql';
import {allCodeGenResolvers,allTypedGraphQLResolvers} from './rootResolver.js';

const typeGraphQlSchema = await buildSchema({
    resolvers: allTypedGraphQLResolvers,
    emitSchemaFile: true,
})

const server = new ApolloServer({
    schema:typeGraphQlSchema,
});


const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);