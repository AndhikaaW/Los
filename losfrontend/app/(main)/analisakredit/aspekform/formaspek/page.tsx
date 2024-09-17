'use client';
import React, { useEffect, useState } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import axios from 'axios';
import { API_ENDPOINTS } from '@/app/api/losbackend/api';
import { Dialog } from 'primereact/dialog';
import SearchRekening from '@/app/(full-page)/component/searchRekening/page';

interface TitleAspek {
    id: number;
    title_aspek: string;
}
const FormAspek = () => {
    const [titleAspek, settitleAspek] = useState<TitleAspek[]>([])

    const [visible, setVisible] = useState(false);
    const [Isloading, setIsLoading] = useState(false);

    const [formAspek, setformAspek] = useState<{ [key: string]: string; }>({
        NomorRekening: ''
    });
    
    const handleClear = () => {
        setformAspek(Object.keys(formAspek).reduce((acc, key) => ({ ...acc, [key]: '' }), {}));
    };

    useEffect(() => {
        const fetchAspekForm = async () => {
            try {
                const response = await axios.get(API_ENDPOINTS.GETTITLEASPEK)
                settitleAspek(response.data)
                // console.log(response.data)
            } catch (error) {
                console.error("There was an error fetching the survey!", error)
            }
        }
        fetchAspekForm()
    }, [])



    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
        setformAspek({ ...formAspek, [field]: e.target.value });
    };

    // const validateForm = () => {
    //     for (const [key, value] of Object.entries(formAspek)) {
    //         if (!value) {
    //             window.alert(`${key.charAt(0).toUpperCase() + key.slice(1)} tidak boleh kosong!`);
    //             return false;
    //         }
    //     }
    //     return true;
    // };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        console.log(formAspek)
        try {
            const response = await axios.post(API_ENDPOINTS.ASPEKFORM, formAspek);
            console.log('Response from API:', response.data);
            setIsLoading(false);
            setVisible(true);
            handleClear()
        } catch (error) {
            console.error('Error submitting form:', error);
            setIsLoading(false);
        }
    };
    const handleAccountSelect = (account: any) => {
        setformAspek(prevData => ({
            ...prevData,
            NomorRekening: account.NomorRekening
        }));
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setformAspek(prevData => ({
            ...prevData,
            NomorRekening: e.target.value
        }));
    };
    return (
        <div className="surface-card max-w-4xl mx-auto shadow-lg border-round">
            <div className="p-4">
                <SearchRekening
                    onAccountSelect={handleAccountSelect}
                    value={formAspek.NomorRekening}
                    onChange={handleSearchChange}
                />
                <form onSubmit={handleSubmit}>
                    <fieldset className="border-round mb-4 p-6">
                        <legend className="text-xl font-bold">Formulir Aspek</legend>
                        {titleAspek.map((aspect, index) => (
                            <div key={index} className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">{aspect.title_aspek}</label>
                                <InputTextarea required rows={3} className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" value={formAspek[aspect.title_aspek]} onChange={(e) => handleInputChange(e, aspect.title_aspek)} />
                            </div>
                        ))}

                        <div className="mtext-sm text-red-700 mb-10 italic bg-red-100 p-4 border-round">
                            <h3 className="font-semibold text-lg text-gray-800 mb-2">Aspek Resiko dan Mitigasi</h3>
                            <div className="mb-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Risiko:</label>
                                <InputTextarea required rows={3} className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" name='risiko' value={formAspek.risiko} onChange={(e) => handleInputChange(e, 'risiko')} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Mitigasi:</label>
                                <InputTextarea required rows={3} className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" name='mitigasi' value={formAspek.mitigasi} onChange={(e) => handleInputChange(e, 'mitigasi')} />
                            </div>
                        </div>

                        <div className="text-sm text-black-700 italic pt-3 rounded-lg text-center">Catatan: Kolom di atas berisi hasil-hasil yang didapat</div>
                    </fieldset>
                    <div className='flex gap-4 justify-content-end'> {/*Button*/}
                        <Button onClick={handleClear} className=''>Reset</Button>
                        {/* <Button type='submit' onClick={() => setVisible(true)} className=''>Submit</Button> */}
                        {/* <Button label="Submit" type='submit'/> */}
                        <Button type="submit" className='text-white bg-[#61AB5B] w-auto' disabled={Isloading}>
                            {Isloading ? (
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
                </form>
            </div>
        </div>
    )
}

export default FormAspek