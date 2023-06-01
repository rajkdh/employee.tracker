
INSERT INTO department (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');   

INSERT INTO role
(title, salary, department_id)
VALUES
('Sales Lead', 26000, 1),
('Salesperson', 23000, 1),
('Lead Engineer', 56000, 2),
('Software Engineer', 46000, 2),
('Account Manager', 63000, 3),
('Accountant', 32000, 3),
('Legal Team Lead', 60000, 4),
('Lawyer', 52000, 4);

INSERT INTO employee
(first_name, last_name, role_id, manager_id)
VALUES
('Susan', 'Smith', 1, null),
('Betty', 'Allen', 2, 1),
('Charles', 'Brown', 3, null),
('Jas', 'Tupik', 4, 3),
('Beth', 'Potter', 5, null),
('Ricky', 'Melton', 6, 5),
('Jacob', 'Alvarado', 7, null),
('Kaylee', 'Barr', 8, 7),
('Hayden', 'Holt', 2, 1);
