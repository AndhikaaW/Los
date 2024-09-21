"use client"
import { TabView, TabPanel } from 'primereact/tabview';
import { API_ENDPOINTS } from '@/app/api/losbackend/api';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';

const tambahanalisakredit = () => {
    const [isLoading, setIsLoading] = useState(false);
    const toast = React.useRef<Toast>(null);
    const [refTitleAspek, setRefTitleAspek] = useState<any>([])
    const [refJenisAgunan, setRefJenisAgunan] = useState<any>([])
    const [refHakMilik, setRefHakMilik] = useState<any>([])
    const [refTipe, setRefTipe] = useState<any>([])

    const [titleAspek, setTitleAspek] = useState('');
    const [titleAspekEdit, setTitleAspekEdit] = useState('');
    const [titleSurvey, setTitleSurvey] = useState('');
    const [pilihanSurvey, setPilihanSurvey] = useState('');
    const [jenisAgunan, setJenisAgunan] = useState('');
    const [hakMilik, setHakMilik] = useState('');
    const [tipe, setTipe] = useState('');
    

    const [selectedRowAspek, setSelectedRowAspek] = useState<any>({});
    const [visibleDeleteAspek, setVisibleDeleteAspek] = useState(false);
    const [visibleEditAspek, setVisibleEditAspek] = useState(false);

    const [selectedRowJenisAgunan, setSelectedRowJenisAgunan] = useState<any>({});
    const [visibleJenisAgunan, setVisibleJenisAgunan] = useState(false);
    const [selectedRowHakMilik, setSelectedRowHakMilik] = useState<any>({});
    const [visibleHakMilik, setVisibleHakMilik] = useState(false);
    const [selectedRowTipe, setSelectedRowTipe] = useState<any>({});
    const [visibleTipe, setVisibleTipe] = useState(false);

    //Aspek 
    useEffect(() => {
        const fetchAspekForm = async () => {
            try {
                const response = await axios.get(API_ENDPOINTS.GETTITLEASPEK)
                setRefTitleAspek(response.data)
            } catch (error) {
                console.error("There was an error fetching the survey!", error)
            }
        }
        fetchAspekForm()
    }, [])
    const handleSubmitAspek = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await axios.post(API_ENDPOINTS.TAMBAHTITLEASPEK, { title_aspek: titleAspek });
            toast.current?.show({ severity: 'success', summary: 'Success', detail: 'Aspek berhasil ditambahkan', life: 3000 });
            setTitleAspek('');
            const response = await axios.get(API_ENDPOINTS.GETTITLEASPEK);
            setRefTitleAspek(response.data);
        } catch (error) {
            console.error('Error adding aspek:', error);
            toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Gagal menambahkan aspek', life: 3000 });
        } finally {
            setIsLoading(false);
        }
    };
    const handleUpdateAspek = async () => {
        setIsLoading(true);
        try {
            await axios.put(API_ENDPOINTS.UPDATETITLEASPEKBYID(selectedRowAspek.id), { title_aspek: titleAspekEdit });
            toast.current?.show({ severity: 'success', summary: 'Success', detail: 'Aspek berhasil diupdate', life: 3000 });
            setTitleAspekEdit('');
            const response = await axios.get(API_ENDPOINTS.GETTITLEASPEK);
            setRefTitleAspek(response.data);
            setVisibleEditAspek(false);
        } catch (error) {
            console.error('Error updating aspek:', error);
            toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Gagal mengupdate aspek', life: 3000 });
        } finally {
            setIsLoading(false);
        }
    };
    const handleDelete = async (id: string) => {
        try {
            await axios.delete(API_ENDPOINTS.DELETETITLEASPEKBYID(id));
            setRefTitleAspek(refTitleAspek.filter((item: any) => item.id !== id));
            const response = await axios.get(API_ENDPOINTS.GETTITLEASPEK);
            setRefTitleAspek(response.data);
        } catch (error) {
            console.error('Error deleting title aspek:', error);
        }
    };

    //Survey
    // const handleSubmitSurvey = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     setIsLoading(true);
    //     try {
    //         console.log(titleSurvey);
    //         console.log(pilihanSurvey);
    //         // const response = await axios.post('', {});
    //         toast.current?.show({ severity: 'success', summary: 'Success', detail: 'Survey berhasil ditambahkan', life: 3000 });
    //         // setTitleAspek('');
    //     } catch (error) {
    //         console.error('Error adding survey:', error);
    //         toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Gagal menambahkan survey', life: 3000 });
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };

    //Jenis Agunan
    useEffect(() => {
        const fetchJenisAgunan = async () => {
            try {
                const response = await axios.get(API_ENDPOINTS.GETJENISAGUNAN);
                setRefJenisAgunan(response.data);
            } catch (error) {
                console.error('There was an error fetching the jenis agunan!', error);
            }
        };
        fetchJenisAgunan();
    }, []);
    const handleSubmitJenisAgunan = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            console.log(jenisAgunan);
            await axios.post(API_ENDPOINTS.TAMBAHJENISAGUNAN, { Keterangan: jenisAgunan });
            toast.current?.show({ severity: 'success', summary: 'Success', detail: 'Jenis Agunan berhasil ditambahkan', life: 3000 });
            setJenisAgunan('');
            const response = await axios.get(API_ENDPOINTS.GETJENISAGUNAN);
            setRefJenisAgunan(response.data);
        } catch (error) {
            toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Gagal menambahkan jenis agunan', life: 3000 });
        } finally {
            setIsLoading(false);
        }
    };
    const handleDeleteJenisAgunan = async (id: string) => {
        try {
            await axios.delete(API_ENDPOINTS.DELETEJENISAGUNANBYID(id));
            setRefJenisAgunan(refJenisAgunan.filter((item: any) => item.id !== id));
            const response = await axios.get(API_ENDPOINTS.GETJENISAGUNAN);
            setRefJenisAgunan(response.data);
        } catch (error) {
            console.error('Error deleting jenis agunan:', error);
        }
    };

    //Hak Milik
    useEffect(() => {
        const fetchHakMilik = async () => {
            try {
                const response = await axios.get(API_ENDPOINTS.GETHAKMILIK);
                setRefHakMilik(response.data);
            } catch (error) {
                console.error('There was an error fetching the hak milik!', error);
            }
        };
        fetchHakMilik();
    }, []);
    const handleSubmitHakMilik = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await axios.post(API_ENDPOINTS.TAMBAHHAKMILIK, { Keterangan: hakMilik });
            toast.current?.show({ severity: 'success', summary: 'Success', detail: 'Hak Milik berhasil ditambahkan', life: 3000 });
            setHakMilik('');
            const response = await axios.get(API_ENDPOINTS.GETHAKMILIK);
            setRefHakMilik(response.data);
        } catch (error) {
            toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Gagal menambahkan hak milik', life: 3000 });
        } finally {
            setIsLoading(false);
        }
    };
    const handleDeleteHakMilik = async (id: string) => {
        try {
            await axios.delete(API_ENDPOINTS.DELETEHAKMILIKBYID(id));
            setRefHakMilik(refHakMilik.filter((item: any) => item.id !== id));
            const response = await axios.get(API_ENDPOINTS.GETHAKMILIK);
            setRefHakMilik(response.data);
        } catch (error) {
            console.error('Error deleting hak milik:', error);
        }
    };

    //Tipe
    useEffect(() => {
        const fetchTipe = async () => {
            try {
                const response = await axios.get(API_ENDPOINTS.GETTIPE);
                setRefTipe(response.data);
            } catch (error) {
                console.error('There was an error fetching the tipe!', error);
            }
        };
        fetchTipe();
    }, []);
    const handleSubmitTipe = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            console.log(tipe);
            await axios.post(API_ENDPOINTS.TAMBAHTIPE, { Keterangan: tipe });
            toast.current?.show({ severity: 'success', summary: 'Success', detail: 'Tipe Agunan berhasil ditambahkan', life: 3000 });
            setTipe('');
            const response = await axios.get(API_ENDPOINTS.GETTIPE);
            setRefTipe(response.data);
        } catch (error) {
            toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Gagal menambahkan tipe agunan', life: 3000 });
        } finally {
            setIsLoading(false);
        }
    };
    const handleDeleteTipe = async (id: string) => {
        try {
            await axios.delete(API_ENDPOINTS.DELETETIPEBYID(id));
            setRefTipe(refTipe.filter((item: any) => item.id !== id));
            const response = await axios.get(API_ENDPOINTS.GETTIPE);
            setRefTipe(response.data);
        } catch (error) {
            console.error('Error deleting tipe:', error);
        }
    };
    return (
        <TabView>
            <TabPanel header="Tambah Aspek">
                <div className="p-fluid mb-5">
                    <Toast ref={toast} />
                    <div className="card w-full">
                        <h5>Tambah/Ubah Aspek</h5>
                        <form onSubmit={handleSubmitAspek}>
                            <label htmlFor="titleAspek" className='font-bold'>Judul Aspek</label>
                            <div className='flex gap-3 align-items-center'>
                                <InputText id="titleAspek" value={titleAspek} onChange={(e) => setTitleAspek(e.target.value)} required />
                                <Button className='w-3' type="submit" label="Tambah" icon="pi pi-check" loading={isLoading} />
                            </div>
                        </form>
                    </div>
                </div>
                <DataTable value={refTitleAspek} style={{ minWidth: '50rem' }} paginator rows={5} rowsPerPageOptions={[5, 10]}>
                    <Column field="id" header="Id"></Column>
                    <Column field="title_aspek" header="Judul Aspek"></Column>
                    <Column header="Update" body={(rowData) => (
                        <div>
                            <Button icon="pi pi-pencil" style={{ border: '1', color: '#333' }} className='bg-blue-200' onClick={() => {
                                setSelectedRowAspek(rowData);
                                setTitleAspekEdit(rowData.title_aspek);
                                setVisibleEditAspek(true);
                            }} />
                        </div>
                    )} />
                    <Column header="Delete" body={(rowData) => (
                        <div>
                            <Button icon="pi pi-trash" style={{ border: '1', color: '#333' }} className='bg-red-200' onClick={() => {
                                setSelectedRowAspek(rowData);
                                setVisibleDeleteAspek(true);
                            }} />
                        </div>
                    )} />
                </DataTable>
                <Dialog header={`Hapus Data ${selectedRowAspek.title_aspek}`} visible={visibleDeleteAspek} style={{ width: '50vw' }} onHide={() => { if (!visibleDeleteAspek) return; setVisibleDeleteAspek(false); }}>
                    <label htmlFor="">Apakah anda yakin ingin menghapus data ini?</label>
                    <div className='flex justify-content-end mt-3'>
                        <Button label="No" icon="pi pi-times" onClick={() => setVisibleDeleteAspek(false)} className="p-button-text" />
                        <Button label="Yes" icon="pi pi-check" autoFocus onClick={() => { handleDelete(selectedRowAspek.id); setVisibleDeleteAspek(false); }} />
                    </div>
                </Dialog>
                <Dialog header={`Edit Aspek: ${selectedRowAspek.title_aspek}`} visible={visibleEditAspek} style={{ width: '50vw' }} onHide={() => setVisibleEditAspek(false)}>
                    <div className="p-fluid">
                        <div className="field">
                            <label htmlFor="titleAspekEdit" className='font-bold'>Judul Aspek</label>
                            <InputText id="titleAspekEdit" value={titleAspekEdit} onChange={(e) => setTitleAspekEdit(e.target.value)} required />
                        </div>
                        <div className='flex justify-content-end mt-3'>
                            <Button label="Cancel" icon="pi pi-times" onClick={() => setVisibleEditAspek(false)} className="p-button-text w-3" />
                            <Button label="Update" icon="pi pi-check" onClick={handleUpdateAspek} autoFocus className="w-3" />
                        </div>
                    </div>
                </Dialog>
            </TabPanel>
            <TabPanel header="Tambah Survey">
                <div className="p-fluid">
                    <Toast ref={toast} />
                    <div className="card w-full">
                        <h5>Tambah Survey</h5>
                        {/* <form onSubmit={handleSubmitSurvey}>
                            <div className='flex flex-row gap-3'>
                                <div className="field w-4">
                                    <label htmlFor="titleSurvey">Judul Survey</label>
                                    <InputText id="titleSurvey" value={titleSurvey} onChange={(e) => setTitleSurvey(e.target.value)} required />
                                </div>
                                <div className="field w-8">
                                    <label htmlFor="pilihanSurvey">Pilihan Survey</label>
                                    <InputText id="pilihanSurvey" value={pilihanSurvey} onChange={(e) => setPilihanSurvey(e.target.value)} required />
                                </div>
                            </div>
                            <Button type="submit" label="Tambah" icon="pi pi-check" loading={isLoading} />
                        </form> */}
                    </div>
                </div>
            </TabPanel>
            <TabPanel header="Tambah Jaminan">
                <div className="p-fluid">
                    <Toast ref={toast} />
                    <div className="card">
                        <h5>Tambah Jaminan</h5>
                        <div className='mb-5'>
                            <form onSubmit={handleSubmitJenisAgunan}>
                                <div className="field ">
                                    <label htmlFor="jenisAgunan" className='font-bold'>Jenis Agunan</label>
                                    <div className='flex gap-3 align-items-center'>
                                        <InputText id="jenisAgunan" value={jenisAgunan} onChange={(e) => setJenisAgunan(e.target.value)} required />
                                        <Button className='w-3' type="submit" label="Tambah" icon="pi pi-check" loading={isLoading} />
                                    </div>
                                </div>
                            </form>
                            <DataTable value={refJenisAgunan} style={{ minWidth: '50rem' }} paginator rows={3} rowsPerPageOptions={[3, 5, 10]}>
                                <Column field="id" header="Id"></Column>
                                <Column field="Kode" header="Kode"></Column>
                                <Column field="Keterangan" header="Jenis Agunan"></Column>
                                <Column header="Delete" body={(rowData) => (
                                    <div>
                                        <Button icon="pi pi-trash" style={{ border: '1', color: '#333' }} className='bg-red-200' onClick={() => {
                                            setSelectedRowJenisAgunan(rowData);
                                            setVisibleJenisAgunan(true);
                                        }} />
                                    </div>
                                )} />
                            </DataTable>
                            <Dialog header={`Hapus Data ${selectedRowJenisAgunan.Keterangan}`} visible={visibleJenisAgunan} style={{ width: '50vw' }} onHide={() => { if (!visibleJenisAgunan) return; setVisibleJenisAgunan(false); }}>
                                <label htmlFor="">Apakah anda yakin ingin menghapus data ini?</label>
                                <div className='flex justify-content-end mt-3'>
                                    <Button label="No" icon="pi pi-times" onClick={() => setVisibleJenisAgunan(false)} className="p-button-text" />
                                    <Button label="Yes" icon="pi pi-check" autoFocus onClick={() => { handleDeleteJenisAgunan(selectedRowJenisAgunan.id); setVisibleJenisAgunan(false); }} />
                                </div>
                            </Dialog>
                        </div>
                        <div className='mb-5'>
                            <form onSubmit={handleSubmitHakMilik}>
                                <div className="field ">
                                    <label htmlFor="hakMilik" className='font-bold'>Hak Milik</label>
                                    <div className='flex gap-3 align-items-center'>
                                        <InputText id="hakMilik" value={hakMilik} onChange={(e) => setHakMilik(e.target.value)} required />
                                        <Button className='w-3' type="submit" label="Tambah" icon="pi pi-check" loading={isLoading} />
                                    </div>
                                </div>
                            </form>
                            <DataTable value={refHakMilik} style={{ minWidth: '50rem' }} paginator rows={3} rowsPerPageOptions={[3, 5, 10]}>
                                <Column field="id" header="Id"></Column>
                                <Column field="Kode" header="Kode"></Column>
                                <Column field="Keterangan" header="Hak Milik"></Column>
                                <Column header="Delete" body={(rowData) => (
                                    <div>
                                        <Button icon="pi pi-trash" style={{ border: '1', color: '#333' }} className='bg-red-200' onClick={() => {
                                            setSelectedRowHakMilik(rowData);
                                            setVisibleHakMilik(true);
                                        }} />
                                    </div>
                                )} />
                            </DataTable>
                            <Dialog header={`Hapus Data ${selectedRowHakMilik.Keterangan}`} visible={visibleHakMilik} style={{ width: '50vw' }} onHide={() => { if (!visibleHakMilik) return; setVisibleHakMilik(false); }}>
                                <label htmlFor="">Apakah anda yakin ingin menghapus data ini?</label>
                                <div className='flex justify-content-end mt-3'>
                                    <Button label="No" icon="pi pi-times" onClick={() => setVisibleHakMilik(false)} className="p-button-text" />
                                    <Button label="Yes" icon="pi pi-check" autoFocus onClick={() => { handleDeleteHakMilik(selectedRowHakMilik.id); setVisibleHakMilik(false); }} />
                                </div>
                            </Dialog>
                        </div>
                        <div>
                            <form onSubmit={handleSubmitTipe}>
                                <div className="field ">
                                    <label htmlFor="Tipe" className='font-bold'>Tipe</label>
                                    <div className='flex gap-3 align-items-center'>
                                        <InputText id="Tipe" value={tipe} onChange={(e) => setTipe(e.target.value)} required />
                                        <Button className='w-3' type="submit" label="Tambah" icon="pi pi-check" loading={isLoading} />
                                    </div>
                                </div>
                            </form>
                            <DataTable value={refTipe} style={{ minWidth: '50rem' }} paginator rows={3} rowsPerPageOptions={[3, 5, 10]}>
                                <Column field="id" header="Id"></Column>
                                <Column field="Kode" header="Kode"></Column>
                                <Column field="Keterangan" header="Tipe"></Column>
                                <Column header="Delete" body={(rowData) => (
                                    <div>
                                        <Button icon="pi pi-trash" style={{ border: '1', color: '#333' }} className='bg-red-200' onClick={() => {
                                            setSelectedRowTipe(rowData);
                                            setVisibleTipe(true);
                                        }} />
                                    </div>
                                )} />
                            </DataTable>
                            <Dialog header={`Hapus Data ${selectedRowTipe.Keterangan}`} visible={visibleTipe} style={{ width: '50vw' }} onHide={() => { if (!visibleTipe) return; setVisibleTipe(false); }}>
                                <label htmlFor="">Apakah anda yakin ingin menghapus data ini?</label>
                                <div className='flex justify-content-end mt-3'>
                                    <Button label="No" icon="pi pi-times" onClick={() => setVisibleTipe(false)} className="p-button-text" />
                                    <Button label="Yes" icon="pi pi-check" autoFocus onClick={() => { handleDeleteTipe(selectedRowTipe.id); setVisibleTipe(false); }} />
                                </div>
                            </Dialog>
                        </div>
                    </div>
                </div>
            </TabPanel>
        </TabView>
    )
}

export default tambahanalisakredit