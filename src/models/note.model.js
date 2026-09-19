/* it defines the schema and gives the noteobject( which helps to perform differnt operation on the db */

const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({

    title: String,
    description: String,

})

const noteModel = mongoose.model("note", noteSchema)

module.exports = noteModel