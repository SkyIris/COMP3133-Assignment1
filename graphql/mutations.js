const{ EmployeeType } = require("./types")
const {CardType} = require("./types")
const{User} = require("../models")
const{Card} = require("../models")
const{Employee} = require('../models')
const{GraphQLString, graphql} = require("graphql")
const {createToken} = require("../util/auth")

const addEmployee={
    type:EmployeeType,
    description:"add new employee",
    args:
    {
        firstName:{type:GraphQLString},
        lastName:{type:GraphQLString},
        email:{type:GraphQLString}
    },

    async resolve(parent, args, {verifiedUser}){

        if(!verifiedUser){
            throw new Error("Invalid credentials. please login")
        }
        const {firstName, lastName, email} = args
        const employee = new Employee({firstName, lastName, email})

        return employee.save()
        
    }
}

const updateEmployee = {
    type: EmployeeType,
    description:"Update employee entries",
    args:{
        id:{type:GraphQLString},
        firstName: {type: GraphQLString},
        lastName: {type: GraphQLString},
        email: {type: GraphQLString},
    },
    async resolve(parent,args){
        const employeeUpdated = await Employee.findOneAndUpdate({_id: args.id},{
            firstName: args.firstName, lastName: args.lastName, email: args.email
        },
        {
            new: true, runValidators:true
        })

    if(!employeeUpdated){
        throw new Error("No employee found with that ID")
    }
    return employeeUpdated
    },
}

const deleteEmployee = {
    type:GraphQLString,
    description: "Delete employee",
    args:{
        id:{type:GraphQLString},
    },
    async resolve(parent, args){
        const employeeDeleted = await Employee.findOneAndDelete({
            _id: args.id})
        if(!employeeDeleted){
            throw new Error("No employee with that ID")
        }

        return("Employee deleted")
    }
}

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
        const token = createToken(user)
        return (token)
        
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

const login = {
    type: GraphQLString,
    args:{
        username:{type:GraphQLString},
        password:{type:GraphQLString}
    },
    async resolve(parent,args){
        const user = await User.findOne({username: args.username})
        if(!user || args.password !== user.password){
            throw new Error("wrong password or username")
        }
        const token = createToken(user)
        return(token)
    }
}


module.exports = {register, addCard, updateCard, deleteCard, addEmployee, updateEmployee, deleteEmployee, login}