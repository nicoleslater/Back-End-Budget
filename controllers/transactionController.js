const express = require("express");

const transactions = express.Router();
const transactionData =  require("../models/transactions");




transactions.post('/', (req, res) => {
    const newTransaction = req.body;

    const maxId = transactionData.length > 0 ? Math.max(...transactionData.map(t => t.id)) : 0;
    newTransaction.id = maxId + 1;

    transactionData.push(newTransaction);

    res.json(newTransaction);
});

transactions.get('/', (req, res) => {
    console.log(transactions)
    res.json(transactionData);
});

transactions.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const transaction = transactionData.find(item => item.id === id);

    if(transaction){
        res.json(transaction);
    } else {
        res.status(404).json({message: 'Transaction not found'});
    }

});

transactions.put('/:id', (req, res) => {
    const {id} = req.params;
});

transactions.delete('/:')




module.exports = transactions;