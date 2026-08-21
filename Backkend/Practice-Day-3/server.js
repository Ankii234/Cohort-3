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

app.get("/",(req, res) => {
    res.send("Server start kro jarvis")
});
 
// res.end("Hey")

const http = require("http")


app.listen(3000, () => {
    console.log(http);
    
});
