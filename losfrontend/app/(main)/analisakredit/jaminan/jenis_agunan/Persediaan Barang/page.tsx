import { InputTextarea } from 'primereact/inputtextarea'
import React from 'react'

interface PersediaanBarangPageProps {
    onChange: (data: any) => void;
    defaultValue?: {
        keterangan: string;
    };
}

const PersediaanBarangPage: React.FC<PersediaanBarangPageProps> = ({ onChange, defaultValue }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        onChange({ [name]: value });
    };

    return (
        <form>
            <fieldset className="mb-4 p-4 border-round">
                <legend className="text-xl font-bold">Persediaan Barang</legend>
                <div className="grid">
                    <div className="col-12">
                        <label htmlFor="keterangan" className="block mb-2">Keterangan</label>
                        <InputTextarea id="keterangan" name="keterangan" rows={4} onChange={handleInputChange} className="w-full" placeholder="Keterangan" value={defaultValue?.keterangan} />
                    </div>
                </div>
            </fieldset>
        </form>
    )
}

export default PersediaanBarangPage