USE model_example;

CREATE TABLE movies (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(45),
    directed_by VARCHAR(45),
    release_year INT NOT NULL
);