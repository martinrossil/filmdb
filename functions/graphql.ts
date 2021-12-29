import { createRequestHandler } from '../ersa/src';
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from '../ersa/graphql';

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: "Query",
      fields: {
        hi: {
          type: GraphQLString,
          args: { name: { type: GraphQLString } },
          resolve: (_root, args) => "Hello " + (args.name ? args.name : "World"),
        },
      },
    }),
  });

  const gqlHandler = createRequestHandler(schema);

export async function onRequest(context) {
    const {
        request, // same as existing Worker API
        env, // same as existing Worker API
        params, // if filename includes [id] or [[path]]
        waitUntil, // same as ctx.waitUntil in existing Worker API
        next, // used for middleware or to fetch assets
        data, // arbitrary space for passing data between middlewares
    } = context;

    return gqlHandler(request);
}