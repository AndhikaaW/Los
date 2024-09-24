"use client"
import React, { useState, useEffect, useRef } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { Toast } from 'primereact/toast';
import axios from 'axios';
import { API_ENDPOINTS } from '@/app/api/losbackend/api';
import DataTableWithCRUD from '@/app/(full-page)/component/datatable/page'; // Pastikan path ini benar

const TambahanAnalisaKredit = () => {
    const [refTitleAspek, setRefTitleAspek] = useState([]);
    const [refJenisAgunan, setRefJenisAgunan] = useState([]);
    const [refHakMilik, setRefHakMilik] = useState([]);
    const [refTipe, setRefTipe] = useState([]);
    const [refJenisPengikatan, setRefJenisPengikatan] = useState([]);
    const [refHubunganPemilik, setRefHubunganPemilik] = useState([]);
    const [refSurvey, setRefSurvey] = useState([]);

    const [refBidangUsaha, setRefBidangUsaha] = useState([]);
    const [refSifatKredit, setRefSifatKredit] = useState([]);
    const [refJenisAngsuran, setRefJenisAngsuran] = useState([]);
    const toast = useRef<Toast>(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const [
                // aspekResponse, 
                // agunanResponse,
                // hakMilikResponse, 
                // tipeResponse, 
                // pengikatanResponse, 
                // hubunganPemilikResponse, 
                // surveyResponse, 
                bidangUsahaResponse, 
                sifatKreditResponse] = await Promise.all([
                // axios.get(API_ENDPOINTS.GETTITLEASPEK),
                // axios.get(API_ENDPOINTS.GETJENISAGUNAN),
                // axios.get(API_ENDPOINTS.GETHAKMILIK),
                // axios.get(API_ENDPOINTS.GETTIPE),
                // axios.get(API_ENDPOINTS.GETJENISPENGIKATAN),
                // axios.get(API_ENDPOINTS.GETHUBUNGANPEMILIK),
                // axios.get(API_ENDPOINTS.GETSURVEY),
                axios.get(API_ENDPOINTS.GETBIDANGUSAHA),
                axios.get(API_ENDPOINTS.GETSIFATKREDIT)
            ]);
            // setRefTitleAspek(aspekResponse.data);
            // setRefJenisAgunan(agunanResponse.data);
            // setRefHakMilik(hakMilikResponse.data);
            // setRefTipe(tipeResponse.data);
            // setRefJenisPengikatan(pengikatanResponse.data);
            // setRefHubunganPemilik(hubunganPemilikResponse.data);
            // setRefSurvey(surveyResponse.data);
            setRefBidangUsaha(bidangUsahaResponse.data);
            setRefSifatKredit(sifatKreditResponse.data);
        } catch (error) {
            console.error("Error fetching data:", error);
            toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Gagal mengambil data', life: 3000 });
        }
    };

    const handleAdd = async (endpoint: string, data: any, setterFunction: any, successMessage: string) => {
        try {
            await axios.post(endpoint, data);
            toast.current?.show({ severity: 'success', summary: 'Success', detail: successMessage, life: 3000 });
            fetchData();
        } catch (error) {
            console.error('Error adding data:', error);
            toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Gagal menambahkan data', life: 3000 });
        }
    };

    const handleUpdate = async (endpoint: (id: string) => string, Kode: string, data: any, successMessage: string) => {
        try {
            await axios.put(endpoint(Kode), data);
            toast.current?.show({ severity: 'success', summary: 'Success', detail: successMessage, life: 3000 });
            fetchData();
        } catch (error) {
            console.error('Error updating data:', error);
            toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Gagal mengupdate data', life: 3000 });
        }
    };

    const handleDelete = async (endpoint: (id: string) => string, Kode: string, successMessage: string) => {
        try {
            await axios.delete(endpoint(Kode));
            toast.current?.show({ severity: 'success', summary: 'Success', detail: successMessage, life: 3000 });
            fetchData();
        } catch (error) {
            console.error('Error deleting data:', error);
            toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Gagal menghapus data', life: 3000 });
        }
    };

    return (
        <TabView activeIndex={1}>
            <Toast ref={toast} />
            <TabPanel header="Tambah Aspek">
                <DataTableWithCRUD
                    data={refTitleAspek}
                    columns={[
                        // { field: 'id', header: 'Id' },
                        { field: 'Keterangan', header: 'Judul Aspek' }
                    ]}
                    onAdd={(Keterangan: any) => handleAdd(API_ENDPOINTS.TAMBAHTITLEASPEK, { Keterangan }, setRefTitleAspek, 'Aspek berhasil ditambahkan')}
                    onUpdate={(Kode: string, Keterangan: string) => handleUpdate(API_ENDPOINTS.UPDATETITLEASPEKBYID, Kode, { Keterangan }, 'Aspek berhasil diupdate')}
                    onDelete={(Kode: string) => handleDelete(API_ENDPOINTS.DELETETITLEASPEKBYID, Kode, 'Aspek berhasil dihapus')}
                    nameField="Keterangan"
                    inputLabel="Judul Aspek"
                />
            </TabPanel>
            <TabPanel header="Tambah Jaminan">
                <DataTableWithCRUD
                    data={refJenisAgunan}
                    columns={[
                        // { field: 'Kode', header: 'Kode' },
                        { field: 'Keterangan', header: 'Jenis Agunan' }
                    ]}
                    onAdd={(Keterangan: any) => handleAdd(API_ENDPOINTS.TAMBAHJENISAGUNAN, { Keterangan }, setRefJenisAgunan, 'Jenis Agunan berhasil ditambahkan')}
                    onUpdate={(Kode: string, Keterangan: string) => handleUpdate(API_ENDPOINTS.UPDATEJENISAGUNANBYID, Kode, { Keterangan }, 'Jenis Agunan berhasil diupdate')}
                    onDelete={(Kode: string) => handleDelete(API_ENDPOINTS.DELETEJENISAGUNANBYID, Kode, 'Jenis Agunan berhasil dihapus')}
                    idField="Kode"
                    nameField="Keterangan"
                    inputLabel="Jenis Agunan"
                />
                <DataTableWithCRUD
                    data={refHakMilik}
                    columns={[
                        // { field: 'Kode', header: 'Kode' },
                        { field: 'Keterangan', header: 'Hak Milik' }
                    ]}
                    onAdd={(Keterangan: any) => handleAdd(API_ENDPOINTS.TAMBAHHAKMILIK, { Keterangan }, setRefHakMilik, 'Hak Milik berhasil ditambahkan')}
                    onUpdate={(Kode: string, Keterangan: string) => handleUpdate(API_ENDPOINTS.UPDATEHAKMILIKBYID, Kode, { Keterangan }, 'Hak Milik berhasil diupdate')}
                    onDelete={(Kode: string) => handleDelete(API_ENDPOINTS.DELETEHAKMILIKBYID, Kode, 'Hak Milik berhasil dihapus')}
                    idField="Kode"
                    nameField="Keterangan"
                    inputLabel="Hak Milik"
                />
                <DataTableWithCRUD
                    data={refTipe}
                    columns={[
                        // { field: 'Kode', header: 'Kode' },
                        { field: 'Keterangan', header: 'Tipe' }
                    ]}
                    onAdd={(Keterangan: any) => handleAdd(API_ENDPOINTS.TAMBAHTIPE, { Keterangan }, setRefTipe, 'Tipe berhasil ditambahkan')}
                    onUpdate={(Kode: string, Keterangan: string) => handleUpdate(API_ENDPOINTS.UPDATETIPEBYID, Kode, { Keterangan }, 'Tipe berhasil diupdate')}
                    onDelete={(Kode: string) => handleDelete(API_ENDPOINTS.DELETETIPEBYID, Kode, 'Tipe berhasil dihapus')}
                    idField="Kode"
                    nameField="Keterangan"
                    inputLabel="Tipe"
                />
                <DataTableWithCRUD
                    data={refJenisPengikatan}
                    columns={[
                        // { field: 'Kode', header: 'Kode' },
                        { field: 'Keterangan', header: 'Jenis Pengikatan' }
                    ]}
                    onAdd={(Keterangan: any) => handleAdd(API_ENDPOINTS.TAMBAHJENISPENGIKATAN, { Keterangan }, setRefJenisPengikatan, 'Jenis Pengikatan berhasil ditambahkan')}
                    onUpdate={(Kode: string, Keterangan: string) => handleUpdate(API_ENDPOINTS.UPDATEJENISPENGIKATANBYID, Kode, { Keterangan }, 'Jenis Pengikatan berhasil diupdate')}
                    onDelete={(Kode: string) => handleDelete(API_ENDPOINTS.DELETEJENISPENGIKATANBYID, Kode, 'Jenis Pengikatan berhasil dihapus')}
                    idField="Kode"
                    nameField="Keterangan"
                    inputLabel="Jenis Pengikatan"
                />
                <DataTableWithCRUD
                    data={refHubunganPemilik}
                    columns={[
                        // { field: 'Kode', header: 'Kode' },
                        { field: 'Keterangan', header: 'Hubungan Pemilik' }
                    ]}
                    onAdd={(Keterangan: any) => handleAdd(API_ENDPOINTS.TAMBAHHUBUNGANPEMILIK, { Keterangan }, setRefHubunganPemilik, 'Hubungan Pemilik berhasil ditambahkan')}
                    onUpdate={(Kode: string, Keterangan: string) => handleUpdate(API_ENDPOINTS.UPDATEHUBUNGANPEMILIKBYID, Kode, { Keterangan }, 'Hubungan Pemilik berhasil diupdate')}
                    onDelete={(Kode: string) => handleDelete(API_ENDPOINTS.DELETEHUBUNGANPEMILIKBYID, Kode, 'Hubungan Pemilik berhasil dihapus')}
                    idField="Kode"
                    nameField="Keterangan"
                    inputLabel="Jenis Pengikatan"
                />
            </TabPanel>
            <TabPanel header="Tambah Survey">
                <DataTableWithCRUD
                    data={refSurvey}
                    columns={[
                        { field: 'Keterangan', header: 'Judul Survey' },
                        // { field: 'pilihan_survey', header: 'Pilihan Survey', body: (rowData:any) => rowData.pilihan_survey.map((pilihan:any) => `[object]`).join(', ') }
                    ]}
                // onAdd={(Keterangan: any) => handleAdd(API_ENDPOINTS.TAMBAHTITLEASPEK, { Keterangan }, setRefTitleAspek, 'Aspek berhasil ditambahkan')}
                // onUpdate={(id: string, Keterangan: string) => handleUpdate(API_ENDPOINTS.UPDATETITLEASPEKBYID, id, { Keterangan }, 'Aspek berhasil diupdate')}
                // onDelete={(id: string) => handleDelete(API_ENDPOINTS.DELETETITLEASPEKBYID, id, 'Aspek berhasil dihapus')}
                // idField="Kode"
                // nameField="title_aspek"
                // inputLabel="Judul Aspek"
                />
            </TabPanel>
            <TabPanel header="Tambah Pengajuan">
                <DataTableWithCRUD
                    data={refBidangUsaha}
                    columns={[
                        { field: 'Keterangan', header: 'Bidang Usaha' },
                    ]}
                    onAdd={(Keterangan: any) => handleAdd(API_ENDPOINTS.TAMBAHBIDANGUSAHA, { Keterangan }, setRefBidangUsaha, 'Bidang Usaha berhasil ditambahkan')}
                    onUpdate={(Kode: string, Keterangan: string) => handleUpdate(API_ENDPOINTS.UPDATEBIDANGUSAHA, Kode, { Keterangan }, 'Bidang Usaha berhasil diupdate')}
                    onDelete={(Kode: string) => handleDelete(API_ENDPOINTS.DELETEBIDANGUSAHA, Kode, 'Bidang Usaha berhasil dihapus')}
                    idField="Kode"
                    nameField="Keterangan"
                    inputLabel="Bidang Usaha"
                />
                <DataTableWithCRUD
                    data={refSifatKredit}
                    columns={[
                        { field: 'Keterangan', header: 'Sifat Kredit' },
                    ]}
                    onAdd={(Keterangan: any) => handleAdd(API_ENDPOINTS.TAMBAHSIFATKREDIT, { Keterangan }, setRefSifatKredit, 'Sifat Kredit berhasil ditambahkan')}
                    onUpdate={(Kode: string, Keterangan: string) => handleUpdate(API_ENDPOINTS.UPDATESIFATKREDIT, Kode, { Keterangan }, 'Sifat Kredit berhasil diupdate')}
                    onDelete={(Kode: string) => handleDelete(API_ENDPOINTS.DELETESIFATKREDIT, Kode, 'Sifat Kredit berhasil dihapus')}
                    idField="Kode"
                    nameField="Keterangan"
                    inputLabel="Sifat Kredit"
                />
            </TabPanel>
        </TabView>
    );
};

export default TambahanAnalisaKredit;