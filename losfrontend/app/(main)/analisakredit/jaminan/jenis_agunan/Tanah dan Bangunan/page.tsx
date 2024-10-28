import { Calendar } from 'lucide-react'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton'
import React from 'react'

const TanahDanBangunanPage: React.FC<{ onChange: (data: any) => void }> = ({ onChange }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        onChange({ [name]: value });
    };

    const handleRadioChange = (e: RadioButtonChangeEvent) => {
        onChange({ jumlahRoda: e.value });
    };

    return (    
        <form>
            <fieldset className="mb-4 p-4 border-round">
                <legend className="text-xl font-bold">Tanah dan Bangunan</legend>
                <div className="grid">
                    <div className="col-12 md:col-6">
                        <div className="field">
                            <label htmlFor="noPolisi" className="block text-900 font-medium mb-2">No. Polisi</label>
                            <InputText id="noPolisi" name="noPolisi" onChange={handleInputChange} className="w-full" />
                        </div>
                        <div className="field">
                            <label htmlFor="noSuratUkur" className="block text-900 font-medium mb-2">No.99 / Surat Ukur</label>
                            <InputText id="noSuratUkur" name="noSuratUkur" onChange={handleInputChange} className="w-full" />
                        </div>
                        <div className="field">
                            <label htmlFor="noNIB" className="block text-900 font-medium mb-2">No.NIB</label>
                            <InputText id="noNIB" name="noNIB" onChange={handleInputChange} className="w-full" />
                        </div>
                        <div className="field">
                            <label htmlFor="jumlahRoda" className="block text-900 font-medium mb-2">Jumlah Roda</label>
                            <div className="flex align-items-center">
                                <RadioButton inputId="2Roda" name="jumlahRoda" value="2" className="mr-2" onChange={handleRadioChange} />
                                <label htmlFor="2Roda" className="mr-4">2 Roda</label>
                                <RadioButton inputId="4Roda" name="jumlahRoda" value="4" className="mr-2" onChange={handleRadioChange} />
                                <label htmlFor="4Roda">4 Roda</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 md:col-6">
                        <div className="field">
                            <label htmlFor="tglGS" className="block text-900 font-medium mb-2">Tgl. GS</label>
                            <InputText type='date' id="tglGS" name="tglGS" onChange={handleInputChange} className="w-full" />
                        </div>
                        <div className="field">
                            <label htmlFor="atasNama" className="block text-900 font-medium mb-2">Atas Nama</label>
                            <InputText id="atasNama" name="atasNama" onChange={handleInputChange} className="w-full" />
                        </div>
                        <div className="field">
                            <label htmlFor="alamat" className="block text-900 font-medium mb-2">Alamat</label>
                            <InputText id="alamat" name="alamat" onChange={handleInputChange} className="w-full" />
                        </div>
                        <div className="field">
                            <label htmlFor="kabKota" className="block text-900 font-medium mb-2">Kab/Kota</label>
                            <InputText id="kabKota" name="kabKota" onChange={handleInputChange} className="w-full" />
                        </div>
                        <div className="field">
                            <label htmlFor="provinsi" className="block text-900 font-medium mb-2">Provinsi</label>
                            <InputText id="provinsi" name="provinsi" onChange={handleInputChange} className="w-full" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="field">
                            <label htmlFor="keterangan" className="block text-900 font-medium mb-2">Keterangan</label>
                            <InputTextarea id="keterangan" name="keterangan" rows={5} onChange={handleInputChange} className="w-full" />
                        </div>
                    </div>
                    <div className="col-12 md:col-3">
                        <div className="field">
                            <label htmlFor="batasUtara" className="block text-900 font-medium mb-2">Batas Utara</label>
                            <InputText id="batasUtara" name="batasUtara" onChange={handleInputChange} className="w-full" />
                        </div>
                    </div>
                </div>
            </fieldset>
        </form>
    )
}

export default TanahDanBangunanPage