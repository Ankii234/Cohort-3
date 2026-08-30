const express = require("express");
const app = express();

let port = 3000;

let users = [
    {
        name: "pol",
        age: 21,
        gender: "male"
        rollno: 21
    },
];

app.get("/",(req, res) => {
     res.send(users)

});
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
    
});
