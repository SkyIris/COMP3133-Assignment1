const express = require('express')
const app = express()

app.get("/",(req,res) =>{
    res.json({msg: "test"})
})

app.listen(3000,()=>{
    console.log("running on port 3000")
})