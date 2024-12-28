## ITEMS
- This is done using codegen (npm run codegen in this project)
- codegen.ts contains the configuration to generate types.ts which contains all the required types and hence we don't need to write schema
- It reads from *.graphql under src/graphql
- We still have to write resolver
- https://www.apollographql.com/docs/apollo-server/workflow/generate-types/
- https://the-guild.dev/graphql/codegen/docs/config-reference/schema-field#local-graphql-files
