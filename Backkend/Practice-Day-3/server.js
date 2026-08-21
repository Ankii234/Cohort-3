const http = require("http")

const server = http.createServer((req,res) =>{
   console.log("server started");
   res.end("Hey");
   
})

server.listen(3000, () =>{
   console.log("App is listed");
   
})
