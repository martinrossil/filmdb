import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLSchema
} from 'graphql';

const Movie = new GraphQLObjectType({
    name: 'Movie',
    fields: {
        id: {type: GraphQLInt},
        title: {type: GraphQLString}
    }
});

const Root = new GraphQLObjectType({
    name: 'Root',
    fields: {
        movie: {
            type: Movie,
            args: { 
                id: {type: GraphQLInt}
            },
            async resolve(parent, args) {
                return {
                    id: args.id,
                    title: 'test movie'
                }
            }
        }
    }
});

export default new GraphQLSchema({
    query: Root
});