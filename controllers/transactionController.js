const express = require("express");

const transactions = express.Router();
const transactionData =  require("../models/transactions");




transactions.post('/', (req, res) => {
    const newTransaction = req.body;

    // const maxId = transactionData.length > 0 ? Math.max(...transactionData.map(t => t.id)) : 0;
    // newTransaction.id = maxId + 1;

    transactionData.push(newTransaction);

    res.status(200).json(newTransaction);
});

transactions.get('/', (req, res) => {
    console.log(transactions)
    res.json(transactionData);
});

transactions.get('/:index', (req, res) => {
    const {index} = req.params;

    if(index >= 0 && index < transactionData.length){
        res.status(200).json(transactionsData[index]);
    } else {
        res.status(404).json({message: 'Transaction not found'});
    }

});

transactions.put('/:arrayIndex', (req, res) => {
    const {arrayIndex} = req.params;
    if(transactionData[arrayIndex]){
         transactionData[arrayIndex] = req.body
         res.status(200).json((transactionData[arrayIndex]))
    } else {
        res.status(404)
    }   
});

transactions.delete('/:arrayIndex', (req, res) => {
    const {arrayIndex} = req.params;
    if(transactionData[arrayIndex]){
        const deletedArray = transactionData.splice(arrayIndex, 1)
        res.status(200).json(deletedArray[0])
    }else {
        res.status(404)
    }

});






module.exports = transactions;