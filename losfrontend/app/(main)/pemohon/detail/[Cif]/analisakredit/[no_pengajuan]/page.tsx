

'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { API_ENDPOINTS } from '@/app/api/losbackend/api';
import { Card } from 'primereact/card';
import { TabPanel, TabView } from 'primereact/tabview';
import { Briefcase, FileText, Home, User } from 'lucide-react';
import Link from 'next/link';
import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';
import formatToRupiah from '@/app/(full-page)/component/formatRupiah/page';
import { Dialog } from 'primereact/dialog';

interface Location {
    id: string;
    name: string;
}

const DetailPengajuan = () => {
    const [pengajuan, setPengajuan] = useState<any>(null);
    const userStatus = JSON.parse(localStorage.getItem('user-info') || '{}').status;
    // const [visible, setVisible] = useState(false);
    // const [selectedRow, setSelectedRow] = useState<any>({});
    const params = useParams();
    const no_pengajuan = params?.no_pengajuan;

    useEffect(() => {
        if (no_pengajuan) {
            fetchPengajuan(no_pengajuan);
        }
    }, [no_pengajuan]);

    const formatDate = (dateString: any) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${day}-${month}-${year}`;
    };

    const fetchPengajuan = async (no_pengajuan: string) => {
        try {
            const response = await axios.get(API_ENDPOINTS.GETPRODUKBYID(no_pengajuan));
            const formattedData = {
                ...response.data,
                tanggal_aplikasi: formatDate(response.data.tanggal_aplikasi),
                tanggal_permohonan: formatDate(response.data.tanggal_permohonan),
                jaminan: response.data.jaminan ? {
                    ...response.data.jaminan,
                    tahunPembuatan: formatDate(response.data.jaminan.tahunPembuatan)
                } : null
            };
            setPengajuan(formattedData);
            console.log(response.data);
        } catch (error) {
            console.error('Error mengambil data pemohon:', error);
        }
    };

    // const handleDelete = async (no_pengajuan: string) => {
    //     try {
    //         await axios.delete(API_ENDPOINTS.DELETEASPEKBYID(no_pengajuan));
    //         setPengajuan(null);
    //     } catch (error) {
    //         console.error('Kesalahan saat menghapus formulir pemohon:', error);
    //     }
    // };
    

    if (!pengajuan) {
        return <div>Memuat...</div>;
    }

    const InfoItem = ({ label, value }: { label: string; value: string }) => (
        <div className="flex justify-between py-2">
            <span className="text-gray-600 flex flex-column">
                <span className='text-gray-800 font-bold'>{label}:</span>
                <br />
                {value}
            </span>
        </div>
    );

    // console.log(selectedRow);
    const header = (icon: React.ReactNode, title: string, path: string) => (
        <div className='flex justify-content-between w-full bg-gray-100 p-3 border-gray-200 border-top-1 border-left-1 border-right-1'>
            <div className="flex align-items-center">
                {icon}
                <span className="ml-2 font-bold">{title}</span>
            </div>
            <div className='flex justify-content-end'>
                {(userStatus === 1 || userStatus === 3) && pengajuan.status === 0 ? (
                    <div className='flex'>
                        <Link href={`/analisakredit/${path}/form${path}/${pengajuan.no_pengajuan}`}>
                            <Button icon="pi pi-pencil" style={{ border: '1', color: '#000000', borderColor: '#000000', transition: 'transform 0.3s ease-in-out' }} className='bg-transparent hover:scale-110 ' onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} />
                        </Link>
                        {/* <div className='flex justify-content-center'>
                            <Button icon="pi pi-trash" style={{ border: '1', color: '#333', transition: 'transform 0.3s ease-in-out' }} className='bg-red-200 border-none hover:scale-110 ' onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} onClick={() => {
                                setSelectedRow(pengajuan.aspek_form[0]);
                                setVisible(true);
                            }} />
                            <Dialog header={`Hapus Data ${selectedRow.no_pengajuan}`} visible={visible} style={{ width: '50vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
                                <label htmlFor="">Apakah anda yakin ingin menghapus data ini?</label>
                                <div className='flex justify-content-end mt-3'>
                                    <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
                                    <Button label="Yes" icon="pi pi-check" autoFocus onClick={() => { handleDelete(selectedRow.no_pengajuan); setVisible(false); }} />
                                </div>
                            </Dialog>
                        </div> */}
                    </div>
                ) : (
                    <span></span>
                )}
            </div>
        </div>
    );

    console.log(pengajuan);
    return (
        <div className="surface-card shadow-2 border-round p-4">
            <h2 className="text-2xl mb-5 ml-2">Detail Pengajuan {pengajuan?.no_pengajuan}</h2>
            <div key={pengajuan.id} >
                <div className="p-4 bg-gray-100 border-round-lg flex justify-content-between">
                    <div className="flex gap-6">
                        <div>
                            <div className="mb-4">
                                <strong>No Pengajuan :</strong> {pengajuan.no_pengajuan}
                            </div>
                            <div className="mb-4">
                                <strong>CIF :</strong> {pengajuan.Cif}
                            </div>
                            <div className="mb-4">
                                <strong>Tanggal Aplikasi :</strong> {pengajuan.tanggal_aplikasi}
                            </div>
                            <div className="mb-4">
                                <strong>Tanggal Permohonan :</strong> {pengajuan.tanggal_permohonan}
                            </div>
                            <div className="mb-4">
                                <strong>Pengajuan :</strong> {pengajuan.pengajuan}
                            </div>
                            <div className="mb-4">
                                <strong>Bidang Usaha :</strong> {pengajuan.ref_bidang_usaha?.Keterangan}
                            </div>
                            <div className="mb-4">
                                <strong>Sifat Kredit :</strong> {pengajuan.ref_sifat_kredit?.Keterangan}
                            </div>
                            <div className="mb-4">
                                <strong>Plafon Kredit :</strong> {pengajuan.plafon_kredit}
                            </div>
                        </div>
                        <div>
                            <div className="mb-4">
                                <strong>Suku Bunga :</strong> {pengajuan.suku_bunga} %
                            </div>
                            <div className="mb-4">
                                <strong>Jangka Waktu :</strong> {pengajuan.jangka_waktu} Bulan
                            </div>
                            <div className="mb-4">
                                <strong>No Aplikasi Sebelumnya :</strong> {pengajuan.no_aplikasi_sebelumnya}
                            </div>
                            <div className="mb-4">
                                <strong>Jenis Permohonan :</strong> {pengajuan.ref_jenis_permohonan?.Keterangan}
                            </div>
                            <div className="mb-4">
                                <strong>Jenis Angsuran :</strong> {pengajuan.ref_jenis_angsuran?.Keterangan}
                            </div>
                            <div className="mb-4">
                                <strong>Tujuan Penggunaan :</strong> {pengajuan.tujuan_penggunaan}
                            </div>
                            <div className="mb-4">
                                <strong>Detail Tujuan Penggunaan :</strong> {pengajuan.detail_tujuan_penggunaan}
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-content-end '>
                        {(userStatus === 1 || userStatus === 3) && pengajuan.status === 0 ? (
                            <Link href={`/pengajuan/formpengajuan/${pengajuan.no_pengajuan}`}>
                                <Button icon="pi pi-pencil" style={{ border: '1', color: '#000000', borderColor: '#000000', transition: 'transform 0.3s ease-in-out' }} className='bg-transparent hover:scale-110 ' onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} />
                            </Link>
                        ) : (
                            <span></span>
                        )}
                    </div>
                </div>
                <TabView>
                    <TabPanel header="Jaminan">
                        {pengajuan?.jaminan ? (
                            <Panel headerTemplate={header(<FileText />, "Jaminan", 'jaminan')}>
                                <div className='flex col-12 '>
                                    <div className='col-6'>
                                        <InfoItem label="Jenis Agunan" value={pengajuan.jaminan.ref_jenis_agunan.Keterangan} />
                                        <InfoItem label="Merek" value={pengajuan.jaminan.merek} />
                                        <InfoItem label="Bukti Hak Milik" value={pengajuan.jaminan.ref_hak_milik.Keterangan} />
                                        <InfoItem label="Nama Pemilik Jaminan" value={pengajuan.jaminan.namaPemilikJaminan} />
                                        <InfoItem label="Lokasi Agunan" value={pengajuan.jaminan.lokasiAgunan} />
                                        <InfoItem label="Nilai Transaksi" value={formatToRupiah(pengajuan.jaminan.nilaiTransaksi)} />
                                    </div>
                                    <div className='col-6'>
                                        <InfoItem label="Jenis Pengikatan" value={pengajuan.jaminan.ref_jenis_pengikatan.Keterangan} />
                                        <InfoItem label="Tipe" value={pengajuan.jaminan.ref_tipe.Keterangan} />
                                        <InfoItem label="Tahun Pembuatan" value={pengajuan.jaminan.tahunPembuatan} />
                                        <InfoItem label="No Agunan" value={pengajuan.jaminan.noAgunan} />
                                        <InfoItem label="Hubungan dengan Pemilik" value={pengajuan.jaminan.ref_hub_pemilik.Keterangan} />
                                        <InfoItem label="Informasi Tambahan" value={pengajuan.jaminan.informasiTambahan} />
                                        <InfoItem label="Asuransi" value={pengajuan.jaminan.asuransi} />
                                    </div>
                                </div>
                            </Panel>
                        ) : (
                            <p>Tidak ada data Jaminan.</p>
                        )}
                    </TabPanel>
                    <TabPanel header="Financial">
                        {pengajuan?.financial ? (
                            <Panel headerTemplate={header(<FileText />, "Financial", 'financial')}>
                                <div className='flex col-12'>
                                    <div className='col-4'>
                                        <InfoItem label="Omset Ramai" value={formatToRupiah(pengajuan.financial.oms_ramai)} />
                                        <InfoItem label="Omset Normal" value={formatToRupiah(pengajuan.financial.oms_normal)} />
                                        <InfoItem label="Omset Sepi" value={formatToRupiah(pengajuan.financial.oms_sepi)} />
                                        <InfoItem label="Harga Pokok Jual" value={formatToRupiah(pengajuan.financial.hrg_pokok_jual)} />
                                        <InfoItem label="BTK Tidak Langsung" value={formatToRupiah(pengajuan.financial.btk_tdklangsung)} />
                                        <InfoItem label="OHC" value={formatToRupiah(pengajuan.financial.ohc)} />
                                        <InfoItem label="Biaya Usaha lainnya" value={formatToRupiah(pengajuan.financial.b_usahalainnya)} />
                                        <InfoItem label="Biaya Rumahtangga" value={formatToRupiah(pengajuan.financial.b_rumahtangga)} />
                                        <InfoItem label="Biaya Sekolah" value={formatToRupiah(pengajuan.financial.b_sekolah)} />
                                        <InfoItem label="Biaya PLN PDAM" value={formatToRupiah(pengajuan.financial.b_pln_pdam)} />
                                        <InfoItem label="Biaya Transport Komunikasi" value={formatToRupiah(pengajuan.financial.b_transport_komunikasi)} />
                                        <InfoItem label="Biaya Lain Lain" value={formatToRupiah(pengajuan.financial.b_lain_lain)} />
                                        <InfoItem label="Pendapatan Lainnya" value={formatToRupiah(pengajuan.financial.p_lainnya)} />
                                        <InfoItem label="Biaya Lainnya" value={formatToRupiah(pengajuan.financial.b_Lainnya)} />
                                        <InfoItem label="Bukti Pendapatan" value={pengajuan.financial.bukti_pendapatan} />
                                    </div>
                                    <div className='col-4'>
                                        <InfoItem label="Bukti Biaya" value={pengajuan.financial.bukti_biaya} />
                                        <InfoItem label="Bank Non-Bank" value={formatToRupiah(pengajuan.financial.bank_nonbank)} />
                                        <InfoItem label="Koperasi" value={formatToRupiah(pengajuan.financial.koperasi)} />
                                        <InfoItem label="Lain-Lain" value={formatToRupiah(pengajuan.financial.lainLain)} />
                                        <InfoItem label="Angsuran Baru" value={formatToRupiah(pengajuan.financial.angsuran_baru)} />
                                        <InfoItem label="Kas" value={formatToRupiah(pengajuan.financial.kas)} />
                                        <InfoItem label="Bank" value={formatToRupiah(pengajuan.financial.bank)} />
                                        <InfoItem label="Piutang" value={formatToRupiah(pengajuan.financial.piutang)} />
                                        <InfoItem label="Persediaan Barang" value={formatToRupiah(pengajuan.financial.persediaan_barang)} />
                                        <InfoItem label="Aktiva Lancar Lainnya" value={formatToRupiah(pengajuan.financial.atv_lancar_lainnya)} />
                                        <InfoItem label="Sub Aktiva Lancar" value={formatToRupiah(pengajuan.financial.sub_atv_lancar)} />
                                        <InfoItem label="Tanah Bangunan" value={formatToRupiah(pengajuan.financial.tanah_bangunan)} />
                                        <InfoItem label="Peralatan Usaha" value={formatToRupiah(pengajuan.financial.peralatan_usaha)} />
                                        <InfoItem label="Kendaraan" value={formatToRupiah(pengajuan.financial.kendaraan)} />
                                        <InfoItem label="Aktiva Tetap Lainnya" value={formatToRupiah(pengajuan.financial.atv_tetap_lainnya)} />
                                    </div>
                                    <div className='col-4'>
                                        <InfoItem label="Sub Aktiva Tetap" value={formatToRupiah(pengajuan.financial.sub_atv_tetap)} />
                                        <InfoItem label="Jumlah Aktiva" value={formatToRupiah(pengajuan.financial.jumlah_atv)} />
                                        <InfoItem label="Total BDP Jangka Pendek" value={formatToRupiah(pengajuan.financial.tot_bdp_jangka_pendek)} />
                                        <InfoItem label="IDR Jangka Pendek" value={formatToRupiah(pengajuan.financial.idr_jangka_pendek)} />
                                        <InfoItem label="Jangka Pendek" value={formatToRupiah(pengajuan.financial.jangka_pendek)} />
                                        <InfoItem label="Total BDP Jangka Panjang" value={formatToRupiah(pengajuan.financial.tot_bdp_jangka_panjang)} />
                                        <InfoItem label="IDR Jangka Panjang" value={formatToRupiah(pengajuan.financial.idr_jangka_panjang)} />
                                        <InfoItem label="Jangka Panjang" value={formatToRupiah(pengajuan.financial.jangka_panjang)} />
                                        <InfoItem label="Sub Jumlah Hutang" value={formatToRupiah(pengajuan.financial.sub_jumlah_hutang)} />
                                        <InfoItem label="Modal Sendiri" value={formatToRupiah(pengajuan.financial.modal_sendiri)} />
                                        <InfoItem label="Laba" value={formatToRupiah(pengajuan.financial.laba)} />
                                        <InfoItem label="Sub Jumlah Modal" value={formatToRupiah(pengajuan.financial.sub_jumlah_modal)} />
                                        <InfoItem label="Jumlah Passiva" value={formatToRupiah(pengajuan.financial.jumlah_passiva)} />
                                    </div>
                                </div>
                            </Panel>
                        ) : (
                            <p>Tidak ada data Financial.</p>
                        )}
                    </TabPanel>
                    <TabPanel header="Survey">
                        {pengajuan?.survey.length > 0 ? (
                            <Panel headerTemplate={header(<FileText />, "Survey", 'survey')}>
                                {pengajuan.survey.map((survey: any, index: any) => (
                                    <InfoItem key={index} label={survey.Keterangan} value={survey.Pilihan} />
                                ))}
                            </Panel>
                        ) : (
                            <p>Tidak ada data Survey.</p>
                        )}
                    </TabPanel>
                    <TabPanel header="Aspek Form">
                        {pengajuan?.aspek_form.length > 0 ? (
                            <Panel headerTemplate={header(<FileText />, "Aspek Form", 'aspek')}>
                                {pengajuan.aspek_form.map((aspekForm: any, index: any) => (
                                    <InfoItem key={index} label={aspekForm.Keterangan} value={aspekForm.jawaban} />
                                ))}
                            </Panel>
                        ) : (
                            <p>Tidak ada data Aspek Form.</p>
                        )}
                    </TabPanel>
                    <TabPanel header="Lima C">
                        {pengajuan?.lima_c ? (
                            <Panel headerTemplate={header(<FileText />, "Lima C", '5c')}>
                                <InfoItem label="Characters" value={pengajuan.lima_c.characters} />
                                <InfoItem label="Capacity" value={pengajuan.lima_c.capacity} />
                                <InfoItem label="Capital" value={pengajuan.lima_c.capital} />
                                <InfoItem label="Collateral" value={pengajuan.lima_c.collateral} />
                                <InfoItem label="Conditions" value={pengajuan.lima_c.conditions} />
                            </Panel>
                        ) : (
                            <p>Tidak ada data Lima C.</p>
                        )}
                    </TabPanel>
                </TabView>
            </div>
        </div >
    );
};

export default DetailPengajuan;

