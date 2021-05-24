CREATE DATABASE books;

CREATE USER 'authors'@'localhost' IDENTIFIED BY 'Auth0r$!';

GRANT ALL ON authors.* TO 'authors'@'localhost';

USE books;

CREATE TABLE authors (
	id INT auto_increment,
    nameFirst VARCHAR(255) NOT NULL,
    nameLast VARCHAR(255) NOT NULL,
	createdAt DATETIME DEFAULT NOW(),
	updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
	deletedAt DATETIME,
	PRIMARY KEY(id)
);
    
CREATE TABLE genres (
	id INT auto_increment,
    name VARCHAR(255) NOT NULL,
	createdAt DATETIME DEFAULT NOW(),
	updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
	deletedAt DATETIME,
	PRIMARY KEY(id)
);
    
CREATE TABLE novels (
	id INT auto_increment,
    title VARCHAR(255) NOT NULL,
    authorId INT,
	createdAt DATETIME DEFAULT NOW(),
	updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
	deletedAt DATETIME,
	PRIMARY KEY(id),
    FOREIGN KEY (authorId) REFERENCES authors(id)
);
    
CREATE TABLE authorNovels (
	id INT auto_increment,
    authorId INT,
    genreId INT,
    novelId INT,
	createdAt DATETIME DEFAULT NOW(),
	updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
	deletedAt DATETIME,
	PRIMARY KEY(id),
    FOREIGN KEY (authorId) REFERENCES authors(id),
    FOREIGN KEY (genreId) REFERENCES genres(id),
    FOREIGN KEY (novelId) REFERENCES novels(id)
);
    
INSERT INTO authors (nameFirst, nameLast) VALUES ("Bram", "Stoker");
INSERT INTO authors (nameFirst, nameLast) VALUES ("Oscar", "Wilde");
INSERT INTO authors (nameFirst, nameLast) VALUES ("Alice", "Walker");
INSERT INTO authors (nameFirst, nameLast) VALUES ("Leo", "Tolstoy");
INSERT INTO authors (nameFirst, nameLast) VALUES ("Charles", "Dickens");
INSERT INTO authors (nameFirst, nameLast) VALUES ("Arthur", "Miller");
INSERT INTO authors (nameFirst, nameLast) VALUES ("Alexander", "Dumas");
INSERT INTO authors (nameFirst, nameLast) VALUES ("Arthur", "Conan Doyle");
INSERT INTO authors (nameFirst, nameLast) VALUES ("Robert", "Louis Stevenson");
INSERT INTO authors (nameFirst, nameLast) VALUES ("Agatha", "Christie");
INSERT INTO authors (nameFirst, nameLast) VALUES ("Chinua", "Achebe");
INSERT INTO authors (nameFirst, nameLast) VALUES ("Fyodor", "Dostoyevsky");
INSERT INTO authors (nameFirst, nameLast) VALUES ("George", "Orwell");
INSERT INTO authors (nameFirst, nameLast) VALUES ("H.G.", "Wells");
INSERT INTO authors (nameFirst, nameLast) VALUES ("Ray", "Bradbury");

INSERT INTO genres (name) VALUES ("Fiction, Historical Fiction");
INSERT INTO genres (name) VALUES ("Fiction, Historical Fiction, Adventure, French Literature");
INSERT INTO genres (name) VALUES ("Fiction, Historical Fiction, African Literature");
INSERT INTO genres (name) VALUES ("Fiction, Historical Fiction, Drama, Plays");
INSERT INTO genres (name) VALUES ("Fiction, Historical Fiction, War, Russian Literature");
INSERT INTO genres (name) VALUES ("Fiction, Horror, Fantasy");
INSERT INTO genres (name) VALUES ("Fiction, Horror, Gothic, Fantasy");
INSERT INTO genres (name) VALUES ("Fiction, Mystery");
INSERT INTO genres (name) VALUES ("Fiction, Mystery, Crime, Thriller");
INSERT INTO genres (name) VALUES ("Fiction, Mystery, Science Fiction, Horror");
INSERT INTO genres (name) VALUES ("Fiction, Russian Literature, Mystery");
INSERT INTO genres (name) VALUES ("Fiction, Science Fiction, Dystopia");
INSERT INTO genres (name) VALUES ("Fiction, Science Fiction, Time Travel");

INSERT INTO novels (title) VALUES ("A Tale of Two Cities");
INSERT INTO novels (title) VALUES ("Animal Farm");
INSERT INTO novels (title) VALUES ("Crime and Punishment");
INSERT INTO novels (title) VALUES ("Dracula");
INSERT INTO novels (title) VALUES ("Fahrenheit 451");
INSERT INTO novels (title) VALUES ("Murder on the Orient Express");
INSERT INTO novels (title) VALUES ("The Color Purple");
INSERT INTO novels (title) VALUES ("The Crucible");
INSERT INTO novels (title) VALUES ("The Hound of Baskervilles");
INSERT INTO novels (title) VALUES ("The Picture of Dorian Gray");
INSERT INTO novels (title) VALUES ("The Strange Case of Dr. Jekyll and Mr. Hyde");
INSERT INTO novels (title) VALUES ("The Three Musketeers");
INSERT INTO novels (title) VALUES ("The Time Machine");
INSERT INTO novels (title) VALUES ("Things Fall Apart");
INSERT INTO novels (title) VALUES ("War and Peace");