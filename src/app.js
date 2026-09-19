const express= require("express")
const noteModel = require("./models/note.model")

const app = express()

app.use(express.json())       // middleware 

const notes = []






app.post("/notes", async (req,res)=> {

    const data= req.body
    await noteModel.create({
        title : data.title,
        description : data.description
    })

    notes.push(req.body)
    res.status(201).json({
        message : " note created succesfully"
    })
})





app.get("/notes" ,async (req, res)=>{

    const notes = await noteModel.find()

    res.status(200).json({
        message :" Notes fetched successfully",
        notes : notes 
    })
})

/*
find() ----->  returns array [] of objects
findOne() ------> returns single object

const notes = await noteModel.findOne({
        title: "First One"    // condition                condition can also be applied for find()
}) 
*/


app.get("/notes/:index" , ( req, res) => {
    const name = req.params.index
    res.send(`hi , ${name}`)
})



app.delete("/notes/:id",async (req, res)=> {

    const id = req.params.id

    await noteModel.findOneAndDelete({
        _id : id
    })
   
    res.status(200).json({
        message: " note deleted"
    })


})

app.patch("/notes/:id" ,async (req, res)=> {
    const id = req.params.id
    const description = req.body.description

    await noteModel.findOneAndUpdate({_id:id}, {description : description})

    

    res.status(200).json({
        message:"note created successfully"
    })

})



module.exports = app