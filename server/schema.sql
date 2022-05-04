DROP DATABASE IF EXISTS `chat`;
CREATE DATABASE chat;

USE chat;


-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Messages'
--
-- ---

CREATE TABLE Messages (
  id INTEGER(11) NOT NULL AUTO_INCREMENT,
  text VARCHAR(1000) NOT NULL,
  user_id INTEGER(11) NOT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'Users'
--
-- ---

CREATE TABLE Users (
  id INTEGER(11) NOT NULL AUTO_INCREMENT,
  username VARCHAR(25) NOT NULL,
  roomname VARCHAR(25) NOT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE Messages ADD FOREIGN KEY (user_id) REFERENCES Users (id);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE Messages ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE Users ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO Messages (id,text,user_id) VALUES
-- ('','','');
-- INSERT INTO Users (id,username,roomname) VALUES
-- ('','','');



/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

