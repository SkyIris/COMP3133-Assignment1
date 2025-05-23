const{ GraphQLSchema, GraphQLObjectType} = require("graphql")

//TODO: update and delete employee

// queries, mutations, querytype
//const{users, user, cards, card} = require("./queries")
//const {register, addCard, updateCard, deleteCard, login} = require("./mutations")

const{users, user, cards, card, employees, employee} = require("./queries")
const {register, addCard, updateCard, deleteCard, addEmployee, updateEmployee, deleteEmployee, login} = require("./mutations")

const QueryType = new GraphQLObjectType({
    name:"QueryType",
    description: "Queries",
    //fields:{users, user, cards, card},
    fields:{users, user, cards, card, employee, employees},
})

const MutationType = new GraphQLObjectType({
    name: "MutationType",
    description: "Mutations",
    //fields: {register, addCard, updateCard, deleteCard, login},
    fields: {register, addCard, updateCard, deleteCard, addEmployee, updateEmployee, deleteEmployee, login},
})


module.exports = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
})