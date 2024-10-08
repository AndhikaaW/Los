'use client'
import { API_ENDPOINTS } from '@/app/api/losbackend/api'
import axios from 'axios'
import Link from 'next/link'
import { Button } from 'primereact/button'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { Dropdown } from 'primereact/dropdown'
import { ProgressSpinner } from 'primereact/progressspinner'
import React, { useEffect, useState } from 'react'

const PengajuanApprovel = () => {
    const [allproduk, setAllproduk] = useState([]);
    const [loading, setLoading] = useState(false);
    const formatDate = (dateString: any) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${day}-${month}-${year}`;
    };
    useEffect(() => {
        const fetchAllProduk = async () => {
            setLoading(true);
            try {
                const response = await axios.get(API_ENDPOINTS.GETALLPRODUK);
                const formattedData = response.data.map((item: any) => ({
                    ...item,
                    tanggal_aplikasi: formatDate(item.tanggal_aplikasi),
                    tanggal_permohonan: formatDate(item.tanggal_permohonan)
                }));
                setAllproduk(formattedData);
            } catch (error) {
                console.error('There was an error fetching the users!', error);
            } finally {
                setLoading(false);
            }
        };
        fetchAllProduk();
    }, []);
    const statusTemplate = (rowData: any) => {
        const statusOptions = [
            { label: 'Belum Diajukan', value: 0, className: 'p-1 bg-yellow-200 border-round border-none' },
            { label: 'Diajukan', value: 1, className: 'p-1 bg-green-200 border-round border-none' },
            { label: 'Disetujui', value: 2, className: 'p-1 bg-blue-200 border-round border-none' },
            { label: 'Ditolak', value: 3, className: 'p-1 bg-red-200 border-round border-none' },
            { label: 'Tidak Diketahui', value: 4, className: 'p-1 bg-gray-200 border-round border-none' }
        ];
        const handleChange = async (e: any) => {
            const newStatus = e.target.value;
            await handleUpdateStatus(newStatus, rowData.no_pengajuan);
        };
        return (
            <select value={rowData.status} onChange={handleChange} className={statusOptions.find(option => option.value === rowData.status)?.className}>
                {statusOptions.map(option => (
                    <option key={option.value} value={option.value} className={option.className}>
                        {option.label}
                    </option>
                ))}
            </select>
        );
    };

    const handleUpdateStatus = async (status: number, no_pengajuan: string) => {
        try {
            await axios.put(API_ENDPOINTS.UPDATESTATUSPENGAJUANBYID(no_pengajuan), { status: status });
            const response = await axios.get(API_ENDPOINTS.GETALLPRODUK);
            setAllproduk(response.data);
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    console.log(allproduk);

    const [filteredProduk, setFilteredProduk] = useState(allproduk);
    const [selectedStatus, setSelectedStatus] = useState(null);
    const statusOptions = [
        { label: 'Semua', value: null },
        { label: 'Belum Diajukan', value: 0 },
        { label: 'Diajukan', value: 1 },
        { label: 'Disetujui', value: 2 },
        { label: 'Ditolak', value: 3 },
        { label: 'Tidak Diketahui', value: 4 }
    ];
    useEffect(() => {
        const filterProduk = allproduk.filter((item: any) => {
            if (selectedStatus === null) return true;
            return item.status === selectedStatus;
        });
        setFilteredProduk(filterProduk);
    }, [selectedStatus, allproduk]);

    return (
        <div>
            <div className="card">
                <div className="p-input-icon-right flex justify-content-end mb-3">
                    <i className="pi pi-filter" />
                    <Dropdown value={selectedStatus} options={statusOptions} onChange={(e) => setSelectedStatus(e.value)} placeholder="Filter by Status" />
                </div>
                <DataTable value={filteredProduk} tableStyle={{ minWidth: '30rem' }} paginator rows={5} rowsPerPageOptions={[5, 10, 20]}>
                    <Column field="no_pengajuan" header="No Pengajuan" />
                    <Column field="Cif" header="CIF" />
                    <Column field="pengajuan" header="Pengajuan" />
                    <Column field="ref_bidang_usaha.Keterangan" header="Bidang Usaha" />
                    <Column field="ref_sifat_kredit.Keterangan" header="Sifat Kredit" />
                    <Column field="ref_jenis_permohonan.Keterangan" header="Jenis Permohonan" />
                    <Column field="ref_jenis_angsuran.Keterangan" header="Jenis Angsuran" />
                    <Column field="tujuan_penggunaan" header="Tujuan Penggunaan" />
                    <Column field="detail_tujuan_penggunaan" header="Detail Tujuan Penggunaan" />
                    <Column field="status" header="Status Pengajuan" body={statusTemplate} />
                    <Column header="Analisa Kredit" body={(rowData) => (
                        <Link href={`/admin/debitur/pengajuandebitur/${rowData.Cif}/analisakredit/${rowData.no_pengajuan}`} passHref>
                            <Button icon="pi pi-eye" style={{ border: '1', color: '#333' }} className='bg-blue-200' />
                        </Link>
                    )} />
                </DataTable>
                {loading && <div className='flex align-items-center justify-content-center'>
                    <ProgressSpinner style={{ width: '4rem', height: '4rem' }} />
                </div>}
            </div>
        </div>
    )
}

export default PengajuanApprovel