import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';

const DataTableWithCRUD = ({
    data,
    onAdd,
    onUpdate,
    onDelete,
    columns,
    idField = 'Kode',
    nameField = 'Keterangan',
    addButtonLabel = 'Tambah',
    editButtonLabel = 'Perbarui',
    deleteButtonLabel = 'Hapus',
    addDialogHeader = 'Tambah Data',
    editDialogHeader = 'Edit Data',
    deleteDialogHeader = 'Hapus Data',
    inputLabel = 'Data'
}: any) => {
    const [selectedRow, setSelectedRow] = useState<any>(null);
    const [visibleAdd, setVisibleAdd] = useState(false);
    const [visibleEdit, setVisibleEdit] = useState(false);
    const [visibleDelete, setVisibleDelete] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [editValue, setEditValue] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onAdd(inputValue);
        setInputValue('');
        setVisibleAdd(false);
    };

    const handleUpdate = () => {
        onUpdate(selectedRow[idField], editValue);
        setEditValue('');
        setVisibleEdit(false);
    };

    return (
        <div className='mb-5'>
            <div className='mb-2 flex justify-content-end'>
                <Button label={addButtonLabel} icon="pi pi-plus" style={{ border: '1', color: '#333' }} className='bg-blue-200 w-2' onClick={() => setVisibleAdd(true)} />
            </div>
            <DataTable value={data} style={{ minWidth: '50rem' }} paginator rows={5} rowsPerPageOptions={[5, 10]}>
                <Column key="Kode" field="Kode" header="Kode" className='w-2'/>
                {columns.map((col: any) => (
                    <Column key={col.field} field={col.field} header={col.header} className={columns.length === 1 ? 'w-7' : 'w-4'}/>
                ))}
                <Column header="Update" body={(rowData) => (
                    <Button icon="pi pi-pencil" style={{ border: '1', color: '#333' }} className='bg-blue-200' onClick={() => {
                        setSelectedRow(rowData);
                        setEditValue(rowData[nameField]);
                        setVisibleEdit(true);
                    }} />
                )} />
                <Column header="Delete" body={(rowData) => (
                    <Button icon="pi pi-trash" style={{ border: '1', color: '#333' }} className='bg-red-200' onClick={() => {
                        setSelectedRow(rowData);
                        setVisibleDelete(true);
                        console.log(rowData);
                    }} />
                )} />
            </DataTable>
            <Dialog header={`${deleteDialogHeader} ${selectedRow?.[nameField]}`} visible={visibleDelete} style={{ width: '50vw' }} onHide={() => setVisibleDelete(false)}>
                <label htmlFor="">Apakah anda yakin ingin menghapus data ini?</label>
                <div className='flex justify-content-end mt-3'>
                    <Button label="No" icon="pi pi-times" onClick={() => setVisibleDelete(false)} className="p-button-text" />
                    <Button label="Yes" icon="pi pi-check" autoFocus onClick={() => { onDelete(selectedRow[idField]); setVisibleDelete(false); }} />
                </div>
            </Dialog>
            <Dialog header={addDialogHeader} visible={visibleAdd} style={{ width: '50vw' }} onHide={() => setVisibleAdd(false)}>
                <div className="p-fluid mb-5">
                    <form onSubmit={handleSubmit}>
                        <div className="field">
                            <label htmlFor="inputValue" className='font-bold'>{inputLabel}</label>
                            <div className='flex gap-3 align-items-center'>
                                <InputText id="inputValue" value={inputValue} onChange={(e) => setInputValue(e.target.value)} required />
                                <Button className='w-3' type="submit" label={addButtonLabel} icon="pi pi-check" />
                            </div>
                        </div>
                    </form>
                </div>
            </Dialog>
            <Dialog header={`${editDialogHeader}: ${selectedRow?.[nameField]}`} visible={visibleEdit} style={{ width: '50vw' }} onHide={() => setVisibleEdit(false)}>
                <div className="p-fluid">
                    <div className="field">
                        <label htmlFor="editValue" className='font-bold'>{inputLabel}</label>
                        <InputText id="editValue" value={editValue} onChange={(e) => setEditValue(e.target.value)} required />
                    </div>
                    <div className='flex justify-content-end mt-3'>
                        <Button label="Batal" icon="pi pi-times" onClick={() => setVisibleEdit(false)} className="p-button-text w-3" />
                        <Button label={editButtonLabel} icon="pi pi-check" onClick={handleUpdate} autoFocus className="w-3" />
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

export default DataTableWithCRUD;