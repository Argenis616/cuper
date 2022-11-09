-- MySQL dump 10.13  Distrib 8.0.31, for macos12.6 (x86_64)
--
-- Host: localhost    Database: crud
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `direccion`
--

DROP TABLE IF EXISTS `direccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `direccion` (
  `id_direccion` int NOT NULL,
  `calle` varchar(50) DEFAULT NULL,
  `numero` int DEFAULT NULL,
  `codigo_postal` int DEFAULT NULL,
  `colonia` varchar(20) DEFAULT NULL,
  `alcaldia` varchar(20) DEFAULT NULL,
  `usuario_id` int DEFAULT NULL,
  PRIMARY KEY (`id_direccion`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `direccion_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `direccion`
--

LOCK TABLES `direccion` WRITE;
/*!40000 ALTER TABLE `direccion` DISABLE KEYS */;
INSERT INTO `direccion` VALUES (1,'Granby',5,4081,'CO','Avenue',1),(2,'Myrtle',27687,450,'WA','Point',2),(3,'Paget',1,93,'MA','Street',3),(4,'Alpine',55,1,'LA','Park',4),(5,'7th',5924,20,'FL','Parkway',5),(6,'Farmco',96,6139,'KS','Plaza',6),(7,'Northfield',13,1,'IL','Place',7),(8,'Hanson',29,7,'CT','Way',8),(9,'Maywood',18,64,'CA','Avenue',9),(10,'Florence',8,934,'TX','Point',10),(11,'Bay',1,70967,'MO','Terrace',11),(12,'Jenna',32645,0,'WI','Drive',12),(13,'Lake View',1187,1880,'OR','Drive',13),(14,'Merry',9510,5198,'NJ','Park',14),(15,'Iowa',489,62,'CO','Street',15),(16,'Eastwood',86,79,'MN','Center',16),(17,'Raven',787,53589,'UT','Center',17),(18,'Anzinger',0,74775,'AL','Point',18),(19,'Farmco',8397,9847,'NY','Terrace',19),(20,'Florence',2,1475,'FL','Center',20);
/*!40000 ALTER TABLE `direccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id_usuario` int NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `apellido_paterno` varchar(50) DEFAULT NULL,
  `apellido_materno` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Jorge','Argenis','Hernandez'),(2,'Clyve','Nisen','Bente'),(3,'Allix','Hearnaman','Vickar'),(4,'Putnem','Pauling','Siebart'),(5,'Melina','MacCarrane','Baggarley'),(6,'Aviva','Hardacre','Denidge'),(7,'Doloritas','Wetherhead','John'),(8,'Ingaberg','Larsen','Abisetti'),(9,'Natalya','Mc Menamin','Kemsley'),(10,'Elizabeth','Olivia','Eberle'),(11,'Lockwood','Milner','Canlin'),(12,'Ardra','Chiddy','Norvel'),(13,'Sherie','Bigly','Bayston'),(14,'George','Donati','Colegate'),(15,'Georgeanna','Cribbin','Longmuir'),(16,'Lammond','Bompas','Rickert'),(17,'Kass','Larver','Lainge'),(18,'Jenica','Goalby','Knill'),(19,'Indira','De Souza','Verlinden'),(20,'Hannah','Finkle','Tuftin');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-09  2:35:56
