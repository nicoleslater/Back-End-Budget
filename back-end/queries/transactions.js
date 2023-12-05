const db = require("../db/dbConfig.js");

const getAllTransactions = async () => {
    try{
        const allTransactions = await db.any("SELECT * FROM transactions");
        return allTransactions
    } catch(err){
        return err
    }
}

const getOneTransaction = async (id) => {
    try{
        const oneTransaction = await db.one("SELECT * FROM transactions WHERE id=$1", [id]);
        return oneTransaction
    } catch(error){
        return error
    }
};

const createTransaction = async (transaction) => {
    try{
        const createdTransaction = await db.one("INSERT INTO transactions (item_name, amount, due_date, is_priority) VALUES ($1, $2, $3, $4) RETURNING *", [transaction.item_name, transaction.amount, transaction.due_date, transaction.is_priority])
        return createdTransaction
    } catch(error){
        return error
    }
}

const deleteTransaction = async (id) => {
    try{
        const deletedTransaction = await db.one(
            "DELETE from transactions WHERE id = $1 RETURNING *", 
            id
        )
        return deletedTransaction
    } catch(error){
        return error
    }
};

const updateTransaction = async (id, transaction) => {
    try{
        const {item_name, amount, due_date, is_priority} = transaction;
        const updatedTransaction = await db.one(
            "UPDATE transactions SET item_name=$1, amount=$2, due_date=$3, is_priority=$4 WHERE id=$5 RETURNING *",
            [item_name, amount, due_date, is_priority, id]
        );
        return updatedTransaction
    } catch(err){
        return err
    }
};

module.exports = {
    getAllTransactions, 
    getOneTransaction, 
    createTransaction, 
    deleteTransaction, 
    updateTransaction,
}