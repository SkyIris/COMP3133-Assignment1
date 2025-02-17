const{ GraphQLSchema, GraphQLObjectType} = require("graphql")


// queries, mutations, querytype
const{} = require("./queries")
const {register} = require("./mutations")

const QueryType = new GraphQLObjectType({
    name:"QueryType",
    description: "Queries",
    fields:{},
})

const MutationType = new GraphQLObjectType({
    name: "MutationType",
    description: "Mutations",
    fields: {register},
})


module.exports = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
})