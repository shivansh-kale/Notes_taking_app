/* this files makes the connection of server to the cluster 

   this makes the connection : mongodb+srv://User_1:shivansh94@cluster0.fx4skbl.mongodb.net/

   this makes the connection to DB , if DB not present create new one  : mongodb+srv://User_1:shivansh94@cluster0.fx4skbl.mongodb.net/First_DB

*/

const mongoose = require("mongoose")

require("dotenv").config();

async function connectDB (){

    await mongoose.connect(process.env.MONGO_URI);

    console.log("connected to DB")

}

module.exports = connectDB