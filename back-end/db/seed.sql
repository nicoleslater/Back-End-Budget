\c transactions_dev; 

INSERT INTO transactions (name, amount, vendor, deadline, category, priority)
VALUES
('Electricity', 150, 'Utility Company', '10-01-2023', 'Utilities', true),
('Internet', 80, 'Internet Provider', '10-05-2023', 'Utilities', true),
('Gas', 100, 'Gas Company', '10-15-2023', 'Utilities', true), 
('Car Payment', 250, 'Auto Loan Provider', '10-20-2023', 'Loan', true),
('Car Insurance', 125, 'Insurance Company', '10-01-2023', 'Insurance', true),
('Rent', 1200, 'Landlord', '10-01-2023', 'Housing', true),
('Entertainment', 75, 'Various', '10-10-2023', 'Entertainment', false),
('Clothing', 50, 'Clothing Store', '10-19-2023', 'Shopping', false),
('Savings', 400, 'Savings Account', '10-01-2023', 'Savings', true),
('Gym', 40, 'Gym Company', '10-05-2023', 'Fitness', false);


