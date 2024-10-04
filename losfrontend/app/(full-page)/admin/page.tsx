"use client"
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { API_ENDPOINTS } from '@/app/api/losbackend/api';
import Debiturpage from './debitur/page';

const Adminpage = () => {
    return (
        <div>
            <h4><strong>Overview</strong></h4>
            <div className='grid justify-content-between'>
                <div className="col-12 lg:col-6 xl:col-4 ">
                    <div className="card w-12 mb-0 ">
                        <div className="flex justify-content-between mb-3">
                            <div>
                                <span className="block text-500 font-medium mb-3">Submitted</span>
                                <div className="text-900 font-medium text-xl">10</div>
                            </div>
                            <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                <i className="pi pi-shopping-cart text-blue-500 text-xl" />
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
                                <span className="block text-500 font-medium mb-3">Approved</span>
                                <div className="text-900 font-medium text-xl">10</div>
                            </div>
                            <div className="flex align-items-center justify-content-center bg-orange-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                <i className="pi pi-map-marker text-orange-500 text-xl" />
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
                                <span className="block text-500 font-medium mb-3">Rejected</span>
                                <div className="text-900 font-medium text-xl">10</div>
                            </div>
                            <div className="flex align-items-center justify-content-center bg-cyan-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                <i className="pi pi-inbox text-cyan-500 text-xl" />
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
}

export default Adminpage;