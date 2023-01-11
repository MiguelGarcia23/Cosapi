CREATE DATABASE cosapi;

USE cosapi; 

CREATE TABLE `projects` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `duration` int NOT NULL,
  `year` int NOT NULL,
  `image_project` varchar(255) NOT NULL,
  `image_company` varchar(255) NOT NULL,
  `services` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
)