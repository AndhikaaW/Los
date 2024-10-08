"use client"
import { API_ENDPOINTS } from '@/app/api/losbackend/api';
import axios from 'axios';
import Link from 'next/link';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Paginator } from 'primereact/paginator';
import React, { useEffect, useState } from 'react'

const Debiturpage = () => {
  const [data, setData] = useState([])
  // const [first, setFirst] = useState(0);
  // const [rows, setRows] = useState(2);
  // const onPageChange = (event: any) => {
  //   setFirst(event.first);
  //   setRows(event.rows);
  // };

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
  return (
    <div>
      {/* <h3>Data yang dipilih:</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div className="card">
        <DataTable value={data} tableStyle={{ minWidth: '30rem' }}>
          <Column field="id" header="ID" />
          <Column field="Cif" header="CIF" />
          <Column field="Nama" header="Nama Lengkap" />
          <Column field="Kelamin" header="Jenis Kelamin" />
          <Column field="StatusPerkawinan" header="Status Perkawinan" />
          <Column field="KTP" header="No KTP" />
          <Column field="no_hp" header="No HP" />
          <Column field="Alamat" header="Alamat" />
          <Column field="nama_usaha" header="Nama Usaha" />
          <Column header="Pengajuan" body={(rowData) => (
            <Link href={`/admin/debitur/pengajuandebitur/${rowData.Cif}`} passHref>
              <Button icon="pi pi-eye" style={{ border: '1', color: '#333' }} className='bg-blue-200' />
            </Link>
          )} />

        </DataTable>
        {/* <Paginator
          first={first}
          rows={rows}
          totalRecords={data.length}
          rowsPerPageOptions={[2, 4, 6]}
          onPageChange={onPageChange}
        /> */}
      </div>
    </div>
  )
}

export default Debiturpage