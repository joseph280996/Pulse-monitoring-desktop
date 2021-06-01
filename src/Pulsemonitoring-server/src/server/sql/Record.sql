CREATE TABLE Record (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    data TEXT,
    dateTimeCreated DATETIME DEFAULT CURRENT_TIMESTAMP,
    dateTimeUpdated DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PulseTypeID INT UNSIGNED NULL,
    HandPositionID INT UNSIGNED NULL,
    PatientID INT UNSIGNED NULL,
    FOREIGN KEY (PatientID) REFERENCES Patient(id),
    FOREIGN KEY (PulseTypeID) REFERENCES PulseType(id),
    FOREIGN KEY (HandPositionID) REFERENCES HandPosition(id)
);