'use client';

import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const JaminanPage = () => {
    const [formJaminan, setformJaminan] = useState<{
        [key: string]: string;
    }>({
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

    const [tableData, setTableData] = useState([]);

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

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        console.log(formJaminan);
    };

    const handleReset = () => {
        setformJaminan({
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
        { label: 'Jenis Agunan', type: 'dropdown', options: ['1','2'], name: 'jenisAgunan' },
        { label: 'Merek', type: 'input', name: 'merek' },
        { label: 'Bukti Hak Milik', type: 'dropdown', options: ['1','2'], name: 'buktiHakMilik' },
        { label: 'Nama Pemilik Jaminan', type: 'input', name: 'namaPemilikJaminan' },
        { label: 'Lokasi Agunan', type: 'input', name: 'lokasiAgunan' },
        { label: 'Nilai Transaksi', type: 'input', name: 'nilaiTransaksi' },
        { label: 'Jenis Pengikatan', type: 'dropdown', options: ['1','2'], name: 'jenisPengikatan' },
        { label: 'Tipe', type: 'dropdown', options: ['1','2'], name: 'tipe' },
        { label: 'Tahun Pembuatan', type: 'calendar', name: 'tahunPembuatan' },
        { label: 'No. Agunan', type: 'input', name: 'noAgunan' },
        { label: 'Hubungan dengan Pemilik', type: 'dropdown', options: ['1','2'], name: 'hubunganDenganPemilik' },
        { label: 'Informasi Tambahan', type: 'input', name: 'informasiTambahan' },
        { label: 'Asuransi', type: 'input', name: 'asuransi' }
    ];

    return (
        <div className="jaminan-page">
            <div className="surface-card p-4 shadow-2 border-round">
                <fieldset className="mb-4 p-4 border-round">
                    <legend className="text-xl font-bold">Jaminan</legend>
                    <div className="grid md:justify-content-between">
                        <div className="col-12 md:col-6">
                            {jaminanFields.slice(0, 7).map((field, index) => (
                                <div className="my-2" key={index}>
                                    <label className="block text-900 font-medium mb-2">{field.label}</label>
                                    {field.type === 'dropdown' && <Dropdown name={field.name} value={formJaminan[field.name]} options={field.options} onChange={handleInputChange} className="w-full" />}
                                    {field.type === 'input' && <InputText name={field.name} value={formJaminan[field.name]} onChange={handleInputChange} className="w-full" />}
                                    {field.type === 'calendar' && <InputText type='date' name={field.name}  onChange={handleInputChange} className="w-full" />}
                                </div>
                            ))}
                        </div>
                        <div className="col-12 md:col-6">
                            {jaminanFields.slice(7).map((field, index) => (
                                <div className="my-2" key={index}>
                                    <label className="block text-900 font-medium mb-2">{field.label}</label>
                                    {field.type === 'dropdown' && <Dropdown name={field.name} value={formJaminan[field.name]} options={field.options} onChange={handleInputChange} className="w-full" />}
                                    {field.type === 'input' && <InputText name={field.name} value={formJaminan[field.name]} onChange={handleInputChange} className="w-full" />}
                                    {field.type === 'calendar' && <InputText type='date' name={field.name}  onChange={handleInputChange} className="w-full" />}
                                </div>
                            ))}
                        </div>
                    </div>
                </fieldset>
                <div className="grid mx-1">
                    <div className='col-10'>
                        <Button label="Simpan" className="p-button-primary mr-2" onClick={handleSubmit} />
                        <Button label="Hapus" className="p-button-danger mr-2" onClick={handleReset} />
                        <Button label="Batal" className="p-button-secondary" />
                    </div>
                    <Button label="Buat Jaminan Baru" className="p-button-success col-6 md:col-2" />
                </div>
                <h3>Daftar Data Jaminan</h3>
                <DataTable value={tableData} className="p-datatable-sm">
                    <Column field="jenisAgunan" header="Jenis Agunan" />
                    <Column field="buktiHakMilik" header="Bukti Hak Milik" />
                    <Column field="nilaiTransaksi" header="Nilai Transaksi" />
                    <Column field="jenisPengikatan" header="Jenis Pengikatan" />
                    <Column field="asuransi" header="Asuransi" />
                </DataTable>
            </div>
        </div>
    );
};

export default JaminanPage;
