DROP DATABASE IF EXISTS transaction_dev;

CREATE DATABASE transaction_dev;

\c transaction_dev;

CREATE TABLE transactions (
    id SERIAL PRIMARY KEY, 
    item_name TEXT NOT NULL,
    amount NUMERIC, 
    due_date DATE, 
    is_priority BOOLEAN
)
