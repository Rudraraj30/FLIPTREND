CREATE DATABASE IF NOT EXISTS fliptrend;
USE fliptrend;

CREATE TABLE Trend (
    trendId BIGINT PRIMARY KEY,
    managerId BIGINT REFERENCES Trend(trendId),
    trend_type VARCHAR(20),
    title VARCHAR(255),
    release_date DATE,
    duration TIME,
    youtube_link VARCHAR(255),
    description VARCHAR(255)
);

CREATE TABLE Genre (
    genreId BIGINT PRIMARY KEY,
    genreName VARCHAR(20),
    genreInfo VARCHAR(100)
);

CREATE TABLE Trend_Genre_Bridge (
    UId BIGINT IDENTITY PRIMARY KEY,
    genreId BIGINT,
    trendId BIGINT,
    FOREIGN KEY (genreId) REFERENCES Genre(genreId) ON DELETE CASCADE,
    FOREIGN KEY (trendId) REFERENCES Trend(trendId) ON DELETE CASCADE,
    UNIQUE (trendId, genreId)
);

CREATE TABLE Artist (
    artistId BIGINT PRIMARY KEY,
    artistName VARCHAR(20),
    birthdate DATE,
    work_summary VARCHAR(255)
);

CREATE TABLE Trend_Artist_Bridge (
    UId BIGINT IDENTITY PRIMARY KEY,
    artistId BIGINT,
    trendId BIGINT,
    FOREIGN KEY (artistId) REFERENCES Artist(artistId) ON DELETE CASCADE,
    FOREIGN KEY (trendId) REFERENCES Trend(trendId) ON DELETE CASCADE,
    UNIQUE (trendId, artistId)
);

CREATE TABLE Image (
    imageId BIGINT IDENTITY PRIMARY KEY,
    trendId BIGINT,
    image_URL VARCHAR(255),
    FOREIGN KEY (trendId) REFERENCES Trend(trendId) ON DELETE CASCADE
);

CREATE TABLE AppUser (
    userId INT PRIMARY KEY,
    userName VARCHAR(255),
    password VARCHAR(255)
);

CREATE TABLE Review (
    reviewId BIGINT IDENTITY PRIMARY KEY,
    trendId BIGINT,
    reviewerId INT,
    rating INT,
    review VARCHAR(255),
    review_time TIMESTAMP,
    FOREIGN KEY (trendId) REFERENCES Trend(trendId) ON DELETE CASCADE,
    FOREIGN KEY (reviewerId) REFERENCES AppUser(userId) ON DELETE CASCADE
);

