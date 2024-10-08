// 'use client';
// import { API_ENDPOINTS } from '@/app/api/losbackend/api';
// import axios from 'axios';
// import Link from 'next/link';
// import { Button } from 'primereact/button';
// import { Column } from 'primereact/column';
// import { DataTable } from 'primereact/datatable';
// import { Dialog } from 'primereact/dialog';
// import { Paginator } from 'primereact/paginator';
// import React, { useContext, useEffect, useRef, useState } from 'react';
// const RealisasiPinjaman = () => {
//     const [limaC, setlimaC] = useState([])
//     const [first, setFirst] = useState(0);
//     const [rows, setRows] = useState(5);
//     const [paginatedData, setPaginatedData] = useState([]);
//     const [visible, setVisible] = useState(false);
//     const [selectedRow, setSelectedRow] = useState<any>({});

//     useEffect(() => {
//         const fetchOutAspekForm = async () => {
//             try {
//                 const response = await axios.get(API_ENDPOINTS.GETALLLIMAC)
//                 setlimaC(response.data)
//                 console.log(response.data)
//                 setPaginatedData(response.data.slice(first, first + rows));
//             } catch (error) {
//                 console.error("There was an error fetching the survey!", error)
//             }
//         }
//         fetchOutAspekForm()
//     }, [first, rows])

//     const onPageChange = (event: any) => {
//         setFirst(event.first);
//         setRows(event.rows);
//         setPaginatedData(limaC.slice(event.first, event.first + event.rows));
//     };
//     const handleDelete = async (no_pengajuan: string) => {
//         try {
//             await axios.delete(API_ENDPOINTS.DELETELIMACBYID(no_pengajuan));
//             setlimaC(limaC.filter((item: any) => item.no_pengajuan !== no_pengajuan));
//             // Refresh data setelah delete
//             const response = await axios.get(API_ENDPOINTS.GETALLLIMAC);
//             setlimaC(response.data);
//             setPaginatedData(response.data.slice(first, first + rows));
//         } catch (error) {
//             console.error('Error deleting form 5C:', error);
//         }
//     };
//     return (
//         <div>
//             <div className="card">
//                 <div className='flex align-items-center justify-content-start mb-2'>
//                     {/* <Button label='Add' icon="pi pi-plus" onClick={() => setVisibleadd(true)} style={{ border: '1', color: '#333' }} className='bg-blue-200' /> */}
//                     <Link href={'/analisakredit/5c/form5c'} passHref>
//                         <Button label='Add' icon="pi pi-plus" style={{ border: '1', color: '#333' }} className='bg-blue-200' />
//                     </Link>
//                 </div>
//                 <DataTable value={paginatedData} tableStyle={{ minWidth: '50rem' }}>
//                     <Column field="id" header="ID" />
//                     <Column field="NomorRekening" header="Nomor Rekening" />
//                     <Column field="characters" header="Characters" />
//                     <Column field="capacity" header="Capacity" />
//                     <Column field="capital" header="Capital" />
//                     <Column field="collateral" header="Collateral" />
//                     <Column field="conditions" header="Conditions" />
//                     <Column header="Edit" body={(rowData) => (
//                         <Link href={`/analisakredit/5c/form5c/${rowData.id}`} passHref>
//                             <Button icon="pi pi-pencil" style={{ border: '1', color: '#333' }} className='bg-blue-200' />
//                         </Link>
//                     )} />
//                     <Column header="Delete" body={(rowData) => (
//                         <div className='flex justify-content-center'>
//                             <Button icon="pi pi-trash" style={{ border: '1', color: '#333' }} className='bg-red-200' onClick={() => {
//                                 setSelectedRow(rowData);
//                                 setVisible(true);
//                             }} />
//                             <Dialog header={`Hapus Data ${selectedRow.NomorRekening}`} visible={visible} style={{ width: '50vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
//                                 <label htmlFor="">Apakah anda yakin ingin menghapus data ini?</label>
//                                 <div className='flex justify-content-end mt-3'>
//                                     <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
//                                     <Button label="Yes" icon="pi pi-check" autoFocus onClick={() => {handleDelete(selectedRow.id); setVisible(false); }} /> 
//                                 </div>
//                             </Dialog>
//                         </div>
//                     )} />
//                 </DataTable>
//                 <Paginator
//                     first={first}
//                     rows={rows}
//                     totalRecords={limaC.length}
//                     rowsPerPageOptions={[5, 10, 20]}
//                     onPageChange={onPageChange}
//                 />
//             </div>
//         </div>
//     );
// };

// export default RealisasiPinjaman;
