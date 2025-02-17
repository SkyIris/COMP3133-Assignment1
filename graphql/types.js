const{GraphQLObjectType, GraphQLID, GraphQLString} = require("graphql")

const {User, Card} = require("../models")

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

module.exports = {UserType, CardType}