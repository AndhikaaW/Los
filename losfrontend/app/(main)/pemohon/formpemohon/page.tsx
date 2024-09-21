"use client"
import React, { useEffect, useState } from 'react'
import { Button } from 'primereact/button';
import { RadioButton } from 'primereact/radiobutton';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { TabPanel, TabView } from 'primereact/tabview';
import { Dialog } from 'primereact/dialog';
import { Copy } from 'lucide-react';
import { API_ENDPOINTS } from '@/app/api/losbackend/api';
import axios from 'axios';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Paginator } from 'primereact/paginator';

interface Sektor {
    Kode: number;
    Keterangan: string;
}
const FormPemohon = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [pemohon, setPemohon] = useState<any>([]);
    const [sektorEkonomi, setSektorEkonomi] = useState<Sektor[]>([]);
    const [visible, setVisible] = useState(false);
    const [Isloading, setIsLoading] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [filteredPemohon, setFilteredPemohon] = useState(pemohon);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(5);
    const [formData, setFormData] = useState({
        // //form produk
        // produk: '', bidang_usaha: '', nomor_aplikasi: '', tanggal_aplikasi: '', tanggal_permohonan: '', plafon_kredit: '', suku_bunga: '', jangka_waktu: '', sifat_kredit: '', jenis_permohonan: '', jenis_angsuran: '', no_aplikasi_sebelumnya: '', tujuan_penggunaan: '', detail_tujuan_penggunaan: '',
        //form data pemohon
        Cif: '', TempatLahir: '', Kelamin: '', StatusPerkawinan: '', KTP: '', profesi_sampingan: '', Nama: '', TglLahir: '', nama_ibu_kandung: '', jumlah_tanggungan: '', ktp_berlaku: '', no_hp: '',
        //form alamat pemohon
        Alamat: '', kode_pos: '', provinsi: '', kecamatan: '', telepon: '', status_tempat_tinggal: '', kota: '', kelurahan: '', fax: '', lama_tinggal: '',
        //form data usaha
        nama_usaha: '', tanggal_mulai_usaha: '', status_tempat_usaha: '', surat_keterangan_usaha: '', sektor_ekonomi: '', jumlah_karyawan: '', jarak_lokasi_usaha: '', masa_laku: '', alamat_usaha: '', kode_pos_usaha: '', provinsi_usaha: '', kecamatan_usaha: '', kota_usaha: '', kelurahan_usaha: ''
    });
    const resetForm = () => {
        setFormData({
            // //form produk
            // produk: '', bidang_usaha: '', nomor_aplikasi: '', tanggal_aplikasi: '', tanggal_permohonan: '', plafon_kredit: '', suku_bunga: '', jangka_waktu: '', sifat_kredit: '', jenis_permohonan: '', jenis_angsuran: '', no_aplikasi_sebelumnya: '', tujuan_penggunaan: '', detail_tujuan_penggunaan: '',
            //form data pemohon
            Cif: '', TempatLahir: '', Kelamin: '', StatusPerkawinan: '', KTP: '', profesi_sampingan: '', Nama: '', TglLahir: '', nama_ibu_kandung: '', jumlah_tanggungan: '', ktp_berlaku: '', no_hp: '',
            //form alamat pemohon
            Alamat: '', kode_pos: '', provinsi: '', kecamatan: '', telepon: '', status_tempat_tinggal: '', kota: '', kelurahan: '', fax: '', lama_tinggal: '',
            //form data usaha
            nama_usaha: '', tanggal_mulai_usaha: '', status_tempat_usaha: '', surat_keterangan_usaha: '', sektor_ekonomi: '', jumlah_karyawan: '', jarak_lokasi_usaha: '', masa_laku: '', alamat_usaha: '', kode_pos_usaha: '', provinsi_usaha: '', kecamatan_usaha: '', kota_usaha: '', kelurahan_usaha: ''
        });
    };

    useEffect(() => {
        const fetchNasabah = async () => {
            try {
                const response = await axios.get(API_ENDPOINTS.GETNASABAH);
                const filteredData = response.data.map((item: any) => ({
                    ID: item.ID,
                    Cif: item.Kode,
                    Nama: item.Nama,
                    TempatLahir: item.TempatLahir,
                    Kelamin: item.Kelamin,
                    StatusPerkawinan: item.StatusPerkawinan,
                    KTP: item.KTP,
                    Alamat: item.Alamat
                }))
                setPemohon(filteredData);
            } catch (error) {
                console.error('There was an error fetching the users!', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchNasabah();
    }, []);
    useEffect(() => {
        const fetchsektor = async () => {
            try {
                const response = await axios.get(API_ENDPOINTS.GETSEKTOREKONOMI);
                setSektorEkonomi(response.data)
            } catch (error) {
                console.error('There was an error fetching the users!', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchsektor();
    }, []);

    const handleChange = async (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        if (name === 'Cif' && value) {
            try {
                const response = await axios.get(API_ENDPOINTS.GETNASABAHID(value));
                const nasabahData = response.data;
                setFormData((prevData) => ({
                    ...prevData,
                    ...nasabahData,
                }));
            } catch (error) {
                console.error('Error fetching nasabah data:', error);
            }
        }
    };


    const copyAddress = () => {
        setFormData((prevData) => ({
            ...prevData,
            alamat_usaha: prevData.Alamat, kode_pos_usaha: prevData.kode_pos, provinsi_usaha: prevData.provinsi, kecamatan_usaha: prevData.kecamatan, kota_usaha: prevData.kota, kelurahan_usaha: prevData.kelurahan,
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
    const validateForm = () => {
        for (const [key, value] of Object.entries(formData)) {
            if (!value) {
                window.alert(`${key.charAt(0) + key.slice(1)} tidak boleh kosong!`);
                return false;
            }
        }
        return true;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // if (!validateForm()) {
        //   return;
        // }
        console.log(formData)
        setIsLoading(true);
        try {
            const response = await axios.post(API_ENDPOINTS.PEMOHON, formData);
            console.log('Response from API:', response.data);
            setIsLoading(false);
            setVisible(true);
            resetForm()
        } catch (error) {
            console.error('Error submitting form:', error);
            setIsLoading(false);
        }
    };
    // const pemohonOptions = pemohon.map((item, index) => ({
    //     label: item.Cif,
    //     value: item.Cif
    // }));
    const sektorEkonomiOptions = sektorEkonomi.map((item) => ({
        label: item.Keterangan,
        value: item.Keterangan
    }));

    const headerElement = (
        <div className="inline-flex align-items-center justify-content-center gap-2">
            <span className="font-bold white-space-nowrap">Data Pemohon</span>
        </div>
    );

    const onRowClick = (e: any) => {
        setFormData(prevData => ({
            ...prevData,
            ...e.data
        }));
        setVisible(false)
    };

    useEffect(() => {
        setFilteredPemohon(
            pemohon.filter((item:any) =>
                item.Cif.toString().toLowerCase().includes(searchValue.toLowerCase()) ||
                item.Nama.toLowerCase().includes(searchValue.toLowerCase()) ||
                item.KTP.toLowerCase().includes(searchValue.toLowerCase()) ||
                item.Alamat.toLowerCase().includes(searchValue.toLowerCase())
            )
        );
    }, [searchValue, pemohon]);

    const onPageChange = (event: { first: number; rows: number }) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    const paginatedPemohon = filteredPemohon.slice(first, first + rows);
    // console.log(selectedRow)
    // console.log(formData)
    return (
        <div className="surface-card shadow-2 p-4 border-round">
            <form onSubmit={handleSubmit}>
                <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                    <TabPanel header="Data Pemohon">
                        <fieldset className='grid md:justify-content-between border-round p-4 mb-4'>{/*data pemohon*/}
                            <legend className="text-xl font-bold">Data Pemohon</legend>
                            <div className="col-12 md:col-6">
                                <div className="mb-2">
                                    <label className="block text-900 font-medium mb-2">CIF Debitur</label>
                                    <div className='flex gap-2'>
                                        <InputText required name='Cif' type="text" placeholder='Isikan dengan nomor cif anda' className="p-inputtext p-component w-full" value={formData.Cif} onChange={handleChange} />
                                        <Button icon="pi pi-search" onClick={() => setVisible(true)} style={{ backgroundColor: 'transparent', border: '1', color: '#333' }} />
                                    </div>
                                    <Dialog visible={visible} modal header={headerElement} style={{ width: '70rem' }} onHide={() => { if (!visible) return; setVisible(false); }}>
                                        <div className='flex'>
                                            <div>
                                                {/* <label className="block text-900 font-medium mb-2">CIF Debitur</label> */}
                                                {/* <Dropdown name='cif' value={formData.cif} onChange={handleChange} options={pemohonOptions} placeholder="Pilih CIF nasabah/debitur" className="w-full md:w-full" /> */}
                                                <div className="p-inputgroup mb-3 w-4">
                                                    <span className="p-inputgroup-addon"><i className="pi pi-search"></i></span>
                                                    <InputText placeholder="Search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className="w-full" />
                                                </div>
                                                <DataTable value={paginatedPemohon} tableStyle={{ minWidth: '50rem' }} onRowClick={onRowClick} className='cursor-pointer' rowClassName={(data) => `hover:bg-gray-100`}>
                                                    <Column field="ID" header="ID" />
                                                    <Column field="Cif" header="CIF" />
                                                    <Column field="Nama" header="Nama Lengkap" />
                                                    <Column field="Kelamin" header="Jenis Kelamin" />
                                                    <Column field="StatusPerkawinan" header="Status Perkawinan" />
                                                    <Column field="KTP" header="No KTP" />
                                                    <Column field="Alamat" header="Alamat" />
                                                </DataTable>
                                                <Paginator
                                                    first={first}
                                                    rows={rows}
                                                    totalRecords={filteredPemohon.length}
                                                    rowsPerPageOptions={[5, 10, 20]}
                                                    onPageChange={onPageChange}
                                                />
                                            </div>
                                        </div>
                                    </Dialog>
                                </div>
                                <div className="mb-2">
                                    <label className="block text-900 font-medium mb-2">Tempat Lahir</label>
                                    <InputText required name='TempatLahir' type="text" placeholder='Isikan kota/Kabupaten tempat lahir debitur' className="p-inputtext p-component w-full" value={formData.TempatLahir} onChange={handleChange} />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-900 font-medium mb-3">Jenis Kelamin</label>
                                    <div className='flex gap-3'>
                                        <div className='mb-2'>
                                            <RadioButton name="Kelamin" value="L" onChange={handleChange} checked={formData.Kelamin === 'L'} />
                                            <label htmlFor="" className="ml-2">laki-laki</label>
                                        </div>
                                        <div className='mb-2'>
                                            <RadioButton name="Kelamin" value="P" onChange={handleChange} checked={formData.Kelamin === 'P'} />
                                            <label htmlFor="" className="ml-2">perempuan</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <label className="block text-900 font-medium mb-2">Status Perkawinan</label>
                                    <Dropdown
                                        name='StatusPerkawinan'
                                        value={formData.StatusPerkawinan}
                                        onChange={handleChange}
                                        options={['Belum Kawin', 'Kawin']}
                                        placeholder="Status Perkawinan"
                                        className="w-full md:w-full"
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-900 font-medium mb-2">No. KTP</label>
                                    <InputText required name='KTP' type="text" placeholder='Isikan Nomor KTP/NIK anda' className="p-inputtext p-component w-full" value={formData.KTP} onChange={handleChange} />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-900 font-medium mb-2">Profesi Sampingan</label>
                                    <InputText required name='profesi_sampingan' type="text" placeholder='Pilih profesi sampingan' className="p-inputtext p-component w-full" value={formData.profesi_sampingan} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="col-12 md:col-6">
                                <div className="mb-2">
                                    <label className="block text-900 font-medium mb-2">Nama Lengkap</label>
                                    <InputText required name='Nama' type="text" placeholder='Isikan nama lengkap debitur' className="p-inputtext p-component w-full" value={formData.Nama} onChange={handleChange} />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-900 font-medium mb-2">Tanggal Lahir</label>
                                    <InputText required name='TglLahir' type="date" placeholder='Format Tanggal DD-MM-YY, contoh 17-08-1980' className="p-inputtext p-component w-full" value={formData.TglLahir} onChange={handleChange} />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-900 font-medium mb-2">Nama Gadis Ibu Kandung</label>
                                    <InputText required name='nama_ibu_kandung' type="text" placeholder='Isikan nama gadis ibu kandung debitur' className="p-inputtext p-component w-full" value={formData.nama_ibu_kandung} onChange={handleChange} />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-900 font-medium mb-2">Jumlah Tanggungan</label>
                                    <div className='flex gap-2 align-items-center'>
                                        <InputText required name='jumlah_tanggungan' type="number" placeholder='Isikan dengan angka untuk jumlah tanggungan' className="p-inputtext p-component w-full" value={formData.jumlah_tanggungan} onChange={handleChange} />
                                        <label htmlFor="" className='text-900 font-medium'>Orang</label>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <label className="block text-900 font-medium mb-2">KTP Berlaku</label>
                                    <InputText required name='ktp_berlaku' type="date" placeholder='Isikan mas akhir KTP, contoh 12-01-1980' className="p-inputtext p-component w-full" value={formData.ktp_berlaku} onChange={handleChange} />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-900 font-medium mb-2">No. Telp / HP</label>
                                    <InputText required name='no_hp' type="number" placeholder='Isikan nomor telepon yang bisa dihubungi, tanpa kode negara, misal 0812345678' className="p-inputtext p-component w-full" value={formData.no_hp} onChange={handleChange} />
                                </div>
                            </div>
                        </fieldset>
                        <div className='flex justify-content-end'>
                            <Button onClick={handleNextTab}>Lanjut</Button>
                        </div>
                    </TabPanel>
                    <TabPanel header="Alamat Pemohon">
                        <fieldset className='grid md:justify-content-between border-round p-4 mb-4'> {/*Alamat pemohon*/}
                            <legend className="text-xl font-bold">Alamat Pemohon</legend>
                            <div className="col-12 grid md:justify-content-between ">
                                <div className=" col-12 md:col-10">
                                    <label className="block text-900 font-medium mb-2">Alamat</label>
                                    <InputText required name='Alamat' type="text" placeholder='Isikan alamat rumah/lokasi tempat usaha/kantor debitur' className="p-inputtext p-component w-full" value={formData.Alamat} onChange={handleChange} />
                                </div>
                                <div className=" col-12 md:col-2">
                                    <label className="block text-900 font-medium mb-2">Kode Pos</label>
                                    <InputText required name='kode_pos' type="number" placeholder='contoh 61254' className="p-inputtext p-component w-full" value={formData.kode_pos} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="col-12 md:col-6">
                                <div className="mb-2">
                                    <label className="block text-900 font-medium mb-2">Provinsi</label>
                                    <InputText required name='provinsi' type="text" placeholder='Pilih Provinsi dari alamat tinggal/tempat usaha debitur' className="p-inputtext p-component w-full" value={formData.provinsi} onChange={handleChange} />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-900 font-medium mb-2">Kecamatan</label>
                                    <InputText required name='kecamatan' type="text" placeholder='Pilih Kecamatan dari alamat tinggal/tempat usaha debitur' className="p-inputtext p-component w-full" value={formData.kecamatan} onChange={handleChange} />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-900 font-medium mb-2">Telepon</label>
                                    <InputText required name='telepon' type="number" placeholder='Isikan no telepon' className="p-inputtext p-component w-full" value={formData.telepon} onChange={handleChange} />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-900 font-medium mb-2">Status Tempat Tinggal</label>
                                    <InputText required name='status_tempat_tinggal' type="text" placeholder='Pilih status tempat tinggal' className="p-inputtext p-component w-full" value={formData.status_tempat_tinggal} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="col-12 md:col-6 mb-4">
                                <div className="mb-2">
                                    <label className="block text-900 font-medium mb-2">Kota/Kabupaten</label>
                                    <InputText required name='kota' type="text" placeholder='Pilih Kota/Kabupaten dari alamat tinggal/tempat usaha debitur' className="p-inputtext p-component w-full" value={formData.kota} onChange={handleChange} />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-900 font-medium mb-2">Kelurahan</label>
                                    <InputText required name='kelurahan' type="text" placeholder='Pilih Kelurahan/Desa dari alamat tinggal/tempat usaha debitur' className="p-inputtext p-component w-full" value={formData.kelurahan} onChange={handleChange} />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-900 font-medium mb-2">Fax</label>
                                    <InputText required name='fax' type="text" placeholder='Isikan no fax jika ada' className="p-inputtext p-component w-full" value={formData.fax} onChange={handleChange} />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-900 font-medium mb-2">Lama Tinggal</label>
                                    <div className='flex gap-2 align-items-center'>
                                        <InputText required name='lama_tinggal' type="number" placeholder='Isikan dengan angka, lama tinggal' className="p-inputtext p-component w-full" value={formData.lama_tinggal} onChange={handleChange} />
                                        <label htmlFor="" className='text-900 font-medium'>Tahun</label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <div className='flex justify-content-between'>
                            <Button onClick={handlePreviousTab} disabled={activeIndex === 0} className=''>Kembali</Button>
                            <Button onClick={handleNextTab}>Lanjut</Button>
                        </div>
                    </TabPanel>
                    <TabPanel header="Data Usaha">
                        <fieldset className='grid md:justify-content-between border-round p-4 mb-4'> {/*Data Usaha*/}
                            <legend className="text-xl font-bold">Data Usaha</legend>
                            <div className="col-12 md:col-6">
                                <div className="mb-2">
                                    <label className="block text-900 font-medium mb-2">Nama Usaha</label>
                                    <InputText name='nama_usaha' type="text" placeholder='Misal: UD Barokah, Toko Jaya, CV Mapan' className="p-inputtext p-component w-full" value={formData.nama_usaha} onChange={handleChange} />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-900 font-medium mb-2">Tanggal Mulai Usaha</label>
                                    <InputText name='tanggal_mulai_usaha' type="date" placeholder='Isikan Tanggal Mulai Usaha' className="p-inputtext p-component w-full" value={formData.tanggal_mulai_usaha} onChange={handleChange} />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-900 font-medium mb-2">Status Tempat Usaha</label>
                                    <InputText name='status_tempat_usaha' type="text" placeholder='Pilih Status Tempat Usaha' className="p-inputtext p-component w-full" value={formData.status_tempat_usaha} onChange={handleChange} />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-900 font-medium mb-2">Surat Keterangan Usaha/SIUP No</label>
                                    <InputText name='surat_keterangan_usaha' type="text" placeholder='Isikan no SIUP jika ada, jika tidak isi dengan : -' className="p-inputtext p-component w-full" value={formData.surat_keterangan_usaha} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="col-12 md:col-6 mb-4">
                                <div className="mb-2">
                                    <label className="block text-900 font-medium mb-2">Sektor Ekonomi OJK</label>
                                    {/* <InputText name='sektor_ekonomi' type="text" placeholder='Pilih sektor ekonomi' className="p-inputtext p-component w-full" value={formData.sektor_ekonomi} onChange={handleChange} /> */}
                                    <Dropdown
                                        name='sektor_ekonomi'
                                        value={formData.sektor_ekonomi}
                                        onChange={handleChange}
                                        options={sektorEkonomiOptions}
                                        placeholder="Pilih sektor ekonomi"
                                        className="w-full md:w-full"
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-900 font-medium mb-2">Jumlah Karyawan</label>
                                    <div className='flex gap-2 align-items-center'>
                                        <InputText name='jumlah_karyawan' type="number" placeholder='Isikan jumlah karyawan(orang) dalam angka' className="p-inputtext p-component w-full" value={formData.jumlah_karyawan} onChange={handleChange} />
                                        <label htmlFor="" className='text-900 font-medium'>Orang</label>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <label className="block text-900 font-medium mb-2">Jarak Lokasi Usaha</label>
                                    <div className='flex gap-2 align-items-center'>
                                        <InputText name='jarak_lokasi_usaha' type="number" placeholder='Jarak rumah/tempat usaha/kantor debitur ke kantor BPR' className="p-inputtext p-component w-full" value={formData.jarak_lokasi_usaha} onChange={handleChange} />
                                        <label htmlFor="" className='text-900 font-medium'>km</label>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <label className="block text-900 font-medium mb-2">Masalaku/Tanggal</label>
                                    <InputText name='masa_laku' type="date" placeholder='Isikan masa akhir, contohnya 12-91-2020' className="p-inputtext p-component w-full" value={formData.masa_laku} onChange={handleChange} />
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
                                    <InputText name='alamat_usaha' type="text" placeholder='Isikan alamat rumah/lokasi tempat usaha/kantor debitur' className="p-inputtext p-component w-full" value={formData.alamat_usaha} onChange={handleChange} />
                                </div>
                                <div className=" col-12 md:col-2">
                                    <label className="block text-900 font-medium mb-2">Kode Pos</label>
                                    <InputText name='kode_pos_usaha' type="number" placeholder='contoh 61254' className="p-inputtext p-component w-full" value={formData.kode_pos_usaha} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="col-12 md:col-6">
                                <div className="mb-2">
                                    <label className="block text-900 font-medium mb-2">Provinsi</label>
                                    <InputText name='provinsi_usaha' type="text" placeholder='Pilih Provinsi dari alamat tinggal/tempat usaha debitur' className="p-inputtext p-component w-full" value={formData.provinsi_usaha} onChange={handleChange} />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-900 font-medium mb-2">Kecamatan</label>
                                    <InputText name='kecamatan_usaha' type="text" placeholder='Pilih Kecamatan dari alamat tinggal/tempat usaha debitur' className="p-inputtext p-component w-full" value={formData.kecamatan_usaha} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="col-12 md:col-6 mb-4">
                                <div className="mb-2">
                                    <label className="block text-900 font-medium mb-2">Kota/Kabupaten</label>
                                    <InputText name='kota_usaha' type="text" placeholder='Pilih Kota/Kabupaten dari alamat tinggal/tempat usaha debitur' className="p-inputtext p-component w-full" value={formData.kota_usaha} onChange={handleChange} />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-900 font-medium mb-2">Kelurahan</label>
                                    <InputText name='kelurahan_usaha' type="text" placeholder='Pilih Kelurahan/Desa dari alamat tinggal/tempat usaha debitur' className="p-inputtext p-component w-full" value={formData.kelurahan_usaha} onChange={handleChange} />
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
                    </TabPanel>
                </TabView>
            </form>
        </div>
    )
}

export default FormPemohon