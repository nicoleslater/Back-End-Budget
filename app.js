const express = require('express');


const transactions = require("./controllers/transactionController");


const app = express();

// const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/transactions", transactions);

app.get('/', (req, res) => {
    
  res.send('Welcome to Budget App!');
});
app.get("/404", (req, res) => {
  res.send("I'm sorry that page can not be found, please try again!");
})

// app.get('/transaction', (req, res) => {
//     res.json(transactionsData);
// });

// app.get('/transaction/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const transaction = transactionsData.find(item => item.id === id);

//     if(transaction){
//         res.json(transaction);
//     } else {
//         res.status(404).json({message: 'Transaction not found'});
//     }

// });

// app.post('/transaction', (req, res) => {
//     const newTransaction = req.body;

//     const maxId = transactionsData.length > 0 ? Math.max(...transactionsData.map(t => t.id)) : 0;
//     newTransaction.id = maxId + 1;

//     transactionsData.push(newTransaction);

//     res.json(newTransaction);
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


module.exports = app;