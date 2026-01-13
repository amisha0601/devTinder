const express = require("express");

const app = express();

app.use("/user",(req,res) => {
   res.send("HAHHAHAHAHAHAHA")
})

//This will only handle GET call to /user
app.get("/user", (req,res) => {
    res.send({firstName: "Amisha", lastName: "Singh"});
});

app.post("/user",(req,res) => {
   //saving data to DB
   res.send("Data successfully saved to the database!");
});

app.delete("/user",(req,res) => {
    res.send("Deleted successfully!")
})

//This will match all the HTTP method API calls to /test
app.use("/test", (req,res) => {
    res.send("Hello from the server!");
});

app.listen(8080, () => {
    console.log("Server is successfully running on port 8080...");
});