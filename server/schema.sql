CREATE TABLE "user" (
  id SERIAL PRIMARY KEY,
  firstname VARCHAR(255),
  lastname VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  email_verified BOOLEAN,
  creation_date DATE
);

CREATE TABLE "transaction" (
  id SERIAL PRIMARY KEY,
  transaction_date TIMESTAMP,
  description VARCHAR(255),
  mcc INTEGER,
  amount DECIMAL(19,4),
  currency CHAR(3),
  cashback DECIMAL(19,4),
  user_id INT REFERENCES "user"(id)
);
