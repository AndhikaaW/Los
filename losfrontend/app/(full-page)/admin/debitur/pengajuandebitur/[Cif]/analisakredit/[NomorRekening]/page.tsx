"use client"
import { API_ENDPOINTS } from '@/app/api/losbackend/api';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Paginator } from 'primereact/paginator';
import React, { useEffect, useState } from 'react'

const Analisakredit = () => {
    const [jaminan, setJaminan] = useState<any>(null);
    const [finansial, setFinansial] = useState<any>(null);
    const [survey, setSurvey] = useState<any>(null);
    const [aspek, setAspek] = useState<any>(null);
    const [limaC, setLimaC] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const params = useParams();
    const nomorRekening = params?.NomorRekening;

    //finansial
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(API_ENDPOINTS.GETFINANCIALBYNOMORREKENING(nomorRekening));
                setFinansial(response.data);
                console.log(response.data);
            } catch (error: any) {
                console.error("Error fetching data:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        
        if (nomorRekening) {
            fetchData();
        }
    }, [nomorRekening]);

    //aspek
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(API_ENDPOINTS.GETASPEKBYNOMORREKENING(nomorRekening));
                console.log(response.data);
                setAspek(response.data);
            } catch (error: any) {
                console.error("Error fetching data:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        
        if (nomorRekening) {
            fetchData();
        }
    }, [nomorRekening]);

    //jaminan
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(API_ENDPOINTS.GETJAMINANBYNOMORREKENING(nomorRekening));
                console.log(response.data);
                setJaminan(response.data);
            } catch (error: any) {
                console.error("Error fetching data:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        
        if (nomorRekening) {
            fetchData();
        }
    }, [nomorRekening]);

    //survey
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(API_ENDPOINTS.GETALLSURVEYBYNOMORREKENING(nomorRekening));
                console.log(response.data);
                setSurvey(response.data);
            } catch (error: any) {    
                console.error("Error fetching data:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        
        if (nomorRekening) {
            fetchData();
        }
    }, [nomorRekening]);
   
    //5C
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(API_ENDPOINTS.GETLIMACBYNOMORREKENING(nomorRekening));
                console.log(response.data);
                setLimaC(response.data);
            } catch (error: any) {    
                console.error("Error fetching data:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        
        if (nomorRekening) {
            fetchData();
        }
    }, [nomorRekening]);
    

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!finansial) return <div>No data available</div>;
    if (!aspek) return <div>No data available</div>;
    if (!limaC) return <div>No data available</div>;
    if (!survey) return <div>No data available</div>;
    if (!jaminan) return <div>No data available</div>;

    return (
        <div>
            <div className="card">
                <header>
                    <h4>Jaminan</h4>
                </header>
                <DataTable value={jaminan} tableStyle={{ minWidth: '30rem' }}>
                    {/* <Column field="id" header="ID" /> */}
                    <Column field="NomorRekening" header="Nomor Rekening" />
                    <Column field="jenisAgunan" header="Jenis Agunan" />
                    <Column field="buktiHakMilik" header="Bukti Hak Milik" />
                    <Column field="nilaiTransaksi" header="Nilai Transaksi" />
                    <Column field="jenisPengikatan" header="Jenis Pengikatan" />
                    <Column field="asuransi" header="Asuransi" />
                    <Column field="tahunPembuatan" header="Tahun Pembuatan" />
                </DataTable>
                <header className='mt-5'>
                    <h4>Finansial</h4>
                </header>
                <DataTable value={finansial} tableStyle={{ minWidth: '30rem' }}>
                    {/* <Column field="id" header="ID" /> */}
                    <Column field="NomorRekening" header="Nomor Rekening" />
                    <Column field="oms_ramai" header="OMS Ramai" />
                    <Column field="oms_normal" header="OMS Normal" />
                    <Column field="oms_sepi" header="OMS Sepi" />
                    <Column field="hrg_pokok_jual" header="Harga Pokok Jual" />
                    <Column field="btk_tdklangsung" header="BTK Tidak Langsung" />
                    <Column field="jumlah_passiva" header="Jumlah Passiva" />
                </DataTable>
                <header className='mt-5'>
                    <h4>Survey</h4>
                </header>
                <DataTable value={survey} tableStyle={{ minWidth: '30rem' }}>
                    {/* <Column field="id" header="ID" /> */}
                    <Column field="NomorRekening" header="Nomor Rekening" />
                    <Column field="title" header="Judul" />
                    <Column field="Pilihan" header="Pilihan" />
                </DataTable>
                <header className='mt-5'>
                    <h4>Aspek</h4>
                </header>
                <DataTable value={aspek} tableStyle={{ minWidth: '30rem' }}>
                    {/* <Column field="id" header="ID" /> */}
                    <Column field="NomorRekening" header="Nomor Rekening" />
                    <Column field="title_aspek" header="Aspek" />
                    <Column field="jawaban" header="Deskripsi" />
                </DataTable>
                <header className='mt-5'>
                    <h4>5C</h4>
                </header>
                <DataTable value={limaC} tableStyle={{ minWidth: '30rem' }}>
                    {/* <Column field="id" header="ID" /> */}
                    <Column field="NomorRekening" header="Nomor Rekening" />
                    <Column field="characters" header="Characters" />
                    <Column field="capacity" header="Capacity" />
                    <Column field="capital" header="Capital" />
                    <Column field="collateral" header="Collateral" />
                    <Column field="conditions" header="Conditions" />
                </DataTable>
            </div>
        </div>
    )
}

export default Analisakredit