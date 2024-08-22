"use client"
import { API_ENDPOINTS } from '@/app/api/losbackend/api';
import axios from 'axios';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import React, { useState } from 'react';

const RealisasiPinjaman = () => {
    const [formLimac, setformLimac] = useState({
        // noAnggota: '',
        // nama: '',
        // alamat: '',
        // noRekening: '',
        // rekeningLama: '',
        // produkPinjaman: '',
        // produkPinjaman2: '',
        // tglRealisasi: '',
        // pinjamanKe: '',
        // tglPermohonan: '',
        // tglPersetujuan: '',
        characters: '',
        capacity: '',
        capital: '',
        collateral: '',
        conditions: ''
    });
    const resetForm = () => {
        setformLimac({
            // noAnggota: '',
            // nama: '',
            // alamat: '',
            // noRekening: '',
            // rekeningLama: '',
            // produkPinjaman: '',
            // produkPinjaman2: '',
            // tglRealisasi: '',
            // pinjamanKe: '',
            // tglPermohonan: '',
            // tglPersetujuan: '',

            characters: '',
            capacity: '',
            capital: '',
            collateral: '',
            conditions: ''
        })
    }

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setformLimac((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateForm = () => {
        for (const [key, value] of Object.entries(formLimac)) {
            if (!value) {
                window.alert(`${key.charAt(0).toUpperCase() + key.slice(1)} tidak boleh kosong!`);
                return false;
            }
        }
        return true;
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post(API_ENDPOINTS.LIMAC, formLimac);
            console.log('Response from API:', response.data);
            // Reset form atau tampilkan pesan sukses di sini
        } catch (error) {
            console.error('Error submitting form:', error);
            // Tampilkan pesan error ke pengguna di sini
        }
        console.log;
    };
    return (
        <div className="surface-card border-round p-4">
            <form onSubmit={handleSubmit}>
                {/* <div className="flex-row md:flex border-round p-2 gap-4">
                <div className="flex align-items-center col-1">
                    <label className="block text-900 font-medium mb-2">No Anggota</label>
                </div>
                <div className="col-12 mb-2 lg:col-4 lg:mb-0">
                    <span className="p-input-icon-right">
                        <InputText type="text" placeholder="Search" name='noAnggota' onChange={handleChange} value={formPinjaman.noAnggota} />
                        <i className="pi pi-search" />
                    </span>
                </div>
            </div>
            <div className="flex-row md:flex border-round p-2 gap-4">
                <div className="flex align-items-center col-1">
                    <label className="block text-900 font-medium mb-2">Nama</label>
                </div>
                <div className="col-12 mb-2 lg:col-4 lg:mb-0">
                    <InputText name='nama' onChange={handleChange} value={formPinjaman.nama} className="w-full" />
                </div>
            </div>
            <div className="flex-row md:flex border-round p-2 gap-4">
                <div className="flex align-items-center col-1">
                    <label className="block text-900 font-medium mb-2">Alamat</label>
                </div>
                <div className="col-12 mb-2 lg:col-6 lg:mb-0">
                    <InputText name='alamat' onChange={handleChange} value={formPinjaman.alamat} className="w-full" />
                </div>
            </div>
            <div className="flex-row md:flex border-round p-2 gap-4">
                <div className="flex align-items-center col-1">
                    <label className="block text-900 font-medium mb-2">No. Rekening</label>
                </div>
                <div className="col-12 mb-2 lg:col-3 lg:mb-0">
                    <InputText name='noRekening' onChange={handleChange} value={formPinjaman.noRekening} className="w-full" />
                </div>
                <div className="flex align-items-center w-1">
                    <label className="block text-900 font-medium mb-2">Rekening Lama</label>
                </div>
                <div className="col-12 mb-2 lg:col-4 lg:mb-0">
                    <InputText name='rekeningLama' onChange={handleChange} value={formPinjaman.rekeningLama} className="w-full" />
                </div>
            </div>
            <div className="flex-row md:flex border-round p-2 gap-4">
                <div className="flex align-items-center col-1">
                    <label className="block text-900 font-medium mb-2">Produk Pinjaman</label>
                </div>
                <div className="col-12 mb-2 lg:col-6 lg:mb-0 flex gap-4">
                    <InputText name='produkPinjaman' onChange={handleChange} value={formPinjaman.produkPinjaman} className="w-full" />
                    <InputText name='produkPinjaman2' onChange={handleChange} value={formPinjaman.produkPinjaman2} className="w-full" />
                </div>
            </div>
            <div className="flex-row md:flex border-round p-2">
                <div className="flex align-items-center col-1 mr-4">
                    <label className="block text-900 font-medium mb-2">Tgl. Realisasi</label>
                </div>
                <div className="col-12 mb-2 lg:col-2 lg:mb-0">
                    <InputText name='tglRealisasi' onChange={handleChange} value={formPinjaman.tglRealisasi} type="date" className="w-full" />
                </div>
                <div className="flex align-items-center w-1">
                    <label className="block text-900 font-medium mb-2">Pinjaman Ke</label>
                </div>
                <div className="col-12 mb-2 lg:col-2 lg:mb-0">
                    <InputText name='pinjamanKe' onChange={handleChange} value={formPinjaman.pinjamanKe} placeholder="0" className="w-full" />
                </div>
                <div className="flex align-items-center w-1">
                    <label className="block text-900 font-medium mb-2">Tgl. Permohonan</label>
                </div>
                <div className="col-12 mb-2 lg:col-2 lg:mb-0">
                    <InputText name='tglPermohonan' onChange={handleChange} value={formPinjaman.tglPermohonan} type="date" className="w-full" />
                </div>
                <div className="flex align-items-center w-1">
                    <label className="block text-900 font-medium mb-2">Tgl. Persetujuan</label>
                </div>
                <div className="col-12 mb-2 lg:col-2 lg:mb-0">
                    <InputText name='tglPersetujuan' onChange={handleChange} value={formPinjaman.tglPersetujuan} type="date" className="w-full" />
                </div>
            </div> */}

                <fieldset className="p-6 border-round">
                    <legend className="text-xl font-bold">Analisa 5C</legend>
                    <div className='mb-2'>
                        <label className='block text-900 font-medium mb-2'>Character</label>
                        <InputTextarea name='characters' onChange={handleChange} value={formLimac.characters} className='w-full' />
                    </div>
                    <div className='mb-2'>
                        <label className='block text-900 font-medium mb-2'>Capacity</label>
                        <InputTextarea name='capacity' onChange={handleChange} value={formLimac.capacity} className='w-full' />
                    </div>
                    <div className='mb-2'>
                        <label className='block text-900 font-medium mb-2'>Capital</label>
                        <InputTextarea name='capital' onChange={handleChange} value={formLimac.capital} className='w-full' />
                    </div>
                    <div className='mb-2'>
                        <label className='block text-900 font-medium mb-2'>Collateral</label>
                        <InputTextarea name='collateral' onChange={handleChange} value={formLimac.collateral} className='w-full' />
                    </div>
                    <div className='mb-2'>
                        <label className='block text-900 font-medium mb-2'>Condition</label>
                        <InputTextarea name='conditions' onChange={handleChange} value={formLimac.conditions} className='w-full' />
                    </div>
                </fieldset>
                <div className='flex gap-4 justify-content-end pt-4'> {/*Button*/}
                    <Button onClick={resetForm} className=''>Reset</Button>
                    <Button type='submit' className=''>Submit</Button>
                </div>
            </form>
        </div>
    );
};

export default RealisasiPinjaman;
