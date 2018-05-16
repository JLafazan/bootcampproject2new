# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.6.35)
# Database: event_db
# Generation Time: 2018-05-16 03:22:27 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table Events
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Events`;

CREATE TABLE `Events` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `time` int(11) NOT NULL,
  `description` text NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `Events` WRITE;
/*!40000 ALTER TABLE `Events` DISABLE KEYS */;

INSERT INTO `Events` (`id`, `name`, `location`, `time`, `description`, `photo`, `category`, `link`, `createdAt`, `updatedAt`)
VALUES
	(1,'Rihanna in town','UC Davis',2147483647,'Another one','https://s3.amazonaws.com/ssglobalcdn/performers/wide/rihanna.jpg','Entertainment','www.google.com','0000-00-00 00:00:00','0000-00-00 00:00:00'),
	(2,'Goldlink at Sol Blume','Sacramento,CA',2147483647,'SOL BLUME SOL BLUME SOL BLUME','https://i1.sndcdn.com/avatars-000338012899-xpi5ra-t500x500.jpg','Entertainment','www.google.com','0000-00-00 00:00:00','0000-00-00 00:00:00'),
	(3,'J.Cole 4 Your Eyes Only','Oakland,CA',2147483647,'J.Cole','https://cdn-images-1.medium.com/max/1200/1*HTTQYeZGSql7-OrUPhd2bA.jpeg','Entertainment','www.google.com','0000-00-00 00:00:00','0000-00-00 00:00:00'),
	(4,'Nef the Pharaoh','Sacramento,CA',2147483647,'Big Tyminnnn','https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Supreme_Logo.svg/1200px-Supreme_Logo.svg.png','Entertainment','www.google.com','0000-00-00 00:00:00','0000-00-00 00:00:00'),
	(5,'2pac','Las Vegas, NV',2147483647,'To Live and Die in LA,','https://www.billboard.com/files/media/Tupac-Shakur-smile-1993-billboard-650-1548.jpg','Entertainment','www.google.com','0000-00-00 00:00:00','0000-00-00 00:00:00'),
	(6,'Beer Fest','Sacramento, CA',2147483647,'Turn Up!!!','http://www.capitolbeerfest.com/wp-content/uploads/2017/11/2018CapitolBeerFest-WebsiteHeader-960x250.jpg','Drinks','www.google.com','0000-00-00 00:00:00','0000-00-00 00:00:00'),
	(7,'Food Network','Elk Grove, CA',2147483647,'Meet foodies and eat food','https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/11/13/0/FN-3D-Logo-336x252.jpg.rend.hgtvcom.336.252.suffix/1384365569092.jpeg','Food','www.google.com','0000-00-00 00:00:00','0000-00-00 00:00:00'),
	(8,'Golden Bear','Downtown Sacramento, CA',2147483647,'Testagrossa Thursdays','https://goldenbear916.com/app/uploads/2012/10/GoldenBearWebsiteLogo-2-2.png','Entertainment','www.google.com','0000-00-00 00:00:00','0000-00-00 00:00:00'),
	(9,'Dive Bar','Downtown Sacramento, CA',2147483647,'Cuffin','https://assets0.roadtrippers.com/uploads/blog_post_section/attachment/image/158705/blog_post_section/attachment-image-cf22e596-d4c2-4f7c-ad4e-a0db2ff7039b.jpg','Entertainment','www.google.com','0000-00-00 00:00:00','0000-00-00 00:00:00'),
	(10,'Salty Saturday','Downtown Sacramento, CA',2147483647,'Don\'t Get Salty','https://upload.wikimedia.org/wikipedia/en/2/27/Morton_Umbrella_Girl.png','Entertainment','www.google.com','0000-00-00 00:00:00','0000-00-00 00:00:00');

/*!40000 ALTER TABLE `Events` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Favorites
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Favorites`;

CREATE TABLE `Favorites` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table Posts
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Posts`;

CREATE TABLE `Posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `body` text NOT NULL,
  `category` varchar(255) DEFAULT 'Event',
  `photo` blob,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `Posts` WRITE;
/*!40000 ALTER TABLE `Posts` DISABLE KEYS */;

INSERT INTO `Posts` (`id`, `title`, `body`, `category`, `photo`, `created_at`, `updated_at`, `deleted_at`)
VALUES
	(2,'Party on the Farm 2018','Bands, Mechanical Bull, and Beer Pong!','Food and Drink',NULL,'2018-05-13 00:20:19','2018-05-13 00:20:19',NULL),
	(3,'Campaign for President','Making the world a better place.','Arts and Entertainment',NULL,'2018-05-13 00:23:03','2018-05-13 00:23:03',NULL);

/*!40000 ALTER TABLE `Posts` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Users`;

CREATE TABLE `Users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
