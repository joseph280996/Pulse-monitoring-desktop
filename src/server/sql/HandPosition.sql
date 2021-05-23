CREATE TABLE HandPosition (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255)
);
INSERT INTO HandPosition(name) 
VALUES ('left upper'), ('left middle'), ('left bottom'), ('right upper'), ('right middle'), ('right bottom');