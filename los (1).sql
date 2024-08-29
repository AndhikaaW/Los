-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 29, 2024 at 01:39 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `los`
--

-- --------------------------------------------------------

--
-- Table structure for table `aspek_forms`
--

CREATE TABLE `aspek_forms` (
  `id` int NOT NULL,
  `aspek_hukum` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `aspek_organisasi` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `aspek_pasar` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `aspek_jaminan` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `aspek_keuangan` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `aspek_teknis` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `aspek_amdal` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `risiko` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `mitigasi` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `aspek_forms`
--

INSERT INTO `aspek_forms` (`id`, `aspek_hukum`, `aspek_organisasi`, `aspek_pasar`, `aspek_jaminan`, `aspek_keuangan`, `aspek_teknis`, `aspek_amdal`, `risiko`, `mitigasi`) VALUES
(1, 'Hukum OK', 'Organisasi baik', 'Pasar stabil', 'Jaminan cukup', 'Keuangan seimbang', 'Teknis memadai', 'Amdal lengkap', 'Risiko rendah', 'Mitigasi efektif'),
(2, 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h'),
(3, 'Hukum OK', 'Organisasi baik', 'Pasar stabil', 'Jaminan cukup', 'Keuangan seimbang', 'Teknis memadai', 'Amdal lengkap', 'Risiko rendah', 'Mitigasi efektif'),
(4, 'k', 'k', 'k', 'kk', 'k', 'k', 'k', 'k', 'k'),
(5, 'dada', 'dasd', 'dasda', 'dasda', 'daad', 'asdda', 'ddasd', 'sda', 'dasd'),
(6, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(7, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(8, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(9, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(10, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(11, 'j', 'j', 'j', 'j', 'j', 'j', 'j', 'j', 'j'),
(12, 'j', 'j', 'j', 'j', 'j', 'j', 'j', 'j', 'j'),
(13, 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k'),
(14, 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k'),
(15, 'l', 'l', 'll', 'l', 'l', 'l', 'll', 'l', 'l'),
(16, 'dsad', 'dasd', 'dk', 'j', 'j', 'jj', 'j', 'j', 'j');

-- --------------------------------------------------------

--
-- Table structure for table `finansials`
--

CREATE TABLE `finansials` (
  `id` int NOT NULL,
  `oms_ramai` double(16,2) DEFAULT NULL,
  `oms_normal` double(16,2) DEFAULT NULL,
  `oms_sepi` double(16,2) DEFAULT NULL,
  `hrg_pokok_jual` double(16,2) DEFAULT NULL,
  `btk_tdklangsung` double(16,2) DEFAULT NULL,
  `ohc` double(16,2) DEFAULT NULL,
  `b_usahalainnya` double(16,2) DEFAULT NULL,
  `b_rumahtangga` double(16,2) DEFAULT NULL,
  `b_sekolah` double(16,2) DEFAULT NULL,
  `b_pln_pdam` double(16,2) DEFAULT NULL,
  `b_transport_komunikasi` double(16,2) DEFAULT NULL,
  `b_lain_lain` double(16,2) DEFAULT NULL,
  `p_lainnya` double(16,2) DEFAULT NULL,
  `b_Lainnya` double(16,2) DEFAULT NULL,
  `bukti_pendapatan` varchar(20) DEFAULT NULL,
  `bukti_biaya` varchar(20) DEFAULT NULL,
  `bank_nonbank` double(16,2) DEFAULT NULL,
  `koperasi` double(16,2) DEFAULT NULL,
  `lainLain` double(16,2) DEFAULT NULL,
  `angsuran_baru` double(16,2) DEFAULT NULL,
  `kas` double(16,2) DEFAULT NULL,
  `bank` double(16,2) DEFAULT NULL,
  `piutang` double(16,2) DEFAULT NULL,
  `persediaan_barang` double(16,2) DEFAULT NULL,
  `atv_lancar_lainnya` double(16,2) DEFAULT NULL,
  `sub_atv_lancar` double(16,2) DEFAULT NULL,
  `tanah_bangunan` double(16,2) DEFAULT NULL,
  `peralatan_usaha` double(16,2) DEFAULT NULL,
  `kendaraan` double(16,2) DEFAULT NULL,
  `atv_tetap_lainnya` double(16,2) DEFAULT NULL,
  `sub_atv_tetap` double(16,2) DEFAULT NULL,
  `jumlah_atv` double(16,2) DEFAULT NULL,
  `tot_bdp_jangka_pendek` double(16,2) DEFAULT NULL,
  `idr_jangka_pendek` double(16,2) DEFAULT NULL,
  `jangka_pendek` double(16,2) DEFAULT NULL,
  `tot_bdp_jangka_panjang` double(16,2) DEFAULT NULL,
  `idr_jangka_panjang` double(16,2) DEFAULT NULL,
  `jangka_panjang` double(16,2) DEFAULT NULL,
  `sub_jumlah_hutang` double(16,2) DEFAULT NULL,
  `modal_sendiri` double(16,2) DEFAULT NULL,
  `laba` double(16,2) DEFAULT NULL,
  `sub_jumlah_modal` double(16,2) DEFAULT NULL,
  `jumlah_passiva` double(16,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `finansials`
--

INSERT INTO `finansials` (`id`, `oms_ramai`, `oms_normal`, `oms_sepi`, `hrg_pokok_jual`, `btk_tdklangsung`, `ohc`, `b_usahalainnya`, `b_rumahtangga`, `b_sekolah`, `b_pln_pdam`, `b_transport_komunikasi`, `b_lain_lain`, `p_lainnya`, `b_Lainnya`, `bukti_pendapatan`, `bukti_biaya`, `bank_nonbank`, `koperasi`, `lainLain`, `angsuran_baru`, `kas`, `bank`, `piutang`, `persediaan_barang`, `atv_lancar_lainnya`, `sub_atv_lancar`, `tanah_bangunan`, `peralatan_usaha`, `kendaraan`, `atv_tetap_lainnya`, `sub_atv_tetap`, `jumlah_atv`, `tot_bdp_jangka_pendek`, `idr_jangka_pendek`, `jangka_pendek`, `tot_bdp_jangka_panjang`, `idr_jangka_panjang`, `jangka_panjang`, `sub_jumlah_hutang`, `modal_sendiri`, `laba`, `sub_jumlah_modal`, `jumlah_passiva`) VALUES
(33, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 'ada', 'tidak ada', 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00),
(34, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 99.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00),
(35, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 99.00, 9.00, 9.00, 9.00, 9.00, 9.00, 99.00, 9.00, 9.00, 9.00, 9.00, 9.00, 99.00, 99.00, 9.00, 9.00, 9.00),
(36, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 99.00, 9.00, 9.00, 9.00, 9.00, 9.00, 99.00, 9.00, 9.00, 9.00, 9.00, 9.00, 99.00, 99.00, 9.00, 9.00, 9.00),
(37, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00),
(38, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 999.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 99.00, 9.00, 9.00, 9.00, 9.00, 9.00, 99.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 99.00, 9.00),
(39, 9.00, 9.00, 9.00, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(40, 9.00, 9.00, 9.00, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(41, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 'ada', 'tidak ada', 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00),
(42, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 99.00, 9.00, 9.00, 9.00, 99.00, 9.00, 9.00),
(43, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 99.00, 99.00, 9.00, 9.00, 9.00, 99.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 99.00, 9.00, 9.00);

-- --------------------------------------------------------

--
-- Table structure for table `limacs`
--

CREATE TABLE `limacs` (
  `id` int NOT NULL,
  `characters` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `capacity` longtext,
  `capital` longtext,
  `collateral` longtext,
  `conditions` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `limacs`
--

INSERT INTO `limacs` (`id`, `characters`, `capacity`, `capital`, `collateral`, `conditions`) VALUES
(1, NULL, 'j', 'j', 'j', NULL),
(2, NULL, 'g', 'g', 'g', NULL),
(3, NULL, 'j', 'j', 'j', NULL),
(4, NULL, 'j', 'j', 'j', NULL),
(5, NULL, 'j', 'j', 'j', NULL),
(6, 'h', 'f', 's', 's', 's'),
(7, 'dasd', 'dasd', 'dasd', 'dasd', 'asda'),
(9, 'dadda', 'sdas', 'dasds', 'dasdsa', NULL),
(10, 'dadda', 'sdas', 'dasds', 'dasdsa', NULL),
(11, 'dadda', 'sdas', 'dasds', 'dasdsa', NULL),
(12, NULL, NULL, NULL, NULL, NULL),
(13, NULL, NULL, NULL, NULL, NULL),
(14, 'l', 'l', 'l', 'l', 'l'),
(15, NULL, NULL, NULL, NULL, NULL),
(16, NULL, NULL, NULL, NULL, NULL),
(17, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `menu_sidebar`
--

CREATE TABLE `menu_sidebar` (
  `sidebar_id` int NOT NULL,
  `label` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `to_path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `children` json DEFAULT NULL,
  `status` int NOT NULL DEFAULT '2'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `menu_sidebar`
--

INSERT INTO `menu_sidebar` (`sidebar_id`, `label`, `to_path`, `children`, `status`) VALUES
(1, 'Data Diri Pemohon', '/pemohon', NULL, 2),
(2, 'Financial', '/financial', NULL, 2),
(3, 'Aspek Form', '/aspekform', NULL, 2),
(4, 'Jaminan', '/jaminan', NULL, 2),
(5, '5c', '/5c', NULL, 2),
(6, 'Survey', '/survey', NULL, 2),
(7, 'Coba', '/error', '[{\"label\": \"Data Pribadi\", \"to_path\": \"/pemohon/pribadi\", \"sidebar_id\": 1}, {\"label\": \"Alamat Pemohon\", \"to_path\": \"/pemohon/alamat\", \"sidebar_id\": 2}]', 2);

-- --------------------------------------------------------

--
-- Table structure for table `pemohon`
--

CREATE TABLE `pemohon` (
  `id` int NOT NULL,
  `cif` varchar(255) DEFAULT NULL,
  `tempat_lahir` varchar(255) DEFAULT NULL,
  `jenis_kelamin` enum('laki-laki','perempuan') DEFAULT NULL,
  `status_perkawinan` varchar(255) DEFAULT NULL,
  `no_ktp` varchar(255) DEFAULT NULL,
  `profesi_sampingan` varchar(255) DEFAULT NULL,
  `nama_lengkap` varchar(255) DEFAULT NULL,
  `tanggal_lahir` date DEFAULT NULL,
  `nama_ibu_kandung` varchar(255) DEFAULT NULL,
  `jumlah_tanggungan` int DEFAULT NULL,
  `ktp_berlaku` date DEFAULT NULL,
  `no_hp` varchar(20) DEFAULT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `kode_pos` int DEFAULT NULL,
  `provinsi` varchar(255) DEFAULT NULL,
  `kecamatan` varchar(255) DEFAULT NULL,
  `telepon` varchar(20) DEFAULT NULL,
  `status_tempat_tinggal` varchar(255) DEFAULT NULL,
  `kota` varchar(255) DEFAULT NULL,
  `kelurahan` varchar(255) DEFAULT NULL,
  `fax` varchar(20) DEFAULT NULL,
  `lama_tinggal` int DEFAULT NULL,
  `nama_usaha` varchar(255) DEFAULT NULL,
  `tanggal_mulai_usaha` date DEFAULT NULL,
  `status_tempat_usaha` varchar(255) DEFAULT NULL,
  `surat_keterangan_usaha` varchar(255) DEFAULT NULL,
  `sektor_ekonomi` varchar(255) DEFAULT NULL,
  `jumlah_karyawan` int DEFAULT NULL,
  `jarak_lokasi_usaha` varchar(255) DEFAULT NULL,
  `masa_laku` date DEFAULT NULL,
  `alamat_usaha` varchar(255) DEFAULT NULL,
  `kode_pos_usaha` int DEFAULT NULL,
  `provinsi_usaha` varchar(255) DEFAULT NULL,
  `kecamatan_usaha` varchar(255) DEFAULT NULL,
  `kota_usaha` varchar(255) DEFAULT NULL,
  `kelurahan_usaha` varchar(255) DEFAULT NULL,
  `produk` varchar(255) DEFAULT NULL,
  `bidang_usaha` varchar(255) DEFAULT NULL,
  `nomor_aplikasi` varchar(255) DEFAULT NULL,
  `plafon_kredit` varchar(255) DEFAULT NULL,
  `tanggal_aplikasi` date DEFAULT NULL,
  `suku_bunga` varchar(255) DEFAULT NULL,
  `tanggal_permohonan` date DEFAULT NULL,
  `jangka_waktu` varchar(255) DEFAULT NULL,
  `sifat_kredit` varchar(255) DEFAULT NULL,
  `jenis_permohonan` varchar(255) DEFAULT NULL,
  `jenis_angsuran` varchar(255) DEFAULT NULL,
  `no_aplikasi_sebelumnya` varchar(255) DEFAULT NULL,
  `tujuan_penggunaan` varchar(255) DEFAULT NULL,
  `detail_tujuan_penggunaan` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `pemohon`
--

INSERT INTO `pemohon` (`id`, `cif`, `tempat_lahir`, `jenis_kelamin`, `status_perkawinan`, `no_ktp`, `profesi_sampingan`, `nama_lengkap`, `tanggal_lahir`, `nama_ibu_kandung`, `jumlah_tanggungan`, `ktp_berlaku`, `no_hp`, `alamat`, `kode_pos`, `provinsi`, `kecamatan`, `telepon`, `status_tempat_tinggal`, `kota`, `kelurahan`, `fax`, `lama_tinggal`, `nama_usaha`, `tanggal_mulai_usaha`, `status_tempat_usaha`, `surat_keterangan_usaha`, `sektor_ekonomi`, `jumlah_karyawan`, `jarak_lokasi_usaha`, `masa_laku`, `alamat_usaha`, `kode_pos_usaha`, `provinsi_usaha`, `kecamatan_usaha`, `kota_usaha`, `kelurahan_usaha`, `produk`, `bidang_usaha`, `nomor_aplikasi`, `plafon_kredit`, `tanggal_aplikasi`, `suku_bunga`, `tanggal_permohonan`, `jangka_waktu`, `sifat_kredit`, `jenis_permohonan`, `jenis_angsuran`, `no_aplikasi_sebelumnya`, `tujuan_penggunaan`, `detail_tujuan_penggunaan`) VALUES
(73, 'CIF001', 'Jakarta', 'laki-laki', 'Kawin', '1234567890123456', 'Tidak Ada', 'John Doe', '1980-01-01', 'Jane Doe', 3, '2030-01-01', '08123456789', 'Jl. Sudirman No. 1', 12345, 'DKI Jakarta', 'Tanah Abang', '0211234567', 'Milik Sendiri', 'Jakarta', 'Bendungan Hilir', '0217654321', 10, 'Toko Jaya', '2010-01-01', 'Sewa', 'SIUP001', 'Perdagangan', 5, '2', '2025-12-31', 'Jl. Thamrin No. 2', 12345, 'DKI Jakarta', 'Menteng', 'Jakarta', 'Gondangdia', 'Kredit UMKM Industri', 'Perdagangan', 'APL123456', '50000000', '2024-08-21', '5.5', '2024-08-22', '12', 'Kredit Investasi', 'Baru', 'Bulanan', NULL, 'Modal Usaha', 'Untuk pembelian barang dagangan'),
(74, 'CIF002', 'Jakarta', 'laki-laki', 'Kawin', '1234567890123456', 'Tidak Ada', 'John Doe', '1980-01-01', 'Jane Doe', 3, '2030-01-01', '08123456789', 'Jl. Sudirman No. 1', 12345, 'DKI Jakarta', 'Tanah Abang', '0211234567', 'Milik Sendiri', 'Jakarta', 'Bendungan Hilir', '0217654321', 10, 'Toko Jaya', '2010-01-01', 'Sewa', 'SIUP001', 'Perdagangan', 5, '2', '2025-12-31', 'Jl. Thamrin No. 2', 12345, 'DKI Jakarta', 'Menteng', 'Jakarta', 'Gondangdia', 'Kredit UMKM Industri', 'Perdagangan', 'APL123456', '50000000', '2024-08-21', '5.5', '2024-08-22', '12', 'Kredit Investasi', 'Baru', 'Bulanan', NULL, 'Modal Usaha', 'Untuk pembelian barang dagangan'),
(75, 'CIF003', 'Jakarta', 'laki-laki', 'Kawin', '1234567890123456', 'Tidak Ada', 'John Doe', '1980-01-01', 'Jane Doe', 3, '2030-01-01', '08123456789', 'Jl. Sudirman No. 1', 12345, 'DKI Jakarta', 'Tanah Abang', '0211234567', 'Milik Sendiri', 'Jakarta', 'Bendungan Hilir', '0217654321', 10, 'Toko Jaya', '2010-01-01', 'Sewa', 'SIUP001', 'Perdagangan', 5, '2', '2025-12-31', 'Jl. Thamrin No. 2', 12345, 'DKI Jakarta', 'Menteng', 'Jakarta', 'Gondangdia', 'Kredit UMKM Industri', 'Perdagangan', 'APL123456', '50000000', '2024-08-21', '5.5', '2024-08-22', '12', 'Kredit Investasi', 'Baru', 'Bulanan', NULL, 'Modal Usaha', 'Untuk pembelian barang dagangan'),
(76, 'CIF004', 'Jakarta', 'laki-laki', 'Kawin', '1234567890123456', 'Tidak Ada', 'John Doe', '1980-01-01', 'Jane Doe', 3, '2030-01-01', '08123456789', 'Jl. Sudirman No. 1', 12345, 'DKI Jakarta', 'Tanah Abang', '0211234567', 'Milik Sendiri', 'Jakarta', 'Bendungan Hilir', '0217654321', 10, 'Toko Jaya', '2010-01-01', 'Sewa', 'SIUP001', 'Perdagangan', 5, '2', '2025-12-31', 'Jl. Thamrin No. 2', 12345, 'DKI Jakarta', 'Menteng', 'Jakarta', 'Gondangdia', 'Kredit UMKM Industri', 'Perdagangan', 'APL123456', '50000000', '2024-08-21', '5.5', '2024-08-22', '12', 'Kredit Investasi', 'Baru', 'Bulanan', NULL, 'Modal Usaha', 'Untuk pembelian barang dagangan'),
(77, 'CIF005', 'Jakarta', 'laki-laki', 'Kawin', '1234567890123456', 'Tidak Ada', 'John Doe', '1980-01-01', 'Jane Doe', 3, '2030-01-01', '08123456789', 'Jl. Sudirman No. 1', 12345, 'DKI Jakarta', 'Tanah Abang', '0211234567', 'Milik Sendiri', 'Jakarta', 'Bendungan Hilir', '0217654321', 10, 'Toko Jaya', '2010-01-01', 'Sewa', 'SIUP001', 'Perdagangan', 5, '2', '2025-12-31', 'Jl. Thamrin No. 2', 12345, 'DKI Jakarta', 'Menteng', 'Jakarta', 'Gondangdia', 'Kredit UMKM Industri', 'Perdagangan', 'APL123456', '50000000', '2024-08-21', '5.5', '2024-08-22', '12', 'Kredit Investasi', 'Baru', 'Bulanan', NULL, 'Modal Usaha', 'Untuk pembelian barang dagangan'),
(78, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'p', 'p', 'p', 'p', '0003-02-23', '2323', '0123-03-12', '31232', 'l', 'l', 'l', 'l', 'l', 'l'),
(79, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(80, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'p', 'p', 'p', 'p', '0022-02-02', '22', '0022-02-22', '222', 'l', 'l', 'l', 'l', 'l', 'l'),
(81, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'p', 'p', 'p', 'p', '0022-02-02', '22', '0022-02-22', '222', 'l', 'l', 'l', 'l', 'l', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `pemohon2`
--

CREATE TABLE `pemohon2` (
  `id` int NOT NULL DEFAULT '0',
  `cif` varchar(255) DEFAULT NULL,
  `tempat_lahir` varchar(255) DEFAULT NULL,
  `jenis_kelamin` enum('laki-laki','perempuan') DEFAULT NULL,
  `status_perkawinan` varchar(255) DEFAULT NULL,
  `no_ktp` varchar(255) DEFAULT NULL,
  `profesi_sampingan` varchar(255) DEFAULT NULL,
  `nama_lengkap` varchar(255) DEFAULT NULL,
  `tanggal_lahir` date DEFAULT NULL,
  `nama_ibu_kandung` varchar(255) DEFAULT NULL,
  `jumlah_tanggungan` int DEFAULT NULL,
  `ktp_berlaku` date DEFAULT NULL,
  `no_hp` varchar(20) DEFAULT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `kode_pos` int DEFAULT NULL,
  `provinsi` varchar(255) DEFAULT NULL,
  `kecamatan` varchar(255) DEFAULT NULL,
  `telepon` varchar(20) DEFAULT NULL,
  `status_tempat_tinggal` varchar(255) DEFAULT NULL,
  `kota` varchar(255) DEFAULT NULL,
  `kelurahan` varchar(255) DEFAULT NULL,
  `fax` varchar(20) DEFAULT NULL,
  `lama_tinggal` int DEFAULT NULL,
  `nama_usaha` varchar(255) DEFAULT NULL,
  `tanggal_mulai_usaha` date DEFAULT NULL,
  `status_tempat_usaha` varchar(255) DEFAULT NULL,
  `surat_keterangan_usaha` varchar(255) DEFAULT NULL,
  `sektor_ekonomi` varchar(255) DEFAULT NULL,
  `jumlah_karyawan` int DEFAULT NULL,
  `jarak_lokasi_usaha` varchar(255) DEFAULT NULL,
  `masa_laku` date DEFAULT NULL,
  `alamat_usaha` varchar(255) DEFAULT NULL,
  `kode_pos_usaha` int DEFAULT NULL,
  `provinsi_usaha` varchar(255) DEFAULT NULL,
  `kecamatan_usaha` varchar(255) DEFAULT NULL,
  `kota_usaha` varchar(255) DEFAULT NULL,
  `kelurahan_usaha` varchar(255) DEFAULT NULL,
  `produk` varchar(255) DEFAULT NULL,
  `bidang_usaha` varchar(255) DEFAULT NULL,
  `nomor_aplikasi` varchar(255) DEFAULT NULL,
  `plafon_kredit` varchar(255) DEFAULT NULL,
  `tanggal_aplikasi` date DEFAULT NULL,
  `suku_bunga` varchar(255) DEFAULT NULL,
  `tanggal_permohonan` date DEFAULT NULL,
  `jangka_waktu` varchar(255) DEFAULT NULL,
  `sifat_kredit` varchar(255) DEFAULT NULL,
  `jenis_permohonan` varchar(255) DEFAULT NULL,
  `jenis_angsuran` varchar(255) DEFAULT NULL,
  `no_aplikasi_sebelumnya` varchar(255) DEFAULT NULL,
  `tujuan_penggunaan` varchar(255) DEFAULT NULL,
  `detail_tujuan_penggunaan` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `pemohon2`
--

INSERT INTO `pemohon2` (`id`, `cif`, `tempat_lahir`, `jenis_kelamin`, `status_perkawinan`, `no_ktp`, `profesi_sampingan`, `nama_lengkap`, `tanggal_lahir`, `nama_ibu_kandung`, `jumlah_tanggungan`, `ktp_berlaku`, `no_hp`, `alamat`, `kode_pos`, `provinsi`, `kecamatan`, `telepon`, `status_tempat_tinggal`, `kota`, `kelurahan`, `fax`, `lama_tinggal`, `nama_usaha`, `tanggal_mulai_usaha`, `status_tempat_usaha`, `surat_keterangan_usaha`, `sektor_ekonomi`, `jumlah_karyawan`, `jarak_lokasi_usaha`, `masa_laku`, `alamat_usaha`, `kode_pos_usaha`, `provinsi_usaha`, `kecamatan_usaha`, `kota_usaha`, `kelurahan_usaha`, `produk`, `bidang_usaha`, `nomor_aplikasi`, `plafon_kredit`, `tanggal_aplikasi`, `suku_bunga`, `tanggal_permohonan`, `jangka_waktu`, `sifat_kredit`, `jenis_permohonan`, `jenis_angsuran`, `no_aplikasi_sebelumnya`, `tujuan_penggunaan`, `detail_tujuan_penggunaan`) VALUES
(73, 'CIF001', 'Jakarta', 'laki-laki', 'Kawin', '1234567890123456', 'Tidak Ada', 'John Doe', '1980-01-01', 'Jane Doe', 3, '2030-01-01', '08123456789', 'Jl. Sudirman No. 1', 12345, 'DKI Jakarta', 'Tanah Abang', '0211234567', 'Milik Sendiri', 'Jakarta', 'Bendungan Hilir', '0217654321', 10, 'Toko Jaya', '2010-01-01', 'Sewa', 'SIUP001', 'Perdagangan', 5, '2', '2025-12-31', 'Jl. Thamrin No. 2', 12345, 'DKI Jakarta', 'Menteng', 'Jakarta', 'Gondangdia', 'Kredit UMKM Industri', 'Perdagangan', 'APL123456', '50000000', '2024-08-21', '5.5', '2024-08-22', '12', 'Kredit Investasi', 'Baru', 'Bulanan', NULL, 'Modal Usaha', 'Untuk pembelian barang dagangan'),
(74, 'CIF002', 'Jakarta', 'laki-laki', 'Kawin', '1234567890123456', 'Tidak Ada', 'John Doe', '1980-01-01', 'Jane Doe', 3, '2030-01-01', '08123456789', 'Jl. Sudirman No. 1', 12345, 'DKI Jakarta', 'Tanah Abang', '0211234567', 'Milik Sendiri', 'Jakarta', 'Bendungan Hilir', '0217654321', 10, 'Toko Jaya', '2010-01-01', 'Sewa', 'SIUP001', 'Perdagangan', 5, '2', '2025-12-31', 'Jl. Thamrin No. 2', 12345, 'DKI Jakarta', 'Menteng', 'Jakarta', 'Gondangdia', 'Kredit UMKM Industri', 'Perdagangan', 'APL123456', '50000000', '2024-08-21', '5.5', '2024-08-22', '12', 'Kredit Investasi', 'Baru', 'Bulanan', NULL, 'Modal Usaha', 'Untuk pembelian barang dagangan'),
(75, 'CIF003', 'Jakarta', 'laki-laki', 'Kawin', '1234567890123456', 'Tidak Ada', 'John Doe', '1980-01-01', 'Jane Doe', 3, '2030-01-01', '08123456789', 'Jl. Sudirman No. 1', 12345, 'DKI Jakarta', 'Tanah Abang', '0211234567', 'Milik Sendiri', 'Jakarta', 'Bendungan Hilir', '0217654321', 10, 'Toko Jaya', '2010-01-01', 'Sewa', 'SIUP001', 'Perdagangan', 5, '2', '2025-12-31', 'Jl. Thamrin No. 2', 12345, 'DKI Jakarta', 'Menteng', 'Jakarta', 'Gondangdia', 'Kredit UMKM Industri', 'Perdagangan', 'APL123456', '50000000', '2024-08-21', '5.5', '2024-08-22', '12', 'Kredit Investasi', 'Baru', 'Bulanan', NULL, 'Modal Usaha', 'Untuk pembelian barang dagangan'),
(76, 'CIF004', 'Jakarta', 'laki-laki', 'Kawin', '1234567890123456', 'Tidak Ada', 'John Doe', '1980-01-01', 'Jane Doe', 3, '2030-01-01', '08123456789', 'Jl. Sudirman No. 1', 12345, 'DKI Jakarta', 'Tanah Abang', '0211234567', 'Milik Sendiri', 'Jakarta', 'Bendungan Hilir', '0217654321', 10, 'Toko Jaya', '2010-01-01', 'Sewa', 'SIUP001', 'Perdagangan', 5, '2', '2025-12-31', 'Jl. Thamrin No. 2', 12345, 'DKI Jakarta', 'Menteng', 'Jakarta', 'Gondangdia', 'Kredit UMKM Industri', 'Perdagangan', 'APL123456', '50000000', '2024-08-21', '5.5', '2024-08-22', '12', 'Kredit Investasi', 'Baru', 'Bulanan', NULL, 'Modal Usaha', 'Untuk pembelian barang dagangan'),
(77, 'CIF005', 'Jakarta', 'laki-laki', 'Kawin', '1234567890123456', 'Tidak Ada', 'John Doe', '1980-01-01', 'Jane Doe', 3, '2030-01-01', '08123456789', 'Jl. Sudirman No. 1', 12345, 'DKI Jakarta', 'Tanah Abang', '0211234567', 'Milik Sendiri', 'Jakarta', 'Bendungan Hilir', '0217654321', 10, 'Toko Jaya', '2010-01-01', 'Sewa', 'SIUP001', 'Perdagangan', 5, '2', '2025-12-31', 'Jl. Thamrin No. 2', 12345, 'DKI Jakarta', 'Menteng', 'Jakarta', 'Gondangdia', 'Kredit UMKM Industri', 'Perdagangan', 'APL123456', '50000000', '2024-08-21', '5.5', '2024-08-22', '12', 'Kredit Investasi', 'Baru', 'Bulanan', NULL, 'Modal Usaha', 'Untuk pembelian barang dagangan');

-- --------------------------------------------------------

--
-- Table structure for table `pilihan_survey`
--

CREATE TABLE `pilihan_survey` (
  `id` int NOT NULL,
  `survey_id` int NOT NULL,
  `pertanyaan` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `pilihan_survey`
--

INSERT INTO `pilihan_survey` (`id`, `survey_id`, `pertanyaan`) VALUES
(1, 1, 'Pernyataan sesuai dengan hasil verifikasi'),
(2, 1, 'Pernyataan kurang sesuai dengan hasil verifikasi'),
(3, 1, 'Pernyataan banyak bertentangan dengan hasil verifikasi'),
(4, 2, 'Sangat Kooperatif dalam memberikan Keterangan & Dokumen'),
(5, 2, 'Kooperatif dalam memberikan Keterangan & Dokumen'),
(6, 2, 'Kurang Kooperatif dalam memberikan Keterangan & Dokumen'),
(7, 3, 'Perilaku Bisnisnya jujur dan disukai'),
(8, 3, 'Tidak ada keluhan dari rekan bisnis'),
(9, 3, 'Banyak Komplain terhadap peilaku bisnis nasabah'),
(10, 4, 'Disukai dan menjadi panutan di lingkungannya'),
(11, 4, 'Hubungannya dengan lingkungan normal-normal aja'),
(12, 4, 'Kurang disukai dilingkungannya'),
(13, 5, 'Sulit ditiru orang lain'),
(14, 5, 'Tidak mudah ditiru orang lain'),
(15, 5, 'Mudah ditiru orang lain'),
(16, 6, 'Lebih banyak dengan rata-rata pesaing'),
(17, 6, 'Sama dengan rata-rata pesaing'),
(18, 6, 'Lebih sedikit dari rata-rata pesaing'),
(19, 7, 'Diperlukan dengan jumlah besar sepanjang waktu'),
(20, 7, 'Diperlukan sepanjang waktu'),
(21, 7, 'diperlukan hanya dalam waktu tertentu'),
(22, 8, 'Mudah Didapat'),
(23, 8, 'Suplier terbatas'),
(24, 8, 'Kurang Menentu'),
(25, 9, 'Supplier sangat mempengaruhi volume usaha'),
(26, 9, 'Supplier mempengaruhi volume usaha'),
(27, 9, 'Supplier kurang mempengaruhi volume usaha'),
(28, 10, 'Sangat Marketabel dan dapat diikat sempurna'),
(29, 10, 'Marketabel dan dapat diikat sempurna'),
(30, 10, 'Kurang Marketabel dan tidak dapat diikat sempurna'),
(31, 11, 'Sangat Mendukung perkembangan dunia usaha'),
(32, 11, 'Mendukung perkembangan dunia usaha'),
(33, 11, 'Kurang Mendukung perkembangan dunia usaha'),
(34, 12, 'Ekonomi Tumbuh'),
(35, 12, 'Ekonomi stabil/moderate'),
(36, 12, 'Ekonomi lemah'),
(37, 13, 'Kondisi Sosial Politik sangat stabil'),
(38, 13, 'Kondisi Sosial Politik stabil'),
(39, 13, 'Kondisi Sosial Politik kurang stabil');

-- --------------------------------------------------------

--
-- Table structure for table `survey`
--

CREATE TABLE `survey` (
  `id` int NOT NULL,
  `title` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `survey`
--

INSERT INTO `survey` (`id`, `title`) VALUES
(1, 'Kejujuran'),
(2, 'Sikap Kooperatif'),
(3, 'Reputasi Bisnis'),
(4, 'Hubungan Dengan Lingkungan'),
(5, 'Ciri Produk'),
(6, 'Jumlah Konsumen'),
(7, 'Kebutuhan Masyarakat Terhadap Produk'),
(8, 'Pengadaan Bahan Baku'),
(9, 'Ketergantungan Kepada Suplier'),
(10, 'Nilai Dan Kondisi Agunan'),
(11, 'Peran Pemerintah'),
(12, 'Kondisi Ekonomi'),
(13, 'Kondisi Sosial Politik');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `address` varchar(255) NOT NULL,
  `status` int NOT NULL,
  `sidebars` json NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `phone`, `address`, `status`, `sidebars`) VALUES
(25, 'admin', 'admin@gmail.com', '$2y$12$QUSHMowa7TjzycJIbNepiOPMNDDbpjjHN.miAnyEMlvRWsdCYqvjy', '0898736372', 'po', 1, '[{\"label\": \"Data Diri Pemohon\", \"status\": 2, \"to_path\": \"/pemohon\", \"children\": [], \"sidebar_id\": 1}, {\"label\": \"Financial\", \"status\": 2, \"to_path\": \"/financial\", \"children\": [], \"sidebar_id\": 2}, {\"label\": \"Aspek Form\", \"status\": 2, \"to_path\": \"/aspekform\", \"children\": [], \"sidebar_id\": 3}, {\"label\": \"Jaminan\", \"status\": 2, \"to_path\": \"/jaminan\", \"children\": [], \"sidebar_id\": 4}, {\"label\": \"5c\", \"status\": 2, \"to_path\": \"/5c\", \"children\": [], \"sidebar_id\": 5}, {\"label\": \"Survey\", \"status\": 2, \"to_path\": \"/survey\", \"children\": [], \"sidebar_id\": 6}, {\"label\": \"Coba\", \"status\": 2, \"to_path\": \"/error\", \"children\": [{\"label\": \"Data Pribadi\", \"to_path\": \"/pemohon/pribadi\", \"sidebar_id\": 1}, {\"label\": \"Alamat Pemohon\", \"to_path\": \"/pemohon/alamat\", \"sidebar_id\": 2}], \"sidebar_id\": 7}]'),
(26, 'aku', 'aku@gmail.com', '$2y$12$NDRDfZO0At93q3AacfQoue.KlQIivQn.A6L6kPDR5YCeCvVmKVJz2', '08938398493', 'disana', 2, '[{\"label\": \"Data Diri Pemohon\", \"status\": 2, \"to_path\": \"/pemohon\", \"children\": [], \"sidebar_id\": 1}, {\"label\": \"Financial\", \"status\": 2, \"to_path\": \"/financial\", \"children\": [], \"sidebar_id\": 2}, {\"label\": \"Aspek Form\", \"status\": 2, \"to_path\": \"/aspekform\", \"children\": [], \"sidebar_id\": 3}, {\"label\": \"Jaminan\", \"status\": 2, \"to_path\": \"/jaminan\", \"children\": [], \"sidebar_id\": 4}, {\"label\": \"5c\", \"status\": 2, \"to_path\": \"/5c\", \"children\": [], \"sidebar_id\": 5}, {\"label\": \"Survey\", \"status\": 2, \"to_path\": \"/survey\", \"children\": [], \"sidebar_id\": 6}, {\"label\": \"Coba\", \"status\": 2, \"to_path\": \"/error\", \"children\": [{\"label\": \"Data Pribadi\", \"to_path\": \"/pemohon/pribadi\", \"sidebar_id\": 1}, {\"label\": \"Alamat Pemohon\", \"to_path\": \"/pemohon/alamat\", \"sidebar_id\": 2}], \"sidebar_id\": 7}]'),
(27, 'coba', 'coba@gmail.com', '$2y$12$Ap59l4cQTA8QKMLQ3/vDkOlOX15nOVrGpvlPIGdnfOnwJnXbaN6Yu', '1234567890', '123 Main St, City', 2, '[{\"label\": \"Data Diri Pemohon\", \"status\": 2, \"to_path\": \"/pemohon\", \"children\": [], \"sidebar_id\": 1}, {\"label\": \"Financial\", \"status\": 2, \"to_path\": \"/financial\", \"children\": [], \"sidebar_id\": 2}, {\"label\": \"Aspek Form\", \"status\": 2, \"to_path\": \"/aspekform\", \"children\": [], \"sidebar_id\": 3}, {\"label\": \"Jaminan\", \"status\": 2, \"to_path\": \"/jaminan\", \"children\": [], \"sidebar_id\": 4}, {\"label\": \"5c\", \"status\": 2, \"to_path\": \"/5c\", \"children\": [], \"sidebar_id\": 5}, {\"label\": \"Survey\", \"status\": 2, \"to_path\": \"/survey\", \"children\": [], \"sidebar_id\": 6}, {\"label\": \"Coba\", \"status\": 2, \"to_path\": \"/error\", \"children\": [{\"label\": \"Data Pribadi\", \"to_path\": \"/pemohon/pribadi\", \"sidebar_id\": 1}, {\"label\": \"Alamat Pemohon\", \"to_path\": \"/pemohon/alamat\", \"sidebar_id\": 2}], \"sidebar_id\": 7}]'),
(28, 'andhika', 'wkwk102@gmail.com', '$2y$12$vl9PIeJIH6vrvQ.bflQoMuICnRP2DNeGQtByjO88AJpvgQZIR/FCi', '0988238239', 'disanaa', 2, '[{\"label\": \"Data Diri Pemohon\", \"status\": 2, \"to_path\": \"/pemohon\", \"children\": [], \"sidebar_id\": 1}, {\"label\": \"Financial\", \"status\": 2, \"to_path\": \"/financial\", \"children\": [], \"sidebar_id\": 2}, {\"label\": \"Aspek Form\", \"status\": 2, \"to_path\": \"/aspekform\", \"children\": [], \"sidebar_id\": 3}, {\"label\": \"Jaminan\", \"status\": 2, \"to_path\": \"/jaminan\", \"children\": [], \"sidebar_id\": 4}, {\"label\": \"5c\", \"status\": 2, \"to_path\": \"/5c\", \"children\": [], \"sidebar_id\": 5}, {\"label\": \"Survey\", \"status\": 2, \"to_path\": \"/survey\", \"children\": [], \"sidebar_id\": 6}, {\"label\": \"Coba\", \"status\": 2, \"to_path\": \"/error\", \"children\": [{\"label\": \"Data Pribadi\", \"to_path\": \"/pemohon/pribadi\", \"sidebar_id\": 1}, {\"label\": \"Alamat Pemohon\", \"to_path\": \"/pemohon/alamat\", \"sidebar_id\": 2}], \"sidebar_id\": 7}]'),
(29, 'coba', 'coba@gmail.com', '$2y$12$/hIAnURc94rvTIu3yxPhTeMCIyE3pNhGz6b8huK5HKqIzZimrjm/6', '1234567890', '123 Main St, City', 2, '[{\"label\": \"Data Diri Pemohon\", \"status\": 2, \"to_path\": \"/pemohon\", \"children\": [], \"sidebar_id\": 1}, {\"label\": \"Financial\", \"status\": 2, \"to_path\": \"/financial\", \"children\": [], \"sidebar_id\": 2}, {\"label\": \"Aspek Form\", \"status\": 2, \"to_path\": \"/aspekform\", \"children\": [], \"sidebar_id\": 3}, {\"label\": \"Jaminan\", \"status\": 2, \"to_path\": \"/jaminan\", \"children\": [], \"sidebar_id\": 4}, {\"label\": \"5c\", \"status\": 2, \"to_path\": \"/5c\", \"children\": [], \"sidebar_id\": 5}, {\"label\": \"Survey\", \"status\": 2, \"to_path\": \"/survey\", \"children\": [], \"sidebar_id\": 6}, {\"label\": \"Coba\", \"status\": 2, \"to_path\": \"/error\", \"children\": [{\"label\": \"Data Pribadi\", \"to_path\": \"/pemohon/pribadi\", \"sidebar_id\": 1}, {\"label\": \"Alamat Pemohon\", \"to_path\": \"/pemohon/alamat\", \"sidebar_id\": 2}], \"sidebar_id\": 7}]');

-- --------------------------------------------------------

--
-- Table structure for table `user_sidebar`
--

CREATE TABLE `user_sidebar` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `sidebar_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aspek_forms`
--
ALTER TABLE `aspek_forms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `finansials`
--
ALTER TABLE `finansials`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `limacs`
--
ALTER TABLE `limacs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menu_sidebar`
--
ALTER TABLE `menu_sidebar`
  ADD PRIMARY KEY (`sidebar_id`);

--
-- Indexes for table `pemohon`
--
ALTER TABLE `pemohon`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pilihan_survey`
--
ALTER TABLE `pilihan_survey`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pilihan_survey_surveyid_foreign` (`survey_id`);

--
-- Indexes for table `survey`
--
ALTER TABLE `survey`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_sidebar`
--
ALTER TABLE `user_sidebar`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_user_sidebar` (`user_id`,`sidebar_id`),
  ADD KEY `sidebar_id` (`sidebar_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `aspek_forms`
--
ALTER TABLE `aspek_forms`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `finansials`
--
ALTER TABLE `finansials`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `limacs`
--
ALTER TABLE `limacs`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `menu_sidebar`
--
ALTER TABLE `menu_sidebar`
  MODIFY `sidebar_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `pemohon`
--
ALTER TABLE `pemohon`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT for table `pilihan_survey`
--
ALTER TABLE `pilihan_survey`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `survey`
--
ALTER TABLE `survey`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `user_sidebar`
--
ALTER TABLE `user_sidebar`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `user_sidebar`
--
ALTER TABLE `user_sidebar`
  ADD CONSTRAINT `user_sidebar_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_sidebar_ibfk_2` FOREIGN KEY (`sidebar_id`) REFERENCES `menu_sidebar` (`sidebar_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
