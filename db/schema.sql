DROP DATABASE IF EXISTS transactions_dev;

CREATE DATABASE transactions_dev;

\c transactions_dev;

CREATE TABLE transactions (
    id SERIAL PRIMARY KEY, 
    item_name TEXT NOT NULL,
    amount INT, 
    transaction_date DATE, 
)
