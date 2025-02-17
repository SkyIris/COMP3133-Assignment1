const {GraphQLList, GraphQLID} = require ("graphql")
const {UserType} = require("./types")
const{User} = require("../models")

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

module.exports = {users, user}


