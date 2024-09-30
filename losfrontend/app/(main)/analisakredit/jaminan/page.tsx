'use client';
import { API_ENDPOINTS } from '@/app/api/losbackend/api';
import axios from 'axios';
import Link from 'next/link';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dialog } from 'primereact/dialog';
import { Paginator } from 'primereact/paginator';
import React, { useContext, useEffect, useRef, useState } from 'react';

const Jaminan = () => {
    const [jaminan, setjaminan] = useState([])
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(5);
    const [paginatedData, setPaginatedData] = useState([]);
    const [selectedRow, setSelectedRow] = useState<any>({});
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const fetchOutAspekForm = async () => {
            try {
                const response = await axios.get(API_ENDPOINTS.GETALLJAMINAN)
                setjaminan(response.data)
                console.log(response.data)
                setPaginatedData(response.data.slice(first, first + rows));
            } catch (error) {
                console.error("There was an error fetching the survey!", error)
            }
        }
        fetchOutAspekForm()
    }, [first, rows])

    const onPageChange = (event: any) => {
        setFirst(event.first);
        setRows(event.rows);
        setPaginatedData(jaminan.slice(event.first, event.first + event.rows));
    };
     const handleDelete = async (id: string) => {
        try {
            await axios.delete(API_ENDPOINTS.DELETEJAMINANBYID(id));
            setjaminan(jaminan.filter((item: any) => item.id !== id));
            const response = await axios.get(API_ENDPOINTS.GETALLJAMINAN);
            setjaminan(response.data);
            setPaginatedData(response.data.slice(first, first + rows));
        } catch (error) {
            console.error('Error deleting form jaminan:', error);
        }
    };
    return (
        <div>
            <div className="card">
                <div className='flex align-items-center justify-content-start mb-2'>
                    <Link href={'/analisakredit/jaminan/formjaminan'} passHref>
                        <Button label='Add' icon="pi pi-plus" style={{ border: '1', color: '#333' }} className='bg-blue-200' />
                    </Link>
                </div>
                <DataTable value={paginatedData} className="p-datatable-sm">
                    <Column field="id" header="ID" />
                    <Column field="NomorRekening" header="Nomor Rekening" />
                    <Column field="ref_jenis_agunan.Keterangan" header="Jenis Agunan" />
                    <Column field="ref_hak_milik.Keterangan" header="Bukti Hak Milik" />
                    <Column field="nilaiTransaksi" header="Nilai Transaksi" />
                    <Column field="ref_hub_pemilik.Keterangan" header="Hubungan Pemilik" />
                    <Column field="ref_jenis_pengikatan.Keterangan" header="Jenis Pengikatan" />
                    <Column field="ref_tipe.Keterangan" header="Tipe" />
                    <Column field="tahunPembuatan" header="Tahun Pembuatan" />
                    <Column header="Edit" body={(rowData) => (
                        <Link href={`/analisakredit/jaminan/formjaminan/${rowData.id}`} passHref>
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
                                    <Button label="Yes" icon="pi pi-check" autoFocus onClick={() => { handleDelete(selectedRow.id); setVisible(false); }} />
                                </div>
                            </Dialog>
                        </div>
                    )} />
                </DataTable>
                <Paginator
                    first={first}
                    rows={rows}
                    totalRecords={jaminan.length}
                    rowsPerPageOptions={[5, 10, 20]}
                    onPageChange={onPageChange}
                />
            </div>
        </div>
    );
};

export default Jaminan;
