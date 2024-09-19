-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 19, 2024 at 02:49 AM
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
-- Table structure for table `aspek_form`
--

CREATE TABLE `aspek_form` (
  `id` int NOT NULL,
  `title_aspek` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `aspek_form`
--

INSERT INTO `aspek_form` (`id`, `title_aspek`) VALUES
(1, 'Aspek Hukum'),
(2, 'Aspek Organisasi'),
(3, 'Aspek Pasar'),
(4, 'Aspek Jaminan'),
(5, 'Aspek Keuangan'),
(6, 'Aspek Teknis'),
(7, 'Aspek Amdal');

-- --------------------------------------------------------

--
-- Table structure for table `jenispenggunaan`
--

CREATE TABLE `jenispenggunaan` (
  `KODE` char(4) NOT NULL DEFAULT '',
  `KETERANGAN` char(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

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
(2, 'Financial', '/analisakredit/financial', NULL, 2),
(3, 'Aspek Form', '/analisakredit/aspekform', NULL, 2),
(4, 'Jaminan', '/analisakredit/jaminan', NULL, 2),
(5, '5c', '/analisakredit/5c', NULL, 2),
(6, 'Survey', '/analisakredit/survey', NULL, 2),
(7, 'Pengajuan', '/pengajuan', NULL, 2),
(8, 'Status User', '/admin/statususer', NULL, 1),
(9, 'Debitur', '/admin/debitur', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `pemohon`
--

CREATE TABLE `pemohon` (
  `id` int NOT NULL,
  `Cif` int DEFAULT NULL,
  `TempatLahir` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Kelamin` enum('L','P') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `StatusPerkawinan` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `KTP` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `profesi_sampingan` varchar(255) DEFAULT NULL,
  `Nama` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `TglLahir` date DEFAULT NULL,
  `nama_ibu_kandung` varchar(255) DEFAULT NULL,
  `jumlah_tanggungan` int DEFAULT NULL,
  `ktp_berlaku` date DEFAULT NULL,
  `no_hp` varchar(20) DEFAULT NULL,
  `Alamat` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
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
  `kelurahan_usaha` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `pemohon`
--

INSERT INTO `pemohon` (`id`, `Cif`, `TempatLahir`, `Kelamin`, `StatusPerkawinan`, `KTP`, `profesi_sampingan`, `Nama`, `TglLahir`, `nama_ibu_kandung`, `jumlah_tanggungan`, `ktp_berlaku`, `no_hp`, `Alamat`, `kode_pos`, `provinsi`, `kecamatan`, `telepon`, `status_tempat_tinggal`, `kota`, `kelurahan`, `fax`, `lama_tinggal`, `nama_usaha`, `tanggal_mulai_usaha`, `status_tempat_usaha`, `surat_keterangan_usaha`, `sektor_ekonomi`, `jumlah_karyawan`, `jarak_lokasi_usaha`, `masa_laku`, `alamat_usaha`, `kode_pos_usaha`, `provinsi_usaha`, `kecamatan_usaha`, `kota_usaha`, `kelurahan_usaha`) VALUES
(1, 1001, 'Jakarta', 'L', 'Kawin', '1234567890123456', 'Tidak Ada', 'John Doe', '1980-01-01', 'Jane Doe', 3, '2030-01-01', '08123456789', 'Jl. Sudirman No. 1', 12345, 'DKI Jakarta', 'Tanah Abang', '0211234567', 'Milik Sendiri', 'Jakarta', 'Bendungan Hilir', '0217654321', 10, 'Toko Jaya', '2010-01-01', 'Sewa', 'SIUP001', 'Perdagangan', 5, '2', '2025-12-31', 'Jl. Thamrin No. 2', 12345, 'DKI Jakarta', 'Menteng', 'Jakarta', 'Gondangdia'),
(2, 101010228, 'BANDAR LAMPUNG', 'P', 'Belum Kawin', '1871036007850006', 'Tidak Ada', 'YULI KUSTINA', '2024-09-02', 'Jane Doe', 2, '2024-09-04', '08976372723', 'KP KALILANGSE NO 6 RT 08 RW 04 SEMARANG', 65413, 'pct', 'pct', '089735273727', 'sendiri', 'pacitan', 'pct', NULL, 3, 'ud apa yaa', '2024-09-23', 'disana', '-', 'Industri Otomotif', 4, '21', '2024-09-02', 'KP KALILANGSE NO 6 RT 08 RW 04 SEMARANG', 65413, 'pct', 'pct', 'pacitan', 'pct');

--
-- Triggers `pemohon`
--
DELIMITER $$
CREATE TRIGGER `delete_related_data_pemohon` BEFORE DELETE ON `pemohon` FOR EACH ROW BEGIN
    -- Menghapus data terkait di tabel produk
    DELETE FROM produk WHERE Cif = OLD.Cif;
END
$$
DELIMITER ;

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
(39, 13, 'Kondisi Sosial Politik kurang stabil'),
(40, 13, 'Kondisi ');

-- --------------------------------------------------------

--
-- Table structure for table `produk`
--

CREATE TABLE `produk` (
  `id` int NOT NULL,
  `Cif` int DEFAULT NULL,
  `pengajuan` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `bidang_usaha` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `NomorRekening` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
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
-- Dumping data for table `produk`
--

INSERT INTO `produk` (`id`, `Cif`, `pengajuan`, `bidang_usaha`, `NomorRekening`, `plafon_kredit`, `tanggal_aplikasi`, `suku_bunga`, `tanggal_permohonan`, `jangka_waktu`, `sifat_kredit`, `jenis_permohonan`, `jenis_angsuran`, `no_aplikasi_sebelumnya`, `tujuan_penggunaan`, `detail_tujuan_penggunaan`) VALUES
(1, 1001, 'kredit modal kerja', 'Kredit Produktif', 'APP001', '123456', '2024-09-01', '8', '2024-09-19', '21', 'Kredit Investasi', 'Kredit Konsumtif', 'Kredit Konsumtif', '-', 'dipake usaha', 'usaha umkm'),
(2, 101010228, 'kredit pertanian', 'Kredit Investasi', 'APP002', '123', '2024-09-15', '9', '2024-09-04', '12', 'Kredit Konsumtif', 'Kredit Konsumtif', 'Kredit Investasi', '-', 'dipake usaha', 'umkm juga'),
(3, 101010228, 'kredit modal kerja', 'Kredit Produktif', 'APP003', '123', '2024-09-15', '2', '2024-09-17', '21', 'Kredit Produktif', 'Kredit Konsumtif', 'Kredit Konsumtif', '-', 'dipake usaha', 'budidaya pecel');

--
-- Triggers `produk`
--
DELIMITER $$
CREATE TRIGGER `delete_related_data_produk` BEFORE DELETE ON `produk` FOR EACH ROW BEGIN
    -- Menghapus data terkait di tabel financial
    DELETE FROM trx_finansials WHERE NomorRekening = OLD.NomorRekening;
    
    -- Menghapus data terkait di tabel limac
    DELETE FROM trx_limacs WHERE NomorRekening = OLD.NomorRekening;
    
    -- Menghapus data terkait di tabel survey
    DELETE FROM trx_survey WHERE NomorRekening = OLD.NomorRekening;
    
    -- Menghapus data terkait di tabel jaminan
    DELETE FROM trx_jaminan WHERE NomorRekening = OLD.NomorRekening;
    
    -- Menghapus data terkait di tabel aspek_form
    DELETE FROM trx_aspek_form WHERE NomorRekening = OLD.NomorRekening;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `ref_jenis_agunan`
--

CREATE TABLE `ref_jenis_agunan` (
  `Id` char(2) DEFAULT NULL,
  `Kode` char(2) DEFAULT NULL,
  `Keterangan` varchar(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ref_jenis_agunan`
--

INSERT INTO `ref_jenis_agunan` (`Id`, `Kode`, `Keterangan`) VALUES
('1', '01', 'Jenis 1'),
('1', '01', 'Jenis 1');

-- --------------------------------------------------------

--
-- Table structure for table `ref_sektor_ekonomi`
--

CREATE TABLE `ref_sektor_ekonomi` (
  `Kode` varchar(4) NOT NULL DEFAULT '',
  `Keterangan` varchar(150) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ref_sektor_ekonomi`
--

INSERT INTO `ref_sektor_ekonomi` (`Kode`, `Keterangan`) VALUES
('INDO', 'Industri Otomotif'),
('FINA', 'Jasa Keuangan'),
('TELE', 'Telekomunikasi');

-- --------------------------------------------------------

--
-- Table structure for table `ref_sifat_kredit`
--

CREATE TABLE `ref_sifat_kredit` (
  `Id` char(2) DEFAULT NULL,
  `Kode` varchar(2) DEFAULT NULL,
  `Keterangan` varchar(70) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ref_sifat_kredit`
--

INSERT INTO `ref_sifat_kredit` (`Id`, `Kode`, `Keterangan`) VALUES
('01', '01', 'Kredit Konsumtif'),
('02', '02', 'Kredit Produktif'),
('03', '03', 'Kredit Investasi');

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
-- Table structure for table `trx_aspek_form`
--

CREATE TABLE `trx_aspek_form` (
  `id` int NOT NULL,
  `NomorRekening` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `aspek_id` int NOT NULL,
  `jawaban` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `trx_aspek_form`
--

INSERT INTO `trx_aspek_form` (`id`, `NomorRekening`, `aspek_id`, `jawaban`) VALUES
(1, 'APP001', 1, 'deskripsi'),
(2, 'APP001', 2, 'deskripsi'),
(3, 'APP001', 3, 'deskripsi'),
(4, 'APP001', 4, 'deskripsi'),
(5, 'APP001', 5, 'deskripsi'),
(6, 'APP001', 6, 'deskripsi'),
(7, 'APP001', 7, 'deskripsi'),
(8, 'APP002', 1, 'deskripsi'),
(9, 'APP002', 2, 'deskripsi'),
(10, 'APP002', 3, 'deskripsi'),
(11, 'APP002', 4, 'deskripsi'),
(12, 'APP002', 5, 'deskripsi'),
(13, 'APP002', 6, 'deskripsi'),
(14, 'APP002', 7, 'deskripsi');

-- --------------------------------------------------------

--
-- Table structure for table `trx_finansials`
--

CREATE TABLE `trx_finansials` (
  `id` int NOT NULL,
  `NomorRekening` varchar(30) NOT NULL,
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
-- Dumping data for table `trx_finansials`
--

INSERT INTO `trx_finansials` (`id`, `NomorRekening`, `oms_ramai`, `oms_normal`, `oms_sepi`, `hrg_pokok_jual`, `btk_tdklangsung`, `ohc`, `b_usahalainnya`, `b_rumahtangga`, `b_sekolah`, `b_pln_pdam`, `b_transport_komunikasi`, `b_lain_lain`, `p_lainnya`, `b_Lainnya`, `bukti_pendapatan`, `bukti_biaya`, `bank_nonbank`, `koperasi`, `lainLain`, `angsuran_baru`, `kas`, `bank`, `piutang`, `persediaan_barang`, `atv_lancar_lainnya`, `sub_atv_lancar`, `tanah_bangunan`, `peralatan_usaha`, `kendaraan`, `atv_tetap_lainnya`, `sub_atv_tetap`, `jumlah_atv`, `tot_bdp_jangka_pendek`, `idr_jangka_pendek`, `jangka_pendek`, `tot_bdp_jangka_panjang`, `idr_jangka_panjang`, `jangka_panjang`, `sub_jumlah_hutang`, `modal_sendiri`, `laba`, `sub_jumlah_modal`, `jumlah_passiva`) VALUES
(1, 'APP001', 10000.00, 10000.00, 10000.00, 10000.00, 10000.00, 10000.00, 10000.00, 10000.00, 10000.00, 10000.00, 10000.00, 10000.00, 10000.00, 10000.00, 'ada', 'tidak ada', 10000.00, 10000.00, 10000.00, 10000.00, 10000.00, 10000.00, 10000.00, 10000.00, 10000.00, 10000.00, 10000.00, 10000.00, 10000.00, 10000.00, 10000.00, 10000.00, 10000.00, 10000.00, 10000.00, 10000.00, 10000.00, 10000.00, 10000.00, 10000.00, 10000.00, 10000.00, 10000.00),
(2, 'APP002', 20000.00, 20000.00, 20000.00, 20000.00, 20000.00, 20000.00, 20000.00, 20000.00, 20000.00, 20000.00, 20000.00, 20000.00, 20000.00, 20000.00, 'ada', 'tidak ada', 20000.00, 20000.00, 20000.00, 20000.00, 20000.00, 20000.00, 20000.00, 20000.00, 20000.00, 20000.00, 20000.00, 20000.00, 20000.00, 20000.00, 20000.00, 20000.00, 20000.00, 20000.00, 20000.00, 20000.00, 20000.00, 20000.00, 20000.00, 20000.00, 20000.00, 20000.00, 20000.00);

-- --------------------------------------------------------

--
-- Table structure for table `trx_jaminan`
--

CREATE TABLE `trx_jaminan` (
  `id` int NOT NULL,
  `NomorRekening` varchar(30) NOT NULL,
  `jenisAgunan` varchar(100) DEFAULT NULL,
  `merek` varchar(100) DEFAULT NULL,
  `buktiHakMilik` varchar(100) DEFAULT NULL,
  `namaPemilikJaminan` varchar(255) DEFAULT NULL,
  `lokasiAgunan` text,
  `nilaiTransaksi` varchar(20) DEFAULT NULL,
  `jenisPengikatan` varchar(100) DEFAULT NULL,
  `tipe` varchar(100) DEFAULT NULL,
  `tahunPembuatan` date DEFAULT NULL,
  `noAgunan` varchar(50) DEFAULT NULL,
  `hubunganDenganPemilik` varchar(100) DEFAULT NULL,
  `informasiTambahan` text,
  `asuransi` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `trx_jaminan`
--

INSERT INTO `trx_jaminan` (`id`, `NomorRekening`, `jenisAgunan`, `merek`, `buktiHakMilik`, `namaPemilikJaminan`, `lokasiAgunan`, `nilaiTransaksi`, `jenisPengikatan`, `tipe`, `tahunPembuatan`, `noAgunan`, `hubunganDenganPemilik`, `informasiTambahan`, `asuransi`) VALUES
(1, 'APP001', 'Jenis 1', 'tanah', 'Jenis 1', 'tanah', 'tanah', 'tanah', 'Jenis 1', '1', '2024-09-02', 'tanah', '1', 'tanah', 'tanah'),
(2, 'APP002', 'Jenis 1', 'tanah', 'Jenis 1', 'tanah', 'tanah', 'tanah', 'Jenis 1', '1', NULL, 'tanah', '1', 'tanah', 'tanah');

-- --------------------------------------------------------

--
-- Table structure for table `trx_limacs`
--

CREATE TABLE `trx_limacs` (
  `id` int NOT NULL,
  `NomorRekening` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `characters` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `capacity` longtext,
  `capital` longtext,
  `collateral` longtext,
  `conditions` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `trx_limacs`
--

INSERT INTO `trx_limacs` (`id`, `NomorRekening`, `characters`, `capacity`, `capital`, `collateral`, `conditions`) VALUES
(1, 'APP001', 'deskripsi', 'deskripsi', 'deskripsi', 'deskripsi', 'deskripsi'),
(2, 'APP002', 'deskripsi', 'deskripsi', 'deskripsi', 'deskripsi', 'deskripsi');

-- --------------------------------------------------------

--
-- Table structure for table `trx_survey`
--

CREATE TABLE `trx_survey` (
  `ID` int NOT NULL,
  `NomorRekening` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `SurveyId` int DEFAULT NULL,
  `Pilihan` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `trx_survey`
--

INSERT INTO `trx_survey` (`ID`, `NomorRekening`, `SurveyId`, `Pilihan`) VALUES
(1, 'APP001', 1, 'Pernyataan sesuai dengan hasil verifikasi'),
(2, 'APP001', 2, 'Kurang Kooperatif dalam memberikan Keterangan & Dokumen'),
(3, 'APP001', 3, 'Tidak ada keluhan dari rekan bisnis'),
(4, 'APP001', 4, 'Hubungannya dengan lingkungan normal-normal aja'),
(5, 'APP001', 5, 'Mudah ditiru orang lain'),
(6, 'APP001', 6, 'Sama dengan rata-rata pesaing'),
(7, 'APP001', 7, 'Diperlukan sepanjang waktu'),
(8, 'APP001', 8, 'Suplier terbatas'),
(9, 'APP001', 9, 'Supplier kurang mempengaruhi volume usaha'),
(10, 'APP001', 10, 'Kurang Marketabel dan tidak dapat diikat sempurna'),
(11, 'APP001', 11, 'Mendukung perkembangan dunia usaha'),
(12, 'APP001', 13, 'Kondisi Sosial Politik stabil'),
(13, 'APP001', 12, 'Ekonomi stabil/moderate'),
(14, 'APP002', 1, 'Pernyataan sesuai dengan hasil verifikasi'),
(15, 'APP002', 2, 'Kooperatif dalam memberikan Keterangan & Dokumen'),
(16, 'APP002', 3, 'Banyak Komplain terhadap peilaku bisnis nasabah'),
(17, 'APP002', 4, 'Hubungannya dengan lingkungan normal-normal aja'),
(18, 'APP002', 5, 'Tidak mudah ditiru orang lain'),
(19, 'APP002', 6, 'Sama dengan rata-rata pesaing'),
(20, 'APP002', 7, 'Diperlukan sepanjang waktu'),
(21, 'APP002', 8, 'Suplier terbatas'),
(22, 'APP002', 10, 'Kurang Marketabel dan tidak dapat diikat sempurna'),
(23, 'APP002', 11, 'Kurang Mendukung perkembangan dunia usaha'),
(24, 'APP002', 9, 'Supplier sangat mempengaruhi volume usaha'),
(25, 'APP002', 12, 'Ekonomi lemah'),
(26, 'APP002', 13, 'Kondisi Sosial Politik kurang stabil');

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
(1, 'admin', 'admin@gmail.com', '$2y$12$QUSHMowa7TjzycJIbNepiOPMNDDbpjjHN.miAnyEMlvRWsdCYqvjy', '0898736372', 'po', 1, '[{\"label\": \"Data Diri Pemohon\", \"status\": 2, \"to_path\": \"/pemohon\", \"children\": [], \"sidebar_id\": 1}, {\"label\": \"Financial\", \"status\": 2, \"to_path\": \"/analisakredit/financial\", \"children\": [], \"sidebar_id\": 2}, {\"label\": \"Aspek Form\", \"status\": 2, \"to_path\": \"/analisakredit/aspekform\", \"children\": [], \"sidebar_id\": 3}, {\"label\": \"Jaminan\", \"status\": 2, \"to_path\": \"/analisakredit/jaminan\", \"children\": [], \"sidebar_id\": 4}, {\"label\": \"5c\", \"status\": 2, \"to_path\": \"/analisakredit/5c\", \"children\": [], \"sidebar_id\": 5}, {\"label\": \"Survey\", \"status\": 2, \"to_path\": \"/analisakredit/survey\", \"children\": [], \"sidebar_id\": 6}, {\"label\": \"Pengajuan\", \"status\": 2, \"to_path\": \"/pengajuan\", \"children\": [], \"sidebar_id\": 7}, {\"label\": \"Status User\", \"status\": 2, \"to_path\": \"/admin/statususer\", \"children\": [], \"sidebar_id\": 8}, {\"label\": \"Debitur\", \"status\": 2, \"to_path\": \"/admin/debitur\", \"children\": [], \"sidebar_id\": 9}]'),
(2, 'aku', 'aku@gmail.com', '$2y$12$NDRDfZO0At93q3AacfQoue.KlQIivQn.A6L6kPDR5YCeCvVmKVJz2', '08938398493', 'disana', 2, '[{\"label\": \"Data Diri Pemohon\", \"status\": 2, \"to_path\": \"/pemohon\", \"children\": [], \"sidebar_id\": 1}, {\"label\": \"Financial\", \"status\": 2, \"to_path\": \"/analisakredit/financial\", \"children\": [], \"sidebar_id\": 2}, {\"label\": \"Aspek Form\", \"status\": 2, \"to_path\": \"/analisakredit/aspekform\", \"children\": [], \"sidebar_id\": 3}, {\"label\": \"Jaminan\", \"status\": 2, \"to_path\": \"/analisakredit/jaminan\", \"children\": [], \"sidebar_id\": 4}, {\"label\": \"5c\", \"status\": 2, \"to_path\": \"/analisakredit/5c\", \"children\": [], \"sidebar_id\": 5}, {\"label\": \"Survey\", \"status\": 2, \"to_path\": \"/analisakredit/survey\", \"children\": [], \"sidebar_id\": 6}, {\"label\": \"Pengajuan\", \"status\": 2, \"to_path\": \"/pengajuan\", \"children\": [], \"sidebar_id\": 7}, {\"label\": \"Status User\", \"status\": 1, \"to_path\": \"/admin/statususer\", \"children\": [], \"sidebar_id\": 8}, {\"label\": \"Debitur\", \"status\": 1, \"to_path\": \"/admin/debitur\", \"children\": [], \"sidebar_id\": 9}]');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aspek_form`
--
ALTER TABLE `aspek_form`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jenispenggunaan`
--
ALTER TABLE `jenispenggunaan`
  ADD PRIMARY KEY (`KODE`);

--
-- Indexes for table `menu_sidebar`
--
ALTER TABLE `menu_sidebar`
  ADD PRIMARY KEY (`sidebar_id`);

--
-- Indexes for table `pemohon`
--
ALTER TABLE `pemohon`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Cif_Cif_foreign` (`Cif`);

--
-- Indexes for table `pilihan_survey`
--
ALTER TABLE `pilihan_survey`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pilihan_survey_surveyid_foreign` (`survey_id`);

--
-- Indexes for table `produk`
--
ALTER TABLE `produk`
  ADD PRIMARY KEY (`id`),
  ADD KEY `nomor_rekening_nomor_rekening_foreign` (`NomorRekening`),
  ADD KEY `CifForeignKey` (`Cif`) USING BTREE;

--
-- Indexes for table `ref_sektor_ekonomi`
--
ALTER TABLE `ref_sektor_ekonomi`
  ADD PRIMARY KEY (`Kode`);

--
-- Indexes for table `survey`
--
ALTER TABLE `survey`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `trx_aspek_form`
--
ALTER TABLE `trx_aspek_form`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pilihan_aspekform_aspekid_foreign` (`aspek_id`),
  ADD KEY `NomorRekeningForeignKey` (`NomorRekening`);

--
-- Indexes for table `trx_finansials`
--
ALTER TABLE `trx_finansials`
  ADD PRIMARY KEY (`id`),
  ADD KEY `NomorRekeningForeignKeyFinancial` (`NomorRekening`);

--
-- Indexes for table `trx_jaminan`
--
ALTER TABLE `trx_jaminan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `NomorRekeningForeignKeyJaminan` (`NomorRekening`);

--
-- Indexes for table `trx_limacs`
--
ALTER TABLE `trx_limacs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `NomorRekeningForeignKeyLimac` (`NomorRekening`);

--
-- Indexes for table `trx_survey`
--
ALTER TABLE `trx_survey`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `surveyId_surveyId_foreign` (`SurveyId`),
  ADD KEY `NomorRekeningForeignKeySurvey` (`NomorRekening`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `aspek_form`
--
ALTER TABLE `aspek_form`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `menu_sidebar`
--
ALTER TABLE `menu_sidebar`
  MODIFY `sidebar_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `pemohon`
--
ALTER TABLE `pemohon`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `pilihan_survey`
--
ALTER TABLE `pilihan_survey`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT for table `produk`
--
ALTER TABLE `produk`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `survey`
--
ALTER TABLE `survey`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `trx_aspek_form`
--
ALTER TABLE `trx_aspek_form`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `trx_finansials`
--
ALTER TABLE `trx_finansials`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `trx_jaminan`
--
ALTER TABLE `trx_jaminan`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `trx_limacs`
--
ALTER TABLE `trx_limacs`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `trx_survey`
--
ALTER TABLE `trx_survey`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `produk`
--
ALTER TABLE `produk`
  ADD CONSTRAINT `CifForeignKey` FOREIGN KEY (`Cif`) REFERENCES `pemohon` (`Cif`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `trx_aspek_form`
--
ALTER TABLE `trx_aspek_form`
  ADD CONSTRAINT `NomorRekeningForeignKey` FOREIGN KEY (`NomorRekening`) REFERENCES `produk` (`NomorRekening`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `trx_finansials`
--
ALTER TABLE `trx_finansials`
  ADD CONSTRAINT `NomorRekeningForeignKeyFinancial` FOREIGN KEY (`NomorRekening`) REFERENCES `produk` (`NomorRekening`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `trx_jaminan`
--
ALTER TABLE `trx_jaminan`
  ADD CONSTRAINT `NomorRekeningForeignKeyJaminan` FOREIGN KEY (`NomorRekening`) REFERENCES `produk` (`NomorRekening`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `trx_limacs`
--
ALTER TABLE `trx_limacs`
  ADD CONSTRAINT `NomorRekeningForeignKeyLimac` FOREIGN KEY (`NomorRekening`) REFERENCES `produk` (`NomorRekening`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `trx_survey`
--
ALTER TABLE `trx_survey`
  ADD CONSTRAINT `NomorRekeningForeignKeySurvey` FOREIGN KEY (`NomorRekening`) REFERENCES `produk` (`NomorRekening`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
