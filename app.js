const express = require('express');
const fs = require('fs');

const transactions = require("./models/transactions.json");

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.get('/transactions', (req, res) => {
    res.json(transactions);
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
    newTransaction.id = transactions.length > 0 ? Math.max(...transactions.map(t => t.id)) + 1 : 1;
    transactions.push(newTransaction);

    fs.writeFileSync(transactionsFilePath, JSON.stringify(transactions, null, 2));
    
    res.json(newTransaction);
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


module.exports = app;