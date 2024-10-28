import React from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton';
import { Calendar } from 'primereact/calendar';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';

const KendaraanBermotorPage: React.FC<{ onChange: (data: any) => void }> = ({ onChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  const handleRadioChange = (e: RadioButtonChangeEvent) => {
    onChange({ jenisBodi: e.value });
  };

  const handleDateChange = (e: any) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  return (
    <form>
      <fieldset className="mb-4 p-4 border-round">
        <legend className="text-xl font-bold">Kendaraan Bermotor</legend>
        <div className="grid">
          <div className="col-12 md:col-6">
            <div className="field">
              <label htmlFor="noMesin" className="block text-900 font-medium mb-2">No. Mesin</label>
              <InputText id="noMesin" name="noMesin" onChange={handleInputChange} className="w-full" />
            </div>
            <div className="field">
              <label htmlFor="masaTahun" className="block text-900 font-medium mb-2">Masa/Tahun</label>
              <div className="p-inputgroup">
                <InputText id="masaTahun" name="masaTahun" onChange={handleInputChange} className="w-full" />
                <span className="p-inputgroup-addon">/</span>
                <InputText id="tahun" name="tahun" onChange={handleInputChange} className="w-full" />
                <span className="p-inputgroup-addon">/</span>
                <InputText id="noRangka" name="noRangka" onChange={handleInputChange} className="w-full" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="noRangka" className="block text-900 font-medium mb-2">No. Rangka</label>
              <InputText id="noRangka" name="noRangka" onChange={handleInputChange} className="w-full" />
            </div>
            <div className="field">
              <label htmlFor="noPolis" className="block text-900 font-medium mb-2">No. Polis</label>
              <InputText id="noPolis" name="noPolis" onChange={handleInputChange} className="w-full" />
            </div>
            <div className="field">
              <label htmlFor="warna" className="block text-900 font-medium mb-2">Warna</label>
              <InputText id="warna" name="warna" onChange={handleInputChange} className="w-full" />
            </div>
            <div className="field">
              <label htmlFor="atasNama" className="block text-900 font-medium mb-2">Atas Nama</label>
              <InputText id="atasNama" name="atasNama" onChange={handleInputChange} className="w-full" />
            </div>
          </div>
          <div className="col-12 md:col-6">
            <div className="field">
              <label htmlFor="jenisBodi" className="block text-900 font-medium mb-2">Jenis Bodi</label>
              <div className="flex align-items-center">
                <RadioButton inputId="sedan" name="jenisBodi" value="sedan" className="mr-2" onChange={handleRadioChange} />
                <label htmlFor="sedan" className="mr-4">Sedan</label>
                <RadioButton inputId="minibus" name="jenisBodi" value="minibus" className="mr-2" onChange={handleRadioChange} />
                <label htmlFor="minibus">Minibus</label>
              </div>
            </div>
            <div className="field">
              <label htmlFor="masaBerlaku" className="block text-900 font-medium mb-2">Masa Berlaku</label>
              <Calendar id="masaBerlaku" showIcon className="w-full" onChange={handleDateChange} />
            </div>
            <div className="field">
              <label htmlFor="noSTNK" className="block text-900 font-medium mb-2">No. STNK</label>
              <InputText id="noSTNK" name="noSTNK" onChange={handleInputChange} className="w-full" />
            </div>
            <div className="field">
              <label htmlFor="noRegBPKB" className="block text-900 font-medium mb-2">No. Reg BPKB</label>
              <InputText id="noRegBPKB" name="noRegBPKB" onChange={handleInputChange} className="w-full" />
            </div>
            <div className="field">
              <label htmlFor="silinder" className="block text-900 font-medium mb-2">Silinder</label>
              <InputText id="silinder" name="silinder" onChange={handleInputChange} className="w-full" />
            </div>
            <div className="field">
              <label htmlFor="alamat" className="block text-900 font-medium mb-2">Alamat</label>
              <InputText id="alamat" name="alamat" onChange={handleInputChange} className="w-full" />
            </div>
          </div>
          <div className="col-12">
            <div className="field">
              <label htmlFor="keterangan" className="block text-900 font-medium mb-2">Keterangan</label>
              <InputTextarea id="keterangan" name="keterangan" rows={4} onChange={handleInputChange} className="w-full" />
            </div>
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default KendaraanBermotorPage;

