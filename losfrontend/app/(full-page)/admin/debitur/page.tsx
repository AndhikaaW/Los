"use client"
import { API_ENDPOINTS } from '@/app/api/losbackend/api';
import axios from 'axios';
import Link from 'next/link';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import React, { useEffect, useState } from 'react'

const Debiturpage = () => {
  const [data, setData] = useState([])
  const [selectedRow, setSelectedRow] = useState<any>({});
  const [visible, setVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchCif = async () => {
      try {
        const response = await axios.get(API_ENDPOINTS.GETALLPEMOHON);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching CIF data:", error);
      }
    };
    fetchCif();
  }, []);

  const handleDelete = async (Cif: string) => {
    try {
      await axios.delete(API_ENDPOINTS.DELETEPEMOHONBYID(Cif));
      setData(data.filter((item: any) => item.Cif !== Cif));
      const response = await axios.get(API_ENDPOINTS.GETALLPEMOHON);
      setData(response.data);
    } catch (error) {
      console.error('Error deleting form pemohon:', error);
    }
  };

  const filteredData = data.filter((item: any) => {
    return item.Nama.toLowerCase().includes(searchTerm.toLowerCase()) || item.KTP.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <div className="card">
        <div className="p-input-icon-right flex justify-content-end mb-3">
          <i className="pi pi-search" />
          <InputText value={searchTerm} onChange={(e: any) => setSearchTerm(e.target.value)} placeholder="Cari..." />
        </div>
        <DataTable value={filteredData} tableStyle={{ minWidth: '30rem' }} paginator={true} rows={5} rowsPerPageOptions={[5, 10, 20]}>
          <Column field="id" header="ID" />
          <Column field="Cif" header="CIF" />
          <Column field="Nama" header="Nama Lengkap" />
          <Column field="Kelamin" header="Jenis Kelamin" />
          <Column field="StatusPerkawinan" header="Status Perkawinan" />
          <Column field="KTP" header="No KTP" />
          <Column field="no_hp" header="No HP" />
          <Column field="Alamat" header="Alamat" />
          <Column field="nama_usaha" header="Nama Usaha" />
          <Column field="ref_profesi_sampingan.Keterangan" header="Profesi Sampingan" />
          <Column header="Edit" body={(rowData) => (
            <Link href={`/pemohon/formpemohon/${rowData.id}`} passHref>
              <Button icon="pi pi-pencil" style={{ border: '1', color: '#333' }} className='bg-blue-200' />
            </Link>
          )} />
          <Column header="Pengajuan" body={(rowData) => (
            <Link href={`/admin/debitur/pengajuandebitur/${rowData.Cif}`} passHref>
              <Button icon="pi pi-eye" style={{ border: '1', color: '#333' }} className='bg-blue-200' />
            </Link>
          )} />
          <Column header="Delete" body={(rowData) => (
            <div className='flex justify-content-center'>
              <Button icon="pi pi-trash" style={{ border: '1', color: '#333' }} className='bg-red-200' onClick={() => {
                setSelectedRow(rowData);
                setVisible(true);
              }} />
              <Dialog header={`Hapus Data ${selectedRow.Cif}`} visible={visible} style={{ width: '50vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
                <label htmlFor="">Apakah anda yakin ingin menghapus data ini?</label>
                <div className='flex justify-content-end mt-3'>
                  <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
                  <Button label="Yes" icon="pi pi-check" autoFocus onClick={() => { handleDelete(selectedRow.Cif); setVisible(false); }} />
                </div>
              </Dialog>
            </div>
          )} />
        </DataTable>
      </div>
    </div>
  )
}

export default Debiturpage