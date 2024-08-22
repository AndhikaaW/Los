'use client';
import React, { useContext, useEffect, useRef, useState } from 'react';

const Dashboard = () => {
    return (
        // <div className="surface-card p-4 shadow-2 border-round">
        //     <div className='col-12'>{/*info keuangan*/}
        //         <fieldset className="grid border-round mb-2 p-2"> 
        //             <legend className="text-xl font-bold">Info Keuangan</legend>
        //             <div className="col-12 md:col-4">
        //                 <label className="block text-900 font-medium mb-2">Penjualan/Omset (Ramai)</label>
        //                 <input type="number" placeholder='0' className="p-inputtext p-component w-full" />
        //             </div>
        //             <div className="col-12 md:col-4">
        //                 <label className="block text-900 font-medium mb-2">Penjualan/Omset (Normal)</label>
        //                 <input type="number" placeholder='0' className="p-inputtext p-component w-full" />
        //             </div>
        //             <div className="col-12 md:col-4">
        //                 <label className="block text-900 font-medium mb-2">Penjualan/Omset (Sepi)</label>
        //                 <input type="number" placeholder='0' className="p-inputtext p-component w-full" />
        //             </div>
        //         </fieldset>
        //     </div>
        //     <div className="grid md:justify-content-between"> {/*komponen biaya usaha*/}
        //         <div className="col-12 md:col-6">
        //             <fieldset className=' border-round p-4'>
        //                 <legend className="text-xl font-bold">Komponen Biaya Usaha</legend>
        //                 <div className="mb-2">
        //                     <label className="block text-900 font-medium mb-2">Harga Pokok Penjualan</label>
        //                     <input type="number" placeholder='0' className="p-inputtext p-component w-full" />
        //                 </div>
        //                 <div className="mb-2">
        //                     <label className="block text-900 font-medium mb-2">Biaya Tenaga Kerja Tidak Langsung</label>
        //                     <input type="number" placeholder='0' className="p-inputtext p-component w-full" />
        //                 </div>
        //                 <div className="mb-2">
        //                     <label className="block text-900 font-medium mb-2">OHC (Over Head Cost)</label>
        //                     <input type="number" placeholder='0' className="p-inputtext p-component w-full" />
        //                 </div>
        //                 <div className="mb-2">
        //                     <label className="block text-900 font-medium mb-2">Biaya Usaha Lainnya</label>
        //                     <input type="number" placeholder='0' className="p-inputtext p-component w-full" />
        //                 </div>
        //             </fieldset>
        //         </div>

        //         <div className="col-12 md:col-6 mb-4">
        //             <fieldset className='border-round p-4'>
        //                 <legend className="text-xl font-bold">Komponen Biaya Hidup</legend>
        //                 <div className="mb-2">
        //                     <label className="block text-900 font-medium mb-2">Biaya Rumah Tangga</label>
        //                     <input type="number" placeholder='0' className="p-inputtext p-component w-full" />
        //                 </div>
        //                 <div className="mb-2">
        //                     <label className="block text-900 font-medium mb-2">Biaya Sekolah</label>
        //                     <input type="number" placeholder='0' className="p-inputtext p-component w-full" />
        //                 </div>
        //                 <div className="mb-2">
        //                     <label className="block text-900 font-medium mb-2">Biaya PLN dan PDAM</label>
        //                     <input type="number" placeholder='0' className="p-inputtext p-component w-full" />
        //                 </div>
        //                 <div className="mb-2">
        //                     <label className="block text-900 font-medium mb-2">Biaya Transportasi dan Komunikasi</label>
        //                     <input type="number" placeholder='0' className="p-inputtext p-component w-full" />
        //                 </div>
        //                 <div className="mb-2">
        //                     <label className="block text-900 font-medium mb-2">Biaya Lain-Lain</label>
        //                     <input type="number" placeholder='0' className="p-inputtext p-component w-full" />
        //                 </div>
        //             </fieldset>
        //         </div>
        //     </div>
        //     <div className="grid md:justify-content-between"> {/*pendapatan dan biaya lain*/}
        //         <div className="col-12 md:col-6">
        //             <fieldset className='mb-4 p-4 border-round '>
        //                 <legend className="text-xl font-bold">Pendapatan dan Biaya Lainnya</legend>
        //                 <div className="mb-2">
        //                     <label className="block text-900 font-medium mb-2">Pendapatan Lainnya</label>
        //                     <input type="number" placeholder='0' className="p-inputtext p-component w-full" />
        //                 </div>
        //                 <div className="mb-2">
        //                     <label className="block text-900 font-medium mb-2">Biaya Lainnya</label>
        //                     <input type="number" placeholder='0' className="p-inputtext p-component w-full" />
        //                 </div>
        //                 <label className="block text-900 font-medium mb-2">Bukti Kwitansi/Slip Pendapatan Lainnya</label>
        //                 <div className="flex align-items-center mb-3 gap-3">
        //                     <div className="mb-2">
        //                         <input type="radio" id="adaPendapatan" name="buktiPendapatan" className="mr-2" />
        //                         <label htmlFor="adaPendapatan">Ada</label>
        //                     </div>
        //                     <div className="mb-2">
        //                         <input type="radio" id="tidakAdaPendapatan" name="buktiPendapatan" className="mr-2" />
        //                         <label htmlFor="tidakAdaPendapatan">Tidak Ada</label>
        //                     </div>
        //                 </div>
        //                 <label className="block text-900 font-medium mb-2">Bukti Kwitansi/Slip Biaya Lainnya</label>
        //                 <div className="flex align-items-center gap-3">
        //                     <div className="mb-2">
        //                         <input type="radio" id="adaBiaya" name="buktiBiaya" className="mr-2" />
        //                         <label htmlFor="adaBiaya">Ada</label>
        //                     </div>
        //                     <div className="mb-2">
        //                         <input type="radio" id="tidakAdaBiaya" name="buktiBiaya" className="mr-2" />
        //                         <label htmlFor="tidakAdaBiaya">Tidak Ada</label>
        //                     </div>
        //                 </div>
        //             </fieldset>
        //         </div>

        //         <div className="col-12 md:col-6">
        //             <fieldset className='mb-4 p-4 border-round'>
        //                 <legend className="text-xl font-bold">Kewajiban - Kewajiban</legend>
        //                 <div className="mb-2">
        //                     <label className="block text-900 font-medium mb-2">Bank dan Non Bank (Data SLIK)</label>
        //                     <input type="text" className="p-inputtext p-component w-full" />
        //                 </div>
        //                 <div className="mb-2">
        //                     <label className="block text-900 font-medium mb-2">Koperasi</label>
        //                     <input type="number" placeholder='0' className="p-inputtext p-component w-full" />
        //                 </div>
        //                 <div className="mb-2">
        //                     <label className="block text-900 font-medium mb-2">Lain-Lain</label>
        //                     <input type="number" placeholder='0' className="p-inputtext p-component w-full" />
        //                 </div>
        //                 <div className="mb-2">
        //                     <label className="block text-900 font-medium mb-2">Angsuran Baru</label>
        //                     <input type="text" className="p-inputtext p-component w-full" />
        //                 </div>
        //             </fieldset>
        //         </div>
        //     </div>
        //     <div className="grid md:justify-content-between"> {/*aktiva*/}
        //         <div className="col-12 md:col-6">
        //             <fieldset className='mb-4 p-4 border-round'>
        //                 <legend className="text-xl font-bold">Aktiva</legend>
        //                 <h5 className="text-xl font-bold mb-3">Aktiva Lancar</h5>
        //                 <div className="mb-2">
        //                     <label className="block text-900 font-medium mb-2">Kas</label>
        //                     <input type="number" placeholder='0' className="p-inputtext p-component w-full" />
        //                 </div>
        //                 <div className="mb-2">
        //                     <label className="block text-900 font-medium mb-2">Bank</label>
        //                     <input type="number" placeholder='0' className="p-inputtext p-component w-full" />
        //                 </div>
        //                 <div className="mb-2">
        //                     <label className="block text-900 font-medium mb-2">Piutang</label>
        //                     <input type="number" placeholder='0' className="p-inputtext p-component w-full" />
        //                 </div>
        //                 <div className="mb-2">
        //                     <label className="block text-900 font-medium mb-2">Persediaan Barang Jadi / Dalam Proses</label>
        //                     <input type="number" placeholder='0' className="p-inputtext p-component w-full" />
        //                 </div>
        //                 <div className="mb-2">
        //                     <label className="block text-900 font-medium mb-2">Aktiva Lancar Lainnya</label>
        //                     <input type="number" placeholder='0' className="p-inputtext p-component w-full" />
        //                 </div>
        //                 <div className="mb-2">
        //                     <label className="block text-900 font-medium mb-2">Sub Jumlah</label>
        //                     <input type="number" placeholder='0' className="p-inputtext p-component w-full" />
        //                 </div>
        //                 <h5 className="text-xl font-bold mb-3">Aktiva Tetap</h5>
        //                 <div className="mb-2">
        //                     <label className="block text-900 font-medium mb-2">Tanah dan Bangunan</label>
        //                     <input type="number" placeholder='0' className="p-inputtext p-component w-full" />
        //                 </div>
        //                 <div className="mb-2">
        //                     <label className="block text-900 font-medium mb-2">Peralatan Usaha</label>
        //                     <input type="number" placeholder='0' className="p-inputtext p-component w-full" />
        //                 </div>
        //                 <div className="mb-2">
        //                     <label className="block text-900 font-medium mb-2">Kendaraan</label>
        //                     <input type="number" placeholder='0' className="p-inputtext p-component w-full" />
        //                 </div>
        //                 <div className="mb-2">
        //                     <label className="block text-900 font-medium mb-2">Aktiva Tetap Lainnya</label>
        //                     <input type="number" placeholder='0' className="p-inputtext p-component w-full" />
        //                 </div>
        //                 <div className="mb-6">
        //                     <label className="block text-900 font-medium mb-2">Sub Jumlah</label>
        //                     <input type="number" placeholder='0' className="p-inputtext p-component w-full" />
        //                 </div>
        //                 <div className="mb-2">
        //                     <label className="block text-900 font-medium mb-2">Jumlah</label>
        //                     <input type="number" placeholder='0' className="p-inputtext p-component w-full" />
        //                 </div>
        //             </fieldset>
        //         </div>

        //         <div className="col-12 md:col-6">
        //             <fieldset className="mb-4 p-4 border-round">
        //                 <legend className="text-xl font-bold text-in-border">Passiva</legend>
        //                 <h5 className="text-xl font-bold mb-3">Hutang</h5>
        //                 <div className="mb-2">
        //                     <label className="block text-900 font-medium mb-2">Total Baki Debet Pinjaman</label>
        //                     <input type="number" placeholder='0' className="p-inputtext p-component w-full" />
        //                 </div>
        //                 <div className="mb-2">
        //                     <label className="block text-900 font-medium mb-2">IDR</label>
        //                     <input type="number" placeholder='0' className="p-inputtext p-component w-full" />
        //                 </div>
        //                 <div className="mb-2">
        //                     <label className="block text-900 font-medium mb-2">Jangka Pendek</label>
        //                     <input type="number" placeholder='0' className="p-inputtext p-component w-full" />
        //                 </div>
        //                 <div className="mb-2">
        //                     <label className="block text-900 font-medium mb-2">Total Baki Debet Pinjaman</label>
        //                     <input type="number" placeholder='0' className="p-inputtext p-component w-full" />
        //                 </div>
        //                 <div className="mb-2">
        //                     <label className="block text-900 font-medium mb-2">IDR</label>
        //                     <input type="number" placeholder='0' className="p-inputtext p-component w-full" />
        //                 </div>
        //                 <div className="mb-2">
        //                     <label className="block text-900 font-medium mb-2">Jangka Panjang</label>
        //                     <input type="number" placeholder='0' className="p-inputtext p-component w-full" />
        //                 </div>
        //                 <div className="mb-2">
        //                     <label className="block text-900 font-medium mb-2">Sub Jumlah</label>
        //                     <input type="number" placeholder='0' className="p-inputtext p-component w-full" />
        //                 </div>
        //                 <h5 className="text-xl font-bold mb-3">Modal</h5>
        //                 <div className="mb-2">
        //                     <label className="block text-900 font-medium mb-2">Modal Sendiri</label>
        //                     <input type="number" placeholder='0' className="p-inputtext p-component w-full" />
        //                 </div>
        //                 <div className="mb-6">
        //                     <label className="block text-900 font-medium mb-2">Laba</label>
        //                     <input type="number" placeholder='0' className="p-inputtext p-component w-full" />
        //                 </div>
        //                 <div className="mb-6">
        //                     <label className="block text-900 font-medium mb-2">Sub Jumlah</label>
        //                     <input type="number" placeholder='0' className="p-inputtext p-component w-full" />
        //                 </div>
        //                 <div className="mb-2">
        //                     <label className="block text-900 font-medium mb-2">Jumlah</label>
        //                     <input type="number" placeholder='0' className="p-inputtext p-component w-full" />
        //                 </div>
        //             </fieldset>
        //         </div>
        //     </div>
        // </div>
        <div>
            
        </div>
    );
};

export default Dashboard;
