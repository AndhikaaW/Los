'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { API_ENDPOINTS } from '@/app/api/losbackend/api';
import { Card } from 'primereact/card';
import { TabPanel, TabView } from 'primereact/tabview';
import { Briefcase, FileText, Home, User } from 'lucide-react';
import { Panel } from 'primereact/panel';

interface Location {
    id: string;
    name: string;
}

const DetailPemohon = () => {
    const [pemohon, setPemohon] = useState<any>(null);
    const [provinces, setProvinces] = useState<Location[]>([]);
    const [regencies, setRegencies] = useState<Location[]>([]);
    const [districts, setDistricts] = useState<Location[]>([]);
    const [villages, setVillages] = useState<Location[]>([]);
    const params = useParams();
    const Cif = params?.Cif;

    useEffect(() => {
        if (Cif) {
            fetchPemohon(Cif);
        }
    }, [Cif]);

    const fetchPemohon = async (Cif: string) => {
        try {
            const response = await axios.get(API_ENDPOINTS.GETPEMOHONBYCIF(Cif));
            setPemohon(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error mengambil data pemohon:', error);
        }
    };

    const fetchProvinces = async () => {
        try {
            const response = await fetch('https://andhikaaw.github.io/api-wilayah-indonesia/api/provinces.json');
            const data = await response.json();
            setProvinces(data);
        } catch (error) {
            console.error('Error fetching provinces:', error);
        }
    };

    const fetchRegencies = async (provinceId: string) => {
        try {
            const response = await fetch(`https://andhikaaw.github.io/api-wilayah-indonesia/api/regencies/${provinceId}.json`);
            const data = await response.json();
            setRegencies(data);
        } catch (error) {
            console.error('Error fetching regencies:', error);
        }
    };

    const fetchDistricts = async (regencyId: string) => {
        try {
            const response = await fetch(`https://andhikaaw.github.io/api-wilayah-indonesia/api/districts/${regencyId}.json`);
            const data = await response.json();
            setDistricts(data);
        } catch (error) {
            console.error('Error fetching districts:', error);
        }
    };

    const fetchVillages = async (districtId: string) => {
        try {
            const response = await fetch(`https://andhikaaw.github.io/api-wilayah-indonesia/api/villages/${districtId}.json`);
            const data = await response.json();
            setVillages(data);
        } catch (error) {
            console.error('Error fetching villages:', error);
        }
    };

    useEffect(() => {
        fetchProvinces();
    }, []);

    useEffect(() => {
        if (pemohon) {
            fetchRegencies(pemohon.provinsi);
            fetchRegencies(pemohon.provinsi_usaha);
        }
    }, [pemohon]);

    useEffect(() => {
        if (pemohon && regencies.length > 0) {
            fetchDistricts(pemohon.kota);
            fetchDistricts(pemohon.kota_usaha);
        }
    }, [pemohon, regencies]);

    useEffect(() => {
        if (pemohon && districts.length > 0) {
            fetchVillages(pemohon.kecamatan);
            fetchVillages(pemohon.kecamatan_usaha);
        }
    }, [pemohon, districts]);

    const getLocationName = (id: string, locations: Location[]) => {
        const location = locations.find(loc => loc.id === id);
        return location ? location.name : id;
    };

    if (!pemohon) {
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

    const header = (icon: React.ReactNode, title: string) => (
        <div className="flex align-items-center">
            {icon}
            <span className="ml-2 font-bold">{title}</span>
        </div>
    );

    console.log(pemohon);
    return (
        <div className="surface-card shadow-2 border-round p-4">
            <h2 className="text-2xl font-bold mb-4">Detail Debitur</h2>
            <TabView>
                <TabPanel header="Pemohon">
                    <div className="grid">
                        <div className="col-12 md:col-4">
                            <div>
                                <Panel header={header(<User />, "Data Diri Pemohon")}>
                                    <InfoItem label="CIF" value={pemohon.Cif} />
                                    <InfoItem label="Nama" value={pemohon.Nama} />
                                    <InfoItem label="Tempat Lahir" value={pemohon.TempatLahir} />
                                    <InfoItem label="Tanggal Lahir" value={pemohon.TglLahir} />
                                    <InfoItem label="Jenis Kelamin" value={pemohon.Kelamin} />
                                    <InfoItem label="Status Perkawinan" value={pemohon.StatusPerkawinan} />
                                    <InfoItem label="KTP" value={pemohon.KTP} />
                                    <InfoItem label="Nama Ibu Kandung" value={pemohon.nama_ibu_kandung} />
                                    <InfoItem label="Jumlah Tanggungan" value={pemohon.jumlah_tanggungan} />
                                    <InfoItem label="KTP Berlaku" value={pemohon.ktp_berlaku} />
                                    <InfoItem label="No HP" value={pemohon.no_hp} />
                                    <InfoItem label="Profesi Sampingan" value={pemohon.ref_profesi_sampingan.Keterangan} />
                                </Panel>
                            </div>
                        </div>
                        <div className="col-12 md:col-4">
                            <div>
                                <Panel header={header(<Home />, "Alamat Pemohon")}>
                                    <InfoItem label="Alamat" value={pemohon.Alamat} />
                                    <InfoItem label="Kota/Kabupaten" value={getLocationName(pemohon.kota, regencies)} />
                                    <InfoItem label="Provinsi" value={getLocationName(pemohon.provinsi, provinces)} />
                                    <InfoItem label="Kode Pos" value={pemohon.kode_pos} />
                                    <InfoItem label="Telepon" value={pemohon.telepon} />
                                    <InfoItem label="Status Tempat Tinggal" value={pemohon.ref_status_tempat_tinggal.Keterangan} />
                                    <InfoItem label="Kecamatan" value={getLocationName(pemohon.kecamatan, districts)} />
                                    <InfoItem label="Kelurahan/Desa" value={getLocationName(pemohon.kelurahan, villages)} />
                                    <InfoItem label="Fax" value={pemohon.fax} />
                                    <InfoItem label="Lama Tinggal" value={pemohon.lama_tinggal} />
                                </Panel>
                            </div>
                        </div>

                        <div className="col-12 md:col-4">
                            <div>
                                <Panel header={header(<Briefcase />, "Data Usaha")}>
                                    <InfoItem label="Nama Usaha" value={pemohon.nama_usaha} />
                                    <InfoItem label="Tanggal Mulai Usaha" value={pemohon.tanggal_mulai_usaha} />
                                    <InfoItem label="Status Tempat Usaha" value={pemohon.ref_status_usaha.Keterangan} />
                                    <InfoItem label="Surat Keterangan Usaha" value={pemohon.surat_keterangan_usaha} />
                                    <InfoItem label="Sektor Ekonomi" value={pemohon.ref_sektor_ekonomi.Keterangan} />
                                    <InfoItem label="Jumlah Karyawan" value={pemohon.jumlah_karyawan} />
                                    <InfoItem label="Jarak Lokasi Usaha" value={pemohon.jarak_lokasi_usaha} />
                                    <InfoItem label="Masa Laku" value={pemohon.masa_laku} />
                                    <InfoItem label="Alamat Usaha" value={pemohon.alamat_usaha} />
                                    <InfoItem label="Kode Pos Usaha" value={pemohon.kode_pos_usaha} />
                                    {/* <InfoItem label="Provinsi Usaha" value={pemohon.provinsi_usaha} />
                                    <InfoItem label="Kecamatan Usaha" value={pemohon.kecamatan_usaha} />
                                    <InfoItem label="Kota Usaha" value={pemohon.kota_usaha} />
                                    <InfoItem label="Kelurahan Usaha" value={pemohon.kelurahan_usaha} /> */}
                                    <InfoItem label="Provinsi Usaha" value={getLocationName(pemohon.provinsi_usaha, provinces)} />
                                    <InfoItem label="Kota Usaha" value={getLocationName(pemohon.kota_usaha, regencies)} />
                                    <InfoItem label="Kecamatan Usaha" value={getLocationName(pemohon.kecamatan_usaha, districts)} />
                                    <InfoItem label="Kelurahan Usaha" value={getLocationName(pemohon.kelurahan_usaha, villages)} />
                                </Panel>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel header="Produk">
                    {pemohon.produk.length > 0 ? (
                        <div className='grid'>
                            {
                                pemohon.produk.map((produk: any) => (
                                    <div key={produk.id}>
                                        <Panel header={header(<FileText />, "Pengajuan")}>
                                            <InfoItem label="No Pengajuan" value={produk.no_pengajuan} />
                                            <InfoItem label="Cif" value={produk.Cif} />
                                            <InfoItem label="Pengajuan" value={produk.pengajuan} />
                                            <InfoItem label="Bidang Usaha" value={produk.ref_bidang_usaha.Keterangan} />
                                            <InfoItem label="Nomor Rekening" value={produk.NomorRekening} />
                                            <InfoItem label="Plafon Kredit" value={produk.plafon_kredit} />
                                            <InfoItem label="Tanggal Aplikasi" value={produk.tanggal_aplikasi} />
                                            <InfoItem label="Suku Bunga" value={produk.suku_bunga} />
                                            <InfoItem label="Tanggal Permohonan" value={produk.tanggal_permohonan} />
                                            <InfoItem label="Jangka Waktu" value={produk.jangka_waktu} />
                                            <InfoItem label="Sifat Kredit" value={produk.ref_sifat_kredit.Keterangan} />
                                            <InfoItem label="Jenis Permohonan" value={produk.ref_jenis_permohonan.Keterangan} />
                                            <InfoItem label="Jenis Angsuran" value={produk.ref_jenis_angsuran.Keterangan} />
                                            <InfoItem label="Tanggal Aplikasi" value={produk.tanggal_aplikasi} />
                                            <InfoItem label="Tujuan Penggunaan" value={produk.tujuan_penggunaan} />
                                            <InfoItem label="Detail Tujuan Penggunaan" value={produk.detail_tujuan_penggunaan} />
                                        </Panel>
                                    </div>

                                ))
                            }
                        </div>
                    ) : (
                        <div className="col-12 md:6 lg:6 mb-4">
                            <p>Tidak ada data produk. Silakan tambah produk baru.</p>
                        </div>
                    )}
                </TabPanel>
                <TabPanel header="Analisa Kredit">
                    {pemohon.produk.map((produk: any) => (
                        <div key={produk.id}>
                            <h3>Analisa Kredit</h3>
                            <TabView>
                                <TabPanel header="Jaminan">
                                    {produk.jaminan ? (
                                        <Panel header={header(<FileText />, "Jaminan")}>
                                            <InfoItem label="Jenis Agunan" value={produk.jaminan.ref_jenis_agunan.Keterangan} />
                                            <InfoItem label="Merek" value={produk.jaminan.merek} />
                                            <InfoItem label="Bukti Hak Milik" value={produk.jaminan.ref_hak_milik.Keterangan} />
                                            <InfoItem label="Nama Pemilik Jaminan" value={produk.jaminan.namaPemilikJaminan} />
                                            <InfoItem label="Lokasi Agunan" value={produk.jaminan.lokasiAgunan} />
                                            <InfoItem label="Nilai Transaksi" value={produk.jaminan.nilaiTransaksi} />
                                            <InfoItem label="Jenis Pengikatan" value={produk.jaminan.ref_jenis_pengikatan.Keterangan} />
                                            <InfoItem label="Tipe" value={produk.jaminan.ref_tipe.Keterangan} />
                                            <InfoItem label="Tahun Pembuatan" value={produk.jaminan.tahunPembuatan} />
                                            <InfoItem label="No Agunan" value={produk.jaminan.noAgunan} />
                                            <InfoItem label="Hubungan dengan Pemilik" value={produk.jaminan.ref_hub_pemilik.Keterangan} />
                                            <InfoItem label="Informasi Tambahan" value={produk.jaminan.informasiTambahan} />
                                            <InfoItem label="Asuransi" value={produk.jaminan.asuransi} />
                                        </Panel>
                                    ) : (
                                        <p>Tidak ada data Jaminan.</p>
                                    )}
                                </TabPanel>
                                <TabPanel header="Financial">
                                    {produk.financial ? (
                                        <Panel header={header(<FileText />, "Financial")}>
                                            <h4>Financial</h4>
                                            <p><strong>No Pengajuan:</strong> {produk.financial.no_pengajuan}</p>
                                            <p><strong>OMS Ramai:</strong> {produk.financial.oms_ramai}</p>
                                            <p><strong>OMS Normal:</strong> {produk.financial.oms_normal}</p>
                                            <p><strong>OMS Sepi:</strong> {produk.financial.oms_sepi}</p>
                                            <p><strong>Hrg Pokok Jual:</strong> {produk.financial.hrg_pokok_jual}</p>
                                            <p><strong>Btk Tdklangsung:</strong> {produk.financial.btk_tdklangsung}</p>
                                            <p><strong>OHC:</strong> {produk.financial.ohc}</p>
                                            <p><strong>B Usahalainnya:</strong> {produk.financial.b_usahalainnya}</p>
                                            <p><strong>B Rumahtangga:</strong> {produk.financial.b_rumahtangga}</p>
                                            <p><strong>B Sekolah:</strong> {produk.financial.b_sekolah}</p>
                                            <p><strong>B PLN PDAM:</strong> {produk.financial.b_pln_pdam}</p>
                                            <p><strong>B Transport Komunikasi:</strong> {produk.financial.b_transport_komunikasi}</p>
                                            <p><strong>B Lain Lain:</strong> {produk.financial.b_lain_lain}</p>
                                            <p><strong>P Lainnya:</strong> {produk.financial.p_lainnya}</p>
                                            <p><strong>B Lainnya:</strong> {produk.financial.b_Lainnya}</p>
                                            <p><strong>Bukti Pendapatan:</strong> {produk.financial.bukti_pendapatan}</p>
                                            <p><strong>Bukti Biaya:</strong> {produk.financial.bukti_biaya}</p>
                                            <p><strong>Bank Nonbank:</strong> {produk.financial.bank_nonbank}</p>
                                            <p><strong>Koperasi:</strong> {produk.financial.koperasi}</p>
                                            <p><strong>Lain Lain:</strong> {produk.financial.lainLain}</p>
                                            <p><strong>Angsuran Baru:</strong> {produk.financial.angsuran_baru}</p>
                                            <p><strong>Kas:</strong> {produk.financial.kas}</p>
                                            <p><strong>Bank:</strong> {produk.financial.bank}</p>
                                            <p><strong>Piutang:</strong> {produk.financial.piutang}</p>
                                            <p><strong>Persediaan Barang:</strong> {produk.financial.persediaan_barang}</p>
                                            <p><strong>ATV Lancar Lainnya:</strong> {produk.financial.atv_lancar_lainnya}</p>
                                            <p><strong>Sub ATV Lancar:</strong> {produk.financial.sub_atv_lancar}</p>
                                            <p><strong>Tanah Bangunan:</strong> {produk.financial.tanah_bangunan}</p>
                                            <p><strong>Peralatan Usaha:</strong> {produk.financial.peralatan_usaha}</p>
                                            <p><strong>Kendaraan:</strong> {produk.financial.kendaraan}</p>
                                            <p><strong>ATV Tetap Lainnya:</strong> {produk.financial.atv_tetap_lainnya}</p>
                                            <p><strong>Sub ATV Tetap:</strong> {produk.financial.sub_atv_tetap}</p>
                                            <p><strong>Jumlah ATV:</strong> {produk.financial.jumlah_atv}</p>
                                            <p><strong>Tot BDP Jangka Pendek:</strong> {produk.financial.tot_bdp_jangka_pendek}</p>
                                            <p><strong>IDR Jangka Pendek:</strong> {produk.financial.idr_jangka_pendek}</p>
                                            <p><strong>Jangka Pendek:</strong> {produk.financial.jangka_pendek}</p>
                                            <p><strong>Tot BDP Jangka Panjang:</strong> {produk.financial.tot_bdp_jangka_panjang}</p>
                                            <p><strong>IDR Jangka Panjang:</strong> {produk.financial.idr_jangka_panjang}</p>
                                            <p><strong>Jangka Panjang:</strong> {produk.financial.jangka_panjang}</p>
                                            <p><strong>Sub Jumlah Hutang:</strong> {produk.financial.sub_jumlah_hutang}</p>
                                            <p><strong>Modal Sendiri:</strong> {produk.financial.modal_sendiri}</p>
                                            <p><strong>Laba:</strong> {produk.financial.laba}</p>
                                            <p><strong>Sub Jumlah Modal:</strong> {produk.financial.sub_jumlah_modal}</p>
                                            <p><strong>Jumlah Passiva:</strong> {produk.financial.jumlah_passiva}</p>
                                            <p><strong>Sub Jumlah Hutang:</strong> {produk.financial.sub_jumlah_hutang}</p>
                                        </Panel>
                                    ) : (
                                        <p>Tidak ada data Financial.</p>
                                    )}
                                </TabPanel>
                                <TabPanel header="Survey">
                                    {produk.survey && produk.survey.length > 0 ? (
                                        <Panel header={header(<FileText />, "Survey")}>
                                            {produk.survey.map((survey: any) => (
                                                <div key={survey.id} className="flex">
                                                    <div className="flex flex-column gap-2 w-3">
                                                        <InfoItem label="Judul" value={survey.Keterangan} />
                                                    </div>
                                                    <div className="flex flex-column gap-2">
                                                        <InfoItem label="Pilihan" value={survey.Pilihan} />
                                                    </div>
                                                </div>
                                            ))}
                                        </Panel>
                                    ) : (
                                        <p>Tidak ada data Survey.</p>
                                    )}
                                </TabPanel>
                                <TabPanel header="Aspek Form">
                                    {produk.aspek_form && produk.aspek_form.length > 0 ? (
                                        <Panel header={header(<FileText />, "Aspek Form")}>
                                            <h4>Aspek Form</h4>
                                            {produk.aspek_form.map((aspekForm: any) => (
                                                <div key={aspekForm.id} className="flex" >
                                                    <div className="flex flex-column gap-2 w-3">
                                                        <InfoItem label="Aspek" value={aspekForm.Keterangan} />
                                                    </div>
                                                    <div className="flex flex-column gap-2">
                                                        <InfoItem label="Jawaban" value={aspekForm.jawaban} />
                                                    </div>
                                                </div>
                                            ))}
                                        </Panel>
                                    ) : (
                                        <p>Tidak ada data Aspek Form.</p>
                                    )}
                                </TabPanel>
                                <TabPanel header="Lima C">
                                    {produk.lima_c ? (
                                        <Panel header={header(<FileText />, "Lima C")}>
                                            <InfoItem label="No Pengajuan" value={produk.lima_c.no_pengajuan} />
                                            <InfoItem label="Characters" value={produk.lima_c.characters} />
                                            <InfoItem label="Capacity" value={produk.lima_c.capacity} />
                                            <InfoItem label="Capital" value={produk.lima_c.capital} />
                                            <InfoItem label="Collateral" value={produk.lima_c.collateral} />
                                            <InfoItem label="Conditions" value={produk.lima_c.conditions} />
                                        </Panel>
                                    ) : (
                                        <p>Tidak ada data Lima C.</p>
                                    )}
                                </TabPanel>
                            </TabView>
                        </div>
                    ))}
                </TabPanel>
            </TabView>
        </div >
    );
};

export default DetailPemohon;

