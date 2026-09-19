const app = require("./src/app")

const express = require("express");
app.use(express.json())

const notes = []

app.post("/notes", (req,res)=> {
    console.log(req.body)
})

app.get("/notes" , (req, res)=>{
    res.status(200).json({
        message :" Notes fetcched successfully",
        notes : notes 
    })
})

app.get("/notes/:index" , ( req, res) => {
    const name = req.params.index
    res.send(`hi , ${name}`)
})



app.delete("/notes", (req, res)=> {

})

app.patch("/notes" , (req, res)=> {

})

app.listen( 3000, ()=> {
    console.log("server is running on port 3000");
})


