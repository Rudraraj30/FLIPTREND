DROP DATABASE IF EXISTS `fliptrend`;

CREATE DATABASE IF NOT EXISTS `fliptrend`;
USE `fliptrend`;

DROP TABLE IF EXISTS Review;
DROP TABLE IF EXISTS Image;
DROP TABLE IF EXISTS Trend_Artist_Bridge;
DROP TABLE IF EXISTS Artist;
DROP TABLE IF EXISTS Trend_Genre_Bridge;
DROP TABLE IF EXISTS Genre;
DROP TABLE IF EXISTS AppUser;
DROP TABLE IF EXISTS Trend;

CREATE TABLE Trend (
    trendId BIGINT AUTO_INCREMENT PRIMARY KEY,
    managerId BIGINT,
    trend_type VARCHAR(20),
    title VARCHAR(255),
    release_date DATE,
    duration TIME,
    youtube_link VARCHAR(255),
    description VARCHAR(255),
    FOREIGN KEY (managerId) REFERENCES Trend(trendId)
);

INSERT INTO `Trend` (`managerId`, `trend_type`, `title`, `release_date`, `duration`, `youtube_link`, `description`) VALUES
(NULL, 'movie', 'Ludo', '2020-11-12', '02:30:00', 'https://www.youtube.com/watch?v=SjfTiM3q3FI', 'Anurag Basu’s dark comedy where four stories intertwine like the game of Ludo.'),
(1, 'song', 'Aabaad Barbaad', '2020-10-21', '00:04:22', 'https://www.youtube.com/watch?v=Ue7U5GL4zls', 'Soulful song by Arijit Singh from Ludo.'),
(1, 'song', 'Hardum Humdum', '2020-11-05', '00:04:38', 'https://www.youtube.com/watch?v=n99lxkrl9yQ', 'Melancholic romantic song by Arijit Singh.'),
(1, 'song', 'Meri Tum Ho', '2020-11-04', '00:03:43', 'https://www.youtube.com/watch?v=WQJX_x3LpGc', 'Heartfelt track sung by Jubin Nautiyal, Ash King, and Amit Mishra.'),
(1, 'song', 'Rishton Ka Manjha', '2020-11-10', '00:04:02', 'https://www.youtube.com/watch?v=DU4zdu1Cl0I', 'Emotional song about relationships from Ludo.'),
(1, 'song', 'Aabaad Barbaad (Reprise)', '2020-11-12', '00:03:55', 'https://www.youtube.com/watch?v=7DQ8LtKmvxU', 'Reprise version of Aabaad Barbaad by Arijit Singh.'),
(NULL, 'movie', 'Aashiqui 2', '2013-04-26', '02:20:00', 'https://www.youtube.com/watch?v=6fUJrgLx0xU', 'Romantic musical drama about a singer who helps a woman achieve fame but his own career fades.'),
(7, 'song', 'Tum Hi Ho', '2013-03-22', '00:04:22', 'https://www.youtube.com/watch?v=Umqb9KENgmk', 'Iconic romantic song by Arijit Singh.'),
(7, 'song', 'Sun Raha Hai Na Tu', '2013-04-05', '00:05:12', 'https://www.youtube.com/watch?v=II2EO3Nw4m0', 'Emotional melody by Ankit Tiwari.'),
(7, 'song', 'Chahun Main Ya Naa', '2013-04-12', '00:04:50', 'https://www.youtube.com/watch?v=9E8jvX-TDCg', 'Duet by Arijit Singh and Palak Muchhal.'),
(7, 'song', 'Hum Mar Jayenge', '2013-04-15', '00:04:25', 'https://www.youtube.com/watch?v=1N6pL4rLk9Q', 'Emotional song of heartbreak.'),
(7, 'song', 'Milne Hai Mujhse Aayi', '2013-04-18', '00:04:50', 'https://www.youtube.com/watch?v=KjROop1xFVs', 'Rock-infused track expressing longing.'),
(NULL, 'movie', 'Singham', '2011-07-22', '02:23:00', 'https://www.youtube.com/watch?v=27EBm1IMcG8', 'Action-packed film starring Ajay Devgn as a righteous cop.'),
(13, 'song', 'Singham Title Track', '2011-07-10', '00:03:45', 'https://www.youtube.com/watch?v=mzr0Kp3LkzY', 'High-energy title track of Singham.'),
(13, 'song', 'Saathiyaa', '2011-07-05', '00:04:30', 'https://www.youtube.com/watch?v=49KjDOjX4eQ', 'Romantic ballad featuring Ajay Devgn and Kajal Aggarwal.'),
(NULL, 'movie', 'Bol Bachchan', '2012-07-06', '02:32:00', 'https://www.youtube.com/watch?v=Fjj3xHMoL_s', 'Comedy film directed by Rohit Shetty starring Abhishek Bachchan and Ajay Devgn.'),
(15, 'song', 'Bol Bachchan Title Track', '2012-06-10', '00:03:55', 'https://www.youtube.com/watch?v=i3jEHzAnbTk', 'Energetic title track by Amitabh Bachchan.'),
(15, 'song', 'Chalao Na Naino Se', '2012-06-20', '00:04:20', 'https://www.youtube.com/watch?v=XLxjs2hnKps', 'Peppy romantic track with catchy beats.'),
(NULL, 'movie', 'Sholay', '1975-08-15', '03:24:00', 'https://www.youtube.com/watch?v=NG7a1a1g_7Y', 'Epic action-adventure Bollywood classic featuring Jai and Veeru.'),
(17, 'song', 'Yeh Dosti', '1975-08-01', '00:05:44', 'https://www.youtube.com/watch?v=vXxEzD0YMuM', 'Legendary friendship anthem sung by Kishore Kumar and Manna Dey.'),
(17, 'song', 'Mehbooba Mehbooba', '1975-08-01', '00:04:31', 'https://www.youtube.com/watch?v=nYuMZb1fL5w', 'Iconic song performed by RD Burman.');


CREATE TABLE Genre (
    genreId BIGINT AUTO_INCREMENT PRIMARY KEY,
    genreName VARCHAR(20),
    genreInfo VARCHAR(100)
);

INSERT INTO Genre (genreName, genreInfo) VALUES
('Comedy', 'Light-hearted and humorous content'),
('Romance', 'Love and emotional relationships'),
('Action', 'High-paced scenes with physical feats'),
('Drama', 'Emotional and narrative-focused content'),
('Thriller', 'Suspenseful and gripping storylines'),
('Musical', 'Strong musical elements and performances'),
('Classic', 'Old and culturally significant films');

CREATE TABLE Trend_Genre_Bridge (
    UId BIGINT AUTO_INCREMENT PRIMARY KEY,
    genreId BIGINT,
    trendId BIGINT,
    FOREIGN KEY (genreId) REFERENCES Genre(genreId) ON DELETE CASCADE,
    FOREIGN KEY (trendId) REFERENCES Trend(trendId) ON DELETE CASCADE,
    UNIQUE (trendId, genreId)
);

INSERT INTO Trend_Genre_Bridge (genreId, trendId) VALUES
(1, 1),  (4, 1),  (5, 1),    -- Ludo
(2, 7),  (4, 7),  (6, 7),    -- Aashiqui 2
(3, 13), (4, 13), (5, 13),   -- Singham
(1, 15), (2, 15),            -- Bol Bachchan
(3, 17), (4, 17), (7, 17);   -- Sholay

CREATE TABLE Artist (
    artistId BIGINT AUTO_INCREMENT PRIMARY KEY,
    artistName VARCHAR(20),
    birthdate DATE,
    artist_image_URL VARCHAR(100),
    work_summary VARCHAR(255)
);

INSERT INTO Artist (artistName, birthdate, artist_image_URL, work_summary) VALUES
-- Ludo
('Abhishek Bachchan', '1976-02-05', 'https://example.com/abhishek.jpg', 'Indian actor known for diverse roles including in Ludo and Bol Bachchan.'),
('Rajkummar Rao', '1984-08-31', 'https://example.com/rajkummar.jpg', 'Critically acclaimed actor from Ludo and various Bollywood films.'),
('Anurag Basu', '1974-05-08', 'https://example.com/anurag.jpg', 'Director and producer of Ludo.'),

-- Aashiqui 2
('Aditya Roy Kapur', '1985-11-16', 'https://example.com/aditya.jpg', 'Known for his romantic roles in Aashiqui 2 and other films.'),
('Shraddha Kapoor', '1987-03-03', 'https://example.com/shraddha.jpg', 'Famous for her role in Aashiqui 2 and other musical romances.'),
('Mohit Suri', '1981-04-11', 'https://example.com/mohit.jpg', 'Director of Aashiqui 2.'),
('Mukesh Bhatt', '1952-06-05', 'https://example.com/mukesh.jpg', 'Producer of Aashiqui 2.'),

-- Singham
('Ajay Devgn', '1969-04-02', 'https://example.com/ajay.jpg', 'Prominent action hero in Indian cinema, starred in Singham.'),
('Kareena Kapoor', '1980-09-21', 'https://example.com/kareena.jpg', 'Leading actress known for action and drama roles like Singham.'),
('Rohit Shetty', '1973-03-14', 'https://example.com/rohit.jpg', 'Director and producer of Singham.'),

-- Bol Bachchan
('Asin', '1985-10-26', 'https://example.com/asin.jpg', 'Co-starred in Bol Bachchan with comic and romantic roles.'),
-- Reuse: Abhishek Bachchan (already inserted), Rohit Shetty (already inserted)

-- Sholay
('Amitabh Bachchan', '1942-10-11', 'https://example.com/amitabh.jpg', 'Legendary Indian actor with iconic roles including Sholay.'),
('Dharmendra', '1935-12-08', 'https://example.com/dharmendra.jpg', 'Veteran actor known for his role as Veeru in Sholay.'),
('Hema Malini', '1948-10-16', 'https://example.com/hema.jpg', 'Actress and dancer, famous for her portrayal of Basanti in Sholay.'),
('Amjad Khan', '1940-11-12', 'https://example.com/amjad.jpg', 'Known for playing the iconic villain Gabbar Singh in Sholay.'),
('Ramesh Sippy', '1947-01-23', 'https://example.com/ramesh.jpg', 'Director of Sholay.'),
('G.P. Sippy', '1914-09-14', 'https://example.com/gpsippy.jpg', 'Producer of Sholay.');


CREATE TABLE Trend_Artist_Bridge (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    trendId BIGINT,
    artistId BIGINT,
    role VARCHAR(20),  -- e.g., 'Actor', 'Director', 'Producer', 'Singer'
    character_name VARCHAR(50),
    FOREIGN KEY (trendId) REFERENCES Trend(trendId) ON DELETE CASCADE,
    FOREIGN KEY (artistId) REFERENCES Artist(artistId) ON DELETE CASCADE
);

-- Ludo
INSERT INTO Trend_Artist_Bridge (trendId, artistId, role, character_name) VALUES
(1, 1, 'Actor', 'Alok Kumar Gupta'),  -- Abhishek Bachchan
(1, 2, 'Actor', 'Rahul Awasthi'),     -- Rajkummar Rao
(1, 3, 'Director', NULL);             -- Anurag Basu

-- Aashiqui 2
INSERT INTO Trend_Artist_Bridge (trendId, artistId, role, character_name) VALUES
(7, 4, 'Actor', 'Rahul Jaykar'),          -- Aditya Roy Kapur
(7, 5, 'Actress', 'Aarohi Keshav Shirke'),-- Shraddha Kapoor
(7, 6, 'Director', NULL),                 -- Mohit Suri
(7, 7, 'Producer', NULL);                 -- Mukesh Bhatt

-- Singham
INSERT INTO Trend_Artist_Bridge (trendId, artistId, role, character_name) VALUES
(13, 8, 'Actor', 'Bajirao Singham'),      -- Ajay Devgn
(13, 9, 'Actress', 'Kavya Bhosale'),      -- Kareena Kapoor
(13, 10, 'Director', NULL);               -- Rohit Shetty

-- Bol Bachchan
INSERT INTO Trend_Artist_Bridge (trendId, artistId, role, character_name) VALUES
(15, 1, 'Actor', 'Abbas Ali / Abhishek Bachchan'), -- Abhishek Bachchan (again)
(15, 11, 'Actress', 'Sanjana'),                    -- Asin
(15, 10, 'Director', NULL);                        -- Rohit Shetty

-- Sholay
INSERT INTO Trend_Artist_Bridge (trendId, artistId, role, character_name) VALUES
(17, 12, 'Actor', 'Jai'),              -- Amitabh Bachchan
(17, 13, 'Actor', 'Veeru');            -- Dharmendra



CREATE TABLE Image (
    imageId BIGINT AUTO_INCREMENT PRIMARY KEY,
    trendId BIGINT,
    image_URL VARCHAR(255),
    FOREIGN KEY (trendId) REFERENCES Trend(trendId) ON DELETE CASCADE
);

CREATE TABLE AppUser (
    userId INT AUTO_INCREMENT PRIMARY KEY,
    userName VARCHAR(255),
    password VARCHAR(255) -- Store securely as a hashed value
);

CREATE TABLE Review (
    reviewId BIGINT AUTO_INCREMENT PRIMARY KEY,
    trendId BIGINT,
    reviewerId INT,
    rating INT,
    review VARCHAR(255),
    review_time TIMESTAMP,
    FOREIGN KEY (trendId) REFERENCES Trend(trendId) ON DELETE CASCADE,
    FOREIGN KEY (reviewerId) REFERENCES AppUser(userId) ON DELETE CASCADE
);
