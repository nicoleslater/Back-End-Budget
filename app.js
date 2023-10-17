const express = require('express');
const app = express();
const transactions = require("./models/transactions.json");
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.get('/transactions', (req, res) => {
    res.json(transactions);
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


module.exports = app;