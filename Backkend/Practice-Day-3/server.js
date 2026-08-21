// const http = require("http")

// const server = http.createServer((req,res) =>{
//    console.log("server started");
//    res.end("Hey");
   
// })

// server.listen(3000, () =>{
//    console.log("App is listed");
   
// })

const express = require("express");
let app = express();
app.use(express.json());
const users = [];
let nextId= 1;

// to read the get api 
app.get("/",(req, res) => {
    res.json(users)
});

// For creation of post api 
app.post("/create",(req, res) => {
    const {name, age} = req.body;
    const user = {id:nextId++, name, age}
    users.push(user);

    res.send("Created Succesfully")
})

app.put("/update",(req, res) =>{

})

app.delete("/delete/:id",(req, res) =>{
     let id = req.params.id;
     users.filter((value) => value.id!== id)
     res.send("User Deleted")
})
 
app.listen(3000, () => {
    console.log("Server jud-chuka hai");
    
});
