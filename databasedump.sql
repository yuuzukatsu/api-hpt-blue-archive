-- phpMyAdmin SQL Dump
-- version 4.7.1
-- https://www.phpmyadmin.net/
--
-- Host: sql6.freemysqlhosting.net
-- Generation Time: Jul 03, 2022 at 09:12 AM
-- Server version: 5.5.62-0ubuntu0.14.04.1
-- PHP Version: 7.0.33-0ubuntu0.16.04.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sql6503536`
--

-- --------------------------------------------------------

--
-- Table structure for table `authkey`
--

CREATE TABLE `authkey` (
  `id` int(11) NOT NULL,
  `authkey` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `authkey`
--

INSERT INTO `authkey` (`id`, `authkey`) VALUES
(1, '22bc653308b95d5c0117528df678a7d1');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `name`, `username`, `password`) VALUES
(1, 'Yuuzukatsu', 'yz', '28b662d883b6d76fd96e4ddc5e9ba780'),
(2, 'Hina', 'sora', 'd84d53f781558dda9f5c19781ee17c7b'),
(3, 'Hifumi', 'hifumi', '565b0a562bf336391b7a502de4b36664');

-- --------------------------------------------------------

--
-- Table structure for table `raid`
--

CREATE TABLE `raid` (
  `id` int(11) NOT NULL,
  `raid_boss` varchar(20) NOT NULL,
  `rank` int(11) NOT NULL,
  `point` int(11) NOT NULL,
  `lineup` text NOT NULL,
  `member` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `raid`
--

INSERT INTO `raid` (`id`, `raid_boss`, `rank`, `point`, `lineup`, `member`) VALUES
(1, 'Binah', 1324, 13500123, 'Cherino, Akane, Maki, S.Azusa, Ako, Karin', 'Yuuzukatsu'),
(2, 'Kaiten', 13501, 6802455, 'Azusa, Tsubaki, Aru, Akari, Serina, Kotama', 'Hina'),
(3, 'Chesed', 13422, 333333, 'Cherino, Midori, Momoi, Iori, Karin, Kotama', 'Hifumi');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `authkey`
--
ALTER TABLE `authkey`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `raid`
--
ALTER TABLE `raid`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `authkey`
--
ALTER TABLE `authkey`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `raid`
--
ALTER TABLE `raid`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
