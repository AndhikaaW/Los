"use client"
import { API_ENDPOINTS } from '@/app/api/losbackend/api';
import axios from 'axios';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { Router } from 'next/router';
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
    const router = useRouter();

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
        } catch (error) {
            console.error('Error deleting form pengajuan:', error);
        }
    };
    const handleUpdateStatus = async (status: number, no_pengajuan: string) => {
        try {
            await axios.put(API_ENDPOINTS.UPDATESTATUSPENGAJUANBYID(no_pengajuan), { status: status });
            const response = await axios.get(API_ENDPOINTS.GETPRODUKBYCIF(cif));
            setData(response.data);
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
            {/* <h3>Data yang dipilih:</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre> */}
            <div className="card">
                <DataTable value={data} tableStyle={{ minWidth: '30rem' }}
                    paginator rows={5} rowsPerPageOptions={[5, 10, 20]}
                    className='cursor-pointer'
                    rowClassName={() => `hover:bg-gray-100`}
                    onRowClick={(e) => { router.push(`/admin/debitur/pengajuandebitur/${e.data.Cif}/analisakredit/${e.data.no_pengajuan}`); }}>
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
                    {/* <Column header="Analisa Kredit" body={(rowData) => (
                        <Link href={`/admin/debitur/pengajuandebitur/${rowData.Cif}/analisakredit/${rowData.no_pengajuan}`} passHref>
                            <Button icon="pi pi-eye" style={{ border: '1', color: '#333' }} className='bg-blue-200' />
                        </Link>
                    )} /> */}
                    {data.some((row: any) => row.status === 0) && (
                        <Column header="Edit" body={editTemplate} />
                    )}
                    {data.some((row: any) => row.status === 0) && (
                        <Column header="Delete" body={deleteTemplate} />
                    )}
                </DataTable>
            </div>
        </div>
    )
}

export default Pengajuandebitur