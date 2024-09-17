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

interface JenisAgunan {
    id: number,
    Kode: string,
    Keterangan: string
}
const FormJaminan = () => {
    const [visible, setVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [jenisAgunan, setjenisAgunan] = useState<JenisAgunan[]>([]);
    const [formJaminan, setformJaminan] = useState<{
        [key: string]: string;
    }>({
        NomorRekening: '',
        jenisAgunan: 'tanah',
        merek: 'tanah',
        buktiHakMilik: 'tanah',
        namaPemilikJaminan: 'tanah',
        lokasiAgunan: 'tanah',
        nilaiTransaksi: 'tanah',
        jenisPengikatan: 'tanah',
        tipe: 'tanah',
        tahunPembuatan: 'tanah',
        noAgunan: 'tanah',
        hubunganDenganPemilik: 'tanah',
        informasiTambahan: 'tanah',
        asuransi: 'tanah'
    });
    useEffect(() => {
        const fetchSifatKredit = async () => {
            try {
                const response = await axios.get(API_ENDPOINTS.GETJENISAGUNAN);
                setjenisAgunan(response.data);
            } catch (error) {
                console.error('There was an error fetching the users!', error);
            } finally {
                // setIsLoading(false);
            }
        };
        fetchSifatKredit();
    }, []);

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setformJaminan({ ...formJaminan, [name]: value });
    };

    const validateForm = () => {
        for (const [key, value] of Object.entries(formJaminan)) {
            if (!value) {
                window.alert(`${key.charAt(0).toUpperCase() + key.slice(1)} tidak boleh kosong!`);
                return false;
            }
        }
        return true;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true)
        try {
            const response = await axios.post(API_ENDPOINTS.ADDJAMINAN, formJaminan);
            console.log('Response from API:', response.data);
            setIsLoading(false)
            setVisible(true)
        } catch (error) {
            console.error('Error submitting form:', error);
            setIsLoading(false)
        }
    };

 
    const handleReset = () => {
        setformJaminan({
            NomorRekening: '',
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
    const JenisAgunanOptions = jenisAgunan.map((item, index) => ({
        label: item.Keterangan,
        value: item.Keterangan
    }));
    const handleAccountSelect = (account: any) => {
        setformJaminan(prevData => ({
            ...prevData,
            NomorRekening: account.NomorRekening
        }));
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setformJaminan(prevData => ({
            ...prevData,
            NomorRekening: e.target.value
        }));
    };

    return (
        <div className="jaminan-page">
            <div className="surface-card p-4 shadow-2 border-round">
                <SearchRekening
                    onAccountSelect={handleAccountSelect}
                    value={formJaminan.NomorRekening}
                    onChange={handleSearchChange}
                />
                <form onSubmit={handleSubmit}>
                    <fieldset className="mb-4 p-4 border-round">
                        <legend className="text-xl font-bold">Jaminan</legend>
                        <div className="grid md:justify-content-between">
                            <div className="col-12 md:col-6">
                                {jaminanFields.slice(0, 7).map((field, index) => (
                                    <div className="my-2" key={index}>
                                        <label className="block text-900 font-medium mb-2">{field.label}</label>
                                        {/* {field.type === 'dropdown' && <Dropdown name={field.name} value={formJaminan[field.name]} options={field.options} onChange={handleInputChange} className="w-full" />} */}
                                        {field.type === 'dropdown' && <Dropdown required name={field.name} value={formJaminan[field.name]} onChange={handleInputChange} options={JenisAgunanOptions} placeholder="" className="w-full md:w-full" />}
                                        {field.type === 'input' && <InputText required name={field.name} value={formJaminan[field.name]} onChange={handleInputChange} className="w-full" />}
                                        {field.type === 'calendar' && <InputText required type='date' name={field.name} onChange={handleInputChange} className="w-full" />}
                                    </div>
                                ))}
                            </div>
                            <div className="col-12 md:col-6">
                                {jaminanFields.slice(7).map((field, index) => (
                                    <div className="my-2" key={index}>
                                        <label className="block text-900 font-medium mb-2">{field.label}</label>
                                        {field.type === 'dropdown' && <Dropdown required name={field.name} value={formJaminan[field.name]} options={field.options} onChange={handleInputChange} placeholder="" className="w-full" />}
                                        {field.type === 'input' && <InputText required name={field.name} value={formJaminan[field.name]} onChange={handleInputChange} className="w-full" />}
                                        {field.type === 'calendar' && <InputText required type='date' name={field.name} onChange={handleInputChange} className="w-full" />}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </fieldset>
                    <div className='flex justify-content-end'>
                        <div className='flex gap-4'> {/*Button*/}
                            <Button onClick={handleReset} className=''>Reset</Button>
                            {/* <Button type='submit' onClick={() => setVisible(true)} className=''>Submit</Button> */}
                            {/* <Button label="Submit" type='submit'/> */}
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
                {/* <h3>Daftar Data Jaminan</h3>
                <DataTable value={tableData} className="p-datatable-sm">
                    <Column field="jenisAgunan" header="Jenis Agunan" />
                    <Column field="buktiHakMilik" header="Bukti Hak Milik" />
                    <Column field="nilaiTransaksi" header="Nilai Transaksi" />
                    <Column field="jenisPengikatan" header="Jenis Pengikatan" />
                    <Column field="asuransi" header="Asuransi" />
                </DataTable> */}
            </div>
        </div>
    );
};

export default FormJaminan;
