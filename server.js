const express = require('express')
const app = express()
const dotenv = require("dotenv")
const {connectDB} = require("./db")

dotenv.config()
connectDB()

app.get("/",(req,res) =>{
    res.json({msg: "test"})
})

app.listen(3000,()=>{
    console.log("running on port 3000")
})