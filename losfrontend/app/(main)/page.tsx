'use client';
import React, { useContext, useEffect, useRef, useState } from 'react';
import Debiturpage from '../(full-page)/admin/debitur/page';
import axios from 'axios';
import { API_ENDPOINTS } from '../api/losbackend/api';

const Dashboard = () => {
    const [allproduk, setAllProduk] = useState([]);
    const formatDate = (dateString: any) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${day}-${month}-${year}`;
    };
    useEffect(() => {
        const fetchAllProduk = async () => {
            try {
                const response = await axios.get(API_ENDPOINTS.GETALLPRODUK);
                const formattedData = response.data.map((item: any) => ({
                    ...item,
                    tanggal_aplikasi: formatDate(item.tanggal_aplikasi),
                    tanggal_permohonan: formatDate(item.tanggal_permohonan)
                }));
                setAllProduk(formattedData);
            } catch (error) {
                console.error('There was an error fetching the users!', error);
            } finally {
                // setIsLoading(false);
            }
        };
        fetchAllProduk();
    }, []);
    const statusCount = allproduk.reduce((acc: any, curr: any) => {
        acc[curr.status] = (acc[curr.status] || 0) + 1;
        return acc;
    }, {});
    return (
        <div>
            <h4><strong>Overview</strong></h4>
            <div className='grid justify-content-between'>
                <div className="col-12 lg:col-6 xl:col-4 ">
                    <div className="card w-12 mb-0 ">
                        <div className="flex justify-content-between mb-3">
                            <div>
                                <span className="block text-500 font-medium mb-3">Diajukan</span>
                                <div className="text-900 font-medium text-xl">{statusCount[1] || 0}</div>
                            </div>
                            <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                <i className="pi pi-file-pdf text-blue-500 text-xl" />
                            </div>
                        </div>
                        {/* <span className="text-green-500 font-medium">24 new </span>
                        <span className="text-500">since last visit</span> */}
                    </div>
                </div>
                <div className="col-12 lg:col-6 xl:col-4">
                    <div className="card mb-0">
                        <div className="flex justify-content-between mb-3">
                            <div>
                                <span className="block text-500 font-medium mb-3">Disetujui</span>
                                <div className="text-900 font-medium text-xl">{statusCount[2] || 0}</div>
                            </div>
                            <div className="flex align-items-center justify-content-center bg-cyan-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                <i className="pi pi-check-circle text-cyan-500 text-xl" />
                            </div>
                        </div>
                        {/* <span className="text-green-500 font-medium">%52+ </span>
                        <span className="text-500">since last week</span> */}
                    </div>
                </div>
                <div className="col-12 lg:col-6 xl:col-4">
                    <div className="card mb-0">
                        <div className="flex justify-content-between mb-3">
                            <div>
                                <span className="block text-500 font-medium mb-3">Ditolak</span>
                                <div className="text-900 font-medium text-xl">{statusCount[3] || 0}</div>
                            </div>
                            <div className="flex align-items-center justify-content-center bg-orange-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                <i className="pi pi-times-circle text-orange-500 text-xl" />
                            </div>
                        </div>
                        {/* <span className="text-green-500 font-medium">520 </span>
                        <span className="text-500">newly registered</span> */}
                    </div>
                </div>
            </div>
            <h5>Details</h5>
            <Debiturpage />
        </div>
    );
};

export default Dashboard;
