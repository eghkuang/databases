DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;


-- Table 'Messages'


CREATE TABLE messages (
  id INTEGER(11) NOT NULL AUTO_INCREMENT,
  username VARCHAR(25),
  texxt VARCHAR(255),
  roomname VARCHAR(25),
  user_id INTEGER(11),
  PRIMARY KEY (id)
);


-- Table 'Users'

CREATE TABLE users (
  id INTEGER(11) NOT NULL AUTO_INCREMENT,
  username VARCHAR(25) NOT NULL,
  roomname VARCHAR(25) NOT NULL,
  PRIMARY KEY (id)
);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


/*------SOL---------

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/

--   id int NOT NULL AUTO_INCREMENT,
--   userid int NOT NULL,
--   text varchar(200)  NOT NULL,
--   roomname varchar(20),
--   PRIMARY KEY (ID)
-- );

/* Create other tables and define schemas for them here! */


-- CREATE TABLE users (
--   id        int    NOT NULL AUTO_INCREMENT,
--   username  varchar(40)   NOT NULL,
--   PRIMARY KEY (ID)
-- );


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

--------------------*/