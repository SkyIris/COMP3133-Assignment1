const {} = require("graphql")
const{} = require("./types")
const{GraphQLString} = require("graphql")

const register = {
    type: GraphQLString,
    args:
    {
        username: {type: GraphQLString},
        password: {type: GraphQLString},
        email: {type: GraphQLString}
    },

    async resolve(parent, args){
        const {username, password, email} = args
        const user = new User({username, password, email})

        await user.save()
    }

}

module.exports = {register}