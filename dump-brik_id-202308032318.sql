-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: brik_id
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `blacklist`
--

DROP TABLE IF EXISTS `blacklist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blacklist` (
  `id` int NOT NULL AUTO_INCREMENT,
  `token` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blacklist`
--

LOCK TABLES `blacklist` WRITE;
/*!40000 ALTER TABLE `blacklist` DISABLE KEYS */;
INSERT INTO `blacklist` VALUES (1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJmYWphcnAzMDBAZ21haWwuY29tIiwicGhvdG8iOm51bGwsImlhdCI6MTY5MTAyMjAyNywiZXhwIjoxNjkxMTA4NDI3LCJpc3MiOiJmYWphciJ9.OjXLQ29SRPjqqhp0_siyqA1LdxDnFpEZL0GD8QP2xvI'),(2,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJmYWphcnAzMDBAZ21haWwuY29tIiwicGhvdG8iOm51bGwsImlhdCI6MTY5MTAyMjI3MSwiZXhwIjoxNjkxMTA4NjcxLCJpc3MiOiJmYWphciJ9.e-YHyuEwQgJUXYhrgkNOAIPj8y3HCmpaRzoHU6za0Us'),(3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJmYWphcnAzMDBAZ21haWwuY29tIiwicGhvdG8iOm51bGwsImlhdCI6MTY5MTAyMjUxNiwiZXhwIjoxNjkxMTA4OTE2LCJpc3MiOiJmYWphciJ9.5GzvNU9gq-mJWQYybQ0hdXf-VTk7rxw6Etdxwxvw5wQ'),(4,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAsImVtYWlsIjoiZmFqYXJwMzAwQGdtYWlsLmNvbSIsInBob3RvIjpudWxsLCJpYXQiOjE2OTEwMzU5OTUsImV4cCI6MTY5MTEyMjM5NSwiaXNzIjoiZmFqYXIifQ.DE5xkuGaiiyOlw4ZgLFePCnRn-71XoYCkjJ4WGx78Uc'),(5,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjEsImVtYWlsIjoieXVuaWFqYUBnbWFpbC5jb20iLCJwaG90byI6bnVsbCwiaWF0IjoxNjkxMDQxMjkzLCJleHAiOjE2OTExMjc2OTMsImlzcyI6ImZhamFyIn0.xczzQnp617Y1ZHxcnM1mvmZPcw4FgrcfYAoarK7x8DM'),(6,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsImVtYWlsIjoiaGFoYUBnbWFpbC5jb20iLCJwaG90byI6bnVsbCwiaWF0IjoxNjkxMDQxNTMzLCJleHAiOjE2OTExMjc5MzMsImlzcyI6ImZhamFyIn0.K_bU6lW2uc_3wc8QHkvis-uWsi3cUCo7_i8doalRquo'),(7,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsImVtYWlsIjoiYWppQGdtYWlsLmNvbSIsInBob3RvIjpudWxsLCJpYXQiOjE2OTEwNDE2NTUsImV4cCI6MTY5MTEyODA1NSwiaXNzIjoiZmFqYXIifQ.bQgkNYdamCPm61G9SMKNNhC-dUhuKEnUB0DlTGqBfLM');
/*!40000 ALTER TABLE `blacklist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Cemilan'),(2,'Kopi'),(3,'Makanan'),(4,'Kue'),(5,'Minuman');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `sku` varchar(6) DEFAULT NULL,
  `weight` int DEFAULT NULL,
  `height` int DEFAULT NULL,
  `width` int DEFAULT NULL,
  `length` int DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `id_category` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sku_UNIQUE` (`sku`),
  KEY `fk_category_idx` (`id_category`),
  CONSTRAINT `fk_category` FOREIGN KEY (`id_category`) REFERENCES `category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Chitato gais','Ciki ciki yang super enak, hanya di toko klontong kami','MHZVTK',500,5,5,5,'https://res.cloudinary.com/dkficbah5/image/upload/v1691058201/brik.id/products/image-aji.jpg',30000,'2023-08-03 16:29:37','2023-08-03 19:35:50',3),(2,'Good Day','Kopi anak muda','UT4F0D',1,1,5,5,'https://res.cloudinary.com/dkficbah5/image/upload/v1691049697/brik.id/products/image-aji.jpg',10000,'2023-08-03 16:29:37',NULL,2),(3,'Kapal Api','Kopinya bapack - bapack','6TZM1F',200,2,5,5,'https://res.cloudinary.com/dkficbah5/image/upload/v1691055816/brik.id/products/image-aji.jpg',35000,'2023-08-03 16:43:35',NULL,2),(4,'Kapal Api','Kopinya bapack - bapack','FGRE69',200,2,5,5,'https://res.cloudinary.com/dkficbah5/image/upload/v1691055816/brik.id/products/image-aji.jpg',35000,'2023-08-03 16:45:43',NULL,2),(5,'Kapal Api','Kopinya bapack - bapack','J5ZG8J',200,2,5,5,'https://res.cloudinary.com/dkficbah5/image/upload/v1691055816/brik.id/products/image-aji.jpg',35000,'2023-08-03 16:45:46',NULL,2),(6,'Kapal Api','Kopinya bapack - bapack','1VXU2P',200,2,5,5,'https://res.cloudinary.com/dkficbah5/image/upload/v1691055816/brik.id/products/image-aji.jpg',35000,'2023-08-03 16:45:50',NULL,2),(7,'Kapal Api','Kopinya bapack - bapack','7AR0CB',200,2,5,5,'https://res.cloudinary.com/dkficbah5/image/upload/v1691055816/brik.id/products/image-aji.jpg',35000,'2023-08-03 16:45:54',NULL,2),(8,'Kapal Api','Kopinya bapack - bapack','KPGEWP',200,2,5,5,'https://res.cloudinary.com/dkficbah5/image/upload/v1691055816/brik.id/products/image-aji.jpg',35000,'2023-08-03 16:45:57',NULL,2),(9,'Kapal Api','Kopinya bapack - bapack','HAGODV',200,2,5,5,'https://res.cloudinary.com/dkficbah5/image/upload/v1691055816/brik.id/products/image-aji.jpg',35000,'2023-08-03 16:46:00',NULL,2),(10,'Kapal Api','Kopinya bapack - bapack','8JVUVH',200,2,5,5,'https://res.cloudinary.com/dkficbah5/image/upload/v1691055816/brik.id/products/image-aji.jpg',35000,'2023-08-03 16:46:04',NULL,2),(11,'Kapal Api','Kopinya bapack - bapack','NNGBTL',200,2,5,5,'https://res.cloudinary.com/dkficbah5/image/upload/v1691055816/brik.id/products/image-aji.jpg',35000,'2023-08-03 16:46:08',NULL,2);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (20,'Fajar Pratama','https://res.cloudinary.com/dkficbah5/image/upload/v1691040946/brik.id/users/photoUser-fajarp300.jpg','fajar@gmail.com','$2a$10$ml2u0KR4gUPW.CtJ3p6npuKX.WZeD61ifquY8FLebe7y0Roe0JJ6y','2023-08-03 09:19:22','2023-08-03 12:36:42'),(21,'Prayuni','https://res.cloudinary.com/dkficbah5/image/upload/v1691041322/brik.id/users/photoUser-yuniaja.jpg','yuniaja@gmail.com','$2a$10$9CoVMKl933OPc3d3UptpbOVPNyxtk84uAUGACjJqWEdaiWhHQZGH6','2023-08-03 09:20:05','2023-08-03 12:45:08'),(22,'haha','https://res.cloudinary.com/dkficbah5/image/upload/v1691041556/brik.id/users/photoUser-haha.jpg','haha@gmail.com','$2a$10$00vOkHMpl1n/wNsAH2VnUeawE3mxbK8kZdGGoyw8PI9TC1CfpWQ86','2023-08-03 09:20:24','2023-08-03 12:47:18'),(23,'Aji','https://res.cloudinary.com/dkficbah5/image/upload/v1691041692/brik.id/users/photoUser-aji.jpg','aji@gmail.com','$2a$10$wTjye24k04qWYPm.0.mPVewMjVyZrnwYli2JKlpvKtypfdQS0o94q','2023-08-03 09:20:51','2023-08-03 15:30:48'),(24,'Aji',NULL,'ahmad@gmail.com','$2a$10$IQVajjXsDPX2j1yrM2uoMeI446z2.aSBobXwQwbolpor2dyjgfp2O','2023-08-03 09:20:58',NULL),(25,'indah',NULL,'indah@gmail.com','$2a$10$yPFwjRzZYiOUbAu9VZhvUex1Ep2YqWyGinDSp4k5Bm/n1EbZq1Y1C','2023-08-03 09:21:07',NULL),(26,'Dawenk',NULL,'dawenk@gmail.com','$2a$10$Kj5nPyEu0/FtJpU38No0YO92nwLkh4BayVdzJiGKi8ZfZJGppC3ge','2023-08-03 09:21:54',NULL),(27,'Suryanti',NULL,'suryanti@gmail.com','$2a$10$8KfSgyvGxfeoI7Qxeawl6.XltRFLcfzKcTiz7T3nA3xSyP2ioNsky','2023-08-03 12:14:59',NULL),(28,'genta',NULL,'genta@gmail.com','$2a$10$SEVXKs7UHwrAHjpi0/xP6OPw/QIVQ9vd9xRJzQ/0ofgAUXL8Hy346','2023-08-03 12:16:59',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'brik_id'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-03 23:18:19
