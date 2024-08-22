"use client"
import React, { useState } from 'react'
import { Button } from 'primereact/button';
import { RadioButton } from 'primereact/radiobutton';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { TabMenu } from 'primereact/tabmenu';
import { TabPanel, TabView } from 'primereact/tabview';
import axios from 'axios';
import { API_ENDPOINTS } from '@/app/api/losbackend/api';
import { Copy } from 'lucide-react';
import { Dialog } from 'primereact/dialog';

const pemohon = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    //form produk
    produk: '', bidang_usaha: '', nomor_aplikasi: '', tanggal_aplikasi: '', tanggal_permohonan: '', plafon_kredit: '', suku_bunga: '', jangka_waktu: '', sifat_kredit: '', jenis_permohonan: '', jenis_angsuran: '', no_aplikasi_sebelumnya: '', tujuan_penggunaan: '', detail_tujuan_penggunaan: '',
    //form data pemohon
    cif: '', tempat_lahir: '', jenis_kelamin: '', status_perkawinan: '', no_ktp: '', profesi_sampingan: '', nama_lengkap: '', tanggal_lahir: '', nama_ibu_kandung: '', jumlah_tanggungan: '', ktp_berlaku: '', no_hp: '',
    //form alamat pemohon
    alamat: '', kode_pos: '', provinsi: '', kecamatan: '', telepon: '', status_tempat_tinggal: '', kota: '', kelurahan: '', fax: '', lama_tinggal: '',
    //form data usaha
    nama_usaha: '', tanggal_mulai_usaha: '', status_tempat_usaha: '', surat_keterangan_usaha: '', sektor_ekonomi: '', jumlah_karyawan: '', jarak_lokasi_usaha: '', masa_laku: '', alamat_usaha: '', kode_pos_usaha: '', provinsi_usaha: '', kecamatan_usaha: '', kota_usaha: '', kelurahan_usaha: ''
  });
  const resetForm = () => {
    setFormData({
      //form produk
      produk: '', bidang_usaha: '', nomor_aplikasi: '', tanggal_aplikasi: '', tanggal_permohonan: '', plafon_kredit: '', suku_bunga: '', jangka_waktu: '', sifat_kredit: '', jenis_permohonan: '', jenis_angsuran: '', no_aplikasi_sebelumnya: '', tujuan_penggunaan: '', detail_tujuan_penggunaan: '',
      //form data pemohon
      cif: '', tempat_lahir: '', jenis_kelamin: '', status_perkawinan: '', no_ktp: '', profesi_sampingan: '', nama_lengkap: '', tanggal_lahir: '', nama_ibu_kandung: '', jumlah_tanggungan: '', ktp_berlaku: '', no_hp: '',
      //form alamat pemohon
      alamat: '', kode_pos: '', provinsi: '', kecamatan: '', telepon: '', status_tempat_tinggal: '', kota: '', kelurahan: '', fax: '', lama_tinggal: '',
      //form data usaha
      nama_usaha: '', tanggal_mulai_usaha: '', status_tempat_usaha: '', surat_keterangan_usaha: '', sektor_ekonomi: '', jumlah_karyawan: '', jarak_lokasi_usaha: '', masa_laku: '', alamat_usaha: '', kode_pos_usaha: '', provinsi_usaha: '', kecamatan_usaha: '', kota_usaha: '', kelurahan_usaha: ''
    });
  };

  const copyAddress = () => {
    setFormData((prevData) => ({
      ...prevData,
      alamat_usaha: prevData.alamat, kode_pos_usaha: prevData.kode_pos, provinsi_usaha: prevData.provinsi, kecamatan_usaha: prevData.kecamatan, kota_usaha: prevData.kota, kelurahan_usaha: prevData.kelurahan,
    }));
  };

  const handleNextTab = () => {
    if (activeIndex < 3) { // Asumsi Anda memiliki 4 tab panel
      setActiveIndex(activeIndex + 1);
    }
    console.log(formData)
  };
  const handlePreviousTab = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    for (const [key, value] of Object.entries(formData)) {
      if (!value) {
        window.alert(`${key.charAt(0).toUpperCase() + key.slice(1)} tidak boleh kosong!`);
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_ENDPOINTS.PEMOHON, formData);
      console.log('Response from API:', response.data);
      // Reset form atau tampilkan pesan sukses di sini
    } catch (error) {
      console.error('Error submitting form:', error);
      // Tampilkan pesan error ke pengguna di sini
    }
  };

  return (
    <div className="surface-card p-4 shadow-2 border-round">
      <form onSubmit={handleSubmit}>
        <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
          <TabPanel header="Data Pemohon">
            <fieldset className='grid md:justify-content-between border-round p-4 mb-4'>{/*data pemohon*/}
              <legend className="text-xl font-bold">Data Pemohon</legend>
              <div className="col-12 md:col-6">
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">CIF Debitur</label>
                  <input name='cif' type="text" placeholder='Isikan CIF nasabah/debitur' className="p-inputtext p-component w-full" value={formData.cif} onChange={handleChange} />
                </div>
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Tempat Lahir</label>
                  <input name='tempat_lahir' type="text" placeholder='Isikan kota/Kabupaten tempat lahir debitur' className="p-inputtext p-component w-full" value={formData.tempat_lahir} onChange={handleChange} />
                </div>
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-3">Jenis Kelamin</label>
                  <div className='flex gap-3'>
                    <div className='mb-2'>
                      <RadioButton name="jenis_kelamin" value="laki-laki" onChange={handleChange} checked={formData.jenis_kelamin === 'laki-laki'} />
                      <label htmlFor="" className="ml-2">laki-laki</label>
                    </div>
                    <div className='mb-2'>
                      <RadioButton name="jenis_kelamin" value="perempuan" onChange={handleChange} checked={formData.jenis_kelamin === 'perempuan'} />
                      <label htmlFor="" className="ml-2">perempuan</label>
                    </div>
                  </div>
                </div>
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Status Perkawinan</label>
                  <Dropdown
                    name='status_perkawinan'
                    value={formData.status_perkawinan}
                    onChange={handleChange}
                    options={['Belum Kawin', 'Kawin']}
                    placeholder="Status Perkawinan"
                    className="w-full md:w-full"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">No. KTP</label>
                  <input name='no_ktp' type="text" placeholder='Isikan Nomor KTP/NIK anda' className="p-inputtext p-component w-full" value={formData.no_ktp} onChange={handleChange} />
                </div>
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Profesi Sampingan</label>
                  <input name='profesi_sampingan' type="text" placeholder='Pilih profesi sampingan' className="p-inputtext p-component w-full" value={formData.profesi_sampingan} onChange={handleChange} />
                </div>
              </div>
              <div className="col-12 md:col-6">
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Nama Lengkap</label>
                  <input name='nama_lengkap' type="text" placeholder='Isikan nama lengkap debitur' className="p-inputtext p-component w-full" value={formData.nama_lengkap} onChange={handleChange} />
                </div>
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Tanggal Lahir</label>
                  <input name='tanggal_lahir' type="date" placeholder='Format Tanggal DD-MM-YY, contoh 17-08-1980' className="p-inputtext p-component w-full" value={formData.tanggal_lahir} onChange={handleChange} />
                </div>
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Nama Gadis Ibu Kandung</label>
                  <input name='nama_ibu_kandung' type="text" placeholder='Isikan nama gadis ibu kandung debitur' className="p-inputtext p-component w-full" value={formData.nama_ibu_kandung} onChange={handleChange} />
                </div>
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Jumlah Tanggungan</label>
                  <div className='flex gap-2 align-items-center'>
                    <input name='jumlah_tanggungan' type="number" placeholder='Isikan dengan angka untuk jumlah tanggungan' className="p-inputtext p-component w-full" value={formData.jumlah_tanggungan} onChange={handleChange} />
                    <label htmlFor="" className='text-900 font-medium'>Orang</label>
                  </div>
                </div>
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">KTP Berlaku</label>
                  <input name='ktp_berlaku' type="date" placeholder='Isikan mas akhir KTP, contoh 12-01-1980' className="p-inputtext p-component w-full" value={formData.ktp_berlaku} onChange={handleChange} />
                </div>
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">No. Telp / HP</label>
                  <input name='no_hp' type="number" placeholder='Isikan nomor telepon yang bisa dihubungi, tanpa kode negara, misal 0812345678' className="p-inputtext p-component w-full" value={formData.no_hp} onChange={handleChange} />
                </div>
              </div>
            </fieldset>
            <div className='flex justify-content-end'>
              <Button onClick={handleNextTab}>Next</Button>
            </div>
          </TabPanel>
          <TabPanel header="Alamat Pemohon">
            <fieldset className='grid md:justify-content-between border-round p-4 mb-4'> {/*Alamat pemohon*/}
              <legend className="text-xl font-bold">Alamat Pemohon</legend>
              <div className="col-12 grid md:justify-content-between ">
                <div className=" col-12 md:col-10">
                  <label className="block text-900 font-medium mb-2">Alamat</label>
                  <input name='alamat' type="text" placeholder='Isikan alamat rumah/lokasi tempat usaha/kantor debitur' className="p-inputtext p-component w-full" value={formData.alamat} onChange={handleChange} />
                </div>
                <div className=" col-12 md:col-2">
                  <label className="block text-900 font-medium mb-2">Kode Pos</label>
                  <input name='kode_pos' type="number" placeholder='contoh 61254' className="p-inputtext p-component w-full" value={formData.kode_pos} onChange={handleChange} />
                </div>
              </div>
              <div className="col-12 md:col-6">
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Provinsi</label>
                  <input name='provinsi' type="text" placeholder='Pilih Provinsi dari alamat tinggal/tempat usaha debitur' className="p-inputtext p-component w-full" value={formData.provinsi} onChange={handleChange} />
                </div>
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Kecamatan</label>
                  <input name='kecamatan' type="text" placeholder='Pilih Kecamatan dari alamat tinggal/tempat usaha debitur' className="p-inputtext p-component w-full" value={formData.kecamatan} onChange={handleChange} />
                </div>
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Telepon</label>
                  <input name='telepon' type="number" placeholder='Isikan no telepon' className="p-inputtext p-component w-full" value={formData.telepon} onChange={handleChange} />
                </div>
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Status Tempat Tinggal</label>
                  <input name='status_tempat_tinggal' type="text" placeholder='Pilih status tempat tinggal' className="p-inputtext p-component w-full" value={formData.status_tempat_tinggal} onChange={handleChange} />
                </div>
              </div>
              <div className="col-12 md:col-6 mb-4">
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Kota/Kabupaten</label>
                  <input name='kota' type="text" placeholder='Pilih Kota/Kabupaten dari alamat tinggal/tempat usaha debitur' className="p-inputtext p-component w-full" value={formData.kota} onChange={handleChange} />
                </div>
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Kelurahan</label>
                  <input name='kelurahan' type="text" placeholder='Pilih Kelurahan/Desa dari alamat tinggal/tempat usaha debitur' className="p-inputtext p-component w-full" value={formData.kelurahan} onChange={handleChange} />
                </div>
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Fax</label>
                  <input name='fax' type="text" placeholder='Isikan no fax jika ada' className="p-inputtext p-component w-full" value={formData.fax} onChange={handleChange} />
                </div>
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Lama Tinggal</label>
                  <div className='flex gap-2 align-items-center'>
                    <input name='lama_tinggal' type="number" placeholder='Isikan dengan angka, lama tinggal' className="p-inputtext p-component w-full" value={formData.lama_tinggal} onChange={handleChange} />
                    <label htmlFor="" className='text-900 font-medium'>Tahun</label>
                  </div>
                </div>
              </div>
            </fieldset>
            <div className='flex justify-content-between'>
              <Button onClick={handlePreviousTab} disabled={activeIndex === 0} className=''>Previous</Button>
              <Button onClick={handleNextTab}>Next</Button>
            </div>
          </TabPanel>
          <TabPanel header="Data Usaha">
            <fieldset className='grid md:justify-content-between border-round p-4 mb-4'> {/*Data Usaha*/}
              <legend className="text-xl font-bold">Data Usaha</legend>
              <div className="col-12 md:col-6">
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Nama Usaha</label>
                  <input name='nama_usaha' type="text" placeholder='Misal: UD Barokah, Toko Jaya, CV Mapan' className="p-inputtext p-component w-full" value={formData.nama_usaha} onChange={handleChange} />
                </div>
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Tanggal Mulai Usaha</label>
                  <input name='tanggal_mulai_usaha' type="date" placeholder='Isikan Tanggal Mulai Usaha' className="p-inputtext p-component w-full" value={formData.tanggal_mulai_usaha} onChange={handleChange} />
                </div>
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Status Tempat Usaha</label>
                  <input name='status_tempat_usaha' type="text" placeholder='Pilih Status Tempat Usaha' className="p-inputtext p-component w-full" value={formData.status_tempat_usaha} onChange={handleChange} />
                </div>
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Surat Keterangan Usaha/SIUP No</label>
                  <input name='surat_keterangan_usaha' type="text" placeholder='Isikan no SIUP jika ada, jika tidak isi dengan : -' className="p-inputtext p-component w-full" value={formData.surat_keterangan_usaha} onChange={handleChange} />
                </div>
              </div>
              <div className="col-12 md:col-6 mb-4">
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Sektor Ekonomi OJK</label>
                  <input name='sektor_ekonomi' type="text" placeholder='Pilih sektor ekonomi' className="p-inputtext p-component w-full" value={formData.sektor_ekonomi} onChange={handleChange} />
                </div>
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Jumlah Karyawan</label>
                  <div className='flex gap-2 align-items-center'>
                    <input name='jumlah_karyawan' type="number" placeholder='Isikan jumlah karyawan(orang) dalam angka' className="p-inputtext p-component w-full" value={formData.jumlah_karyawan} onChange={handleChange} />
                    <label htmlFor="" className='text-900 font-medium'>Orang</label>
                  </div>
                </div>
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Jarak Lokasi Usaha</label>
                  <div className='flex gap-2 align-items-center'>
                    <input name='jarak_lokasi_usaha' type="number" placeholder='Jarak rumah/tempat usaha/kantor debitur ke kantor BPR' className="p-inputtext p-component w-full" value={formData.jarak_lokasi_usaha} onChange={handleChange} />
                    <label htmlFor="" className='text-900 font-medium'>km</label>
                  </div>
                </div>
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Masalaku/Tanggal</label>
                  <input name='masa_laku' type="date" placeholder='Isikan masa akhir, contohnya 12-91-2020' className="p-inputtext p-component w-full" value={formData.masa_laku} onChange={handleChange} />
                </div>
              </div>
              <div className='flex gap-3 align-items-center mb-2' >
                <div className='flex gap-2 align-items-center bg-gray-300 p-2 border-round cursor-pointer' onClick={copyAddress}>
                  <Copy />
                  Tempel
                </div>
                <label htmlFor="">Klik tombol disamping untuk menempel data dari alamat pemohon ke alamat usaha, jika kedua alamat sama </label>
              </div>
              <div className="col-12 grid md:justify-content-between ">
                <div className=" col-12 md:col-10">
                  <label className="block text-900 font-medium mb-2">Alamat</label>
                  <input name='alamat_usaha' type="text" placeholder='Isikan alamat rumah/lokasi tempat usaha/kantor debitur' className="p-inputtext p-component w-full" value={formData.alamat_usaha} onChange={handleChange} />
                </div>
                <div className=" col-12 md:col-2">
                  <label className="block text-900 font-medium mb-2">Kode Pos</label>
                  <input name='kode_pos_usaha' type="number" placeholder='contoh 61254' className="p-inputtext p-component w-full" value={formData.kode_pos_usaha} onChange={handleChange} />
                </div>
              </div>
              <div className="col-12 md:col-6">
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Provinsi</label>
                  <input name='provinsi_usaha' type="text" placeholder='Pilih Provinsi dari alamat tinggal/tempat usaha debitur' className="p-inputtext p-component w-full" value={formData.provinsi_usaha} onChange={handleChange} />
                </div>
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Kecamatan</label>
                  <input name='kecamatan_usaha' type="text" placeholder='Pilih Kecamatan dari alamat tinggal/tempat usaha debitur' className="p-inputtext p-component w-full" value={formData.kecamatan_usaha} onChange={handleChange} />
                </div>
              </div>
              <div className="col-12 md:col-6 mb-4">
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Kota/Kabupaten</label>
                  <input name='kota_usaha' type="text" placeholder='Pilih Kota/Kabupaten dari alamat tinggal/tempat usaha debitur' className="p-inputtext p-component w-full" value={formData.kota_usaha} onChange={handleChange} />
                </div>
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Kelurahan</label>
                  <input name='kelurahan_usaha' type="text" placeholder='Pilih Kelurahan/Desa dari alamat tinggal/tempat usaha debitur' className="p-inputtext p-component w-full" value={formData.kelurahan_usaha} onChange={handleChange} />
                </div>
              </div>
            </fieldset>
            <div className='flex justify-content-between'>
              <Button onClick={handlePreviousTab} disabled={activeIndex === 0} className=''>Previous</Button>
              <Button onClick={handleNextTab}>Next</Button>
            </div>
          </TabPanel>
          <TabPanel header="Produk">
            <fieldset className='grid md:justify-content-between border-round p-4 mb-4'> {/*Produk*/}
              <legend className="text-xl font-bold">Produk</legend>
              <div className="col-12 md:col-6">
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Produk</label>
                  <input name='produk' type="text" placeholder='Kredit UMKM Industri' className="p-inputtext p-component w-full" value={formData.produk} onChange={handleChange} />
                </div>
              </div>
              <div className="col-12 md:col-6">
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Bidang Usaha</label>
                  <input name='bidang_usaha' type="text" placeholder='Pilih bidang usaha' className="p-inputtext p-component w-full" value={formData.bidang_usaha} onChange={handleChange} />
                </div>
              </div>
              <div className="col-12 md:col-4">
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Nomor Aplikasi</label>
                  <input name='nomor_aplikasi' type="text" placeholder='nomor akan terisi otomatis' className="p-inputtext p-component w-full" value={formData.nomor_aplikasi} onChange={handleChange} />
                </div>
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Plafon Kredit</label>
                  <input name='plafon_kredit' type="text" placeholder='Isikan dengan angka' className="p-inputtext p-component w-full" value={formData.plafon_kredit} onChange={handleChange} />
                </div>
              </div>
              <div className="col-12 md:col-4">
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Tanggal Aplikasi</label>
                  <input name='tanggal_aplikasi' type="date" placeholder='' className="p-inputtext p-component w-full" value={formData.tanggal_aplikasi} onChange={handleChange} />
                </div>
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Suku Bunga</label>
                  <div className='flex gap-2 align-items-center'>
                    <input name='suku_bunga' type="text" placeholder='Isikan dengan angka' className="p-inputtext p-component w-full" value={formData.suku_bunga} onChange={handleChange} />
                    <label htmlFor="" className='text-900 font-medium'>%p.a</label>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-4">
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Tanggal Permohonan</label>
                  <input name='tanggal_permohonan' type="date" placeholder='' className="p-inputtext p-component w-full" value={formData.tanggal_permohonan} onChange={handleChange} />
                </div>
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Jangka Waktu</label>
                  <div className='flex gap-2 align-items-center'>
                    <input name='jangka_waktu' type="text" placeholder='Isikan dengan angka' className="p-inputtext p-component w-full" value={formData.jangka_waktu} onChange={handleChange} />
                    <label htmlFor="" className='text-900 font-medium'>Bulan</label>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-6">
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Sifat Kredit</label>
                  <input name='sifat_kredit' type="text" placeholder='Pilih sifat kredit' className="p-inputtext p-component w-full" value={formData.sifat_kredit} onChange={handleChange} />
                </div>
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Jenis Permohonan</label>
                  <input name='jenis_permohonan' type="text" placeholder='Pilih jenis permohonan' className="p-inputtext p-component w-full" value={formData.jenis_permohonan} onChange={handleChange} />
                </div>
              </div>
              <div className="col-12 md:col-6">
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Jenis Angsuran</label>
                  <input name='jenis_angsuran' type="text" placeholder='Pilih jenis angsuran' className="p-inputtext p-component w-full" value={formData.jenis_angsuran} onChange={handleChange} />
                </div>
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">No Aplikasi Sebelumnya</label>
                  <input name='no_aplikasi_sebelumnya' type="text" placeholder='Kosongkan tidak perlu diisi' className="p-inputtext p-component w-full" value={formData.no_aplikasi_sebelumnya} onChange={handleChange} />
                </div>
              </div>
              <div className="col-12">
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Tujuan Penggunaan</label>
                  <input name='tujuan_penggunaan' type="text" placeholder='Pilih tujuan penggunaan' className="p-inputtext p-component w-full" value={formData.tujuan_penggunaan} onChange={handleChange} />
                </div>
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Detail Tujuan Penggunaan</label>
                  <InputTextarea name='detail_tujuan_penggunaan' placeholder='Deskripsikan secara singkat detail/tujuan penggunaan dari permohonan debitur' className="p-inputtext p-component w-full" value={formData.detail_tujuan_penggunaan} onChange={handleChange} />
                </div>
              </div>
            </fieldset>
            <div className='flex gap-4 justify-content-end'> {/*Button*/}
              <Button onClick={resetForm} className=''>Reset</Button>
              {/* <Button type='submit'>Submit</Button> */}
              <Button label="Submit" type='submit' onClick={() => setVisible(true)} />
              <Dialog header="Success" visible={visible} style={{ width: '50vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
                <p className="m-0">
                  Terima Kasih telah mengisi form
                </p>
              </Dialog>
            </div>
          </TabPanel>
        </TabView>
      </form>
    </div>
  )
}

export default pemohon