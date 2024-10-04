"use client"
import { API_ENDPOINTS } from '@/app/api/losbackend/api';
import axios from 'axios';
import Link from 'next/link';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dialog } from 'primereact/dialog';
import { Paginator } from 'primereact/paginator';
import React, { useEffect, useState } from 'react'

const produk = () => {
    const [allproduk, setAllProduk] = useState([]);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(5);
    const [paginatedData, setPaginatedData] = useState([]);
    const [selectedRow, setSelectedRow] = useState<any>({});
    const [visible, setVisible] = useState(false);
    // const [formData, setFormData] = useState({
    //     //form produk
    //     produk: '', bidang_usaha: '', nomor_aplikasi: '', tanggal_aplikasi: '', tanggal_permohonan: '', plafon_kredit: '', suku_bunga: '', jangka_waktu: '', sifat_kredit: '', jenis_permohonan: '', jenis_angsuran: '', no_aplikasi_sebelumnya: '', tujuan_penggunaan: '', detail_tujuan_penggunaan: ''
    // });
    const formatDate = (dateString: any) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${day}-${month}-${year}`;
    };
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
                // setIsLoading(false);
            }
        };
        fetchAllProduk();
    }, [first, rows]);
    const onPageChange = (event: any) => {
        setFirst(event.first);
        setRows(event.rows);
        setPaginatedData(allproduk.slice(event.first, event.first + event.rows));
    };

    const handleDelete = async (NomorRekening: string) => {
        try {
            await axios.delete(API_ENDPOINTS.DELETEPRODUKBYID(NomorRekening));
            setAllProduk(allproduk.filter((item: any) => item.NomorRekening !== NomorRekening));
            const response = await axios.get(API_ENDPOINTS.GETALLPRODUK);
            setAllProduk(response.data);
            setPaginatedData(response.data.slice(first, first + rows));
        } catch (error) {
            console.error('Error deleting form produk:', error);
        }
    };
    
    return (
        <div>
            <div className="card">
                <div className='flex align-items-center justify-content-start mb-2'>
                    {/* <Button label='Add' icon="pi pi-plus" onClick={() => setVisibleadd(true)} style={{ border: '1', color: '#333' }} className='bg-blue-200' /> */}
                    <Link href={'/pengajuan/formpengajuan'} passHref>
                        <Button label='Add' icon="pi pi-plus" style={{ border: '1', color: '#333' }} className='bg-blue-200' />
                    </Link>
                </div>
                <DataTable value={paginatedData} tableStyle={{ minWidth: '130rem' }}>
                    <Column field="id" header="ID" />
                    <Column field="no_pengajuan" header="No Pengajuan" />
                    <Column field="Cif" header="Cif" />
                    <Column field="pengajuan" header="Pengajuan" />
                    <Column field="bidang_usaha" header="Bidang Usaha" />
                    <Column field="NomorRekening" header="Nomor Rekening" />
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
                    <Column header="Edit" body={(rowData) => (
                        <Link href={`/pengajuan/formpengajuan/${rowData.id}`} passHref>
                            <Button icon="pi pi-pencil" style={{ border: '1', color: '#333' }} className='bg-blue-200' />
                        </Link>
                    )} />
                    <Column header="Delete" body={(rowData) => (
                        <div className='flex justify-content-center'>
                            <Button icon="pi pi-trash" style={{ border: '1', color: '#333' }} className='bg-red-200' onClick={() => {
                                setSelectedRow(rowData);
                                setVisible(true);
                            }} />
                            <Dialog header={`Hapus Data ${selectedRow.NomorRekening}`} visible={visible} style={{ width: '50vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
                                <label htmlFor="">Apakah anda yakin ingin menghapus data ini?</label>
                                <div className='flex justify-content-end mt-3'>
                                    <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
                                    <Button label="Yes" icon="pi pi-check" autoFocus onClick={() => {handleDelete(selectedRow.NomorRekening); setVisible(false); }} /> 
                                </div>
                            </Dialog>
                        </div>
                    )} />
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