import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "src/**/*.graphql",
  generates: {
    'src/generated/types.ts': {
      plugins: ['typescript',"typescript-resolvers"],
      config:{
        makeResolverTypeCallable: true
      }
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  },
  ignoreNoDocuments: true
};


export default config;
