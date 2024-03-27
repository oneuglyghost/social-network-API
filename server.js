
const express =require("express");
const mongoose = require("./config/connection");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World");
});


app.listen(PORT, () => {
    console.log("Server running on port ${PORT}")
})