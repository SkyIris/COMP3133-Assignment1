const express = require('express')
const app = express()
const dotenv = require("dotenv")
const {connectDB} = require("./db")
const {graphqlHTTP} = require("express-graphql")
const schema = require("./graphql/schema")

dotenv.config()
connectDB()

app.get("/",(req,res) =>{
    res.json({msg: "go to /graphql"})
})

app.use("/graphql", graphqlHTTP({
    schema: schema,
    graphiql: true,
}))

app.listen(process.env.PORT,()=>{
    console.log("running on port 3000")
})