import React, { useState, useEffect, useRef } from 'react';
import { Toast } from 'primereact/toast';
import axios from 'axios';
import { API_ENDPOINTS } from '@/app/api/losbackend/api';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';

const TambahSurveyPanel = () => {
    const [refSurvey, setRefSurvey] = useState([]);
    const [visibleAddSurvey, setVisibleAddSurvey] = useState(false);
    const [visibleUpdateSurvey, setVisibleUpdateSurvey] = useState(false);
    const [judulSurvey, setJudulSurvey] = useState('');
    const [judulSurveyUpdate, setJudulSurveyUpdate] = useState('');
    const [pilihanSurvey, setPilihanSurvey] = useState(['']);
    const [pilihanSurveyUpdate, setPilihanSurveyUpdate] = useState(['']);
    const [selectedSurveyKode, setSelectedSurveyKode] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const toast = useRef<Toast>(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const surveyResponse = await axios.get(API_ENDPOINTS.GETSURVEY);
            setRefSurvey(surveyResponse.data);
        } catch (error) {
            console.error("Error fetching data:", error);
            toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Gagal mengambil data', life: 3000 });
        } finally {
            setIsLoading(false);
        }
    };

    const handleUpdateSurvey = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!selectedSurveyKode) return;

        try {
            await axios.put(API_ENDPOINTS.UPDATETITLESURVEYBYID(selectedSurveyKode), {
                Keterangan: judulSurveyUpdate,
                pilihan_survey: pilihanSurveyUpdate.map(pilihan => ({ pertanyaan: pilihan }))
            });
            toast.current?.show({ severity: 'success', summary: 'Sukses', detail: 'Survey berhasil diupdate', life: 3000 });
            setVisibleUpdateSurvey(false);
            setJudulSurveyUpdate('');
            setPilihanSurveyUpdate(['']);
            setSelectedSurveyKode(null);
            fetchData();
        } catch (error) {
            console.error('Error mengupdate survey:', error);
            toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Gagal mengupdate survey', life: 3000 });
        }
    };

    const handleSubmitSurvey = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.post(API_ENDPOINTS.ADDTITLESURVEY, {
                Keterangan: judulSurvey,
                pilihan_survey: pilihanSurvey.map(pilihan => ({ pertanyaan: pilihan }))
            });
            toast.current?.show({ severity: 'success', summary: 'Sukses', detail: 'Judul Survey berhasil ditambahkan', life: 3000 });
            setVisibleAddSurvey(false);
            setJudulSurvey('');
            setPilihanSurvey(['']);
            fetchData();
        } catch (error) {
            console.error('Error menambahkan survey:', error);
            toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Gagal menambahkan survey', life: 3000 });
        }
    };

    const handleEditSurvey = (Kode: any) => {
        const survey: any = refSurvey.find((s: any) => s.Kode === Kode);
        if (survey) {
            setSelectedSurveyKode(Kode);
            setJudulSurveyUpdate(survey.Keterangan);
            setPilihanSurveyUpdate(survey.pilihan_survey.map((p: any) => p.pertanyaan));
            setVisibleUpdateSurvey(true);
        }
    };

    const handleDeleteSurvey = async (Kode: string) => {
        try {
            await axios.delete(API_ENDPOINTS.DELETEREFSURVEYBYID(Kode));
            toast.current?.show({ severity: 'success', summary: 'Success', detail: 'Survey berhasil dihapus', life: 3000 });
            fetchData();
        } catch (error) {
            console.error('Error deleting survey:', error);
            toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Gagal menghapus survey', life: 3000 });
        }
    };

    const addPilihanSurvey = () => {
        setPilihanSurvey([...pilihanSurvey, '']);
    };

    const handlePilihanSurveyChange = (index: number, value: string) => {
        const newPilihanSurvey = [...pilihanSurvey];
        newPilihanSurvey[index] = value;
        setPilihanSurvey(newPilihanSurvey);
    };

    const addPilihanSurveyUpdate = () => {
        setPilihanSurveyUpdate([...pilihanSurveyUpdate, '']);
    };

    const handlePilihanSurveyUpdateChange = (index: number, value: string) => {
        const newPilihanSurveyUpdate = [...pilihanSurveyUpdate];
        newPilihanSurveyUpdate[index] = value;
        setPilihanSurveyUpdate(newPilihanSurveyUpdate);
    };

    return (
        <>
            <Toast ref={toast} />
            {isLoading ? (
                <div className="flex justify-content-center align-items-center">
                    <ProgressSpinner style={{ width: '20px', height: '20px' }} strokeWidth="7" fill="var(--surface-ground)" animationDuration=".5s" />
                </div>
            ) : (
                <div>
                    <div className='mb-5'>
                        <div className='mb-2 flex justify-content-end'>
                            <Button label="Tambah" icon="pi pi-plus" style={{ border: '1', color: '#333' }} className='bg-blue-200 w-2' onClick={() => setVisibleAddSurvey(true)} />
                        </div>
                        <DataTable value={refSurvey} style={{ minWidth: '50rem' }} paginator rows={15} rowsPerPageOptions={[5, 10, 15]}>
                            <Column key="Kode" field="Kode" header="Kode" className='w-2' />
                            <Column key="Keterangan" field="Keterangan" header="Judul Survey" className='w-3' />
                            <Column key="pilihan_survey" field="pilihan_survey" header="Pilihan Survey" body={(rowData) => (
                                <ul>
                                    {rowData.pilihan_survey.map((pilihan: any, index: any) => (
                                        <li key={index}>{pilihan.pertanyaan}</li>
                                    ))}
                                </ul>
                            )} />
                            <Column key="Update" field="Update" header="Update" body={(rowData) => (
                                <Button icon="pi pi-pencil" style={{ border: '1', color: '#333' }} className='bg-blue-200' onClick={() => handleEditSurvey(rowData.Kode)} />
                            )} />
                            <Column key="Delete" field="Delete" header="Delete" body={(rowData) => (
                                <Button icon="pi pi-trash" style={{ border: '1', color: '#333' }} className='bg-red-200' onClick={() => handleDeleteSurvey(rowData.Kode)} />
                            )} />
                        </DataTable>
                        <Dialog header="Update" visible={visibleUpdateSurvey} style={{ width: '50vw' }} onHide={() => setVisibleUpdateSurvey(false)}>
                            <div className="p-fluid mb-5">
                                <form onSubmit={handleUpdateSurvey}>
                                    <div className="field">
                                        <label htmlFor="judulSurveyUpdate" className='font-bold'>Judul Survey</label>
                                        <div className='flex flex-column gap-5'>
                                            <div className='flex gap-3 align-items-center'>
                                                <InputText id="judulSurveyUpdate" value={judulSurveyUpdate} onChange={(e) => setJudulSurveyUpdate(e.target.value)} required />
                                            </div>
                                            <div className='flex flex-column gap-2'>
                                                <label htmlFor="pertanyaanUpdate" className='font-bold'>Pilihan Survey</label>
                                                {pilihanSurveyUpdate.map((pilihan, index) => (
                                                    <div key={index} className='flex gap-2'>
                                                        <InputText
                                                            id={`pilihanSurveyUpdate-${index}`}
                                                            value={pilihan}
                                                            onChange={(e) => handlePilihanSurveyUpdateChange(index, e.target.value)}
                                                            required
                                                        />
                                                        {index === pilihanSurveyUpdate.length - 1 && (
                                                            <Button icon="pi pi-plus" onClick={addPilihanSurveyUpdate} />
                                                        )}
                                                    </div>
                                                ))}
                                                <Button className='w-3 mt-2' type="submit" label="Simpan" icon="pi pi-check" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </Dialog>
                        <Dialog header="Tambah" visible={visibleAddSurvey} style={{ width: '50vw' }} onHide={() => setVisibleAddSurvey(false)}>
                            <div className="p-fluid mb-5">
                                <form onSubmit={handleSubmitSurvey}>
                                    <div className="field">
                                        <label htmlFor="judulSurvey" className='font-bold'>Judul Survey</label>
                                        <div className='flex flex-column gap-5'>
                                            <div className='flex gap-3 align-items-center'>
                                                <InputText id="judulSurvey" value={judulSurvey} onChange={(e) => setJudulSurvey(e.target.value)} required />
                                            </div>
                                            <div className='flex flex-column gap-2'>
                                                <label htmlFor="pertanyaan" className='font-bold'>Pilihan Survey</label>
                                                {pilihanSurvey.map((pilihan, index) => (
                                                    <div key={index} className='flex gap-2'>
                                                        <InputText
                                                            id={`pilihanSurvey-${index}`}
                                                            value={pilihan}
                                                            onChange={(e) => handlePilihanSurveyChange(index, e.target.value)}
                                                            required
                                                        />
                                                        {index === pilihanSurvey.length - 1 && (
                                                            <Button icon="pi pi-plus" onClick={addPilihanSurvey} />
                                                        )}
                                                    </div>
                                                ))}
                                                <Button className='w-3 mt-2' type="submit" label="Simpan" icon="pi pi-check" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </Dialog>
                    </div>
                </div>
            )}
        </>
    );
};

export default TambahSurveyPanel;