CREATE TABLE Patient (
  	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    UserID INT UNSIGNED NOT NULL,
    firstName VARCHAR(255) NULL,
    lastName VARCHAR(255) NULL,
    FOREIGN KEY (UserID) REFERENCES User(id)
);
