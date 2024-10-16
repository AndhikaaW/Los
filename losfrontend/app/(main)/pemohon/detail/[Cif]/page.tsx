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
    const [provincesUsaha, setProvincesUsaha] = useState<Location[]>([]);
    const [regenciesUsaha, setRegenciesUsaha] = useState<Location[]>([]);
    const [districtsUsaha, setDistrictsUsaha] = useState<Location[]>([]);
    const [villagesUsaha, setVillagesUsaha] = useState<Location[]>([]);
    const userStatus = JSON.parse(localStorage.getItem('user-info') || '{}').status;
    const params = useParams();
    const Cif = params?.Cif;

    useEffect(() => {
        if (Cif) {
            fetchPemohon(Cif);
        }
    }, [Cif]);

    const formatDate = (dateString: any) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${day}-${month}-${year}`;
    };

    const fetchPemohon = async (Cif: string) => {
        try {
            const response = await axios.get(API_ENDPOINTS.GETPEMOHONBYCIF(Cif));
            const formattedData = {
                ...response.data,
                TglLahir: formatDate(response.data.TglLahir),
                ktp_berlaku: formatDate(response.data.ktp_berlaku),
                tanggal_mulai_usaha: formatDate(response.data.tanggal_mulai_usaha),
                masa_laku: formatDate(response.data.masa_laku),
                produk: response.data.produk.map((item: any) => ({
                    ...item,
                    tanggal_aplikasi: formatDate(item.tanggal_aplikasi),
                    tanggal_permohonan: formatDate(item.tanggal_permohonan),
                    jaminan: item.jaminan ? {
                        ...item.jaminan,
                        tahunPembuatan: formatDate(item.jaminan.tahunPembuatan)
                    } : null
                }))
            };
            setPemohon(formattedData);
            console.log(formattedData);
        } catch (error) {
            console.error('Error mengambil data pemohon:', error);
        }
    };

    const fetchProvinces = async () => {
        try {
            const response = await fetch('https://andhikaaw.github.io/api-wilayah-indonesia/api/provinces.json');
            const data = await response.json();
            setProvinces(data);
            setProvincesUsaha(data);
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

    const fetchRegenciesUsaha = async (provinceId: string) => {
        try {
            const response = await fetch(`https://andhikaaw.github.io/api-wilayah-indonesia/api/regencies/${provinceId}.json`);
            const data = await response.json();
            setRegenciesUsaha(data);
        } catch (error) {
            console.error('Error fetching regencies usaha:', error);
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

    const fetchDistrictsUsaha = async (regencyId: string) => {
        try {
            const response = await fetch(`https://andhikaaw.github.io/api-wilayah-indonesia/api/districts/${regencyId}.json`);
            const data = await response.json();
            setDistrictsUsaha(data);
        } catch (error) {
            console.error('Error fetching districts usaha:', error);
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

    const fetchVillagesUsaha = async (districtId: string) => {
        try {
            const response = await fetch(`https://andhikaaw.github.io/api-wilayah-indonesia/api/villages/${districtId}.json`);
            const data = await response.json();
            setVillagesUsaha(data);
        } catch (error) {
            console.error('Error fetching villages usaha:', error);
        }
    };

    useEffect(() => {
        fetchProvinces();
    }, []);

    useEffect(() => {
        if (pemohon) {
            fetchRegencies(pemohon.provinsi);
            fetchRegenciesUsaha(pemohon.provinsi_usaha);
        }
    }, [pemohon]);

    useEffect(() => {
        if (pemohon && regencies.length > 0) {
            fetchDistricts(pemohon.kota);
        }
    }, [pemohon, regencies]);

    useEffect(() => {
        if (pemohon && regenciesUsaha.length > 0) {
            fetchDistrictsUsaha(pemohon.kota_usaha);
        }
    }, [pemohon, regenciesUsaha]);

    useEffect(() => {
        if (pemohon && districts.length > 0) {
            fetchVillages(pemohon.kecamatan);
        }
    }, [pemohon, districts]);

    useEffect(() => {
        if (pemohon && districtsUsaha.length > 0) {
            fetchVillagesUsaha(pemohon.kecamatan_usaha);
        }
    }, [pemohon, districtsUsaha]);


    const getLocationName = (id: string, locations: Location[]) => {
        const location = locations.find(loc => loc.id === id);
        return location ? location.name : 'Data tidak ditemukan';
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
                                    <InfoItem label="Jenis Kelamin" value={pemohon.Kelamin === 'L' ? 'Laki-laki' : 'Perempuan'} />
                                    <InfoItem label="Status Perkawinan" value={pemohon.StatusPerkawinan} />
                                    <InfoItem label="KTP" value={pemohon.KTP} />
                                    <InfoItem label="Nama Ibu Kandung" value={pemohon.nama_ibu_kandung} />
                                    <InfoItem label="Jumlah Tanggungan" value={pemohon.jumlah_tanggungan + ' Orang'} />
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
                                    <InfoItem label="Lama Tinggal" value={pemohon.lama_tinggal + ' Tahun'} />
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
                                    <InfoItem label="Jumlah Karyawan" value={pemohon.jumlah_karyawan + ' Orang'} />
                                    <InfoItem label="Jarak Lokasi Usaha" value={pemohon.jarak_lokasi_usaha + ' Km'} />
                                    <InfoItem label="Masa Laku" value={pemohon.masa_laku} />
                                    <InfoItem label="Alamat Usaha" value={pemohon.alamat_usaha} />
                                    <InfoItem label="Kode Pos Usaha" value={pemohon.kode_pos_usaha} />
                                    <InfoItem label="Provinsi Usaha" value={getLocationName(pemohon.provinsi_usaha, provincesUsaha)} />
                                    <InfoItem label="Kota Usaha" value={getLocationName(pemohon.kota_usaha, regenciesUsaha)} />
                                    <InfoItem label="Kecamatan Usaha" value={getLocationName(pemohon.kecamatan_usaha, districtsUsaha)} />
                                    <InfoItem label="Kelurahan Usaha" value={getLocationName(pemohon.kelurahan_usaha, villagesUsaha)} />
                                </Panel>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel header="Pengajuan">
                    {pemohon.produk.map((produk: any) => (
                        <div key={produk.id} >
                            <h4>Detail Pengajuan {produk?.no_pengajuan}</h4>
                            <div className="p-4 bg-gray-100 border-round-lg flex justify-content-between">
                                <div className="flex gap-6">
                                    <div>
                                        <div className="mb-4">
                                            <strong>No Pengajuan :</strong> {produk?.no_pengajuan}
                                        </div>
                                        <div className="mb-4">
                                            <strong>CIF :</strong> {produk?.Cif}
                                        </div>
                                        <div className="mb-4">
                                            <strong>Tanggal Aplikasi :</strong> {produk?.tanggal_aplikasi}
                                        </div>
                                        <div className="mb-4">
                                            <strong>Tanggal Permohonan :</strong> {produk?.tanggal_permohonan}
                                        </div>
                                        <div className="mb-4">
                                            <strong>Pengajuan :</strong> {produk?.pengajuan}
                                        </div>
                                        <div className="mb-4">
                                            <strong>Bidang Usaha :</strong> {produk?.ref_bidang_usaha?.Keterangan}
                                        </div>
                                        <div className="mb-4">
                                            <strong>Sifat Kredit :</strong> {produk?.ref_sifat_kredit?.Keterangan}
                                        </div>
                                        <div className="mb-4">
                                            <strong>Plafon Kredit :</strong> {produk?.plafon_kredit}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="mb-4">
                                            <strong>Suku Bunga :</strong> {produk?.suku_bunga} %
                                        </div>
                                        <div className="mb-4">
                                            <strong>Jangka Waktu :</strong> {produk?.jangka_waktu} Bulan
                                        </div>
                                        <div className="mb-4">
                                            <strong>No Aplikasi Sebelumnya :</strong> {produk?.no_aplikasi_sebelumnya}
                                        </div>
                                        <div className="mb-4">
                                            <strong>Jenis Permohonan :</strong> {produk?.ref_jenis_permohonan?.Keterangan}
                                        </div>
                                        <div className="mb-4">
                                            <strong>Jenis Angsuran :</strong> {produk?.ref_jenis_angsuran?.Keterangan}
                                        </div>
                                        <div className="mb-4">
                                            <strong>Tujuan Penggunaan :</strong> {produk?.tujuan_penggunaan}
                                        </div>
                                        <div className="mb-4">
                                            <strong>Detail Tujuan Penggunaan :</strong> {produk?.detail_tujuan_penggunaan}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-content-end '>
                                    {(userStatus === 1 || userStatus === 3) && produk.status === 0 ? (
                                        <Link href={`/pengajuan/formpengajuan/${produk.no_pengajuan}`}>
                                            <Button icon="pi pi-pencil" style={{ border: '1', color: '#000000', borderColor: '#000000', transition: 'transform 0.3s ease-in-out' }} className='bg-transparent hover:scale-110 ' onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} />
                                        </Link>
                                    ) : (
                                        <span></span>
                                    )}
                                    {/* {produk.status !== 0 ? (
                                        <span>Telah Diajukan</span>
                                    ) : (
                                        <span></span>
                                    )} */}
                                </div>
                            </div>
                            <div className='flex justify-content-end mt-3'>
                                <Link href={`/admin/debitur/pengajuandebitur/${produk.Cif}/analisakredit/${produk.no_pengajuan}`}>
                                    <Button icon="pi pi-pencil" style={{ border: '1', color: '#333' }} className='bg-blue-200' />
                                </Link>
                                <div>
                                    <label htmlFor="">ini tombol edit analisa kredit</label>
                                </div>
                            </div>
                            <TabView>
                                <TabPanel header="Jaminan">
                                    {produk?.jaminan ? (
                                        <Panel header={header(<FileText />, "Jaminan")}>
                                            <div className='flex col-12 '>
                                                <div className='col-6'>
                                                    <InfoItem label="Jenis Agunan" value={produk.jaminan.ref_jenis_agunan.Keterangan} />
                                                    <InfoItem label="Merek" value={produk.jaminan.merek} />
                                                    <InfoItem label="Bukti Hak Milik" value={produk.jaminan.ref_hak_milik.Keterangan} />
                                                    <InfoItem label="Nama Pemilik Jaminan" value={produk.jaminan.namaPemilikJaminan} />
                                                    <InfoItem label="Lokasi Agunan" value={produk.jaminan.lokasiAgunan} />
                                                    <InfoItem label="Nilai Transaksi" value={formatToRupiah(produk.jaminan.nilaiTransaksi)} />
                                                </div>
                                                <div className='col-6'>
                                                    <InfoItem label="Jenis Pengikatan" value={produk.jaminan.ref_jenis_pengikatan.Keterangan} />
                                                    <InfoItem label="Tipe" value={produk.jaminan.ref_tipe.Keterangan} />
                                                    <InfoItem label="Tahun Pembuatan" value={produk.jaminan.tahunPembuatan} />
                                                    <InfoItem label="No Agunan" value={produk.jaminan.noAgunan} />
                                                    <InfoItem label="Hubungan dengan Pemilik" value={produk.jaminan.ref_hub_pemilik.Keterangan} />
                                                    <InfoItem label="Informasi Tambahan" value={produk.jaminan.informasiTambahan} />
                                                    <InfoItem label="Asuransi" value={produk.jaminan.asuransi} />
                                                </div>
                                            </div>
                                        </Panel>
                                    ) : (
                                        <p>Tidak ada data Jaminan.</p>
                                    )}
                                </TabPanel>
                                <TabPanel header="Financial">
                                    {produk?.financial ? (
                                        <Panel header={header(<FileText />, "Financial")}>
                                            <div className='flex col-12'>
                                                <div className='col-4'>
                                                    <InfoItem label="Omset Ramai" value={formatToRupiah(produk.financial.oms_ramai)} />
                                                    <InfoItem label="Omset Normal" value={formatToRupiah(produk.financial.oms_normal)} />
                                                    <InfoItem label="Omset Sepi" value={formatToRupiah(produk.financial.oms_sepi)} />
                                                    <InfoItem label="Harga Pokok Jual" value={formatToRupiah(produk.financial.hrg_pokok_jual)} />
                                                    <InfoItem label="BTK Tidak Langsung" value={formatToRupiah(produk.financial.btk_tdklangsung)} />
                                                    <InfoItem label="OHC" value={formatToRupiah(produk.financial.ohc)} />
                                                    <InfoItem label="Biaya Usaha lainnya" value={formatToRupiah(produk.financial.b_usahalainnya)} />
                                                    <InfoItem label="Biaya Rumahtangga" value={formatToRupiah(produk.financial.b_rumahtangga)} />
                                                    <InfoItem label="Biaya Sekolah" value={formatToRupiah(produk.financial.b_sekolah)} />
                                                    <InfoItem label="Biaya PLN PDAM" value={formatToRupiah(produk.financial.b_pln_pdam)} />
                                                    <InfoItem label="Biaya Transport Komunikasi" value={formatToRupiah(produk.financial.b_transport_komunikasi)} />
                                                    <InfoItem label="Biaya Lain Lain" value={formatToRupiah(produk.financial.b_lain_lain)} />
                                                    <InfoItem label="Pendapatan Lainnya" value={formatToRupiah(produk.financial.p_lainnya)} />
                                                    <InfoItem label="Biaya Lainnya" value={formatToRupiah(produk.financial.b_Lainnya)} />
                                                    <InfoItem label="Bukti Pendapatan" value={produk.financial.bukti_pendapatan} />
                                                </div>
                                                <div className='col-4'>
                                                    <InfoItem label="Bukti Biaya" value={produk.financial.bukti_biaya} />
                                                    <InfoItem label="Bank Non-Bank" value={formatToRupiah(produk.financial.bank_nonbank)} />
                                                    <InfoItem label="Koperasi" value={formatToRupiah(produk.financial.koperasi)} />
                                                    <InfoItem label="Lain-Lain" value={formatToRupiah(produk.financial.lainLain)} />
                                                    <InfoItem label="Angsuran Baru" value={formatToRupiah(produk.financial.angsuran_baru)} />
                                                    <InfoItem label="Kas" value={formatToRupiah(produk.financial.kas)} />
                                                    <InfoItem label="Bank" value={formatToRupiah(produk.financial.bank)} />
                                                    <InfoItem label="Piutang" value={formatToRupiah(produk.financial.piutang)} />
                                                    <InfoItem label="Persediaan Barang" value={formatToRupiah(produk.financial.persediaan_barang)} />
                                                    <InfoItem label="Aktiva Lancar Lainnya" value={formatToRupiah(produk.financial.atv_lancar_lainnya)} />
                                                    <InfoItem label="Sub Aktiva Lancar" value={formatToRupiah(produk.financial.sub_atv_lancar)} />
                                                    <InfoItem label="Tanah Bangunan" value={formatToRupiah(produk.financial.tanah_bangunan)} />
                                                    <InfoItem label="Peralatan Usaha" value={formatToRupiah(produk.financial.peralatan_usaha)} />
                                                    <InfoItem label="Kendaraan" value={formatToRupiah(produk.financial.kendaraan)} />
                                                    <InfoItem label="Aktiva Tetap Lainnya" value={formatToRupiah(produk.financial.atv_tetap_lainnya)} />
                                                </div>
                                                <div className='col-4'>
                                                    <InfoItem label="Sub Aktiva Tetap" value={formatToRupiah(produk.financial.sub_atv_tetap)} />
                                                    <InfoItem label="Jumlah Aktiva" value={formatToRupiah(produk.financial.jumlah_atv)} />
                                                    <InfoItem label="Total BDP Jangka Pendek" value={formatToRupiah(produk.financial.tot_bdp_jangka_pendek)} />
                                                    <InfoItem label="IDR Jangka Pendek" value={formatToRupiah(produk.financial.idr_jangka_pendek)} />
                                                    <InfoItem label="Jangka Pendek" value={formatToRupiah(produk.financial.jangka_pendek)} />
                                                    <InfoItem label="Total BDP Jangka Panjang" value={formatToRupiah(produk.financial.tot_bdp_jangka_panjang)} />
                                                    <InfoItem label="IDR Jangka Panjang" value={formatToRupiah(produk.financial.idr_jangka_panjang)} />
                                                    <InfoItem label="Jangka Panjang" value={formatToRupiah(produk.financial.jangka_panjang)} />
                                                    <InfoItem label="Sub Jumlah Hutang" value={formatToRupiah(produk.financial.sub_jumlah_hutang)} />
                                                    <InfoItem label="Modal Sendiri" value={formatToRupiah(produk.financial.modal_sendiri)} />
                                                    <InfoItem label="Laba" value={formatToRupiah(produk.financial.laba)} />
                                                    <InfoItem label="Sub Jumlah Modal" value={formatToRupiah(produk.financial.sub_jumlah_modal)} />
                                                    <InfoItem label="Jumlah Passiva" value={formatToRupiah(produk.financial.jumlah_passiva)} />
                                                </div>
                                            </div>
                                        </Panel>
                                    ) : (
                                        <p>Tidak ada data Financial.</p>
                                    )}
                                </TabPanel>
                                <TabPanel header="Survey">
                                    {produk?.survey.length > 0 ? (
                                        <Panel header={header(<FileText />, "Survey")}>
                                            {produk.survey.map((survey: any, index: any) => (
                                                <InfoItem key={index} label={survey.Keterangan} value={survey.Pilihan} />
                                            ))}
                                        </Panel>
                                    ) : (
                                        <p>Tidak ada data Survey.</p>
                                    )}
                                </TabPanel>
                                <TabPanel header="Aspek Form">
                                    {produk?.aspek_form.length > 0 ? (
                                        <Panel header={header(<FileText />, "Aspek Form")}>
                                            {produk.aspek_form.map((aspekForm: any, index: any) => (
                                                <InfoItem key={index} label={aspekForm.Keterangan} value={aspekForm.jawaban} />
                                            ))}
                                        </Panel>
                                    ) : (
                                        <p>Tidak ada data Aspek Form.</p>
                                    )}
                                </TabPanel>
                                <TabPanel header="Lima C">
                                    {produk?.lima_c ? (
                                        <Panel header={header(<FileText />, "Lima C")}>
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

