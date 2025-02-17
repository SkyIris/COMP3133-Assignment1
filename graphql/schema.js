const{ GraphQLSchema, GraphQLObjectType} = require("graphql")


// queries, mutations, querytype
const{users, user, cards, card} = require("./queries")
const {register, addCard, updateCard, deleteCard} = require("./mutations")

const QueryType = new GraphQLObjectType({
    name:"QueryType",
    description: "Queries",
    fields:{users, user, cards, card},
})

const MutationType = new GraphQLObjectType({
    name: "MutationType",
    description: "Mutations",
    fields: {register, addCard, updateCard, deleteCard},
})


module.exports = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
})