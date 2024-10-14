'use client'
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { API_ENDPOINTS } from '@/app/api/losbackend/api';
import { TabPanel, TabView } from 'primereact/tabview';
import { Panel } from 'primereact/panel';
import { FileText } from 'lucide-react';

const DetailPengajuan = () => {
    const params = useParams();
    const no_pengajuan = params?.no_pengajuan;
    const [formData, setFormData] = useState<any>(null);
    useEffect(() => {
        if (no_pengajuan) {
            fetchPengajuanData(no_pengajuan);
        }
    }, [no_pengajuan]);

    const formatDate = (dateString: any) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${day}-${month}-${year}`;
    };
    const fetchPengajuanData = async (no_pengajuan: any) => {
        try {
            const response = await axios.get(API_ENDPOINTS.GETPRODUKBYID(no_pengajuan));
            const formattedData = {
                ...response.data,
                tanggal_aplikasi: formatDate(response.data.tanggal_aplikasi),
                tanggal_permohonan: formatDate(response.data.tanggal_permohonan)
            };
            console.log(response.data);
            setFormData(formattedData);
        } catch (error) {
            console.error('Error fetching pengajuan data:', error);
        }
    };
    const InfoItem = ({ label, value }: { label: string; value: string }) => (
        <div className="flex justify-between py-2">
            <span className="text-gray-600 flex flex-column">
                <span className='text-gray-800 font-bold'>{label}:</span>
                <br />
                {value}
            </span>
        </div>
    );
    const header = (icon: React.ReactNode, title: string) => (
        <div className="flex align-items-center">
            {icon}
            <span className="ml-2 font-bold">{title}</span>
        </div>
    );
    console.log(formData);
    return (
        <div>
            <div className="card">
                <div className="p-4">
                    <h2>Detail Pengajuan</h2>
                    <div className="p-4 bg-gray-100 border-round-lg">
                        <div className="mb-4">
                            <strong>No Pengajuan :</strong> {formData?.no_pengajuan}
                        </div>
                        <div className="mb-4">
                            <strong>CIF :</strong> {formData?.Cif}
                        </div>
                        <div className="mb-4">
                            <strong>Tanggal Aplikasi :</strong> {formData?.tanggal_aplikasi}
                        </div>
                        <div className="mb-4">
                            <strong>Tanggal Permohonan :</strong> {formData?.tanggal_permohonan}
                        </div>
                        <div className="mb-4">
                            <strong>Pengajuan :</strong> {formData?.pengajuan}
                        </div>
                        <div className="mb-4">
                            <strong>Bidang Usaha :</strong> {formData?.ref_bidang_usaha?.Keterangan}
                        </div>
                        <div className="mb-4">
                            <strong>Sifat Kredit :</strong> {formData?.ref_sifat_kredit?.Keterangan}
                        </div>
                        <div className="mb-4">
                            <strong>Jenis Permohonan :</strong> {formData?.ref_jenis_permohonan?.Keterangan}
                        </div>
                        <div className="mb-4">
                            <strong>Jenis Angsuran :</strong> {formData?.ref_jenis_angsuran?.Keterangan}
                        </div>
                        <div className="mb-4">
                            <strong>Tujuan Penggunaan :</strong> {formData?.tujuan_penggunaan}
                        </div>
                        <div className="mb-4">
                            <strong>Detail Tujuan Penggunaan :</strong> {formData?.detail_tujuan_penggunaan}
                        </div>
                    </div>
                    <TabView>
                        <TabPanel header="Jaminan">
                            {formData?.jaminan ? (
                                <Panel header={header(<FileText />, "Jaminan")}>
                                    <InfoItem label="Jenis Agunan" value={formData.jaminan.ref_jenis_agunan.Keterangan} />
                                    <InfoItem label="Merek" value={formData.jaminan.merek} />
                                    <InfoItem label="Bukti Hak Milik" value={formData.jaminan.ref_hak_milik.Keterangan} />
                                    <InfoItem label="Nama Pemilik Jaminan" value={formData.jaminan.namaPemilikJaminan} />
                                    <InfoItem label="Lokasi Agunan" value={formData.jaminan.lokasiAgunan} />
                                    <InfoItem label="Nilai Transaksi" value={formData.jaminan.nilaiTransaksi} />
                                    <InfoItem label="Jenis Pengikatan" value={formData.jaminan.ref_jenis_pengikatan.Keterangan} />
                                    <InfoItem label="Tipe" value={formData.jaminan.ref_tipe.Keterangan} />
                                    <InfoItem label="Tahun Pembuatan" value={formData.jaminan.tahunPembuatan} />
                                    <InfoItem label="No Agunan" value={formData.jaminan.noAgunan} />
                                    <InfoItem label="Hubungan dengan Pemilik" value={formData.jaminan.ref_hub_pemilik.Keterangan} />
                                    <InfoItem label="Informasi Tambahan" value={formData.jaminan.informasiTambahan} />
                                    <InfoItem label="Asuransi" value={formData.jaminan.asuransi} />
                                </Panel>
                            ) : (
                                <p>Tidak ada data Jaminan.</p>
                            )}
                        </TabPanel>
                        <TabPanel header="Financial">
                            {formData?.financial ? (
                                <Panel header={header(<FileText />, "Financial")}>
                                    <InfoItem label="Omset Ramai" value={formData.financial.oms_ramai} />
                                    <InfoItem label="Omset Normal" value={formData.financial.oms_normal} />
                                    <InfoItem label="Omset Sepi" value={formData.financial.oms_sepi} />
                                    <InfoItem label="Harga Pokok Jual" value={formData.financial.hrg_pokok_jual} />
                                    <InfoItem label="BTK Tidak Langsung" value={formData.financial.btk_tdklangsung} />
                                    <InfoItem label="OHC" value={formData.financial.ohc} />
                                    <InfoItem label="Biaya Usaha lainnya" value={formData.financial.b_usahalainnya} />
                                    <InfoItem label="Biaya Rumahtangga" value={formData.financial.b_rumahtangga} />
                                    <InfoItem label="Biaya Sekolah" value={formData.financial.b_sekolah} />
                                    <InfoItem label="Biaya PLN PDAM" value={formData.financial.b_pln_pdam} />
                                    <InfoItem label="Biaya Transport Komunikasi" value={formData.financial.b_transport_komunikasi} />
                                    <InfoItem label="Biaya Lain Lain" value={formData.financial.b_lain_lain} />
                                    <InfoItem label="Pendapatan Lainnya" value={formData.financial.p_lainnya} />
                                    <InfoItem label="Biaya Lainnya" value={formData.financial.b_lainnya} />
                                    <InfoItem label="Bukti Pendapatan" value={formData.financial.bukti_pendapatan} />
                                </Panel>
                            ) : (
                                <p>Tidak ada data Financial.</p>
                            )}
                        </TabPanel>
                        <TabPanel header="Survey">
                            {formData?.survey.length > 0 ? (
                                <Panel header={header(<FileText />, "Survey")}>
                                    {formData.survey.map((survey: any, index: any) => (
                                        <InfoItem key={index} label={survey.Keterangan} value={survey.Pilihan} />
                                    ))}
                                </Panel>
                            ) : (
                                <p>Tidak ada data Survey.</p>
                            )}
                        </TabPanel>
                        <TabPanel header="Aspek Form">
                            {formData?.aspek_form.length > 0 ? (
                                <Panel header={header(<FileText />, "Aspek Form")}>
                                    {formData.aspek_form.map((aspekForm: any, index: any) => (
                                        <InfoItem key={index} label={aspekForm.Keterangan} value={aspekForm.jawaban} />
                                    ))}
                                </Panel>
                            ) : (
                                <p>Tidak ada data Aspek Form.</p>
                            )}
                        </TabPanel>
                        <TabPanel header="Lima C">
                            {formData?.lima_c ? (
                                <Panel header={header(<FileText />, "Lima C")}>
                                    <InfoItem label="Characters" value={formData.lima_c.characters} />
                                    <InfoItem label="Capacity" value={formData.lima_c.capacity} />
                                    <InfoItem label="Capital" value={formData.lima_c.capital} />
                                    <InfoItem label="Collateral" value={formData.lima_c.collateral} />
                                    <InfoItem label="Conditions" value={formData.lima_c.conditions} />
                                </Panel>
                            ) : (
                                <p>Tidak ada data Lima C.</p>
                            )}
                        </TabPanel>
                    </TabView>
                </div>
            </div>
        </div>
    )
}

export default DetailPengajuan