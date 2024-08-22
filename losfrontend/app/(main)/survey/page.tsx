'use client';

import React, { useState } from 'react';
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton';
import { Panel } from 'primereact/panel';
import { Fieldset } from 'primereact/fieldset';
import { Button } from 'primereact/button';

// Komponen untuk setiap Fieldset
const SurveyFieldset = ({ legend, options, value, onChange }: any) => {
    return (
        <Fieldset legend={legend} style={{ marginTop: '20px' }}>
            {options.map((option: any, index: any) => (
                <div style={{ marginBottom: '10px' }} key={index}>
                    <label style={{ display: 'flex', alignItems: 'center' }}>
                        <RadioButton inputId={`${legend}-${index}`} name={legend} value={option.value} onChange={onChange} checked={value === option.value} />
                        <span style={{ marginLeft: '8px' }}>{option.label}</span>
                    </label>
                </div>
            ))}
        </Fieldset>
    );
};

const SurveyPage = () => {
    const [selectedValues, setSelectedValues] = useState<{
        [key: string]: string;
    }>({
        kejujuran: '',
        kooperatif: '',
        reputasi: '',
        lingkungan: '',
        ciriProduk: '',
        jumlahKonsumen: '',
        kebutuhanMasyarakat: '',
        pengadaan: '',
        ketergantungan: '',
        nilaiAgunan: '',
        peranPemerintah: '',
        kondisiEkonomi: '',
        sosialPolitik: ''
    });

    const handleRadioChange = (e: RadioButtonChangeEvent, field: string) => {
        setSelectedValues({ ...selectedValues, [field]: e.value });
    };

    const handleSave = () => {
        console.log('Saving survey responses:', selectedValues);
        alert('Survey responses saved successfully!');
    };

    const surveyQuestions = [
        {
            legend: '1. Kejujuran:',
            field: 'kejujuran',
            options: [
                { value: 'Sesuai', label: 'Pernyataan sesuai dengan hasil verifikasi' },
                { value: 'Kurang Sesuai', label: 'Pernyataan kurang sesuai dengan hasil verifikasi' },
                { value: 'Bertentangan', label: 'Pernyataan banyak bertentangan dengan hasil verifikasi' }
            ]
        },
        {
            legend: '2. Sikap Kooperatif:',
            field: 'kooperatif',
            options: [
                { value: 'Sangat Kooperatif', label: 'Sangat Kooperatif dalam memberikan Keterangan & Dokumen' },
                { value: 'Kooperatif', label: 'Kooperatif dalam memberikan Keterangan & Dokumen' },
                { value: 'Kurang Kooperatif', label: 'Kurang Kooperatif dalam memberikan Keterangan & Dokumen' }
            ]
        },
        {
            legend: '3. Reputasi Bisnis:',
            field: 'reputasi',
            options: [
                { value: 'Sangat Baik', label: 'Perilaku Bisnisnya jujur dan disukai' },
                { value: 'Baik', label: 'Tidak ada keluhan dari rekan bisnis' },
                { value: 'Kurang Baik', label: 'Banyak Komplain terhadap peilaku bisnis nasabah' }
            ]
        },
        {
            legend: '4. Hubungan Dengan Lingkungan:',
            field: 'lingkungan',
            options: [
                { value: 'Sangat Baik', label: 'Disukai dan menjadi panutan di lingkungannya' },
                { value: 'Baik', label: 'Hubungannya dengan lingkungan normal-normal aja' },
                { value: 'Kurang Baik', label: 'Kurang disukai dilingkungannya' }
            ]
        },
        {
            legend: '5. Ciri Produk:',
            field: 'ciriProduk',
            options: [
                { value: 'Sangat Baik', label: 'Sulit ditiru orang lain' },
                { value: 'Baik', label: 'Tidak mudah ditiru orang lain' },
                { value: 'Kurang Baik', label: 'Mudah ditiru orang lain' }
            ]
        },
        {
            legend: '6. Jumlah Konsumen:',
            field: 'jumlahKonsumen',
            options: [
                { value: 'Sangat Baik', label: 'Lebih banyak dengan rata-rata pesaing' },
                { value: 'Baik', label: 'Sama dengan rata-rata pesaing' },
                { value: 'Kurang Baik', label: 'Lebih sedikit dari rata-rata pesaing' }
            ]
        },
        {
            legend: '7. Kebutuhan Masyarakat Terhadap Produk:',
            field: 'kebutuhanMasyarakat',
            options: [
                { value: 'Sangat Baik', label: 'Diperlukan dengan jumlah besar sepanjang waktu' },
                { value: 'Baik', label: 'Diperlukan sepanjang waktu' },
                { value: 'Kurang Baik', label: 'diperlukan hanya dalam waktu tertentu' }
            ]
        },
        {
            legend: '8. Pengadaan Bahan Baku:',
            field: 'pengadaan',
            options: [
                { value: 'Sangat Baik', label: 'Mudah Didapat' },
                { value: 'Baik', label: 'Suplier terbatas' },
                { value: 'Kurang Baik', label: 'Kurang Menentu' }
            ]
        },
        {
            legend: '9. Ketergantungan Kepada Suplier:',
            field: 'ketergantungan',
            options: [
                { value: 'Sangat Baik', label: 'Supplier sangat mempengaruhi volume usaha' },
                { value: 'Baik', label: 'Supplier mempengaruhi volume usaha' },
                { value: 'Kurang Baik', label: 'Supplier kurang mempengaruhi volume usaha' }
            ]
        },
        {
            legend: '10. Nilai Dan Kondisi Agunan:',
            field: 'nilaiAgunan',
            options: [
                { value: 'Sangat Baik', label: 'Sangat Marketabel dan dapat diikat sempurna' },
                { value: 'Baik', label: 'Marketabel dan dapat diikat sempurna' },
                { value: 'Kurang Baik', label: 'Kurang Marketabel dan tidak dapat diikat sempurna' }
            ]
        },
        {
            legend: '11. Peran Pemerintah:',
            field: 'peranPemerintah',
            options: [
                { value: 'Sangat Baik', label: 'Sangat Mendukung perkembangan dunia usaha' },
                { value: 'Baik', label: 'Mendukung perkembangan dunia usaha' },
                { value: 'Kurang Baik', label: 'Kurang Mendukung perkembangan dunia usaha' }
            ]
        },
        {
            legend: '12. Kondisi Ekonomi:',
            field: 'kondisiEkonomi',
            options: [
                { value: 'Sangat Baik', label: 'Ekonomi Tumbuh' },
                { value: 'Baik', label: 'Ekonomi stabil/moderate' },
                { value: 'Kurang Baik', label: 'Ekonomi lemah' }
            ]
        },
        {
            legend: '13. Kondisi Sosial Politik:',
            field: 'sosialPolitik',
            options: [
                { value: 'Sangat Stabil', label: 'Kondisi Sosial Politik sangat stabil' },
                { value: 'Stabil', label: 'Kondisi Sosial Politik stabil' },
                { value: 'Kurang Stabil', label: 'Kondisi Sosial Politik kurang stabil' }
            ]
        }
    ];

    return (
        <div className="p-m-4">
            <Panel header="Survey Form">
                {surveyQuestions.map((question, index) => (
                    <SurveyFieldset key={index} legend={question.legend} options={question.options} value={selectedValues[question.field]} onChange={(e: any) => handleRadioChange(e, question.field)} />
                ))}
                <Button label="Save" icon="pi pi-check" onClick={handleSave} />
            </Panel>
        </div>
    );
};

export default SurveyPage;
