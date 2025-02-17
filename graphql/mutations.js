const{} = require("./types")
const {CardType} = require("./types")
const{User} = require("../models")
const{Card} = require("../models")
const{GraphQLString} = require("graphql")

const register = {
    type: GraphQLString,
    description: "Register new user",
    args:
    {
        username: {type: GraphQLString},
        password: {type: GraphQLString},
        email: {type: GraphQLString},

    },

    async resolve(parent, args){
        const {username, password, email} = args
        const user = new User({username, password, email})

        await user.save()
        return ("new user created")
    }

}

const addCard = {
    type: CardType,
    description: "Create new card",
    args:{
        name: {type: GraphQLString},
        cost: {type: GraphQLString},
        type: {type: GraphQLString},
        craft: {type: GraphQLString},
        effect: {type: GraphQLString}
    },
    resolve(parent, args){

    
    const card = new Card({
        name: args.name,
        cost: args.cost,
        type: args.type,
        craft: args.craft,
        effect: args.effect
        
    })
    return card.save()
    
},
}

const updateCard = {
    type: CardType,
    description:"Update card entries",
    args:{
        id:{type:GraphQLString},
        name: {type: GraphQLString},
        cost: {type: GraphQLString},
        type: {type: GraphQLString},
        craft: {type: GraphQLString},
        effect: {type: GraphQLString}
    },
    async resolve(parent,args){
        const cardUpdated = await Card.findOneAndUpdate({_id: args.id},{
            name: args.name, cost: args.cost, craft: args.craft, effect: args.effect
        },
        {
            new: true, runValidators:true
        })

    if(!cardUpdated){
        throw new Error("No card found with that ID")
    }
    return cardUpdated
    },
}

const deleteCard = {
    type:GraphQLString,
    description: "Delete card",
    args:{
        id:{type:GraphQLString},
    },
    async resolve(parent, args){
        const cardDeleted = await Card.findOneAndDelete({
            _id: args.id})
        if(!cardDeleted){
            throw new Error("No card with that ID")
        }

        return("Card deleted")
    }
}



module.exports = {register, addCard, updateCard, deleteCard}