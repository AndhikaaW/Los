"use client"
import { API_ENDPOINTS } from '@/app/api/losbackend/api'
import axios from 'axios'
import Link from 'next/link'
import { Button } from 'primereact/button'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { Paginator } from 'primereact/paginator'
import React, { useEffect, useState } from 'react'

const Survey = () => {
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(5);
    interface PaginatedData {
        NomorRekening: string;
        survey: {
            title: string;
            Pilihan: string;
        }[];
    }

    interface GroupedSurvey {
        NomorRekening: string;
        survey: {
            title: string;
            Pilihan: string;
        }[];
    }

    const [paginatedData, setPaginatedData] = useState<PaginatedData[]>([]);
    const [groupedSurvey, setGroupedSurvey] = useState<GroupedSurvey[]>([]);

    useEffect(() => {
        const fetchSurvey = async () => {
            try {
                const response = await axios.get(API_ENDPOINTS.GETALLSURVEY)
                const grouped = groupSurveyByNomorRekening(response.data);
                setGroupedSurvey(grouped);
                console.log(grouped);
                setPaginatedData(grouped.slice(first, first + rows));
            } catch (error) {
                console.error("Terjadi kesalahan saat mengambil survei!", error)
            }
        }
        fetchSurvey()
    }, [first, rows])

    const groupSurveyByNomorRekening = (data: any[]): any[] => {
        const grouped = data.reduce((acc: { [key: string]: any }, curr) => {
            if (!acc[curr.NomorRekening]) {
                acc[curr.NomorRekening] = { NomorRekening: curr.NomorRekening, survey: [] };
            }
            acc[curr.NomorRekening].survey.push({
                title: curr.title,
                Pilihan: curr.Pilihan
            });
            return acc;
        }, {});
        return Object.values(grouped);
    };

    const onPageChange = (event: any) => {
        setFirst(event.first);
        setRows(event.rows);
        setPaginatedData(groupedSurvey.slice(event.first, event.first + event.rows));
    };
    const surveyTemplate = (rowData: GroupedSurvey) => {
        return (
            <ul>
                {rowData.survey.map((survey, index) => (
                    <li key={index}>
                        <div className='flex flex-column gap-2 mb-2'>
                            <label className='text-900 font-bold'>{survey.title}</label>
                            <label className='text-900'>{survey.Pilihan}</label>
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
            <Link href={'/analisakredit/survey/formsurvey'} passHref>
                <Button label='Add' icon="pi pi-plus" style={{ border: '1', color: '#333' }} className='bg-blue-200' />
            </Link>
        </div>
        <DataTable value={paginatedData} className="p-datatable-sm">
            <Column field="NomorRekening" header="Nomor Rekening" />
            <Column header="Survey Details" body={surveyTemplate} />
        </DataTable>
        <Paginator
            first={first}
            rows={rows}
            totalRecords={groupedSurvey.length}
            rowsPerPageOptions={[5, 10, 20]}
            onPageChange={onPageChange}
        />
    </div>
</div>
  )
}

export default Survey