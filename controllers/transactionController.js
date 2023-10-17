// const express = require("express");
// const app = express();

// const transactions = express.Router();
// const transactionData =  require("../models/transactions");




// app.post('/transactions', (req, res) => {
//     const newTransaction = req.body;

//     const maxId = transactionsData.length > 0 ? Math.max(...transactionsData.map(t => t.id)) : 0;
//     newTransaction.id = maxId + 1;

//     transactionsData.push(newTransaction);

//     res.json(newTransaction);
// });

// app.get('/transactions', (req, res) => {
//     res.json(transactionData);
// });

// app.get('/transactions/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const transaction = transactionData.find(item => item.id === id);

//     if(transaction){
//         res.json(transaction);
//     } else {
//         res.status(404).json({message: 'Transaction not found'});
//     }

// });




// module.exports = transactions;