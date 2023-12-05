const express = require("express");

const {
    getAllTransactions, 
    getOneTransaction, 
    createTransaction, 
    deleteTransaction, 
    updateTransaction
} = require("../../queries/transactions");

const { checkName, checkBoolean } = require("../../validations/checkTransactions");

const transactions = express.Router();

transactions.get("/:id", async (req, res) => {
    const { id } = req.params
    const oneTransaction = await getOneTransaction(id)
    if (oneTransaction){
        res.json(oneTransaction)
    } else {
        res.status(404).json({error: "Sorry not found!"})
    }
});

transactions.get("/", async (req, res) => {
    const allTransactions = await getAllTransactions();
    if(allTransactions[0]){
        res.status(200).json({success: true, data: { payload: allTransactions }});
    } else {
        res.status(404).json({success: false, data: { error: "Server Error! (Controller) "}});
    }
});

transactions.post("/", checkName, checkBoolean, async (req, res) => {
    try{
        const createdTransaction = await createTransaction(req.body)
        res.json(createdTransaction)
    } catch(error){
        res.status(404).json({error: "Huge ERROR! Please go BACK!"})
    }
});

transactions.delete("/:id", async (req, res) => {
    try{
        const { id } = req.params;
        const deletedTransaction = await deleteTransaction(id);
        if(deletedTransaction){
            res.status(200).json({ success:true, payload: { data: deletedTransaction } })
        } else {
            res.status(404).json("Sorry, transaction not found");
        }
    } catch(err){
        res.send(err)
    }
});

transactions.put("/:id", async(req, res) => {
    const { id } = req.params; 
    const updatedTransaction = await updateTransaction(id, req.body);
    if(updatedTransaction.id){
        res.status(200).json(updatedTransaction);
    } else {
        res.status(404).json("Sorry there is no transaction found with that id!")
    }
});


module.exports = transactions;