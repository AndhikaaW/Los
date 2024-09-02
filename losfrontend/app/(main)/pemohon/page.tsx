"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { Button } from 'primereact/button';
import { RadioButton } from 'primereact/radiobutton';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { TabPanel, TabView } from 'primereact/tabview';
import axios, { all } from 'axios';
import { API_ENDPOINTS } from '@/app/api/losbackend/api';
import { Copy, User } from 'lucide-react';
import { Dialog } from 'primereact/dialog';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Paginator } from 'primereact/paginator';

interface Pemohon {
  id: number;
  CabangEntry: string;
  Kode: string;
}
interface Sektor {
  Kode: number;
  Keterangan: string;
}

const pemohon = () => {
  // const [pemohon, setPemohon] = useState<Pemohon[]>([]);
  const [allpemohon, setAllPemohon] = useState([]);
  // const [sektorEkonomi, setSektorEkonomi] = useState<Sektor[]>([]);
  // const [activeIndex, setActiveIndex] = useState(0);
  // const [visible, setVisible] = useState(false);
  // const [visibleadd, setVisibleadd] = useState(false);
  const [Isloading, setIsLoading] = useState(false);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(5);
  const [paginatedData, setPaginatedData] = useState([]);
  // const [formData, setFormData] = useState({
  //   // //form produk
  //   // produk: '', bidang_usaha: '', nomor_aplikasi: '', tanggal_aplikasi: '', tanggal_permohonan: '', plafon_kredit: '', suku_bunga: '', jangka_waktu: '', sifat_kredit: '', jenis_permohonan: '', jenis_angsuran: '', no_aplikasi_sebelumnya: '', tujuan_penggunaan: '', detail_tujuan_penggunaan: '',
  //   //form data pemohon
  //   cif: '', TempatLahir: '', Kelamin: '', StatusPerkawinan: '', KTP: '', profesi_sampingan: '', Nama: '', TglLahir: '', nama_ibu_kandung: '', jumlah_tanggungan: '', ktp_berlaku: '', no_hp: '',
  //   //form alamat pemohon
  //   Alamat: '', kode_pos: '', provinsi: '', kecamatan: '', telepon: '', status_tempat_tinggal: '', kota: '', kelurahan: '', fax: '', lama_tinggal: '',
  //   //form data usaha
  //   nama_usaha: '', tanggal_mulai_usaha: '', status_tempat_usaha: '', surat_keterangan_usaha: '', sektor_ekonomi: '', jumlah_karyawan: '', jarak_lokasi_usaha: '', masa_laku: '', alamat_usaha: '', kode_pos_usaha: '', provinsi_usaha: '', kecamatan_usaha: '', kota_usaha: '', kelurahan_usaha: ''
  // });
  // const resetForm = () => {
  //   setFormData({
  //     // //form produk
  //     // produk: '', bidang_usaha: '', nomor_aplikasi: '', tanggal_aplikasi: '', tanggal_permohonan: '', plafon_kredit: '', suku_bunga: '', jangka_waktu: '', sifat_kredit: '', jenis_permohonan: '', jenis_angsuran: '', no_aplikasi_sebelumnya: '', tujuan_penggunaan: '', detail_tujuan_penggunaan: '',
  //     //form data pemohon
  //     cif: '', TempatLahir: '', Kelamin: '', StatusPerkawinan: '', KTP: '', profesi_sampingan: '', Nama: '', TglLahir: '', nama_ibu_kandung: '', jumlah_tanggungan: '', ktp_berlaku: '', no_hp: '',
  //     //form alamat pemohon
  //     Alamat: '', kode_pos: '', provinsi: '', kecamatan: '', telepon: '', status_tempat_tinggal: '', kota: '', kelurahan: '', fax: '', lama_tinggal: '',
  //     //form data usaha
  //     nama_usaha: '', tanggal_mulai_usaha: '', status_tempat_usaha: '', surat_keterangan_usaha: '', sektor_ekonomi: '', jumlah_karyawan: '', jarak_lokasi_usaha: '', masa_laku: '', alamat_usaha: '', kode_pos_usaha: '', provinsi_usaha: '', kecamatan_usaha: '', kota_usaha: '', kelurahan_usaha: ''
  //   });
  // };

  // useEffect(() => {
  //   const fetchNasabah = async () => {
  //     try {
  //       const response = await axios.get(API_ENDPOINTS.GETNASABAH);
  //       setPemohon(response.data);
  //     } catch (error) {
  //       console.error('There was an error fetching the users!', error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchNasabah();
  // }, []);

  //get semua data pemohon
  useEffect(() => {
    const fetchPemohonAll = async () => {
      try {
        const response = await axios.get(API_ENDPOINTS.GETALLPEMOHON);
        setAllPemohon(response.data)
        setPaginatedData(response.data.slice(first, first + rows));
      } catch (error) {
        console.error('There was an error fetching the users!', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPemohonAll();
  }, [first, rows]);

  // //sektor ekonomi
  // useEffect(() => {
  //   const fetchsektor = async () => {
  //     try {
  //       const response = await axios.get(API_ENDPOINTS.GETSEKTOREKONOMI);
  //       setSektorEkonomi(response.data)
  //     } catch (error) {
  //       console.error('There was an error fetching the users!', error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchsektor();
  // }, []);

  // const handleChange = async (e: any) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  //   if (name === 'cif' && value) {
  //     try {
  //       const response = await axios.get(`http://192.168.1.35:8000/api/pemohon/${value}`);
  //       const nasabahData = response.data;
  //       setFormData((prevData) => ({
  //         ...prevData,
  //         ...nasabahData,
  //       }));
  //     } catch (error) {
  //       console.error('Error fetching nasabah data:', error);
  //     }
  //   }
  // };
  // // console.log(formData)


  // const copyAddress = () => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     alamat_usaha: prevData.Alamat, kode_pos_usaha: prevData.kode_pos, provinsi_usaha: prevData.provinsi, kecamatan_usaha: prevData.kecamatan, kota_usaha: prevData.kota, kelurahan_usaha: prevData.kelurahan,
  //   }));
  // };

  // const handleNextTab = () => {
  //   if (activeIndex < 3) { // Asumsi Anda memiliki 4 tab panel
  //     setActiveIndex(activeIndex + 1);
  //   }
  //   console.log(formData)
  // };
  // const handlePreviousTab = () => {
  //   if (activeIndex > 0) {
  //     setActiveIndex(activeIndex - 1);
  //   }
  // };

  // // const handleChange = (e: any) => {
  // //   const { name, value } = e.target;
  // //   setFormData((prevData) => ({
  // //     ...prevData,
  // //     [name]: value,
  // //   }));
  // // };

  // const validateForm = () => {
  //   for (const [key, value] of Object.entries(formData)) {
  //     if (!value) {
  //       window.alert(`${key.charAt(0) + key.slice(1)} tidak boleh kosong!`);
  //       return false;
  //     }
  //   }
  //   return true;
  // };

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   // if (!validateForm()) {
  //   //   return;
  //   // }
  //   console.log(formData)
  //   setIsLoading(true);
  //   try {
  //     const response = await axios.post(API_ENDPOINTS.PEMOHON, formData);
  //     console.log('Response from API:', response.data);
  //     setIsLoading(false);
  //     setVisible(true);
  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  //     setIsLoading(false);
  //   }
  // };

  // const pemohonOptions = pemohon.map((item, index) => ({
  //   label: item.Kode,
  //   value: item.Kode
  // }));
  // const sektorEkonomiOptions = sektorEkonomi.map((item) => ({
  //   label: item.Keterangan,
  //   value: item.Keterangan
  // }));

  // // const CifDropdown = ({ options }: any) => (
  // //   <Dropdown
  // //     name='cif'
  // //     value={formData.cif}
  // //     onChange={handleChange}
  // //     options={pemohonOptions}
  // //     placeholder="Pilih CIF nasabah/debitur"
  // //     className="w-full md:w-full"
  // //   />
  // // );
  // const headerElement = (
  //   <div className="inline-flex align-items-center justify-content-center gap-2">
  //     <span className="font-bold white-space-nowrap">Data Pemohon</span>
  //   </div>
  // );
  // const footerContent = (
  //   <div>
  //     <Button label="Ok" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
  //   </div>
  // );
  const onPageChange = (event: any) => {
    setFirst(event.first);
    setRows(event.rows);
    setPaginatedData(allpemohon.slice(event.first, event.first + event.rows));
  };
  return (
    <div>
      <div className="card">
        <div className='flex align-items-center justify-content-start mb-2'>
          {/* <Button label='Add' icon="pi pi-plus" onClick={() => setVisibleadd(true)} style={{ border: '1', color: '#333' }} className='bg-blue-200' /> */}
          <Link href={'/pemohon/formpemohon'} passHref>
            <Button label='Add' icon="pi pi-plus" style={{ border: '1', color: '#333' }} className='bg-blue-200' />
          </Link>
          {/* <Dialog visible={visibleadd} modal header={headerElement} style={{ width: '50rem' }} onHide={() => { if (!visibleadd) return; setVisibleadd(false); }}>
            
          </Dialog> */}
        </div>
        <DataTable value={paginatedData} tableStyle={{ minWidth: '50rem' }}>
          <Column field="id" header="ID" />
          <Column field="cif" header="CIF" />
          <Column field="Nama" header="Nama Lengkap" />
          <Column field="Kelamin" header="Jenis Kelamin" />
          <Column field="StatusPerkawinan" header="Status Perkawinan" />
          <Column field="KTP" header="No KTP" />
          <Column field="no_hp" header="No HP" />
          <Column field="Alamat" header="Alamat" />
          <Column field="nama_usaha" header="Nama Usaha" />
        </DataTable>
        <Paginator
          first={first}
          rows={rows}
          totalRecords={allpemohon.length}
          rowsPerPageOptions={[5, 10, 20]}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  )
}

export default pemohon

{/* <TabPanel header="Produk">
            <fieldset className='grid md:justify-content-between border-round p-4 mb-4'> 
              <legend className="text-xl font-bold">Produk</legend>
              <div className="col-12 md:col-6">
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Produk</label>
                  <InputText  name='produk' type="text" placeholder='Kredit UMKM Industri' className="p-inputtext p-component w-full" value={formData.produk} onChange={handleChange} />
                </div>
              </div>
              <div className="col-12 md:col-6">
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Bidang Usaha</label>
                  <InputText required name='bidang_usaha' type="text" placeholder='Pilih bidang usaha' className="p-inputtext p-component w-full" value={formData.bidang_usaha} onChange={handleChange} />
                </div>
              </div>
              <div className="col-12 md:col-4">
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Nomor Aplikasi</label>
                  <InputText required name='nomor_aplikasi' type="text" placeholder='nomor akan terisi otomatis' className="p-inputtext p-component w-full" value={formData.nomor_aplikasi} onChange={handleChange} />
                </div>
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Plafon Kredit</label>
                  <InputText required name='plafon_kredit' type="text" placeholder='Isikan dengan angka' className="p-inputtext p-component w-full" value={formData.plafon_kredit} onChange={handleChange} />
                </div>
              </div>
              <div className="col-12 md:col-4">
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Tanggal Aplikasi</label>
                  <InputText required name='tanggal_aplikasi' type="date" placeholder='' className="p-inputtext p-component w-full" value={formData.tanggal_aplikasi} onChange={handleChange} />
                </div>
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Suku Bunga</label>
                  <div className='flex gap-2 align-items-center'>
                    <InputText required name='suku_bunga' type="text" placeholder='Isikan dengan angka' className="p-inputtext p-component w-full" value={formData.suku_bunga} onChange={handleChange} />
                    <label htmlFor="" className='text-900 font-medium'>%p.a</label>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-4">
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Tanggal Permohonan</label>
                  <InputText required name='tanggal_permohonan' type="date" placeholder='' className="p-inputtext p-component w-full" value={formData.tanggal_permohonan} onChange={handleChange} />
                </div>
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Jangka Waktu</label>
                  <div className='flex gap-2 align-items-center'>
                    <InputText required name='jangka_waktu' type="text" placeholder='Isikan dengan angka' className="p-inputtext p-component w-full" value={formData.jangka_waktu} onChange={handleChange} />
                    <label htmlFor="" className='text-900 font-medium'>Bulan</label>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-6">
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Sifat Kredit</label>
                  <InputText required name='sifat_kredit' type="text" placeholder='Pilih sifat kredit' className="p-inputtext p-component w-full" value={formData.sifat_kredit} onChange={handleChange} />
                </div>
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Jenis Permohonan</label>
                  <InputText required name='jenis_permohonan' type="text" placeholder='Pilih jenis permohonan' className="p-inputtext p-component w-full" value={formData.jenis_permohonan} onChange={handleChange} />
                </div>
              </div>
              <div className="col-12 md:col-6">
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Jenis Angsuran</label>
                  <InputText required name='jenis_angsuran' type="text" placeholder='Pilih jenis angsuran' className="p-inputtext p-component w-full" value={formData.jenis_angsuran} onChange={handleChange} />
                </div>
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">No Aplikasi Sebelumnya</label>
                  <InputText required name='no_aplikasi_sebelumnya' type="text" placeholder='Kosongkan tidak perlu diisi' className="p-inputtext p-component w-full" value={formData.no_aplikasi_sebelumnya} onChange={handleChange} />
                </div>
              </div>
              <div className="col-12">
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Tujuan Penggunaan</label>
                  <InputText required name='tujuan_penggunaan' type="text" placeholder='Pilih tujuan penggunaan' className="p-inputtext p-component w-full" value={formData.tujuan_penggunaan} onChange={handleChange} />
                </div>
                <div className="mb-2">
                  <label className="block text-900 font-medium mb-2">Detail Tujuan Penggunaan</label>
                  <InputTextarea name='detail_tujuan_penggunaan' placeholder='Deskripsikan secara singkat detail/tujuan penggunaan dari permohonan debitur' className="p-inputtext p-component w-full" value={formData.detail_tujuan_penggunaan} onChange={handleChange} />
                </div>
              </div>
            </fieldset>
            <div className='flex gap-4 justify-content-end'> 
              <Button onClick={resetForm} className=''>Reset</Button>
              
              <Button type="submit" className='text-white bg-[#61AB5B] w-auto' disabled={Isloading}>
                {Isloading ? (
                  <div className="flex align-items-center">
                    <i className="pi pi-spin pi-spinner" style={{ fontSize: "1rem" }}></i>
                    <label>Loading...</label>
                  </div>
                ) : (
                  'Kirim'
                )}</Button>
              <Dialog header="Success" visible={visible} style={{ width: '50vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
                <p className="m-0">
                  Terima Kasih telah mengisi form
                </p>
              </Dialog>
            </div>
          </TabPanel> */}