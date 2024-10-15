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
import React, { useEffect, useMemo, useState } from 'react'

const Analisakredit = () => {
    const [pengajuan, setPengajuan] = useState<any>([]);
    const [jaminan, setJaminan] = useState<any>(null);
    const [finansial, setFinansial] = useState<any>(null);
    const [survey, setSurvey] = useState<any>(null);
    const [aspek, setAspek] = useState<any>(null);
    const [limaC, setLimaC] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [selectedRowJaminan, setSelectedRowJaminan] = useState<any>({});
    const [visibleJaminan, setVisibleJaminan] = useState(false);
    const [selectedRowFinansial, setSelectedRowFinansial] = useState<any>({});
    const [visibleFinansial, setVisibleFinansial] = useState(false);
    const [selectedRowSurvey, setSelectedRowSurvey] = useState<any>({});
    const [visibleSurvey, setVisibleSurvey] = useState(false);
    const [selectedRowAspek, setSelectedRowAspek] = useState<any>({});
    const [visibleAspek, setVisibleAspek] = useState(false);
    const [selectedRowLimaC, setSelectedRowLimaC] = useState<any>({});
    const [visibleLimaC, setVisibleLimaC] = useState(false);
    const params = useParams();
    const noPengajuan = params?.no_pengajuan;

    let groupedDataAspek: any = {};
    let groupedDataSurvey: any = {};
    if (aspek) {
        groupedDataAspek = aspek.reduce((acc: any, curr: any) => {
            if (!acc[curr.no_pengajuan]) {
                acc[curr.no_pengajuan] = { no_pengajuan: curr.no_pengajuan, aspekData: [] };
            }
            acc[curr.no_pengajuan].aspekData.push({ Keterangan: curr.Keterangan, jawaban: curr.jawaban });
            return acc;
        }, {});
    }

    if (survey) {
        groupedDataSurvey = survey.reduce((acc: any, curr: any) => {
            if (!acc[curr.no_pengajuan]) {
                acc[curr.no_pengajuan] = { no_pengajuan: curr.no_pengajuan, surveyData: [] };
            }
            acc[curr.no_pengajuan].surveyData.push({ Keterangan: curr.Keterangan, Pilihan: curr.Pilihan });
            return acc;
        }, {});
    }

    useEffect(() => {
        setLoading(true);
        const fetchData = async (endpoint: any, setter: any) => {
            try {
                setLoading(true);
                const response = await axios.get(endpoint(noPengajuan));
                setter(response.data);
                // console.log(response.data);
            } catch (error: any) {
                console.error("Error fetching data:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        if (noPengajuan) {
            fetchData(API_ENDPOINTS.GETFINANCIALBYNOPENGAJUAN, setFinansial);
            fetchData(API_ENDPOINTS.GETASPEKBYNOPENGAJUAN, setAspek);
            fetchData(API_ENDPOINTS.GETJAMINANBYNOPENGAJUAN, setJaminan);
            fetchData(API_ENDPOINTS.GETSURVEYBYNOPENGAJUAN, setSurvey);
            fetchData(API_ENDPOINTS.GETLIMACBYNOPENGAJUAN, setLimaC);
        }
    }, [noPengajuan]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(API_ENDPOINTS.GETPRODUKBYID(noPengajuan));
                setPengajuan(response.data);
                // console.log(response.data)
            } catch (error) {
                console.error("Error fetching CIF data:", error);
            }
        };
        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!finansial) return <div>No data available</div>;
    if (!aspek) return <div>No data available</div>;
    if (!limaC) return <div>No data available</div>;
    if (!survey) return <div>No data available</div>;
    if (!jaminan) return <div>No data available</div>;
    const handleDelete = async (no_pengajuan: string, setData: React.Dispatch<React.SetStateAction<any>>, endpoint: (no_pengajuan: string) => string) => {
        try {
            await axios.delete(endpoint(no_pengajuan));
            setData((data: any) => data.filter((item: any) => item.no_pengajuan !== no_pengajuan));
        } catch (error) {
            console.error(`Error deleting form: ${error}`);
        }
    };
    const handleDeleteJaminan = (no_pengajuan: string) => handleDelete(no_pengajuan, setJaminan, API_ENDPOINTS.DELETEJAMINANBYID);
    const handleDeleteFinansial = (no_pengajuan: string) => handleDelete(no_pengajuan, setFinansial, API_ENDPOINTS.DELETEFINANCIALBYID);
    const handleDeleteLimaC = (no_pengajuan: string) => handleDelete(no_pengajuan, setLimaC, API_ENDPOINTS.DELETELIMACBYID);
    const handleDeleteAspek = (no_pengajuan: string) => handleDelete(no_pengajuan, setAspek, API_ENDPOINTS.DELETEASPEKBYID);
    const handleDeleteSurvey = (no_pengajuan: string) => handleDelete(no_pengajuan, setSurvey, API_ENDPOINTS.DELETESURVEYBYID);

    const editTemplate = (rowData: any, path: string) => {

        if (pengajuan.status === 0) {
            return (
                <Link href={`/analisakredit/${path}/form${path}/${rowData.no_pengajuan}`} passHref>
                    <Button icon="pi pi-pencil" style={{ border: '1', color: '#333' }} className='bg-blue-200' />
                </Link>
            );
        }
        return null;
    };

    const deleteTemplate = (rowData: any, handleDelete: (no_pengajuan: string) => void, selectedRow: any, setSelectedRow: React.Dispatch<React.SetStateAction<any>>, visible: boolean, setVisible: React.Dispatch<React.SetStateAction<boolean>>) => {
        if (pengajuan.status === 0) {
            return (
                <div className='flex justify-content-center'>
                    <Button icon="pi pi-trash" style={{ border: '1', color: '#333' }} className='bg-red-200' onClick={() => {
                        setSelectedRow(rowData);
                        setVisible(true);
                    }} />
                    <Dialog header={`Hapus Data ${selectedRow.no_pengajuan}`} visible={visible} style={{ width: '50vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
                        <label htmlFor="">Apakah anda yakin ingin menghapus data ini?</label>
                        <div className='flex justify-content-end mt-3'>
                            <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
                            <Button label="Yes" icon="pi pi-check" autoFocus onClick={() => { handleDelete(selectedRow.no_pengajuan); setVisible(false); }} />
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
                <header>
                    <h4>Jaminan</h4>
                </header>
                <DataTable value={jaminan} tableStyle={{ minWidth: '30rem' }}>
                    <Column field="no_pengajuan" header="No Pengajuan" />
                    <Column field="ref_jenis_agunan.Keterangan" header="Jenis Agunan" />
                    <Column field="ref_hak_milik.Keterangan" header="Bukti Hak Milik" />
                    <Column field="nilaiTransaksi" header="Nilai Transaksi" />
                    <Column field="ref_hub_pemilik.Keterangan" header="Hubungan Pemilik" />
                    <Column field="ref_jenis_pengikatan.Keterangan" header="Jenis Pengikatan" />
                    <Column field="ref_tipe.Keterangan" header="Tipe" />
                    <Column field="tahunPembuatan" header="Tahun Pembuatan" />
                    {pengajuan.status === 0 && (
                        <Column header="Edit" body={(rowData) => editTemplate(rowData, 'jaminan')} />
                    )}
                    {pengajuan.status === 0 && (
                        <Column header="Delete" body={(rowData) => deleteTemplate(rowData, handleDeleteJaminan, selectedRowJaminan, setSelectedRowJaminan, visibleJaminan, setVisibleJaminan)} />
                    )}
                    {!jaminan && (
                        <>
                            {pengajuan.status === 0 && (
                                <Column header="Edit" body={(rowData) => editTemplate(rowData, 'jaminan')} />
                            )}
                            {pengajuan.status === 0 && (
                                <Column header="Delete" body={(rowData) => deleteTemplate(rowData, handleDeleteJaminan, selectedRowJaminan, setSelectedRowJaminan, visibleJaminan, setVisibleJaminan)} />
                            )}
                        </>
                    )}
                </DataTable>
                <header className='mt-5'>
                    <h4>Finansial</h4>
                </header>
                <DataTable value={finansial} tableStyle={{ minWidth: '30rem' }}>
                    {/* <Column field="id" header="ID" /> */}
                    <Column field="no_pengajuan" header="No Pengajuan" />
                    <Column field="oms_ramai" header="OMS Ramai" />
                    <Column field="oms_normal" header="OMS Normal" />
                    <Column field="oms_sepi" header="OMS Sepi" />
                    <Column field="hrg_pokok_jual" header="Harga Pokok Jual" />
                    <Column field="btk_tdklangsung" header="BTK Tidak Langsung" />
                    <Column field="jumlah_passiva" header="Jumlah Passiva" />
                    {pengajuan.status === 0 && (
                        <Column header="Edit" body={(rowData) => editTemplate(rowData, 'financial')} />
                    )}
                    {pengajuan.status === 0 && (
                        <Column header="Delete" body={(rowData) => deleteTemplate(rowData, handleDeleteFinansial, selectedRowFinansial, setSelectedRowFinansial, visibleFinansial, setVisibleFinansial)} />
                    )}
                    {!finansial && (
                        <>
                            {pengajuan.status === 0 && (
                                <Column header="Edit" body={(rowData) => editTemplate(rowData, 'financial')} />
                            )}
                            {pengajuan.status === 0 && (
                                <Column header="Delete" body={(rowData) => deleteTemplate(rowData, handleDeleteFinansial, selectedRowFinansial, setSelectedRowFinansial, visibleFinansial, setVisibleFinansial)} />
                            )}
                        </>
                    )}
                </DataTable>
                <header className='mt-5'>
                    <h4>Survey</h4>
                </header>
                <DataTable value={Object.values(groupedDataSurvey).map((data: any) => ({
                    ...data,
                    surveyData: data.surveyData.map((survey: any) => ({
                        ...survey,
                        detail: (
                            <div>
                                <div> <strong>{survey.Keterangan}</strong></div>
                                <div className='mt-2'>{survey.Pilihan}</div>
                            </div>
                        )
                    }))
                }))} tableStyle={{ minWidth: '30rem' }}>
                    <Column field="no_pengajuan" header="No Pengajuan" style={{ width: '20%' }} />
                    <Column header="Survey" body={(rowData) => (
                        <div className='flex flex-column gap-2'>
                            {rowData.surveyData.map((survey: any, index: number) => (
                                <div key={index}>
                                    {survey.detail}
                                </div>
                            ))}
                        </div>
                    )} />
                    {pengajuan.status === 0 && (
                        <Column style={{ width: '5%' }} header="Edit" body={(rowData) => editTemplate(rowData, 'survey')} />
                    )}
                    {pengajuan.status === 0 && (
                        <Column style={{ width: '5%' }} header="Delete" body={(rowData) => deleteTemplate(rowData, handleDeleteSurvey, selectedRowSurvey, setSelectedRowSurvey, visibleSurvey, setVisibleSurvey)} />
                    )}
                    {!survey && (
                        <>
                            {pengajuan.status === 0 && (
                                <Column style={{ width: '5%' }} header="Edit" body={(rowData) => editTemplate(rowData, 'survey')} />
                            )}
                            {pengajuan.status === 0 && (
                                <Column style={{ width: '5%' }} header="Delete" body={(rowData) => deleteTemplate(rowData, handleDeleteSurvey, selectedRowSurvey, setSelectedRowSurvey, visibleSurvey, setVisibleSurvey)} />
                            )}
                        </>
                    )}
                </DataTable>
                <header className='mt-5'>
                    <h4>Aspek</h4>
                </header>
                <DataTable value={Object.values(groupedDataAspek).map((data: any) => ({
                    ...data,
                    aspekData: data.aspekData.map((aspek: any) => ({
                        ...aspek,
                        detail: (
                            <div>
                                <div><strong>{aspek.Keterangan ? aspek.Keterangan : 'Resiko dan Mitigasi'}</strong></div>
                                <div className='mt-2'>{aspek.jawaban}</div>
                            </div>
                        )
                    }))
                }))} tableStyle={{ minWidth: '30rem' }}>
                    <Column field="no_pengajuan" header="No Pengajuan" style={{ width: '20%' }} />
                    <Column header="Aspek" body={(rowData) => (
                        <div className='flex flex-column gap-2'>
                            {rowData.aspekData.map((aspek: any, index: number) => (
                                <div key={index}>
                                    {aspek.detail}
                                </div>
                            ))}
                        </div>
                    )} />
                    {pengajuan.status === 0 && (
                        <Column style={{ width: '5%' }} header="Edit" body={(rowData) => editTemplate(rowData, 'aspek')} />
                    )}
                    {pengajuan.status === 0 && (
                        <Column style={{ width: '5%' }} header="Delete" body={(rowData) => deleteTemplate(rowData, handleDeleteAspek, selectedRowAspek, setSelectedRowAspek, visibleAspek, setVisibleAspek)} />
                    )}
                    {!aspek && (
                        <>
                            {pengajuan.status === 0 && (
                                <Column style={{ width: '5%' }} header="Edit" body={(rowData) => editTemplate(rowData, 'aspek')} />
                            )}
                            {pengajuan.status === 0 && (
                                <Column style={{ width: '5%' }} header="Delete" body={(rowData) => deleteTemplate(rowData, handleDeleteAspek, selectedRowAspek, setSelectedRowAspek, visibleAspek, setVisibleAspek)} />
                            )}
                        </>
                    )}
                </DataTable>
                <header className='mt-5'>
                    <h4>5C</h4>
                </header>
                <DataTable value={limaC} tableStyle={{ minWidth: '30rem' }}>
                    {/* <Column field="id" header="ID" /> */}
                    <Column field="no_pengajuan" header="No Pengajuan" />
                    <Column field="characters" header="Characters" />
                    <Column field="capacity" header="Capacity" />
                    <Column field="capital" header="Capital" />
                    <Column field="collateral" header="Collateral" />
                    <Column field="conditions" header="Conditions" />

                    {pengajuan.status === 0 && (
                        <Column style={{ width: '5%' }} header="Edit" body={(rowData) => editTemplate(rowData, 'limaC')} />
                    )}
                    {pengajuan.status === 0 && (
                        <Column style={{ width: '5%' }} header="Delete" body={(rowData) => deleteTemplate(rowData, handleDeleteLimaC, selectedRowLimaC, setSelectedRowLimaC, visibleLimaC, setVisibleLimaC)} />
                    )}
                    {!limaC && (
                        <>
                            {pengajuan.status === 0 && (
                                <Column style={{ width: '5%' }} header="Edit" body={(rowData) => editTemplate(rowData, 'limaC')} />
                            )}
                            {pengajuan.status === 0 && (
                                <Column style={{ width: '5%' }} header="Delete" body={(rowData) => deleteTemplate(rowData, handleDeleteLimaC, selectedRowLimaC, setSelectedRowLimaC, visibleLimaC, setVisibleLimaC)} />
                            )}
                        </>
                    )}
                </DataTable>
            </div>
        </div>
    )
}

export default Analisakredit