DROP DATABASE IF EXISTS transactions_dev;

CREATE DATABASE transactions_dev;

\c transactions_dev;

CREATE TABLE transactions (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    amount NUMERIC,
    from TEXT, 
    deadline TEXT, 
    category TEXT,
    priority BOOLEAN
);