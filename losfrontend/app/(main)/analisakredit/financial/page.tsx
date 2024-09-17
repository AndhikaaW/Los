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

const Financial = () => {
    const [financial, setfinancial] = useState([])
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(5);
    const [paginatedData, setPaginatedData] = useState([]);
    const [selectedRow, setSelectedRow] = useState<any>({});
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const fetchOutAspekForm = async () => {
            try {
                const response = await axios.get(API_ENDPOINTS.GETALLFINANCIAL)
                setfinancial(response.data)
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
        setPaginatedData(financial.slice(event.first, event.first + event.rows));
    };
    const handleDelete = async (id: string) => {
        try {
            await axios.delete(API_ENDPOINTS.DELETEFINANCIALBYID(id));
            setfinancial(financial.filter((item: any) => item.id !== id));
            const response = await axios.get(API_ENDPOINTS.GETALLFINANCIAL);
            setfinancial(response.data);
            setPaginatedData(response.data.slice(first, first + rows));
        } catch (error) {
            console.error('Error deleting form 5C:', error);
        }
    };
    return (
        <div>
            <div className="card">
                <div className='flex align-items-center justify-content-start mb-2'>
                    {/* <Button label='Add' icon="pi pi-plus" onClick={() => setVisibleadd(true)} style={{ border: '1', color: '#333' }} className='bg-blue-200' /> */}
                    <Link href={'/analisakredit/financial/formfinancial'} passHref>
                        <Button label='Add' icon="pi pi-plus" style={{ border: '1', color: '#333' }} className='bg-blue-200' />
                    </Link>
                </div>
                <DataTable value={paginatedData} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="id" header="ID" />
                    <Column field="NomorRekening" header="Nomor Rekening" />
                    <Column field="oms_ramai" header="OMS Ramai" />
                    <Column field="oms_normal" header="OMS Normal" />
                    <Column field="oms_sepi" header="OMS Sepi" />
                    <Column field="hrg_pokok_jual" header="Harga Pokok Jual" />
                    <Column field="btk_tdklangsung" header="Biaya Tidak Langsung" />
                    <Column field="ohc" header="OHC" />
                    <Column field="b_usahalainnya" header="Biaya Usaha Lainnya" />
                    <Column field="b_rumahtangga" header="Biaya Rumah Tangga" />
                    <Column field="b_sekolah" header="Biaya Sekolah" />
                    <Column field="b_pln_pdam" header="Biaya PLN/PDAM" />
                    <Column field="b_transport_komunikasi" header="Biaya Transport/Komunikasi" />
                    <Column field="b_lain_lain" header="Biaya Lain-Lain" />
                    <Column field="p_lainnya" header="Pendapatan Lainnya" />
                    <Column field="b_Lainnya" header="Biaya Lainnya" />
                    <Column field="bukti_pendapatan" header="Bukti Pendapatan" />
                    <Column field="bukti_biaya" header="Bukti Biaya" />
                    <Column field="bank_nonbank" header="Bank/Non-Bank" />
                    <Column field="koperasi" header="Koperasi" />
                    <Column field="lainLain" header="Lain-Lain" />
                    <Column field="angsuran_baru" header="Angsuran Baru" />
                    <Column field="kas" header="Kas" />
                    <Column field="bank" header="Bank" />
                    <Column field="piutang" header="Piutang" />
                    <Column field="persediaan_barang" header="Persediaan Barang" />
                    <Column field="atv_lancar_lainnya" header="Aktiva Lancar Lainnya" />
                    <Column field="sub_atv_lancar" header="Sub Aktiva Lancar" />
                    <Column field="tanah_bangunan" header="Tanah Bangunan" />
                    <Column field="peralatan_usaha" header="Peralatan Usaha" />
                    <Column field="kendaraan" header="Kendaraan" />
                    <Column field="atv_tetap_lainnya" header="Aktiva Tetap Lainnya" />
                    <Column field="sub_atv_tetap" header="Sub Aktiva Tetap" />
                    <Column field="jumlah_atv" header="Jumlah Aktiva" />
                    <Column field="tot_bdp_jangka_pendek" header="Total BDP Jangka Pendek" />
                    <Column field="idr_jangka_pendek" header="IDR Jangka Pendek" />
                    <Column field="jangka_pendek" header="Jangka Pendek" />
                    <Column field="tot_bdp_jangka_panjang" header="Total BDP Jangka Panjang" />
                    <Column field="idr_jangka_panjang" header="IDR Jangka Panjang" />
                    <Column field="jangka_panjang" header="Jangka Panjang" />
                    <Column field="sub_jumlah_hutang" header="Sub Jumlah Hutang" />
                    <Column field="modal_sendiri" header="Modal Sendiri" />
                    <Column field="laba" header="Laba" />
                    <Column field="sub_jumlah_modal" header="Sub Jumlah Modal" />
                    <Column field="jumlah_passiva" header="Jumlah Passiva" />
                    <Column header="Edit" body={(rowData) => (
                        <Link href={`/analisakredit/financial/formfinancial/${rowData.id}`} passHref>
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
                    totalRecords={financial.length}
                    rowsPerPageOptions={[5, 10, 20]}
                    onPageChange={onPageChange}
                />
            </div>
        </div>
    );
};

export default Financial;
