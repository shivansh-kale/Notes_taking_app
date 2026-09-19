const app = require("./src/app")

app.get("/" , (req, res)=>{
    res.send("hiii, fisrt node api here ! ")
})

app.get("/note/:index" , ( req, res) => {
    const name = req.params.index
    res.send(`hi , ${name}`)
})

app.listen( 3000, ()=> {
    console.log("server is running on port 3000");
})