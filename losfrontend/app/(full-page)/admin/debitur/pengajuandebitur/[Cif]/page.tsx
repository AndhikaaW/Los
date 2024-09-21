"use client"
import { API_ENDPOINTS } from '@/app/api/losbackend/api';
import axios from 'axios';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dialog } from 'primereact/dialog';
import { Paginator } from 'primereact/paginator';
import React, { useEffect, useState } from 'react'

const Pengajuandebitur = () => {
    const [data, setData] = useState([])
    const [selectedRow, setSelectedRow] = useState<any>({});
    const [visible, setVisible] = useState(false);
    const params = useParams();
    const cif = params?.Cif;

    useEffect(() => {
        const fetchCif = async () => {
            try {
                const response = await axios.get(API_ENDPOINTS.GETPRODUKBYCIF(cif));
                setData(response.data);
                console.log(response.data)
            } catch (error) {
                console.error("Error fetching CIF data:", error);
            }
        };
        fetchCif();
    }, [cif]);
    const handleDelete = async (id: string) => {
        try {
            await axios.delete(API_ENDPOINTS.DELETEPRODUKBYID(id));
            setData(data.filter((item: any) => item.id !== id));
            const response = await axios.get(API_ENDPOINTS.GETPRODUKBYCIF(cif));
            setData(response.data);
            // setPaginatedData(response.data.slice(first, first + rows));
        } catch (error) {
            console.error('Error deleting form pengajuan:', error);
        }
    };
    return (
        <div>
            {/* <h3>Data yang dipilih:</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre> */}
            <div className="card">
                <DataTable value={data} tableStyle={{ minWidth: '30rem' }}>
                    <Column field="id" header="ID" />
                    <Column field="Cif" header="CIF" />
                    <Column field="pengajuan" header="Pengajuan" />
                    <Column field="bidang_usaha" header="Bidang Usaha" />
                    <Column field="NomorRekening" header="Nomor Rekening" />
                    {/* <Column field="plafon_kredit" header="Plafon Kredit" />
                    <Column field="tanggal_aplikasi" header="Tanggal Aplikasi" />
                    <Column field="suku_bunga" header="Suku Bunga" />
                    <Column field="tanggal_permohonan" header="Tanggal Permohonan" />
                    <Column field="jangka_waktu" header="Jangka Waktu" /> */}
                    <Column field="sifat_kredit" header="Sifat Kredit" />
                    <Column field="jenis_permohonan" header="Jenis Permohonan" />
                    {/* <Column field="jenis_angsuran" header="Jenis Angsuran" /> */}
                    {/* <Column field="no_aplikasi_sebelumnya" header="No Aplikasi Sebelumnya" /> */}
                    <Column field="tujuan_penggunaan" header="Tujuan Penggunaan" />
                    <Column field="detail_tujuan_penggunaan" header="Detail Tujuan Penggunaan" />
                    <Column header="Analisa Kredit" body={(rowData) => (
                        <Link href={`/admin/debitur/pengajuandebitur/${rowData.Cif}/analisakredit/${rowData.NomorRekening}`} passHref>
                            <Button icon="pi pi-eye" style={{ border: '1', color: '#333' }} className='bg-blue-200' />
                        </Link>
                    )} />
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
                                    <Button label="Yes" icon="pi pi-check" autoFocus onClick={() => { handleDelete(selectedRow.NomorRekening); setVisible(false); }} />
                                </div>
                            </Dialog>
                        </div>
                    )} />
                </DataTable>
                {/* <Paginator
                    first={first}
                    rows={rows}
                    totalRecords={allpemohon.length}
                    rowsPerPageOptions={[5, 10, 20]}
                    onPageChange={onPageChange}
                /> */}
            </div>
        </div>
    )
}

export default Pengajuandebitur