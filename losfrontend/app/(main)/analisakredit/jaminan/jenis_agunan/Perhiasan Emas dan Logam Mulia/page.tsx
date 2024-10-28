import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import React from 'react'

const PerhiasanEmasDanLogamMuliaPage: React.FC<{ onChange: (data: any) => void }> = ({ onChange }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        onChange({ [name]: value });
    };
    return (
        <form>
            <fieldset className="mb-4 p-4 border-round">
                <legend className="text-xl font-bold">Perhiasan Emas dan Logam Mulia</legend>
                <div className="grid">
                    <div className="col-12 md:col-6">
                        <div className="field">
                            <label htmlFor="uraian" className="block text-900 font-medium mb-2">Uraian</label>
                            <InputText id="uraian" name="uraian" onChange={handleInputChange} className="w-full" />
                        </div>
                        <div className="field">
                            <label htmlFor="berat" className="block text-900 font-medium mb-2">Berat</label>
                            <InputText id="berat" name="berat" onChange={handleInputChange} className="w-full" />
                        </div>
                    </div>
                    <div className="col-12 md:col-6">
                        <div className="field">
                            <label htmlFor="jumlah" className="block text-900 font-medium mb-2">Jumlah</label>
                            <InputText id="jumlah" name="jumlah" onChange={handleInputChange} className="w-full" />
                        </div>
                        <div className="field">
                            <label htmlFor="kadar" className="block text-900 font-medium mb-2">Kadar</label>
                            <InputText id="kadar" name="kadar" onChange={handleInputChange} className="w-full" />
                        </div>
                    </div>
                    <div className="col-12 md:col-6">
                        <div className="field">
                            <label htmlFor="atasNama" className="block text-900 font-medium mb-2">Atas Nama</label>
                            <InputText id="atasNama" name="atasNama" onChange={handleInputChange} className="w-full" />
                        </div>
                    </div>
                    <div className="col-12 md:col-6">
                        <div className="field">
                            <label htmlFor="alamat" className="block text-900 font-medium mb-2">Alamat</label>
                            <InputText id="alamat" name="alamat" onChange={handleInputChange} className="w-full" />
                        </div>
                    </div>
                </div>
            </fieldset>
        </form>
    )
}

export default PerhiasanEmasDanLogamMuliaPage