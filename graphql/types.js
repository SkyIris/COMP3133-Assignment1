const{GraphQLObjectType, GraphQLID, GraphQLString} = require("graphql")

const {User, Card, Employee} = require("../models")

const UserType = new GraphQLObjectType({
    name:"User",
    description: "User type",
    fields: () => ({
        id: {type: GraphQLID},
        username: {type: GraphQLString},
        password: {type: GraphQLString},
        email: {type: GraphQLString}
    }),
})

const CardType = new GraphQLObjectType({
    name: "Card",
    description: "Card type",
    fields: () =>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        type: {type: GraphQLString},
        cost: {type: GraphQLString},
        craft: {type: GraphQLString},
        effect: {type: GraphQLString}
    }),
})

const EmployeeType = new GraphQLObjectType({
    name:"Employee",
    description: "Employee type",
    fields: () => ({
        id: {type: GraphQLID},
        firstName: {type: GraphQLString},
        lastName: {type: GraphQLString},
        email: {type: GraphQLString}
    }),
})

module.exports = {UserType, CardType, EmployeeType}