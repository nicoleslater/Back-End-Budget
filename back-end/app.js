const express = require('express');
const cors = require('cors');

const transactionController = require("./controllers/transactionController");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/transactions", transactionController);


app.get("/", (req, res) => {
    
  res.send('Welcome to Budget App!');
});

app.get("*", (req, res) => {
 res.status(404).json({success: false, data: { error: "Page is not found"}});
});

module.exports = app; 




