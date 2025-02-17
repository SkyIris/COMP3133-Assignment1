const {GraphQLList, GraphQLID} = require ("graphql")
const {UserType} = require("./types")
const {CardType} = require("./types")
const{User, Card} = require("../models")

const users = {
    type: new GraphQLList(UserType),
    description: "list of all users",
    resolve(parent, args){
        return User.find()
    },
}

const user = {
    type: UserType,
    description: "gets one user",
    args: {id: {type: GraphQLID}},
    resolve(parent,args){
        return User.findById(args.id)
    }
}

const cards = {
    type: new GraphQLList(CardType),
    description: "Retrieves list of cards",
    resolve(){
        return Card.find()
    }
}

const card = {
    type:CardType,
    description: "finds one card",
    args:{id: {type: GraphQLID} },
    resolve(_,args){
        return Card.findById(args.id)
    }
}
module.exports = {users, user, cards, card}


