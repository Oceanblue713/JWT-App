const express = require("express");
const app = express()
const cors = require("cors");

// middleware
app.use(express.json()) // allow to use req.body
app.use(cors())


//ROUTES


app.listen(5000, () => {
  console.log("Server is starting")
});