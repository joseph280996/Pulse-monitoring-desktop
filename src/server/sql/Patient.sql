CREATE TABLE Patient (
  	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    UserID INT UNSIGNED NOT NULL,
    FOREIGN KEY (UserID) REFERENCES User(id)
);