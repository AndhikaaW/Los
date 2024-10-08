"use client"
import { API_ENDPOINTS } from '@/app/api/losbackend/api';
import axios from 'axios';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Paginator } from 'primereact/paginator';
import React, { useEffect, useState } from 'react'


const EditFormPengajuan = () => {
    const params = useParams();
    const id = params?.id;
    const [sifatKredit, setSifatKredit] = useState<any>([]);
    const [pengajuan, setPengajuan] = useState<any>([]);
    const [visiblesearch, setVisibleSearch] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [cif, setCif] = useState<any>([]);
    const [filteredCif, setFilteredCif] = useState(cif);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(5);
    const [visible, setVisible] = useState(false);
    const [Isloading, setIsLoading] = useState(false);

    useEffect(() => {
        if (id) {
            fetchPengajuanData(id);
        }
    }, [id]);

    const fetchPengajuanData = async (id: any) => {
        try {
            const response = await axios.get(`http://192.168.1.35:8000/api/getprodukbyid/${id}`);
            const formattedData = {
                ...response.data,
                tanggal_aplikasi: formatDate(response.data.tanggal_aplikasi),
                tanggal_permohonan: formatDate(response.data.tanggal_permohonan)
            };
            console.log(formattedData);
            setFormData(formattedData);
        } catch (error) {
            console.error('Error fetching pengajuan data:', error);
        }
    };
    const formatDate = (dateString: string) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toISOString().split('T')[0];
    };
    const [formData, setFormData] = useState({
        //form pengajuan
        Cif: '',
        pengajuan: '', bidang_usaha: '', NomorRekening: '', tanggal_aplikasi: '', tanggal_permohonan: '', plafon_kredit: '', suku_bunga: '', jangka_waktu: '', sifat_kredit: '', jenis_permohonan: '', jenis_angsuran: '', no_aplikasi_sebelumnya: '', tujuan_penggunaan: '', detail_tujuan_penggunaan: ''
    });
    const resetForm = () => {
        setFormData({
            //form pengajuan
            Cif: '',
            pengajuan: '', bidang_usaha: '', NomorRekening: '', tanggal_aplikasi: '', tanggal_permohonan: '', plafon_kredit: '', suku_bunga: '', jangka_waktu: '', sifat_kredit: '', jenis_permohonan: '', jenis_angsuran: '', no_aplikasi_sebelumnya: '', tujuan_penggunaan: '', detail_tujuan_penggunaan: ''
        });
    };

    const handleChange = async (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = async (e:any) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            let response;
            if (id) {
                response = await axios.put(API_ENDPOINTS.UPDATEPENGAJUANBYID(id), formData);
            } else {
                response = await axios.post(API_ENDPOINTS.ADDPRODUK, formData);
            }
            console.log('Response from API:', response.data);
            setIsLoading(false);
            setVisible(true);
            if (!id) resetForm();
        } catch (error) {
            console.error('Error submitting form:', error);
            setIsLoading(false);
        }
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
        const fetchPengajuan = async () => {
            try {
                const response = await axios.get(API_ENDPOINTS.GETGOLONGANKREDIT);
                setPengajuan(response.data);
            } catch (error) {
                console.error('There was an error fetching the users!', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchPengajuan();
    }, []);
    useEffect(() => {
        const fetchCif = async () => {
            try {
                const response = await axios.get(API_ENDPOINTS.GETALLPEMOHON);
                setCif(response.data);
            } catch (error) {
                console.error("Error fetching account data:", error);
            }
        };
        fetchCif();
    }, []);
    useEffect(() => {
        setFilteredCif(
            cif.filter((item: any) =>
                item.Cif.toString().toLowerCase().includes(searchValue.toLowerCase()) ||
                item.Nama.toLowerCase().includes(searchValue.toLowerCase()) ||
                item.KTP.toLowerCase().includes(searchValue.toLowerCase()) ||
                item.Alamat.toLowerCase().includes(searchValue.toLowerCase())
            )
        );
    }, [searchValue, cif]);

    const SifatKreditOptions = sifatKredit.map((item: any, index: any) => ({
        label: item.Keterangan,
        value: item.Keterangan
    }));
    const PengajuanOptions = pengajuan.map((item: any, index: any) => ({
        label: item.Keterangan,
        value: item.Keterangan
    }));
    const onRowClick = (e: any) => {
        setFormData(prevData => ({
            ...prevData,
            Cif: e.data.Cif
        }));
        setVisibleSearch(false);
    };
    const onPageChange = (event: any) => {
        setFirst(event.first);
        setRows(event.rows);
    };
    const paginatedCif = filteredCif.slice(first, first + rows);
    return (
        <div className='surface-card shadow-2 p-5 border-round'>
            <div className='flex gap-2 mb-4 justify-content-end'>
                <InputText required name='Cif' type="text" placeholder='Enter account number' className="p-inputtext p-component w-3" value={formData.Cif} onChange={handleChange} />
                <Button icon="pi pi-search" onClick={() => setVisibleSearch(true)} style={{ backgroundColor: 'transparent', border: '1', color: '#333' }} />
            </div>
            <Dialog visible={visiblesearch} onHide={() => setVisibleSearch(false)} header="Search Cif" style={{ width: '70vw' }}>
                <div className="p-inputgroup mb-3">
                    <span className="p-inputgroup-addon"><i className="pi pi-search"></i></span>
                    <InputText placeholder="Search by account number or name" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className="w-full" />
                </div>
                <DataTable
                    value={paginatedCif}
                    onRowClick={onRowClick}
                    className='cursor-pointer'>
                    <Column field="Cif" header="Cif" />
                    <Column field="Nama" header="Nama" />
                    <Column field="KTP" header="No Ktp" />
                    <Column field="Kelamin" header="Jenis Kelamin" />
                </DataTable>
                <Paginator
                    first={first}
                    rows={rows}
                    totalRecords={cif.length}
                    rowsPerPageOptions={[5, 10, 20]}
                    onPageChange={onPageChange}
                />
            </Dialog>
            <form onSubmit={handleSubmit}>
                <fieldset className='grid md:justify-content-between border-round p-4 mb-4'> {/*Produk*/}
                    <legend className="text-xl font-bold">Pengajuan Kredit</legend>
                    <div className="col-12 md:col-6">
                        <div className="mb-2">
                            <label className="block text-900 font-medium mb-2">Pengajuan</label>
                            {/* <InputText required name='pengajuan' type="text" placeholder='Kredit UMKM Industri' className="p-inputtext p-component w-full" value={formData.pengajuan} onChange={handleChange} /> */}
                            <Dropdown name='pengajuan' value={formData.pengajuan} onChange={handleChange} options={PengajuanOptions} placeholder="Kredit UMKM Industri" className="w-full md:w-full" />
                        </div>
                    </div>
                    <div className="col-12 md:col-6">
                        <div className="mb-2">
                            <label className="block text-900 font-medium mb-2">Bidang Usaha</label>
                            {/* <InputText required name='bidang_usaha' type="text" placeholder='Pilih bidang usaha' className="p-inputtext p-component w-full" value={formData.bidang_usaha} onChange={handleChange} /> */}
                            <Dropdown name='bidang_usaha' value={formData.bidang_usaha} onChange={handleChange} options={SifatKreditOptions} placeholder="Pilih Bidang Usaha" className="w-full md:w-full" />
                        </div>
                    </div>
                    <div className="col-12 md:col-4">
                        <div className="mb-2">
                            <label className="block text-900 font-medium mb-2">Nomor Rekening</label>
                            <InputText required name='NomorRekening' type="text" placeholder='nomor akan terisi otomatis' className="p-inputtext p-component w-full" value={formData.NomorRekening} onChange={handleChange} />
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
                            <Dropdown name='sifat_kredit' value={formData.sifat_kredit} onChange={handleChange} options={SifatKreditOptions} placeholder="Pilih Sifat Kredit" className="w-full md:w-full" />
                        </div>
                        <div className="mb-2">
                            <label className="block text-900 font-medium mb-2">Jenis Permohonan</label>
                            {/* <InputText required name='jenis_permohonan' type="text" placeholder='Pilih jenis permohonan' className="p-inputtext p-component w-full" value={formData.jenis_permohonan} onChange={handleChange} /> */}
                            <Dropdown name='jenis_permohonan' value={formData.jenis_permohonan} onChange={handleChange} options={SifatKreditOptions} placeholder="Pilih Jenis Permohonan" className="w-full md:w-full" />
                        </div>
                    </div>
                    <div className="col-12 md:col-6">
                        <div className="mb-2">
                            <label className="block text-900 font-medium mb-2">Jenis Angsuran</label>
                            {/* <InputText required name='jenis_angsuran' type="text" placeholder='Pilih jenis angsuran' className="p-inputtext p-component w-full" value={formData.jenis_angsuran} onChange={handleChange} /> */}
                            <Dropdown name='jenis_angsuran' value={formData.jenis_angsuran} onChange={handleChange} options={SifatKreditOptions} placeholder="Pilih Jenis Angsuran" className="w-full md:w-full" />
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
                <div className='flex justify-content-end'>
                    <div className='flex gap-4 justify-content-end pt-4'>
                        <Button onClick={resetForm} type="button">Reset</Button>
                        <Button type="submit" className='text-white bg-[#61AB5B] w-auto' disabled={Isloading}>
                            {Isloading ? (
                                <div className="flex align-items-center">
                                    <i className="pi pi-spin pi-spinner" style={{ fontSize: "1rem" }}></i>
                                    <label>Loading...</label>
                                </div>
                            ) : (
                                id ? 'Update' : 'Kirim'
                            )}
                        </Button>
                        <Link href="/pengajuan" passHref>
                            <Button type="button" className='p-button-secondary'>Back to List</Button>
                        </Link>

                        <Dialog header="Success" visible={visible} style={{ width: '50vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
                            <p className="m-0">
                                {id ? 'Data berhasil diperbarui' : 'Terima Kasih telah mengisi form'}
                            </p>
                        </Dialog>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditFormPengajuan