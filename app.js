const express = require('express');
const cors = require('cors');

const transactions = require("./controllers/transactionController");

const app = express();

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(express.json());

app.use("/transactions", transactions);


app.get('/', (req, res) => {
    
  res.send('Welcome to Budget App!');
});

app.get("/404", (req, res) => {
  res.send("I'm sorry that page can not be found, please try again!");
})




module.exports = app;