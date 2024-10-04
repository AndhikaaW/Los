'use client';

import React, { useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { API_ENDPOINTS } from '@/app/api/losbackend/api';
import axios from 'axios';
import { Dialog } from 'primereact/dialog';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const EditFormJaminan = () => {
    const params = useParams();
    const no_pengajuan = params?.no_pengajuan as string;
    const [visible, setVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [jenisAgunan, setJenisAgunan] = useState<any[]>([]);
    const [hakMilik, setHakMilik] = useState<any[]>([]);
    const [tipe, setTipe] = useState<any[]>([]);
    const [jenisPengikatan, setJenisPengikatan] = useState<any[]>([]);
    const [hubunganPemilik, setHubunganPemilik] = useState<any[]>([]);
    const [formJaminan, setFormJaminan] = useState<any>({
        no_pengajuan: '',
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
        if (no_pengajuan) {
            fetchJaminanData(no_pengajuan);
        }
        fetchOptions();
    }, [no_pengajuan]);

    const fetchJaminanData = async (no_pengajuan: string) => {
        try {
            const response = await axios.get(API_ENDPOINTS.GETJAMINANBYNOPENGAJUAN(no_pengajuan));
            const data = response.data[0];
            setFormJaminan({
                ...data,
                jenisAgunan: data.ref_jenis_agunan.Kode,
                buktiHakMilik: data.ref_hak_milik.Kode,
                tipe: data.ref_tipe.Kode,
                jenisPengikatan: data.ref_jenis_pengikatan.Kode,
                hubunganDenganPemilik: data.ref_hub_pemilik.Kode,
                tahunPembuatan: formatDate(data.tahunPembuatan)
            });
        } catch (error) {
            console.error('Error fetching jaminan data:', error);
        }
    };

    const fetchOptions = async () => {
        try {
            const [jenisAgunanRes, hakMilikRes, tipeRes, jenisPengikatanRes, hubunganPemilikRes] = await Promise.all([
                axios.get(API_ENDPOINTS.GETJENISAGUNAN),
                axios.get(API_ENDPOINTS.GETHAKMILIK),
                axios.get(API_ENDPOINTS.GETTIPE),
                axios.get(API_ENDPOINTS.GETJENISPENGIKATAN),
                axios.get(API_ENDPOINTS.GETHUBUNGANPEMILIK)
            ]);
            setJenisAgunan(jenisAgunanRes.data);
            setHakMilik(hakMilikRes.data);
            setTipe(tipeRes.data);
            setJenisPengikatan(jenisPengikatanRes.data);
            setHubunganPemilik(hubunganPemilikRes.data);
        } catch (error) {
            console.error('Error fetching options:', error);
        }
    };

    const formatDate = (dateString: string) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toISOString().split('T')[0];
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormJaminan((prev: any) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.put(API_ENDPOINTS.UPDATEJAMINANBYID(no_pengajuan), formJaminan);
            console.log('Response from API:', response.data);
            // console.log('Form Jaminan:', formJaminan);
            setIsLoading(false);
            setVisible(true);
        } catch (error) {
            console.error('Error submitting form:', error);
            setIsLoading(false);
        }
    };

    const resetForm = () => {
        setFormJaminan({
            no_pengajuan: '',
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
        { label: 'Jenis Agunan', type: 'dropdown', name: 'jenisAgunan', options: jenisAgunan },
        { label: 'Merek', type: 'input', name: 'merek' },
        { label: 'Bukti Hak Milik', type: 'dropdown', name: 'buktiHakMilik', options: hakMilik },
        { label: 'Nama Pemilik Jaminan', type: 'input', name: 'namaPemilikJaminan' },
        { label: 'Lokasi Agunan', type: 'input', name: 'lokasiAgunan' },
        { label: 'Nilai Transaksi', type: 'input', name: 'nilaiTransaksi' },
        { label: 'Jenis Pengikatan', type: 'dropdown', name: 'jenisPengikatan', options: jenisPengikatan },
        { label: 'Tipe', type: 'dropdown', name: 'tipe', options: tipe },
        { label: 'Tahun Pembuatan', type: 'date', name: 'tahunPembuatan' },
        { label: 'No. Agunan', type: 'input', name: 'noAgunan' },
        { label: 'Hubungan dengan Pemilik', type: 'dropdown', name: 'hubunganDenganPemilik', options: hubunganPemilik },
        { label: 'Informasi Tambahan', type: 'input', name: 'informasiTambahan' },
        { label: 'Asuransi', type: 'input', name: 'asuransi' }
    ];

    return (
        <div className="jaminan-page">
            <div className="surface-card p-4 shadow-2 border-round">
                <form onSubmit={handleSubmit}>
                    <fieldset className="mb-4 p-4 border-round">
                        <legend className="text-xl font-bold">Jaminan</legend>
                        <div className="grid md:justify-content-between">
                            <div className="col-12 md:col-6">
                                {jaminanFields.slice(0, 7).map((field, index) => (
                                    <div className="my-2" key={index}>
                                        <label className="block text-900 font-medium mb-2">{field.label}</label>
                                        {field.type === 'dropdown' && (
                                            <Dropdown
                                                required
                                                name={field.name}
                                                value={formJaminan[field.name]}
                                                onChange={(e) => handleInputChange(e as any)}
                                                options={field.options}
                                                optionLabel="Keterangan"
                                                optionValue="Kode"
                                                placeholder=""
                                                className="w-full md:w-full"
                                            />
                                        )}
                                        {field.type === 'input' && (
                                            <InputText
                                                required
                                                name={field.name}
                                                value={formJaminan[field.name]}
                                                onChange={handleInputChange}
                                                className="w-full"
                                            />
                                        )}
                                        {field.type === 'date' && (
                                            <InputText
                                                required
                                                type='date'
                                                name={field.name}
                                                value={formJaminan[field.name]}
                                                onChange={handleInputChange}
                                                className="w-full"
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="col-12 md:col-6">
                                {jaminanFields.slice(7).map((field, index) => (
                                    <div className="my-2" key={index}>
                                        <label className="block text-900 font-medium mb-2">{field.label}</label>
                                        {field.type === 'dropdown' && (
                                            <Dropdown
                                                required
                                                name={field.name}
                                                value={formJaminan[field.name]}
                                                onChange={(e) => handleInputChange(e as any)}
                                                options={field.options}
                                                optionLabel="Keterangan"
                                                optionValue="Kode"
                                                placeholder=""
                                                className="w-full"
                                            />
                                        )}
                                        {field.type === 'input' && (
                                            <InputText
                                                required
                                                name={field.name}
                                                value={formJaminan[field.name]}
                                                onChange={handleInputChange}
                                                className="w-full"
                                            />
                                        )}
                                        {field.type === 'date' && (
                                            <InputText
                                                required
                                                type='date'
                                                name={field.name}
                                                value={formJaminan[field.name]}
                                                onChange={handleInputChange}
                                                className="w-full"
                                            />
                                        )}
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
                                ) : 'Update'}
                            </Button>
                            <Link href="/admin/debitur" passHref>
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
