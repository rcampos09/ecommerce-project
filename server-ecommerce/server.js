const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
//const bodyParser = require("body-parser");
const cors = require("cors");
const { readdirSync } = require("fs");
require("dotenv").config();

// app 
const app = express();

// db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
    .then(() => console.log("DB CONNECTED"))
    .catch((err) => console.log("DB CONNECTION ERR", err));

//Middlewares
app.use(morgan("dev"));
app.use(express.json({ limit: "2mb" }));
app.use(cors()); 

//routers middlewares
readdirSync("./routes").map((r) => app.use("/api", require("./routes/"+ r)));

//port
const  port = process.env.PORT || 8080;

app.listen(port, () => console.log (`Server Is running on port ${port}`));