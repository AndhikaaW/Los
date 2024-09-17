'use client';
import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import axios from 'axios';
import { API_ENDPOINTS } from '@/app/api/losbackend/api';
import Link from 'next/link';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Paginator } from 'primereact/paginator';

interface AspekData {
    id: number;
    NomorRekening: string;
    aspek_id: number;
    title_aspek: string;
    jawaban: string;
}

interface GroupedAspekData {
    NomorRekening: string;
    aspeks: {
        aspek_id: number;
        title_aspek: string;
        jawaban: string;
    }[];
}

const AspekForm = () => {
    const [groupedAspek, setGroupedAspek] = useState<GroupedAspekData[]>([]);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(5);
    const [paginatedData, setPaginatedData] = useState<GroupedAspekData[]>([]);

    useEffect(() => {
        const fetchOutAspekForm = async () => {
            try {
                const response = await axios.get<AspekData[]>(API_ENDPOINTS.GETALLASPEK);
                const grouped = groupAspeksByNomorRekening(response.data);
                setGroupedAspek(grouped);
                setPaginatedData(grouped.slice(first, first + rows));
            } catch (error) {
                console.error("There was an error fetching the survey!", error);
            }
        };
        fetchOutAspekForm();
    }, [first, rows]);

    const groupAspeksByNomorRekening = (data: AspekData[]): GroupedAspekData[] => {
        const grouped = data.reduce((acc: { [key: string]: GroupedAspekData }, curr) => {
            if (!acc[curr.NomorRekening]) {
                acc[curr.NomorRekening] = { NomorRekening: curr.NomorRekening, aspeks: [] };
            }
            acc[curr.NomorRekening].aspeks.push({
                aspek_id: curr.aspek_id,
                title_aspek: curr.title_aspek,
                jawaban: curr.jawaban
            });
            return acc;
        }, {});
        return Object.values(grouped);
    };

    const onPageChange = (event: { first: number; rows: number }) => {
        setFirst(event.first);
        setRows(event.rows);
        setPaginatedData(groupedAspek.slice(event.first, event.first + event.rows));
    };

    const aspekTemplate = (rowData: GroupedAspekData) => {
        return (
            <ul>
                {rowData.aspeks.map((aspek, index) => (
                    <li key={index}>
                        <div className='flex flex-column gap-2 mb-2'>
                            <label className='text-900 font-bold'>{aspek.title_aspek}</label>
                            <label className='text-900'>{aspek.jawaban}</label>
                        </div>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div>
            <div className="card">
                <div className='flex align-items-center justify-content-start mb-2'>
                    <Link href={'/analisakredit/aspekform/formaspek'} passHref>
                        <Button label='Add' icon="pi pi-plus" style={{ border: '1', color: '#333' }} className='bg-blue-200' />
                    </Link>
                </div>
                <DataTable value={paginatedData} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="NomorRekening" header="Nomor Rekening" />
                    <Column header="Aspek Details" body={aspekTemplate} />
                </DataTable>
                <Paginator
                    first={first}
                    rows={rows}
                    totalRecords={groupedAspek.length}
                    rowsPerPageOptions={[5, 10, 20]}
                    onPageChange={onPageChange}
                />
            </div>
        </div>
    );
};

export default AspekForm;