DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS notes CASCADE;
DROP TABLE IF EXISTS projects CASCADE;
DROP TABLE IF EXISTS contacts CASCADE;
DROP TABLE IF EXISTS todos CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  picture VARCHAR(255) 
);

CREATE TABLE notes (
  id SERIAL PRIMARY KEY NOT NULL,
  users_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  task VARCHAR(255)
);

CREATE TABLE projects (
  id SERIAL PRIMARY KEY NOT NULL,
  users_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  link VARCHAR(255),
  description VARCHAR(255)
);

CREATE TABLE contacts (
  id SERIAL PRIMARY KEY NOT NULL,
  users_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  contact_link VARCHAR(255)
);

CREATE TABLE todos (
  id SERIAL PRIMARY KEY NOT NULL,
  users_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  task VARCHAR(255)
);