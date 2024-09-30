'use client';

import React, { useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { API_ENDPOINTS } from '@/app/api/losbackend/api';
import axios from 'axios';
import SearchRekening from '@/app/(full-page)/component/searchRekening/page';
import { Dialog } from 'primereact/dialog';


const FormJaminan = ({ pengajuan }: { pengajuan: any }) => {
    const [visible, setVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [jenisAgunan, setjenisAgunan] = useState<any>([]);
    const [tipe, setTipe] = useState<any>([]);
    const [hubunganPemilik, setHubunganPemilik] = useState<any>([]);
    const [hakMilik, setHakMilik] = useState<any>([]);
    const [jenisPengikatan, setJenisPengikatan] = useState<any>([]);
    const [formPengajuan] = useState<any>(pengajuan);
    const [formJaminan, setformJaminan] = useState<any>({
        NomorRekening: formPengajuan?.NomorRekening || '',
        jenisAgunan: '',
        merek: '',
        buktiHakMilik: '',
        namaPemilikJaminan: '',
        lokasiAgunan: '',
        nilaiTransaksi: '',
        jenisPengikatan: '',
        tipe: '',
        tahunPembuatan: '',
        noAgunan: '',
        hubunganDenganPemilik: '',
        informasiTambahan: '',
        asuransi: ''
    });
    const resetForm = () => { 
        setformJaminan({
            NomorRekening: formPengajuan?.NomorRekening || '',
            jenisAgunan: '',
            merek: '',
            buktiHakMilik: '',
            namaPemilikJaminan: '',
            lokasiAgunan: '',
            nilaiTransaksi: '',
            jenisPengikatan: '',
            tipe: '',
            tahunPembuatan: '',
            noAgunan: '',
            hubunganDenganPemilik: '',
            informasiTambahan: '',
            asuransi: ''
        });
    };

    useEffect(() => {
        const fetchOptions = async (endpoint: any, setter: any) => {
            try {
                const response = await axios.get(endpoint);
                setter(response.data);
            } catch (error) {
                console.error(`There was an error fetching the ${endpoint}!`, error);
            }
        };
        fetchOptions(API_ENDPOINTS.GETJENISAGUNAN, setjenisAgunan);
        fetchOptions(API_ENDPOINTS.GETTIPE, setTipe);
        fetchOptions(API_ENDPOINTS.GETHAKMILIK, setHakMilik);
        fetchOptions(API_ENDPOINTS.GETJENISPENGIKATAN, setJenisPengikatan);
        fetchOptions(API_ENDPOINTS.GETHUBUNGANPEMILIK, setHubunganPemilik);
    },
        []);
    const options = (data: any) => data.map((item: any, index: any) => ({
        label: item.Keterangan,
        value: item.Kode
    }));
    const JenisAgunanOptions = options(jenisAgunan);
    const TipeOptions = options(tipe);
    const HakMilikOptions = options(hakMilik);
    const HubunganPemilikOptions = options(hubunganPemilik);
    const JenisPengikatanOptions = options(jenisPengikatan);


    const handleInputChange = async (e: any) => {
        setformJaminan((prevData: any) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formJaminan.NomorRekening === "") {
            alert("Nomor Rekening harus diisi!");
            return;
        }
        setIsLoading(true)
        try {
            const response = await axios.post(API_ENDPOINTS.ADDJAMINAN, formJaminan);
            console.log('Response from API:', response.data);
            setIsLoading(false)
            setVisible(true)
            // resetForm();
        } catch (error) {
            console.error('Error submitting form:', error);
            setIsLoading(false)
        }
    };
    const jaminanFields = [
        { label: 'Jenis Agunan', type: 'dropdown', options: ['1', '2'], name: 'jenisAgunan' },
        { label: 'Merek', type: 'input', name: 'merek' },
        { label: 'Bukti Hak Milik', type: 'dropdown', options: ['1', '2'], name: 'buktiHakMilik' },
        { label: 'Nama Pemilik Jaminan', type: 'input', name: 'namaPemilikJaminan' },
        { label: 'Lokasi Agunan', type: 'input', name: 'lokasiAgunan' },
        { label: 'Nilai Transaksi', type: 'input', name: 'nilaiTransaksi' },
        { label: 'Jenis Pengikatan', type: 'dropdown', options: ['1', '2'], name: 'jenisPengikatan' },
        { label: 'Tipe', type: 'dropdown', options: ['1', '2'], name: 'tipe' },
        { label: 'Tahun Pembuatan', type: 'calendar', name: 'tahunPembuatan' },
        { label: 'No. Agunan', type: 'input', name: 'noAgunan' },
        { label: 'Hubungan dengan Pemilik', type: 'dropdown', options: ['1', '2'], name: 'hubunganDenganPemilik' },
        { label: 'Informasi Tambahan', type: 'input', name: 'informasiTambahan' },
        { label: 'Asuransi', type: 'input', name: 'asuransi' }
    ];

    const handleAccountSelect = (account: any) => {
        setformJaminan((prevData: any) => ({
            ...prevData,
            NomorRekening: account.NomorRekening
        }));
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setformJaminan((prevData: any) => ({
            ...prevData,
            NomorRekening: e.target.value
        }));
    };
    return (
        <div className="jaminan-page">
             {/* <SearchRekening 
                onAccountSelect={handleAccountSelect}
                value={formJaminan.NomorRekening}
                onChange={handleSearchChange}
            /> */}
            <div className="surface-card p-4 border-round">
                <form onSubmit={handleSubmit}>
                    <fieldset className="mb-4 p-4 border-round">
                        <legend className="text-xl font-bold">Jaminan</legend>
                        <div className="grid md:justify-content-between">
                            <div className="col-12 md:col-6">
                                {jaminanFields.slice(0, 7).map((field, index) => (
                                    <div className="my-2" key={index}>
                                        <label className="block text-900 font-medium mb-2">{field.label}</label>
                                        {field.type === 'dropdown' && field.name === 'jenisAgunan' && <Dropdown required name={field.name} value={formJaminan[field.name]} onChange={handleInputChange} options={JenisAgunanOptions} placeholder="Pilih Jenis Agunan" className="w-full md:w-full" />}
                                        {field.type === 'dropdown' && field.name === 'buktiHakMilik' && <Dropdown required name={field.name} value={formJaminan[field.name]} onChange={handleInputChange} options={HakMilikOptions} placeholder="Pilih Bukti Hak Milik" className="w-full md:w-full" />}
                                        {field.type === 'dropdown' && field.name === 'jenisPengikatan' && <Dropdown required name={field.name} value={formJaminan[field.name]} onChange={handleInputChange} options={JenisPengikatanOptions} placeholder="Pilih Jenis Pengikatan" className="w-full md:w-full" />}
                                        {field.type === 'input' && <InputText required name={field.name} value={formJaminan[field.name]} onChange={handleInputChange} className="w-full" />}
                                        {field.type === 'calendar' && <InputText required type='date' name={field.name} onChange={handleInputChange} className="w-full" />}
                                    </div>
                                ))}
                            </div>
                            <div className="col-12 md:col-6">
                                {jaminanFields.slice(7).map((field, index) => (
                                    <div className="my-2" key={index}>
                                        <label className="block text-900 font-medium mb-2">{field.label}</label>
                                        {field.type === 'dropdown' && field.name === 'tipe' && <Dropdown required name={field.name} value={formJaminan[field.name]} onChange={handleInputChange} options={TipeOptions} placeholder="Pilih Tipe" className="w-full md:w-full" />}
                                        {field.type === 'dropdown' && field.name === 'hubunganDenganPemilik' && <Dropdown required name={field.name} value={formJaminan[field.name]} onChange={handleInputChange} options={HubunganPemilikOptions} placeholder="Pilih Hubungan dengan Pemilik" className="w-full md:w-full" />}
                                        {field.type === 'input' && <InputText required name={field.name} value={formJaminan[field.name]} onChange={handleInputChange} className="w-full" />}
                                        {field.type === 'calendar' && <InputText required type='date' name={field.name} onChange={handleInputChange} className="w-full" />}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </fieldset>
                    <div className='flex justify-content-end'>
                        <div className='flex gap-4'> {/*Button*/}
                            <Button onClick={resetForm} className=''>Reset</Button>
                            <Button type="submit" className='text-white bg-[#61AB5B] w-auto' disabled={isLoading}>
                                {isLoading ? (
                                    <div className="flex align-items-center">
                                        <i className="pi pi-spin pi-spinner" style={{ fontSize: "1rem" }}></i>
                                        <label>Loading...</label>
                                    </div>
                                ) : (
                                    'Kirim'
                                )}</Button>
                            <Dialog header="Success" visible={visible} style={{ width: '50vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
                                <p className="m-0">
                                    Terima Kasih telah mengisi form
                                </p>
                            </Dialog>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormJaminan;
