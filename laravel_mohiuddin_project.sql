-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 08, 2024 at 09:01 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravel_mohiuddin_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `name`, `email`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Mohiuddin', 'admin@gmail.com', '$2y$10$vrRnd/CVMEZStdk6TZheNeom0MrGb1RkCz3BH3sO0t9NdUNoGHCDq', NULL, '2024-12-06 09:22:12', '2024-12-06 09:22:12');

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `car_list_id` int(11) NOT NULL,
  `driver_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(30) NOT NULL,
  `details` varchar(150) NOT NULL,
  `date` date NOT NULL,
  `status` enum('pending','confirm') NOT NULL DEFAULT 'pending',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`id`, `car_list_id`, `driver_id`, `name`, `email`, `phone`, `details`, `date`, `status`, `created_at`, `updated_at`) VALUES
(3, 20, 4, 'Mohiuddin', 'mohiuddin@gmail.com', '01752437955', 'Booked Now!!!', '2024-12-07', 'pending', '2024-12-06 10:38:30', '2024-12-06 10:38:30'),
(4, 15, 3, 'Abdullah', 'asm@gmail.com', '01789564898', 'Urgently Booked Now!!!', '2024-12-07', 'confirm', '2024-12-06 10:59:05', '2024-12-06 10:59:25'),
(5, 21, 2, 'Rakib Hossain', 'rakib@gmail.com', '01985636589', 'Need this Car!!!', '2024-12-08', 'pending', '2024-12-06 11:02:12', '2024-12-06 11:02:12'),
(6, 12, 1, 'Nazrul Islam', 'nazrul@gmail.com', '01638563202', 'Need this Car!!!', '2024-12-09', 'pending', '2024-12-06 12:18:45', '2024-12-06 12:18:45'),
(7, 14, 5, 'Mahamud Hasan', 'mahamud@gmail.com', '01638563202', 'Booked Now!!!', '2024-12-10', 'pending', '2024-12-06 12:20:47', '2024-12-06 12:20:47'),
(8, 16, 4, 'Saif Jahan', 'saif@gmail.com', '01758965893', 'Book this, Car!!!', '2024-12-10', 'pending', '2024-12-06 12:24:30', '2024-12-06 12:24:30'),
(10, 15, 7, 'Safin Ahmed', 'safin@gmail.com', '01678954632', 'Book Now!!!', '2024-12-16', 'pending', '2024-12-07 07:30:54', '2024-12-07 07:30:54'),
(16, 21, 1, 'Fahim Ahmed', 'fahim@gmail.com', '01638563204', 'Need this Car!!!', '2024-12-14', 'pending', '2024-12-07 08:19:34', '2024-12-07 08:19:34');

-- --------------------------------------------------------

--
-- Table structure for table `car_lists`
--

CREATE TABLE `car_lists` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `brand` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `engine` varchar(255) NOT NULL,
  `price_per_day` decimal(8,2) NOT NULL,
  `image` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `car_lists`
--

INSERT INTO `car_lists` (`id`, `brand`, `model`, `engine`, `price_per_day`, `image`, `status`, `created_at`, `updated_at`) VALUES
(11, 'Toyota', 'Land Cruiser', '3600hz', 8000.00, 'images/20241206161249.png', 'Available', '2024-12-06 10:12:49', '2024-12-06 10:12:49'),
(12, 'Tata', 'Harrier', '3200hz', 6500.00, 'images/20241206161527.png', 'Available', '2024-12-06 10:15:27', '2024-12-06 10:15:27'),
(13, 'Honda', 'CR-V', '2700hz', 5500.00, 'images/20241206161741.png', 'Available', '2024-12-06 10:17:41', '2024-12-06 10:17:41'),
(14, 'Lamborghini', 'Huracan', '4000hz', 15000.00, 'images/20241207134424.png', 'Available', '2024-12-06 10:20:15', '2024-12-07 07:44:24'),
(15, 'Nissan', 'Micra', '2700hz', 4500.00, 'images/20241206162112.png', 'Available', '2024-12-06 10:21:12', '2024-12-06 10:21:12'),
(16, 'Volkswagen', 'Golf', '2600hz', 4000.00, 'images/20241206162205.png', 'Available', '2024-12-06 10:22:05', '2024-12-06 10:22:05'),
(17, 'Mercedez', 'Benz-E Class', '3600hz', 9000.00, 'images/20241206162301.png', 'Available', '2024-12-06 10:23:01', '2024-12-06 10:23:01'),
(18, 'Mitsubishi', 'Lancer', '2900hz', 7000.00, 'images/20241206162340.png', 'Available', '2024-12-06 10:23:40', '2024-12-06 10:23:40'),
(19, 'Suzuki', 'Dezire', '2500hz', 5500.00, 'images/20241206162424.png', 'Available', '2024-12-06 10:24:24', '2024-12-06 10:24:24'),
(20, 'BMW', 'X7', '3200hz', 9500.00, 'images/20241206162716.png', 'Available', '2024-12-06 10:27:16', '2024-12-06 10:27:16'),
(21, 'Ford', 'Mustang', '2400hz', 4500.00, 'images/20241206164038.png', 'Available', '2024-12-06 10:40:39', '2024-12-06 10:40:39'),
(23, 'Nissan', 'Petrol', '3000hz', 6500.00, 'images/20241207131321.png', 'Available', '2024-12-06 10:43:00', '2024-12-07 07:13:21');

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `status` enum('active','inactive') DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`id`, `name`, `email`, `password`, `photo`, `remember_token`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Abdullah', 'asm@gmail.com', '$2y$10$k4q3ttwquthUjua0LSPOPeilNbxLRgfIXaI5wIDLW6Z9NwOd.kZ.2', NULL, NULL, NULL, '2024-12-06 09:22:13', '2024-12-06 09:22:13');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `subject` varchar(50) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `details` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `name`, `email`, `subject`, `phone`, `details`, `created_at`, `updated_at`) VALUES
(1, 'Mohiuddin', 'mohiuddincr7@gmail.com', 'mohiuddincr7@gmail.com', '01752437955', 'What type of car there???', '2024-12-06 11:11:15', '2024-12-06 11:11:15'),
(2, 'Jamil Hossain', 'jamil@gmail.com', 'jamil@gmail.com', '01638563201', 'Well Services Car!!!', '2024-12-06 11:15:53', '2024-12-06 11:15:53'),
(3, 'Abdullah', 'asm@gmail.com', 'asm@gmail.com', '01567980633', 'Good Service & Best Car!!', '2024-12-06 12:16:40', '2024-12-06 12:16:40'),
(4, 'Mahamud Hasan', 'mahmudul21124@gmail.com', 'Need Car!!!', '01752437566', 'What type of Car there!!!', '2024-12-07 07:41:34', '2024-12-07 07:41:34');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(30) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `name`, `email`, `password`, `phone`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Mohiuddin Islam', 'mohiuddin@gmail.com', '$2y$10$WDwn686wcD/MRVo/AlcYhu7nhf4ZE.jloUjMkl4TGRW8DuoTjnuDW', '01752437955', NULL, '2024-12-08 08:51:08', '2024-12-08 08:51:08'),
(3, 'Abdullah', 'asm@gmail.com', '$2y$10$xwaxXI51cWMnm6m6uEyOme0iBjKcSV0Fx8qqtQpLDZm22ve3pu6ki', '01567980553', NULL, '2024-12-08 10:21:55', '2024-12-08 10:21:55'),
(4, 'Jamil Hossain', 'jamil@gmail.com', '$2y$10$Ilk.P0OCeNwu92cbCwBo7.tgY9MsYr/dR0alFSOSJQvoO1h05RphC', '01789658963', NULL, '2024-12-08 12:58:55', '2024-12-08 12:58:55'),
(5, 'Safin Ahmed', 'arif@gmail.com', '$2y$10$z8.o6DWc7UqJ5F8J5c78f.B6qcqwzzVLleQC0nPRzrVf4kEDpNjNS', '01567980456', NULL, '2024-12-08 13:05:52', '2024-12-08 13:05:52');

-- --------------------------------------------------------

--
-- Table structure for table `drivers`
--

CREATE TABLE `drivers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(30) NOT NULL,
  `details` varchar(150) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `drivers`
--

INSERT INTO `drivers` (`id`, `name`, `email`, `phone`, `details`, `created_at`, `updated_at`) VALUES
(1, 'Arif Hossain', 'arif@gmail.com', '01789654845', 'Basabo, Buddo Mondir', '2024-12-06 09:23:37', '2024-12-06 10:31:32'),
(2, 'Jamil Hossain', 'jamil@gmail.com', '01759863544', 'Shajahanpur, Motijheel', '2024-12-06 10:32:52', '2024-12-06 10:32:52'),
(3, 'Saif Jahan', 'saif@gmail.com', '01789564235', 'Siddiq Bazar, Gulistan', '2024-12-06 10:34:05', '2024-12-06 10:34:05'),
(4, 'Rakib Hasan', 'rakib@gmail.com', '01955645826', 'Narayangong, Good Driver!!!', '2024-12-06 10:35:24', '2024-12-06 10:35:24'),
(5, 'Mohiuddin Islam', 'mohiuddin@gmail.com', '01567980553', 'Drive at BMW Car!!!', '2024-12-06 10:36:33', '2024-12-06 10:36:33'),
(7, 'Fahad Ahmed', 'fahad@gmail.com', '01678956489', 'Drive at BMW X-7', '2024-12-06 12:28:16', '2024-12-07 07:14:13');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(117, '2014_10_12_000000_create_users_table', 1),
(118, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(119, '2019_08_19_000000_create_failed_jobs_table', 1),
(120, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(121, '2024_11_19_161352_create_admins_table', 1),
(122, '2024_11_19_171833_create_clients_table', 1),
(123, '2024_11_26_181716_create_drivers_table', 1),
(124, '2024_11_28_040917_create_bookings_table', 1),
(125, '2024_11_30_071405_create_car_lists_table', 1),
(126, '2024_12_05_145913_create_contacts_table', 1),
(127, '2024_12_08_130048_create_customers_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admins_email_unique` (`email`);

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `car_lists`
--
ALTER TABLE `car_lists`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `clients_email_unique` (`email`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `customers_email_unique` (`email`);

--
-- Indexes for table `drivers`
--
ALTER TABLE `drivers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `car_lists`
--
ALTER TABLE `car_lists`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `drivers`
--
ALTER TABLE `drivers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=128;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
