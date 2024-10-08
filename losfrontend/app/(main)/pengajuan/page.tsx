"use client"
import { API_ENDPOINTS } from '@/app/api/losbackend/api';
import axios from 'axios';
import Link from 'next/link';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dialog } from 'primereact/dialog';
import React, { useEffect, useState } from 'react'

const produk = () => {
    const [allproduk, setAllProduk] = useState([]);
    const [selectedRow, setSelectedRow] = useState<any>({});
    const [visible, setVisible] = useState(false);
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
            } catch (error) {
                console.error('There was an error fetching the users!', error);
            } finally {
                // setIsLoading(false);
            }
        };
        fetchAllProduk();
    }, []);

    const handleDelete = async (id: string) => {
        try {
            await axios.delete(API_ENDPOINTS.DELETEPRODUKBYID(id));
            setAllProduk(allproduk.filter((item: any) => item.id !== id));
            const response = await axios.get(API_ENDPOINTS.GETALLPRODUK);
            setAllProduk(response.data);
        } catch (error) {
            console.error('Error deleting form pengajuan:', error);
        }
    };
    const handleUpdateStatus = async (status: number, no_pengajuan: string) => {
        try {
            await axios.put(API_ENDPOINTS.UPDATESTATUSPENGAJUANBYID(no_pengajuan), { status: status });
            const response = await axios.get(API_ENDPOINTS.GETALLPRODUK);
            setAllProduk(response.data);
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    const statusTemplate = (rowData: any) => {
        switch (rowData.status) {
            case 0:
                return <Button label='Ajukan' className='p-1 bg-yellow-200 border-round border-none text-gray-900' onClick={() => { handleUpdateStatus(1, rowData.no_pengajuan); }} />;
            case 1:
                return <span className='p-1 bg-green-200 border-round'>Diajukan</span>;
            case 2:
                return <span className='p-1 bg-blue-200 border-round'>Disetujui</span>;
            case 3:
                return <span className='p-1 bg-red-200 border-round'>Ditolak</span>;
            default:
                return <span className='p-1 bg-gray-200 border-round'>Tidak Diketahui</span>;
        }
    };

    const editTemplate = (rowData: any) => {
        if (rowData.status === 0) {
            return (
                <Link href={`/pengajuan/formpengajuan/${rowData.no_pengajuan}`} passHref>
                    <Button icon="pi pi-pencil" style={{ border: '1', color: '#333' }} className='bg-blue-200' />
                </Link>
            );
        }
        return null;
    };

    const deleteTemplate = (rowData: any) => {
        if (rowData.status === 0) {
            return (
                <div className='flex justify-content-center'>
                    <Button icon="pi pi-trash" style={{ border: '1', color: '#333' }} className='bg-red-200' onClick={() => {
                        setSelectedRow(rowData);
                        setVisible(true);
                    }} />
                    <Dialog header={`Hapus Data ${selectedRow.NomorRekening}`} visible={visible} style={{ width: '50vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
                        <label htmlFor="">Apakah anda yakin ingin menghapus data ini?</label>
                        <div className='flex justify-content-end mt-3'>
                            <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
                            <Button label="Yes" icon="pi pi-check" autoFocus onClick={() => { handleDelete(selectedRow.NomorRekening); setVisible(false); }} />
                        </div>
                    </Dialog>
                </div>
            );
        }
        return null;
    };
    return (
        <div>
            <div className="card">
                <div className='flex align-items-center justify-content-start mb-2'>
                    <Link href={'/pengajuan/formpengajuan'} passHref>
                        <Button label='Add' icon="pi pi-plus" style={{ border: '1', color: '#333' }} className='bg-blue-200' />
                    </Link>
                </div>
                <DataTable value={allproduk} tableStyle={{ minWidth: '30rem' }} paginator rows={5} rowsPerPageOptions={[5, 10, 20]}>
                    <Column field="no_pengajuan" header="No Pengajuan" />
                    <Column field="Cif" header="CIF" />
                    <Column field="pengajuan" header="Pengajuan" />
                    <Column field="ref_bidang_usaha.Keterangan" header="Bidang Usaha" />
                    <Column field="ref_sifat_kredit.Keterangan" header="Sifat Kredit" />
                    <Column field="ref_jenis_permohonan.Keterangan" header="Jenis Permohonan" />
                    <Column field="ref_jenis_angsuran.Keterangan" header="Jenis Angsuran" />
                    <Column field="status" header="Status Pengajuan" body={statusTemplate} />
                    <Column field="tujuan_penggunaan" header="Tujuan Penggunaan" />
                    <Column field="detail_tujuan_penggunaan" header="Detail Tujuan Penggunaan" />
                    <Column header="Analisa Kredit" body={(rowData) => (
                        <Link href={`/admin/debitur/pengajuandebitur/${rowData.Cif}/analisakredit/${rowData.no_pengajuan}`} passHref>
                            <Button icon="pi pi-eye" style={{ border: '1', color: '#333' }} className='bg-blue-200' />
                        </Link>
                    )} />
                    {allproduk.some((row: any) => row.status === 0) && (
                        <Column header="Edit" body={editTemplate} />
                    )}
                    {allproduk.some((row: any) => row.status === 0) && (
                        <Column header="Delete" body={deleteTemplate} />
                    )}
                </DataTable>
            </div>
        </div>
    )
}

export default produk