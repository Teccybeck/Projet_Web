-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 03 jan. 2023 à 21:43
-- Version du serveur : 5.7.36
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `clientmap`
--

-- --------------------------------------------------------

--
-- Structure de la table `clients`
--

DROP TABLE IF EXISTS `clients`;
CREATE TABLE IF NOT EXISTS `clients` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Nom` varchar(50) NOT NULL,
  `Prenom` varchar(50) NOT NULL,
  `AdresseMail` varchar(100) NOT NULL,
  `mdp` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `AdresseMail` (`AdresseMail`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `clients`
--

INSERT INTO `clients` (`id`, `Nom`, `Prenom`, `AdresseMail`, `mdp`) VALUES
(17, 'a', 'a', 'a', 'a'),
(18, 'toto', 'tata', 'bonjour', 'cest moi'),
(19, 'xaxa', 'xoxo', 'xa', 'xo'),
(20, 'rzg', 'dsg', 'g', 'dfgsq');

-- --------------------------------------------------------

--
-- Structure de la table `lieux`
--

DROP TABLE IF EXISTS `lieux`;
CREATE TABLE IF NOT EXISTS `lieux` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `note` int(11) NOT NULL,
  `avis` varchar(500) DEFAULT NULL,
  `idCli` int(11) NOT NULL,
  `idType` int(11) NOT NULL,
  `x` float NOT NULL,
  `y` float NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_clients_lieux` (`idCli`),
  KEY `FK_type_lieux` (`idType`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `lieux`
--

INSERT INTO `lieux` (`id`, `nom`, `note`, `avis`, `idCli`, `idType`, `x`, `y`) VALUES
(11, 'miam', 5, 'cool', 18, 2, 48.8683, 2.38369),
(19, 'baba', 1, 'nul', 19, 2, 48.8672, 2.11034),
(20, 'qdsfc', 2, 'adzda', 19, 3, 48.9255, 1.6479),
(21, 'azd', 5, 'azd', 19, 3, 48.7878, 1.94041),
(22, 'zaea', 2, 'zeaazezae', 17, 3, 48.8676, 2.41751);

-- --------------------------------------------------------

--
-- Structure de la table `type`
--

DROP TABLE IF EXISTS `type`;
CREATE TABLE IF NOT EXISTS `type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `type`
--

INSERT INTO `type` (`id`, `nom`) VALUES
(1, 'Restaurant'),
(2, 'Monument'),
(3, 'Magasin'),
(4, 'Theatre');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `lieux`
--
ALTER TABLE `lieux`
  ADD CONSTRAINT `FK_clients_lieux` FOREIGN KEY (`idCli`) REFERENCES `clients` (`id`),
  ADD CONSTRAINT `FK_type_lieux` FOREIGN KEY (`idType`) REFERENCES `type` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
