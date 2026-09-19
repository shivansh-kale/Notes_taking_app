const app = require("./src/app")

const express = require("express");
app.use(express.json())

const notes = []

app.post("/notes", (req,res)=> {

    notes.push(req.body)
    res.status(201).json({
        message : " note created succesfully"
    })
})


app.get("/notes" , (req, res)=>{
    res.status(200).json({
        message :" Notes fetched successfully",
        notes : notes 
    })
})




app.get("/notes/:index" , ( req, res) => {
    const name = req.params.index
    res.send(`hi , ${name}`)
})



app.delete("/notes/:index", (req, res)=> {
    const index = req.params.index
    
    delete notes[index]

    res.status(200).json({
        message: " note deleted"
    })


})

app.patch("/notes/:index" , (req, res)=> {
    const index = req.params.index
    const description = req.body.description

    notes[index].description = description

    res.status(200).json({
        message:"note created successfully"
    })

})

app.listen( 3000, ()=> {
    console.log("server is running on port 3000");
})


