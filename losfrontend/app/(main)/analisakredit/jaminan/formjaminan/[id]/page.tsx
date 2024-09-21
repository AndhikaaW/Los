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
import { useParams } from 'next/navigation';
import Link from 'next/link';

interface JenisAgunan {
    id: number,
    Kode: string,
    Keterangan: string
}
const EditFormJaminan = () => {
    const params = useParams();
    const id = params?.id;
    const [visible, setVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [jenisAgunan, setjenisAgunan] = useState<JenisAgunan[]>([]);
    useEffect(() => {
        if (id) {
            fetchJaminanData(id);
        }
    }, [id]);

    const fetchJaminanData = async (id: any) => {
        try {
            const response = await axios.get(`${API_ENDPOINTS.GETJAMINANBYID(id)}`);
            const formattedData = {
                ...response.data,
                tahunPembuatan: formatDate(response.data.tahunPembuatan)
            };
            setformJaminan(formattedData);
        } catch (error) {
            console.error('Error fetching pengajuan data:', error);
        }
    };
    const formatDate = (dateString: string) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toISOString().split('T')[0];
    };
    const [formJaminan, setformJaminan] = useState<{[key: string]: string;}>({
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

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            let response;
            if (id) {
                response = await axios.put(API_ENDPOINTS.UPDATEJAMINANBYID(id), formJaminan);
            } else {
                response = await axios.post(API_ENDPOINTS.ADDJAMINAN, formJaminan);
            }
            console.log('Response from API:', response.data);
            setIsLoading(false);
            setVisible(true);
            resetForm();
            if (!id) resetForm();
        } catch (error) {
            console.error('Error submitting form:', error);
            setIsLoading(false);
        }
    };

    const resetForm = () => {
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
        { label: 'Tahun Pembuatan', type: 'date', name: 'tahunPembuatan' },
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
                                        {field.type === 'date' && <InputText required type='date' value={formJaminan[field.name]} name={field.name} onChange={handleInputChange} className="w-full" />}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </fieldset>
                    <div className='flex justify-content-end'>
                    <div className='flex gap-4 justify-content-end pt-4'>
                        <Button onClick={resetForm} type="button">Reset</Button>
                        <Button type="submit" className='text-white bg-[#61AB5B] w-auto' disabled={isLoading}>
                            {isLoading ? (
                                <div className="flex align-items-center">
                                    <i className="pi pi-spin pi-spinner" style={{ fontSize: "1rem" }}></i>
                                    <label>Loading...</label>
                                </div>
                            ) : (
                                id ? 'Update' : 'Kirim'
                            )}
                        </Button>
                        <Link href="/analisakredit/jaminan" passHref>
                            <Button type="button" className='p-button-secondary'>Back to List</Button>
                        </Link>

                        <Dialog header="Success" visible={visible} style={{ width: '50vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
                            <p className="m-0">
                                {id ? 'Data berhasil diperbarui' : 'Terima Kasih telah mengisi form'}
                            </p>
                        </Dialog>
                    </div>
                </div>
                </form>
            </div>
        </div>
    );
};

export default EditFormJaminan;
