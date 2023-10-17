const express = require('express');

const transactionsData = require("./models/transactions");


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/transactions", transactions);

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.get('/transactions', (req, res) => {
    res.json(transactionsData);
});

app.get('/transactions/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const transaction = transactions.find(item => item.id === id);

    if(transaction){
        res.json(transaction);
    } else {
        res.status(404).json({message: 'Transaction not found'});
    }

});

app.post('/transactions', (req, res) => {
    const newTransaction = req.body;

    const maxId = transactionsData.length > 0 ? Math.max(...transactionsData.map(t => t.id)) : 0;
    newTransaction.id = maxId + 1;

    transactionsData.push(newTransaction);

    res.json(newTransaction);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


module.exports = app;