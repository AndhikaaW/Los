"use client"
import { API_ENDPOINTS } from '@/app/api/losbackend/api';
import axios from 'axios';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea';
import { Paginator } from 'primereact/paginator';
import React, { useEffect, useState } from 'react'

interface SifatKredit {
    id: number;
    Kode: string;
    Keterangan: string;
}

const produk = () => {
    const [sifatKredit, setSifatKredit] = useState<SifatKredit[]>([]);
    const [visible, setVisible] = useState(false);
    const [visibleadd, setVisibleadd] = useState(false);
    const [Isloading, setIsLoading] = useState(false);
    const [allproduk, setAllProduk] = useState([]);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(5);
    const [paginatedData, setPaginatedData] = useState([]);
    const [formData, setFormData] = useState({
        //form produk
        produk: '', bidang_usaha: '', nomor_aplikasi: '', tanggal_aplikasi: '', tanggal_permohonan: '', plafon_kredit: '', suku_bunga: '', jangka_waktu: '', sifat_kredit: '', jenis_permohonan: '', jenis_angsuran: '', no_aplikasi_sebelumnya: '', tujuan_penggunaan: '', detail_tujuan_penggunaan: ''
    });
    const resetForm = () => {
        setFormData({
            //form produk
            produk: '', bidang_usaha: '', nomor_aplikasi: '', tanggal_aplikasi: '', tanggal_permohonan: '', plafon_kredit: '', suku_bunga: '', jangka_waktu: '', sifat_kredit: '', jenis_permohonan: '', jenis_angsuran: '', no_aplikasi_sebelumnya: '', tujuan_penggunaan: '', detail_tujuan_penggunaan: ''
        });
    };
    const formatDate = (dateString: any) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${day}-${month}-${year}`;
    };
    useEffect(() => {
        const fetchSifatKredit = async () => {
            try {
                const response = await axios.get(API_ENDPOINTS.GETSIFATKREDIT);
                setSifatKredit(response.data);
            } catch (error) {
                console.error('There was an error fetching the users!', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchSifatKredit();
    }, []);

    useEffect(() => {
        const fetchAllProduk = async () => {
            try {
                const response = await axios.get(API_ENDPOINTS.GETALLPRODUK);
                const formattedData = response.data.map((item: any) => ({
                    ...item,
                    tanggal_aplikasi: formatDate(item.tanggal_aplikasi),
                    tanggal_permohonan: formatDate(item.tanggal_permohonan)
                }));
                setAllProduk(formattedData);
                setPaginatedData(formattedData.slice(first, first + rows));
            } catch (error) {
                console.error('There was an error fetching the users!', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchAllProduk();
    }, [first, rows]);

    const handleChange = async (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // if (!validateForm()) {
        //   return;
        // }
        setIsLoading(true);
        console.log(formData)
        try {
            const response = await axios.post(API_ENDPOINTS.ADDPRODUK, formData);
            console.log('Response from API:', response.data);
            // Reset form atau tampilkan pesan sukses di sini
            setIsLoading(false);
            setVisible(true);
        } catch (error) {
            console.error('Error submitting form:', error);
            setIsLoading(false);
            // Tampilkan pesan error ke pengguna di sini
        }
    };
    const headerElement = (
        <div className="inline-flex align-items-center justify-content-center gap-2">
            <span className="font-bold white-space-nowrap">Data Produk</span>
        </div>
    );
    const SifatKreditOptions = sifatKredit.map((item, index) => ({
        label: item.Keterangan,
        value: item.Keterangan
    }));

    const onPageChange = (event: any) => {
        setFirst(event.first);
        setRows(event.rows);
        setPaginatedData(allproduk.slice(event.first, event.first + event.rows));
    };
    console.log(paginatedData)
    return (
        <div>
            <div className="card">
                <div className='flex align-items-center justify-content-start mb-2'>
                    <Button label='Add' icon="pi pi-plus" onClick={() => setVisibleadd(true)} style={{ border: '1', color: '#333' }} className='bg-blue-200' />
                    <Dialog visible={visibleadd} modal header={headerElement} style={{ width: '50rem' }} onHide={() => { if (!visibleadd) return; setVisibleadd(false); }}>
                        <div className='p-2 border-round'>
                            <form onSubmit={handleSubmit}>
                                <fieldset className='grid md:justify-content-between border-round p-4 mb-4'> {/*Produk*/}
                                    <legend className="text-xl font-bold">Produk</legend>
                                    <div className="col-12 md:col-6">
                                        <div className="mb-2">
                                            <label className="block text-900 font-medium mb-2">Produk</label>
                                            <InputText required name='produk' type="text" placeholder='Kredit UMKM Industri' className="p-inputtext p-component w-full" value={formData.produk} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="col-12 md:col-6">
                                        <div className="mb-2">
                                            <label className="block text-900 font-medium mb-2">Bidang Usaha</label>
                                            {/* <InputText required name='bidang_usaha' type="text" placeholder='Pilih bidang usaha' className="p-inputtext p-component w-full" value={formData.bidang_usaha} onChange={handleChange} /> */}
                                            <Dropdown name='bidang_usaha' value={formData.bidang_usaha} onChange={handleChange} options={SifatKreditOptions} placeholder="Pilih CIF nasabah/debitur" className="w-full md:w-full"/>
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
                                            {/* <InputText required name='sifat_kredit' type="text" placeholder='Pilih sifat kredit' className="p-inputtext p-component w-full" value={formData.sifat_kredit} onChange={handleChange} /> */}
                                            <Dropdown name='sifat_kredit' value={formData.sifat_kredit} onChange={handleChange} options={SifatKreditOptions} placeholder="Pilih CIF nasabah/debitur" className="w-full md:w-full"/>
                                        </div>
                                        <div className="mb-2">
                                            <label className="block text-900 font-medium mb-2">Jenis Permohonan</label>
                                            {/* <InputText required name='jenis_permohonan' type="text" placeholder='Pilih jenis permohonan' className="p-inputtext p-component w-full" value={formData.jenis_permohonan} onChange={handleChange} /> */}
                                            <Dropdown name='jenis_permohonan' value={formData.jenis_permohonan} onChange={handleChange} options={SifatKreditOptions} placeholder="Pilih CIF nasabah/debitur" className="w-full md:w-full"/>
                                        </div>
                                    </div>
                                    <div className="col-12 md:col-6">
                                        <div className="mb-2">
                                            <label className="block text-900 font-medium mb-2">Jenis Angsuran</label>
                                            {/* <InputText required name='jenis_angsuran' type="text" placeholder='Pilih jenis angsuran' className="p-inputtext p-component w-full" value={formData.jenis_angsuran} onChange={handleChange} /> */}
                                            <Dropdown name='jenis_angsuran' value={formData.jenis_angsuran} onChange={handleChange} options={SifatKreditOptions} placeholder="Pilih CIF nasabah/debitur" className="w-full md:w-full"/>
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
                            </form>
                        </div>
                    </Dialog>
                </div>
                <DataTable value={paginatedData} tableStyle={{ minWidth: '130rem' }}>
                    <Column field="id" header="ID" />
                    <Column field="produk" header="Produk" />
                    <Column field="bidang_usaha" header="Bidang Usaha" />
                    <Column field="nomor_aplikasi" header="Nomor Aplikasi" />
                    <Column field="tanggal_aplikasi" header="Tanggal Aplikasi" />
                    <Column field="tanggal_permohonan" header="Tanggal Permohonan" />
                    <Column field="plafon_kredit" header="Plafon Kredit" />
                    <Column field="suku_bunga" header="Suku Bunga" />
                    <Column field="jangka_waktu" header="Jangka Waktu" />
                    <Column field="sifat_kredit" header="Sifat Kredit" />
                    <Column field="jenis_permohonan" header="Jenis Permohonan" />
                    <Column field="jenis_angsuran" header="Jenis Angsuran" />
                    <Column field="no_aplikasi_sebelumnya" header="No Aplikasi Sebelumnya" />
                    <Column field="tujuan_penggunaan" header="Tujuan Penggunaan" />
                    <Column field="detail_tujuan_penggunaan" header="Detail Tujuan Penggunaan" />
                </DataTable>
                <Paginator
                    first={first}
                    rows={rows}
                    totalRecords={allproduk.length}
                    rowsPerPageOptions={[5, 10, 20]}
                    onPageChange={onPageChange}
                />
            </div>
        </div>
    )
}

export default produk