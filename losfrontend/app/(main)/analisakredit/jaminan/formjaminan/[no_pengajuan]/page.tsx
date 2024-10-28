'use client';

import React, { useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { API_ENDPOINTS } from '@/app/api/losbackend/api';
import axios from 'axios';
import { Dialog } from 'primereact/dialog';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import SBIPage from '../../jenis_agunan/SBI/page';
import TabunganDepositoKoperasiYBSPage from '../../jenis_agunan/Tabungan Deposito Koperasi YBS/page';
import TabunganDepositoKoperasiBankLainPage from '../../jenis_agunan/Tabungan Deposito Koperasi Bank Lain/page';
import PerhiasanEmasDanLogamMuliaPage from '../../jenis_agunan/Perhiasan Emas dan Logam Mulia/page';
import KendaraanBermotorPage from '../../jenis_agunan/Kendaraan Bermotor/page';
import TanahDanBangunanPage from '../../jenis_agunan/Tanah dan Bangunan/page';
import TanpaAgunanPage from '../../jenis_agunan/Tanpa Agunan/page';
import PersediaanBarangPage from '../../jenis_agunan/Persediaan Barang/page';
import SertifikatHajiPage from '../../jenis_agunan/Sertifikat Haji/page';



const EditFormJaminan = () => {
    const params = useParams();
    const no_pengajuan = params?.no_pengajuan as string;
    const [visible, setVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [jenisAgunan, setJenisAgunan] = useState<any[]>([]);
    const [jaminanList, setJaminanList] = useState<any[]>([]);
    const router = useRouter();

    useEffect(() => {
        if (no_pengajuan) {
            fetchJaminanData(no_pengajuan);
        }
        fetchOptions();
    }, [no_pengajuan]);

    const fetchJaminanData = async (no_pengajuan: string) => {
        try {
            const response = await axios.get(API_ENDPOINTS.GETJAMINANBYNOPENGAJUAN(no_pengajuan));
            const data = response.data
            setJaminanList(data);
        } catch (error) {
            console.error('Error fetching jaminan data:', error);
        }
    };

    const fetchOptions = async () => {
        try {
            const jenisAgunanRes = await axios.get(API_ENDPOINTS.GETJENISAGUNAN);
            setJenisAgunan(jenisAgunanRes.data);
        } catch (error) {
            console.error('Error fetching options:', error);
        }
    };

    const handleInputChange = (index: number, field: string, value: any) => {
        setJaminanList(prevList => {
            const newList = [...prevList];
            newList[index] = {
                ...newList[index],
                [field]: value
            };
            return newList;
        });
    };

    const handleSpecificFormChange = (index: number, specificFormData: any) => {
        setJaminanList(prevList => {
            const newList = [...prevList];
            if (specificFormData) {
                newList[index] = {
                    ...newList[index],
                    ...specificFormData
                };
            }
            return newList;
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const formattedData = jaminanList.map(item => {
                // Pastikan semua field terisi dengan benar
                const formattedItem = {
                    id: item.id,
                    no_pengajuan: item.no_pengajuan,
                    jenisAgunan: item.jenisAgunan,
                    namaPemilikJaminan: item.namaPemilikJaminan,
                    tanggalPembuatan: item.tanggalPembuatan,
                    nilaiTransaksi: item.nilaiTransaksi,
                    nilaiPasar: item.nilaiPasar,
                    keterangan: item.keterangan,
                    jenis: item.jenis,
                    noRekening: item.noRekening,
                    noBilyet: item.noBilyet, 
                    nominal: item.nominal,
                    atasNama: item.atasNama,
                    alamat: item.alamat
                };

                return formattedItem;
            });
            console.log(formattedData)
            
            const response = await axios.put(API_ENDPOINTS.UPDATEJAMINANBYID(no_pengajuan), formattedData);
            console.log('Response from API:', response.data);
            setIsLoading(false);
            setVisible(true);
        } catch (error) {
            console.error('Error submitting form:', error);
            setIsLoading(false);
        }
    };
    
    return (
        <div className="jaminan-page">
            <div className="surface-card p-4 shadow-2 border-round">
                <form onSubmit={handleSubmit}>
                    {jaminanList.map((jaminan, index) => (
                        <fieldset key={index} className="mb-4 p-4 border-round">
                            <legend className="text-xl font-bold">Jaminan {index + 1}</legend>
                            <div className="grid">
                                <div className="col-12 md:col-6">
                                    <div className="my-2">
                                        <label className="block text-900 font-medium mb-2">Jenis Agunan</label>
                                        <Dropdown
                                            value={jaminan.jenisAgunan}
                                            onChange={(e) => handleInputChange(index, 'jenisAgunan', e.value)}
                                            options={jenisAgunan}
                                            optionLabel="Keterangan"
                                            optionValue="Kode"
                                            className="w-full"
                                        />
                                    </div>
                                    <div className="my-2">
                                        <label className="block text-900 font-medium mb-2">Nama Pemilik Jaminan</label>
                                        <InputText
                                            value={jaminan.namaPemilikJaminan}
                                            onChange={(e) => handleInputChange(index, 'namaPemilikJaminan', e.target.value)}
                                            className="w-full"
                                        />
                                    </div>
                                    <div className="my-2">
                                        <label className="block text-900 font-medium mb-2">Nilai Transaksi</label>
                                        <InputText
                                            value={jaminan.nilaiTransaksi}
                                            onChange={(e) => handleInputChange(index, 'nilaiTransaksi', e.target.value)}
                                            className="w-full"
                                        />
                                    </div>
                                </div>
                                <div className="col-12 md:col-6">
                                    <div className="my-2">
                                        <label className="block text-900 font-medium mb-2">Nilai Pasar</label>
                                        <InputText
                                            value={jaminan.nilaiPasar}
                                            onChange={(e) => handleInputChange(index, 'nilaiPasar', e.target.value)}
                                            className="w-full"
                                        />
                                    </div>
                                    <div className="my-2">
                                        <label className="block text-900 font-medium mb-2">Tanggal Pembuatan</label>
                                        <InputText
                                            type="date"
                                            value={jaminan.tanggalPembuatan}
                                            onChange={(e) => handleInputChange(index, 'tanggalPembuatan', e.target.value)}
                                            className="w-full"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Specific Agunan Forms */}
                            {jaminan.jenisAgunan === 'AG0000001' && <SBIPage onChange={(data) => handleSpecificFormChange(index, data)} defaultValue={{keterangan: jaminan.keterangan}} />}
                            {jaminan.jenisAgunan === 'AG0000002' && <TabunganDepositoKoperasiYBSPage onChange={(data) => handleSpecificFormChange(index, data)} defaultValue={{noRekening: jaminan.noRekening, noBilyet: jaminan.noBilyet, nominal: jaminan.nominal, atasNama: jaminan.atasNama, jenis: jaminan.jenis, alamat: jaminan.alamat, keterangan: jaminan.keterangan}} />}
                            {/* {jaminan.jenisAgunan === 'AG0000003' && <TabunganDepositoKoperasiBankLainPage onChange={(data) => handleSpecificFormChange(index, data)} defaultValue={{noRekening: jaminan.noRekening, noBilyet: jaminan.noBilyet, nominal: jaminan.nominal, atasNama: jaminan.atasNama}} />} */}
                            {/* {jaminan.jenisAgunan === 'AG0000004' && <PerhiasanEmasDanLogamMuliaPage onChange={(data) => handleSpecificFormChange(index, data)} defaultValue={jaminan.keterangan} />} */}
                            {/* {jaminan.jenisAgunan === 'AG0000005' && <KendaraanBermotorPage onChange={(data) => handleSpecificFormChange(index, data)} defaultValue={jaminan.keterangan} />} */}
                            {/* {jaminan.jenisAgunan === 'AG0000006' && <TanahDanBangunanPage onChange={(data) => handleSpecificFormChange(index, data)} defaultValue={{keterangan: jaminan.keterangan, alamat: jaminan.alamat}} />} */}
                            {jaminan.jenisAgunan === 'AG0000007' && <TanpaAgunanPage onChange={(data) => handleSpecificFormChange(index, data)} defaultValue={{keterangan: jaminan.keterangan}} />}
                            {jaminan.jenisAgunan === 'AG0000008' && <PersediaanBarangPage onChange={(data) => handleSpecificFormChange(index, data)} defaultValue={{keterangan: jaminan.keterangan}} />}
                            {jaminan.jenisAgunan === 'AG0000009' && <SertifikatHajiPage onChange={(data) => handleSpecificFormChange(index, data)} defaultValue={{keterangan: jaminan.keterangan}} />}
                            {/* {jaminan.jenisAgunan === 'AG0000002' && <TabunganDepositoKoperasiYBSPage onChange={(data) => handleSpecificFormChange(index, data)} initialData={jaminan.agunan} />}
                            {jaminan.jenisAgunan === 'AG0000003' && <TabunganDepositoKoperasiBankLainPage onChange={(data) => handleSpecificFormChange(index, data)} initialData={jaminan.agunan} />}
                            {jaminan.jenisAgunan === 'AG0000004' && <PerhiasanEmasDanLogamMuliaPage onChange={(data) => handleSpecificFormChange(index, data)} initialData={jaminan.agunan} />}
                            {jaminan.jenisAgunan === 'AG0000005' && <KendaraanBermotorPage onChange={(data) => handleSpecificFormChange(index, data)} initialData={jaminan.agunan} />}
                            {jaminan.jenisAgunan === 'AG0000006' && <TanahDanBangunanPage onChange={(data) => handleSpecificFormChange(index, data)} initialData={jaminan.agunan} />}
                            {jaminan.jenisAgunan === 'AG0000007' && <TanpaAgunanPage onChange={(data) => handleSpecificFormChange(index, data)} initialData={jaminan.agunan} />}
                            {jaminan.jenisAgunan === 'AG0000008' && <PersediaanBarangPage onChange={(data) => handleSpecificFormChange(index, data)} initialData={jaminan.agunan} />}
                            {jaminan.jenisAgunan === 'AG0000009' && <SertifikatHajiPage onChange={(data) => handleSpecificFormChange(index, data)} initialData={jaminan.agunan} />} */}
                        </fieldset>
                    ))}
                    
                    <div className='flex justify-content-end'>
                        <div className='flex gap-4 justify-content-end pt-4'>
                            <Button type="submit" className='text-white bg-[#61AB5B] w-auto' disabled={isLoading}>
                                {isLoading ? (
                                    <div className="flex align-items-center">
                                        <i className="pi pi-spin pi-spinner" style={{ fontSize: "1rem" }}></i>
                                        <label>Loading...</label>
                                    </div>
                                ) : 'Update'}
                            </Button>
                            <Link href="/pengajuan" passHref>
                                <Button type="button" className='p-button-secondary'>Back to List</Button>
                            </Link>

                            <Dialog header="Success" visible={visible} style={{ width: '50vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
                                <p className="m-0">Data berhasil diperbarui</p>
                            </Dialog>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditFormJaminan;
